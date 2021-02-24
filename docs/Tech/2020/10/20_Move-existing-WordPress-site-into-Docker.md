---
title: "Move existing WordPress site into Docker"
date: 2020-10-20
sidebar: 'auto'
tags:
 - wordpress
 - docker
categories:
 - Tech
publish: True
meta:
  - property: og:description
    content: This note is about how to dockerize the existing wordpress.
  - property: og:image
    content: https://i.imgur.com/98MBn2L.jpg
---

![](https://i.imgur.com/98MBn2L.jpg)

This note is about how to dockerize the existing wordpress.

## Backup the entire website
1. Compress the entire website folder
``` bash
cd ~
sudo cp -r /var/www/html/wordpress ~/wordpress_bk
chown user:user -R ~/wordpress_bk

# compress folder
zip wordpress_bk.zip ~/wordpress_bk
```
2. Export the database
``` bash
## mysqldump -u [username] -p [database-you-want-to-dump] > [path-to-place-data-dump]
mysqldump -u root -p wp_db > db_dump.sql
zip db_dump.sql.zip db_dump.sql
```
3. Edit the config and run docker-compose
- [wordpress dockerize](https://hackmd.io/zTHX72E8Qv-V1eFYgWzB3g)
```
db_prefix = wp_V1QHHH_
db_name = wpdb
db_user = wpdbuser
db_password = DT_4Cgp+tcsLfXHBwp
```
4. Put the compress file back
``` bash
unzip wordpress_bk.zip -d /path/to/unzip
mv wordpress_bk /path/to/docker-compose/data_wordpress
## change owner to www-data
sudo chown -R www-data:www-data data_wordpress
```
5. Import sql file to database
open phpmyadmin -> create database -> upload the `db_dump.zip` file to import data


## Problem slove
### keep redirecting the url to localhost
1. edit nginx config
add these line below
``` nginx
## /etc/nginx/site-available/www.example.com
proxy_redirect off;
proxy_set_header Host $http_host;
```
here's the full nignx config
``` nginx
server {
    listen 80;
    server_name www.example.com example.com;
    return 301 https://$host$request_uri;
}

server {
    # SSL configuration
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    ssl_certificate         /etc/ssl/example.com/cert.pem;
    ssl_certificate_key     /etc/ssl/example.com/key.pem;
    #ssl_client_certificate  /etc/ssl/cloudflare.crt;
    #ssl_verify_client on;

    server_name www.example.com example.com;

    location / {
        add_header X-Frame-Options SAMEORIGIN;
        proxy_set_header Host $http_host;
        proxy_redirect off;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_hide_header X-Frame-Options;

        proxy_pass http://localhost:18001;
    }
}

```
2. edit `wp-config.php`, add these config at the top of the file
``` php
<?php

define( 'WP_HOME', 'https://www.example.com/' );
define( 'WP_SITEURL', 'https://www.example.com/' );
/* SSL Settings */
define('FORCE_SSL_ADMIN', true);

/* Turn HTTPS 'on' if HTTP_X_FORWARDED_PROTO matches 'https' */
if (strpos($_SERVER['HTTP_X_FORWARDED_PROTO'], 'https') !== false) {
            $_SERVER['HTTPS'] = 'on';
}

/**
 * The base configuration for WordPress

```
## References
- [Why does Nginx keep redirecting me to localhost?](https://stackoverflow.com/questions/32712443/why-does-nginx-keep-redirecting-me-to-localhost)
