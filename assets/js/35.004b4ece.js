(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{602:function(s,t,n){"use strict";n.r(t);var e=n(12),a=Object(e.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[n("img",{attrs:{src:"https://i.imgur.com/tG9KkYv.jpg",alt:""}})]),s._v(" "),n("p",[s._v("Kubernetes (K8s) is an open-source container-orchestration system for automating computer application deployment, scaling, and management. This article brings you to set up Kubernets cluster.")]),s._v(" "),n("h2",{attrs:{id:"generic-installation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#generic-installation"}},[s._v("#")]),s._v(" Generic installation")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Generic installation on all nodes")]),s._v("\n\nsysctl -w net.ipv4.ip_forward"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/#net.ipv4.ip_forward=1/net.ipv4.ip_forward=1/g'")]),s._v(" /etc/sysctl.conf \n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" sysctl -p /etc/sysctl.conf\n\nswapoff -a\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## sed -i '2s/^/#/' /etc/fstab")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/.*swap.*/#&/'")]),s._v(" /etc/fstab\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" apt-transport-https ca-certificates "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" software-properties-common -y\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -fsSL https://download.docker.com/linux/ubuntu/gpg "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" apt-key "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -\n\nadd-apt-repository "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb [arch=amd64] https://download.docker.com/linux/ubuntu \\\n    '),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("lsb_release -cs"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(' \\\n    stable"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y docker-ce\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/docker/daemon.json "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('EOF\n{\n  "exec-opts": ["native.cgroupdriver=systemd"],\n  "log-driver": "json-file",\n  "log-opts": {\n    "max-size": "100m"\n  },\n  "storage-driver": "overlay2"\n}\nEOF')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /etc/systemd/system/docker.service.d\nsystemctl daemon-reload\nsystemctl restart "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\nsystemctl "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y apt-transport-https "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -s https://packages.cloud.google.com/apt/doc/apt-key.gpg "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" apt-key "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF"),n("span",{pre:!0,attrs:{class:"token bash punctuation"}},[s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/etc/apt/sources.list.d/kubernetes.list")]),s._v("\ndeb https://apt.kubernetes.io/ kubernetes-xenial main\nEOF")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" kubernetes-cni -y "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# not in documentation needed for updates")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" kubelet kubeadm kubectl -y\napt-mark hold kubelet kubeadm kubectl\nsystemctl daemon-reload\nsystemctl restart kubelet\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" kubelet\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Create Default Audit Policy")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /etc/kubernetes\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/kubernetes/audit-policy.yaml "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\napiVersion: audit.k8s.io/v1\nkind: Policy\nrules:\n- level: Metadata\nEOF")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# folder to save audit logs")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /var/log/kubernetes/audit\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Install NFS Client Drivers")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nfs-common\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br")])]),n("h2",{attrs:{id:"kubernetes-master"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-master"}},[s._v("#")]),s._v(" Kubernetes master")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## kubeadm-init-command-for-flannel")]),s._v("\nkubeadm init --pod-network-cidr "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.244")]),s._v(".0.0/16\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## user as regular user")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.kube                                                       \n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -i /etc/kubernetes/admin.conf "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.kube/config                   \n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" -u"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" -g"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.kube/config\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Deploy a pod network to the cluster.                                   ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h2",{attrs:{id:"kubernetes-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-node"}},[s._v("#")]),s._v(" Kubernetes node")]),s._v(" "),n("p",[s._v("Then you can join any number of worker nodes by running the following on each as "),n("strong",[s._v("root")]),s._v(":")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("kubeadm "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".100.100:6443 --token vhsezb.xgf7psithetqfw4f --discovery-token-ca-cert-hash sha256:3f60a1ed0db62dea0c53d5c0961fe6bf539d66e84201969568b9f4ceb39c13a6\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"join-cluster-after-init-token-expired"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#join-cluster-after-init-token-expired"}},[s._v("#")]),s._v(" Join cluster after init token expired")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## run this command on master")]),s._v("\nkubeadm token create --print-join-command\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"check-add-nodes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#check-add-nodes"}},[s._v("#")]),s._v(" Check add nodes")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("kubectl get nodes\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## set node roles")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## kubectl label nodes <your_node> kubernetes.io/role=<your_label>")]),s._v("\nkubectl label nodes worker001 kubernetes.io/role"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("worker\n\nkubectl get nodes\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h3",{attrs:{id:"node-get-into-not-ready-stage-after-reboot"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#node-get-into-not-ready-stage-after-reboot"}},[s._v("#")]),s._v(" node get into "),n("code",[s._v("Not Ready")]),s._v(" stage after reboot")]),s._v(" "),n("p",[s._v("It caused by not disabling swap after reboot")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("systemctl status kubelet\n\nswapoff -a\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -p /etc/fstab /etc/fstab.bak"),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'+%Y%m%d%H%M%S'")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/.*swap.*/#&/'")]),s._v(" /etc/fstab\nsystemctl daemon-reload\nsystemctl restart kubelet\nsystemctl status kubelet\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h2",{attrs:{id:"deploying-the-dashboard-ui"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#deploying-the-dashboard-ui"}},[s._v("#")]),s._v(" Deploying the Dashboard UI")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/",target:"_blank",rel:"noopener noreferrer"}},[s._v("kubernetes.io - Web UI (Dashboard)"),n("OutboundLink")],1)])]),s._v(" "),n("h2",{attrs:{id:"advance-build-cluster-master-and-cluster-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#advance-build-cluster-master-and-cluster-node"}},[s._v("#")]),s._v(" Advance - Build cluster Master and cluster Node")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://dockerlabs.collabnix.com/kubernetes/beginners/Install-and-configure-a-multi-master-Kubernetes-cluster-with-kubeadm.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Install and configure a multi-master Kubernetes cluster with kubeadm\n"),n("OutboundLink")],1)])]),s._v(" "),n("h2",{attrs:{id:"references"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[s._v("#")]),s._v(" References")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://medium.com/faun/kubernetes-prerequisites-for-setup-kubenetes-cluster-part-2-699b3f93d6cc",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://medium.com/faun/kubernetes-prerequisites-for-setup-kubenetes-cluster-part-2-699b3f93d6cc"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://stackoverflow.com/questions/48984659/understanding-kubeadm-init-command-for-flannel",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://stackoverflow.com/questions/48984659/understanding-kubeadm-init-command-for-flannel"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://blog.tomy168.com/2019/08/centos-76-kubernetes.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://blog.tomy168.com/2019/08/centos-76-kubernetes.html"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://tachingchen.com/tw/blog/kubernetes-installation-with-kubeadm/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://tachingchen.com/tw/blog/kubernetes-installation-with-kubeadm/"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://stackoverflow.com/questions/47126779/join-cluster-after-init-token-expired",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://stackoverflow.com/questions/47126779/join-cluster-after-init-token-expired"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://stackoverflow.com/questions/48854905/how-to-add-roles-to-nodes-in-kubernetes",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://stackoverflow.com/questions/48854905/how-to-add-roles-to-nodes-in-kubernetes"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://www.cnblogs.com/jackluo/p/10337230.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.cnblogs.com/jackluo/p/10337230.html"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/troubleshooting-kubeadm/#default-nic-when-using-flannel-as-the-pod-network-in-vagrant",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/troubleshooting-kubeadm/#default-nic-when-using-flannel-as-the-pod-network-in-vagrant"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);