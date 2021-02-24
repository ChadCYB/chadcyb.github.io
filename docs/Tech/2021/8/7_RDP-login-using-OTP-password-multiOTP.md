---
title: "RDP login using OTP password - multiOTP"
date: 2020-08-07
sidebar: 'auto'
tags:
 - Windows
 - RDP
categories:
 - Tech
publish: True
meta:
  - property: og:description
    content: The multiOTP package is the lightest package available that provides so many strong...
  - property: og:image
    content: https://i.imgur.com/Y2OX3XY.jpg
---

![](https://i.imgur.com/Y2OX3XY.jpg)

## What is multiOTP?
The multiOTP package is the lightest package available that provides so many strong authentication functionalities and goodies, and best of all, for anyone that is interested about security issues, it's a fully open source solution!

## Installation
This article will show how to setup multiOTP on localhost only

1. Open multiOTP Credential Provider msi file

2. Don't fill the URL, let it blank

![](https://i.imgur.com/enzQIuS.png)

3. Check the 'Only RDP...storng authentication', it will enable OTP only when RDP

![](https://i.imgur.com/7lwjnIH.png)

3. Before click 'Test the multiOTP...', create a accout first.
- Goto the folder of MutilOTP, open cmd as administrator and enter the commend below:

``` batch
## user_name must exit in your windows users
multiotp -fastcreatenopin user_name
multiotp -qrcode user_name 
```
- After account creat, you can check the test.
- if the test is pass, then click next.

![](https://i.imgur.com/Zgcm1hJ.png)

## References
- [https://github.com/multiOTP](https://github.com/multiOTP)
- [https://github.com/multiOTP/multiotp/wiki](https://github.com/multiOTP/multiotp/wiki)
- [https://esecutech.com/wiki/index.php/MultiOTP_Authentication_Server](https://esecutech.com/wiki/index.php/MultiOTP_Authentication_Server)
- [https://kknews.cc/zh-tw/news/rlym2xv.html](https://kknews.cc/zh-tw/news/rlym2xv.html)
