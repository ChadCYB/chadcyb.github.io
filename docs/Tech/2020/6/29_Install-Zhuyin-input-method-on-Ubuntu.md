---
title: "Install Zhuyin input method on Ubuntu"
date: 2020-06-29
sidebar: 'auto'
tags:
 - install
 - Ubuntu
categories:
 - Tech
publish: True
meta:
  - property: og:description
    content: Chewing input method is an intelligent Zhuyin input method. It is one of the most popular input methods among Traditional Chinese Unix users.
  - property: og:image
    content: https://i.imgur.com/znAFZNS.jpg
---

![](https://i.imgur.com/znAFZNS.jpg)

## Chewing input method
Chewing(酷音) input method is an intelligent Zhuyin input method. 

It is one of the most popular input methods among Traditional Chinese Unix users.

## How to install
Install the input method by using apt.
``` bash
sudo apt install ibus-chewing
```
After install, please **log out** or **restart** the system.

## Add input method
1. Go to `Setting` -> `Region & Language` -> `Input Source`, click `+` icon.
2. Click `More` -> click `Other`
3. Find `Chinese (Chewing)` and select it -> click `Add`
4. Now you can see the Chewing input method has been add.


## References
- [在 Ubuntu 18.04 中新增新酷音輸入法](https://medium.com/@racktar7743/ubuntu-%E5%9C%A8-ubuntu-18-04-%E4%B8%AD%E6%96%B0%E5%A2%9E%E6%96%B0%E9%85%B7%E9%9F%B3%E8%BC%B8%E5%85%A5%E6%B3%95-4aa85782f656)
