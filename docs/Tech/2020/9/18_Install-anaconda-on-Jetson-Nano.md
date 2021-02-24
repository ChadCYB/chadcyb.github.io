---
title: "Install anaconda on Jetson Nano"
date: 2020-09-18
sidebar: 'auto'
tags:
 - jetson-nano
 - anaconda
 - install
categories:
 - Tech
publish: True
meta:
  - property: og:description
    content: For those who are already familiar with installation and setup for anaconda 1 or miniconda the steps for archiconda are similar.
  - property: og:image
    content: https://i.imgur.com/0oN3FiS.jpg
---

![](https://i.imgur.com/0oN3FiS.jpg)

For those who are already familiar with installation and setup for anaconda 1 or miniconda the steps for archiconda are similar.

First download and install a version of the archiconda installer:

## Install archiconda
use install path: `$HOME/archiconda3`
``` bash
wget --quiet -O archiconda.sh https://github.com/Archiconda/build-tools/releases/download/0.2.3/Archiconda3-0.2.3-Linux-aarch64.sh && \
    sh archiconda.sh -b -p $HOME/archiconda3 && \
    rm archiconda.sh
```

## Update the conda
Next we update the conda environment and add channels containing recipes for 64 bit Arm packages.
``` bash
export PATH=$HOME/archiconda3/bin:$PATH
conda config --add channels gaiar && \
conda config --add channels conda-forge && \
conda config --add channels c4aarch64 && \
conda update -n base --all && \
conda install -y python=3.7 libiconv && \
conda install -y conda-build && \
conda install -y anaconda-client
```
A standard conda environment should now be available in `$HOME/archiconda3/bin`. To automatically edit your `.bashrc` and activate the base environment on login.
``` bash
vi ~/.bashrc

# activate a conda environment
. /home/user/archiconda3/etc/profile.d/conda.sh
conda activate
```
Active bashrc
``` bash
source ~/.bashrc
```

## References
- [github - Archiconda/build-tools](https://github.com/Archiconda/build-tools/releases)
- [anaconda-for-jetson-nano](https://forums.developer.nvidia.com/t/anaconda-for-jetson-nano/74286/11)
- [How do I activate a conda environment in my .bashrc](https://askubuntu.com/questions/849470/how-do-i-activate-a-conda-environment-in-my-bashrc)

---
## Install pytorch 
``` bash
## add new conda env and activate
conda create -n py36 python=3.6
conda activate py36

## install PyTorch v1.6.0
wget https://nvidia.box.com/shared/static/9eptse6jyly1ggt9axbja2yrmj6pbarc.whl
mv 9eptse6jyly1ggt9axbja2yrmj6pbarc.whl torch-1.6.0-cp36-cp36m-linux_aarch64.whl
pip install torch-1.6.0-cp36-cp36m-linux_aarch64.whl
```

### Problem fix
- Problem: 
``` bash
9ept...barc.whl is not a valid wheel filename.
```
- Solution:
Please make sure the whl ranme to correct filename.
``` bash
mv 9e...whl torch-1.6...whl
```
python 3.6 -> `torch-1.6.0-cp36-cp36m-linux_aarch64.whl`
python 3.7 -> `torch-1.6.0-cp37-cp37m-linux_aarch64.whl`


## References
- [PyTorch for Jetson](https://forums.developer.nvidia.com/t/pytorch-for-jetson-version-1-6-0-now-available/72048)
- [在Jetson Nano (TX1/TX2)上使用Anaconda与PyTorch 1.1.0](https://zhuanlan.zhihu.com/p/64868319)
- [stackoverflow - .whl is not a valid wheel filename, storing debug log for failure](https://stackoverflow.com/questions/33213430/whl-is-not-a-valid-wheel-filename-storing-debug-log-for-failure-in-c)

---
## Using SDK Manager
[NVIDIA SDK Manager](https://docs.nvidia.com/sdk-manager/install-with-sdkm-jetson/index.html) provides an end-to-end development environment setup solution for NVIDIA’s DRIVE and Jetson SDKs for both host and target devices.

## Disable gui while traning
``` bash
sudo init 3
## start desktop
sudo init 5
```
- [https://github.com/dusty-nv/jetson-inference/blob/master/docs/pytorch-transfer-learning.md](https://github.com/dusty-nv/jetson-inference/blob/master/docs/pytorch-transfer-learning.md)

## Other env (TensorRT)
- [https://www.bojankomazec.com/2019/12/how-to-install-tensorrt-python-package.html?m=1](https://www.bojankomazec.com/2019/12/how-to-install-tensorrt-python-package.html?m=1)
