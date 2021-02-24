---
title: "Clone SD card to img file"
date: 2020-09-25
sidebar: 'auto'
tags:
 - jetson-nano
 - tools
categories:
 - Tech
publish: True
meta:
  - property: og:description
    content: This article will teach you how to clone your Jetson-Nano SD Cards into img file.
  - property: og:image
    content: https://i.imgur.com/zIHa3zB.jpg
---

[](https://i.imgur.com/zIHa3zB.jpg)

This article will teach you how to clone your Jetson-Nano SD Cards into img file.

## Clone SD card
1. Get the disk name.
- `/dev/sdb1` is our SD card name in this case.
``` bash
sudo fdisk -l

...
Disklabel type: dos
Disk identifier: 0x00000000

Device     Boot Start       End   Sectors  Size Id Type
/dev/sdb1       32768 124735487 124702720 59.5G  7 HPFS/NTFS/exFAT
```

2. clone the disk using `dd` command
``` bash
sudo dd if=/dev/sdb1of=/your/path/sd_bk.img bs=1M
```
- Command to make image file with compression:
``` bash
sudo dd if=/dev/sdb1 bs=1M | gzip > /your/path/sd_bk.gz
```

## Restore SD card
1. Unmount SD card (not eject)
``` bash
sudo umount /dev/sdb1
```
2. Reflash the SD card
``` bash
sudo dd if=/your/path/sd_bk.img of=/dev/sdb1

## dd with decompress
gunzip -c /your/path/sd_bk.gz | dd of=/dev/sdb1

## watch dd processing
watch -n5 'sudo kill -USR1 $(pgrep ^dd)'
## or using 'status=progress'
dd if=/dev/urandom of=/dev/null status=progress
```

## References
- [http://pi.bek.no/cloneSDcard/](http://pi.bek.no/cloneSDcard/)
- [https://serverfault.com/questions/650086/does-the-bs-option-in-dd-really-improve-the-speed](https://serverfault.com/questions/650086/does-the-bs-option-in-dd-really-improve-the-speed)
- [https://beebom.com/how-clone-raspberry-pi-sd-card-windows-linux-macos/](https://beebom.com/how-clone-raspberry-pi-sd-card-windows-linux-macos/)
- [https://www.cyberciti.biz/faq/unix-linux-dd-create-make-disk-image-commands/](https://www.cyberciti.biz/faq/unix-linux-dd-create-make-disk-image-commands/)
- [https://askubuntu.com/questions/215505/how-do-you-monitor-the-progress-of-dd](https://askubuntu.com/questions/215505/how-do-you-monitor-the-progress-of-dd)
