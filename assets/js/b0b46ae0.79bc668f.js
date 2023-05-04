"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[8535],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,u=d["".concat(i,".").concat(f)]||d[f]||s[f]||o;return n?a.createElement(u,p(p({ref:t},m),{},{components:n})):a.createElement(u,p({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:r,p[1]=c;for(var l=2;l<o;l++)p[l]=n[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3672:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={},p=void 0,c={unversionedId:"commands/podman-container/podman-container-prune",id:"commands/podman-container/podman-container-prune",title:"podman-container-prune",description:"% podman-container-prune 1",source:"@site/docs/commands/podman-container/podman-container-prune.md",sourceDirName:"commands/podman-container",slug:"/commands/podman-container/podman-container-prune",permalink:"/website-new/docs/commands/podman-container/podman-container-prune",draft:!1,editUrl:"https://github.com/containers/website-new/docs/commands/podman-container/podman-container-prune.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-container-inspect",permalink:"/website-new/docs/commands/podman-container/podman-container-inspect"},next:{title:"podman-container-restore",permalink:"/website-new/docs/commands/podman-container/podman-container-restore"}},i={},l=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"OPTIONS",id:"options",level:2},{value:"<strong>--filter</strong>=<em>filters</em>",id:"--filterfilters",level:4},{value:"<strong>--force</strong>, <strong>-f</strong>",id:"--force--f",level:4},{value:"EXAMPLES",id:"examples",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"HISTORY",id:"history",level:2}],m={toc:l},d="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"% podman-container-prune 1"),(0,r.kt)("h2",{id:"name"},"NAME"),(0,r.kt)("p",null,"podman","-","container","-","prune - Remove all stopped containers from local storage"),(0,r.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman container prune")," ","[",(0,r.kt)("em",{parentName:"p"},"options"),"]"),(0,r.kt)("h2",{id:"description"},"DESCRIPTION"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman container prune")," removes all stopped containers from local storage."),(0,r.kt)("h2",{id:"options"},"OPTIONS"),(0,r.kt)("h4",{id:"--filterfilters"},(0,r.kt)("strong",{parentName:"h4"},"--filter"),"=",(0,r.kt)("em",{parentName:"h4"},"filters")),(0,r.kt)("p",null,"Provide filter values."),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"filters")," argument format is of ",(0,r.kt)("inlineCode",{parentName:"p"},"key=value"),". If there is more than one ",(0,r.kt)("em",{parentName:"p"},"filter"),", then pass multiple OPTIONS: ",(0,r.kt)("strong",{parentName:"p"},"--filter")," ",(0,r.kt)("em",{parentName:"p"},"foo=bar")," ",(0,r.kt)("strong",{parentName:"p"},"--filter")," ",(0,r.kt)("em",{parentName:"p"},"bif=baz"),"."),(0,r.kt)("p",null,"Supported filters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Filter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"label")),(0,r.kt)("td",{parentName:"tr",align:null},"Only remove containers, with (or without, in the case of label!=","[...]"," is used) the specified labels.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"until")),(0,r.kt)("td",{parentName:"tr",align:null},"Only remove containers created before given timestamp.")))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"label")," ",(0,r.kt)("em",{parentName:"p"},"filter")," accepts two formats. One is the ",(0,r.kt)("inlineCode",{parentName:"p"},"label"),"=",(0,r.kt)("em",{parentName:"p"},"key")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"label"),"=",(0,r.kt)("em",{parentName:"p"},"key"),"=",(0,r.kt)("em",{parentName:"p"},"value"),", which removes containers with the specified labels. The other format is the ",(0,r.kt)("inlineCode",{parentName:"p"},"label!"),"=",(0,r.kt)("em",{parentName:"p"},"key")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"label!"),"=",(0,r.kt)("em",{parentName:"p"},"key"),"=",(0,r.kt)("em",{parentName:"p"},"value"),", which removes containers without the specified labels."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"until")," ",(0,r.kt)("em",{parentName:"p"},"filter")," can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. 10m, 1h30m) computed relative to the machine\u2019s time."),(0,r.kt)("h4",{id:"--force--f"},(0,r.kt)("strong",{parentName:"h4"},"--force"),", ",(0,r.kt)("strong",{parentName:"h4"},"-f")),(0,r.kt)("p",null,"Do not provide an interactive prompt for container removal.\\\nThe default is ",(0,r.kt)("strong",{parentName:"p"},"false"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"-h"),", ",(0,r.kt)("strong",{parentName:"p"},"--help")),(0,r.kt)("p",null,"Print usage statement.\\\nThe default is ",(0,r.kt)("strong",{parentName:"p"},"false"),"."),(0,r.kt)("h2",{id:"examples"},"EXAMPLES"),(0,r.kt)("p",null,"Remove all stopped containers from local storage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ podman container prune\nWARNING! This will remove all stopped containers.\nAre you sure you want to continue? [y/N] y\n878392adf2e6c5c9bb1fc19b69d37d2e98c8abf9d539c0bce4b15b46bbcce471\n37664467fbe3618bf9479c34393ac29c02696675addf1750f9e346581636cde7\ned0c6468b8e1cb641b4621d1fe30cb477e1fefc5c0bceb66feaf2f7cb50e5962\n6ac6c8f0067b7a4682e6b8e18902665b57d1a0e07e885d9abcd382232a543ccd\nfff1c5b6c3631746055ec40598ce8ecaa4b82aef122f9e3a85b03b55c0d06c23\n602d343cd47e7cb3dfc808282a9900a3e4555747787ec6723bb68cedab8384d5\n")),(0,r.kt)("p",null,"Remove all stopped containers from local storage without confirmation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ podman container prune -f\n878392adf2e6c5c9bb1fc19b69d37d2e98c8abf9d539c0bce4b15b46bbcce471\n37664467fbe3618bf9479c34393ac29c02696675addf1750f9e346581636cde7\ned0c6468b8e1cb641b4621d1fe30cb477e1fefc5c0bceb66feaf2f7cb50e5962\n6ac6c8f0067b7a4682e6b8e18902665b57d1a0e07e885d9abcd382232a543ccd\nfff1c5b6c3631746055ec40598ce8ecaa4b82aef122f9e3a85b03b55c0d06c23\n602d343cd47e7cb3dfc808282a9900a3e4555747787ec6723bb68cedab8384d5\n")),(0,r.kt)("p",null,"Remove all stopped containers from local storage created within last 10 minutes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ podman container prune --filter until="10m"\nWARNING! This will remove all stopped containers.\nAre you sure you want to continue? [y/N] y\n3d366295e33d8cc612c4d873199bacadd55088d90d17dcafaa9a2d317ad50b4e\n')),(0,r.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/website-new/docs/podman"},"podman(1)")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/website-new/docs/commands/podman-ps"},"podman-ps(1)"))),(0,r.kt)("h2",{id:"history"},"HISTORY"),(0,r.kt)("p",null,"December 2018, Originally compiled by Brent Baude ",(0,r.kt)("a",{parentName:"p",href:"mailto:bbaude@redhat.com"},"bbaude@redhat.com"),"\\\nDecember 2020, converted filter information from docs.docker.com documentation by Dan Walsh ",(0,r.kt)("a",{parentName:"p",href:"mailto:dwalsh@redhat.com"},"dwalsh@redhat.com")))}s.isMDXComponent=!0}}]);