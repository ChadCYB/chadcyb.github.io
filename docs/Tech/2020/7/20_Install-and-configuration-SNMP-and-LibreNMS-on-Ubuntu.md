---
title: "Install and configuration SNMP and LibreNMS on Ubuntu"
date: 2020-07-20
sidebar: 'auto'
tags:
 - monitoring
 - LibreNMS
 - SNMP
 - install
 - Ubuntu
categories:
 - Tech
publish: True
meta:
  - property: og:description
    content: This article will show how to install LibreNMS agent and configuration SNMP.
  - property: og:image
    content: https://i.imgur.com/LLw1FGd.jpg
---

This article will show how to install LibreNMS agent and configuration SNMP on ubuntu.

## Install SNMP
``` bash
apt install snmpd -y
```

## Install LibreNMS agent
``` bash
cd /opt/
git clone https://github.com/librenms/librenms-agent.git
cd librenms-agent

cp check_mk_agent /usr/bin/check_mk_agent
chmod +x /usr/bin/check_mk_agent

cp check_mk@.service check_mk.socket /etc/systemd/system
mkdir -p /usr/lib/check_mk_agent/plugins /usr/lib/check_mk_agent/local

systemctl enable check_mk.socket && systemctl start check_mk.socket
```
1. Login to the LibreNMS web interface and edit the device you want to monitor.
2. Under the modules section, ensure that unix-agent is enabled.
3. Copy each of the scripts from `agent-local/` into `/usr/lib/check_mk_agent/local` that you require to be graphed. You can find detail setup instructions for specific applications above.
4. Make each one executable that you want to use with:
``` bash
chmod +x /usr/lib/check_mk_agent/local/$script
```

## Configure snmp
``` bash
cd /etc/snmp/
cat <<EOF >snmpd.conf
com2sec readonly  default         librenms

group MyROGroup v2c        readonly
view all    included  .1                               80
access MyROGroup ""      any       noauth    exact  all    none   none

syslocation Rack, Room, Building, City, TW [22.604594, 120.299097]
syscontact Admin <admin@example.com>

#Distro Detection
extend .1.3.6.1.4.1.2021.7890.1 distro /usr/bin/distro
#Hardware Detection (uncomment to enable)
extend .1.3.6.1.4.1.2021.7890.2 hardware '/bin/cat /sys/devices/virtual/dmi/id/product_name'
extend .1.3.6.1.4.1.2021.7890.3 manufacturer '/bin/cat /sys/devices/virtual/dmi/id/sys_vendor'
extend .1.3.6.1.4.1.2021.7890.4 serial '/bin/cat /sys/devices/virtual/dmi/id/product_serial'
EOF

curl -o /usr/bin/distro https://raw.githubusercontent.com/librenms/librenms-agent/master/snmp/distro
chmod +x /usr/bin/distro

systemctl enable snmpd
systemctl restart snmpd
```

## Troubleshooting: 
### product_serial Permission denied
- Error message: 
``` bash
 /bin/cat: /sys/devices/virtual/dmi/id/product_serial: Permission denied 
```
- Solution: Change the permission of the file.
``` bash
chmod 444 /sys/devices/virtual/dmi/id/product_serial
```

### The server requested authentication method unknown to the clientroot
- Error message: 
``` bash
Error: The server requested authentication method unknown to the clientroot
```
- Solution: login to SQL server and run the command below
``` bash
alter user 'username'@'localhost' identified with mysql_native_password by 'password';

FLUSH PRIVILEGES;
```

## References
- [https://stackoverflow.com/questions/52364415/php-with-mysql-8-0-error-the-server-requested-authentication-method-unknown-to](https://stackoverflow.com/questions/52364415/php-with-mysql-8-0-error-the-server-requested-authentication-method-unknown-to)
