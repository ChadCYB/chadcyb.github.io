---
title: "Disable Windows RDP clipboard and drive redirection"
date: 2020-10-05
sidebar: 'auto'
tags:
 - Windows
 - RDP
categories:
 - Tech
publish: True
meta:
  - property: og:description
    content: I got a mission that A company must to access the B company's sensitivity data...
  - property: og:image
    content: https://i.imgur.com/4S6Pj4M.jpeg
---

![](https://i.imgur.com/4S6Pj4M.jpeg)

I got a mission that A company must to access the B company's sensitivity data, they need to help process the data. So I setup a vm machine and RDP service for A company to access, but redirection there clipboard and drive.

This is the note when you need to disable Windows RDP clipboard and drive redirection.

## Start gpedit.msc
1. Press `win+R` and enter `gpedit.msc`
2. Navigate Local Computer Policy
```
Computer Congifuration 
  -> Administrative Templates 
    -> Windows Componets 
      -> Remote Desktop Services 
        -> Remote Desktop Session Host 
          -> Device and Resource Redirection
```
3. Select `Do not allow Clipboard redirection` and set to `Enable`.
4. Select `Do not allow drive redirection` and set to `Enable`.
