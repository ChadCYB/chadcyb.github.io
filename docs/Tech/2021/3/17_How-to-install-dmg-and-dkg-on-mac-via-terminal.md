---
title: "Install dmg file on mac via terminal"
date: 2021-03-17
sidebar: 'auto'
tags:
 - Mac
 - install
categories:
 - Tech
publish: True
meta:
  - property: og:description
    content: Here's the tutorial that can help you install a dmg or pkg file on a remote server, but all you have is an ssh access.
  - property: og:image
    content: https://i.imgur.com/FJsz9QJ.jpg
---

![](https://i.imgur.com/FJsz9QJ.jpg)

Here's the tutorial that can help you install a dmg or pkg file on a remote server, when you only have SSH access to that machine.

## Mount the dmg image
You should be able to mount the `.dmg` file by using `hdiutil` command:
``` bash
hdiutil attach /path/to/file.dmg
```

## Install .app or .pkg file
After mounting, go check the folder where your file mount.
The image will be mounted to `/Volumes/<image>`

You may see `.app` or `.pkg` file in the folder. These two kinds of file have different install command.

If it's app file, just copy it to the `Applications` folder.
If it's pkg file, you have to install it by using `installer` command.

``` bash
# install app
sudo cp -rf /Volumes/APP_NAME.app /Applications

# install pkg
sudo installer -pkg /Volumes/"$package" -target /
```

## Unmount the image
After the installation is finished, don't forget to unmount the volume. Using `hdiutil` command to unmout the image.
``` bash
sudo hdiutil detach /Volumes/path_of_mount_folder
```

## References
- [https://apple.stackexchange.com/questions/73926/is-there-a-command-to-install-a-dmg](https://apple.stackexchange.com/questions/73926/is-there-a-command-to-install-a-dmg)