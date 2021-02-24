---
title: "How to use Navicat KeygenTools on Ubuntu"
date: 2020-12-22
sidebar: 'auto'
tags:
 - navicat
 - tools
categories:
 - Tech
publish: True
meta:
  - property: og:description
    content: Navicat is a database administration tool allows you to connect with the database MySQL...
  - property: og:image
    content: https://i.imgur.com/8NEnrzj.jpg
---
 ![](https://i.imgur.com/8NEnrzj.jpg)

Navicat is a database administration tool allows you to connect with the database MySQL, MariaDB, SQL Server, Oracle, PostgreSQL and SQLite from a single application. Navicat Premium combines the functions of other Navicat and supports most of the features used in the management system of modern database, such as stored procedures, events, Triggers, functions, views, etc.

::: tip Disclaim
This article is a note of personal research, for reference only, use at your own risk!!!
:::

## Get latest navicat
``` bash
wget http://download3.navicat.com/download/navicat15-premium-en.AppImage
```

## Install libraries
``` bash
mkdir ~/navicat15 && cd ~/navicat15

# install capstone
$ sudo apt-get install libcapstone-dev

# install keystone
$ sudo apt-get install cmake
$ git clone https://github.com/keystone-engine/keystone.git
$ cd keystone
$ mkdir build
$ cd build
$ ../make-share.sh
$ sudo make install
$ sudo ldconfig

# install rapidjson
$ sudo apt-get install rapidjson-dev
```

## Build keygen and patcher
``` bash
sudo apt-get install libssl-dev

cd ~/navicat15
git clone https://github.com/HeQuanX/navicat-keygen-tools.git
cd navicat-keygen-tools
make all
## You will see executable files in bin/ directory.
```
### References
- [stackoverflow - How to fix: fatal error: openssl/opensslv.h: No such file or directory](https://stackoverflow.com/questions/46008624/how-to-fix-fatal-error-openssl-opensslv-h-no-such-file-or-directory-in-redhat)

## Build navicat AppImage
``` bash
cd ~/navicat15

## Download navicat (English Version)
wget https://github.com/HeQuanX/navicat-keygen-tools/releases/download/en/navicat15-premium-en.zip
## Download navicat (Chinese Version)
wget https://github.com/HeQuanX/navicat-keygen-tools/releases/download/recommended/navicat15-premium-cs.zip

unzip navicat15-*.zip

## Extract all files in the AppImage to a directory
mkdir ~/navicat15/mount_AppImage
sudo mount -o loop ~/navicat15/navicat15-premium-en.AppImage ~/navicat15/mount_AppImage
cp -r ~/navicat15/mount_AppImage ~/navicat15/navicat15_AppImage
sudo umount ~/navicat15/mount_AppImage
rm -rf ~/navicat15/mount_AppImage
```
### References
- [Github - navicat-keygen-tools](https://github.com/HeQuanX/navicat-keygen-tools/releases)
- [superuser - how can i extract files from an appimage](https://superuser.com/questions/1301583/how-can-i-extract-files-from-an-appimage)

## Use navicat-patcher to replace the official public key
``` bash
cd ~/navicat15/navicat-keygen-tools
./bin/navicat-patcher ~/navicat15/navicat15_AppImage
```

## Repack AppImage files
``` bash
cd ~/navicat15
wget 'https://github.com/AppImage/AppImageKit/releases/download/continuous/appimagetool-x86_64.AppImage'
chmod +x appimagetool-x86_64.AppImage
./appimagetool-x86_64.AppImage ~/navicat15/navicat15_AppImage ~/navicat15/navicat15-patched.AppImage

```

## Use navicat-keygen to generate snKey and Activation Code
Disconnect your network! <- important!
``` bash
cd ~/navicat15
# Run the patched AppImage
chmod +x navicat15-patched.AppImage
./navicat15-patched.AppImage

# Use the keygen
cd ~/navicat15/navicat-keygen-tools/
./bin/navicat-keygen --text ./RegPrivateKey.pem
```
1. Fill license key by Serial number that the keygen gave and click `Activate`
2. Generally online activation will fail and Navicat will ask you do `Manual Activation`, just choose it.
3. Copy your request code and paste it in the keygen
``` bash
[*] Input request code in Base64: (Double press ENTER to end)
OaGPC3MNjJ/pINbajFzLRkrV2OaSX....
....
....
[*] Activation Code:
i45HIr7T1g69Cm9g3bN1DBpM/Zio8....
```
4. Finally, you will get `Activation Code` which looks like a `Base64 string`. Just copy it and paste it in Navicat Manual Activation window, then click Activate. If nothing wrong, activation should be done successfully.

## Clean up
``` bash
## Copy the patched AppImage
mv ~/navicat15/navicat15-patched.AppImage ~/Desktop/navicat15-patched.AppImage

## Clean up files
rm -rf ~/navicat15
```
