"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[6420],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?o.createElement(h,r(r({ref:t},u),{},{components:n})):o.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2227:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const i={},r=void 0,s={unversionedId:"tutorials/rootless_tutorial",id:"tutorials/rootless_tutorial",title:"rootless_tutorial",description:"--",source:"@site/docs/tutorials/rootless_tutorial.md",sourceDirName:"tutorials",slug:"/tutorials/rootless_tutorial",permalink:"/website-new/docs/tutorials/rootless_tutorial",draft:!1,editUrl:"https://github.com/containers/website-new/docs/tutorials/rootless_tutorial.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Podman remote-client tutorial",permalink:"/website-new/docs/tutorials/remote_client"},next:{title:"Podman socket activation",permalink:"/website-new/docs/tutorials/socket_activation"}},l={},p=[{value:"cgroup V2 support",id:"cgroup-v2-support",level:2},{value:"Administrator Actions",id:"administrator-actions",level:2},{value:"Installing Podman",id:"installing-podman",level:3},{value:"Building Podman",id:"building-podman",level:3},{value:"Install <code>slirp4netns</code>",id:"install-slirp4netns",level:3},{value:"Ensure <code>fuse-overlayfs</code> is installed",id:"ensure-fuse-overlayfs-is-installed",level:3},{value:"Enable user namespaces (on RHEL7 machines)",id:"enable-user-namespaces-on-rhel7-machines",level:3},{value:"<code>/etc/subuid</code> and <code>/etc/subgid</code> configuration",id:"etcsubuid-and-etcsubgid-configuration",level:3},{value:"Enable unprivileged <code>ping</code>",id:"enable-unprivileged-ping",level:3},{value:"User Actions",id:"user-actions",level:2},{value:"User Configuration Files",id:"user-configuration-files",level:3},{value:"containers.conf",id:"containersconf",level:4},{value:"storage.conf",id:"storageconf",level:4},{value:"registries",id:"registries",level:4},{value:"Authorization files",id:"authorization-files",level:4},{value:"Using volumes",id:"using-volumes",level:3},{value:"More information",id:"more-information",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"--\ntitle: Rootless Tutorial"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/containers/common/main/logos/podman-logo-full-vert.png",alt:"PODMAN logo"})),(0,a.kt)("h1",{id:"basic-setup-and-use-of-podman-in-a-rootless-environment"},"Basic Setup and Use of Podman in a Rootless environment."),(0,a.kt)("p",null,"Prior to allowing users without root privileges to run Podman, the administrator must install or build Podman and complete the following configurations."),(0,a.kt)("h2",{id:"cgroup-v2-support"},"cgroup V2 support"),(0,a.kt)("p",null,"The cgroup V2 Linux kernel feature allows the user to limit the amount of resources a rootless container can use. If the Linux distribution that you are running Podman on is enabled with cgroup V2 then you might need to change the default OCI Runtime. Some older versions of ",(0,a.kt)("inlineCode",{parentName:"p"},"runc")," do not work with cgroup V2, you might have to switch to the alternative OCI runtime ",(0,a.kt)("inlineCode",{parentName:"p"},"crun"),"."),(0,a.kt)("p",null,"The alternative OCI runtime support for cgroup V2 can also be turned on at the command line by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--runtime")," option:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"podman --runtime crun\n")),(0,a.kt)("p",null,'or for all commands by changing the value for the "Default OCI runtime" in the ',(0,a.kt)("inlineCode",{parentName:"p"},"containers.conf")," file either at the system level or at the ",(0,a.kt)("a",{parentName:"p",href:"#user-configuration-files"},"user level")," from ",(0,a.kt)("inlineCode",{parentName:"p"},'runtime = "runc"')," to ",(0,a.kt)("inlineCode",{parentName:"p"},'runtime = "crun"'),"."),(0,a.kt)("h2",{id:"administrator-actions"},"Administrator Actions"),(0,a.kt)("h3",{id:"installing-podman"},"Installing Podman"),(0,a.kt)("p",null,"For installing Podman, please see the ",(0,a.kt)("a",{parentName:"p",href:"https://podman.io/getting-started/installation"},"installation instructions"),"."),(0,a.kt)("h3",{id:"building-podman"},"Building Podman"),(0,a.kt)("p",null,"For building Podman, please see the ",(0,a.kt)("a",{parentName:"p",href:"https://podman.io/getting-started/installation#building-from-scratch"},"build instructions"),"."),(0,a.kt)("h3",{id:"install-slirp4netns"},"Install ",(0,a.kt)("inlineCode",{parentName:"h3"},"slirp4netns")),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rootless-containers/slirp4netns"},"slirp4netns")," package provides user-mode networking for unprivileged network namespaces and must be installed on the machine in order for Podman to run in a rootless environment. The package is available on most Linux distributions via their package distribution software such as ",(0,a.kt)("inlineCode",{parentName:"p"},"yum"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"dnf"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"apt"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"zypper"),", etc. If the package is not available, you can build and install ",(0,a.kt)("inlineCode",{parentName:"p"},"slirp4netns")," from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rootless-containers/slirp4netns"},"GitHub"),"."),(0,a.kt)("h3",{id:"ensure-fuse-overlayfs-is-installed"},"Ensure ",(0,a.kt)("inlineCode",{parentName:"h3"},"fuse-overlayfs")," is installed"),(0,a.kt)("p",null,"When using Podman in a rootless environment, it is recommended to use ",(0,a.kt)("inlineCode",{parentName:"p"},"fuse-overlayfs")," rather than the VFS file system. For that you need the ",(0,a.kt)("inlineCode",{parentName:"p"},"fuse-overlayfs")," executable available in ",(0,a.kt)("inlineCode",{parentName:"p"},"$PATH"),"."),(0,a.kt)("p",null,"Your distribution might already provide it in the ",(0,a.kt)("inlineCode",{parentName:"p"},"fuse-overlayfs")," package, but be aware that you need at least version ",(0,a.kt)("strong",{parentName:"p"},"0.7.6"),". This especially needs to be checked on Ubuntu distributions as ",(0,a.kt)("inlineCode",{parentName:"p"},"fuse-overlayfs")," is not generally installed by default and the 0.7.6 version is not available natively on Ubuntu releases prior to ",(0,a.kt)("strong",{parentName:"p"},"20.04"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"fuse-overlayfs")," project is available from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/containers/fuse-overlayfs"},"GitHub"),", and provides instructions for easily building a static ",(0,a.kt)("inlineCode",{parentName:"p"},"fuse-overlayfs")," executable."),(0,a.kt)("p",null,"If Podman is used before ",(0,a.kt)("inlineCode",{parentName:"p"},"fuse-overlayfs")," is installed, it may be necessary to adjust the ",(0,a.kt)("inlineCode",{parentName:"p"},"storage.conf"),' file (see "User Configuration Files" below) to change the ',(0,a.kt)("inlineCode",{parentName:"p"},"driver")," option under ",(0,a.kt)("inlineCode",{parentName:"p"},"[storage]")," to ",(0,a.kt)("inlineCode",{parentName:"p"},'"overlay"')," and point the ",(0,a.kt)("inlineCode",{parentName:"p"},"mount_program")," option in ",(0,a.kt)("inlineCode",{parentName:"p"},"[storage.options.overlay]")," to the path of the ",(0,a.kt)("inlineCode",{parentName:"p"},"fuse-overlayfs")," executable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[storage]\n  driver = "overlay"\n\n  (...)\n\n[storage.options.overlay]\n\n  (...)\n\n  mount_program = "/usr/bin/fuse-overlayfs"\n')),(0,a.kt)("h3",{id:"enable-user-namespaces-on-rhel7-machines"},"Enable user namespaces (on RHEL7 machines)"),(0,a.kt)("p",null,"The number of user namespaces that are allowed on the system is specified in the file ",(0,a.kt)("inlineCode",{parentName:"p"},"/proc/sys/user/max_user_namespaces"),". On most Linux platforms this is preset by default and no adjustment is necessary. However, on RHEL7 machines, a user with root privileges may need to set that to a reasonable value by using this command: ",(0,a.kt)("inlineCode",{parentName:"p"},"sysctl user.max_user_namespaces=15000"),"."),(0,a.kt)("h3",{id:"etcsubuid-and-etcsubgid-configuration"},(0,a.kt)("inlineCode",{parentName:"h3"},"/etc/subuid")," and ",(0,a.kt)("inlineCode",{parentName:"h3"},"/etc/subgid")," configuration"),(0,a.kt)("p",null,"Rootless Podman requires the user running it to have a range of UIDs listed in the files ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/subuid")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/subgid"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"shadow-utils")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"newuid")," package provides these files on different distributions and they must be installed on the system. Root privileges are required to add or update entries within these files. The following is a summary from the ",(0,a.kt)("a",{parentName:"p",href:"https://opensource.com/article/19/2/how-does-rootless-podman-work"},"How does rootless Podman work?")," article by Dan Walsh on ",(0,a.kt)("a",{parentName:"p",href:"https://opensource.com"},"opensource.com")),(0,a.kt)("p",null,"For each user that will be allowed to create containers, update ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/subuid")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/subgid")," for the user with fields that look like the following. Note that the values for each user must be unique. If there is overlap, there is a potential for a user to use another user's namespace and they could corrupt it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cat /etc/subuid\njohndoe:100000:65536\ntest:165536:65536\n")),(0,a.kt)("p",null,"The format of this file is ",(0,a.kt)("inlineCode",{parentName:"p"},"USERNAME:UID:RANGE")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"username as listed in ",(0,a.kt)("inlineCode",{parentName:"li"},"/etc/passwd")," or in the output of ",(0,a.kt)("a",{parentName:"li",href:"https://man7.org/linux/man-pages/man3/getpwent.3.html"},(0,a.kt)("inlineCode",{parentName:"a"},"getpwent")),"."),(0,a.kt)("li",{parentName:"ul"},"The initial UID allocated for the user."),(0,a.kt)("li",{parentName:"ul"},"The size of the range of UIDs allocated for the user.")),(0,a.kt)("p",null,"This means the user ",(0,a.kt)("inlineCode",{parentName:"p"},"johndoe")," is allocated UIDs 100000-165535 as well as their standard UID in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/passwd")," file. NOTE: this is not currently supported with network installs; these files must be available locally to the host machine. It is not possible to configure this with LDAP or Active Directory."),(0,a.kt)("p",null,"If you update either ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/subuid")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/subgid"),", you need to stop all the running containers owned by the user and kill the pause process that is running on the system for that user. This can be done automatically by using the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/containers/podman/blob/main/docs/source/markdown/podman-system-migrate.1.md"},(0,a.kt)("inlineCode",{parentName:"a"},"podman system migrate"))," command which will stop all the containers for the user and will kill the pause process."),(0,a.kt)("p",null,"Rather than updating the files directly, the ",(0,a.kt)("inlineCode",{parentName:"p"},"usermod")," program can be used to assign UIDs and GIDs to a user."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"usermod --add-subuids 100000-165535 --add-subgids 100000-165535 johndoe\ngrep johndoe /etc/subuid /etc/subgid\n/etc/subuid:johndoe:100000:65536\n/etc/subgid:johndoe:100000:65536\n")),(0,a.kt)("h3",{id:"enable-unprivileged-ping"},"Enable unprivileged ",(0,a.kt)("inlineCode",{parentName:"h3"},"ping")),(0,a.kt)("p",null,"Users running in a non-privileged container may not be able to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"ping")," utility from that container."),(0,a.kt)("p",null,"If this is required, the administrator must verify that the UID of the user is part of the range in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/proc/sys/net/ipv4/ping_group_range")," file."),(0,a.kt)("p",null,"To change its value the administrator can use a call similar to: ",(0,a.kt)("inlineCode",{parentName:"p"},'sysctl -w "net.ipv4.ping_group_range=0 2000000"'),"."),(0,a.kt)("p",null,"To make the change persist, the administrator will need to add a file with the ",(0,a.kt)("inlineCode",{parentName:"p"},".conf")," file extension in ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/sysctl.d")," that contains ",(0,a.kt)("inlineCode",{parentName:"p"},"net.ipv4.ping_group_range=0 $MAX_GID"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"$MAX_GID")," is the highest assignable GID of the user running the container."),(0,a.kt)("h2",{id:"user-actions"},"User Actions"),(0,a.kt)("p",null,"The majority of the work necessary to run Podman in a rootless environment is on the shoulders of the machine\u2019s administrator."),(0,a.kt)("p",null,"Once the Administrator has completed the setup on the machine and then the configurations for the user in ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/subuid")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/subgid"),", the user can just start using any Podman command that they wish."),(0,a.kt)("h3",{id:"user-configuration-files"},"User Configuration Files"),(0,a.kt)("p",null,"The Podman configuration files for root reside in ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/share/containers")," with overrides in ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/containers"),". In the rootless environment they reside in ",(0,a.kt)("inlineCode",{parentName:"p"},"${XDG_CONFIG_HOME}/containers")," (usually ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.config/containers"),") and are owned by each individual user."),(0,a.kt)("p",null,"The three main configuration files are ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/containers/common/blob/main/docs/containers.conf.5.md"},"containers.conf"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/containers/storage/blob/main/docs/containers-storage.conf.5.md"},"storage.conf")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/containers/image/blob/main/docs/containers-registries.conf.5.md"},"registries.conf"),". The user can modify these files as they wish."),(0,a.kt)("h4",{id:"containersconf"},"containers.conf"),(0,a.kt)("p",null,"Podman reads"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"/usr/share/containers/containers.conf")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"/etc/containers/containers.conf")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"$HOME/.config/containers/containers.conf"))),(0,a.kt)("p",null,"if they exist in that order. Each file can override the previous for particular fields."),(0,a.kt)("h4",{id:"storageconf"},"storage.conf"),(0,a.kt)("p",null,"For ",(0,a.kt)("inlineCode",{parentName:"p"},"storage.conf")," the order is"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"/etc/containers/storage.conf")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"$HOME/.config/containers/storage.conf"))),(0,a.kt)("p",null,"In rootless Podman certain fields in ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/containers/storage.conf")," are ignored. These fields are:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'graphroot=""\n container storage graph dir (default: "/var/lib/containers/storage")\n Default directory to store all writable content created by container storage programs.\n\nrunroot=""\n container storage run dir (default: "/run/containers/storage")\n Default directory to store all temporary writable content created by container storage programs.\n')),(0,a.kt)("p",null,"In rootless Podman these fields default to"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'graphroot="$HOME/.local/share/containers/storage"\nrunroot="$XDG_RUNTIME_DIR/containers"\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html#variables"},"$XDG_RUNTIME_DIR")," defaults on most systems to ",(0,a.kt)("inlineCode",{parentName:"p"},"/run/user/$UID"),"."),(0,a.kt)("h4",{id:"registries"},"registries"),(0,a.kt)("p",null,"Registry configuration is read in by this order"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"/etc/containers/registries.conf")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"/etc/containers/registries.d/*")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"HOME/.config/containers/registries.conf"))),(0,a.kt)("p",null,"The files in the home directory should be used to configure rootless Podman for personal needs. These files are not created by default. Users can copy the files from ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/share/containers")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/containers")," and modify them."),(0,a.kt)("h4",{id:"authorization-files"},"Authorization files"),(0,a.kt)("p",null,"The default authorization file used by the ",(0,a.kt)("inlineCode",{parentName:"p"},"podman login")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"podman logout")," commands reside in ",(0,a.kt)("inlineCode",{parentName:"p"},"${XDG_RUNTIME_DIR}/containers/auth.json"),"."),(0,a.kt)("h3",{id:"using-volumes"},"Using volumes"),(0,a.kt)("p",null,"Rootless Podman is not, and will never be, root; it's not a ",(0,a.kt)("inlineCode",{parentName:"p"},"setuid")," binary, and gains no privileges when it runs. Instead, Podman makes use of a user namespace to shift the UIDs and GIDs of a block of users it is given access to on the host (via the ",(0,a.kt)("inlineCode",{parentName:"p"},"newuidmap")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"newgidmap")," executables) and your own user within the containers that Podman creates."),(0,a.kt)("p",null,"If your container runs with the root user, then ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," in the container is actually your user on the host. UID/GID 1 is the first UID/GID specified in your user's mapping in ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/subuid")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/subgid"),", etc. If you mount a directory from the host into a container as a rootless user, and create a file in that directory as root in the container, you'll see it's actually owned by your user on the host."),(0,a.kt)("p",null,"So, for example,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> whoami\njohn\n\n# a folder which is empty\nhost> ls /home/john/folder\nhost> podman run -v /home/john/folder:/container/volume mycontainer /bin/bash\n\n# Now I'm in the container\nroot@container> whoami\nroot\nroot@container> touch /container/volume/test\nroot@container> ls -l /container/volume\ntotal 0\n-rw-r--r-- 1 root root 0 May 20 21:47 test\nroot@container> exit\n\n# I check again\nhost> ls -l /home/john/folder\ntotal 0\n-rw-r--r-- 1 john john 0 May 20 21:47 test\n")),(0,a.kt)("p",null,"We do recognize that this doesn't really match how many people intend to use rootless Podman - they want their UID inside and outside the container to match. Thus, we provide the ",(0,a.kt)("inlineCode",{parentName:"p"},"--userns=keep-id")," flag, which ensures that your user is mapped to its own UID and GID inside the container."),(0,a.kt)("p",null,"It is also helpful to distinguish between running Podman as a rootless user, and a container which is built to run rootless. If the container you're trying to run has a ",(0,a.kt)("inlineCode",{parentName:"p"},"USER")," which is not root, then when mounting volumes you ",(0,a.kt)("strong",{parentName:"p"},"must")," use ",(0,a.kt)("inlineCode",{parentName:"p"},"--userns=keep-id"),". This is because the container user would not be able to become ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," and access the mounted volumes."),(0,a.kt)("p",null,"Another consideration in regards to volumes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When providing the path of a directory you'd like to bind-mount, the path needs to be provided as an absolute path\nor a relative path that starts with ",(0,a.kt)("inlineCode",{parentName:"li"},".")," (a dot), otherwise the string will be interpreted as the name of a named volume.")),(0,a.kt)("h2",{id:"more-information"},"More information"),(0,a.kt)("p",null,"If you are still experiencing problems running Podman in a rootless environment, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/containers/podman/blob/main/rootless.md"},"Shortcomings of Rootless Podman")," page which lists known issues and solutions to known issues in this environment."),(0,a.kt)("p",null,"For more information on Podman and its subcommands, follow the links on the main ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/containers/podman/blob/main/README.md"},"README")," page or the ",(0,a.kt)("a",{parentName:"p",href:"https://podman.io"},"podman.io")," web site."))}c.isMDXComponent=!0}}]);