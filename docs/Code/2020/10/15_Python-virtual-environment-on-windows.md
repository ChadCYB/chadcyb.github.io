---
title: "Python virtual environment on windows"
date: 2020-10-15
sidebar: 'auto'
tags:
 - Python
 - Windows
categories:
 - Code
publish: True
meta:
  - property: og:description
    content: Just a note for python venv command, which every time I always forget :p
  - property: og:image
    content: https://i.imgur.com/9lqKz5b.jpg
---

Just a note for python venv command, which every time I always forget :p

## Command on Windows
``` batch
py -m venv venv
.\venv\Scripts\activate

pip install -r requirement.txt
```

## Command on Linux
``` bash
pip3 install virtualenv

virtualenv venv
source venv/bin/activate

python3 --version
which python 
pip3 list

deactivate
```

## References
- [Installing packages using pip and virtual environments](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/)
- [使用 pyenv 和 virtualenv 打造 Python 環境](https://www.maxlist.xyz/2020/04/01/python-pyenv-virtualenv/#1_如何安裝_virtualenv)
