---
title: "Turn off System Integrity Protection on your Mac"
date: 2019-12-19
sidebar: 'auto'
tags:
 - SIP
 - Mac
 - Security
categories:
 - Tech
publish: True
meta:
  - property: og:description
    content: OS X El Capitan and later includes security technology that helps protect your Mac from malicious software.
  - property: og:image
    content: https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/OS_X_security_layers.svg/640px-OS_X_security_layers.svg.png
---

![](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/OS_X_security_layers.svg/640px-OS_X_security_layers.svg.png)

## What is System Integrity Protection
OS X El Capitan and later includes security technology that helps protect your Mac from malicious software.
System Integrity Protection restricts the root user account and limits the actions that the root user can perform on protected parts of the Mac operating system.

System Integrity Protection includes protection for these parts of the system:
``` bash
/System
/usr
/bin
/sbin
/var
```
Apps that are pre-installed with OS X
Paths and apps that third-party apps and installers can continue to write to include:
``` bash
/Applications
/Library
/usr/local
```
System Integrity Protection is designed to allow modification of these protected parts only by processes that are signed by Apple and have special entitlements to write to system files, such as Apple software updates and Apple installers. Apps that you download from the Mac App Store already work with System Integrity Protection.

## How to turn off SIP
1. First, start up from macOS Recovery
While restart the mac, Press and Hold the `Command + R` buttons at the same time and Release all buttons When the Apple logo comes up on the screen.
2. Open Terminal
The menu at the top of sreen, click `Utilities > Terminal`
3. Enter the following command to disable SIP
``` bash
csrutil disable
```
4. Reboot the mac
Now the action of closing SIP is complete

5. Check SIP is disabled
open terminal
``` bash
ls -lO /System /usr
```

## References
- [About System Integrity Protection on your Mac
](https://support.apple.com/en-us/HT204899)
- [Mac disable System Integrity Protection (SIP)](https://blog.developer.money/%E9%97%9C%E9%96%89-mac-%E7%9A%84-sip-system-integrity-protection-8f679c4fdd9e)
- [How do I disable System Integrity Protection (SIP) AKA “rootless” on macOs [OS X]](https://apple.stackexchange.com/questions/208478/how-do-i-disable-system-integrity-protection-sip-aka-rootless-on-macos-os-x/208481#208481)
- [wiki - System Integrity Protection](https://en.wikipedia.org/wiki/System_Integrity_Protection)
