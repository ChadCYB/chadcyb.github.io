---
title: "Understanding htop value"
date: 2020-11-12
sidebar: 'auto'
tags:
 - htop
 - server-management
 - ubuntu
categories:
 - Tech
publish: True
meta:
  - property: og:description
    content: Here is a list that explains what each column means.
  - property: og:image
    content: https://upload.wikimedia.org/wikipedia/commons/b/b1/Htop.png
---

![](https://upload.wikimedia.org/wikipedia/commons/b/b1/Htop.png)

## htop columns meaning

Here is a list that explains what each column means.

- PID: A process’s process ID number.
- USER: The process’s owner.
- PRI: The process’s priority. The lower the number, the higher the priority.
- NI: The nice value of the process, which affects its priority.
- VIRT: How much virtual memory the process is using.
- RES: How much physical RAM the process is using, measured in kilobytes.
- SHR: How much shared memory the process is using.
- S: The current status of the process (zombied, sleeping, running, uninterruptedly sleeping, or traced).
- %CPU: The percentage of the processor time used by the process.
- %MEM: The percentage of physical RAM used by the process.
- TIME+: How much processor time the process has used.
- COMMAND: The name of the command that started the process.

## The difference between VIRT, RES and SHR
- VIRT stands for the virtual size of a process, which is the sum of memory it is actually using, memory it has mapped into itself (for instance the video card's RAM for the X server), files on disk that have been mapped into it (most notably shared libraries), and memory shared with other processes. VIRT represents how much memory the program is able to access at the present moment.
- RES stands for the resident size, which is an accurate representation of how much actual physical memory a process is consuming. (This also corresponds directly to the %MEM column)
- SHR indicates how much of the VIRT size is actually sharable memory or libraries. In the case of libraries, it does not necessarily mean that the entire library is resident. For example, if a program only uses a few functions in a library, the whole library is mapped and will be counted in VIRT and SHR, but only the parts of the library file containing the functions being used will actually be loaded in and be counted under RES.

## Use htop like a pro
Htop has some very useful feature built-in to make one's life easier when working with system processes, here a list of feature that I find very helpful.

- Scroll the process list horizontally and vertically using the arrow keys
- Kill a process by pressing the F9' key
- Renice a process by pressing the 'F7' or 'F8' key's
- List open files used by a process by pressing the 'l' key
- Display only processes of a single user by pressing the 'u' key
- Display processes sorted by any htop column by pressing the 'F6' key
- Display processes in a tree view by pressing the 'F5' key

## Reference
- [Understanding and using htop to monitor system resources](https://www.deonsworld.co.za/2012/12/20/understanding-and-using-htop-monitor-system-resources/)
- [htop explained](https://peteris.rocks/blog/htop/)