(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{541:function(s,t,e){"use strict";e.r(t);var a=e(6),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[e("img",{attrs:{src:"https://i.imgur.com/pt2SuDO.jpg",alt:""}})]),s._v(" "),e("p",[s._v("This is useful when we have a machine (PC1) that does not have an internet connection to do apt update/upgrade, but we have another machine (PC2) that is able to access internet, and accessible via ssh from the PC1.")]),s._v(" "),e("p",[s._v("In the article PC1 as Server, PC2 as client machine.")]),s._v(" "),e("h2",{attrs:{id:"on-client-machine"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#on-client-machine"}},[s._v("#")]),s._v(" On client machine")]),s._v(" "),e("ol",[e("li",[s._v("open SOCKS proxy on port 54321")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -f -N -D "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("54321")]),s._v(" localhost\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## with ssh key")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -i key.pem -f -N -D "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("54321")]),s._v(" localhost\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("ul",[e("li",[e("code",[s._v("-i")]),s._v(": The path to the SSH key to be used to connect to the host")]),s._v(" "),e("li",[e("code",[s._v("-D")]),s._v(": Tells SSH that we want a SOCKS tunnel on the specified port number (you can choose a number between 1025 and 65536)")]),s._v(" "),e("li",[e("code",[s._v("-f")]),s._v(": Forks the process to the background")]),s._v(" "),e("li",[e("code",[s._v("-C")]),s._v(": Compresses the data before sending it")]),s._v(" "),e("li",[e("code",[s._v("-q")]),s._v(": Uses quiet mode")]),s._v(" "),e("li",[e("code",[s._v("-N")]),s._v(": Tells SSH that no command will be sent once the tunnel is up")])]),s._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[s._v("Verify that the tunnel is running")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" aux "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v("\n\nubuntu   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2533539")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.2")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("12548")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7044")]),s._v(" pts/1    S+   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":30   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":02 "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -i dct.pem -N -D "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("54321")]),s._v(" localhost\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## close the proxy by using kill PID command")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2533539")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("Start a reverse ssh port forwarding to Server\nBind remote port 6666 to local port 54321. This will makes your socks proxy available to server on port 6666.")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" user@server_ip -R "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6666")]),s._v(":localhost:54321\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"on-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#on-server"}},[s._v("#")]),s._v(" On Server")]),s._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[s._v("Setup apt proxy")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('sudo vim /etc/apt/apt.conf.d/proxy.conf\n\nAcquire {\n  HTTP::proxy "socks5h://127.0.0.1:6666";\n  HTTPS::proxy "socks5h://127.0.0.1:6666";\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("ul",[e("li",[s._v("using socks")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("Acquire::http::proxy "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"socks5h://server:port"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("using proxy")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("Acquire::http::proxy "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://server:port"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",{attrs:{start:"4"}},[e("li",[s._v("apt is good to go")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" upgrade -y\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",{attrs:{start:"5"}},[e("li",[s._v("Setup network access using proxychain")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" proxychains\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/proxychains.conf\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ProxyList"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nsocks5 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6666")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("ol",{attrs:{start:"6"}},[e("li",[s._v("Everthing is good to go\nadd "),e("code",[s._v("proxychain")]),s._v(" at the begin of the command if you need the network access")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## proxychain <command>")]),s._v("\nproxychain "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" www.google.com\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"references"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[s._v("#")]),s._v(" References")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://askubuntu.com/questions/35223/syntax-for-socks-proxy-in-apt-conf",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://askubuntu.com/questions/35223/syntax-for-socks-proxy-in-apt-conf"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://serverfault.com/questions/361794/with-ssh-only-reverse-tunnel-web-access-via-ssh-socks-proxy",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://serverfault.com/questions/361794/with-ssh-only-reverse-tunnel-web-access-via-ssh-socks-proxy"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/how-to-route-web-traffic-securely-without-a-vpn-using-a-socks-tunnel",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.digitalocean.com/community/tutorials/how-to-route-web-traffic-securely-without-a-vpn-using-a-socks-tunnel"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://steemit.com/cn/@antonsteemit/proxychains",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://steemit.com/cn/@antonsteemit/proxychains"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);