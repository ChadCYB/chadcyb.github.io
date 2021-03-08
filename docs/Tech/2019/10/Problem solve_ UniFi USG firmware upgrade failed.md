---
title: "Problem solve: UniFi USG firmware upgrade failed"
date: 2019-10-15
sidebar: 'auto'
tags:
 - Network
 - Unifi
categories:
 - Tech
publish: True
meta:
  - property: og:description
    content: I upgraded the wifi equipment and replaced it with the UniFi Series products a few days...
  - property: og:image
    content: https://i.imgur.com/Pe2MAgv.jpg
---

![](https://i.imgur.com/Pe2MAgv.jpg)

## Problem
I upgraded the wifi equipment and replaced it with the UniFi Series products a few days ago. UniFi Controller can manage all the UniFi devices through the browser, it is very easy to use.  However, I got a problem while upgrading the USG to the newer firmware.  

There are  [several ways](https://help.ubnt.com/hc/en-us/articles/204910064-UniFi-Changing-the-Firmware-of-a-UniFi-Device)  the upgrade the firmware:  

1. Via the Controller Web UI
Upgrade by pressing "upgrade icon" (on the top right) via controller web UI.  After upgrade, my  "upgrade icon" is still over there... so Im going to try another way.  

2. Via SSH to the device
Connect to a device using an SSH, then run the following command:  
``` bash
upgrade http://dl.ui.com/unifi/firmware/UGW3/4.4.44.5213844/UGW3.v4.4.44.5213844.tar
```
However, I got the error message: 'Upgrade image does not support the device.'
![](https://4.bp.blogspot.com/-Sm65xFEwr8E/Xcsb-VH9ubI/AAAAAAAAkjE/4sXetlSoGUg-qHQknlhBzQmfermwSvOagCK4BGAYYCw/s1600/d7de5b078766bd21ad86e0d70c3457e1824c7c4f.jpg)

## Solution
Here's the solution, if you try out all the way that you can do it.
Modify the upgrade program in the device:  
1.  SSH into the USG.
2.  Issue `sudo vi /usr/bin/ubnt-upgrade` command.
3.  Using the down arrow scroll to line number 504. You should be able to see the progress at the bottom while you scroll down and it should say `- /usr/bin/ubnt-upgrade 504/706 71%` when you reach line 504.
4.  You need to comment the line 504. Hold `Shift` key on the keyboard and hit `i` key.
5.  Add the `#` sign before `exit 1` and then hit Esc key on the keyboard. The line should look like the following:
``` bash
#exit 1
```
![](https://4.bp.blogspot.com/-cGEsWvVVOPk/XcsTpd8lPtI/AAAAAAAAki4/7lM0eSo5fDUVAd6GUR0h8UWImgxrep0ZQCK4BGAYYCw/s1600/Screen%2BShot%2B2019-11-13%2Bat%2B4.18.41%2BAM.png)
6. Then hit `:wq` and hit `enter` on the keyboard. 
7. Finally, wait for a while, then upgrade success.
 
 ![](https://4.bp.blogspot.com/-t0FUiIz40mk/XcsSwtfwK8I/AAAAAAAAkis/5WZw53jFXtwn4NPLj5xM8Vl7L8uRLTEmwCK4BGAYYCw/s400/Screen%2BShot%2B2019-11-13%2Bat%2B4.14.47%2BAM.png)
