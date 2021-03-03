(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{525:function(a,t,e){"use strict";e.r(t);var s=e(6),i=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[e("img",{attrs:{src:"https://i.imgur.com/nA42tjQ.jpg",alt:""}})]),a._v(" "),e("p",[a._v("Ever wished you could make a dialog alert pop-up on the Mac by way of the Terminal? Well it turns out that you can with the always useful osascript command, which allows execution of AppleScript from the Terminal. For those who spend a lot of time at the command line of MacOS, this can be a great little trick to notify you of when a specific task has completed, or even to be included as part of a script.")]),a._v(" "),e("h2",{attrs:{id:"trigger-a-dialog"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#trigger-a-dialog"}},[a._v("#")]),a._v(" Trigger a Dialog")]),a._v(" "),e("p",[a._v("The syntax to trigger a dialog alert box in the frontmost application on the Mac is as follows:")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("osascript -e "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'tell application (path to frontmost application as text) to display dialog "Hello from CYB" buttons {"OK"} with icon stop\'')]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h2",{attrs:{id:"trigger-a-dialog-after-task-completed"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#trigger-a-dialog-after-task-completed"}},[a._v("#")]),a._v(" Trigger a Dialog After Task Completed")]),a._v(" "),e("p",[a._v("You can trigger a dialog box when a task at the command line has completed.")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("python MagicScript.py "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" osascript -e "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'tell application (path to frontmost application as text) to display dialog "The script has completed" buttons {"OK"} with icon caution\'')]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h2",{attrs:{id:"trigger-a-dialog-alert-in-specific-application"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#trigger-a-dialog-alert-in-specific-application"}},[a._v("#")]),a._v(" Trigger a Dialog Alert in Specific Application")]),a._v(" "),e("p",[a._v("To send a dialog or alert into a specific application, simply specify the app name in question.")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("osascript -e "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'tell app "Finder" to display dialog "Hello from CYB"\'')]),a._v("\n\nosascript -e "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'tell app "Terminal" to display dialog "Hello from CYB"\'')]),a._v("\n\nosascript -e "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'tell app "Safari" to display dialog "Hello from CYB"\'')]),a._v("\n\nosascript -e "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'tell app "System Events" to display dialog "Wasup"\'')]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br")])]),e("h2",{attrs:{id:"trigger-a-dialog-and-notification"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#trigger-a-dialog-and-notification"}},[a._v("#")]),a._v(" Trigger a Dialog and Notification")]),a._v(" "),e("p",[a._v("Here's the example to trigger dialog and notificaiton:")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("osascript -e "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'tell app "System Events" to display dialog "CONTENT" with title "TITLE_NAME" buttons {"OK"} with icon caution\'')]),a._v("\n\nosascript -e "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'tell app "System Events" to display notification "NOTIFICATION_TITLE" with title "TITLE_NAME" subtitle "SUBTITLE_NAME" sound name "Frog"\'')]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("h2",{attrs:{id:"reference"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[a._v("#")]),a._v(" Reference")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://osxdaily.com/2016/09/06/trigger-alert-dialog-mac-via-command-line/",target:"_blank",rel:"noopener noreferrer"}},[a._v("How to Trigger an Alert Dialog Pop-Up from Command Line in Mac OS"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://developer.apple.com/library/archive/documentation/AppleScript/Conceptual/AppleScriptLangGuide/reference/ASLR_cmds.html#//apple_ref/doc/uid/TP40000983-CH216-SW12",target:"_blank",rel:"noopener noreferrer"}},[a._v("AppleScript Language Guide - dispaly dialog"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=i.exports}}]);