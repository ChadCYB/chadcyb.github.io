(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{528:function(s,e,t){"use strict";t.r(e);var n=t(6),a=Object(n.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("This article will show how to install LibreNMS agent and configuration SNMP on ubuntu.")]),s._v(" "),t("h2",{attrs:{id:"install-snmp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-snmp"}},[s._v("#")]),s._v(" Install SNMP")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" snmpd -y\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"install-librenms-agent"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-librenms-agent"}},[s._v("#")]),s._v(" Install LibreNMS agent")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /opt/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/librenms/librenms-agent.git\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" librenms-agent\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" check_mk_agent /usr/bin/check_mk_agent\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x /usr/bin/check_mk_agent\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" check_mk@.service check_mk.socket /etc/systemd/system\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /usr/lib/check_mk_agent/plugins /usr/lib/check_mk_agent/local\n\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" check_mk.socket "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" systemctl start check_mk.socket\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("ol",[t("li",[s._v("Login to the LibreNMS web interface and edit the device you want to monitor.")]),s._v(" "),t("li",[s._v("Under the modules section, ensure that unix-agent is enabled.")]),s._v(" "),t("li",[s._v("Copy each of the scripts from "),t("code",[s._v("agent-local/")]),s._v(" into "),t("code",[s._v("/usr/lib/check_mk_agent/local")]),s._v(" that you require to be graphed. You can find detail setup instructions for specific applications above.")]),s._v(" "),t("li",[s._v("Make each one executable that you want to use with:")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x /usr/lib/check_mk_agent/local/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$script")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"configure-snmp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configure-snmp"}},[s._v("#")]),s._v(" Configure snmp")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /etc/snmp/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF"),t("span",{pre:!0,attrs:{class:"token bash punctuation"}},[s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("snmpd.conf")]),s._v("\ncom2sec readonly  default         librenms\n\ngroup MyROGroup v2c        readonly\nview all    included  .1                               80\naccess MyROGroup \"\"      any       noauth    exact  all    none   none\n\nsyslocation Rack, Room, Building, City, TW [22.604594, 120.299097]\nsyscontact Admin <admin@example.com>\n\n#Distro Detection\nextend .1.3.6.1.4.1.2021.7890.1 distro /usr/bin/distro\n#Hardware Detection (uncomment to enable)\nextend .1.3.6.1.4.1.2021.7890.2 hardware '/bin/cat /sys/devices/virtual/dmi/id/product_name'\nextend .1.3.6.1.4.1.2021.7890.3 manufacturer '/bin/cat /sys/devices/virtual/dmi/id/sys_vendor'\nextend .1.3.6.1.4.1.2021.7890.4 serial '/bin/cat /sys/devices/virtual/dmi/id/product_serial'\nEOF")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -o /usr/bin/distro https://raw.githubusercontent.com/librenms/librenms-agent/master/snmp/distro\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x /usr/bin/distro\n\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" snmpd\nsystemctl restart snmpd\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])]),t("h2",{attrs:{id:"troubleshooting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[s._v("#")]),s._v(" Troubleshooting:")]),s._v(" "),t("h3",{attrs:{id:"product-serial-permission-denied"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#product-serial-permission-denied"}},[s._v("#")]),s._v(" product_serial Permission denied")]),s._v(" "),t("ul",[t("li",[s._v("Error message:")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v(" /bin/cat: /sys/devices/virtual/dmi/id/product_serial: Permission denied \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("Solution: Change the permission of the file.")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("444")]),s._v(" /sys/devices/virtual/dmi/id/product_serial\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"the-server-requested-authentication-method-unknown-to-the-clientroot"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-server-requested-authentication-method-unknown-to-the-clientroot"}},[s._v("#")]),s._v(" The server requested authentication method unknown to the clientroot")]),s._v(" "),t("ul",[t("li",[s._v("Error message:")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("Error: The server requested authentication method unknown to the clientroot\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("Solution: login to SQL server and run the command below")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("alter user "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'username'")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost'")]),s._v(" identified with mysql_native_password by "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'password'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nFLUSH PRIVILEGES"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[s._v("#")]),s._v(" References")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://stackoverflow.com/questions/52364415/php-with-mysql-8-0-error-the-server-requested-authentication-method-unknown-to",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://stackoverflow.com/questions/52364415/php-with-mysql-8-0-error-the-server-requested-authentication-method-unknown-to"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=a.exports}}]);