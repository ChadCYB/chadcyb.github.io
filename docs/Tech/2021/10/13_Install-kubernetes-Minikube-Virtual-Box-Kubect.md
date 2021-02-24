---
title: "Install kubernetes (Minikube, Virtual Box, Kubectl) on Ubuntu"
date: 2021-10-13
sidebar: 'auto'
tags:
 - k8s
 - Ubuntu
 - install
categories:
 - Tech
publish: True
meta:
  - property: og:description
    content: This article will teach you how to install local Kubernetes - minikube on ubuntu.
  - property: og:image
    content: https://i.imgur.com/egtW6Ih.jpg
---

![](https://i.imgur.com/egtW6Ih.jpg)

With more and more containers and services, I started to find other better management methods. Speaking of container service management tools, of course it is the famous Kubernetes(commonly stylized as K8s). This article will teach you how to install local Kubernetes - minikube on an ubuntu computer.


## Install VirtualBox
``` bash
sudo apt install virtualbox -y 
```

## Install kubectl
``` bash
curl -LO "https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl"

chmod +x ./kubectl
sudo mv ./kubectl /usr/local/bin/kubectl

##check verison
kubectl version --client
```

## Install minikube
``` bash
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube_latest_amd64.deb
sudo dpkg -i minikube_latest_amd64.deb
rm minikube_latest_amd64.deb

## start and check status
minikube start
minikube status
```
### Problem solve - Minikube Failed to pull image http: server gave HTTP response to HTTPS client
``` bash
minikube delete
minikube start --insecure-registry "192.168.0.0/24"
```
- [minikube - Enabling Insecure Registries](https://minikube.sigs.k8s.io/docs/handbook/registry/#:~:text=systemctl%20restart%20kubelet%20.-,Enabling%20Insecure%20Registries,requests%20from%20the%20CIDR%20range)
- [serverfault - Minikube Failed to pull image http: server gave HTTP response to HTTPS client](https://serverfault.com/questions/1026515/minikube-failed-to-pull-image-http-server-gave-http-response-to-https-client)

## References
- [medium - kubernetes basic concept tutorial](https://medium.com/@C.W.Hu/kubernetes-basic-concept-tutorial-e033e3504ec0)
- [minikube start - Installation](https://minikube.sigs.k8s.io/docs/start/)
- [Install virtualbox on ubuntu 20.04](https://linuxconfig.org/install-virtualbox-on-ubuntu-20-04-focal-fossa-linux)
- [kubernetes Doc - Install and Set Up kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)
- [galaxyyao blog - 容器-5-kubeadm部署Kubernetes1.14.2集群踩坑记](https://galaxyyao.github.io/2019/05/29/%E5%AE%B9%E5%99%A8-5-kubeadm%E9%83%A8%E7%BD%B2Kubernetes1-14-2%E9%9B%86%E7%BE%A4%E8%B8%A9%E5%9D%91%E8%AE%B0/)
