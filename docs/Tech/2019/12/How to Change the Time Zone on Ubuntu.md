---
title: "How to Change the Time Zone on Ubuntu"
date: 2019-12-04
sidebar: 'auto'
tags:
 - Linux
 - Ubuntu
categories:
 - Tech
publish: True
---

![](https://i.imgur.com/RmCgJUA.jpg)
## Change timezone
``` bash
## show current time
timedatectl

## show timezone
ls -l /etc/localtime

## list timezones
timedatectl list-timezones

## sudo timedatectl set-timezone <your_time_zone>
sudo timedatectl set-timezone Asia/Taipei
timedatectl
```
## Reference:
- [how to set or change timezone in linux](https://linuxize.com/post/how-to-set-or-change-timezone-in-linux/)