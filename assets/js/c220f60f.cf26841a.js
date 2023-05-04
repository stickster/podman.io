"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[8952],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,f=d["".concat(s,".").concat(u)]||d[u]||c[u]||o;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2655:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={},i="Podman performance guide",l={unversionedId:"tutorials/performance",id:"tutorials/performance",title:"Podman performance guide",description:"The performance of Podman may be influenced by a number of factors, such as,",source:"@site/docs/tutorials/performance.md",sourceDirName:"tutorials",slug:"/tutorials/performance",permalink:"/website-new/docs/tutorials/performance",draft:!1,editUrl:"https://github.com/containers/website-new/docs/tutorials/performance.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Podman Remote clients for macOS and Windows",permalink:"/website-new/docs/tutorials/mac_win_client"},next:{title:"podman-derivative-api",permalink:"/website-new/docs/tutorials/podman-derivative-api"}},s={},p=[{value:"Using a separate user account for benchmarking",id:"using-a-separate-user-account-for-benchmarking",level:2},{value:"Example: Specify the storage driver <em>vfs</em> and run <code>/bin/true</code> in an Alpine container",id:"example-specify-the-storage-driver-vfs-and-run-bintrue-in-an-alpine-container",level:3},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Use a fast OCI runtime",id:"use-a-fast-oci-runtime",level:3},{value:"Choosing a storage driver",id:"choosing-a-storage-driver",level:3},{value:"Specifying the storage driver with command-line options",id:"specifying-the-storage-driver-with-command-line-options",level:4},{value:"Configuring the default storage driver",id:"configuring-the-default-storage-driver",level:4},{value:"Network performance for rootless Podman",id:"network-performance-for-rootless-podman",level:3},{value:"Lazy pulling of container images",id:"lazy-pulling-of-container-images",level:3},{value:"Choosing a host file system",id:"choosing-a-host-file-system",level:3},{value:"Option --log-driver",id:"option---log-driver",level:3},{value:"Reuse the package repository cache when building container images",id:"reuse-the-package-repository-cache-when-building-container-images",level:3},{value:"Example : Speed up <em>podman build</em> by reusing the DNF metadata cache",id:"example--speed-up-podman-build-by-reusing-the-dnf-metadata-cache",level:4}],m={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"podman-performance-guide"},"Podman performance guide"),(0,r.kt)("p",null,"The performance of Podman may be influenced by a number of factors, such as,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the specified Podman command-line options and configuration"),(0,r.kt)("li",{parentName:"ul"},"the OCI runtime"),(0,r.kt)("li",{parentName:"ul"},"the host file system"),(0,r.kt)("li",{parentName:"ul"},"the container image")),(0,r.kt)("p",null,"Changing any of these may or may not have any noticeable effect on the performance of Podman on your system."),(0,r.kt)("h2",{id:"using-a-separate-user-account-for-benchmarking"},"Using a separate user account for benchmarking"),(0,r.kt)("p",null,"Some performance tips, such as using a different storage driver would require the user to run ",(0,r.kt)("inlineCode",{parentName:"p"},"podman system reset"),",\nwhich erases all containers and container images for the user.\nInstead of benchmarking different alternatives in your own home directory, you could create a new user\nthat afterwards can be removed."),(0,r.kt)("h3",{id:"example-specify-the-storage-driver-vfs-and-run-bintrue-in-an-alpine-container"},"Example: Specify the storage driver ",(0,r.kt)("em",{parentName:"h3"},"vfs")," and run ",(0,r.kt)("inlineCode",{parentName:"h3"},"/bin/true")," in an Alpine container"),(0,r.kt)("p",null,"Interactively"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo useradd testuser\nsudo machinectl testuser@\npodman pull docker.io/library/alpine\n/usr/bin/time -v podman --storage-driver=vfs run --rm docker.io/library/alpine /bin/true\nexit\n")),(0,r.kt)("p",null,"Noninteractively"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo useradd testuser\nsystemd-run --machine=testuser@ --quiet --user --collect --pipe --wait \\\n   podman --storage-driver=vfs pull docker.io/library/alpine\nsystemd-run --machine=testuser@ --quiet --user --collect --pipe --wait \\\n   /usr/bin/time -v podman --storage-driver=vfs run --rm docker.io/library/alpine /bin/true\n")),(0,r.kt)("p",null,"The command ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/bin/time -v")," measures and displays benchmarking information."),(0,r.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,r.kt)("h3",{id:"use-a-fast-oci-runtime"},"Use a fast OCI runtime"),(0,r.kt)("p",null,"Podman uses an OCI runtime when running containers.\nThe fastest OCI runtime is probably ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/containers/crun"},(0,r.kt)("strong",{parentName:"a"},"crun")),"."),(0,r.kt)("p",null,"Check that you are using crun"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ podman info --format={{.Host.OCIRuntime.Name}}\ncrun\n")),(0,r.kt)("p",null,"To benchmark an OCI runtime, create a test user account and\nspecify the OCI runtime path with ",(0,r.kt)("a",{parentName:"p",href:"https://docs.podman.io/en/latest/markdown/podman.1.html#runtime-value"},(0,r.kt)("strong",{parentName:"a"},"--runtime")),"."),(0,r.kt)("h3",{id:"choosing-a-storage-driver"},"Choosing a storage driver"),(0,r.kt)("p",null,"The following storage drivers are listed from fastest to slowest:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"native overlayfs"),(0,r.kt)("li",{parentName:"ol"},"fuse-overlayfs"),(0,r.kt)("li",{parentName:"ol"},"vfs")),(0,r.kt)("p",null,"Using native overlayfs as an unprivileged user is only available for Podman version >= 3.1 on a Linux kernel version >= 5.12."),(0,r.kt)("p",null,"To show the current storage driver"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ podman info -f {{.Store.GraphDriverName}}\noverlay\n$ podman info -f '{{index .Store.GraphStatus \"Native Overlay Diff\"}}'\ntrue\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Storage driver"),(0,r.kt)("th",{parentName:"tr",align:null},"Result of ",(0,r.kt)("inlineCode",{parentName:"th"},"podman info -f {{.Store.GraphDriverName}}")),(0,r.kt)("th",{parentName:"tr",align:null},"Result of ",(0,r.kt)("inlineCode",{parentName:"th"},'podman info -f \'{{index .Store.GraphStatus "Native Overlay Diff"}}')))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"native overlayfs"),(0,r.kt)("td",{parentName:"tr",align:null},"overlay"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fuse-overlayfs"),(0,r.kt)("td",{parentName:"tr",align:null},"overlay"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VFS"),(0,r.kt)("td",{parentName:"tr",align:null},"vfs"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("p",null,"Before changing the storage driver, running ",(0,r.kt)("inlineCode",{parentName:"p"},"podman system reset"),' is required.\nThe command erases all containers and container images for the user.\nSee the example above "',(0,r.kt)("em",{parentName:"p"},"Using a separate user account for benchmarking"),'" for how to benchmark a storage driver in a separate test account.'),(0,r.kt)("h4",{id:"specifying-the-storage-driver-with-command-line-options"},"Specifying the storage driver with command-line options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Storage driver"),(0,r.kt)("th",{parentName:"tr",align:null},"Podman command"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"native overlayfs"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"podman --storage-driver=overlay run ..."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fuse-overlayfs"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"podman --storage-driver=overlay --storage-opt overlay.mount_program=/usr/bin/fuse-overlayfs run ..."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VFS"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"podman --storage-driver=vfs run ..."))))),(0,r.kt)("h4",{id:"configuring-the-default-storage-driver"},"Configuring the default storage driver"),(0,r.kt)("p",null,"The default storage driver can be configured in\n",(0,r.kt)("em",{parentName:"p"},"/etc/containers/storage.conf")," and overridden by a user in\n",(0,r.kt)("em",{parentName:"p"},"~/.config/containers/storage.conf")),(0,r.kt)("p",null,"To configure native overlayfs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'[storage]\ndriver = "overlay"\n')),(0,r.kt)("p",null,"To configure fuse-overlayfs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'[storage]\ndriver = "overlay"\n[storage.options.overlay]\nmount_program = "/usr/bin/fuse-overlayfs"\n')),(0,r.kt)("p",null,"To configure VFS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'[storage]\ndriver = "vfs"\n')),(0,r.kt)("p",null,"See storage.conf(5) for all available configuration settings."),(0,r.kt)("h3",{id:"network-performance-for-rootless-podman"},"Network performance for rootless Podman"),(0,r.kt)("p",null,"When using rootless Podman, network traffic is normally passed through\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/containers/podman/blob/main/docs/tutorials/basic_networking.md#slirp4netns"},"slirp4netns"),".\nThis comes with a performance penalty."),(0,r.kt)("p",null,"You can avoid using slirp4netns in the following ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use socket activation for listening network sockets. Communication over the activated socket does not pass through\nslirp4netns, so it has the same performance characteristics as the normal network on the host.\nSocket-activated services can be started and stopped in different ways:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Let systemd start the service when the first client connects. Let the service terminate by itself after some time of inactivity.\nUsing a service on demand, can free up compute resources."),(0,r.kt)("li",{parentName:"ul"},"Start the service explicitly (",(0,r.kt)("inlineCode",{parentName:"li"},"systemctl --user enable foobar.service"),"). If the service is already\nrunning when the first client connects, there will be no delay due to container startup.\nThe ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/containers/podman/blob/main/docs/tutorials/socket_activation.md"},"socket activation tutorial"),"\nprovides more information about socket activation support in Podman."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use the network driver ",(0,r.kt)("a",{parentName:"p",href:"https://passt.top/passt/about/#pasta"},(0,r.kt)("em",{parentName:"a"},"pasta")),". Pasta is under development and currently needs a patched Podman to run.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Set up the network manually as root. Create a bridge and virtual ethernet pair (VETH). See the ",(0,r.kt)("a",{parentName:"p",href:"https://lists.podman.io/archives/list/podman@lists.podman.io/thread/W6MCYO6RY5YFRTSUDAOEZA7SC2EFXRZE/"},"example")," posted on the Podman mailing list. See also the section ",(0,r.kt)("em",{parentName:"p"},"DIY networking")," in ",(0,r.kt)("a",{parentName:"p",href:"https://podman.io/community/meeting/notes/2021-10-05/Podman-Rootless-Networking.pdf"},"Podman-Rootless-Networking.pdf"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"--network=host"),". No network namespace is created. The container will use the host\u2019s network.\nNote: By using ",(0,r.kt)("inlineCode",{parentName:"p"},"--network=host"),", the container is given full access to local system services such as D-bus and is therefore considered insecure."))),(0,r.kt)("h3",{id:"lazy-pulling-of-container-images"},"Lazy pulling of container images"),(0,r.kt)("p",null,"Podman supports lazy pulling for the following container image formats:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"zstd:chunked"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"eStargz")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"zstd:chunked")," has better performance than ",(0,r.kt)("strong",{parentName:"p"},"eStargz"),"."),(0,r.kt)("p",null,"See the article ",(0,r.kt)("a",{parentName:"p",href:"https://www.redhat.com/sysadmin/faster-container-image-pulls"},(0,r.kt)("em",{parentName:"a"},"Pull container images faster with partial pulls"))," by Giuseppe Scrivano and Dan Walsh."),(0,r.kt)("h3",{id:"choosing-a-host-file-system"},"Choosing a host file system"),(0,r.kt)("p",null,"Lazy pulling of container images can run more efficiently when the file system has reflink support. The file systems XFS and BTRFS have reflink support."),(0,r.kt)("h3",{id:"option---log-driver"},"Option --log-driver"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"podman run")," option ",(0,r.kt)("a",{parentName:"p",href:"https://docs.podman.io/en/latest/markdown/podman-run.1.html#log-driver-driver"},(0,r.kt)("strong",{parentName:"a"},"--log-driver"))," specifies the logging driver for the container."),(0,r.kt)("p",null,"If logging is not needed, consider using ",(0,r.kt)("inlineCode",{parentName:"p"},"--log-driver=none")," to disable logging."),(0,r.kt)("h3",{id:"reuse-the-package-repository-cache-when-building-container-images"},"Reuse the package repository cache when building container images"),(0,r.kt)("p",null,"The first step of a container build is often to download metadata from\nthe package repositories and post-process that data."),(0,r.kt)("p",null,"To speed up container builds, you could prepare a directory on the host\nthat contains the package metadata and then make the directory available\nto the container build by using an ",(0,r.kt)("em",{parentName:"p"},"overlay mount"),"."),(0,r.kt)("h4",{id:"example--speed-up-podman-build-by-reusing-the-dnf-metadata-cache"},"Example : Speed up ",(0,r.kt)("em",{parentName:"h4"},"podman build")," by reusing the DNF metadata cache"),(0,r.kt)("p",null,"In this example the containers are based on Fedora 36."),(0,r.kt)("p",null,"First create an empty directory on the host, for example ",(0,r.kt)("em",{parentName:"p"},"$HOME/dnf_cache_f36"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ mkdir $HOME/dnf_cache_f36\n")),(0,r.kt)("p",null,"Fill the directory with the most recent ",(0,r.kt)("strong",{parentName:"p"},"dnf")," metadata cache."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ podman run --rm -v $HOME/dnf_cache_f36:/var/cache/dnf:Z registry.fedoraproject.org/fedora:36 dnf makecache\n")),(0,r.kt)("p",null,"Create a new directory, for example, ",(0,r.kt)("em",{parentName:"p"},"$HOME/ctr")," and a file ",(0,r.kt)("em",{parentName:"p"},"$HOME/ctr/Containerfile")," with these contents"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"FROM registry.fedoraproject.org/fedora:36\nRUN dnf -y update && dnf -y install cowsay && dnf clean all\n")),(0,r.kt)("p",null,"To build the Containerfile using the prepared metadata cache, provide the directory ",(0,r.kt)("em",{parentName:"p"},"$HOME/dnf_cache_f36")," as an ",(0,r.kt)("em",{parentName:"p"},"overlay mount")," (volume option ",(0,r.kt)("inlineCode",{parentName:"p"},":O"),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ podman build -v $HOME/dnf_cache_f36:/var/cache/dnf:O -t cowsay $HOME/ctr\n")),(0,r.kt)("p",null,"The article ",(0,r.kt)("a",{parentName:"p",href:"https://www.redhat.com/sysadmin/speeding-container-buildah"},(0,r.kt)("em",{parentName:"a"},"Speeding up container image builds with Buildah"))," by Dan Walsh provides more details."))}c.isMDXComponent=!0}}]);