"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[5857],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),i=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(m.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=i(n),c=a,u=d["".concat(m,".").concat(c)]||d[c]||k[c]||o;return n?r.createElement(u,p(p({ref:t},s),{},{components:n})):r.createElement(u,p({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=c;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[d]="string"==typeof e?e:a,p[1]=l;for(var i=2;i<o;i++)p[i]=n[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={},p=void 0,l={unversionedId:"commands/podman-network/podman-network-prune",id:"commands/podman-network/podman-network-prune",title:"podman-network-prune",description:"% podman-network-prune 1",source:"@site/docs/commands/podman-network/podman-network-prune.md",sourceDirName:"commands/podman-network",slug:"/commands/podman-network/podman-network-prune",permalink:"/website-new/docs/commands/podman-network/podman-network-prune",draft:!1,editUrl:"https://github.com/containers/website-new/docs/commands/podman-network/podman-network-prune.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-network-ls",permalink:"/website-new/docs/commands/podman-network/podman-network-ls"},next:{title:"podman-network-reload",permalink:"/website-new/docs/commands/podman-network/podman-network-reload"}},m={},i=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"OPTIONS",id:"options",level:2},{value:"<strong>--filter</strong>",id:"--filter",level:4},{value:"<strong>--force</strong>, <strong>-f</strong>",id:"--force--f",level:4},{value:"EXAMPLE",id:"example",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"HISTORY",id:"history",level:2}],s={toc:i},d="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"% podman-network-prune 1"),(0,a.kt)("h2",{id:"name"},"NAME"),(0,a.kt)("p",null,"podman","-","network","-","prune - Remove all unused networks"),(0,a.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"podman network prune")," ","[",(0,a.kt)("em",{parentName:"p"},"options"),"]"),(0,a.kt)("h2",{id:"description"},"DESCRIPTION"),(0,a.kt)("p",null,"Remove all unused networks. An unused network is defined by a network which\nhas no containers connected or configured to connect to it. It will not remove\nthe so-called default network which goes by the name of ",(0,a.kt)("em",{parentName:"p"},"podman"),"."),(0,a.kt)("h2",{id:"options"},"OPTIONS"),(0,a.kt)("h4",{id:"--filter"},(0,a.kt)("strong",{parentName:"h4"},"--filter")),(0,a.kt)("p",null,"Provide filter values."),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"filters")," argument format is of ",(0,a.kt)("inlineCode",{parentName:"p"},"key=value"),". If there is more than one ",(0,a.kt)("em",{parentName:"p"},"filter"),", then pass multiple OPTIONS: ",(0,a.kt)("strong",{parentName:"p"},"--filter")," ",(0,a.kt)("em",{parentName:"p"},"foo=bar")," ",(0,a.kt)("strong",{parentName:"p"},"--filter")," ",(0,a.kt)("em",{parentName:"p"},"bif=baz"),"."),(0,a.kt)("p",null,"Supported filters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Filter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("em",{parentName:"td"},"label")),(0,a.kt)("td",{parentName:"tr",align:null},"Only remove networks, with (or without, in the case of label!=","[...]"," is used) the specified labels.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("em",{parentName:"td"},"until")),(0,a.kt)("td",{parentName:"tr",align:null},"Only remove networks created before given timestamp.")))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"label")," ",(0,a.kt)("em",{parentName:"p"},"filter")," accepts two formats. One is the ",(0,a.kt)("inlineCode",{parentName:"p"},"label"),"=",(0,a.kt)("em",{parentName:"p"},"key")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"label"),"=",(0,a.kt)("em",{parentName:"p"},"key"),"=",(0,a.kt)("em",{parentName:"p"},"value"),", which removes networks with the specified labels. The other format is the ",(0,a.kt)("inlineCode",{parentName:"p"},"label!"),"=",(0,a.kt)("em",{parentName:"p"},"key")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"label!"),"=",(0,a.kt)("em",{parentName:"p"},"key"),"=",(0,a.kt)("em",{parentName:"p"},"value"),", which removes networks without the specified labels."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"until")," ",(0,a.kt)("em",{parentName:"p"},"filter")," can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. 10m, 1h30m) computed relative to the machine\u2019s time."),(0,a.kt)("h4",{id:"--force--f"},(0,a.kt)("strong",{parentName:"h4"},"--force"),", ",(0,a.kt)("strong",{parentName:"h4"},"-f")),(0,a.kt)("p",null,"Do not prompt for confirmation"),(0,a.kt)("h2",{id:"example"},"EXAMPLE"),(0,a.kt)("p",null,"Prune networks"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"podman network prune\n")),(0,a.kt)("p",null,"Prune all networks created before 2h"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"podman network prune --filter until=2h\n")),(0,a.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/website-new/docs/podman"},"podman(1)")),", ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/website-new/docs/commands/podman-network/"},"podman-network(1)")),", ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/website-new/docs/commands/podman-network/podman-network-rm"},"podman-network-rm(1)"))),(0,a.kt)("h2",{id:"history"},"HISTORY"),(0,a.kt)("p",null,"February 2021, Originally compiled by Brent Baude ",(0,a.kt)("a",{parentName:"p",href:"mailto:bbaude@redhat.com"},"bbaude@redhat.com")))}k.isMDXComponent=!0}}]);