---
title: "Copy file using RSYNC"
date: 2021-07-27
sidebar: 'auto'
tags:
 - tools
 - server-management
categories:
 - Tech
publish: True
meta:
  - property: og:description
    content: rsync is the most commonly used tool for copying and backing up files on Linux systems...
  - property: og:image
    content: https://i.imgur.com/Of8Fsj7.jpg
---

![](https://i.imgur.com/Of8Fsj7.jpg)

rsync is the most commonly used tool for copying and backing up files on Linux systems. It can handle local file synchronization tasks. With the rsync command, administrators can easily synchronize data between two locations, regardless of whether the data is synchronized at the same time. 

The following is a tutorial on how to use rsync and examples of commonly used commands.

## Command
``` bash
rsync -avzh --progress /source /dest
```

File
``` bash
rsync -avzh --progress /myfile.gz pi@192.168.1.12:/mypath/myfile.gz
```

Folder
``` bash
rsync -avzhr --progress /source /dest

## example
rsync -avzhr --progress dataset_2 user@192.168.0.1:/media/HDD
```

## References
- [https://blog.gtwang.org/linux/rsync-local-remote-file-synchronization-commands/](https://blog.gtwang.org/linux/rsync-local-remote-file-synchronization-commands/)
