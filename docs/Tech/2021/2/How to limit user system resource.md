---
title: "How to limit user's system resource"
date: 2021-02-07
sidebar: 'auto'
tags:
 - Ubuntu
 - Linux
 - server-management
categories:
 - Tech
publish: True
meta:
  - property: og:description
    content: There was a bad user on the computing server a few days ago...
  - property: og:image
    content: https://i.imgur.com/3QeQito.jpg
---

![](https://i.imgur.com/3QeQito.jpg)
There was a bad user on the computing server a few days ago, that user takes up too much computer resources, making others have to line up for use.

So I found some tools to deal with this problem:
- [cpulimit](https://github.com/opsengine/cpulimit) : Cpulimit is a tool which limits the CPU usage of a process
- [ulimit](https://linuxcommand.org/lc3_man_pages/ulimith.html) : It's an interesting Linux shell command that can set or report the resource limit of the current user.

## cpulimit
``` bash
sudo apt-get install cpulimit

## limit by pid
cpulimit --pid 21203 --limit 50
## limit by exe
cpulimit --exe md5sum --limit 50
## limit by path
cpulimit --path /usr/bin/md5sum --limit 50

## using cpulimit to lunch application
cpulimit --limit 50 -- md5sum /dev/urandom

## clear log
sed '/pam\_unix(cron/d;//d' -i auth.log
sed '/cpulimit/d;//d' -i auth.log
```
### limit cpu script
``` bash
#!/bin/bash
declare -a LIMIT_USER=("ben")
declare -a LIMIT_PROCESS=("jupy" "python")
LIMIT_RATE=$(( ( RANDOM % 10 )  + 1 ))
kill $(ps aux | grep '[c]pulimit --pid' | awk '{print $2}') 2>/dev/null
for USER in "${LIMIT_USER[@]}"; do
  for PROC in "${LIMIT_PROCESS[@]}"; do
      for OUTPUT in $(pgrep $PROC -u $USER); do
        sudo cpulimit --pid $OUTPUT --limit $LIMIT_RATE &
      done
      for OUTPUT in $(ps aux | grep $USER | grep $PROC | awk '{print $2}'); do
        sudo cpulimit --pid $OUTPUT --limit $LIMIT_RATE &
      done
  done
done
sed '/pam\_unix(cron/d;//d' -i auth.log
sed '/cpulimit/d;//d' -i auth.log
```
### References
- [blog.gtwang.org - 查詢與設定 Linux 使用者可開啟的行程數量上限值，限制開啟程式的數目](https://blog.gtwang.org/linux/set-limits-on-user-processes-using-ulimit-in-linux/)
- [stackexchange - How to count lines in a document?](https://unix.stackexchange.com/questions/224697/remove-lines-that-contain-a-specific-text-in-a-file)

## How to see process created by a specific user in Linux
``` bash
## Show all processes by RUID
ps -u tom
## Display all processes by EUID
ps -U tom

## count current process number
ps -u tom | wc -l
```
### References
- [cyberciti.biz - Linux list processes by user names (EUID and RUID)](https://www.cyberciti.biz/faq/linux-list-processes-by-user-names-euid-and-ruid/)
- [stackoverflow - How to count lines in a document?](https://stackoverflow.com/questions/3137094/how-to-count-lines-in-a-document)

## ulimit
### [domain] can be:
- an user name
- a group name, with @group syntax
- the wildcard *, for default entry
- the wildcard %, can be also used with %group syntax, for maxlogin limit
### [type] can have the two values:
- “soft” for enforcing the soft limits
- “hard” for enforcing hard limits
### [item] can be one of the following:
- core – limits the core file size (KB)
- data – max data size (KB)
- fsize – maximum filesize (KB)
- memlock – max locked-in-memory address space (KB)
- nofile – max number of open files
- rss – max resident set size (KB)
- stack – max stack size (KB)
- cpu – max CPU time (MIN)
- nproc – max number of processes
- as – address space limit (KB)
- maxlogins – max number of logins for this user
- maxsyslogins – max number of logins on the system
- priority – the priority to run user process with [highest: -20, lowest: 19]
- locks – max number of file locks the user can hold
- sigpending – max number of pending signals
- msgqueue – max memory used by POSIX message queues (bytes)
- nice – max nice priority allowed to raise to values: [-20, 19]
- rtprio – max realtime priority

```bash
vi /etc/security/limits.conf

#<domain>      <type>  <item>         <value>
@groupname      hard    nproc           20
username        soft    nproc           20
ftp             hard    nproc           0
```

```bash
## add user to group
sudo groupadd newgroup 
sudo usermod -a -G newgroup username

## remove user form group
sudo deluser username newgroup
```

### How to reload the ulimit config?
  - reboot the system
    - make sure your config is ok or its dangarger
  - new login session
    - check it work brefore logout previous session

### References
- [blog.gtwang.org - 查詢與設定 Linux 使用者可開啟的行程數量上限值，限制開啟程式的數目](https://blog.gtwang.org/linux/set-limits-on-user-processes-using-ulimit-in-linux/)
- [thegeekdiary - Understanding /etc/security/limits.conf file](https://www.thegeekdiary.com/understanding-etc-security-limits-conf-file-to-set-ulimit/)
- [stackexchange - How to create a user with limited RAM usage?](https://unix.stackexchange.com/questions/34334/how-to-create-a-user-with-limited-ram-usage)
- [howtogeek - Add a User to a Group (or Second Group) on Linux](https://www.howtogeek.com/50787/add-a-user-to-a-group-or-second-group-on-linux/)
