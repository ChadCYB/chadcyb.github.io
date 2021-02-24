---
title: "Copy file using SCP and SFTP with private key"
date: 2021-07-05
sidebar: 'auto'
tags:
 - ssh
 - tools
 - server-management
categories:
 - Tech
publish: True
meta:
  - property: og:description
    content: The `.pem` and `.ppk` files are similar because they are both private key file formats...
  - property: og:image
    content: https://i.imgur.com/nrdmJif.jpg
---

![](https://i.imgur.com/nrdmJif.jpg)

## Whats the difference between .ppk and .pem?
The `.pem` and `.ppk` files are similar because they are both private key file formats.
 
The differences between each files are the following:
 
- System platform compatibility
  - Linux users — .pem file format
  - Mac users — .pem file format
  - Windows PowerShell users — .pem file format
  - Windows PuTTY/Cygwin users — .ppk file format

- PEM (Privacy Enhanced Mail) 
  - PEM is a base64 container format for encoding keys and certificates. 
 
- PPK(Putty Private Key) 
  - PKK is a windows ssh client, it does not support .pem format. 
  - PPK files developed by Putty and they serve as storage for the private keys the program generated.


## Using SSH public key authentication
``` bash
ssh -i xxxx.pem user@{SERVER_IP}

scp -i xxxx.pem ./source_file user@{SERVER_IP}:~/dest_file
```

## Using STFP with pem key on FileZilla
A lot of open source software, as well as AWS, generate .pem files for you to use. But if you are using something like PuTTY or WinSCP, you will most likely need to use a .ppk file. Converting .pem files to .ppk is easy using a program called PuTTYgen.
``` bash
apt-get install putty-tools
puttygen keyname -o keyname.ppk
```

## References
- [haydenjames.io - How to Convert OpenSSH keys to Putty (.ppk) on Linux](https://haydenjames.io/how-to-convert-openssh-keys-to-putty-ppk-on-linux-with-puttygen/)
- [The Difference Between .PEM And .PPK And How To Generate .PPK File For SSH From Putty
](https://www.c-sharpcorner.com/article/difference-between-pem-and-ppk/)
