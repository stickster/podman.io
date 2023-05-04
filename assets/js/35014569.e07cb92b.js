"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[2913],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),p=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=p(a),k=r,u=s["".concat(m,".").concat(k)]||s[k]||g[k]||l;return a?n.createElement(u,i(i({ref:t},d),{},{components:a})):n.createElement(u,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},9664:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={},i=void 0,o={unversionedId:"commands/podman-images",id:"commands/podman-images",title:"podman-images",description:"% podman-images 1",source:"@site/docs/commands/podman-images.md",sourceDirName:"commands",slug:"/commands/podman-images",permalink:"/website-new/docs/commands/podman-images",draft:!1,editUrl:"https://github.com/containers/website-new/docs/commands/podman-images.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-image-unmount",permalink:"/website-new/docs/commands/podman-image/podman-image-unmount"},next:{title:"podman-import",permalink:"/website-new/docs/commands/podman-import"}},m={},p=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"OPTIONS",id:"options",level:2},{value:"<strong>--all</strong>, <strong>-a</strong>",id:"--all--a",level:4},{value:"<strong>--digests</strong>",id:"--digests",level:4},{value:"<strong>--filter</strong>, <strong>-f</strong>=<em>filter</em>",id:"--filter--ffilter",level:4},{value:"<strong>--format</strong>=<em>format</em>",id:"--formatformat",level:4},{value:"<strong>--history</strong>",id:"--history",level:4},{value:"<strong>--no-trunc</strong>",id:"--no-trunc",level:4},{value:"<strong>--quiet</strong>, <strong>-q</strong>",id:"--quiet--q",level:4},{value:"<strong>--sort</strong>=<em>sort</em>",id:"--sortsort",level:4},{value:"EXAMPLE",id:"example",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"HISTORY",id:"history",level:2}],d={toc:p},s="wrapper";function g(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"% podman-images 1"),(0,r.kt)("h2",{id:"name"},"NAME"),(0,r.kt)("p",null,"podman","-","images - List images in local storage"),(0,r.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman images")," ","[",(0,r.kt)("em",{parentName:"p"},"options"),"][image]"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman image list")," ","[",(0,r.kt)("em",{parentName:"p"},"options"),"][image]"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman image ls")," ","[",(0,r.kt)("em",{parentName:"p"},"options"),"][image]"),(0,r.kt)("h2",{id:"description"},"DESCRIPTION"),(0,r.kt)("p",null,"Displays locally stored images, their names, and their IDs."),(0,r.kt)("h2",{id:"options"},"OPTIONS"),(0,r.kt)("h4",{id:"--all--a"},(0,r.kt)("strong",{parentName:"h4"},"--all"),", ",(0,r.kt)("strong",{parentName:"h4"},"-a")),(0,r.kt)("p",null,"Show all images (by default filter out the intermediate image layers). The default is false."),(0,r.kt)("h4",{id:"--digests"},(0,r.kt)("strong",{parentName:"h4"},"--digests")),(0,r.kt)("p",null,"Show image digests"),(0,r.kt)("h4",{id:"--filter--ffilter"},(0,r.kt)("strong",{parentName:"h4"},"--filter"),", ",(0,r.kt)("strong",{parentName:"h4"},"-f"),"=",(0,r.kt)("em",{parentName:"h4"},"filter")),(0,r.kt)("p",null,"Provide filter values."),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"filters")," argument format is of ",(0,r.kt)("inlineCode",{parentName:"p"},"key=value")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"key!=value"),". If there is more than one ",(0,r.kt)("em",{parentName:"p"},"filter"),", then pass multiple OPTIONS: ",(0,r.kt)("strong",{parentName:"p"},"--filter")," ",(0,r.kt)("em",{parentName:"p"},"foo=bar")," ",(0,r.kt)("strong",{parentName:"p"},"--filter")," ",(0,r.kt)("em",{parentName:"p"},"bif=baz"),"."),(0,r.kt)("p",null,"Supported filters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Filter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},"Filter by image ID.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"before")),(0,r.kt)("td",{parentName:"tr",align:null},"Filter by images created before the given IMAGE (name or tag).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"containers")),(0,r.kt)("td",{parentName:"tr",align:null},"Filter by images with a running container.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"dangling")),(0,r.kt)("td",{parentName:"tr",align:null},"Filter by dangling (unused) images.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"digest")),(0,r.kt)("td",{parentName:"tr",align:null},"Filter by digest.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"intermediate")),(0,r.kt)("td",{parentName:"tr",align:null},"Filter by images that are dangling and have no children")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"label")),(0,r.kt)("td",{parentName:"tr",align:null},"Filter by images with (or without, in the case of label!=","[...]"," is used) the specified labels.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"manifest")),(0,r.kt)("td",{parentName:"tr",align:null},"Filter by images that are manifest lists.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"readonly")),(0,r.kt)("td",{parentName:"tr",align:null},"Filter by read-only or read/write images.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"reference")),(0,r.kt)("td",{parentName:"tr",align:null},"Filter by image name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"after"),"/",(0,r.kt)("em",{parentName:"td"},"since")),(0,r.kt)("td",{parentName:"tr",align:null},"Filter by images created after the given IMAGE (name or tag).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"until")),(0,r.kt)("td",{parentName:"tr",align:null},"Filter by images created until the given duration or time.")))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," ",(0,r.kt)("em",{parentName:"p"},"filter")," accepts the image ID string."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"before")," ",(0,r.kt)("em",{parentName:"p"},"filter")," accepts formats: ",(0,r.kt)("inlineCode",{parentName:"p"},"<image-name>[:<tag>]"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<image id>")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"<image@digest>"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"containers")," ",(0,r.kt)("em",{parentName:"p"},"filter")," shows images that have a running container based on that image."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"dangling")," ",(0,r.kt)("em",{parentName:"p"},"filter")," shows images that are taking up disk space and serve no purpose. Dangling image is a file system layer that was used in a previous build of an image and is no longer referenced by any image. They are denoted with the ",(0,r.kt)("inlineCode",{parentName:"p"},"<none>")," tag, consume disk space and serve no active purpose."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"digest")," ",(0,r.kt)("em",{parentName:"p"},"filter")," accepts the image digest string."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"intermediate")," ",(0,r.kt)("em",{parentName:"p"},"filter")," shows images that are dangling and have no children."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"label")," ",(0,r.kt)("em",{parentName:"p"},"filter")," accepts two formats. One is the ",(0,r.kt)("inlineCode",{parentName:"p"},"label"),"=",(0,r.kt)("em",{parentName:"p"},"key")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"label"),"=",(0,r.kt)("em",{parentName:"p"},"key"),"=",(0,r.kt)("em",{parentName:"p"},"value"),", which shows images with the specified labels. The other format is the ",(0,r.kt)("inlineCode",{parentName:"p"},"label!"),"=",(0,r.kt)("em",{parentName:"p"},"key")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"label!"),"=",(0,r.kt)("em",{parentName:"p"},"key"),"=",(0,r.kt)("em",{parentName:"p"},"value"),", which shows images without the specified labels."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"manifest")," ",(0,r.kt)("em",{parentName:"p"},"filter")," shows images that are manifest lists."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"readonly")," ",(0,r.kt)("em",{parentName:"p"},"filter")," shows, as a default, both read-only and read/write images. Read-only images can be configured by modifying the ",(0,r.kt)("inlineCode",{parentName:"p"},"additionalimagestores")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/containers/storage.conf")," file."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"reference")," ",(0,r.kt)("em",{parentName:"p"},"filter")," accepts the pattern of an image reference ",(0,r.kt)("inlineCode",{parentName:"p"},"<image-name>[:<tag>]"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"after")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"since")," ",(0,r.kt)("em",{parentName:"p"},"filter")," accepts formats: ",(0,r.kt)("inlineCode",{parentName:"p"},"<image-name>[:<tag>]"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<image id>")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"<image@digest>"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"until")," ",(0,r.kt)("em",{parentName:"p"},"filter")," accepts formats: golang duration, RFC3339 time, or a Unix timestamp and shows all images that are created until that time."),(0,r.kt)("h4",{id:"--formatformat"},(0,r.kt)("strong",{parentName:"h4"},"--format"),"=",(0,r.kt)("em",{parentName:"h4"},"format")),(0,r.kt)("p",null,"Change the default output format. This can be of a supported type like 'json'\nor a Go template.\nValid placeholders for the Go template are listed below:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Placeholder")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Containers"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of containers using this image")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Created"),(0,r.kt)("td",{parentName:"tr",align:null},"Elapsed time since the image was created")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".CreatedAt"),(0,r.kt)("td",{parentName:"tr",align:null},"Time when the image was created, YYYY-MM-DD HH:MM:SS +nnnn")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".CreatedSince"),(0,r.kt)("td",{parentName:"tr",align:null},"Same as .Created")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".CreatedTime"),(0,r.kt)("td",{parentName:"tr",align:null},"Same as .CreatedAt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Dangling"),(0,r.kt)("td",{parentName:"tr",align:null},"Same as .IsDangling")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Digest"),(0,r.kt)("td",{parentName:"tr",align:null},"Image digest")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".History"),(0,r.kt)("td",{parentName:"tr",align:null},"History of the image layer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".ID"),(0,r.kt)("td",{parentName:"tr",align:null},"Image ID (truncated)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Id"),(0,r.kt)("td",{parentName:"tr",align:null},"Image ID (full SHA)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".IsDangling"),(0,r.kt)("td",{parentName:"tr",align:null},"Is image dangling? (true/false)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".IsReadOnly"),(0,r.kt)("td",{parentName:"tr",align:null},"Is unage read-only? (true/false)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Labels"),(0,r.kt)("td",{parentName:"tr",align:null},"map[] of labels")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Names"),(0,r.kt)("td",{parentName:"tr",align:null},"Image FQIN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".ParentId"),(0,r.kt)("td",{parentName:"tr",align:null},"Full SHA of parent image ID, or null (string)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".ReadOnly"),(0,r.kt)("td",{parentName:"tr",align:null},"Same as .IsReadOnly")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".RepoDigests"),(0,r.kt)("td",{parentName:"tr",align:null},"map[] of zero or more repo/name@sha256:SHA strings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Repository"),(0,r.kt)("td",{parentName:"tr",align:null},"Image repository")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".RepoTags"),(0,r.kt)("td",{parentName:"tr",align:null},"map[] of zero or more FQIN strings for this image")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".SharedSize"),(0,r.kt)("td",{parentName:"tr",align:null},"Always seems to be 0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Size"),(0,r.kt)("td",{parentName:"tr",align:null},"Size of layer on disk (human-friendly string)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".Tag"),(0,r.kt)("td",{parentName:"tr",align:null},"Image tag")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".VirtualSize"),(0,r.kt)("td",{parentName:"tr",align:null},"Size of layer on disk (bytes)")))),(0,r.kt)("h4",{id:"--history"},(0,r.kt)("strong",{parentName:"h4"},"--history")),(0,r.kt)("p",null,"Display the history of image names. If an image gets re-tagged or untagged, then the image name history gets prepended (latest image first). This is especially useful when undoing a tag operation or an image does not contain any name because it has been untagged."),(0,r.kt)("h4",{id:"--no-trunc"},(0,r.kt)("strong",{parentName:"h4"},"--no-trunc")),(0,r.kt)("p",null,"Do not truncate the output (default ",(0,r.kt)("em",{parentName:"p"},"false"),")."),(0,r.kt)("p",null,"@@option noheading"),(0,r.kt)("h4",{id:"--quiet--q"},(0,r.kt)("strong",{parentName:"h4"},"--quiet"),", ",(0,r.kt)("strong",{parentName:"h4"},"-q")),(0,r.kt)("p",null,"Lists only the image IDs."),(0,r.kt)("h4",{id:"--sortsort"},(0,r.kt)("strong",{parentName:"h4"},"--sort"),"=",(0,r.kt)("em",{parentName:"h4"},"sort")),(0,r.kt)("p",null,"Sort by ",(0,r.kt)("em",{parentName:"p"},"created"),", ",(0,r.kt)("em",{parentName:"p"},"id"),", ",(0,r.kt)("em",{parentName:"p"},"repository"),", ",(0,r.kt)("em",{parentName:"p"},"size")," or ",(0,r.kt)("em",{parentName:"p"},"tag")," (default: ",(0,r.kt)("strong",{parentName:"p"},"created"),")"),(0,r.kt)("h2",{id:"example"},"EXAMPLE"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ podman images\nREPOSITORY                         TAG         IMAGE ID      CREATED       SIZE\nquay.io/podman/stable              latest      e0b7dabc3352  22 hours ago  331 MB\ndocker.io/library/alpine           latest      9c6f07244728  5 days ago    5.83 MB\nregistry.fedoraproject.org/fedora  latest      2ecb6df95994  3 weeks ago   169 MB\nquay.io/libpod/testimage           20220615    f26aa69bb3f3  2 months ago  8.4 MB\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ podman images stable\nREPOSITORY             TAG         IMAGE ID      CREATED       SIZE\nquay.io/podman/stable  latest      e0b7dabc3352  22 hours ago  331 MB\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# podman image ls --quiet\ne3d42bcaf643\nebb91b73692b\n4526339ae51c\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# podman images --noheading\ndocker.io/kubernetes/pause                   latest   e3d42bcaf643   3 years ago   251 kB\n<none>                                       <none>   ebb91b73692b   4 weeks ago   27.2 MB\ndocker.io/library/ubuntu                     latest   4526339ae51c   6 weeks ago   126 MB\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# podman image list --no-trunc\nREPOSITORY                                   TAG      IMAGE ID                                                                  CREATED       SIZE\ndocker.io/kubernetes/pause                   latest   sha256:e3d42bcaf643097dd1bb0385658ae8cbe100a80f773555c44690d22c25d16b27   3 years ago   251 kB\n<none>                                       <none>   sha256:ebb91b73692bd27890685846412ae338d13552165eacf7fcd5f139bfa9c2d6d9   4 weeks ago   27.2 MB\ndocker.io/library/ubuntu                     latest   sha256:4526339ae51c3cdc97956a7a961c193c39dfc6bd9733b0d762a36c6881b5583a   6 weeks ago   126 MB\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# podman images --format "table {{.ID}} {{.Repository}} {{.Tag}}"\nIMAGE ID       REPOSITORY                                   TAG\ne3d42bcaf643   docker.io/kubernetes/pause                   latest\nebb91b73692b   <none>                                       <none>\n4526339ae51c   docker.io/library/ubuntu                     latest\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# podman images --filter dangling=true\nREPOSITORY   TAG      IMAGE ID       CREATED       SIZE\n<none>       <none>   ebb91b73692b   4 weeks ago   27.2 MB\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# podman images --format json\n[\n    {\n    "id": "e3d42bcaf643097dd1bb0385658ae8cbe100a80f773555c44690d22c25d16b27",\n    "names": [\n        "docker.io/kubernetes/pause:latest"\n    ],\n    "digest": "sha256:0aecf73ff86844324847883f2e916d3f6984c5fae3c2f23e91d66f549fe7d423",\n    "created": "2014-07-19T07:02:32.267701596Z",\n    "size": 250665\n    },\n    {\n    "id": "ebb91b73692bd27890685846412ae338d13552165eacf7fcd5f139bfa9c2d6d9",\n    "names": [\n        "\\u003cnone\\u003e"\n    ],\n    "digest": "sha256:ba7e4091d27e8114a205003ca6a768905c3395d961624a2c78873d9526461032",\n    "created": "2017-10-26T03:07:22.796184288Z",\n    "size": 27170520\n    },\n    {\n    "id": "4526339ae51c3cdc97956a7a961c193c39dfc6bd9733b0d762a36c6881b5583a",\n    "names": [\n        "docker.io/library/ubuntu:latest"\n    ],\n    "digest": "sha256:193f7734ddd68e0fb24ba9af8c2b673aecb0227b026871f8e932dab45add7753",\n    "created": "2017-10-10T20:59:050196344Z",\n    "size": 126085200\n    }\n]\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# podman images --sort repository\nREPOSITORY                                   TAG      IMAGE ID       CREATED       SIZE\n<none>                                      <none>   2460217d76fc   About a minute ago   4.41 MB\ndocker.io/library/alpine                    latest   3fd9065eaf02   5 months ago         4.41 MB\nlocalhost/myapp                             latest   b2e0ad03474a   About a minute ago   4.41 MB\nregistry.access.redhat.com/rhel7            latest   7a840db7f020   2 weeks ago          211 MB\nregistry.fedoraproject.org/fedora           27       801894bc0e43   6 weeks ago          246 MB\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# podman images\nREPOSITORY                 TAG      IMAGE ID       CREATED         SIZE\nlocalhost/test             latest   18f0c080cd72   4 seconds ago   4.42 MB\ndocker.io/library/alpine   latest   3fd9065eaf02   5 months ago    4.41 MB\n# podman images -a\nREPOSITORY                 TAG      IMAGE ID       CREATED         SIZE\nlocalhost/test             latest   18f0c080cd72   6 seconds ago   4.42 MB\n<none>                     <none>   270e70dc54c0   7 seconds ago   4.42 MB\n<none>                     <none>   4ed6fbe43414   8 seconds ago   4.41 MB\n<none>                     <none>   6b0df8e71508   8 seconds ago   4.41 MB\ndocker.io/library/alpine   latest   3fd9065eaf02   5 months ago    4.41 MB\n")),(0,r.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/website-new/docs/podman"},"podman(1)")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/containers/storage/blob/main/docs/containers-storage.conf.5.md"},"containers-storage.conf(5)"))),(0,r.kt)("h2",{id:"history"},"HISTORY"),(0,r.kt)("p",null,"March 2017, Originally compiled by Dan Walsh ",(0,r.kt)("inlineCode",{parentName:"p"},"<dwalsh@redhat.com>")))}g.isMDXComponent=!0}}]);