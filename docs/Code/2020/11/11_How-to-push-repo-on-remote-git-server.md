---
title: "How to push repo on remote git server"
date: 2020-11-11
sidebar: 'auto'
tags:
 - git
categories:
 - Code
publish: True
meta:
  - property: og:description
    content: This article records how to push a new or existing repo to git server on terminal.
  - property: og:image
    content: https://i.imgur.com/jFeM5mC.jpg
---
Version control is a basic survival skill for programmer. This article records how to push a new or existing repo to git server on terminal.

``` bash
## Create a new repository on the command line
touch README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin http://192.168.0.11:8080/orgname/project.git
git push -u origin master
 
## Push an existing repository on the command line
git remote add origin http://192.168.0.11:8080/orgname/project.git
git push -u origin master
```

## References
- [https://gist.github.com/c0ldlimit/4089101](https://gist.github.com/c0ldlimit/4089101)
