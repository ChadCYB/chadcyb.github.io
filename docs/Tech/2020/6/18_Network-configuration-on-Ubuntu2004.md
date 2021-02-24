---
title: "Network configuration on Ubuntu20.04"
date: 2020-06-18
sidebar: 'auto'
tags:
 - network
 - Ubuntu
 - server-management
categories:
 - Tech
publish: True
meta:
  - property: og:description
    content: This is a note for how to setup static ip or dhcp thought the terminal on ubuntu 20.04.
  - property: og:image
    content: https://i.imgur.com/85SY2x4.jpg
---

This is a note for how to setup static ip or dhcp thought the terminal on ubuntu 20.04.

``` bash
cd /etc/netplan
sudo vi xxxxx.yaml
##====================
network:
  ethernets:
    enp0s3:
      dhcp4: true
    enp0s8:
      dhcp4: true
    ens33:
      dhcp4: no
      addresses:
      - 192.168.72.140/24
      gateway4: 192.168.72.2
      nameservers:
        addresses: [8.8.8.8, 8.8.4.4]
  version: 2
##====================

sudo netplan try
sudo netplan apply
```

## References
- [https://linuxhint.com/ubuntu_20-04_network_configuration/](https://linuxhint.com/ubuntu_20-04_network_configuration/)
