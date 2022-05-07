(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{633:function(s,e,a){"use strict";a.r(e);var t=a(12),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[a("img",{attrs:{src:"https://i.imgur.com/vQx0NaS.jpg",alt:""}})]),s._v(" "),a("p",[s._v("Recent upgrades the Ubuntu 20.04 kernel failed badly on my server.\nThis article will teach you how to change the kernel version on ubuntu.")]),s._v(" "),a("h2",{attrs:{id:"get-the-grub-meun"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-the-grub-meun"}},[s._v("#")]),s._v(" Get the grub meun")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" menuentry /boot/grub/grub.cfg\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Ubuntu, with Linux 5.4.0-47-generic'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"change-the-grub-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#change-the-grub-config"}},[s._v("#")]),s._v(" Change the grub config")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/default/grub\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## change this line")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GRUB_DEFAULT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## to the kernel you want to boot")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GRUB_DEFAULT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Advanced options for Ubuntu > Ubuntu, with Linux 5.4.0-47-generic"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"check-config-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#check-config-file"}},[s._v("#")]),s._v(" Check config file")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grub-mkconfig")]),s._v(" -o /boot/grub/grub.cfg\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Sourcing "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("/etc/default/grub'\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Sourcing "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("/etc/default/grub.d/50-cloudimg-settings.cfg"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\n> Sourcing file `/etc/default/grub.d/init-select.cfg'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Generating grub configuration "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Found linux image: /boot/vmlinuz-5.4.0-47-generic\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Found initrd image: /boot/initrd.img-5.4.0-47-generic\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("ul",[a("li",[s._v("If there is an error, check whether "),a("code",[s._v("GRUB_DEFAULT")]),s._v(" has replaced the Linux kernel version and not in the secondary option.")]),s._v(" "),a("li",[s._v("If it is, you need to remove the previous part of "),a("code",[s._v('"Ubuntu advanced options">')]),s._v(" and execute again.")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/default/grub\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GRUB_DEFAULT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Ubuntu, with Linux 5.4.0-47-generic"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("If there's no error, then reboot the system.")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("reboot")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("After reboot using "),a("code",[s._v("uname -r")]),s._v(" check the kernel verison is change")]),s._v(" "),a("h2",{attrs:{id:"install-new-kernel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-new-kernel"}},[s._v("#")]),s._v(" Install new kernel")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## list installable kernel version")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-cache")]),s._v(" search linux-image "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" generic\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## install kernel")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" linux-image-5.4.0-48-generic\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"remove-old-kernel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remove-old-kernel"}},[s._v("#")]),s._v(" Remove old kernel")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## sudo apt-get remove(or purge) linux-image-5.4.0-48-generic")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" purge linux-image-5.4.0-48-generic\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[s._v("#")]),s._v(" References")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://zhengdao.github.io/2018/10/09/switch-ubuntu-linux-kernel/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://zhengdao.github.io/2018/10/09/switch-ubuntu-linux-kernel/"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=n.exports}}]);