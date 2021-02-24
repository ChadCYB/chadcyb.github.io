---
title: "Black magic of SSH"
date: 2022-02-08
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
    content: We often encounter all kinds of network architectures, Some are simply connected directly, some are behind other machines...
  - property: og:image
    content: https://i.imgur.com/22a1mVc.jpg
---

We often encounter all kinds of network architectures, some are simply connected directly, some are behind other machines, and some are blocked by firewall that can't easily access it. This article show how to use ssh to connect in various situations.

## Local Port Forwarding
- Situation:
    - **access `remote server's network` on`loaclhost`**
    - only `localhost` can acees `remote server`
        - `localhost --ssh--> remote server`
        - `localhost <--X-- remote server`
### Command
Run following command on **localhsot**.
``` bash
ssh -L <local_port>:<target> <remote_server>
## Run in background
ssh -NfL <local_port>:<target> <remote_server>
## With ssh key
ssh -i <key_path> -NfL <local_port>:<target> <remote_server>
```
- All traffic sent to `localhost:<local_port>` will be tunneled to `<target>` thought your `<remote_server>`.

```
localhost:<local_port> --> <remote_server> --> <target>
```

### Example 1
access remote server 22 port thought localhost 1022
```
localhsot:1022 --> user@192.168.90.1 --> 192.168.90.1:22
```
- Command
``` bash
ssh -NfL 1022:192.168.90.1:22 user@192.168.90.1
```
Now you can access remote server thought localhost:1022
``` bash
ssh user@localhost -p 1022
```

### Example 2
access office web server(192.168.90.100) 80 port thought localhost 8080
```
localhsot:8080 --> user@192.168.90.1 --> 192.168.90.100:80
```
- Command
``` bash
ssh -NfL 8080:192.168.90.1:80 user@192.168.90.1
```
Now you can access office web server by browsing `http://localhost:8080`.

---
## Remote Port Forwarding
- Situation:
    - **access `loaclhost's network` on `remote server`**
    - only `localhost` can acees `remote server`
        - `localhost --ssh--> remote server`
        - `localhost <--X-- remote server`
### Command
Run following command on **localhost**.
``` bash
ssh -R <remote_port>:<target> <remote_server>
## Run in background
ssh -NfR <remote_port>:<target> <remote_server>
## With ssh key
ssh -i <key_path> -NfR <remote_port>:<target> <remote_server>
```
- All traffic sent to `<remote_server>:<remote_port>` will be tunneled to `<target>` thought `localhost`.
```
<remote_server>:<remote_port> --> localhost --> <target>
```

### Example 1
access localhost ssh thoght remote server 1022 port
```
192.168.90.1:1022 -> localhsot --> localhsot:22
```
- Command
``` bash
## type on localhost
ssh -NfR 1022:localhost:22 user@192.168.90.1
```
Now you can access localhost ssh on remote server thought localhost:1022
``` bash
## type on remote server
ssh user@localhost -p 1022
```

### Example 2
access local proxy server `192.168.1.100:3128` thought remote server `192.168.90.1:1234`
```
192.168.90.1:1234 -> localhsot --> 192.168.1.100:3128
```
- Command
``` bash
## type on localhost
ssh -NfR 1234:192.168.90.100:3128 user@192.168.90.1
```
Now you can set up proxy on `localhost:1234` on remote server.

---
## Dynamic Port Forwarding
- SSH SOCKS Server
- Pass all traffic thought SOCKS Server
```
localhost ==-all traffic-==> remote server ==> internet
```
### Command
``` bash
ssh -D 8080 user@remote.server
```
### Example 1
- Proxy the remote server's traffic thought localhost's network
- Remote server cant access internet
```
Proxy Server: localhost:54321
Remote Server: 192.168.90.1

192.168.90.1:54321 --ssh tunnel--> localhost:54321 ==> internet
```

``` bash
## Create proxy server on localhost:54321
ssh -i /home/ubuntu/key.pem -f -N -D 54321 localhost
## Create a resever ssh to remote server
ssh -fNCR 54321:localhost:54321 user@192.168.90.1
```
- `-C` means compress the traffic
- `-fN` run in background
- `-D` create proxy server
- `-R` create reverse tunnel

---
## Executing a command on remote server
- Easy for write in shell scirpt when you need runing command on remote server. 
``` bash
ssh <user>@<remote_server> -- <command>

## get remote server's apache error log
ssh user@192.168.9.1 -- cat /var/log/apache2/error.log | grep error | tee remote.server.apache2.log
```

---
## Postscript
### check ports in use linux
``` bash
sudo netstat -tulpn | grep LISTEN
```
### kill the ssh seesion
``` bash
sudo ps aux | grep ssh

kill <PID>
```
### Create ssh session without occupy a tty
- `-nNT`

``` bash
ssh -nNT -L 9000:imgur.com:80 user@example.com
```
- Arguments explained
    - `-n` Redirects stdin from /dev/null (actually, prevents reading from stdin). This must be used when ssh is run in the background.
    - `-N` Do not execute a remote command. This is useful for just forwarding ports (protocol version 2 only).
    - `-T` Disable pseudo-terminal allocation.

---
## References
- [反向建立 SSH Tunnel、免 VPN 連回公司](https://70tw.blogspot.com/2010/10/linux-ssh-tunnel-vpn.html)
- [SSH Port Forwarding / Agent Forwarding](https://myapollo.com.tw/zh-tw/ssh-port-forwarding/)
- [關於 SSH Tunnel 連線](https://yu-jack.github.io/2019/01/08/ssh-tunnel/)
- [how to use ssh tunneling](https://www.howtogeek.com/168145/how-to-use-ssh-tunneling/)
- [gist - Port forwarding using SSH](https://gist.github.com/FMCorz/6f84985f96c5c7f9f4c9a73f31f79d21)
- [sshuttle - A better ssh tunnel](https://dev.to/mrkaran/using-sshtunnel-2h24)

``` bash
sshuttle --dns --vr ubuntu@localhost 0/0 --ssh-cmd 'ssh -i ~/dct_key/dct.pem -p 10022'
```
