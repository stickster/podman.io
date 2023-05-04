"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[3836],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=m(n),h=a,k=c["".concat(p,".").concat(h)]||c[h]||d[h]||o;return n?r.createElement(k,i(i({ref:t},l),{},{components:n})):r.createElement(k,i({ref:t},l))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5662:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const o={},i=void 0,s={unversionedId:"commands/podman-container/podman-container-restore",id:"commands/podman-container/podman-container-restore",title:"podman-container-restore",description:"% podman-container-restore 1",source:"@site/docs/commands/podman-container/podman-container-restore.md",sourceDirName:"commands/podman-container",slug:"/commands/podman-container/podman-container-restore",permalink:"/website-new/docs/commands/podman-container/podman-container-restore",draft:!1,editUrl:"https://github.com/containers/website-new/docs/commands/podman-container/podman-container-restore.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-container-prune",permalink:"/website-new/docs/commands/podman-container/podman-container-prune"},next:{title:"podman-container-runlabel",permalink:"/website-new/docs/commands/podman-container/podman-container-runlabel"}},p={},m=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"OPTIONS",id:"options",level:2},{value:"<strong>--all</strong>, <strong>-a</strong>",id:"--all--a",level:4},{value:"<strong>--file-locks</strong>",id:"--file-locks",level:4},{value:"<strong>--ignore-rootfs</strong>",id:"--ignore-rootfs",level:4},{value:"<strong>--ignore-static-ip</strong>",id:"--ignore-static-ip",level:4},{value:"<strong>--ignore-static-mac</strong>",id:"--ignore-static-mac",level:4},{value:"<strong>--ignore-volumes</strong>",id:"--ignore-volumes",level:4},{value:"<strong>--import</strong>, <strong>-i</strong>=<em>file</em>",id:"--import--ifile",level:4},{value:"<strong>--import-previous</strong>=<em>file</em>",id:"--import-previousfile",level:4},{value:"<strong>--keep</strong>, <strong>-k</strong>",id:"--keep--k",level:4},{value:"<strong>--latest</strong>, <strong>-l</strong>",id:"--latest--l",level:4},{value:"<strong>--name</strong>, <strong>-n</strong>=<em>name</em>",id:"--name--nname",level:4},{value:"<strong>--pod</strong>=<em>name</em>",id:"--podname",level:4},{value:"<strong>--print-stats</strong>",id:"--print-stats",level:4},{value:"<strong>--publish</strong>, <strong>-p</strong>=<em>port</em>",id:"--publish--pport",level:4},{value:"<strong>--tcp-established</strong>",id:"--tcp-established",level:4},{value:"EXAMPLE",id:"example",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"HISTORY",id:"history",level:2}],l={toc:m},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"% podman-container-restore 1"),(0,a.kt)("h2",{id:"name"},"NAME"),(0,a.kt)("p",null,"podman","-","container","-","restore - Restores one or more containers from a checkpoint"),(0,a.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"podman container restore")," ","[",(0,a.kt)("em",{parentName:"p"},"options"),"]"," ",(0,a.kt)("em",{parentName:"p"},"name")," ","[...]"),(0,a.kt)("h2",{id:"description"},"DESCRIPTION"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"podman container restore")," restores a container from a container checkpoint or\ncheckpoint image. The ",(0,a.kt)("em",{parentName:"p"},"container IDs"),", ",(0,a.kt)("em",{parentName:"p"},"image IDs")," or ",(0,a.kt)("em",{parentName:"p"},"names")," are used as input."),(0,a.kt)("h2",{id:"options"},"OPTIONS"),(0,a.kt)("h4",{id:"--all--a"},(0,a.kt)("strong",{parentName:"h4"},"--all"),", ",(0,a.kt)("strong",{parentName:"h4"},"-a")),(0,a.kt)("p",null,"Restore all checkpointed ",(0,a.kt)("em",{parentName:"p"},"containers"),".\\\nThe default is ",(0,a.kt)("strong",{parentName:"p"},"false"),".\\\n",(0,a.kt)("em",{parentName:"p"},"IMPORTANT: This OPTION does not need a container name or ID as input argument.")),(0,a.kt)("h4",{id:"--file-locks"},(0,a.kt)("strong",{parentName:"h4"},"--file-locks")),(0,a.kt)("p",null,"Restore a ",(0,a.kt)("em",{parentName:"p"},"container")," with file locks. This option is required to\nrestore file locks from a checkpoint image. If the checkpoint image\ndoes not contain file locks, this option is ignored. Defaults to not\nrestoring file locks.\\\nThe default is ",(0,a.kt)("strong",{parentName:"p"},"false"),"."),(0,a.kt)("h4",{id:"--ignore-rootfs"},(0,a.kt)("strong",{parentName:"h4"},"--ignore-rootfs")),(0,a.kt)("p",null,"If a ",(0,a.kt)("em",{parentName:"p"},"container")," is restored from a checkpoint tar.gz file it is possible that it also contains all root file-system changes. With ",(0,a.kt)("strong",{parentName:"p"},"--ignore-rootfs")," it is possible to explicitly disable applying these root file-system changes to the restored ",(0,a.kt)("em",{parentName:"p"},"container"),".\\\nThe default is ",(0,a.kt)("strong",{parentName:"p"},"false"),".\\\n",(0,a.kt)("em",{parentName:"p"},"IMPORTANT: This OPTION is only available in combination with ",(0,a.kt)("strong",{parentName:"em"},"--import, -i"),".")),(0,a.kt)("h4",{id:"--ignore-static-ip"},(0,a.kt)("strong",{parentName:"h4"},"--ignore-static-ip")),(0,a.kt)("p",null,"If the ",(0,a.kt)("em",{parentName:"p"},"container")," was started with ",(0,a.kt)("strong",{parentName:"p"},"--ip")," the restored ",(0,a.kt)("em",{parentName:"p"},"container")," also tries to use that\nIP address and restore fails if that IP address is already in use. This can happen, if\na ",(0,a.kt)("em",{parentName:"p"},"container")," is restored multiple times from an exported checkpoint with ",(0,a.kt)("strong",{parentName:"p"},"--name, -n"),"."),(0,a.kt)("p",null,"Using ",(0,a.kt)("strong",{parentName:"p"},"--ignore-static-ip")," tells Podman to ignore the IP address if it was configured\nwith ",(0,a.kt)("strong",{parentName:"p"},"--ip")," during ",(0,a.kt)("em",{parentName:"p"},"container")," creation."),(0,a.kt)("p",null,"The default is ",(0,a.kt)("strong",{parentName:"p"},"false"),"."),(0,a.kt)("h4",{id:"--ignore-static-mac"},(0,a.kt)("strong",{parentName:"h4"},"--ignore-static-mac")),(0,a.kt)("p",null,"If the ",(0,a.kt)("em",{parentName:"p"},"container")," was started with ",(0,a.kt)("strong",{parentName:"p"},"--mac-address")," the restored ",(0,a.kt)("em",{parentName:"p"},"container")," also\ntries to use that MAC address and restore fails if that MAC address is already\nin use. This can happen, if a ",(0,a.kt)("em",{parentName:"p"},"container")," is restored multiple times from an\nexported checkpoint with ",(0,a.kt)("strong",{parentName:"p"},"--name, -n"),"."),(0,a.kt)("p",null,"Using ",(0,a.kt)("strong",{parentName:"p"},"--ignore-static-mac")," tells Podman to ignore the MAC address if it was\nconfigured with ",(0,a.kt)("strong",{parentName:"p"},"--mac-address")," during ",(0,a.kt)("em",{parentName:"p"},"container")," creation."),(0,a.kt)("p",null,"The default is ",(0,a.kt)("strong",{parentName:"p"},"false"),"."),(0,a.kt)("h4",{id:"--ignore-volumes"},(0,a.kt)("strong",{parentName:"h4"},"--ignore-volumes")),(0,a.kt)("p",null,"This option must be used in combination with the ",(0,a.kt)("strong",{parentName:"p"},"--import, -i")," option.\nWhen restoring ",(0,a.kt)("em",{parentName:"p"},"containers")," from a checkpoint tar.gz file with this option,\nthe content of associated volumes will not be restored.\\\nThe default is ",(0,a.kt)("strong",{parentName:"p"},"false"),"."),(0,a.kt)("h4",{id:"--import--ifile"},(0,a.kt)("strong",{parentName:"h4"},"--import"),", ",(0,a.kt)("strong",{parentName:"h4"},"-i"),"=",(0,a.kt)("em",{parentName:"h4"},"file")),(0,a.kt)("p",null,"Import a checkpoint tar.gz file, which was exported by Podman. This can be used\nto import a checkpointed ",(0,a.kt)("em",{parentName:"p"},"container")," from another host.\\\n",(0,a.kt)("em",{parentName:"p"},"IMPORTANT: This OPTION does not need a container name or ID as input argument.")),(0,a.kt)("p",null,"During the import of a checkpoint file Podman will select the same container runtime\nwhich was used during checkpointing. This is especially important if a specific\n(non-default) container runtime was specified during container creation. Podman will\nalso abort the restore if the container runtime specified during restore does\nnot much the container runtime used for container creation."),(0,a.kt)("h4",{id:"--import-previousfile"},(0,a.kt)("strong",{parentName:"h4"},"--import-previous"),"=",(0,a.kt)("em",{parentName:"h4"},"file")),(0,a.kt)("p",null,"Import a pre-checkpoint tar.gz file which was exported by Podman. This option\nmust be used with ",(0,a.kt)("strong",{parentName:"p"},"-i")," or ",(0,a.kt)("strong",{parentName:"p"},"--import"),". It only works on ",(0,a.kt)("inlineCode",{parentName:"p"},"runc 1.0-rc3")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"higher"),".\n",(0,a.kt)("em",{parentName:"p"},"IMPORTANT: This OPTION is not supported on the remote client, including Mac and Windows (excluding WSL2) machines.")),(0,a.kt)("h4",{id:"--keep--k"},(0,a.kt)("strong",{parentName:"h4"},"--keep"),", ",(0,a.kt)("strong",{parentName:"h4"},"-k")),(0,a.kt)("p",null,"Keep all temporary log and statistics files created by ",(0,a.kt)("inlineCode",{parentName:"p"},"CRIU")," during\ncheckpointing as well as restoring. These files are not deleted if restoring\nfails for further debugging. If restoring succeeds these files are\ntheoretically not needed, but if these files are needed Podman can keep the\nfiles for further analysis. This includes the checkpoint directory with all\nfiles created during checkpointing. The size required by the checkpoint\ndirectory is roughly the same as the amount of memory required by the\nprocesses in the checkpointed ",(0,a.kt)("em",{parentName:"p"},"container"),".\\\nWithout the ",(0,a.kt)("strong",{parentName:"p"},"--keep"),", ",(0,a.kt)("strong",{parentName:"p"},"-k")," option the checkpoint will be consumed and cannot be used again.\\\nThe default is ",(0,a.kt)("strong",{parentName:"p"},"false"),"."),(0,a.kt)("h4",{id:"--latest--l"},(0,a.kt)("strong",{parentName:"h4"},"--latest"),", ",(0,a.kt)("strong",{parentName:"h4"},"-l")),(0,a.kt)("p",null,"Instead of providing the ",(0,a.kt)("em",{parentName:"p"},"container ID")," or ",(0,a.kt)("em",{parentName:"p"},"name"),", use the last created ",(0,a.kt)("em",{parentName:"p"},"container"),". If other tools than Podman are used to run ",(0,a.kt)("em",{parentName:"p"},"containers")," such as ",(0,a.kt)("inlineCode",{parentName:"p"},"CRI-O"),", the last started ",(0,a.kt)("em",{parentName:"p"},"container")," could be from either tool.\\\nThe default is ",(0,a.kt)("strong",{parentName:"p"},"false"),".\\\n",(0,a.kt)("em",{parentName:"p"},"IMPORTANT: This OPTION is not available with the remote Podman client, including Mac and Windows (excluding WSL2) machines. This OPTION does not need a container name or ID as input argument.")),(0,a.kt)("h4",{id:"--name--nname"},(0,a.kt)("strong",{parentName:"h4"},"--name"),", ",(0,a.kt)("strong",{parentName:"h4"},"-n"),"=",(0,a.kt)("em",{parentName:"h4"},"name")),(0,a.kt)("p",null,"If a ",(0,a.kt)("em",{parentName:"p"},"container")," is restored from a checkpoint tar.gz file it is possible to rename it with ",(0,a.kt)("strong",{parentName:"p"},"--name, -n"),". This way it is possible to restore a ",(0,a.kt)("em",{parentName:"p"},"container")," from a checkpoint multiple times with different\nnames."),(0,a.kt)("p",null,"If the ",(0,a.kt)("strong",{parentName:"p"},"--name, -n")," option is used, Podman will not attempt to assign the same IP\naddress to the ",(0,a.kt)("em",{parentName:"p"},"container")," it was using before checkpointing as each IP address can only\nbe used once and the restored ",(0,a.kt)("em",{parentName:"p"},"container")," will have another IP address. This also means\nthat ",(0,a.kt)("strong",{parentName:"p"},"--name, -n")," cannot be used in combination with ",(0,a.kt)("strong",{parentName:"p"},"--tcp-established"),".\\\n",(0,a.kt)("em",{parentName:"p"},"IMPORTANT: This OPTION is only available for a checkpoint image or in combination\nwith ",(0,a.kt)("strong",{parentName:"em"},"--import, -i"),".")),(0,a.kt)("h4",{id:"--podname"},(0,a.kt)("strong",{parentName:"h4"},"--pod"),"=",(0,a.kt)("em",{parentName:"h4"},"name")),(0,a.kt)("p",null,"Restore a container into the pod ",(0,a.kt)("em",{parentName:"p"},"name"),". The destination pod for this restore\nhas to have the same namespaces shared as the pod this container was checkpointed\nfrom (see ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/website-new/docs/commands/podman-pod/podman-pod-create#--share"},"podman pod create --share")),").\\\n",(0,a.kt)("em",{parentName:"p"},"IMPORTANT: This OPTION is only available for a checkpoint image or in combination\nwith ",(0,a.kt)("strong",{parentName:"em"},"--import, -i"),".")),(0,a.kt)("p",null,"This option requires at least CRIU 36."),(0,a.kt)("h4",{id:"--print-stats"},(0,a.kt)("strong",{parentName:"h4"},"--print-stats")),(0,a.kt)("p",null,"Print out statistics about restoring the container(s). The output is\nrendered in a JSON array and contains information about how much time different\nrestore operations required. Many of the restore statistics are created\nby CRIU and just passed through to Podman. The following information is provided\nin the JSON array:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"podman_restore_duration"),": Overall time (in microseconds) needed to restore\nall checkpoints.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"runtime_restore_duration"),": Time (in microseconds) the container runtime\nneeded to restore the checkpoint.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"forking_time"),": Time (in microseconds) CRIU needed to create (fork) all\nprocesses in the restored container (measured by CRIU).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"restore_time"),": Time (in microseconds) CRIU needed to restore all processes\nin the container (measured by CRIU).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"pages_restored"),": Number of memory pages restored (measured by CRIU)."))),(0,a.kt)("p",null,"The default is ",(0,a.kt)("strong",{parentName:"p"},"false"),"."),(0,a.kt)("h4",{id:"--publish--pport"},(0,a.kt)("strong",{parentName:"h4"},"--publish"),", ",(0,a.kt)("strong",{parentName:"h4"},"-p"),"=",(0,a.kt)("em",{parentName:"h4"},"port")),(0,a.kt)("p",null,"Replaces the ports that the ",(0,a.kt)("em",{parentName:"p"},"container")," publishes, as configured during the\ninitial ",(0,a.kt)("em",{parentName:"p"},"container")," start, with a new set of port forwarding rules."),(0,a.kt)("p",null,"For more details please see ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/website-new/docs/commands/podman-run#--publish"},"podman run --publish")),"."),(0,a.kt)("h4",{id:"--tcp-established"},(0,a.kt)("strong",{parentName:"h4"},"--tcp-established")),(0,a.kt)("p",null,"Restore a ",(0,a.kt)("em",{parentName:"p"},"container")," with established TCP connections. If the checkpoint image\ncontains established TCP connections, this option is required during restore.\nIf the checkpoint image does not contain established TCP connections this\noption is ignored. Defaults to not restoring ",(0,a.kt)("em",{parentName:"p"},"containers")," with established TCP\nconnections.\\\nThe default is ",(0,a.kt)("strong",{parentName:"p"},"false"),"."),(0,a.kt)("h2",{id:"example"},"EXAMPLE"),(0,a.kt)("p",null,'Restores the container "mywebserver".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# podman container restore mywebserver\n")),(0,a.kt)("p",null,"Import a checkpoint file and a pre-checkpoint file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# podman container restore --import-previous pre-checkpoint.tar.gz --import checkpoint.tar.gz\n")),(0,a.kt)("p",null,'Start the container "mywebserver". Make a checkpoint of the container and export it. Restore the container with other port ranges from the exported file.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ podman run --rm -p 2345:80 -d webserver\n# podman container checkpoint -l --export=dump.tar\n# podman container restore -p 5432:8080 --import=dump.tar\n")),(0,a.kt)("p",null,'Start a container with the name "foobar-1". Create a checkpoint image "foobar-checkpoint". Restore the container from the checkpoint image with a different name.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# podman run --name foobar-1 -d webserver\n# podman container checkpoint --create-image foobar-checkpoint foobar-1\n# podman inspect foobar-checkpoint\n# podman container restore --name foobar-2 foobar-checkpoint\n# podman container restore --name foobar-3 foobar-checkpoint\n")),(0,a.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/website-new/docs/podman"},"podman(1)")),", ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/website-new/docs/commands/podman-container/podman-container-checkpoint"},"podman-container-checkpoint(1)")),", ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/website-new/docs/commands/podman-run"},"podman-run(1)")),", ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/website-new/docs/commands/podman-pod/podman-pod-create"},"podman-pod-create(1)")),", ",(0,a.kt)("strong",{parentName:"p"},"criu(8)")),(0,a.kt)("h2",{id:"history"},"HISTORY"),(0,a.kt)("p",null,"September 2018, Originally compiled by Adrian Reber ",(0,a.kt)("a",{parentName:"p",href:"mailto:areber@redhat.com"},"areber@redhat.com")))}d.isMDXComponent=!0}}]);