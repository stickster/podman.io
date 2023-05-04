"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[9227],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),u=o,k=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5038:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={},i=void 0,p={unversionedId:"commands/podman-create",id:"commands/podman-create",title:"podman-create",description:"% podman-create 1",source:"@site/docs/commands/podman-create.md",sourceDirName:"commands",slug:"/commands/podman-create",permalink:"/website-new/docs/commands/podman-create",draft:!1,editUrl:"https://github.com/containers/website-new/docs/commands/podman-create.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-cp",permalink:"/website-new/docs/commands/podman-cp"},next:{title:"podman-diff",permalink:"/website-new/docs/commands/podman-diff"}},l={},s=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"IMAGE",id:"image",level:2},{value:"OPTIONS",id:"options",level:2},{value:"<strong>--help</strong>",id:"--help",level:4},{value:"<strong>--init-ctr</strong>=<em>type</em>",id:"--init-ctrtype",level:4},{value:"<strong>--quiet</strong>, <strong>-q</strong>",id:"--quiet--q",level:4},{value:"<strong>--rm</strong>",id:"--rm",level:4},{value:"EXAMPLES",id:"examples",level:2},{value:"Create a container using a local image",id:"create-a-container-using-a-local-image",level:3},{value:"Create a container using a local image and annotate it",id:"create-a-container-using-a-local-image-and-annotate-it",level:3},{value:"Create a container using a local image, allocating a pseudo-TTY, keeping stdin open and name it myctr",id:"create-a-container-using-a-local-image-allocating-a-pseudo-tty-keeping-stdin-open-and-name-it-myctr",level:3},{value:"Set UID/GID mapping in a new user namespace",id:"set-uidgid-mapping-in-a-new-user-namespace",level:3},{value:"Setting automatic user namespace separated containers",id:"setting-automatic-user-namespace-separated-containers",level:3},{value:"Configure timezone in a container",id:"configure-timezone-in-a-container",level:3},{value:"Adding dependency containers",id:"adding-dependency-containers",level:3},{value:"Configure keep supplemental groups for access to volume",id:"configure-keep-supplemental-groups-for-access-to-volume",level:3},{value:"Configure execution domain for containers using personality flag",id:"configure-execution-domain-for-containers-using-personality-flag",level:3},{value:"Create a container with external rootfs mounted as an overlay",id:"create-a-container-with-external-rootfs-mounted-as-an-overlay",level:3},{value:"Create a container connected to two networks (called net1 and net2) with a static ip",id:"create-a-container-connected-to-two-networks-called-net1-and-net2-with-a-static-ip",level:3},{value:"Rootless Containers",id:"rootless-containers",level:3},{value:"ENVIRONMENT",id:"environment",level:2},{value:"CONMON",id:"conmon",level:2},{value:"FILES",id:"files",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"HISTORY",id:"history",level:2},{value:"FOOTNOTES",id:"footnotes",level:2}],c={toc:s},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"% podman-create 1"),(0,o.kt)("h2",{id:"name"},"NAME"),(0,o.kt)("p",null,"podman","-","create - Create a new container"),(0,o.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"podman create")," ","[",(0,o.kt)("em",{parentName:"p"},"options"),"]"," ",(0,o.kt)("em",{parentName:"p"},"image")," [",(0,o.kt)("em",{parentName:"p"},"command")," ","[",(0,o.kt)("em",{parentName:"p"},"arg")," ...]","]"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"podman container create")," ","[",(0,o.kt)("em",{parentName:"p"},"options"),"]"," ",(0,o.kt)("em",{parentName:"p"},"image")," [",(0,o.kt)("em",{parentName:"p"},"command")," ","[",(0,o.kt)("em",{parentName:"p"},"arg")," ...]","]"),(0,o.kt)("h2",{id:"description"},"DESCRIPTION"),(0,o.kt)("p",null,"Creates a writable container layer over the specified image and prepares it for\nrunning the specified command. The container ID is then printed to STDOUT. This\nis similar to ",(0,o.kt)("strong",{parentName:"p"},"podman run -d")," except the container is never started. Use the\n",(0,o.kt)("strong",{parentName:"p"},"podman start")," ",(0,o.kt)("em",{parentName:"p"},"container")," command to start the container at any point."),(0,o.kt)("p",null,"The initial status of the container created with ",(0,o.kt)("strong",{parentName:"p"},"podman create")," is 'created'."),(0,o.kt)("p",null,"Default settings for flags are defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"containers.conf"),". Most settings for\nremote connections use the server's containers.conf, except when documented in\nman pages."),(0,o.kt)("h2",{id:"image"},"IMAGE"),(0,o.kt)("p",null,"The image is specified using transport:path format. If no transport is specified, the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker")," (container registry)\ntransport will be used by default. For remote Podman, including Mac and Windows (excluding WSL2) machines, ",(0,o.kt)("inlineCode",{parentName:"p"},"docker")," is the only allowed transport."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"dir:"),(0,o.kt)("em",{parentName:"p"},"path"),"\nAn existing local directory ",(0,o.kt)("em",{parentName:"p"},"path")," storing the manifest, layer tarballs and signatures as individual files. This\nis a non-standardized format, primarily useful for debugging or noninvasive container inspection."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ podman save --format docker-dir fedora -o /tmp/fedora\n$ podman create dir:/tmp/fedora echo hello\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"docker://"),(0,o.kt)("em",{parentName:"p"},"docker-reference"),' (Default)\nAn image reference stored in a remote container image registry. Example: "quay.io/podman/stable:latest".\nThe reference can include a path to a specific registry; if it does not, the\nregistries listed in registries.conf will be queried to find a matching image.\nBy default, credentials from ',(0,o.kt)("inlineCode",{parentName:"p"},"podman login")," (stored at\n$XDG_RUNTIME_DIR/containers/auth.json by default) will be used to authenticate;\notherwise it falls back to using credentials in $HOME/.docker/config.json."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ podman create registry.fedoraproject.org/fedora:latest echo hello\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"docker-archive:"),(0,o.kt)("em",{parentName:"p"},"path"),"[",(0,o.kt)("strong",{parentName:"p"},":"),(0,o.kt)("em",{parentName:"p"},"docker-reference"),"]","\nAn image stored in the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker save")," formatted file. ",(0,o.kt)("em",{parentName:"p"},"docker-reference")," is only used when creating such a\nfile, and it must not contain a digest."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ podman save --format docker-archive fedora -o /tmp/fedora\n$ podman create docker-archive:/tmp/fedora echo hello\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"docker-daemon:"),(0,o.kt)("em",{parentName:"p"},"docker-reference"),"\nAn image in ",(0,o.kt)("em",{parentName:"p"},"docker-reference")," format stored in the docker daemon internal storage. The ",(0,o.kt)("em",{parentName:"p"},"docker-reference")," can also be an image ID (docker-daemon:algo:digest)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ sudo docker pull fedora\n$ sudo podman create docker-daemon:docker.io/library/fedora echo hello\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"oci-archive:"),(0,o.kt)("em",{parentName:"p"},"path"),(0,o.kt)("strong",{parentName:"p"},":"),(0,o.kt)("em",{parentName:"p"},"tag"),'\nAn image in a directory compliant with the "Open Container Image Layout Specification" at the specified ',(0,o.kt)("em",{parentName:"p"},"path"),"\nand specified with a ",(0,o.kt)("em",{parentName:"p"},"tag"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ podman save --format oci-archive fedora -o /tmp/fedora\n$ podman create oci-archive:/tmp/fedora echo hello\n")),(0,o.kt)("h2",{id:"options"},"OPTIONS"),(0,o.kt)("p",null,"@@option add-host"),(0,o.kt)("p",null,"@@option annotation.container"),(0,o.kt)("p",null,"@@option arch"),(0,o.kt)("p",null,"@@option attach"),(0,o.kt)("p",null,"@@option authfile"),(0,o.kt)("p",null,"@@option blkio-weight"),(0,o.kt)("p",null,"@@option blkio-weight-device"),(0,o.kt)("p",null,"@@option cap-add"),(0,o.kt)("p",null,"@@option cap-drop"),(0,o.kt)("p",null,"@@option cgroup-conf"),(0,o.kt)("p",null,"@@option cgroup-parent"),(0,o.kt)("p",null,"@@option cgroupns"),(0,o.kt)("p",null,"@@option cgroups"),(0,o.kt)("p",null,"@@option chrootdirs"),(0,o.kt)("p",null,"@@option cidfile.write"),(0,o.kt)("p",null,"@@option conmon-pidfile"),(0,o.kt)("p",null,"@@option cpu-period"),(0,o.kt)("p",null,"@@option cpu-quota"),(0,o.kt)("p",null,"@@option cpu-rt-period"),(0,o.kt)("p",null,"@@option cpu-rt-runtime"),(0,o.kt)("p",null,"@@option cpu-shares"),(0,o.kt)("p",null,"@@option cpus.container"),(0,o.kt)("p",null,"@@option cpuset-cpus"),(0,o.kt)("p",null,"@@option cpuset-mems"),(0,o.kt)("p",null,"@@option decryption-key"),(0,o.kt)("p",null,"@@option device"),(0,o.kt)("p",null,"Note: if the user only has access rights via a group, accessing the device\nfrom inside a rootless container will fail. Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--group-add keep-groups"),"\nflag to pass the user's supplementary group access into the container."),(0,o.kt)("p",null,"@@option device-cgroup-rule"),(0,o.kt)("p",null,"@@option device-read-bps"),(0,o.kt)("p",null,"@@option device-read-iops"),(0,o.kt)("p",null,"@@option device-write-bps"),(0,o.kt)("p",null,"@@option device-write-iops"),(0,o.kt)("p",null,"@@option disable-content-trust"),(0,o.kt)("p",null,"@@option dns"),(0,o.kt)("p",null,"This option cannot be combined with ",(0,o.kt)("strong",{parentName:"p"},"--network")," that is set to ",(0,o.kt)("strong",{parentName:"p"},"none")," or ",(0,o.kt)("strong",{parentName:"p"},"container:"),(0,o.kt)("em",{parentName:"p"},"id"),"."),(0,o.kt)("p",null,"@@option dns-option.container"),(0,o.kt)("p",null,"@@option dns-search.container"),(0,o.kt)("p",null,"@@option entrypoint"),(0,o.kt)("p",null,"@@option env"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"#environment"},(0,o.kt)("strong",{parentName:"a"},"Environment"))," note below for precedence and examples."),(0,o.kt)("p",null,"@@option env-file"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"#environment"},(0,o.kt)("strong",{parentName:"a"},"Environment"))," note below for precedence and examples."),(0,o.kt)("p",null,"@@option env-host"),(0,o.kt)("p",null,"@@option env-merge"),(0,o.kt)("p",null,"@@option expose"),(0,o.kt)("p",null,"@@option gidmap.container"),(0,o.kt)("p",null,"@@option group-add"),(0,o.kt)("p",null,"@@option group-entry"),(0,o.kt)("p",null,"@@option health-cmd"),(0,o.kt)("p",null,"@@option health-interval"),(0,o.kt)("p",null,"@@option health-on-failure"),(0,o.kt)("p",null,"@@option health-retries"),(0,o.kt)("p",null,"@@option health-start-period"),(0,o.kt)("p",null,"@@option health-startup-cmd"),(0,o.kt)("p",null,"@@option health-startup-interval"),(0,o.kt)("p",null,"@@option health-startup-retries"),(0,o.kt)("p",null,"@@option health-startup-success"),(0,o.kt)("p",null,"@@option health-startup-timeout"),(0,o.kt)("p",null,"@@option health-timeout"),(0,o.kt)("h4",{id:"--help"},(0,o.kt)("strong",{parentName:"h4"},"--help")),(0,o.kt)("p",null,"Print usage statement"),(0,o.kt)("p",null,"@@option hostname.container"),(0,o.kt)("p",null,"@@option hostuser"),(0,o.kt)("p",null,"@@option http-proxy"),(0,o.kt)("p",null,"@@option image-volume"),(0,o.kt)("p",null,"@@option init"),(0,o.kt)("h4",{id:"--init-ctrtype"},(0,o.kt)("strong",{parentName:"h4"},"--init-ctr"),"=",(0,o.kt)("em",{parentName:"h4"},"type")),(0,o.kt)("p",null,"(Pods only).\nWhen using pods, create an init style container, which is run after the infra container is started\nbut before regular pod containers are started. Init containers are useful for running\nsetup operations for the pod's applications."),(0,o.kt)("p",null,"Valid values for ",(0,o.kt)("inlineCode",{parentName:"p"},"init-ctr")," type are ",(0,o.kt)("em",{parentName:"p"},"always")," or ",(0,o.kt)("em",{parentName:"p"},"once"),". The ",(0,o.kt)("em",{parentName:"p"},"always")," value\nmeans the container will run with each and every ",(0,o.kt)("inlineCode",{parentName:"p"},"pod start"),", whereas the ",(0,o.kt)("em",{parentName:"p"},"once"),"\nvalue means the container will only run once when the pod is started and then the container is removed."),(0,o.kt)("p",null,"Init containers are only run on pod ",(0,o.kt)("inlineCode",{parentName:"p"},"start"),". Restarting a pod will not execute any init\ncontainers should they be present. Furthermore, init containers can only be created in a\npod when that pod is not running."),(0,o.kt)("p",null,"@@option init-path"),(0,o.kt)("p",null,"@@option interactive"),(0,o.kt)("p",null,"@@option ip"),(0,o.kt)("p",null,"@@option ip6"),(0,o.kt)("p",null,"@@option ipc"),(0,o.kt)("p",null,"@@option label"),(0,o.kt)("p",null,"@@option label-file"),(0,o.kt)("p",null,"@@option link-local-ip"),(0,o.kt)("p",null,"@@option log-driver"),(0,o.kt)("p",null,"@@option log-opt"),(0,o.kt)("p",null,"@@option mac-address"),(0,o.kt)("p",null,"@@option memory"),(0,o.kt)("p",null,"@@option memory-reservation"),(0,o.kt)("p",null,"@@option memory-swap"),(0,o.kt)("p",null,"@@option memory-swappiness"),(0,o.kt)("p",null,"@@option mount"),(0,o.kt)("p",null,"@@option name.container"),(0,o.kt)("p",null,"@@option network"),(0,o.kt)("p",null,"Invalid if using ",(0,o.kt)("strong",{parentName:"p"},"--dns"),", ",(0,o.kt)("strong",{parentName:"p"},"--dns-option"),", or ",(0,o.kt)("strong",{parentName:"p"},"--dns-search")," with ",(0,o.kt)("strong",{parentName:"p"},"--network")," set to ",(0,o.kt)("strong",{parentName:"p"},"none")," or ",(0,o.kt)("strong",{parentName:"p"},"container:"),(0,o.kt)("em",{parentName:"p"},"id"),"."),(0,o.kt)("p",null,"If used together with ",(0,o.kt)("strong",{parentName:"p"},"--pod"),", the container will not join the pod's network namespace."),(0,o.kt)("p",null,"@@option network-alias"),(0,o.kt)("p",null,"@@option no-healthcheck"),(0,o.kt)("p",null,"@@option no-hosts"),(0,o.kt)("p",null,"This option conflicts with ",(0,o.kt)("strong",{parentName:"p"},"--add-host"),"."),(0,o.kt)("p",null,"@@option oom-kill-disable"),(0,o.kt)("p",null,"@@option oom-score-adj"),(0,o.kt)("p",null,"@@option os.pull"),(0,o.kt)("p",null,"@@option passwd-entry"),(0,o.kt)("p",null,"@@option personality"),(0,o.kt)("p",null,"@@option pid.container"),(0,o.kt)("p",null,"@@option pidfile"),(0,o.kt)("p",null,"@@option pids-limit"),(0,o.kt)("p",null,"@@option platform"),(0,o.kt)("p",null,"@@option pod.run"),(0,o.kt)("p",null,"@@option pod-id-file.container"),(0,o.kt)("p",null,"@@option privileged"),(0,o.kt)("p",null,"@@option publish"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," If a container will be run within a pod, it is not necessary to publish the port for\nthe containers in the pod. The port must only be published by the pod itself. Pod network\nstacks act like the network stack on the host - when there are a variety of containers in the pod,\nand programs in the container, all sharing a single interface and IP address, and\nassociated ports. If one container binds to a port, no other container can use that port\nwithin the pod while it is in use. Containers in the pod can also communicate over localhost\nby having one container bind to localhost in the pod, and another connect to that port."),(0,o.kt)("p",null,"@@option publish-all"),(0,o.kt)("p",null,"@@option pull"),(0,o.kt)("h4",{id:"--quiet--q"},(0,o.kt)("strong",{parentName:"h4"},"--quiet"),", ",(0,o.kt)("strong",{parentName:"h4"},"-q")),(0,o.kt)("p",null,"Suppress output information when pulling images"),(0,o.kt)("p",null,"@@option read-only"),(0,o.kt)("p",null,"@@option read-only-tmpfs"),(0,o.kt)("p",null,"@@option replace"),(0,o.kt)("p",null,"@@option requires"),(0,o.kt)("p",null,"@@option restart"),(0,o.kt)("h4",{id:"--rm"},(0,o.kt)("strong",{parentName:"h4"},"--rm")),(0,o.kt)("p",null,"Automatically remove the container and any anonymous unnamed volume associated with\nthe container when it exits. The default is ",(0,o.kt)("strong",{parentName:"p"},"false"),"."),(0,o.kt)("p",null,"@@option rootfs"),(0,o.kt)("p",null,"@@option sdnotify"),(0,o.kt)("p",null,"@@option seccomp-policy"),(0,o.kt)("p",null,"@@option secret"),(0,o.kt)("p",null,"@@option security-opt"),(0,o.kt)("p",null,"@@option shm-size"),(0,o.kt)("p",null,"@@option shm-size-systemd"),(0,o.kt)("p",null,"@@option stop-signal"),(0,o.kt)("p",null,"@@option stop-timeout"),(0,o.kt)("p",null,"@@option subgidname"),(0,o.kt)("p",null,"@@option subuidname"),(0,o.kt)("p",null,"@@option sysctl"),(0,o.kt)("p",null,"@@option systemd"),(0,o.kt)("p",null,"@@option timeout"),(0,o.kt)("p",null,"@@option tls-verify"),(0,o.kt)("p",null,"@@option tmpfs"),(0,o.kt)("p",null,"@@option tty"),(0,o.kt)("p",null,"@@option tz"),(0,o.kt)("p",null,"@@option uidmap.container"),(0,o.kt)("p",null,"@@option ulimit"),(0,o.kt)("p",null,"@@option umask"),(0,o.kt)("p",null,"@@option unsetenv"),(0,o.kt)("p",null,"@@option unsetenv-all"),(0,o.kt)("p",null,"@@option user"),(0,o.kt)("p",null,"@@option userns.container"),(0,o.kt)("p",null,"@@option uts.container"),(0,o.kt)("p",null,"@@option variant.container"),(0,o.kt)("p",null,"@@option volume"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("strong",{parentName:"p"},"--group-add keep-groups")," option to pass the user's supplementary group access into the container."),(0,o.kt)("p",null,"@@option volumes-from"),(0,o.kt)("p",null,"@@option workdir"),(0,o.kt)("h2",{id:"examples"},"EXAMPLES"),(0,o.kt)("h3",{id:"create-a-container-using-a-local-image"},"Create a container using a local image"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ podman create alpine ls\n")),(0,o.kt)("h3",{id:"create-a-container-using-a-local-image-and-annotate-it"},"Create a container using a local image and annotate it"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ podman create --annotation HELLO=WORLD alpine ls\n")),(0,o.kt)("h3",{id:"create-a-container-using-a-local-image-allocating-a-pseudo-tty-keeping-stdin-open-and-name-it-myctr"},"Create a container using a local image, allocating a pseudo-TTY, keeping stdin open and name it myctr"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  podman create -t -i --name myctr alpine ls\n")),(0,o.kt)("h3",{id:"set-uidgid-mapping-in-a-new-user-namespace"},"Set UID/GID mapping in a new user namespace"),(0,o.kt)("p",null,"Running a container in a new user namespace requires a mapping of\nthe UIDs and GIDs from the host."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ podman create --uidmap 0:30000:7000 --gidmap 0:30000:7000 fedora echo hello\n")),(0,o.kt)("h3",{id:"setting-automatic-user-namespace-separated-containers"},"Setting automatic user namespace separated containers"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# podman create --userns=auto:size=65536 ubi8-init\n")),(0,o.kt)("h3",{id:"configure-timezone-in-a-container"},"Configure timezone in a container"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ podman create --tz=local alpine date\n$ podman create --tz=Asia/Shanghai alpine date\n$ podman create --tz=US/Eastern alpine date\n")),(0,o.kt)("h3",{id:"adding-dependency-containers"},"Adding dependency containers"),(0,o.kt)("p",null,"Podman will make sure the first container, container1, is running before the second container (container2) is started."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ podman create --name container1 -t -i fedora bash\n$ podman create --name container2 --requires container1 -t -i fedora bash\n$ podman start --attach container2\n")),(0,o.kt)("p",null,"Multiple containers can be required."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ podman create --name container1 -t -i fedora bash\n$ podman create --name container2 -t -i fedora bash\n$ podman create --name container3 --requires container1,container2 -t -i fedora bash\n$ podman start --attach container3\n")),(0,o.kt)("h3",{id:"configure-keep-supplemental-groups-for-access-to-volume"},"Configure keep supplemental groups for access to volume"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ podman create -v /var/lib/design:/var/lib/design --group-add keep-groups ubi8\n")),(0,o.kt)("h3",{id:"configure-execution-domain-for-containers-using-personality-flag"},"Configure execution domain for containers using personality flag"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ podman create --name container1 --personality=LINUX32 fedora bash\n")),(0,o.kt)("h3",{id:"create-a-container-with-external-rootfs-mounted-as-an-overlay"},"Create a container with external rootfs mounted as an overlay"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ podman create --name container1 --rootfs /path/to/rootfs:O bash\n")),(0,o.kt)("h3",{id:"create-a-container-connected-to-two-networks-called-net1-and-net2-with-a-static-ip"},"Create a container connected to two networks (called net1 and net2) with a static ip"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ podman create --network net1:ip=10.89.1.5 --network net2:ip=10.89.10.10 alpine ip addr\n")),(0,o.kt)("h3",{id:"rootless-containers"},"Rootless Containers"),(0,o.kt)("p",null,"Podman runs as a non-root user on most systems. This feature requires that a new enough version of shadow-utils\nbe installed. The shadow-utils package must include the newuidmap and newgidmap executables."),(0,o.kt)("p",null,"In order for users to run rootless, there must be an entry for their username in /etc/subuid and /etc/subgid which lists the UIDs for their user namespace."),(0,o.kt)("p",null,"Rootless Podman works better if the fuse-overlayfs and slirp4netns packages are installed.\nThe fuse-overlayfs package provides a userspace overlay storage driver, otherwise users need to use\nthe vfs storage driver, which can be disk space expensive and less performant\nthan other drivers."),(0,o.kt)("p",null,"To enable VPN on the container, slirp4netns or pasta needs to be specified;\nwithout either, containers need to be run with the --network=host flag."),(0,o.kt)("h2",{id:"environment"},"ENVIRONMENT"),(0,o.kt)("p",null,"Environment variables within containers can be set using multiple different options: This section describes the precedence."),(0,o.kt)("p",null,"Precedence order (later entries override earlier entries):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"--env-host")," : Host environment of the process executing Podman is added."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"--http-proxy"),": By default, several environment variables will be passed in from the host, such as ",(0,o.kt)("strong",{parentName:"li"},"http_proxy")," and ",(0,o.kt)("strong",{parentName:"li"},"no_proxy"),". See ",(0,o.kt)("strong",{parentName:"li"},"--http-proxy")," for details."),(0,o.kt)("li",{parentName:"ul"},"Container image : Any environment variables specified in the container image."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"--env-file")," : Any environment variables specified via env-files. If multiple files specified, then they override each other in order of entry."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"--env")," : Any environment variables specified will override previous settings.")),(0,o.kt)("p",null,"Create containers and set the environment ending with a ",(0,o.kt)("strong",{parentName:"p"},"*"),".\nThe trailing ",(0,o.kt)("strong",{parentName:"p"},"*")," glob functionality is only active when no value is specified:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ export ENV1=a\n$ podman create --name ctr1 --env 'ENV*' alpine env\n$ podman start --attach ctr1 | grep ENV\nENV1=a\n$ podman create --name ctr2 --env 'ENV*=b' alpine env\n$ podman start --attach ctr2 | grep ENV\nENV*=b\n")),(0,o.kt)("h2",{id:"conmon"},"CONMON"),(0,o.kt)("p",null,"When Podman starts a container it actually executes the conmon program, which\nthen executes the OCI Runtime. Conmon is the container monitor. It is a small\nprogram whose job is to watch the primary process of the container, and if the\ncontainer dies, save the exit code. It also holds open the tty of the\ncontainer, so that it can be attached to later. This is what allows Podman to\nrun in detached mode (backgrounded), so Podman can exit but conmon continues to\nrun. Each container has their own instance of conmon. Conmon waits for the\ncontainer to exit, gathers and saves the exit code, and then launches a Podman\nprocess to complete the container cleanup, by shutting down the network and\nstorage. For more information on conmon, please reference the conmon(8) man\npage."),(0,o.kt)("h2",{id:"files"},"FILES"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"/etc/subuid"),"\n",(0,o.kt)("strong",{parentName:"p"},"/etc/subgid")),(0,o.kt)("p",null,"NOTE: Use the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"TMPDIR")," to change the temporary storage location of downloaded container images. Podman defaults to use ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/tmp"),"."),(0,o.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/website-new/docs/podman"},"podman(1)")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/website-new/docs/commands/podman-save"},"podman-save(1)")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/website-new/docs/commands/podman-ps"},"podman-ps(1)")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/website-new/docs/commands/podman-attach"},"podman-attach(1)")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/website-new/docs/commands/podman-pod/podman-pod-create"},"podman-pod-create(1)")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/website-new/docs/commands/podman-port"},"podman-port(1)")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/website-new/docs/commands/podman-start"},"podman-start(1)")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/website-new/docs/commands/podman-kill"},"podman-kill(1)")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/website-new/docs/commands/podman-stop"},"podman-stop(1)")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/website-new/docs/commands/podman-generate/podman-generate-systemd"},"podman-generate-systemd(1)")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/website-new/docs/commands/podman-rm"},"podman-rm(1)")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://www.unix.com/man-page/linux/5/subgid"},"subgid(5)")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://www.unix.com/man-page/linux/5/subuid"},"subuid(5)")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/containers/common/blob/main/docs/containers.conf.5.md"},"containers.conf(5)")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://www.freedesktop.org/software/systemd/man/systemd.unit.html"},"systemd.unit(5)")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://man7.org/linux/man-pages/man8/setsebool.8.html"},"setsebool(8)")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/rootless-containers/slirp4netns/blob/master/slirp4netns.1.md"},"slirp4netns(1)")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://passt.top/builds/latest/web/passt.1.html"},"pasta(1)")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/containers/fuse-overlayfs/blob/main/fuse-overlayfs.1.md"},"fuse-overlayfs(1)")),", ",(0,o.kt)("strong",{parentName:"p"},"proc(5)"),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/containers/conmon/blob/main/docs/conmon.8.md"},"conmon(8)")),", ",(0,o.kt)("strong",{parentName:"p"},"personality(2)")),(0,o.kt)("h2",{id:"history"},"HISTORY"),(0,o.kt)("p",null,"October 2017, converted from Docker documentation to Podman by Dan Walsh for Podman ",(0,o.kt)("inlineCode",{parentName:"p"},"<dwalsh@redhat.com>")),(0,o.kt)("p",null,"November 2014, updated by Sven Dowideit ",(0,o.kt)("inlineCode",{parentName:"p"},"<SvenDowideit@home.org.au>")),(0,o.kt)("p",null,"September 2014, updated by Sven Dowideit ",(0,o.kt)("inlineCode",{parentName:"p"},"<SvenDowideit@home.org.au>")),(0,o.kt)("p",null,"August 2014, updated by Sven Dowideit ",(0,o.kt)("inlineCode",{parentName:"p"},"<SvenDowideit@home.org.au>")),(0,o.kt)("h2",{id:"footnotes"},"FOOTNOTES"),(0,o.kt)("a",{name:"Footnote1"},"1"),": The Podman project is committed to inclusivity, a core value of open source. The `master` and `slave` mount propagation terminology used here is problematic and divisive, and should be changed. However, these terms are currently used within the Linux kernel and must be used as-is at this time. When the kernel maintainers rectify this usage, Podman will follow suit immediately.")}m.isMDXComponent=!0}}]);