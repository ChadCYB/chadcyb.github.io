---
title: "Push Docker on private registry"
date: 2020-08-09
sidebar: 'auto'
tags:
 - docker
 - dockerhub
categories:
 - Tech
publish: True
meta:
  - property: og:description
    content: In this article, we are going to show how to create and manage tags associated with the Docker images, and how to push a docker image to our private Docker Hub.
  - property: og:image
    content: https://i.imgur.com/3i1ey1B.jpg
---

![](https://i.imgur.com/3i1ey1B.jpg)

In this article, we are going to show how to create and manage tags associated with the Docker images, and how to push a docker image to our private Docker Hub.

## list all docker images
``` bash
sudo docker images

REPOSITORY            TAG                 IMAGE ID            CREATED             SIZE
test/dashboard_test   latest              598e77a28750        5 hours ago         543MB
```

## docker tag
``` bash
# docker tag {REPOSITORY_Name or ImageID} {Private_Docker_Hub_IP}/{New_Image_Name}:{tag}
docker tag test/dashboard_test 192.168.0.100:5000/dashboard_test
# or tag with verison
docker tag 598e77a28750 192.168.0.100:5000/dashboard_test:1.0.0
```

## docker push
``` bash
## docker push
docker push 192.168.0.100:5000/dashboard_test:latest
## docker push all tag of the images
docker push 192.168.0.100:5000/dashboard_test
```

## docker push problem: http: server gave HTTP response to HTTPS client
``` bash
vi /etc/docker/daemon.json

{
  "live-restore": true,
  "group": "dockerroot",
  "insecure-registries": ["192.168.0.100:5000"]
}

systemctl restart docker
```

## List all images on private dockerhub
``` bash
curl http://192.168.0.11:5000/v2/_catalog
```

## References
- [Understanding Docker image tags and publishing images to Docker Hub](https://itnext.io/understanding-docker-image-tags-and-publishing-images-to-docker-hub-b7a4f900f201)
