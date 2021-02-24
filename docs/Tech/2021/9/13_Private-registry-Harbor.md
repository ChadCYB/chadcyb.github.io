---
title: "Private registry - Harbor"
date: 2021-09-13
sidebar: 'auto'
tags:
 - Harbor
 - docker
 - dockerhub
 - Ubuntu
categories:
 - Tech
publish: True
meta:
  - property: og:description
    content: Harbor is an open source registry that secures artifacts with policies and role-based access control...
  - property: og:image
    content: https://i.imgur.com/8xF4SUW.jpg
---

![](https://i.imgur.com/8xF4SUW.jpg)

## What is Harbor?
Harbor is an open source registry that secures artifacts with policies and role-based access control, ensures images are scanned and free from vulnerabilities, and signs images as trusted. Harbor, a CNCF Graduated project, delivers compliance, performance, and interoperability to help you consistently and securely manage artifacts across cloud native compute platforms like Kubernetes and Docker.

## Harbor Installation Rrerequisites
The target host requires Docker, and Docker Compose to be installed.

Please refer to the installation instruction of [this article](../../2020/8/3_Install-Docker-Dockerhub-and-docker-compose-on-Ubuntu). 

## Download and Unpack the Installer
1. Download the installer form [Harbor release page](https://github.com/goharbor/harbor/releases)
2. unpack the installer:
``` bash 
tar xvf harbor-online-installer-version.tgz
## or
tar xvf harbor-offline-installer-version.tgz
```

## Configure HTTPS Access to Harbor
1. Generate a Certificate Authority Certificate
``` bash
## Generate a CA certificate private key
openssl genrsa -out ca.key 4096

## Generate the CA certificate
openssl req -x509 -new -nodes -sha512 -days 3650 \
 -subj "/C=TW/ST=Taipei/L=Taipei/O=example/OU=Personal/CN=yourdomain.com" \
 -key ca.key \
 -out ca.crt
```
3. Generate a Server Certificate
``` bash
## Generate a private key
openssl genrsa -out yourdomain.com.key 4096

## Generate a certificate signing request (CSR)
openssl req -sha512 -new \
    -subj "/C=TW/ST=Taipei/L=Taipei/O=example/OU=Personal/CN=yourdomain.com" \
    -key yourdomain.com.key \
    -out yourdomain.com.csr

## Generate an x509 v3 extension file.
cat > v3.ext <<-EOF
authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
extendedKeyUsage = serverAuth
subjectAltName = @alt_names

[alt_names]
DNS.1=yourdomain.com
DNS.2=yourdomain
DNS.3=hostname
EOF
```
4. Use the `v3.ext` file to generate a certificate for your Harbor host.
``` bash
openssl x509 -req -sha512 -days 3650 \
    -extfile v3.ext \
    -CA ca.crt -CAkey ca.key -CAcreateserial \
    -in yourdomain.com.csr \
    -out yourdomain.com.crt
```
5. Copy the server certificate and key into the certficates folder on your Harbor host.
``` bash
cp yourdomain.com.crt /data/cert/
cp yourdomain.com.key /data/cert/
```
6. Convert `yourdomain.com.crt` to `yourdomain.com.cert`, for use by Docker.
``` bash
openssl x509 -inform PEM -in yourdomain.com.crt -out yourdomain.com.cert
```
7. Copy the server certificate, key and CA files into the Docker certificates folder on the Harbor host. You must create the appropriate folders first.
``` bash
cp yourdomain.com.cert /etc/docker/certs.d/yourdomain.com/
cp yourdomain.com.key /etc/docker/certs.d/yourdomain.com/
cp ca.crt /etc/docker/certs.d/yourdomain.com/
```
> If you mapped the default nginx port 443 to a different port, create the folder `/etc/docker/certs.d/yourdomain.com:port`, or `/etc/docker/certs.d/harbor_IP:port`.
``` bash
/etc/docker/certs.d/
    └── yourdomain.com:port
       ├── yourdomain.com.cert  <-- Server certificate signed by CA
       ├── yourdomain.com.key   <-- Server key signed by CA
       └── ca.crt               <-- Certificate authority that signed the registry certificate
```
8. Restart Docker Engine
``` bash
sudo systemctl restart docker
```

## Configure the Harbor YML File
1. Copy `harbor.yml.tmpl` to `harbor.yml`
``` bash
cp harbor.yml.tmpl harbor.yml
```
2. Edit and config the `harbor.yml` file
``` bash
vi harbor.yml
```
Go [here](https://goharbor.io/docs/2.2.0/install-config/configure-yml-file/) to read the configuration detail.

## Deploy or Reconfigure Harbor
Run the script to deploy harbor. Note that it might take some time for the online installer to download all of the Harbor images from Docker hub.
``` bash
## Run the prepare script to enable HTTPS.
./prepare
## install and start Harbor
sudo ./install.sh --with-notary --with-clair
```

## How to restart the Harbor
If the Harbor service occur error, you can try to restart it. Your image data remains in the file system, so no data is lost.
- Stop Harbor
``` bash
docker-compose down -v
```
- Restart Harbor
``` bash
docker-compose up -d
```

## References
- [goharbor doc](https://goharbor.io/docs/2.2.0/install-config/)
- [ithome - 自建私有容器儲存庫(Container Registry)與實現內容信任(Content Trust)](https://ithelp.ithome.com.tw/articles/10223099)
- [ithome - 自架 Registry - Harbor](https://ithelp.ithome.com.tw/articles/10249640)
- [randyou - Gitlab + Jenkins + Harbor + k8s 实现前端持续集成与部署](https://randyou.github.io/2020/07/07/gitlab-jenkins-harbor-k8s/)
