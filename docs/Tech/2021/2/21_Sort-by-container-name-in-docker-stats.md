---
title: "Sort by container name in docker stats"
date: 2021-02-21
sidebar: 'auto'
tags:
 - docker
 - server-management
categories:
 - Tech
publish: True
meta:
  - property: og:description
    content: The docker stats command returns a live data stream for running containers...
  - property: og:image
    content: https://i.imgur.com/8M9QCWg.jpg
---

![](https://i.imgur.com/8M9QCWg.jpg)

The docker stats command returns a live data stream for running containers. To limit data to one or more specific containers, specify a list of container names or ids separated by a space. You can specify a stopped container but stopped containers do not return any data.

## Basic command
``` bash
sudo docker stats -a


CONTAINER ID   NAME                      CPU %     MEM USAGE / LIMIT     MEM %     NET I/O           BLOCK I/O         PIDS
b634d1b72d79   y****e_ap                 0.00%     13.76MiB / 3.844GiB   0.35%     145kB / 2.56kB    0B / 0B           11
e64eb0eec2f5   c****r_ap                 0.00%     13.83MiB / 3.844GiB   0.35%     145kB / 2.83kB    0B / 0B           11
659318cf8699   a**g_ap                   0.00%     13.84MiB / 3.844GiB   0.35%     145kB / 2.96kB    0B / 0B           11
ce2a09dad94e   q****i_ap                 0.00%     13.83MiB / 3.844GiB   0.35%     145kB / 2.76kB    0B / 0B           11
2afe790886ba   h****i_ap                 0.00%     13.86MiB / 3.844GiB   0.35%     145kB / 2.66kB    0B / 0B           11
f3a444176661   g****n_ap                 0.00%     13.98MiB / 3.844GiB   0.36%     145kB / 2.7kB     90.1kB / 0B       11
e4a7f8b70289   g******y_ap               0.00%     14.11MiB / 3.844GiB   0.36%     145kB / 2.6kB     152kB / 0B        11
425ef21784f5   a****e_ap                 0.00%     27.89MiB / 3.844GiB   0.71%     3.64MB / 14.6MB   1.2MB / 0B        11
a13c00723845   portainer-agent_agent_1   0.00%     10.58MiB / 3.844GiB   0.27%     3.08MB / 18.3MB   10.6MB / 8.19kB   8
```

## docker stats sort by name
``` bash
watch 'sudo docker stats --no-stream --format "table {{.Name}}\t{{.Container}}\t{{.CPUPerc}}\t{{.MemUsage}}" | sort -k 1 -h'


Every 2.0s: sudo docker stats --no-stream --format "table {{.Name}}\t{{.Container}}\t{{.CPUPerc}}\t{{.MemUsage}}" | sort -k 1 -h

NAME                      CONTAINER      CPU %     MEM USAGE / LIMIT
a*****_ap                 425ef21784f5   0.00%     27.89MiB / 3.844GiB
a***_ap                   659318cf8699   0.00%     13.84MiB / 3.844GiB
c*****_ap                 e64eb0eec2f5   0.00%     13.83MiB / 3.844GiB
g*******_ap               e4a7f8b70289   0.00%     14.11MiB / 3.844GiB
g*****_ap                 f3a444176661   0.00%     13.98MiB / 3.844GiB
h*****_ap                 2afe790886ba   0.00%     13.86MiB / 3.844GiB
portainer-agent_agent_1   a13c00723845   0.00%     10.58MiB / 3.844GiB
q*****_ap                 ce2a09dad94e   0.00%     13.83MiB / 3.844GiB
y*****_ap                 b634d1b72d79   0.00%     13.76MiB / 3.844GiB
```

## docker stats sort by memory usage
change `...sort -k 1 -h` to `...sort -k 4 -h`
``` bash
watch 'sudo docker stats --no-stream --format "table {{.Name}}\t{{.Container}}\t{{.CPUPerc}}\t{{.MemUsage}}" | sort -k 4 -h'
```

## References
- [https://docs.docker.com/engine/reference/commandline/stats/](https://docs.docker.com/engine/reference/commandline/stats/)
- [https://stackoverflow.com/questions/43930011/sort-by-memory-usage-in-docker-stats](https://stackoverflow.com/questions/43930011/sort-by-memory-usage-in-docker-stats)
