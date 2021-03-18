(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{537:function(s,t,a){"use strict";a.r(t);var n=a(6),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[a("img",{attrs:{src:"https://i.imgur.com/jaMH25J.jpg",alt:""}})]),s._v(" "),a("p",[s._v("As the services that need to be managed become more and more complicated, so I started to dockerize all the projects around me. This articale shows how to install docker things on ubuntu.")]),s._v(" "),a("h2",{attrs:{id:"install-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-docker"}},[s._v("#")]),s._v(" Install docker")]),s._v(" "),a("p",[s._v("Set up the repository:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    apt-transport-https "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    ca-certificates "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    gnupg-agent "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    software-properties-common -y\n    \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -fsSL https://download.docker.com/linux/ubuntu/gpg "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" apt-key "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" add-apt-repository "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb [arch=amd64] https://download.docker.com/linux/ubuntu \\\n   '),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("lsb_release -cs"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(' \\\n   stable"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("Install docker engine:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker-ce docker-ce-cli containerd.io -y\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"docker-compose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose"}},[s._v("#")]),s._v(" Docker compose")]),s._v(" "),a("h3",{attrs:{id:"install-1-26-2-docker-compose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-1-26-2-docker-compose"}},[s._v("#")]),s._v(" Install 1.26.2 docker compose")]),s._v(" "),a("p",[s._v("Please go "),a("a",{attrs:{href:"https://docs.docker.com/compose/install/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://docs.docker.com/compose/install/"),a("OutboundLink")],1),s._v(" to check the latest version.")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -L "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://github.com/docker/compose/releases/download/1.26.2/docker-compose-'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -s"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("-"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -m"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v(" -o /usr/local/bin/docker-compose\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x /usr/local/bin/docker-compose\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## check version")]),s._v("\ndocker-compose --version\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"validating-docker-compose-yml-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validating-docker-compose-yml-file"}},[s._v("#")]),s._v(" Validating docker-compose yml file")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker-compose -f docker-compose.yml config\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"install-dockerhub-and-ui"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-dockerhub-and-ui"}},[s._v("#")]),s._v(" Install dockerhub and ui")]),s._v(" "),a("p",[s._v("using docker run command")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker run -d -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5000")]),s._v(":5000 -v /home/user1/storage:/var/lib/registry --name registry registry:2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("or using docker-compose")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" docker-registry\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" docker-registry\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" docker_hub_storage\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" docker-compose.yml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("docker-compose.yml")]),s._v(" "),a("div",{staticClass:"language-dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[s._v("version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3'")]),s._v("\n\nservices"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  registry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" registry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("2\n    restart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" always\n    ports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5000:5000"')]),s._v("\n    environment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      REGISTRY_STORAGE_FILESYSTEM_ROOTDIRECTORY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /data\n    volumes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      - ./registry-data:/var/lib/registry")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./registry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/data\n    networks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" registry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("ui"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("net\n\n  ui"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" joxit/docker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("registry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("ui"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("static\n    restart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" always\n    ports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5080:80"')]),s._v("\n    environment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" REGISTRY_TITLE=My Private Docker Registry\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" REGISTRY_URL=http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//registry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("5000\n    depends_on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" registry\n    networks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" registry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("ui"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("net\n\nnetworks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  registry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("ui"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("net"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br")])]),a("ul",[a("li",[s._v("Private docker hub web GUI: http://localhost:5080")])]),s._v(" "),a("h2",{attrs:{id:"docker-managerment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-managerment"}},[s._v("#")]),s._v(" Docker managerment")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.portainer.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Portainer"),a("OutboundLink")],1),s._v(" is the definitive open source container management GUI for Kubernetes, Docker, Swarm and ACI.")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker container run -d "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9000")]),s._v(":9000 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("Setup Detail: "),a("RouterLink",{attrs:{to:"/docs/Tech/2020/8/4_Docker-monitor-portainer.html"}},[s._v("Docker monitor - portainer")])],1),s._v(" "),a("h2",{attrs:{id:"terminal-in-to-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#terminal-in-to-docker"}},[s._v("#")]),s._v(" Terminal in to Docker")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## docker exec -it <container id> <command>")]),s._v("\ndocker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it a3 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\ndocker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it a3 /bin/sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"problem-slove-oci-runtime-exec-failed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#problem-slove-oci-runtime-exec-failed"}},[s._v("#")]),s._v(" Problem slove: OCI runtime exec failed")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("OCI runtime "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" failed: "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" failed: container_linux.go:349: starting container process caused "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"exec: '),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("bash"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(": executable file not found in "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" unknown\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("Solution:")]),s._v(" "),a("ul",[a("li",[s._v("https://github.com/docker/for-linux/issues/246")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it a3 /bin/sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"docker-registry-on-production-envrionment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-registry-on-production-envrionment"}},[s._v("#")]),s._v(" Docker registry on production envrionment")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.docker.com/registry/recipes/nginx/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Authenticate proxy with nginx"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://gabrieltanner.org/blog/docker-registry",target:"_blank",rel:"noopener noreferrer"}},[s._v("How to create your own private Docker registry and secure it"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[s._v("#")]),s._v(" References")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.docker.com/engine/install/ubuntu/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Install Docker Engine on Ubuntu"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/how-to-set-up-a-private-docker-registry-on-ubuntu-18-04",target:"_blank",rel:"noopener noreferrer"}},[s._v("How To Set Up a Private Docker Registry on Ubuntu 18.04"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://ithelp.ithome.com.tw/articles/10191213",target:"_blank",rel:"noopener noreferrer"}},[s._v("ithome - 建立 private 的 Docker Registry"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://phoenixnap.com/kb/set-up-a-private-docker-registry",target:"_blank",rel:"noopener noreferrer"}},[s._v("phoenixnap - How To Set Up And Use Private Docker Registry"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://pkuwwt.github.io/techniques/2020-04-04-setup-a-private-docker-registry/",target:"_blank",rel:"noopener noreferrer"}},[s._v("pkuwwt - Setup a private docker registry v2 with web-ui"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://stackoverflow.com/questions/29225972/validating-docker-compose-yml-file",target:"_blank",rel:"noopener noreferrer"}},[s._v("validating docker compose yml file"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);