"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[8307],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),s=l(t),u=a,f=s["".concat(p,".").concat(u)]||s[u]||d[u]||o;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var m={};for(var p in n)hasOwnProperty.call(n,p)&&(m[p]=n[p]);m.originalType=e,m[s]="string"==typeof e?e:a,i[1]=m;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1779:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>m,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const o={},i=void 0,m={unversionedId:"commands/podman-rename",id:"commands/podman-rename",title:"podman-rename",description:"% podman-rename 1",source:"@site/docs/commands/podman-rename.md",sourceDirName:"commands",slug:"/commands/podman-rename",permalink:"/website-new/docs/commands/podman-rename",draft:!1,editUrl:"https://github.com/containers/website-new/docs/commands/podman-rename.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-remote",permalink:"/website-new/docs/commands/podman-remote"},next:{title:"podman-restart",permalink:"/website-new/docs/commands/podman-restart"}},p={},l=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"OPTIONS",id:"options",level:2},{value:"EXAMPLES",id:"examples",level:2},{value:"SEE ALSO",id:"see-also",level:2}],c={toc:l},s="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(s,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"% podman-rename 1"),(0,a.kt)("h2",{id:"name"},"NAME"),(0,a.kt)("p",null,"podman","-","rename - Rename an existing container"),(0,a.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"podman rename")," ",(0,a.kt)("em",{parentName:"p"},"container")," ",(0,a.kt)("em",{parentName:"p"},"newname")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"podman container rename")," ",(0,a.kt)("em",{parentName:"p"},"container")," ",(0,a.kt)("em",{parentName:"p"},"newname")),(0,a.kt)("h2",{id:"description"},"DESCRIPTION"),(0,a.kt)("p",null,"Rename changes the name of an existing container.\nThe old name will be freed, and will be available for use.\nThis command can be run on containers in any state.\nHowever, running containers may not fully receive the effects until they are restarted - for example, a running container may still use the old name in its logs.\nAt present, only containers are supported; pods and volumes cannot be renamed."),(0,a.kt)("h2",{id:"options"},"OPTIONS"),(0,a.kt)("h2",{id:"examples"},"EXAMPLES"),(0,a.kt)("p",null,"Rename container with a given name"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ podman rename oldContainer aNewName\n")),(0,a.kt)("p",null,"Rename container with a given ID"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ podman rename 717716c00a6b testcontainer\n")),(0,a.kt)("p",null,"Create an alias for container with a given ID"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ podman container rename 6e7514b47180 databaseCtr\n")),(0,a.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/website-new/docs/podman"},"podman(1)"))))}d.isMDXComponent=!0}}]);