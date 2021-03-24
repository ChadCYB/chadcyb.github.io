(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{550:function(e,s,t){"use strict";t.r(s);var a=t(6),n=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[t("img",{attrs:{src:"https://i.imgur.com/dCzF4oU.jpg",alt:""}})]),e._v(" "),t("p",[e._v("This is a note for me to learning kubectl command.")]),e._v(" "),t("h2",{attrs:{id:"kubectl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kubectl"}},[e._v("#")]),e._v(" kubectl")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("kubectl get")]),e._v(" - list resources")]),e._v(" "),t("li",[t("code",[e._v("kubectl describe")]),e._v(" - show detailed information about a resource")]),e._v(" "),t("li",[t("code",[e._v("kubectl logs")]),e._v(" - print the logs from a container in a pod")]),e._v(" "),t("li",[t("code",[e._v("kubectl exec")]),e._v(" - execute a command on a container in a pod")])]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# get nodes status")]),e._v("\nkubectl get nodes\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# get pod, service, deployment status")]),e._v("\nkubectl get all\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# get pod in detial")]),e._v("\nkubectl describe pods\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# check system log")]),e._v("\nsystemctl status \njournalctl -u -f\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# deploy pod, service")]),e._v("\nkubectl create -f deployment.yaml\nkubectl create -f service.yaml\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# change pod, service ")]),e._v("\nkubectl apply -f deployment.yaml\nkubectl apply -f service.yaml\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# check yaml file")]),e._v("\nkubectl create --dry-run --validate -f deployment.yaml\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# delete pod, service")]),e._v("\nkubectl delete deploy/simple-deployment svc/simple-service\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# get detail")]),e._v("\nkubectl get deploy\nkubectl get pods -o wide\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# list all service")]),e._v("\nkubectl get svc --all-namespaces\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br"),t("span",{staticClass:"line-number"},[e._v("22")]),t("br"),t("span",{staticClass:"line-number"},[e._v("23")]),t("br"),t("span",{staticClass:"line-number"},[e._v("24")]),t("br"),t("span",{staticClass:"line-number"},[e._v("25")]),t("br"),t("span",{staticClass:"line-number"},[e._v("26")]),t("br"),t("span",{staticClass:"line-number"},[e._v("27")]),t("br")])]),t("h3",{attrs:{id:"problem-fix"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#problem-fix"}},[e._v("#")]),e._v(" Problem fix")]),e._v(" "),t("ul",[t("li",[e._v("Error message")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('  Warning  FailedCreatePodSandBox  76s (x544 over 11m)  kubelet, worker01  (combined from similar events): Failed to create pod sandbox: rpc error: code = Unknown desc = failed to set up sandbox container "fac9dd896af941028c0eb82aeb14b86a6aa0665427abe6f513741c0f73805d73" network for pod "yahome-deployment-cb4b984d5-z4ghc": networkPlugin cni failed to set up pod "yahome-deployment-cb4b984d5-z4ghc_default" network: open /run/flannel/subnet.env: no such file or directory \n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("ul",[t("li",[e._v("Solution\n"),t("ul",[t("li",[t("a",{attrs:{href:"https://ithelp.ithome.com.tw/articles/10209632",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://ithelp.ithome.com.tw/articles/10209632"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/kubernetes/kubernetes/issues/70202",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/kubernetes/kubernetes/issues/70202"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml"),t("OutboundLink")],1)])])])]),e._v(" "),t("h2",{attrs:{id:"namespace"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#namespace"}},[e._v("#")]),e._v(" namespace")]),e._v(" "),t("p",[e._v("Kubernetes supports multiple virtual clusters backed by the same physical cluster. These virtual clusters are called namespaces.")]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("## create namespace")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# kubectl create namespace <name>")]),e._v("\nkubectl create namespace production\nkubectl create namespace development\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("## list all namespace")]),e._v("\nkubectl get namespaces --show-labels\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("## delete namespace")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("## !!! this will delete all the content under namespace !!!")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# kubectl delete namespaces <name>")]),e._v("\nkubectl delete namespace development\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br")])]),t("h3",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://kubernetes.io/zh/docs/tasks/administer-cluster/namespaces/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://kubernetes.io/zh/docs/tasks/administer-cluster/namespaces/"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);