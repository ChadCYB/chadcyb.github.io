---
title: "Running Jenkins on Docker"
date: 2020-11-23
sidebar: 'auto'
tags:
 - Jenkins
 - docker
categories:
 - Tech
publish: True
meta:
  - property: og:description
    content: X.
  - property: og:image
    content: https://i.imgur.com/CN7dGVO.jpg
---

![](https://i.imgur.com/CN7dGVO.jpg)

## Waht is Jenkins?
[Jenkins](https://github.com/jenkinsci/jenkins) is a free and open source automation server. It helps automate the parts of software development related to building, testing, and deploying, facilitating continuous integration and continuous delivery.

## Installation
``` bash
docker network create jenkins

docker volume create jenkins-docker-certs
docker volume create jenkins-data

docker container run --name jenkins-docker --rm --detach ^
  --privileged --network jenkins --network-alias docker ^
  --env DOCKER_TLS_CERTDIR=/certs ^
  --volume jenkins-docker-certs:/certs/client ^
  --volume jenkins-data:/var/jenkins_home ^
  docker:dind

docker container run --name jenkins-blueocean --rm --detach ^
  --network jenkins --env DOCKER_HOST=tcp://docker:2376 ^
  --env DOCKER_CERT_PATH=/certs/client --env DOCKER_TLS_VERIFY=1 ^
  --volume jenkins-data:/var/jenkins_home ^
  --volume jenkins-docker-certs:/certs/client:ro ^
  --publish 8080:8080 --publish 50000:50000 jenkinsci/blueocean
  

docker container exec -it jenkins-blueocean bash
cat /var/jenkins_home/secrets/initialAdminPassword

```
### Reference
- [https://www.jenkins.io/doc/book/installing/#docker](https://www.jenkins.io/doc/book/installing/#docker)

## Troubleshooting
### Problem: Wrong volume permissions
- Error message:
``` bash
jenkins_server_1  | Can not write to /var/jenkins_home/copy_reference_file.log. Wrong volume permissions?                                                                                           
jenkins_server_1  | touch: cannot touch '/var/jenkins_home/copy_reference_file.log': Permission denied   
```
- Solution1:

Using docker volumes in stead of bind mount.
- Solution2:

Change the folder owner form root to current user.
``` bash
sudo chown -R 1000 jenkins-data
```
- Reference
  - [https://github.com/jenkinsci/docker/issues/177](https://github.com/jenkinsci/docker/issues/177)

### Problem: jenkins x509: certificate is valid
- Error message:
``` bash
jenkins x509: certificate is valid for 4b5d9cbe789a, docker, localhost, not jenkins_docker script returned exit code 1
```
- Solution:
Change the name of containe to `dock` in stead of `jenkins_docker` in the docker-compose file

### Problem: Can not push the docker images to private registry
- Solution: [How to add insecure-registries in docker:dind](./24_How-to-add-insecure-registries-in-docker-dind)

## Integrate gitea and jenkins
- [https://mike42.me/blog/2019-05-how-to-integrate-gitea-and-jenkins](https://mike42.me/blog/2019-05-how-to-integrate-gitea-and-jenkins)

### Troubleshooting: 403 Frobbinen problem
This is a False positive just ignore it.
- [https://stackoverflow.com/questions/54672300/how-to-connect-jenkins-and-gieta](https://stackoverflow.com/questions/54672300/how-to-connect-jenkins-and-gieta)
