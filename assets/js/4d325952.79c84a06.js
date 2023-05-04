"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[3141],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),i=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=i(e.components);return o.createElement(l.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),s=i(n),u=r,f=s["".concat(l,".").concat(u)]||s[u]||c[u]||a;return n?o.createElement(f,p(p({ref:t},m),{},{components:n})):o.createElement(f,p({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[s]="string"==typeof e?e:r,p[1]=d;for(var i=2;i<a;i++)p[i]=n[i];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8444:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>i});var o=n(7462),r=(n(7294),n(3905));const a={},p=void 0,d={unversionedId:"commands/podman-pod/podman-pod-rm",id:"commands/podman-pod/podman-pod-rm",title:"podman-pod-rm",description:"% podman-pod-rm 1",source:"@site/docs/commands/podman-pod/podman-pod-rm.md",sourceDirName:"commands/podman-pod",slug:"/commands/podman-pod/podman-pod-rm",permalink:"/website-new/docs/commands/podman-pod/podman-pod-rm",draft:!1,editUrl:"https://github.com/containers/website-new/docs/commands/podman-pod/podman-pod-rm.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-pod-restart",permalink:"/website-new/docs/commands/podman-pod/podman-pod-restart"},next:{title:"podman-pod-start",permalink:"/website-new/docs/commands/podman-pod/podman-pod-start"}},l={},i=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"OPTIONS",id:"options",level:2},{value:"<strong>--all</strong>, <strong>-a</strong>",id:"--all--a",level:4},{value:"<strong>--force</strong>, <strong>-f</strong>",id:"--force--f",level:4},{value:"EXAMPLE",id:"example",level:2},{value:"Exit Status",id:"exit-status",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"HISTORY",id:"history",level:2}],m={toc:i},s="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"% podman-pod-rm 1"),(0,r.kt)("h2",{id:"name"},"NAME"),(0,r.kt)("p",null,"podman","-","pod","-","rm - Remove one or more stopped pods and containers"),(0,r.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman pod rm")," ","[",(0,r.kt)("em",{parentName:"p"},"options"),"]"," ",(0,r.kt)("em",{parentName:"p"},"pod")),(0,r.kt)("h2",{id:"description"},"DESCRIPTION"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman pod rm")," will remove one or more stopped pods and their containers from the host. The pod name or ID can be used. The ","-","f option stops all containers and then removes them before removing the pod. If all containers added by the user are in an exited state, the pod will be removed."),(0,r.kt)("h2",{id:"options"},"OPTIONS"),(0,r.kt)("h4",{id:"--all--a"},(0,r.kt)("strong",{parentName:"h4"},"--all"),", ",(0,r.kt)("strong",{parentName:"h4"},"-a")),(0,r.kt)("p",null,"Remove all pods. Can be used in conjunction with ","-","f as well."),(0,r.kt)("h4",{id:"--force--f"},(0,r.kt)("strong",{parentName:"h4"},"--force"),", ",(0,r.kt)("strong",{parentName:"h4"},"-f")),(0,r.kt)("p",null,"Stop running containers and delete all stopped containers before removal of pod."),(0,r.kt)("p",null,"@@option ignore"),(0,r.kt)("p",null,"@@option latest"),(0,r.kt)("p",null,"@@option pod-id-file.pod\nIf specified, the pod-id-file will be removed along with the pod."),(0,r.kt)("p",null,"@@option time"),(0,r.kt)("p",null,"The --force option must be specified to use the --time option."),(0,r.kt)("h2",{id:"example"},"EXAMPLE"),(0,r.kt)("p",null,"Remove pod with a given name"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"podman pod rm mywebserverpod\n")),(0,r.kt)("p",null,"Remove multiple pods with given names and/or IDs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"podman pod rm mywebserverpod myflaskserverpod 860a4b23\n")),(0,r.kt)("p",null,"Forcefully remove pod with a given ID"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"podman pod rm -f 860a4b23\n")),(0,r.kt)("p",null,"Forcefully remove all pods"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"podman pod rm -f -a\npodman pod rm -fa\n")),(0,r.kt)("p",null,"Remove pod using ID specified in a given file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"podman pod rm --pod-id-file /path/to/id/file\n")),(0,r.kt)("h2",{id:"exit-status"},"Exit Status"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"0")," All specified pods removed"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1")," One of the specified pods did not exist, and no other failures"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2")," One of the specified pods is attached to a container"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"125")," The command fails for any other reason"),(0,r.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/website-new/docs/podman"},"podman(1)")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/website-new/docs/commands/podman-pod/"},"podman-pod(1)"))),(0,r.kt)("h2",{id:"history"},"HISTORY"),(0,r.kt)("p",null,"July 2018, Originally compiled by Peter Hunt ",(0,r.kt)("a",{parentName:"p",href:"mailto:pehunt@redhat.com"},"pehunt@redhat.com")))}c.isMDXComponent=!0}}]);