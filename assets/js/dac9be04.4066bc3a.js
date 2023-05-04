"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[3149],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>u});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):m(m({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=p(t),f=a,u=c["".concat(s,".").concat(f)]||c[f]||d[f]||o;return t?r.createElement(u,m(m({ref:n},l),{},{components:t})):r.createElement(u,m({ref:n},l))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,m=new Array(o);m[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[c]="string"==typeof e?e:a,m[1]=i;for(var p=2;p<o;p++)m[p]=t[p];return r.createElement.apply(null,m)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9107:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>m,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const o={},m='podman-manifest-rm "1" "April 2021" "podman"',i={unversionedId:"commands/podman-manifest/podman-manifest-rm",id:"commands/podman-manifest/podman-manifest-rm",title:'podman-manifest-rm "1" "April 2021" "podman"',description:"NAME",source:"@site/docs/commands/podman-manifest/podman-manifest-rm.md",sourceDirName:"commands/podman-manifest",slug:"/commands/podman-manifest/podman-manifest-rm",permalink:"/website-new/docs/commands/podman-manifest/podman-manifest-rm",draft:!1,editUrl:"https://github.com/containers/website-new/docs/commands/podman-manifest/podman-manifest-rm.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-manifest-remove",permalink:"/website-new/docs/commands/podman-manifest/podman-manifest-remove"},next:{title:"podman-mount",permalink:"/website-new/docs/commands/podman-mount"}},s={},p=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"EXAMPLE",id:"example",level:2},{value:"SEE ALSO",id:"see-also",level:2}],l={toc:p},c="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"podman-manifest-rm-1-april-2021-podman"},'podman-manifest-rm "1" "April 2021" "podman"'),(0,a.kt)("h2",{id:"name"},"NAME"),(0,a.kt)("p",null,"podman","-","manifest","-","rm - Remove manifest list or image index from local storage"),(0,a.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"podman manifest rm")," ",(0,a.kt)("em",{parentName:"p"},"list-or-index")," ","[...]"),(0,a.kt)("h2",{id:"description"},"DESCRIPTION"),(0,a.kt)("p",null,"Removes one or more locally stored manifest lists."),(0,a.kt)("h2",{id:"example"},"EXAMPLE"),(0,a.kt)("p",null,"podman manifest rm ",(0,a.kt)("inlineCode",{parentName:"p"},"<list>")),(0,a.kt)("p",null,"podman manifest rm listid1 listid2"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"storage.conf")," (",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/containers/storage.conf"),")"),(0,a.kt)("p",null,"storage.conf is the storage configuration file for all tools using containers/storage"),(0,a.kt)("p",null,"The storage configuration file specifies all of the available container storage options for tools using shared container storage."),(0,a.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/website-new/docs/podman"},"podman(1)")),", ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/website-new/docs/commands/podman-manifest/"},"podman-manifest(1)")),", ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/containers/storage/blob/main/docs/containers-storage.conf.5.md"},"containers-storage.conf(5)"))))}d.isMDXComponent=!0}}]);