"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[4729],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>u});var t=a(7294);function m(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){m(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,m=function(e,n){if(null==e)return{};var a,t,m={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(m[a]=e[a]);return m}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(m[a]=e[a])}return m}var p=t.createContext({}),d=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},c=function(e){var n=d(e.components);return t.createElement(p.Provider,{value:n},e.children)},l="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var a=e.components,m=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=d(a),h=m,u=l["".concat(p,".").concat(h)]||l[h]||s[h]||r;return a?t.createElement(u,o(o({ref:n},c),{},{components:a})):t.createElement(u,o({ref:n},c))}));function u(e,n){var a=arguments,m=n&&n.mdxType;if("string"==typeof e||m){var r=a.length,o=new Array(r);o[0]=h;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[l]="string"==typeof e?e:m,o[1]=i;for(var d=2;d<r;d++)o[d]=a[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4709:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var t=a(7462),m=(a(7294),a(3905));const r={},o=void 0,i={unversionedId:"commands/podman-machine/podman-machine",id:"commands/podman-machine/podman-machine",title:"podman-machine",description:"% podman-machine 1",source:"@site/docs/commands/podman-machine/podman-machine.md",sourceDirName:"commands/podman-machine",slug:"/commands/podman-machine/",permalink:"/website-new/docs/commands/podman-machine/",draft:!1,editUrl:"https://github.com/containers/website-new/docs/commands/podman-machine/podman-machine.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-logs",permalink:"/website-new/docs/commands/podman-logs"},next:{title:"podman-machine-info",permalink:"/website-new/docs/commands/podman-machine/podman-machine-info"}},p={},d=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"SUBCOMMANDS",id:"subcommands",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"HISTORY",id:"history",level:2}],c={toc:d},l="wrapper";function s(e){let{components:n,...a}=e;return(0,m.kt)(l,(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,m.kt)("p",null,"% podman-machine 1"),(0,m.kt)("h2",{id:"name"},"NAME"),(0,m.kt)("p",null,"podman","-","machine - Manage Podman's virtual machine"),(0,m.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"podman machine")," ",(0,m.kt)("em",{parentName:"p"},"subcommand")),(0,m.kt)("h2",{id:"description"},"DESCRIPTION"),(0,m.kt)("p",null,(0,m.kt)("inlineCode",{parentName:"p"},"podman machine")," is a set of subcommands that manage Podman's virtual machine."),(0,m.kt)("p",null,"Podman on MacOS and Windows requires a virtual machine. This is because containers are Linux -\ncontainers do not run on any other OS because containers' core functionality are\ntied to the Linux kernel. Podman machine must be used to manage MacOS and Windows machines,\nbut can be optionally used on Linux."),(0,m.kt)("p",null,"All ",(0,m.kt)("inlineCode",{parentName:"p"},"podman machine")," commands are rootless only."),(0,m.kt)("p",null,"NOTE: The podman-machine configuration file is managed under the\n",(0,m.kt)("inlineCode",{parentName:"p"},"$XDG_CONFIG_HOME/containers/podman/machine/")," directory. Changing the ",(0,m.kt)("inlineCode",{parentName:"p"},"$XDG_CONFIG_HOME"),"\nenvironment variable while the machines are running can lead to unexpected behavior."),(0,m.kt)("h2",{id:"subcommands"},"SUBCOMMANDS"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:null},"Command"),(0,m.kt)("th",{parentName:"tr",align:null},"Man Page"),(0,m.kt)("th",{parentName:"tr",align:null},"Description"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"info"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-machine/podman-machine-info"},"podman-machine-info(1)")),(0,m.kt)("td",{parentName:"tr",align:null},"Display machine host info")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"init"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-machine/podman-machine-init"},"podman-machine-init(1)")),(0,m.kt)("td",{parentName:"tr",align:null},"Initialize a new virtual machine")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"inspect"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-machine/podman-machine-inspect"},"podman-machine-inspect(1)")),(0,m.kt)("td",{parentName:"tr",align:null},"Inspect one or more virtual machines")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"list"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-machine/podman-machine-list"},"podman-machine-list(1)")),(0,m.kt)("td",{parentName:"tr",align:null},"List virtual machines")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"os"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-machine/podman-machine-os"},"podman-machine-os(1)")),(0,m.kt)("td",{parentName:"tr",align:null},"Manage a Podman virtual machine's OS")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"rm"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-machine/podman-machine-rm"},"podman-machine-rm(1)")),(0,m.kt)("td",{parentName:"tr",align:null},"Remove a virtual machine")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"set"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-machine/podman-machine-set"},"podman-machine-set(1)")),(0,m.kt)("td",{parentName:"tr",align:null},"Sets a virtual machine setting")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"ssh"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-machine/podman-machine-ssh"},"podman-machine-ssh(1)")),(0,m.kt)("td",{parentName:"tr",align:null},"SSH into a virtual machine")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"start"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-machine/podman-machine-start"},"podman-machine-start(1)")),(0,m.kt)("td",{parentName:"tr",align:null},"Start a virtual machine")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"stop"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-machine/podman-machine-stop"},"podman-machine-stop(1)")),(0,m.kt)("td",{parentName:"tr",align:null},"Stop a virtual machine")))),(0,m.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("a",{parentName:"strong",href:"/website-new/docs/podman"},"podman(1)")),", ",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("a",{parentName:"strong",href:"/website-new/docs/commands/podman-machine/podman-machine-info"},"podman-machine-info(1)")),", ",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("a",{parentName:"strong",href:"/website-new/docs/commands/podman-machine/podman-machine-init"},"podman-machine-init(1)")),", ",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("a",{parentName:"strong",href:"/website-new/docs/commands/podman-machine/podman-machine-list"},"podman-machine-list(1)")),", ",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("a",{parentName:"strong",href:"/website-new/docs/commands/podman-machine/podman-machine-os"},"podman-machine-os(1)")),", ",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("a",{parentName:"strong",href:"/website-new/docs/commands/podman-machine/podman-machine-rm"},"podman-machine-rm(1)")),", ",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("a",{parentName:"strong",href:"/website-new/docs/commands/podman-machine/podman-machine-ssh"},"podman-machine-ssh(1)")),", ",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("a",{parentName:"strong",href:"/website-new/docs/commands/podman-machine/podman-machine-start"},"podman-machine-start(1)")),", ",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("a",{parentName:"strong",href:"/website-new/docs/commands/podman-machine/podman-machine-stop"},"podman-machine-stop(1)")),", ",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("a",{parentName:"strong",href:"/website-new/docs/commands/podman-machine/podman-machine-inspect"},"podman-machine-inspect(1)"))),(0,m.kt)("h2",{id:"history"},"HISTORY"),(0,m.kt)("p",null,"March 2021, Originally compiled by Ashley Cui ",(0,m.kt)("a",{parentName:"p",href:"mailto:acui@redhat.com"},"acui@redhat.com")))}s.isMDXComponent=!0}}]);