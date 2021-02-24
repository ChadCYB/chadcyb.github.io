---
title: "How to change MTU for the Docker network"
date: 2020-09-09
sidebar: 'auto'
tags:
 - docker
 - Network
categories:
 - Tech
publish: True
meta:
  - property: og:description
    content: This article will show how to change MTU to `1450` for the Docker network.
  - property: og:image
    content: https://i.imgur.com/LgdBHPv.jpg
---

Today I set up a docker environment in the computer room and found that the internal container does not have the ability to connect to the external network. It turns out that the mtu of the network in the computer room is `1450`, not the default value `1500` by docker.

This article will show how to change MTU to `1450` for the Docker network.

## Configure docker.service file
1. Find out `docker.service` path
``` bash
sudo systemctl status docker.service | grep Loaded
```
2. Edit `docker.service` 
``` bash
vi /lib/systemd/system/docker.service

## add '--mtu=1450' at ExecStart line

ExecStart=/usr/bin/dockerd --mtu=1450 -H fd:// --containerd=/run/containerd/containerd.sock 
```
3. Service reload
``` bash
sudo systemctl daemon-reload
sudo systemctl start docker
sudo systemctl restart docker
```
- `mtu` config cannot appear at the same time in `/etc/docker/daemon.json` and `docker.service`, it will CRASH!!

## References
- [Using systemd to control the Docker daemon](https://success.mirantis.com/article/using-systemd-to-control-the-docker-daemon)
- [Fixing networking for Docker](https://www.civo.com/learn/fixing-networking-for-docker)
- [shuzhiduo - docker修改docker0 mtu](https://www.shuzhiduo.com/A/LPdoNOn253/)
- [https://my.oschina.net/u/4342956/blog/3919638](https://my.oschina.net/u/4342956/blog/3919638)
