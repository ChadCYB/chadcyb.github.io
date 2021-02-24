---
title: "How to add stoarge on Ubuntu"
date: 2022-01-20
sidebar: 'auto'
tags:
 - storage
 - lvm
 - Ubuntu
 - server-management
categories:
 - Tech
publish: True
meta:
  - property: og:description
    content: One of the first problems encountered by users and system administrators these days is that systems tend to run out of disk space to store data.
  - property: og:image
    content: https://i.imgur.com/IE7m36H.jpg
---

![](https://i.imgur.com/IE7m36H.jpg)

One of the first problems encountered by users and system administrators these days is that systems tend to run out of disk space to store data. Fortunately disk space is now one of the cheapest IT commodities. In the article we will look at the steps necessary to configure Ubuntu to use the space provided via the installation of a new physical or virtual disk drive.

## On Partiton
- Using gparted GUI
mount ubuntu live CD -> try Ubuntu -> open `gparted` application -> resize partition

- After reboot back to system
``` bash
## check partition
lsblk

## physical volumes available
pvs
```

## On LVM
- PV -> VG -> LV

``` bash
## check pv
pvdisplay
## extend pv size
pvresize /dev/sda3
pvdisplay

## check vg
vgdisplay

## check lv
lvdisplay

## extend lv size
lvextend -L 100G /dev/ubuntu-vg/ubuntu-lv 
## or extend all free space
lvextend -l+100%FREE /dev/ubuntu-vg/ubuntu-lv

## check lv after extend
lvdisplay

## IMPORTANT PART !!
## Finally, the space adjusted by the resize2fs command will take effect
resize2fs /dev/ubuntu-vg/ubuntu-lv
```

## Add extend disk
``` bash
ls /dev/vd*
> /dev/vda  /dev/vda1  /dev/vdb

df -h
> Filesystem      Size  Used Avail Use% Mounted on
> udev            3.9G     0  3.9G   0% /dev
> tmpfs           797M  1.0M  796M   1% /run
> /dev/vda1        38G  3.7G   33G  11% /
> tmpfs           3.9G     0  3.9G   0% /dev/shm
> tmpfs           5.0M     0  5.0M   0% /run/lock
> tmpfs           3.9G     0  3.9G   0% /sys/fs/cgroup
> /dev/loop0       56M   56M     0 100% /snap/core18/1885
> /dev/loop1       31M   31M     0 100% /snap/snapd/9279
> /dev/loop2       71M   71M     0 100% /snap/lxd/16922
> tmpfs           797M     0  797M   0% /run/user/1000
```
### Creating Linux Partitions
``` bash
fdisk /dev/vdb

Welcome to fdisk (util-linux 2.34).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.

Device does not contain a recognized partition table.
Created a new DOS disklabel with disk identifier 0x6bb2d840.

Command (m for help): p
Disk /dev/vdb: 100 GiB, 107374182400 bytes, 209715200 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0x6bb2d840

Command (m for help): n
Partition type
   p   primary (0 primary, 0 extended, 4 free)
   e   extended (container for logical partitions)
Select (default p): p
Partition number (1-4, default 1): 
First sector (2048-209715199, default 2048): 
Last sector, +/-sectors or +/-size{K,M,G,T,P} (2048-209715199, default 209715199): 

Created a new partition 1 of type 'Linux' and of size 100 GiB.

Command (m for help): w
The partition table has been altered.
Calling ioctl() to re-read partition table.
Syncing disks.

```
### Creating a File System on a Disk Partition
``` bash
apt install xfsprogs

mkfs.xfs /dev/vdb1
meta-data=/dev/vdb1              isize=512    agcount=4, agsize=6553536 blks
         =                       sectsz=512   attr=2, projid32bit=1
         =                       crc=1        finobt=1, sparse=1, rmapbt=0
         =                       reflink=1
data     =                       bsize=4096   blocks=26214144, imaxpct=25
         =                       sunit=0      swidth=0 blks
naming   =version 2              bsize=4096   ascii-ci=0, ftype=1
log      =internal log           bsize=4096   blocks=12799, version=2
         =                       sectsz=512   sunit=0 blks, lazy-count=1
realtime =none                   extsz=4096   blocks=0, rtextents=0

```
### Mounting a File System
``` bash
mkdir /extdisk
mount /dev/vdb1 /extdisk

mount
...
...
/dev/vdb1 on /extdisk type xfs (rw,relatime,attr2,inode64,logbufs=8,logbsize=32k,noquota)

## Configuring Ubuntu to Automatically Mount a File System
vi /etc/fstab

```

## References
- [askUbuntu - Increase partition size on which Ubuntu is installed?](https://askubuntu.com/questions/116351/increase-partition-size-on-which-ubuntu-is-installed)
- [godleon's blog - 利用未分割的硬碟空間，擴充 LVM 空間](https://godleon.github.io/blog/Linux/Linux-extend-lvm-from-unused-space/)
- [answertopia.com - Adding a New Disk Drive to an Ubuntu 20.04 System](https://www.answertopia.com/ubuntu/adding-a-new-disk-drive-to-an-ubuntu-system/)
