(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{556:function(e,r,s){"use strict";s.r(r);var t=s(6),a=Object(t.a)({},(function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[s("img",{attrs:{src:"https://i.imgur.com/OQVdbpa.jpg",alt:""}})]),e._v(" "),s("p",[e._v("This article will show how to add insecure-registries in "),s("code",[e._v("docker:dind")]),e._v(", allow jenkins to push to a private docker-registry.")]),e._v(" "),s("h2",{attrs:{id:"docker-run"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-run"}},[e._v("#")]),e._v(" Docker run")]),e._v(" "),s("p",[e._v("You can just add "),s("code",[e._v("--insecure-registry")]),e._v(" arguments to the command:")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("docker run --rm --privileged --name docker-dind --network-alias docker "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  -e "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("DOCKER_TLS_CERTDIR")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('""')]),e._v(" docker:dind "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --insecure-registry "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".0.100:5000\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("h2",{attrs:{id:"references"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/docker-library/docker/issues/131",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to add daemon.json at docker:dind"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);r.default=a.exports}}]);