"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[462],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),l=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),c=l(n),u=a,y=c["".concat(i,".").concat(u)]||c[u]||d[u]||r;return n?o.createElement(y,s(s({ref:t},p),{},{components:n})):o.createElement(y,s({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=u;var m={};for(var i in t)hasOwnProperty.call(t,i)&&(m[i]=t[i]);m.originalType=e,m[c]="string"==typeof e?e:a,s[1]=m;for(var l=2;l<r;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5128:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>m,toc:()=>l});var o=n(7462),a=(n(7294),n(3905));const r={},s=void 0,m={unversionedId:"commands/podman-system-connection/podman-system-connection-list",id:"commands/podman-system-connection/podman-system-connection-list",title:"podman-system-connection-list",description:"% podman-system-connection-list 1",source:"@site/docs/commands/podman-system-connection/podman-system-connection-list.md",sourceDirName:"commands/podman-system-connection",slug:"/commands/podman-system-connection/podman-system-connection-list",permalink:"/website-new/docs/commands/podman-system-connection/podman-system-connection-list",draft:!1,editUrl:"https://github.com/containers/website-new/docs/commands/podman-system-connection/podman-system-connection-list.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-system-connection-default",permalink:"/website-new/docs/commands/podman-system-connection/podman-system-connection-default"},next:{title:"podman-system-connection-remove",permalink:"/website-new/docs/commands/podman-system-connection/podman-system-connection-remove"}},i={},l=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"OPTIONS",id:"options",level:2},{value:"<strong>--format</strong>, <strong>-f</strong>=<em>format</em>",id:"--format--fformat",level:4},{value:"<strong>--quiet</strong>, <strong>-q</strong>",id:"--quiet--q",level:4},{value:"EXAMPLE",id:"example",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"HISTORY",id:"history",level:2}],p={toc:l},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"% podman-system-connection-list 1"),(0,a.kt)("h2",{id:"name"},"NAME"),(0,a.kt)("p",null,"podman","-","system","-","connection","-","list - List the destination for the Podman service(s)"),(0,a.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"podman system connection list")," ","[",(0,a.kt)("em",{parentName:"p"},"options"),"]"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"podman system connection ls")," ","[",(0,a.kt)("em",{parentName:"p"},"options"),"]"),(0,a.kt)("h2",{id:"description"},"DESCRIPTION"),(0,a.kt)("p",null,"List ssh destination(s) for podman service(s)."),(0,a.kt)("h2",{id:"options"},"OPTIONS"),(0,a.kt)("h4",{id:"--format--fformat"},(0,a.kt)("strong",{parentName:"h4"},"--format"),", ",(0,a.kt)("strong",{parentName:"h4"},"-f"),"=",(0,a.kt)("em",{parentName:"h4"},"format")),(0,a.kt)("p",null,"Change the default output format. This can be of a supported type like 'json' or a Go template.\nValid placeholders for the Go template listed below:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Placeholder")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},".Default"),(0,a.kt)("td",{parentName:"tr",align:null},"Indicates whether connection is the default")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},".Identity"),(0,a.kt)("td",{parentName:"tr",align:null},"Path to file containing SSH identity")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},".Name"),(0,a.kt)("td",{parentName:"tr",align:null},"Connection Name/Identifier")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},".URI"),(0,a.kt)("td",{parentName:"tr",align:null},"URI to podman service. Valid schemes are ssh://","[user@]",(0,a.kt)("em",{parentName:"td"},"host"),"[:port]",(0,a.kt)("em",{parentName:"td"},"Unix domain socket"),"[?secure=True]",", unix://",(0,a.kt)("em",{parentName:"td"},"Unix domain socket"),", and tcp://localhost","[:",(0,a.kt)("em",{parentName:"td"},"port"),"]")))),(0,a.kt)("h4",{id:"--quiet--q"},(0,a.kt)("strong",{parentName:"h4"},"--quiet"),", ",(0,a.kt)("strong",{parentName:"h4"},"-q")),(0,a.kt)("p",null,"Only show connection names"),(0,a.kt)("h2",{id:"example"},"EXAMPLE"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ podman system connection list\nName URI                                                      Identity      Default\ndevl ssh://root@example.com:/run/podman/podman.sock           ~/.ssh/id_rsa True\ndevl ssh://user@example.com:/run/user/1000/podman/podman.sock ~/.ssh/id_rsa False\n")),(0,a.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/website-new/docs/podman"},"podman(1)")),", ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/website-new/docs/commands/podman-system/"},"podman-system(1)")),", ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/website-new/docs/commands/podman-system-connection/"},"podman-system-connection(1)"))),(0,a.kt)("h2",{id:"history"},"HISTORY"),(0,a.kt)("p",null,"July 2020, Originally compiled by Jhon Honce (jhonce at redhat dot com)"))}d.isMDXComponent=!0}}]);