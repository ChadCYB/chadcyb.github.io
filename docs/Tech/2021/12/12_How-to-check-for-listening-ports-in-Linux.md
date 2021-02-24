---
title: "How to check for listening ports in Linux"
date: 2021-12-12
sidebar: 'auto'
tags:
 - Network
 - Ubuntu
 - Linux
 - server-management
categories:
 - Tech
publish: True
meta:
  - property: og:description
    content: When troubleshooting network connectivity or application-specific issues, one of the first things to check should be what ports are actually in use...
  - property: og:image
    content: https://i.imgur.com/vfBoyUS.jpg
---

![](https://i.imgur.com/vfBoyUS.jpg)

When troubleshooting network connectivity or application-specific issues, one of the first things to check should be what ports are actually in use on your system and which application is listening on a specific port. It is important you verify which ports are listening on the server’s network interfaces. You need to pay attention to open ports to detect an intrusion.

There are several way to check the listen port:
``` bash
sudo lsof -i -P -n | grep LISTEN

sudo netstat -tulpn | grep LISTEN

## see a specific port such as 22
sudo lsof -i:22 

sudo nmap -sTU -O IP-address-Here
```

## References
- [How to check if port is in use on Linux or Unix](https://www.cyberciti.biz/faq/unix-linux-check-if-port-is-in-use-command/)
