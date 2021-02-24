---
title: "Docker monitor - Portainer"
date: 2020-08-04
sidebar: 'auto'
tags:
 - docker
 - Ubuntu
 - server-management
 - monitoring
categories:
 - Tech
publish: True
meta:
  - property: og:description
    content: Portainer is a UI interface and manager which you connect to the local Docker UNIX socket...
  - property: og:image
    content: https://i.imgur.com/VsuUyij.jpg
---

![](https://i.imgur.com/VsuUyij.jpg)

Portainer is a UI interface and manager which you connect to the local Docker UNIX socket `(unix:///var/run/docker.sock)` and then lets you view and interact with your containers, stacks and images. 

## portainer local host
You can easily set up Portainer using the following simple Docker Compose file:
``` dockerfile
version: '3'

services:
  registry:
    image: portainer/portainer-ce
    environment:
      AGENT_SECRET: mysecrettoken
    restart: unless-stopped
    ports:
      - "9000:9000"
      - "8000:8000"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - ./portainer_data:/data
```
- [https://www.portainer.io/documentation/deploy-portainer-docker-swarm/](https://www.portainer.io/documentation/deploy-portainer-docker-swarm/)

With version 1.22.0, Portainer now requires two tcp ports to be exposed: 9000 and 8000.
- Port 9000 : We served the UI from as well as the Portainer API, but now we have extended the API so that the remote agents can poll for instructions.
- Port 8000: a SSH tunnel server and is used to create a secure tunnel between the agent and the Portainer instance.
- [https://github.com/portainer/portainer-docs/issues/91](https://github.com/portainer/portainer-docs/issues/91)

## portainer agent
``` dockerfile
version: '3.2'

services:
  agent:
    image: portainer/agent
    environment:
      AGENT_SECRET: mysecrettoken
      CAP_HOST_MANAGEMENT: 1
    restart: unless-stopped
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - /var/lib/docker/volumes:/var/lib/docker/volumes
      - /:/host
      - ./portainer_data:/data
    ports:
      - "9001:9001"
```

## References
- [portainer documentation](https://portainer.readthedocs.io/en/stable/agent.html)
- [Monitoring Docker hosts with Portainer](https://thibmaek.com/post/monitoring-docker-hosts-with-portainer)
