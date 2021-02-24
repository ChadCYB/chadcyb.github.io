---
title: "LibreNMS installation on CentOS"
date: 2020-07-18
sidebar: 'auto'
tags:
 - monitoring
 - LibreNMS
 - install
 - CentOS
categories:
 - Tech
publish: True
meta:
  - property: og:description
    content: LibreNMS is an autodiscovering PHP/MySQL/SNMP based network monitoring which includes support for a wide range of network hardware and operating systems.
  - property: og:image
    content: https://i.imgur.com/BERoqeN.jpg
---

![](https://i.imgur.com/BERoqeN.jpg)

LibreNMS is an autodiscovering PHP/MySQL/SNMP based network monitoring which includes support for a wide range of network hardware and operating systems.

## Install Nginx
``` bash
dnf -y install epel-release

## Install php composer
dnf -y install nginx wget unzip

## Install other required packages
dnf -y install bash-completion cronie fping git ImageMagick mariadb-server mtr net-snmp net-snmp-utils nginx nmap python3 python3-PyMySQL python3-redis python3-memcached python3-pip rrdtool unzip
```

## Install php7.4
``` bash
dnf -y install dnf-utils http://rpms.remirepo.net/enterprise/remi-release-8.rpm

dnf module reset php
dnf module enable php:remi-7.4

## Install php
dnf -y install php php-fpm php-cli php-common php-curl php-gd php-json php-mbstring php-process php-snmp php-xml php-zip php-mysqlnd
## Install php composer
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
sudo php composer-setup.php --install-dir=/usr/local/bin --filename=composer
# Check php version
php -v
```

## Install LibreNMS
``` bash
chown -R librenms:librenms /opt/librenms
chmod 771 /opt/librenms
setfacl -d -m g::rwx /opt/librenms/rrd /opt/librenms/logs /opt/librenms/bootstrap/cache/ /opt/librenms/storage/
setfacl -R -m g::rwx /opt/librenms/rrd /opt/librenms/logs /opt/librenms/bootstrap/cache/ /opt/librenms/storage/

su - librenms
./scripts/composer_wrapper.php install --no-dev
exit

## set timezone
vi /etc/php.ini
>> date.timezone = Asia/Taipei

## set the system timezone
timedatectl set-timezone Asia/Taipei
```

### Configure MariaDB
``` bash
vi /etc/my.cnf.d/mariadb-server.cnf
### Within the [mysqld] section add:
>> innodb_file_per_table=1
>> lower_case_table_names=0

systemctl enable mariadb
systemctl restart mariadb

## create db user and password
mysql -u root

CREATE DATABASE librenms CHARACTER SET utf8 COLLATE utf8_unicode_ci;
CREATE USER 'librenms'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON librenms.* TO 'librenms'@'localhost';
FLUSH PRIVILEGES;
exit
```

### Configure PHP-FPM
``` bash
cp /etc/php-fpm.d/www.conf /etc/php-fpm.d/librenms.conf
vi /etc/php-fpm.d/librenms.conf
### Change "www" to "librenms"
>> [librenms]
### Change user and group to "librenms"
>> user = librenms
>> group = librenms
### Change listen to a unique name
>> listen = /run/php-fpm-librenms.sock
```
### Configure Web Server
```bash
vi /etc/nginx/conf.d/librenms.conf
### Add the following config, edit server_name as required:
server {
 listen      80;
 server_name librenms.example.com;
 root        /opt/librenms/html;
 index       index.php;

 charset utf-8;
 gzip on;
 gzip_types text/css application/javascript text/javascript application/x-javascript image/svg+xml text/plain text/xsd text/xsl text/xml image/x-icon;
 location / {
  try_files $uri $uri/ /index.php?$query_string;
 }
 location ~ [^/]\.php(/|$) {
  fastcgi_pass unix:/run/php-fpm-librenms.sock;
  fastcgi_split_path_info ^(.+\.php)(/.+)$;
  include fastcgi.conf;
 }
 location ~ /\.(?!well-known).* {
  deny all;
 }
}

## Enable services
systemctl enable --now nginx
systemctl enable --now php-fpm
```

### SELinux
```bash
dnf -y install policycoreutils-python-utils

semanage fcontext -a -t httpd_sys_content_t '/opt/librenms/html(/.*)?'
semanage fcontext -a -t httpd_sys_rw_content_t '/opt/librenms/(logs|rrd|storage)(/.*)?'
restorecon -RFvv /opt/librenms
setsebool -P httpd_can_sendmail=1
setsebool -P httpd_execmem 1
chcon -t httpd_sys_rw_content_t /opt/librenms/.env
```

### Allow fping
```bash
cat <<EOF >http_fping.tt
module http_fping 1.0;

require {
type httpd_t;
class capability net_raw;
class rawip_socket { getopt create setopt write read };
}

#============= httpd_t ==============
allow httpd_t self:capability net_raw;
allow httpd_t self:rawip_socket { getopt create setopt write read };
EOF

checkmodule -M -m -o http_fping.mod http_fping.tt
semodule_package -o http_fping.pp -m http_fping.mod
semodule -i http_fping.pp

audit2why < /var/log/audit/audit.log
```
### Allow access through firewall
```bash
firewall-cmd --zone public --add-service http --add-service https
firewall-cmd --permanent --zone public --add-service http --add-service https
```
### Enable lnms command completion
```bash
ln -s /opt/librenms/lnms /usr/local/bin/lnms
cp /opt/librenms/misc/lnms-completion.bash /etc/bash_completion.d/
```
### Configure snmpd
```bash
cp /opt/librenms/snmpd.conf.example /etc/snmp/snmpd.conf

curl -o /usr/bin/distro https://raw.githubusercontent.com/librenms/librenms-agent/master/snmp/distro
chmod +x /usr/bin/distro
systemctl enable snmpd
systemctl restart snmpd
```
### Cron job
```bash
cp /opt/librenms/librenms.nonroot.cron /etc/cron.d/librenms
```
### Copy logrotate config
```bash
cp /opt/librenms/misc/librenms.logrotate /etc/logrotate.d/librenms
```

## Web Installer
Go to http://yourip/install
```bash
chown librenms:librenms /opt/librenms/config.php
```

## References
- [How to Install PHP 7.4, 7.3 & 7.2 on CentOS 8](https://tecadmin.net/install-php-centos8/)
- [How to Install and Use PHP Composer on CentOS 8](https://linuxize.com/post/how-to-install-and-use-composer-on-centos-8/)
- [How to install LibreNMS](https://docs.librenms.org/Installation/Install-LibreNMS/)
- [LibreNMS Agent Steup](https://docs.librenms.org/Extensions/Agent-Setup/)
- [LibreNMS各項服務的-agent-服務](https://wiki.freedomstu.com/books/%E9%96%8B%E6%BA%90%E8%BB%9F%E9%AB%94%E5%AE%89%E8%A3%9D%E6%B5%81%E7%A8%8B/page/librenms-%E5%90%84%E6%9C%8D%E5%8B%99%E7%9A%84-agent-%E6%9C%8D%E5%8B%99)
- [Check MK agent](https://www.ichiayi.com/wiki/tech/librenms/check_mk)
- [Enabling SNMP on Linux Hosts](https://sourcedaddy.com/networking/enabling-snmp-linux-hosts.html)
- [Intsall and configure LibreNMS and nginx on centos8](https://www.techsupportpk.com/2019/12/how-to-install-and-configure-librenms-nginx-centos-rhel8.html)
- [How to install python on centos8](https://linuxize.com/post/how-to-install-python-on-centos-8/)
