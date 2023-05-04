"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[452],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),i=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=i(e.components);return a.createElement(m.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=i(n),u=r,f=d["".concat(m,".").concat(u)]||d[u]||c[u]||o;return n?a.createElement(f,s(s({ref:t},p),{},{components:n})):a.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[d]="string"==typeof e?e:r,s[1]=l;for(var i=2;i<o;i++)s[i]=n[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},151:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var a=n(7462),r=(n(7294),n(3905));const o={},s=void 0,l={unversionedId:"commands/podman-system/podman-system-df",id:"commands/podman-system/podman-system-df",title:"podman-system-df",description:"% podman-system-df 1",source:"@site/docs/commands/podman-system/podman-system-df.md",sourceDirName:"commands/podman-system",slug:"/commands/podman-system/podman-system-df",permalink:"/website-new/docs/commands/podman-system/podman-system-df",draft:!1,editUrl:"https://github.com/containers/website-new/docs/commands/podman-system/podman-system-df.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-system",permalink:"/website-new/docs/commands/podman-system/"},next:{title:"podman-system-migrate",permalink:"/website-new/docs/commands/podman-system/podman-system-migrate"}},m={},i=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"OPTIONS",id:"options",level:2},{value:"<strong>--format</strong>=<em>format</em>",id:"--formatformat",level:4},{value:"<strong>--verbose</strong>, <strong>-v</strong>",id:"--verbose--v",level:4},{value:"EXAMPLE",id:"example",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"HISTORY",id:"history",level:2}],p={toc:i},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"% podman-system-df 1"),(0,r.kt)("h2",{id:"name"},"NAME"),(0,r.kt)("p",null,"podman","-","system","-","df - Show podman disk usage"),(0,r.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman system df")," ","[",(0,r.kt)("em",{parentName:"p"},"options"),"]"),(0,r.kt)("h2",{id:"description"},"DESCRIPTION"),(0,r.kt)("p",null,"Show podman disk usage"),(0,r.kt)("h2",{id:"options"},"OPTIONS"),(0,r.kt)("h4",{id:"--formatformat"},(0,r.kt)("strong",{parentName:"h4"},"--format"),"=",(0,r.kt)("em",{parentName:"h4"},"format")),(0,r.kt)("p",null,"Pretty-print images using a Go template or JSON. This flag is not allowed in combination with ",(0,r.kt)("strong",{parentName:"p"},"--verbose")),(0,r.kt)("p",null,"Valid placeholders for the Go template are listed below:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Placeholder")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Active"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates whether volume is in use")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".RawReclaimable"),(0,r.kt)("td",{parentName:"tr",align:null},"Raw reclaimable size of each Type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".RawSize"),(0,r.kt)("td",{parentName:"tr",align:null},"Raw size of each type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Reclaimable"),(0,r.kt)("td",{parentName:"tr",align:null},"Reclaimable size or each type (human-readable)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Size"),(0,r.kt)("td",{parentName:"tr",align:null},"Size of each type (human-readable)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Total"),(0,r.kt)("td",{parentName:"tr",align:null},"Total items for each type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Type"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of data")))),(0,r.kt)("h4",{id:"--verbose--v"},(0,r.kt)("strong",{parentName:"h4"},"--verbose"),", ",(0,r.kt)("strong",{parentName:"h4"},"-v")),(0,r.kt)("p",null,"Show detailed information on space usage"),(0,r.kt)("h2",{id:"example"},"EXAMPLE"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ podman system df\nTYPE            TOTAL   ACTIVE   SIZE    RECLAIMABLE\nImages          6       2        281MB   168MB (59%)\nContainers      3       1        0B      0B (0%)\nLocal Volumes   1       1        22B     0B (0%)\n\n$ podman system df -v\nImages space usage:\n\nREPOSITORY                 TAG      IMAGE ID       CREATED       SIZE     SHARED SIZE   UNIQUE SIZE   CONTAINERS\ndocker.io/library/alpine   latest   5cb3aa00f899   2 weeks ago   5.79MB   0B            5.79MB       5\n\nContainers space usage:\n\nCONTAINER ID    IMAGE   COMMAND       LOCAL VOLUMES   SIZE     CREATED        STATUS       NAMES\n073f7e62812d    5cb3    sleep 100     1               0B       20 hours ago   exited       zen_joliot\n3f19f5bba242    5cb3    sleep 100     0               5.52kB   22 hours ago   exited       pedantic_archimedes\n8cd89bf645cc    5cb3    ls foodir     0               58B      21 hours ago   configured   agitated_hamilton\na1d948a4b61d    5cb3    ls foodir     0               12B      21 hours ago   exited       laughing_wing\neafe3e3c5bb3    5cb3    sleep 10000   0               72B      21 hours ago   exited       priceless_liskov\n\nLocal Volumes space usage:\n\nVOLUME NAME   LINKS   SIZE\ndata          1       0B\n\n$ podman system df --format "{{.Type}}\\t{{.Total}}"\nImages          1\nContainers      5\nLocal Volumes   1\n')),(0,r.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/website-new/docs/podman"},"podman(1)")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/website-new/docs/commands/podman-system/"},"podman-system(1)"))),(0,r.kt)("h2",{id:"history"},"HISTORY"),(0,r.kt)("p",null,"March 2019, Originally compiled by Qi Wang (qiwan at redhat dot com)"))}c.isMDXComponent=!0}}]);