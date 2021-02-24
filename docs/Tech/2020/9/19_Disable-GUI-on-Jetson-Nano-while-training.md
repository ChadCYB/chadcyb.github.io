---
title: "Disable GUI on Jetson Nano while training"
date: 2020-09-19
sidebar: 'auto'
tags:
 - jetson-nano
 - anaconda
categories:
 - Tech
publish: True
meta:
  - property: og:description
    content: Jetson's is a shared memory system, which indicates that the physical memory can be used via CPU or GPU.
  - property: og:image
    content: https://i.imgur.com/3Xn5dHI.jpg
---

Jetson's is a shared memory system, which indicates that the physical memory can be used via CPU or GPU. I'm running on Jetson-nano which have 4GB ram only, so it's hard to training when you load a larger model.

## Disable GUI while traning
If you are running low on memory while training, you may want to try disabling the Ubuntu desktop GUI while you are training. This will free up extra memory that the window manager and desktop uses.
``` bash
sudo init 3

## start desktop
sudo init 5
```

## References
- [Transfer Learning with PyTorch](https://github.com/dusty-nv/jetson-inference/blob/master/docs/pytorch-transfer-learning.md)
