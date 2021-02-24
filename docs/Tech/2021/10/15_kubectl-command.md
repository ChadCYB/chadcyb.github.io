---
title: "kubectl command"
date: 2021-10-15
sidebar: 'auto'
tags:
 - k8s
 - server-management
categories:
 - Tech
publish: True
meta:
  - property: og:description
    content: This is a note for me to learning kubectl command.
  - property: og:image
    content: https://i.imgur.com/dCzF4oU.jpg
---

![](https://i.imgur.com/dCzF4oU.jpg)


This is a note for me to learning kubectl command.

## kubectl
- `kubectl get` - list resources
- `kubectl describe` - show detailed information about a resource
- `kubectl logs` - print the logs from a container in a pod
- `kubectl exec` - execute a command on a container in a pod
``` bash
# get nodes status
kubectl get nodes
# get pod, service, deployment status
kubectl get all
# get pod in detial
kubectl describe pods

# check system log
systemctl status 
journalctl -u -f

# deploy pod, service
kubectl create -f deployment.yaml
kubectl create -f service.yaml
# change pod, service 
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
# check yaml file
kubectl create --dry-run --validate -f deployment.yaml
# delete pod, service
kubectl delete deploy/simple-deployment svc/simple-service

# get detail
kubectl get deploy
kubectl get pods -o wide
# list all service
kubectl get svc --all-namespaces
```

### Problem fix
- Error message
```
  Warning  FailedCreatePodSandBox  76s (x544 over 11m)  kubelet, worker01  (combined from similar events): Failed to create pod sandbox: rpc error: code = Unknown desc = failed to set up sandbox container "fac9dd896af941028c0eb82aeb14b86a6aa0665427abe6f513741c0f73805d73" network for pod "yahome-deployment-cb4b984d5-z4ghc": networkPlugin cni failed to set up pod "yahome-deployment-cb4b984d5-z4ghc_default" network: open /run/flannel/subnet.env: no such file or directory 
```
- Solution
  - [https://ithelp.ithome.com.tw/articles/10209632](https://ithelp.ithome.com.tw/articles/10209632)
  - [https://github.com/kubernetes/kubernetes/issues/70202](https://github.com/kubernetes/kubernetes/issues/70202)
  - [https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml](https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml)

## namespace
Kubernetes supports multiple virtual clusters backed by the same physical cluster. These virtual clusters are called namespaces.

```bash
## create namespace
# kubectl create namespace <name>
kubectl create namespace production
kubectl create namespace development

## list all namespace
kubectl get namespaces --show-labels

## delete namespace
## !!! this will delete all the content under namespace !!!
# kubectl delete namespaces <name>
kubectl delete namespace development
```
### References
- [https://kubernetes.io/zh/docs/tasks/administer-cluster/namespaces/](https://kubernetes.io/zh/docs/tasks/administer-cluster/namespaces/)
