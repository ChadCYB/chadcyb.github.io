(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{524:function(s,e,a){"use strict";a.r(e);var t=a(6),r=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("We often encounter all kinds of network architectures, some are simply connected directly, some are behind other machines, and some are blocked by firewall that can't easily access it. This article show how to use ssh to connect in various situations.")]),s._v(" "),a("h2",{attrs:{id:"local-port-forwarding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#local-port-forwarding"}},[s._v("#")]),s._v(" Local Port Forwarding")]),s._v(" "),a("ul",[a("li",[s._v("Situation:\n"),a("ul",[a("li",[a("strong",[s._v("access "),a("code",[s._v("remote server's network")]),s._v(" on"),a("code",[s._v("loaclhost")])])]),s._v(" "),a("li",[s._v("only "),a("code",[s._v("localhost")]),s._v(" can acees "),a("code",[s._v("remote server")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("localhost --ssh--\x3e remote server")])]),s._v(" "),a("li",[a("code",[s._v("localhost <--X-- remote server")])])])])])])]),s._v(" "),a("h3",{attrs:{id:"command"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command"}},[s._v("#")]),s._v(" Command")]),s._v(" "),a("p",[s._v("Run following command on "),a("strong",[s._v("localhsot")]),s._v(".")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -L "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("local_port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("target"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("remote_server"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Run in background")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -NfL "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("local_port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("target"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("remote_server"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## With ssh key")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key_path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -NfL "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("local_port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("target"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("remote_server"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[s._v("All traffic sent to "),a("code",[s._v("localhost:<local_port>")]),s._v(" will be tunneled to "),a("code",[s._v("<target>")]),s._v(" thought your "),a("code",[s._v("<remote_server>")]),s._v(".")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("localhost:<local_port> --\x3e <remote_server> --\x3e <target>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"example-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-1"}},[s._v("#")]),s._v(" Example 1")]),s._v(" "),a("p",[s._v("access remote server 22 port thought localhost 1022")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("localhsot:1022 --\x3e user@192.168.90.1 --\x3e 192.168.90.1:22\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("Command")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -NfL "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1022")]),s._v(":192.168.90.1:22 user@192.168.90.1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("Now you can access remote server thought localhost:1022")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" user@localhost -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1022")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"example-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[s._v("#")]),s._v(" Example 2")]),s._v(" "),a("p",[s._v("access office web server(192.168.90.100) 80 port thought localhost 8080")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("localhsot:8080 --\x3e user@192.168.90.1 --\x3e 192.168.90.100:80\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("Command")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -NfL "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(":192.168.90.1:80 user@192.168.90.1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("Now you can access office web server by browsing "),a("code",[s._v("http://localhost:8080")]),s._v(".")]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"remote-port-forwarding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remote-port-forwarding"}},[s._v("#")]),s._v(" Remote Port Forwarding")]),s._v(" "),a("ul",[a("li",[s._v("Situation:\n"),a("ul",[a("li",[a("strong",[s._v("access "),a("code",[s._v("loaclhost's network")]),s._v(" on "),a("code",[s._v("remote server")])])]),s._v(" "),a("li",[s._v("only "),a("code",[s._v("localhost")]),s._v(" can acees "),a("code",[s._v("remote server")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("localhost --ssh--\x3e remote server")])]),s._v(" "),a("li",[a("code",[s._v("localhost <--X-- remote server")])])])])])])]),s._v(" "),a("h3",{attrs:{id:"command-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command-2"}},[s._v("#")]),s._v(" Command")]),s._v(" "),a("p",[s._v("Run following command on "),a("strong",[s._v("localhost")]),s._v(".")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -R "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("remote_port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("target"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("remote_server"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Run in background")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -NfR "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("remote_port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("target"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("remote_server"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## With ssh key")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key_path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -NfR "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("remote_port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("target"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("remote_server"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[s._v("All traffic sent to "),a("code",[s._v("<remote_server>:<remote_port>")]),s._v(" will be tunneled to "),a("code",[s._v("<target>")]),s._v(" thought "),a("code",[s._v("localhost")]),s._v(".")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<remote_server>:<remote_port> --\x3e localhost --\x3e <target>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"example-1-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-1-2"}},[s._v("#")]),s._v(" Example 1")]),s._v(" "),a("p",[s._v("access localhost ssh thoght remote server 1022 port")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("192.168.90.1:1022 -> localhsot --\x3e localhsot:22\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("Command")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## type on localhost")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -NfR "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1022")]),s._v(":localhost:22 user@192.168.90.1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("Now you can access localhost ssh on remote server thought localhost:1022")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## type on remote server")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" user@localhost -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1022")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"example-2-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-2-2"}},[s._v("#")]),s._v(" Example 2")]),s._v(" "),a("p",[s._v("access local proxy server "),a("code",[s._v("192.168.1.100:3128")]),s._v(" thought remote server "),a("code",[s._v("192.168.90.1:1234")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("192.168.90.1:1234 -> localhsot --\x3e 192.168.1.100:3128\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("Command")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## type on localhost")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -NfR "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1234")]),s._v(":192.168.90.100:3128 user@192.168.90.1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("Now you can set up proxy on "),a("code",[s._v("localhost:1234")]),s._v(" on remote server.")]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"dynamic-port-forwarding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-port-forwarding"}},[s._v("#")]),s._v(" Dynamic Port Forwarding")]),s._v(" "),a("ul",[a("li",[s._v("SSH SOCKS Server")]),s._v(" "),a("li",[s._v("Pass all traffic thought SOCKS Server")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("localhost ==-all traffic-==> remote server ==> internet\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"command-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command-3"}},[s._v("#")]),s._v(" Command")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -D "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(" user@remote.server\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"example-1-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-1-3"}},[s._v("#")]),s._v(" Example 1")]),s._v(" "),a("ul",[a("li",[s._v("Proxy the remote server's traffic thought localhost's network")]),s._v(" "),a("li",[s._v("Remote server cant access internet")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Proxy Server: localhost:54321\nRemote Server: 192.168.90.1\n\n192.168.90.1:54321 --ssh tunnel--\x3e localhost:54321 ==> internet\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Create proxy server on localhost:54321")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -i /home/ubuntu/key.pem -f -N -D "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("54321")]),s._v(" localhost\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Create a resever ssh to remote server")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -fNCR "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("54321")]),s._v(":localhost:54321 user@192.168.90.1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("-C")]),s._v(" means compress the traffic")]),s._v(" "),a("li",[a("code",[s._v("-fN")]),s._v(" run in background")]),s._v(" "),a("li",[a("code",[s._v("-D")]),s._v(" create proxy server")]),s._v(" "),a("li",[a("code",[s._v("-R")]),s._v(" create reverse tunnel")])]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"executing-a-command-on-remote-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#executing-a-command-on-remote-server"}},[s._v("#")]),s._v(" Executing a command on remote server")]),s._v(" "),a("ul",[a("li",[s._v("Easy for write in shell scirpt when you need runing command on remote server.")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("remote_server"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -- "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("command"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## get remote server's apache error log")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" user@192.168.9.1 -- "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /var/log/apache2/error.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" error "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" remote.server.apache2.log\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("hr"),s._v(" "),a("h2",{attrs:{id:"postscript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#postscript"}},[s._v("#")]),s._v(" Postscript")]),s._v(" "),a("h3",{attrs:{id:"check-ports-in-use-linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#check-ports-in-use-linux"}},[s._v("#")]),s._v(" check ports in use linux")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -tulpn "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" LISTEN\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"kill-the-ssh-seesion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kill-the-ssh-seesion"}},[s._v("#")]),s._v(" kill the ssh seesion")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" aux "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("PID"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"create-ssh-session-without-occupy-a-tty"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-ssh-session-without-occupy-a-tty"}},[s._v("#")]),s._v(" Create ssh session without occupy a tty")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("-nNT")])])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -nNT -L "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9000")]),s._v(":imgur.com:80 user@example.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("Arguments explained\n"),a("ul",[a("li",[a("code",[s._v("-n")]),s._v(" Redirects stdin from /dev/null (actually, prevents reading from stdin). This must be used when ssh is run in the background.")]),s._v(" "),a("li",[a("code",[s._v("-N")]),s._v(" Do not execute a remote command. This is useful for just forwarding ports (protocol version 2 only).")]),s._v(" "),a("li",[a("code",[s._v("-T")]),s._v(" Disable pseudo-terminal allocation.")])])])]),s._v(" "),a("h2",{attrs:{id:"reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[s._v("#")]),s._v(" Reference")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://70tw.blogspot.com/2010/10/linux-ssh-tunnel-vpn.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("反向建立 SSH Tunnel、免 VPN 連回公司"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://myapollo.com.tw/zh-tw/ssh-port-forwarding/",target:"_blank",rel:"noopener noreferrer"}},[s._v("SSH Port Forwarding / Agent Forwarding"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://yu-jack.github.io/2019/01/08/ssh-tunnel/",target:"_blank",rel:"noopener noreferrer"}},[s._v("關於 SSH Tunnel 連線"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://www.howtogeek.com/168145/how-to-use-ssh-tunneling/",target:"_blank",rel:"noopener noreferrer"}},[s._v("how to use ssh tunneling"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://gist.github.com/FMCorz/6f84985f96c5c7f9f4c9a73f31f79d21",target:"_blank",rel:"noopener noreferrer"}},[s._v("gist - Port forwarding using SSH"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://dev.to/mrkaran/using-sshtunnel-2h24",target:"_blank",rel:"noopener noreferrer"}},[s._v("sshuttle - A better ssh tunnel"),a("OutboundLink")],1)])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("sshuttle --dns --vr ubuntu@localhost "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("/0 --ssh-cmd "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ssh -i ~/dct_key/dct.pem -p 10022'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);e.default=r.exports}}]);