---
title: "How to change the timezone on Ubuntu"
date: 2019-12-04
sidebar: 'auto'
tags:
 - Ubuntu
 - Linux
categories:
 - Tech
publish: True
meta:
  - property: og:description
    content: There's two way to changing the timezone...
  - property: og:image
    content: https://i.imgur.com/RmCgJUA.jpg
---

![](https://i.imgur.com/RmCgJUA.jpg)

There's two way to changing the timezone, using the GUI by open the system settings or using termial.

Here's the way to changing timezone by using terminal on Ubuntu:

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

## References:
- [how to set or change timezone in linux](https://linuxize.com/post/how-to-set-or-change-timezone-in-linux/)
