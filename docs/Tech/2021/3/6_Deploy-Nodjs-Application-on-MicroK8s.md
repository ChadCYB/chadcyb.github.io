---
title: "Deploy Nodjs Application on MicroK8s"
date: 2021-03-06
sidebar: 'auto'
tags:
 - k8s
 - nodejs
categories:
 - Tech
publish: True
meta:
  - property: og:description
    content: This article is a simple teaching how to deploy the dockerized nodejs application to the microk8s.
  - property: og:image
    content: https://i.imgur.com/2TrhRfG.jpg
---

![](https://i.imgur.com/2TrhRfG.jpg)

This article is a simple teaching how to deploy the dockerized nodejs application to the microk8s.

## Build docker image
``` bash
docker build . -t localhost:32000/myapp:registry
```
## Push to docker register
``` bash
# Working with MicroK8s’ built-in registry
microk8s enable registry

docker push localhost:32000/myapp
```

## Edit deamon.json
``` bash
vi /etc/docker/daemon.json

{
  "insecure-registries" : ["localhost:32000"]
}

sudo systemctl restart docker
```

## Config delpoy files
- deployment.yaml
``` yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp-deployment
  labels:
    app: myapp
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: localhost:32000/myapp:registry
        ports:
        - containerPort: 3000
```
- service.yaml
``` yaml
apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  selector:
    app: myapp
  type: NodePort
  ports:
    - protocol: TCP
      port: 3000
      targetPort: 3000
      nodePort: 30000
```

## Deploy pod, service
``` bash
kubectl create -f deployment.yaml
kubectl create -f service.yaml

kubectl get all
```

## References
- [https://microk8s.io/docs/registry-built-in](https://microk8s.io/docs/registry-built-in)
- [https://kubernetes.io/zh/blog/2019/11/26/%E4%BD%BF%E7%94%A8-microk8s-%E5%9C%A8-linux-%E4%B8%8A%E6%9C%AC%E5%9C%B0%E8%BF%90%E8%A1%8C-kubernetes/](https://kubernetes.io/zh/blog/2019/11/26/%E4%BD%BF%E7%94%A8-microk8s-%E5%9C%A8-linux-%E4%B8%8A%E6%9C%AC%E5%9C%B0%E8%BF%90%E8%A1%8C-kubernetes/)
- [https://kubernetes.io/docs/concepts/workloads/controllers/deployment/](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)
