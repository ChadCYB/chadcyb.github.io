---
title: "How to upgrade or downgrade the kernel version"
date: 2021-03-08
sidebar: 'auto'
tags:
 - kernel
 - grub
 - server-management
categories:
 - Tech
publish: True
meta:
  - property: og:description
    content: This article will teach you how to change the kernel version on ubuntu.
  - property: og:image
    content: https://i.imgur.com/vQx0NaS.jpg
---

![](https://i.imgur.com/vQx0NaS.jpg)

Recent upgrades the Ubuntu 20.04 kernel failed badly on my server.
This article will teach you how to change the kernel version on ubuntu.

## Get the grub meun
``` bash
grep menuentry /boot/grub/grub.cfg

> 'Ubuntu, with Linux 5.4.0-47-generic'
```
 
## Change the grub config
Chaging the GRUB_DEFAULT value from 0 to the kernel you want to boot.

``` bash
sudo vi /etc/default/grub

## change this line
GRUB_DEFAULT=0
## to the kernel you want to boot
GRUB_DEFAULT="Advanced options for Ubuntu > Ubuntu, with Linux 5.4.0-47-generic"
```

## Check config file
``` bash
sudo grub-mkconfig -o /boot/grub/grub.cfg

> Sourcing file `/etc/default/grub'
> Sourcing file `/etc/default/grub.d/50-cloudimg-settings.cfg'
> Sourcing file `/etc/default/grub.d/init-select.cfg'
> Generating grub configuration file ...
> Found linux image: /boot/vmlinuz-5.4.0-47-generic
> Found initrd image: /boot/initrd.img-5.4.0-47-generic
> done
```
- If there is an error, check whether `GRUB_DEFAULT` has replaced the Linux kernel version and not in the secondary option. 
- If it is, you need to remove the previous part of `"Ubuntu advanced options">` and execute again.

``` bash
sudo vi /etc/default/grub
GRUB_DEFAULT="Ubuntu, with Linux 5.4.0-47-generic"
```
- If there's no error, then reboot the system.
``` bash
sudo reboot
```
After reboot using `uname -r` check the kernel verison is change

## Install new kernel
``` bash
## list installable kernel version
sudo apt-cache search linux-image | grep generic

## install kernel
sudo apt-get install linux-image-5.4.0-48-generic
```

## Remove old kernel
``` bash
## sudo apt-get remove(or purge) linux-image-5.4.0-48-generic
sudo apt-get purge linux-image-5.4.0-48-generic
```

## References
- [https://zhengdao.github.io/2018/10/09/switch-ubuntu-linux-kernel/](https://zhengdao.github.io/2018/10/09/switch-ubuntu-linux-kernel/)
