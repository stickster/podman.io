"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[8391],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),d=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(s.Provider,{value:e},t.children)},i="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),i=d(n),u=r,k=i["".concat(s,".").concat(u)]||i[u]||c[u]||o;return n?a.createElement(k,p(p({ref:e},m),{},{components:n})):a.createElement(k,p({ref:e},m))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,p=new Array(o);p[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[i]="string"==typeof t?t:r,p[1]=l;for(var d=2;d<o;d++)p[d]=n[d];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6290:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={},p=void 0,l={unversionedId:"commands/podman-pod/podman-pod-stats",id:"commands/podman-pod/podman-pod-stats",title:"podman-pod-stats",description:"% podman-pod-stats 1",source:"@site/docs/commands/podman-pod/podman-pod-stats.md",sourceDirName:"commands/podman-pod",slug:"/commands/podman-pod/podman-pod-stats",permalink:"/website-new/docs/commands/podman-pod/podman-pod-stats",draft:!1,editUrl:"https://github.com/containers/website-new/docs/commands/podman-pod/podman-pod-stats.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-pod-start",permalink:"/website-new/docs/commands/podman-pod/podman-pod-start"},next:{title:"podman-pod-stop",permalink:"/website-new/docs/commands/podman-pod/podman-pod-stop"}},s={},d=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"OPTIONS",id:"options",level:2},{value:"<strong>--all</strong>, <strong>-a</strong>",id:"--all--a",level:4},{value:"<strong>--format</strong>=<em>template</em>",id:"--formattemplate",level:4},{value:"EXAMPLE",id:"example",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"HISTORY",id:"history",level:2}],m={toc:d},i="wrapper";function c(t){let{components:e,...n}=t;return(0,r.kt)(i,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"% podman-pod-stats 1"),(0,r.kt)("h2",{id:"name"},"NAME"),(0,r.kt)("p",null,"podman","-","pod","-","stats - Display a live stream of resource usage stats for containers in one or more pods"),(0,r.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman pod stats")," ","[",(0,r.kt)("em",{parentName:"p"},"options"),"][*pod*]"),(0,r.kt)("h2",{id:"description"},"DESCRIPTION"),(0,r.kt)("p",null,"Display a live stream of containers in one or more pods resource usage statistics. Running rootless is only supported on cgroups v2."),(0,r.kt)("h2",{id:"options"},"OPTIONS"),(0,r.kt)("h4",{id:"--all--a"},(0,r.kt)("strong",{parentName:"h4"},"--all"),", ",(0,r.kt)("strong",{parentName:"h4"},"-a")),(0,r.kt)("p",null,"Show all containers. Only running containers are shown by default"),(0,r.kt)("h4",{id:"--formattemplate"},(0,r.kt)("strong",{parentName:"h4"},"--format"),"=",(0,r.kt)("em",{parentName:"h4"},"template")),(0,r.kt)("p",null,"Pretty-print container statistics to JSON or using a Go template"),(0,r.kt)("p",null,"Valid placeholders for the Go template are listed below:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Placeholder")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".BlockIO"),(0,r.kt)("td",{parentName:"tr",align:null},"Block IO")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".CID"),(0,r.kt)("td",{parentName:"tr",align:null},"Container ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".CPU"),(0,r.kt)("td",{parentName:"tr",align:null},"CPU percentage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Mem"),(0,r.kt)("td",{parentName:"tr",align:null},"Memory percentage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".MemUsage"),(0,r.kt)("td",{parentName:"tr",align:null},"Memory usage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".MemUsageBytes"),(0,r.kt)("td",{parentName:"tr",align:null},"Memory usage (IEC)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Container Name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".NetIO"),(0,r.kt)("td",{parentName:"tr",align:null},"Network IO")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".PIDS"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of PIDs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Pod"),(0,r.kt)("td",{parentName:"tr",align:null},"Pod ID")))),(0,r.kt)("p",null,"When using a Go template, precede the format with ",(0,r.kt)("inlineCode",{parentName:"p"},"table")," to print headers."),(0,r.kt)("p",null,"@@option latest"),(0,r.kt)("p",null,"@@option no-reset"),(0,r.kt)("p",null,"@@option no-stream"),(0,r.kt)("h2",{id:"example"},"EXAMPLE"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# podman pod stats -a --no-stream\nID             NAME              CPU %   MEM USAGE / LIMIT   MEM %   NET IO    BLOCK IO   PIDS\na9f807ffaacd   frosty_hodgkin    --      3.092MB / 16.7GB    0.02%   -- / --   -- / --    2\n3b33001239ee   sleepy_stallman   --      -- / --             --      -- / --   -- / --    --\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# podman pod stats --no-stream a9f80\nID             NAME             CPU %   MEM USAGE / LIMIT   MEM %   NET IO    BLOCK IO   PIDS\na9f807ffaacd   frosty_hodgkin   --      3.092MB / 16.7GB    0.02%   -- / --   -- / --    2\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# podman pod stats --no-stream --format=json a9f80\n[\n    {\n        "id": "a9f807ffaacd",\n        "name": "frosty_hodgkin",\n        "cpu_percent": "--",\n        "mem_usage": "3.092MB / 16.7GB",\n        "mem_percent": "0.02%",\n        "netio": "-- / --",\n        "blocki": "-- / --",\n        "pids": "2"\n    }\n]\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# podman pod stats --no-stream --format "table {{.ID}} {{.Name}} {{.MemUsage}}" 6eae\nID             NAME           MEM USAGE / LIMIT\n6eae9e25a564   clever_bassi   3.031MB / 16.7GB\n')),(0,r.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/website-new/docs/podman"},"podman(1)")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/website-new/docs/commands/podman-pod/"},"podman-pod(1)"))),(0,r.kt)("h2",{id:"history"},"HISTORY"),(0,r.kt)("p",null,"February 2019, Originally compiled by Dan Walsh ",(0,r.kt)("a",{parentName:"p",href:"mailto:dwalsh@redhat.com"},"dwalsh@redhat.com")))}c.isMDXComponent=!0}}]);