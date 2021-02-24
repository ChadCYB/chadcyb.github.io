---
title: "How to get RTSP stream using OpenCV"
date: 2021-01-31
sidebar: 'auto'
tags:
 - Python
categories:
 - Code
publish: True
meta:
  - property: og:description
    content: To install a different version of Node.js, you can use a nvm (Node Version Manager) that is more particularly flexible...
  - property: og:image
    content: https://i.imgur.com/WMyy20w.jpg
---

![](https://i.imgur.com/WMyy20w.jpg)

This article show how to use Python and OpenCV to capture webcam images, process and display real-time screen images.

## Code
``` python
import cv2 as cv2

video = cv2.VideoCapture('rtsp://Admin:1234@192.168.0.250/h264_2')
(ret, frame) = video.read()

while(True):
    ret, frame = video.read()
    #frame = frame[..., ::-1]
    #frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGBA)
    output = cv2.resize(frame, (640,360))
    cv2.imshow('frame', output)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

video.release()
cv2.destoryAllWindows()
```

## References
- [https://ithelp.ithome.com.tw/articles/10230509](https://ithelp.ithome.com.tw/articles/10230509)
- [https://blog.gtwang.org/programming/opencv-webcam-video-capture-and-file-write-tutorial/](https://blog.gtwang.org/programming/opencv-webcam-video-capture-and-file-write-tutorial/)
