---
title: "Pairing Airpod as headset on Ubuntu"
date: 2021-01-22
sidebar: 'auto'
tags:
 - Ubuntu
 - Linux
categories:
 - Tech
publish: True
meta:
  - property: og:description
    content: Thanks to the askubuntu, here's the solution which I have changed and added to...
  - property: og:image
    content: https://i.imgur.com/peKvKWI.jpg
---

![](https://i.imgur.com/peKvKWI.jpg)

Thanks to the askubuntu, here's the solution which I have changed and added to:

1. Set `ControllerMode = bredr` or `ControllerMode = dual` by editing `/etc/bluetooth/main.conf `
``` bash
sudo vim /etc/bluetooth/main.conf

...
# Restricts all controllers to the specified transport. Default value
# is "dual", i.e. both BR/EDR and LE enabled (when supported by the HW).
# Possible values: "dual", "bredr", "le"
ControllerMode = dual

# Enables Multi Profile Specification support. This allows to specify if
# system supports only Multiple Profiles Single Device (MPSD) configuration
...
```
2. sudo /etc/init.d/bluetooth restart
3. Try to pair again.

## References
- https://askubuntu.com/questions/922860/pairing-apple-airpods-as-headset