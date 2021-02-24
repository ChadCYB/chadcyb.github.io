---
title: "Mac terminal environment setup - zsh + Powerline + tmux"
date: 2020-11-15
sidebar: 'auto'
tags:
 - Mac
 - shell
 - tmux
 - zsh
categories:
 - Tech
publish: True
meta:
  - property: og:description
    content: This is a note about how I setup my new mac's terminal environment.
  - property: og:image
    content: https://i.imgur.com/a0JnU5h.png
---

![](https://i.imgur.com/a0JnU5h.png)

This is a note about how I setup my new mac's terminal environment:

## Powerline font
Install [nerd-font](https://github.com/ryanoasis/nerd-fonts) or  [powerline font](https://github.com/powerline/fonts).
- Nerd-font
``` bash
brew tap homebrew/cask-fonts
brew cask install font-hack-nerd-font
```
- Powerline fonts
``` bash
# clone
git clone https://github.com/powerline/fonts.git --depth=1
# install
cd fonts
./install.sh
# clean-up a bit
cd ..
rm -rf fonts
```

## Oh My Zsh
Install Zsh.
``` bash
brew install wget
sh -c "$(wget https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"
```
Change default zsh theme. You can see all the themes [here](https://github.com/ohmyzsh/ohmyzsh/wiki/themes) or using [powerlevel10k theme](https://github.com/romkatv/powerlevel10k).

- ohmyzsh themes
``` bash
vim ~/.zshrc
> ZSH_THEME="agnoster"
```

- powerlevel10k theme
``` bash
brew install romkatv/powerlevel10k/powerlevel10k
echo 'source /usr/local/opt/powerlevel10k/powerlevel10k.zsh-theme' >>~/.zshrc
```

After setup, enter the following command to apply the configuration.
``` bash
exec $SHELL
```

Insecure Problme fix:
``` bash
# [oh-my-zsh] Insecure completion-dependent directories detected:
chmod 755 /usr/local/share/zsh
chmod 755 /usr/local/share/zsh/site-functions
```

## tmux enviroment setup
Install tmux via HomeBrew.
``` bash
brew install tmux
```
 enviroment setup
``` bash
cd  
rm -rf .tmux  
git clone https://github.com/gpakosz/.tmux.git  
ln -s .tmux/.tmux.conf  
cp .tmux/.tmux.conf.local .

tmux source-file ~/.tmux.conf
```

## References
- [Github - nerd-font](https://github.com/ryanoasis/nerd-fonts)
- [Github - powerline font](https://github.com/powerline/fonts)
- [超簡單！十分鐘打造漂亮又好用的 zsh command line 環境](https://medium.com/statementdog-engineering/prettify-your-zsh-command-line-prompt-3ca2acc967f)
- [iTerm2 + Powerline + Vim 設定](https://www.azureunali.com/mac-iterm2-powerline-vim-%E8%A8%AD%E5%AE%9A/)
- [Github - powerlevel10k](https://github.com/romkatv/powerlevel10k#oh-my-zsh)
- [更新完 zsh 说我目录权限问题的解决](https://www.jianshu.com/p/03bcc3e2930e)
- [Reloading tmux config](https://sanctum.geek.nz/arabesque/reloading-tmux-config/)
