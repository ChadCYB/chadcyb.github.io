---
title: "How to change the hostname on Ubuntu"
date: 2020-06-17
sidebar: 'auto'
tags:
 - Ubuntu
 - server-management
categories:
 - Tech
publish: True
meta:
  - property: og:description
    content: Open the terminal application and type the following commands to set....
  - property: og:image
    content: https://i.imgur.com/kE9cUUN.jpg
---

Open the terminal application and type the following commands to set or change hostname or computer name on Ubuntu Linux.

``` bash
## Delete the old name and setup new name in /etc/hostname
sudo vi /etc/hostname

## Replace any occurrence of the existing computer name with your new one.
sudo vi /etc/hosts

## Reboot to changes take effect 
sudo reboot

## Check it
hostname
```
## References
- [https://www.cyberciti.biz/faq/ubuntu-change-hostname-command/](https://www.cyberciti.biz/faq/ubuntu-change-hostname-command/)
