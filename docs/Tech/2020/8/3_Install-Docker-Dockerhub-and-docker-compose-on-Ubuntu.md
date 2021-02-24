---
title: "Install Docker, Dockerhub and docker-compose on Ubuntu"
date: 2020-08-03
sidebar: 'auto'
tags:
 - docker
 - Ubuntu
 - install
 - server-management
categories:
 - Tech
publish: True
meta:
  - property: og:description
    content: As the services that need to be managed become more and more complicated, so I started to dockerize all the projects around me...
  - property: og:image
    content: https://i.imgur.com/jaMH25J.jpg
---

![](https://i.imgur.com/jaMH25J.jpg)

As the services that need to be managed become more and more complicated, so I started to dockerize all the projects around me. This articale shows how to install docker things on ubuntu.

## Install docker
Set up the repository:
``` bash
sudo apt-get update

sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common -y
    
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```

Install docker engine:
``` bash
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io -y
```

## Docker compose
### Install 1.26.2 docker compose
Please go [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/) to check the latest version.
``` bash
sudo curl -L "https://github.com/docker/compose/releases/download/1.26.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

## check version
docker-compose --version
```
### Validating docker-compose yml file
``` bash
docker-compose -f docker-compose.yml config
```

## Install dockerhub and ui
using docker run command
``` bash
docker run -d -p 5000:5000 -v /home/user1/storage:/var/lib/registry --name registry registry:2
```
or using docker-compose
``` bash
mkdir docker-registry
cd docker-registry
mkdir docker_hub_storage
vi docker-compose.yml
```
docker-compose.yml
``` dockerfile
version: '3'

services:
  registry:
    image: registry:2
    restart: always
    ports:
      - "5000:5000"
    environment:
      REGISTRY_STORAGE_FILESYSTEM_ROOTDIRECTORY: /data
    volumes:
#      - ./registry-data:/var/lib/registry
      - ./registry-data:/data
    networks:
      - registry-ui-net

  ui:
    image: joxit/docker-registry-ui:static
    restart: always
    ports:
      - "5080:80"
    environment:
      - REGISTRY_TITLE=My Private Docker Registry
      - REGISTRY_URL=http://registry:5000
    depends_on:
      - registry
    networks:
      - registry-ui-net

networks:
  registry-ui-net:
```
- Private docker hub web GUI: http://localhost:5080

## Docker managerment
[Portainer](https://www.portainer.io/) is the definitive open source container management GUI for Kubernetes, Docker, Swarm and ACI.
``` bash
docker container run -d \
  -p 9000:9000 \
  -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer
```
Setup Detail: [Docker monitor - portainer](./4_Docker-monitor-portainer.md)

## Terminal in to Docker
``` bash
## docker exec -it <container id> <command>
docker exec -it a3 bash
docker exec -it a3 /bin/sh
```
### Problem slove: OCI runtime exec failed
``` bash
OCI runtime exec failed: exec failed: container_linux.go:349: starting container process caused "exec: \"bash\": executable file not found in $PATH": unknown
```
Solution:
- https://github.com/docker/for-linux/issues/246
``` bash
docker exec -it a3 /bin/sh
```

## Docker registry on production envrionment
- [Authenticate proxy with nginx](https://docs.docker.com/registry/recipes/nginx/)
- [How to create your own private Docker registry and secure it](https://gabrieltanner.org/blog/docker-registry)

## References
- [Install Docker Engine on Ubuntu](https://docs.docker.com/engine/install/ubuntu/)
- [How To Set Up a Private Docker Registry on Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-private-docker-registry-on-ubuntu-18-04)
- [ithome - 建立 private 的 Docker Registry](https://ithelp.ithome.com.tw/articles/10191213)
- [phoenixnap - How To Set Up And Use Private Docker Registry](https://phoenixnap.com/kb/set-up-a-private-docker-registry)
- [pkuwwt - Setup a private docker registry v2 with web-ui](https://pkuwwt.github.io/techniques/2020-04-04-setup-a-private-docker-registry/)
- [validating docker compose yml file](https://stackoverflow.com/questions/29225972/validating-docker-compose-yml-file)
