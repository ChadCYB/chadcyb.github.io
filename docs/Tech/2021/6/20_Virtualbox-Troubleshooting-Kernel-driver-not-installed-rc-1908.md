---
title: "Virtualbox Troubleshooting: Kernel driver not installed (rc=-1908)"
date: 2021-06-20
sidebar: 'auto'
tags:
 - Mac
 - install
categories:
 - Tech
publish: True
meta:
  - property: og:description
    content: This is what it happen error installing virtualbox-dkms on Ubuntu 20.
  - property: og:image
    content: https://i.imgur.com/PVG3gHB.jpg
---

![](https://i.imgur.com/PVG3gHB.jpg)

This is what it happen error installing virtualbox-dkms on Ubuntu 20.
## Error message
```
Kernel driver not installed (rc=-1908)

The VirtualBox Linux kernel driver is either not loaded or not set up correctly. 
Please reinstall virtualbox-dkms package and load the kernel module by executing

'modprobe vboxdrv'

as root.
```

## Install extension pack
```
sudo apt install virtualbox-ext-pack
```

## References
- [https://linuxconfig.org/virtualbox-extension-pack-installation-on-ubuntu-20-04-focal-fossa-linux](https://linuxconfig.org/virtualbox-extension-pack-installation-on-ubuntu-20-04-focal-fossa-linux)
- [https://askubuntu.com/questions/1305873/error-installing-virtualbox-dkms-on-ubuntu-20](https://askubuntu.com/questions/1305873/error-installing-virtualbox-dkms-on-ubuntu-20)
