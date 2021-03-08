---
title: Convert a shell script into an executable binary
date: 2019-10-28
sidebar: 'auto'
tags:
 - Linux
 - shell
categories:
 - Code
publish: True
meta:
  - property: og:description
    content: This article will help you to create binary file of your shell script...
  - property: og:image
    content: https://i.imgur.com/lgGt6as.jpg
---

::: tip Introduction
This article will help you to create binary file of your shell script, so no one can see the source code of your script and we can use them as a command.
  
To create binary file from a script we use SHC compiler written by [Francisco Javier Rosales García](http://www.datsi.fi.upm.es/~frosal/).  
:::

![](https://i.imgur.com/lgGt6as.jpg)

## Shell Script Compiler (SHC)

### 1. Download shc and install it
``` bash
$ wget http://www.datsi.fi.upm.es/~frosal/sources/shc-3.8.9.tgz
$ tar xvfz shc-3.8.9.tgz
$ cd shc-3.8.9
$ make
```
### 2. Verify that shc is installed properly.
``` bash
$ ./shc -v
shc parse(-f): No source file specified

shc Usage: shc [-e date] [-m addr] [-i iopt] [-x cmnd] [-l lopt] [-rvDTCAh] -f script
```
### 3. Create a Sample Shell Script
``` bash
$ vi test.sh
```
#!/bin/bash need to put at the beginning of a script file.  
``` bash
#!/bin/bash
echo -n "Test"
```
### 4. Create Binary of Script
``` bash
$ ./shc -T -f test.sh
```
`-T` : this will allow the created binary files to be traceable using programs like strace, ltrace, etc.  
`-f` : file name.  

This will create the following files:  
``` bash
$ ls -l test.sh*
-rwxrw-r--. 1 cyb cyb   149 Oct 28 15:09 test.sh
-rwx-wx--x. 1 cyb cyb 11752 Oct 28 15:12 test.sh.x
-rw-rw-r--. 1 cyb cyb 10174 Oct 28 15:12 test.sh.x.c

$ file random.sh
test.sh: Bourne-Again shell script text executable

$ file random.sh.x
test.sh.x: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), dynamically linked (uses shared libs), for GNU/Linux 2.6.18, stripped

$ file random.sh.x.c
test.sh.x.c: ASCII C program text
```

## References
-   [http://www.datsi.fi.upm.es/~frosal/](http://www.datsi.fi.upm.es/~frosal/)
-   [https://tecadmin.net/create-binary-file-from-shell-script/](https://tecadmin.net/create-binary-file-from-shell-script/)
-   [https://unix.stackexchange.com/questions/64762/how-to-convert-a-shell-script-into-a-binary-executable](https://unix.stackexchange.com/questions/64762/how-to-convert-a-shell-script-into-a-binary-executable)
