(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{523:function(a,s,t){"use strict";t.r(s);var n=t(6),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[t("img",{attrs:{src:"https://i.imgur.com/8NEnrzj.jpg",alt:""}})]),a._v(" "),t("p",[a._v("Navicat is a database administration tool allows you to connect with the database MySQL, MariaDB, SQL Server, Oracle, PostgreSQL and SQLite from a single application. Navicat Premium combines the functions of other Navicat and supports most of the features used in the management system of modern database, such as stored procedures, events, Triggers, functions, views, etc.")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"},[a._v("Disclaim")]),t("p",[a._v("This article is a note of personal research, for reference only, use at your own risk!!!")])]),t("h2",{attrs:{id:"get-latest-navicat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-latest-navicat"}},[a._v("#")]),a._v(" Get latest navicat")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" http://download3.navicat.com/download/navicat15-premium-en.AppImage\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"install-libraries"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-libraries"}},[a._v("#")]),a._v(" Install libraries")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" ~/navicat15 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ~/navicat15\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# install capstone")]),a._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" libcapstone-dev\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# install keystone")]),a._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" cmake\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/keystone-engine/keystone.git\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" keystone\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" build\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" build\n$ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/make-share.sh\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" ldconfig\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# install rapidjson")]),a._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" rapidjson-dev\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br")])]),t("h2",{attrs:{id:"build-keygen-and-patcher"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#build-keygen-and-patcher"}},[a._v("#")]),a._v(" Build keygen and patcher")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" libssl-dev\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ~/navicat15\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/HeQuanX/navicat-keygen-tools.git\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" navicat-keygen-tools\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" all\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## You will see executable files in bin/ directory.")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])]),t("h3",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[a._v("#")]),a._v(" References")]),a._v(" "),t("ul",[t("li",[a._v("https://stackoverflow.com/questions/46008624/how-to-fix-fatal-error-openssl-opensslv-h-no-such-file-or-directory-in-redhat")])]),a._v(" "),t("h2",{attrs:{id:"build-navicat-appimage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#build-navicat-appimage"}},[a._v("#")]),a._v(" Build navicat AppImage")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ~/navicat15\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## Download navicat (English Version)")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://github.com/HeQuanX/navicat-keygen-tools/releases/download/en/navicat15-premium-en.zip\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## Download navicat (Chinese Version)")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://github.com/HeQuanX/navicat-keygen-tools/releases/download/recommended/navicat15-premium-cs.zip\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("unzip")]),a._v(" navicat15-*.zip\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## Extract all files in the AppImage to a directory")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" ~/navicat15/mount_AppImage\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mount")]),a._v(" -o loop ~/navicat15/navicat15-premium-en.AppImage ~/navicat15/mount_AppImage\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" -r ~/navicat15/mount_AppImage ~/navicat15/navicat15_AppImage\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("umount")]),a._v(" ~/navicat15/mount_AppImage\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -rf ~/navicat15/mount_AppImage\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br")])]),t("h3",{attrs:{id:"references-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references-2"}},[a._v("#")]),a._v(" References")]),a._v(" "),t("ul",[t("li",[a._v("https://github.com/HeQuanX/navicat-keygen-tools/releases")]),a._v(" "),t("li",[a._v("https://superuser.com/questions/1301583/how-can-i-extract-files-from-an-appimage")])]),a._v(" "),t("h2",{attrs:{id:"use-navicat-patcher-to-replace-the-official-public-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use-navicat-patcher-to-replace-the-official-public-key"}},[a._v("#")]),a._v(" Use navicat-patcher to replace the official public key")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ~/navicat15/navicat-keygen-tools\n./bin/navicat-patcher ~/navicat15/navicat15_AppImage\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("h2",{attrs:{id:"repack-appimage-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#repack-appimage-files"}},[a._v("#")]),a._v(" Repack AppImage files")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ~/navicat15\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'https://github.com/AppImage/AppImageKit/releases/download/continuous/appimagetool-x86_64.AppImage'")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" +x appimagetool-x86_64.AppImage\n./appimagetool-x86_64.AppImage ~/navicat15/navicat15_AppImage ~/navicat15/navicat15-patched.AppImage\n\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("h2",{attrs:{id:"use-navicat-keygen-to-generate-snkey-and-activation-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use-navicat-keygen-to-generate-snkey-and-activation-code"}},[a._v("#")]),a._v(" Use navicat-keygen to generate snKey and Activation Code")]),a._v(" "),t("p",[a._v("Disconnect your network! <- important!")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ~/navicat15\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Run the patched AppImage")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" +x navicat15-patched.AppImage\n./navicat15-patched.AppImage\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Use the keygen")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ~/navicat15/navicat-keygen-tools/\n./bin/navicat-keygen --text ./RegPrivateKey.pem\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br")])]),t("ol",[t("li",[a._v("Fill license key by Serial number that the keygen gave and click "),t("code",[a._v("Activate")])]),a._v(" "),t("li",[a._v("Generally online activation will fail and Navicat will ask you do "),t("code",[a._v("Manual Activation")]),a._v(", just choose it.")]),a._v(" "),t("li",[a._v("Copy your request code and paste it in the keygen")])]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("*"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" Input request code "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" Base64: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Double press ENTER to end"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nOaGPC3MNjJ/pINbajFzLRkrV2OaSX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("*"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" Activation Code:\ni45HIr7T1g69Cm9g3bN1DBpM/Zio8"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br")])]),t("ol",{attrs:{start:"4"}},[t("li",[a._v("Finally, you will get "),t("code",[a._v("Activation Code")]),a._v(" which looks like a "),t("code",[a._v("Base64 string")]),a._v(". Just copy it and paste it in Navicat Manual Activation window, then click Activate. If nothing wrong, activation should be done successfully.")])]),a._v(" "),t("h2",{attrs:{id:"clean-up"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clean-up"}},[a._v("#")]),a._v(" Clean up")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## Copy the patched AppImage")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" ~/navicat15/navicat15-patched.AppImage ~/Desktop/navicat15-patched.AppImage\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## Clean up files")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -rf ~/navicat15\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);