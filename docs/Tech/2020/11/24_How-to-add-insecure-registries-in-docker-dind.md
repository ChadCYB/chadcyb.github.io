---
title: "How to add insecure-registries in docker:dind"
date: 2020-11-24
sidebar: 'auto'
tags:
 - docker
 - Jenkins
categories:
 - Tech
publish: True
meta:
  - property: og:description
    content: This article will show how to add insecure-registries in docker:dind, allow jenkins to push to a private docker-registry.
  - property: og:image
    content: https://i.imgur.com/OQVdbpa.jpg
---

![](https://i.imgur.com/OQVdbpa.jpg)


This article will show how to add insecure-registries in `docker:dind`, allow jenkins to push to a private docker-registry.

## Docker run
You can just add `--insecure-registry` arguments to the command:
``` bash
docker run --rm --privileged --name docker-dind --network-alias docker \
  -e DOCKER_TLS_CERTDIR="" docker:dind \
  --insecure-registry 192.168.0.100:5000
```

## References
- [How to add daemon.json at docker:dind](https://github.com/docker-library/docker/issues/131)
