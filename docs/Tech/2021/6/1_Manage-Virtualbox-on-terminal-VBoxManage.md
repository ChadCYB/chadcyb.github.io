---
title: "Manage Virtualbox on terminal - VBoxManage"
date: 2021-06-01
sidebar: 'auto'
tags:
 - ssh
 - server-management
categories:
 - Tech
publish: True
meta:
  - property: og:description
    content: VirtualBox virtual machines can be run without working with the GUI...
  - property: og:image
    content: https://i.imgur.com/l67PZI3.jpg
---

![](https://i.imgur.com/l67PZI3.jpg)

VirtualBox is a powerful virtualization product for enterprise as well as home use. If you're using VirtualBox as a VM server in your data center, chances are you're going to want to know how to run those VMs without having to rely on the VirtualBox GUI. See how to take advantage of the VBoxManage.

## List all VM
``` bash
VBoxManage list vms

"Win10" {61e2a011-1a4e-466a-894f-cadba7a4ccac}
"wordpress" {dd107f96-fcf1-4102-bef8-fe50f041ac05}
"dockhub" {7c80a2e5-00f9-4ab6-b132-2ebfeca63ea0}
"Win10py" {d5507555-a362-4d77-a1e0-16cda59cda12}
"MSEdge - Win10" {af53a27a-d6e3-4b11-bc83-0512f3185810}
"node" {d9b34dbc-dd85-4e7a-aa16-765b10569643}
```

## Start VM
``` bash
VBoxManage startvm "VM name" --type headless

VBoxHeadless --startvm <uuid|name>

## suht down the VM
VBoxManage controlvm "VM name" poweroff --type headless
```

## Pause VM
``` bash
VBoxManage controlvm "VM name" pause --type headless

## resume the pasue VM
VBoxManage controlvm "VM name" resume --type headless
```

## Force stop VM
``` bash
ps -AF | grep V

user     5007     1  0 289277 62392  0 Jan29 ?        00:00:15 /opt/VirtualBox/VirtualBox
user     5024     1  0 30275  6336   1 Jan29 ?        00:00:05 /opt/VirtualBox/VBoxXPCOMIPCD
user     5029     1  0 208624 15440  1 Jan29 ?        00:00:17 /opt/VirtualBox/VBoxSVC --auto-shutdown
user    10205  5029 47 703181 1173884 0 17:40 ?       00:00:14 /opt/VirtualBox/VirtualBox --comment Mint-15-VBWeb --startvm ae6db503-24db-4d90-a5a5-e14d2c4dda20 --no-startvm-errormsgbox
user    10472 10403  0  3397   928   0 17:41 pts/1    00:00:00 grep --color=auto V
```

In this case shown above that would be 10205 ( the pid ) which matches the guests name Mint-15-VBweb running the following should end the process.
``` bash
kill 10205
```

## References
- [https://superuser.com/questions/1153939/start-a-vm-in-virtualbox-without-gui](https://superuser.com/questions/1153939/start-a-vm-in-virtualbox-without-gui)
- [https://forums.virtualbox.org/viewtopic.php?f=7&t=59898&start=15](https://forums.virtualbox.org/viewtopic.php?f=7&t=59898&start=15)
- [https://www.techrepublic.com/article/how-to-run-virtualbox-virtual-machines-from-the-command-line/](https://www.techrepublic.com/article/how-to-run-virtualbox-virtual-machines-from-the-command-line/)
