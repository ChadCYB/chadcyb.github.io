---
title: "Install kubernets and setup cluster on Ubuntu"
date: 2020-12-08
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
    content: This article brings you to set up Kubernets cluster..
  - property: og:image
    content: https://i.imgur.com/tG9KkYv.jpg
---

![](https://i.imgur.com/tG9KkYv.jpg)

Kubernetes (K8s) is an open-source container-orchestration system for automating computer application deployment, scaling, and management. This article brings you to set up Kubernets cluster.

## Generic installation
``` bash
#!/bin/bash
## Generic installation on all nodes

sysctl -w net.ipv4.ip_forward=1
sed -i 's/#net.ipv4.ip_forward=1/net.ipv4.ip_forward=1/g' /etc/sysctl.conf 
sudo sysctl -p /etc/sysctl.conf

swapoff -a
## sed -i '2s/^/#/' /etc/fstab
sudo sed -i 's/.*swap.*/#&/' /etc/fstab

apt-get update
apt-get update && apt-get install apt-transport-https ca-certificates curl software-properties-common -y

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -

add-apt-repository \
    "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
    $(lsb_release -cs) \
    stable"
apt-get update && apt-get install -y docker-ce

cat > /etc/docker/daemon.json <<EOF
{
  "exec-opts": ["native.cgroupdriver=systemd"],
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "100m"
  },
  "storage-driver": "overlay2"
}
EOF

mkdir -p /etc/systemd/system/docker.service.d
systemctl daemon-reload
systemctl restart docker
systemctl enable docker

apt-get update && apt-get install -y apt-transport-https curl
curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key add -
cat <<EOF >/etc/apt/sources.list.d/kubernetes.list
deb https://apt.kubernetes.io/ kubernetes-xenial main
EOF

apt-get update
apt install kubernetes-cni -y # not in documentation needed for updates
apt-get install kubelet kubeadm kubectl -y
apt-mark hold kubelet kubeadm kubectl
systemctl daemon-reload
systemctl restart kubelet
sudo systemctl enable kubelet

## Create Default Audit Policy

mkdir -p /etc/kubernetes
cat > /etc/kubernetes/audit-policy.yaml <<EOF
apiVersion: audit.k8s.io/v1
kind: Policy
rules:
- level: Metadata
EOF

# folder to save audit logs
mkdir -p /var/log/kubernetes/audit

## Install NFS Client Drivers
sudo apt-get update
sudo apt-get install nfs-common

```

## Kubernetes master
``` bash
## kubeadm-init-command-for-flannel
kubeadm init --pod-network-cidr 10.244.0.0/16

## user as regular user
mkdir -p $HOME/.kube                                                       
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config                   
sudo chown $(id -u):$(id -g) $HOME/.kube/config

## Deploy a pod network to the cluster.                                   
sudo kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml
```

## Kubernetes node
Then you can join any number of worker nodes by running the following on each as **root**:
``` bash
kubeadm join 192.168.100.100:6443 --token vhsezb.xgf7psithetqfw4f --discovery-token-ca-cert-hash sha256:3f60a1ed0db62dea0c53d5c0961fe6bf539d66e84201969568b9f4ceb39c13a6
```
### Join cluster after init token expired
``` bash
## run this command on master
kubeadm token create --print-join-command
```

## Check add nodes
``` bash
kubectl get nodes

## set node roles
## kubectl label nodes <your_node> kubernetes.io/role=<your_label>
kubectl label nodes worker001 kubernetes.io/role=worker

kubectl get nodes
```
### node get into `Not Ready` stage after reboot
It caused by not disabling swap after reboot
``` bash
systemctl status kubelet

swapoff -a
cp -p /etc/fstab /etc/fstab.bak$(date '+%Y%m%d%H%M%S')
sudo sed -i 's/.*swap.*/#&/' /etc/fstab
systemctl daemon-reload
systemctl restart kubelet
systemctl status kubelet
```

## Deploying the Dashboard UI 
- [kubernetes.io - Web UI (Dashboard)](https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/)

## Advance - Build cluster Master and cluster Node
- [Install and configure a multi-master Kubernetes cluster with kubeadm
](https://dockerlabs.collabnix.com/kubernetes/beginners/Install-and-configure-a-multi-master-Kubernetes-cluster-with-kubeadm.html)

## References
- [https://medium.com/faun/kubernetes-prerequisites-for-setup-kubenetes-cluster-part-2-699b3f93d6cc](https://medium.com/faun/kubernetes-prerequisites-for-setup-kubenetes-cluster-part-2-699b3f93d6cc)
- [https://stackoverflow.com/questions/48984659/understanding-kubeadm-init-command-for-flannel](https://stackoverflow.com/questions/48984659/understanding-kubeadm-init-command-for-flannel)
- [https://blog.tomy168.com/2019/08/centos-76-kubernetes.html](https://blog.tomy168.com/2019/08/centos-76-kubernetes.html)
- [https://tachingchen.com/tw/blog/kubernetes-installation-with-kubeadm/](https://tachingchen.com/tw/blog/kubernetes-installation-with-kubeadm/)
- [https://stackoverflow.com/questions/47126779/join-cluster-after-init-token-expired](https://stackoverflow.com/questions/47126779/join-cluster-after-init-token-expired)
- [https://stackoverflow.com/questions/48854905/how-to-add-roles-to-nodes-in-kubernetes](https://stackoverflow.com/questions/48854905/how-to-add-roles-to-nodes-in-kubernetes)
- [https://www.cnblogs.com/jackluo/p/10337230.html](https://www.cnblogs.com/jackluo/p/10337230.html)
- [https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/troubleshooting-kubeadm/#default-nic-when-using-flannel-as-the-pod-network-in-vagrant](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/troubleshooting-kubeadm/#default-nic-when-using-flannel-as-the-pod-network-in-vagrant)
