---
title: "Install JMeter on Ubuntu"
date: 2020-07-25
sidebar: 'auto'
tags:
 - JMeter
 - Ubuntu
 - install
categories:
 - Tech
publish: True
meta:
  - property: og:description
    content: Apache Jmeter is a popular open-source performance testing tool. This JMeter application designed to load test functional...
  - property: og:image
    content: https://i.imgur.com/iDegYoY.jpg
---

![](https://i.imgur.com/iDegYoY.jpg)

## Waht is Jmeter?
Apache Jmeter is a popular open-source performance testing tool. This JMeter application designed to load test functional behavior and measure performance. It was originally designed for testing Web Applications but has since expanded to other test functions.

## Download Jmeter
Download Jmeter from [download page](https://jmeter.apache.org/download_jmeter.cgi).
``` bash
wget http://ftp.twaren.net/Unix/Web/apache//jmeter/binaries/apache-jmeter-5.3.tgz

tar xvzf apache-jmeter*.tgz -C /tmp/

sudo mv /tmp/apache-jmeter* /opt/apache-jmeter
sudo chown -R root:root /opt/apache-jmeter
sudo ln -s /opt/apache-jmeter/bin/jmeter /usr/local/bin/jmeter
sudo ln -s /opt/apache-jmeter/bin/jmeter-server /usr/local/bin/jmeter-server
```

## Install java
``` bash
$ sudo apt install openjdk-8-jdk
OR
$ sudo apt install openjdk-11-jdk
OR
$ sudo apt install openjdk-13-jdk
OR
$ sudo apt install openjdk-14-jdk
```

## Lunch Jmeter with GUI
``` bash
sudo jmeter
```

## Run Stress test on local
``` bash
sudo jmeter -n -t stress_test.jmx -l log.jtl -e -o Testresult
```

## Run Stress test on remote
``` bash
sudo jmeter -n -t stress_test.jmx -l log.jtl -e -o Testresult -R 192.168.0.100,192.168.0.200
```

## Troubleshooting
- Error Message
```
Server failed to start: java.rmi.server.ExportException: Listen failed on port: 0; nested exception is:
        java.io.FileNotFoundException: rmi_keystore.jks (No such file or directory)
```
- Solution
```
server.rmi.ssl.disable=true
```

## References
- [https://tutorialforlinux.com/2020/01/20/step-by-step-apache-jmeter-ubuntu-20-04-installation-guide/](https://tutorialforlinux.com/2020/01/20/step-by-step-apache-jmeter-ubuntu-20-04-installation-guide/)
- [https://linuxconfig.org/how-to-install-java-on-ubuntu-20-04-lts-focal-fossa-linux](https://linuxconfig.org/how-to-install-java-on-ubuntu-20-04-lts-focal-fossa-linux)
- [https://jmeter.apache.org/usermanual/remote-test.html](https://jmeter.apache.org/usermanual/remote-test.html)
- [https://www.perfmatrix.com/server-failed-to-start-java-rmi-server-exportexception/](https://www.perfmatrix.com/server-failed-to-start-java-rmi-server-exportexception/)
