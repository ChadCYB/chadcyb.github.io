---
title: "Runing Wordpress on Docker"
date: 2020-10-12
sidebar: 'auto'
tags:
 - wordpress
 - docker
categories:
 - Tech
publish: True
meta:
  - property: og:description
    content: You can use Docker Compose to easily run WordPress in an isolated environment built with Docker containers.
  - property: og:image
    content: https://i.imgur.com/t9xGoEx.jpg
---

![](https://i.imgur.com/t9xGoEx.jpg)

You can use Docker Compose to easily run WordPress in an isolated environment built with Docker containers.

``` bash
$ docker-compose up -d

# To Tear Down
$ docker-compose down --volumes
```

## docker-compse.yml
``` bash
version: '3.6'

services:
  db:
    image: mysql:5.7
    restart: unless-stopped
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: wpdb
      MYSQL_USER: wpdbuser
      MYSQL_PASSWORD: wppasswd
      VIRTUAL_HOST: example.com, www.example.com
    volumes:
      - ./data_db:/var/lib/mysql
    networks:
      - wpsite

  phpmyadmin:
    image: phpmyadmin/phpmyadmin
    depends_on:
      - db
    restart: unless-stopped
    ports:
      - 18000:80
    environment:
      PMA_HOST: db
      MYSQL_ROOT_PASSWORD: root
    networks:
      - wpsite

  wordpress:
    image: wordpress:latest
    depends_on:
      - db
    restart: unless-stopped
    ports:
      - 18001:80
    environment:
      WORDPRESS_DB_HOST: db:3306
      WORDPRESS_DB_NAME: wpdb
      WORDPRESS_DB_USER: wpdbuser
      WORDPRESS_DB_PASSWORD: wppasswd
    volumes:
      - ./data_wordpress:/var/www/html
    networks:
      - wpsite
 
networks:
  wpsite:
```

## References
- [Gist - bradtraversy/docker_wordpress.md](https://gist.github.com/bradtraversy/faa8de544c62eef3f31de406982f1d42)
