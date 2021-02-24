---
title: "Install a different version of Node.js - Node Version Manager"
date: 2021-01-09
sidebar: 'auto'
tags:
 - Nodejs
categories:
 - Code
publish: True
meta:
  - property: og:description
    content: To install a different version of Node.js, you can use a nvm (Node Version Manager) that is more particularly flexible...
  - property: og:image
    content: https://i.imgur.com/p5p45DK.jpg
---

![](https://i.imgur.com/p5p45DK.jpg)

Node.js is a JavaScript runtime for server-side programming. It allows developers to create scalable backend functionality using JavaScript, a language many are already familiar with from browser-based web development. 

To install a different version of Node.js, you can use a nvm (Node Version Manager) that is more particularly flexible. This piece of software allows you to install and maintain many different independent versions of Node.js, and their associated Node packages, at the same time.

## Install Node Version Manager (nvm)
``` bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
source ~/.bashrc
```

## List all npm version
```
nvm list-remote
nvm install v12.18.3
```

## List current install verion
```
nvm list
nvm install lts/erbium
```

## Switch npm verison
```
nvm use v12.18.3
node -v
```

## Install npm package
```
rm -rf package-lock.json node_modules/
npm cache clean --force
npm install

npm start

npm install --save react-scripts@3.4.0
```

## Invaid host header
```
vi .env

DANGEROUSLY_DISABLE_HOST_CHECK=true
```

## References
- [DigitalOcean - How To Install Node.js on Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04)
