---
title: "Make a Dialog Alert Pop-up in Mac via terminal"
date: 2021-08-17
sidebar: 'auto'
tags:
 - Mac
categories:
 - Tech
publish: True
meta:
  - property: og:description
    content: Ever wished you could make a dialog alert pop-up on the Mac by way of the Terminal? Well it turns out that you can with the always useful osascript command...
  - property: og:image
    content: https://i.imgur.com/nA42tjQ.jpg
---

 ![](https://i.imgur.com/nA42tjQ.jpg)

Ever wished you could make a dialog alert pop-up on the Mac by way of the Terminal? Well it turns out that you can with the always useful osascript command, which allows execution of AppleScript from the Terminal. For those who spend a lot of time at the command line of MacOS, this can be a great little trick to notify you of when a specific task has completed, or even to be included as part of a script.

## Trigger a Dialog
The syntax to trigger a dialog alert box in the frontmost application on the Mac is as follows:
``` bash
osascript -e 'tell application (path to frontmost application as text) to display dialog "Hello from CYB" buttons {"OK"} with icon stop'
```

## Trigger a Dialog After Task Completed
You can trigger a dialog box when a task at the command line has completed.
``` bash
python MagicScript.py && osascript -e 'tell application (path to frontmost application as text) to display dialog "The script has completed" buttons {"OK"} with icon caution'
```

## Trigger a Dialog Alert in Specific Application
To send a dialog or alert into a specific application, simply specify the app name in question.
``` bash
osascript -e 'tell app "Finder" to display dialog "Hello from CYB"'

osascript -e 'tell app "Terminal" to display dialog "Hello from CYB"'

osascript -e 'tell app "Safari" to display dialog "Hello from CYB"'

osascript -e 'tell app "System Events" to display dialog "Wasup"'
```

## Trigger a Dialog and Notification
Here's the example to trigger dialog and notificaiton:
``` bash
osascript -e 'tell app "System Events" to display dialog "CONTENT" with title "TITLE_NAME" buttons {"OK"} with icon caution'

osascript -e 'tell app "System Events" to display notification "NOTIFICATION_TITLE" with title "TITLE_NAME" subtitle "SUBTITLE_NAME" sound name "Frog"'
```

## References
- [How to Trigger an Alert Dialog Pop-Up from Command Line in Mac OS](https://osxdaily.com/2016/09/06/trigger-alert-dialog-mac-via-command-line/)
- [AppleScript Language Guide - dispaly dialog](https://developer.apple.com/library/archive/documentation/AppleScript/Conceptual/AppleScriptLangGuide/reference/ASLR_cmds.html#//apple_ref/doc/uid/TP40000983-CH216-SW12)
