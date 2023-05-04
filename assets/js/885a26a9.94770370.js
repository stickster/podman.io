"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[5638],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=i(n),u=a,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:a,s[1]=c;for(var i=2;i<o;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6575:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={},s=void 0,c={unversionedId:"commands/podman-secret/podman-secret-rm",id:"commands/podman-secret/podman-secret-rm",title:"podman-secret-rm",description:"% podman-secret-rm 1",source:"@site/docs/commands/podman-secret/podman-secret-rm.md",sourceDirName:"commands/podman-secret",slug:"/commands/podman-secret/podman-secret-rm",permalink:"/website-new/docs/commands/podman-secret/podman-secret-rm",draft:!1,editUrl:"https://github.com/containers/website-new/docs/commands/podman-secret/podman-secret-rm.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-secret-ls",permalink:"/website-new/docs/commands/podman-secret/podman-secret-ls"},next:{title:"podman-start",permalink:"/website-new/docs/commands/podman-start"}},l={},i=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"OPTIONS",id:"options",level:2},{value:"<strong>--all</strong>, <strong>-a</strong>",id:"--all--a",level:4},{value:"<strong>--help</strong>",id:"--help",level:4},{value:"EXAMPLES",id:"examples",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"HISTORY",id:"history",level:2}],p={toc:i},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"% podman-secret-rm 1"),(0,a.kt)("h2",{id:"name"},"NAME"),(0,a.kt)("p",null,"podman","-","secret","-","rm - Remove one or more secrets"),(0,a.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"podman secret rm")," ","[",(0,a.kt)("em",{parentName:"p"},"options"),"]"," ",(0,a.kt)("em",{parentName:"p"},"secret")," ","[...]"),(0,a.kt)("h2",{id:"description"},"DESCRIPTION"),(0,a.kt)("p",null,"Removes one or more secrets."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"podman secret rm")," is safe to use on secrets that are in use by a container.\nThe created container will still have access to the secret data because secrets are\ncopied and mounted into the container when a container is created. If a secret is deleted and\nanother secret is created with the same name, the secret inside the container will not change;\nthe old secret value will still remain."),(0,a.kt)("h2",{id:"options"},"OPTIONS"),(0,a.kt)("h4",{id:"--all--a"},(0,a.kt)("strong",{parentName:"h4"},"--all"),", ",(0,a.kt)("strong",{parentName:"h4"},"-a")),(0,a.kt)("p",null,"Remove all existing secrets."),(0,a.kt)("h4",{id:"--help"},(0,a.kt)("strong",{parentName:"h4"},"--help")),(0,a.kt)("p",null,"Print usage statement."),(0,a.kt)("h2",{id:"examples"},"EXAMPLES"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ podman secret rm mysecret1 mysecret2\n")),(0,a.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/website-new/docs/podman"},"podman(1)")),", ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/website-new/docs/commands/podman-secret/"},"podman-secret(1)"))),(0,a.kt)("h2",{id:"history"},"HISTORY"),(0,a.kt)("p",null,"January 2021, Originally compiled by Ashley Cui ",(0,a.kt)("a",{parentName:"p",href:"mailto:acui@redhat.com"},"acui@redhat.com")))}d.isMDXComponent=!0}}]);