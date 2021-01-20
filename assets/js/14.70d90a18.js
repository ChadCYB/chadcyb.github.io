(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{511:function(e,t,r){"use strict";r.r(t);var a=r(6),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[r("img",{attrs:{src:"https://i.imgur.com/Pe2MAgv.jpg",alt:""}})]),e._v(" "),r("h2",{attrs:{id:"problem"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#problem"}},[e._v("#")]),e._v(" Problem")]),e._v(" "),r("p",[e._v("I upgraded the wifi equipment and replaced it with the UniFi Series products a few days ago.  UniFi Controller can manage all the UniFi devices through the browser, it is very easy to use.  However, I got a problem while upgrading the USG to the newer firmware.")]),e._v(" "),r("p",[e._v("There are  "),r("a",{attrs:{href:"https://help.ubnt.com/hc/en-us/articles/204910064-UniFi-Changing-the-Firmware-of-a-UniFi-Device",target:"_blank",rel:"noopener noreferrer"}},[e._v("several ways"),r("OutboundLink")],1),e._v("  the upgrade the firmware:")]),e._v(" "),r("ol",[r("li",[r("p",[e._v('Via the Controller Web UI\nUpgrade by pressing "upgrade icon" (on the top right) via controller web UI.  After upgrade, my  "upgrade icon" is still over there... so Im going to try another way.')])]),e._v(" "),r("li",[r("p",[e._v("Via SSH to the device\nConnect to a device using an SSH, then run the following command:")])])]),e._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("upgrade http://dl.ui.com/unifi/firmware/UGW3/4.4.44.5213844/UGW3.v4.4.44.5213844.tar\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("However, I got the error message: 'Upgrade image does not support the device.'\n"),r("img",{attrs:{src:"https://4.bp.blogspot.com/-Sm65xFEwr8E/Xcsb-VH9ubI/AAAAAAAAkjE/4sXetlSoGUg-qHQknlhBzQmfermwSvOagCK4BGAYYCw/s1600/d7de5b078766bd21ad86e0d70c3457e1824c7c4f.jpg",alt:""}})]),e._v(" "),r("h2",{attrs:{id:"solution"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#solution"}},[e._v("#")]),e._v(" Solution")]),e._v(" "),r("p",[e._v("Here's the solution, if you try out all the way that you can do it.\nModify the upgrade program in the device:")]),e._v(" "),r("ol",[r("li",[e._v("SSH into the USG.")]),e._v(" "),r("li",[e._v("Issue "),r("code",[e._v("sudo vi /usr/bin/ubnt-upgrade")]),e._v(" command.")]),e._v(" "),r("li",[e._v("Using the down arrow scroll to line number 504. You should be able to see the progress at the bottom while you scroll down and it should say "),r("code",[e._v("- /usr/bin/ubnt-upgrade 504/706 71%")]),e._v(" when you reach line 504.")]),e._v(" "),r("li",[e._v("You need to comment the line 504. Hold "),r("code",[e._v("Shift")]),e._v(" key on the keyboard and hit "),r("code",[e._v("i")]),e._v(" key.")]),e._v(" "),r("li",[e._v("Add the "),r("code",[e._v("#")]),e._v(" sign before "),r("code",[e._v("exit 1")]),e._v(" and then hit Esc key on the keyboard. The line should look like the following:")])]),e._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#exit 1")]),e._v("\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[r("img",{attrs:{src:"https://4.bp.blogspot.com/-cGEsWvVVOPk/XcsTpd8lPtI/AAAAAAAAki4/7lM0eSo5fDUVAd6GUR0h8UWImgxrep0ZQCK4BGAYYCw/s1600/Screen%2BShot%2B2019-11-13%2Bat%2B4.18.41%2BAM.png",alt:""}}),e._v("\n6. Then hit "),r("code",[e._v(":wq")]),e._v(" and hit "),r("code",[e._v("enter")]),e._v(" on the keyboard.\n7. Finally, wait for a while, then upgrade success.\n"),r("img",{attrs:{src:"https://4.bp.blogspot.com/-t0FUiIz40mk/XcsSwtfwK8I/AAAAAAAAkis/5WZw53jFXtwn4NPLj5xM8Vl7L8uRLTEmwCK4BGAYYCw/s400/Screen%2BShot%2B2019-11-13%2Bat%2B4.14.47%2BAM.png",alt:""}})])])}),[],!1,null,null,null);t.default=o.exports}}]);