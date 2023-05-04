"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[2836],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),p=l(t),u=o,h=p["".concat(s,".").concat(u)]||p[u]||d[u]||r;return t?a.createElement(h,i(i({ref:n},c),{},{components:t})):a.createElement(h,i({ref:n},c))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var m={};for(var s in n)hasOwnProperty.call(n,s)&&(m[s]=n[s]);m.originalType=e,m[p]="string"==typeof e?e:o,i[1]=m;for(var l=2;l<r;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2732:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>m,toc:()=>l});var a=t(7462),o=(t(7294),t(3905));const r={},i=void 0,m={unversionedId:"commands/podman-machine/podman-machine-rm",id:"commands/podman-machine/podman-machine-rm",title:"podman-machine-rm",description:"% podman-machine-rm 1",source:"@site/docs/commands/podman-machine/podman-machine-rm.md",sourceDirName:"commands/podman-machine",slug:"/commands/podman-machine/podman-machine-rm",permalink:"/website-new/docs/commands/podman-machine/podman-machine-rm",draft:!1,editUrl:"https://github.com/containers/website-new/docs/commands/podman-machine/podman-machine-rm.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-machine-os",permalink:"/website-new/docs/commands/podman-machine/podman-machine-os"},next:{title:"podman-machine-set",permalink:"/website-new/docs/commands/podman-machine/podman-machine-set"}},s={},l=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"OPTIONS",id:"options",level:2},{value:"<strong>--force</strong>, <strong>-f</strong>",id:"--force--f",level:4},{value:"<strong>--help</strong>",id:"--help",level:4},{value:"<strong>--save-ignition</strong>",id:"--save-ignition",level:4},{value:"<strong>--save-image</strong>",id:"--save-image",level:4},{value:"<strong>--save-keys</strong>",id:"--save-keys",level:4},{value:"EXAMPLES",id:"examples",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"HISTORY",id:"history",level:2}],c={toc:l},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"% podman-machine-rm 1"),(0,o.kt)("h2",{id:"name"},"NAME"),(0,o.kt)("p",null,"podman","-","machine","-","rm - Remove a virtual machine"),(0,o.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"podman machine rm")," ","[",(0,o.kt)("em",{parentName:"p"},"options"),"][*name*]"),(0,o.kt)("h2",{id:"description"},"DESCRIPTION"),(0,o.kt)("p",null,"Remove a virtual machine and its related files. What is actually deleted\ndepends on the virtual machine type. For all virtual machines, the generated\nSSH keys and the podman system connection are deleted. The ignition files\ngenerated for that VM are also removed as is its image file on the filesystem."),(0,o.kt)("p",null,"Users get a display of what will be deleted and are required to confirm unless the option ",(0,o.kt)("inlineCode",{parentName:"p"},"--force"),"\nis used."),(0,o.kt)("p",null,"Rootless only."),(0,o.kt)("h2",{id:"options"},"OPTIONS"),(0,o.kt)("h4",{id:"--force--f"},(0,o.kt)("strong",{parentName:"h4"},"--force"),", ",(0,o.kt)("strong",{parentName:"h4"},"-f")),(0,o.kt)("p",null,"Stop and delete without confirmation."),(0,o.kt)("h4",{id:"--help"},(0,o.kt)("strong",{parentName:"h4"},"--help")),(0,o.kt)("p",null,"Print usage statement."),(0,o.kt)("h4",{id:"--save-ignition"},(0,o.kt)("strong",{parentName:"h4"},"--save-ignition")),(0,o.kt)("p",null,"Do not delete the generated ignition file."),(0,o.kt)("h4",{id:"--save-image"},(0,o.kt)("strong",{parentName:"h4"},"--save-image")),(0,o.kt)("p",null,"Do not delete the VM image."),(0,o.kt)("h4",{id:"--save-keys"},(0,o.kt)("strong",{parentName:"h4"},"--save-keys")),(0,o.kt)("p",null,"Do not delete the SSH keys for the VM. The system connection is always\ndeleted."),(0,o.kt)("h2",{id:"examples"},"EXAMPLES"),(0,o.kt)("p",null,'Remove a VM named "test1":'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ podman machine rm test1\n\nThe following files will be deleted:\n\n/home/user/.ssh/test1\n/home/user/.ssh/test1.pub\n/home/user/.config/containers/podman/machine/qemu/test1.ign\n/home/user/.local/share/containers/podman/machine/qemu/test1_fedora-coreos-33.20210315.0-qemu.x86_64.qcow2\n/home/user/.config/containers/podman/machine/qemu/test1.json\n\nAre you sure you want to continue? [y/N] y\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ podman machine rm -f test1\n$\n")),(0,o.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/website-new/docs/podman"},"podman(1)")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/website-new/docs/commands/podman-machine/"},"podman-machine(1)"))),(0,o.kt)("h2",{id:"history"},"HISTORY"),(0,o.kt)("p",null,"March 2021, Originally compiled by Ashley Cui ",(0,o.kt)("a",{parentName:"p",href:"mailto:acui@redhat.com"},"acui@redhat.com")))}d.isMDXComponent=!0}}]);