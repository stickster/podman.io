"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[7983],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),i=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=m(e,["components","mdxType","originalType","parentName"]),d=i(n),c=r,k=d["".concat(p,".").concat(c)]||d[c]||s[c]||o;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m[d]="string"==typeof e?e:r,l[1]=m;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6699:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>m,toc:()=>i});var a=n(7462),r=(n(7294),n(3905));const o={},l=void 0,m={unversionedId:"commands/podman-volume/podman-volume-inspect",id:"commands/podman-volume/podman-volume-inspect",title:"podman-volume-inspect",description:"% podman-volume-inspect 1",source:"@site/docs/commands/podman-volume/podman-volume-inspect.md",sourceDirName:"commands/podman-volume",slug:"/commands/podman-volume/podman-volume-inspect",permalink:"/website-new/docs/commands/podman-volume/podman-volume-inspect",draft:!1,editUrl:"https://github.com/containers/website-new/docs/commands/podman-volume/podman-volume-inspect.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-volume-import",permalink:"/website-new/docs/commands/podman-volume/podman-volume-import"},next:{title:"podman-volume-ls",permalink:"/website-new/docs/commands/podman-volume/podman-volume-ls"}},p={},i=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"OPTIONS",id:"options",level:2},{value:"<strong>--all</strong>, <strong>-a</strong>",id:"--all--a",level:4},{value:"<strong>--format</strong>, <strong>-f</strong>=<em>format</em>",id:"--format--fformat",level:4},{value:"<strong>--help</strong>",id:"--help",level:4},{value:"EXAMPLES",id:"examples",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"HISTORY",id:"history",level:2}],u={toc:i},d="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"% podman-volume-inspect 1"),(0,r.kt)("h2",{id:"name"},"NAME"),(0,r.kt)("p",null,"podman","-","volume","-","inspect - Get detailed information on one or more volumes"),(0,r.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman volume inspect")," ","[",(0,r.kt)("em",{parentName:"p"},"options"),"]"," ",(0,r.kt)("em",{parentName:"p"},"volume")," ","[...]"),(0,r.kt)("h2",{id:"description"},"DESCRIPTION"),(0,r.kt)("p",null,"Display detailed information on one or more volumes. The output can be formatted using\nthe ",(0,r.kt)("strong",{parentName:"p"},"--format")," flag and a Go template. To get detailed information about all the\nexisting volumes, use the ",(0,r.kt)("strong",{parentName:"p"},"--all")," flag.\nVolumes can be queried individually by providing their full name or a unique partial name."),(0,r.kt)("h2",{id:"options"},"OPTIONS"),(0,r.kt)("h4",{id:"--all--a"},(0,r.kt)("strong",{parentName:"h4"},"--all"),", ",(0,r.kt)("strong",{parentName:"h4"},"-a")),(0,r.kt)("p",null,"Inspect all volumes."),(0,r.kt)("h4",{id:"--format--fformat"},(0,r.kt)("strong",{parentName:"h4"},"--format"),", ",(0,r.kt)("strong",{parentName:"h4"},"-f"),"=",(0,r.kt)("em",{parentName:"h4"},"format")),(0,r.kt)("p",null,"Format volume output using Go template"),(0,r.kt)("p",null,"Valid placeholders for the Go template are listed below:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Placeholder")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Anonymous"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates whether volume is anonymous")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".CreatedAt"),(0,r.kt)("td",{parentName:"tr",align:null},"Volume creation time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Driver"),(0,r.kt)("td",{parentName:"tr",align:null},"Volume driver")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".GID"),(0,r.kt)("td",{parentName:"tr",align:null},"GID the volume was created with")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Labels"),(0,r.kt)("td",{parentName:"tr",align:null},"Label information associated with the volume")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".MountCount"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of times the volume is mounted")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Mountpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"Source of volume mount point")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Volume name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".NeedsChown"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates volume needs to be chowned on first use")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".NeedsCopyUp"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates volume needs dest data copied up on first use")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Options"),(0,r.kt)("td",{parentName:"tr",align:null},"Volume options")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Scope"),(0,r.kt)("td",{parentName:"tr",align:null},"Volume scope")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Status"),(0,r.kt)("td",{parentName:"tr",align:null},"Status of the volume")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".StorageID"),(0,r.kt)("td",{parentName:"tr",align:null},"StorageID of the volume")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"Timeout of the volume")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".UID"),(0,r.kt)("td",{parentName:"tr",align:null},"UID the volume was created with")))),(0,r.kt)("h4",{id:"--help"},(0,r.kt)("strong",{parentName:"h4"},"--help")),(0,r.kt)("p",null,"Print usage statement"),(0,r.kt)("h2",{id:"examples"},"EXAMPLES"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ podman volume inspect myvol\n[\n     {\n          "Name": "myvol",\n          "Driver": "local",\n          "Mountpoint": "/home/myusername/.local/share/containers/storage/volumes/myvol/_data",\n          "CreatedAt": "2023-03-13T16:26:48.423069028-04:00",\n          "Labels": {},\n          "Scope": "local",\n          "Options": {},\n          "MountCount": 0,\n          "NeedsCopyUp": true,\n          "NeedsChown": true\n     }\n]\n')),(0,r.kt)("p",null,"$ podman volume inspect --all\n",'[\n{\n"Name": "myvol",\n"Driver": "local",\n"Mountpoint": "/home/myusername/.local/share/containers/storage/volumes/myvol/_data",\n"CreatedAt": "2023-03-13T16:26:48.423069028-04:00",\n"Labels": {},\n"Scope": "local",\n"Options": {},\n"MountCount": 0,\n"NeedsCopyUp": true,\n"NeedsChown": true\n}\n]'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"")),(0,r.kt)("p",null,'$ podman volume inspect --format "{{.Driver}} {{.Scope}}" myvol\nlocal local'),(0,r.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/website-new/docs/podman"},"podman(1)")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/website-new/docs/commands/podman-volume/"},"podman-volume(1)")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/website-new/docs/commands/podman-inspect"},"podman-inspect(1)"))),(0,r.kt)("h2",{id:"history"},"HISTORY"),(0,r.kt)("p",null,"November 2018, Originally compiled by Urvashi Mohnani ",(0,r.kt)("a",{parentName:"p",href:"mailto:umohnani@redhat.com"},"umohnani@redhat.com")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"")))}s.isMDXComponent=!0}}]);