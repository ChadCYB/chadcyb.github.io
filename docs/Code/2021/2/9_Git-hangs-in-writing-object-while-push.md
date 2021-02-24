---
title: "Git hangs in writing object while push"
date: 2021-02-09
sidebar: 'auto'
tags:
 - git
categories:
 - Code
publish: True
meta:
  - property: og:description
    content: While trying to git push and it just hangs at writing objects...
  - property: og:image
    content: https://i.imgur.com/jJFAreC.jpg
---

![](https://i.imgur.com/jJFAreC.jpg)

# Git hangs in writing object while push

While trying to git push and it just hangs at `Writing objects:  99% (219/220)` but never finishes.

Stackoverflow always safe my life, here's the solution:
```
git config --global http.postBuffer 524288000
```
For future references, based on comments:
```
500 MB: 524288000 (as posted in the original answer)
1 GB: 1048576000
2 GB: 2097152000 (anything higher is rejected as 'out of range')
```

## References
- [stackoverflow - Git hangs while writing objects](https://stackoverflow.com/questions/6887228/git-hangs-while-writing-objects)
