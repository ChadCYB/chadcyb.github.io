---
title: Get request ip address using express in Nodejs
date: 2019-11-14
sidebar: 'auto'
tags:
 - Nodejs
categories:
 - Code
publish: True
meta:
  - property: og:description
    content: Here's the way to get the x-forward-for head...
  - property: og:image
    content: https://i.imgur.com/3z58oVQ.jpg
---

![](https://i.imgur.com/3z58oVQ.jpg)

Here's the way to get the x-forward-for head
``` javascript
var ip = req.headers['x-forward-for']
```
**make sure all the keyword is lower case!!** It took me half a day to find this mistake. 
![](https://2.bp.blogspot.com/-DKzbrBETKxI/XcscXL5YPJI/AAAAAAAAkjQ/GOvw59kMDLspqcBkawsERnf-beQl0Ax6ACK4BGAYYCw/s1600/73322553_2973303176023876_4556973860267753472_n.jpg)

Result:
![](https://1.bp.blogspot.com/-DB3Hm0PNOSU/XcsdaubRA5I/AAAAAAAAkjc/ZyFTEUATMJ4cdwQNio57R_DCmYvyrmGMACK4BGAYYCw/s1600/73210206_2973302966023897_4016467404480577536_n.jpeg)

## Reference
-   [stackoverflow - How to determine a user's IP address in node](https://stackoverflow.com/questions/8107856/how-to-determine-a-users-ip-address-in-node)
-   [Work with HTTP headers in Express](https://flaviocopes.com/express-headers/)