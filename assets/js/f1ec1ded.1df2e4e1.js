"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[1351],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):m(m({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},i="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),i=d(n),c=o,v=i["".concat(p,".").concat(c)]||i[c]||s[c]||r;return n?a.createElement(v,m(m({ref:t},u),{},{components:n})):a.createElement(v,m({ref:t},u))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,m=new Array(r);m[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[i]="string"==typeof e?e:o,m[1]=l;for(var d=2;d<r;d++)m[d]=n[d];return a.createElement.apply(null,m)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9807:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>s,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const r={},m=void 0,l={unversionedId:"commands/podman-volume/podman-volume",id:"commands/podman-volume/podman-volume",title:"podman-volume",description:"% podman-volume 1",source:"@site/docs/commands/podman-volume/podman-volume.md",sourceDirName:"commands/podman-volume",slug:"/commands/podman-volume/",permalink:"/website-new/docs/commands/podman-volume/",draft:!1,editUrl:"https://github.com/containers/website-new/docs/commands/podman-volume/podman-volume.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-version",permalink:"/website-new/docs/commands/podman-version"},next:{title:"podman-volume-create",permalink:"/website-new/docs/commands/podman-volume/podman-volume-create"}},p={},d=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"SUBCOMMANDS",id:"subcommands",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"HISTORY",id:"history",level:2}],u={toc:d},i="wrapper";function s(e){let{components:t,...n}=e;return(0,o.kt)(i,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"% podman-volume 1"),(0,o.kt)("h2",{id:"name"},"NAME"),(0,o.kt)("p",null,"podman","-","volume - Simple management tool for volumes"),(0,o.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"podman volume")," ",(0,o.kt)("em",{parentName:"p"},"subcommand")),(0,o.kt)("h2",{id:"description"},"DESCRIPTION"),(0,o.kt)("p",null,"podman volume is a set of subcommands that manage volumes."),(0,o.kt)("h2",{id:"subcommands"},"SUBCOMMANDS"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Command"),(0,o.kt)("th",{parentName:"tr",align:null},"Man Page"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"create"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-volume/podman-volume-create"},"podman-volume-create(1)")),(0,o.kt)("td",{parentName:"tr",align:null},"Create a new volume.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"exists"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-volume/podman-volume-exists"},"podman-volume-exists(1)")),(0,o.kt)("td",{parentName:"tr",align:null},"Check if the given volume exists.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"export"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-volume/podman-volume-export"},"podman-volume-export(1)")),(0,o.kt)("td",{parentName:"tr",align:null},"Exports volume to external tar.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"import"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-volume/podman-volume-import"},"podman-volume-import(1)")),(0,o.kt)("td",{parentName:"tr",align:null},"Import tarball contents into an existing podman volume.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"inspect"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-volume/podman-volume-inspect"},"podman-volume-inspect(1)")),(0,o.kt)("td",{parentName:"tr",align:null},"Get detailed information on one or more volumes.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ls"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-volume/podman-volume-ls"},"podman-volume-ls(1)")),(0,o.kt)("td",{parentName:"tr",align:null},"List all the available volumes.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"mount"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-volume/podman-volume-mount"},"podman-volume-mount(1)")),(0,o.kt)("td",{parentName:"tr",align:null},"Mount a volume filesystem.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"prune"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-volume/podman-volume-prune"},"podman-volume-prune(1)")),(0,o.kt)("td",{parentName:"tr",align:null},"Remove all unused volumes.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"reload"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-volume/podman-volume-reload"},"podman-volume-reload(1)")),(0,o.kt)("td",{parentName:"tr",align:null},"Reload all volumes from volumes plugins.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"rm"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-volume/podman-volume-rm"},"podman-volume-rm(1)")),(0,o.kt)("td",{parentName:"tr",align:null},"Remove one or more volumes.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"unmount"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-volume/podman-volume-unmount"},"podman-volume-unmount(1)")),(0,o.kt)("td",{parentName:"tr",align:null},"Unmount a volume.")))),(0,o.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/website-new/docs/podman"},"podman(1)"))),(0,o.kt)("h2",{id:"history"},"HISTORY"),(0,o.kt)("p",null,"November 2018, Originally compiled by Urvashi Mohnani ",(0,o.kt)("a",{parentName:"p",href:"mailto:umohnani@redhat.com"},"umohnani@redhat.com")))}s.isMDXComponent=!0}}]);