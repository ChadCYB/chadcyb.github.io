---
title: "apt install via ssh socket tunnel on ubuntu"
date: 2021-01-16
sidebar: 'auto'
tags:
 - ssh
 - server-management
 - Ubuntu
 - install
categories:
 - Tech
publish: True
meta:
  - property: og:description
    content: This is useful when we have a machine (PC1) that does not have an internet connection to do apt update/upgrade...
  - property: og:image
    content: https://i.imgur.com/pt2SuDO.jpg
---

![](https://i.imgur.com/pt2SuDO.jpg)

This is useful when we have a machine (PC1) that does not have an internet connection to do apt update/upgrade, but we have another machine (PC2) that is able to access internet, and accessible via ssh from the PC1.

In the article PC1 as Server, PC2 as client machine.

## On client machine
1. open SOCKS proxy on port 54321
``` bash
ssh -f -N -D 54321 localhost

## with ssh key
ssh -i key.pem -f -N -D 54321 localhost
```
- `-i`: The path to the SSH key to be used to connect to the host
- `-D`: Tells SSH that we want a SOCKS tunnel on the specified port number (you can choose a number between 1025 and 65536)
- `-f`: Forks the process to the background
- `-C`: Compresses the data before sending it
- `-q`: Uses quiet mode
- `-N`: Tells SSH that no command will be sent once the tunnel is up

2. Verify that the tunnel is running
``` bash
ps aux | grep ssh

ubuntu   2533539  0.2  0.0  12548  7044 pts/1    S+   11:30   0:02 ssh -i dct.pem -N -D 54321 localhost

## close the proxy by using kill PID command
kill 2533539
```

2. Start a reverse ssh port forwarding to Server
Bind remote port 6666 to local port 54321. This will makes your socks proxy available to server on port 6666.
``` bash
ssh user@server_ip -R 6666:localhost:54321
```

## On Server
3. Setup apt proxy

```
sudo vim /etc/apt/apt.conf.d/proxy.conf

Acquire {
  HTTP::proxy "socks5h://127.0.0.1:6666";
  HTTPS::proxy "socks5h://127.0.0.1:6666";
}
```
- using socks
``` bash
Acquire::http::proxy "socks5h://server:port";
```
- using proxy
``` bash
Acquire::http::proxy "http://server:port";
```
4. apt is good to go
``` bash
sudo apt update && sudo apt upgrade -y
```
5. Setup network access using proxychain
``` bash
sudo apt install proxychains
sudo vi /etc/proxychains.conf

...
[ProxyList]
socks5 127.0.0.1 6666
```
6. Everthing is good to go
add `proxychain` at the begin of the command if you need the network access
``` bash
## proxychain <command>
proxychain wget www.google.com
```

## References
- [https://askubuntu.com/questions/35223/syntax-for-socks-proxy-in-apt-conf](https://askubuntu.com/questions/35223/syntax-for-socks-proxy-in-apt-conf)
- [https://serverfault.com/questions/361794/with-ssh-only-reverse-tunnel-web-access-via-ssh-socks-proxy](https://serverfault.com/questions/361794/with-ssh-only-reverse-tunnel-web-access-via-ssh-socks-proxy)
- [https://www.digitalocean.com/community/tutorials/how-to-route-web-traffic-securely-without-a-vpn-using-a-socks-tunnel](https://www.digitalocean.com/community/tutorials/how-to-route-web-traffic-securely-without-a-vpn-using-a-socks-tunnel)
- [https://steemit.com/cn/@antonsteemit/proxychains](https://steemit.com/cn/@antonsteemit/proxychains)
