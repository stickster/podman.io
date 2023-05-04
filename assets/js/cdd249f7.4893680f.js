"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[806],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),d=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(m.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(n),u=r,k=s["".concat(m,".").concat(u)]||s[u]||c[u]||o;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={},i=void 0,l={unversionedId:"commands/podman-remote",id:"commands/podman-remote",title:"podman-remote",description:"% podman-remote 1",source:"@site/docs/commands/podman-remote.md",sourceDirName:"commands",slug:"/commands/podman-remote",permalink:"/website-new/docs/commands/podman-remote",draft:!1,editUrl:"https://github.com/containers/website-new/docs/commands/podman-remote.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-push",permalink:"/website-new/docs/commands/podman-push"},next:{title:"podman-rename",permalink:"/website-new/docs/commands/podman-rename"}},m={},d=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"GLOBAL OPTIONS",id:"global-options",level:2},{value:"<strong>--connection</strong>=<em>name</em>, <strong>-c</strong>",id:"--connectionname--c",level:4},{value:"<strong>--help</strong>, <strong>-h</strong>",id:"--help--h",level:4},{value:"<strong>--identity</strong>=<em>path</em>",id:"--identitypath",level:4},{value:"<strong>--log-level</strong>=<em>level</em>",id:"--log-levellevel",level:4},{value:"<strong>--url</strong>=<em>value</em>",id:"--urlvalue",level:4},{value:"<strong>--version</strong>",id:"--version",level:4},{value:"Environment Variables",id:"environment-variables",level:2},{value:"<strong>CONTAINERS_CONF</strong>",id:"containers_conf",level:4},{value:"<strong>CONTAINER_CONNECTION</strong>",id:"container_connection",level:4},{value:"<strong>CONTAINER_HOST</strong>",id:"container_host",level:4},{value:"<strong>CONTAINER_SSHKEY</strong>",id:"container_sshkey",level:4},{value:"Exit Status",id:"exit-status",level:2},{value:"COMMANDS",id:"commands",level:2},{value:"FILES",id:"files",level:2},{value:"SEE ALSO",id:"see-also",level:2}],p={toc:d},s="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"% podman-remote 1"),(0,r.kt)("h2",{id:"name"},"NAME"),(0,r.kt)("p",null,"podman-remote - A remote CLI for Podman: A Simple management tool for pods, containers and images."),(0,r.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman-remote")," ","[",(0,r.kt)("em",{parentName:"p"},"options"),"]"," ",(0,r.kt)("em",{parentName:"p"},"command")),(0,r.kt)("h2",{id:"description"},"DESCRIPTION"),(0,r.kt)("p",null,"Podman (Pod Manager) is a fully featured container engine that is a simple daemonless tool.\nPodman provides a Docker-CLI comparable command line that eases the transition from other\ncontainer engines and allows the management of pods, containers and images. Simply put: ",(0,r.kt)("inlineCode",{parentName:"p"},"alias docker=podman"),".\nMost Podman commands can be run as a regular user, without requiring additional\nprivileges."),(0,r.kt)("p",null,"Podman uses Buildah(1) internally to create container images. Both tools share image\n(not container) storage, hence each can use or manipulate images (but not containers)\ncreated by the other."),(0,r.kt)("p",null,"Podman-remote provides a local client interacting with a Podman backend node through a RESTful API tunneled through a ssh connection. In this context, a Podman node is a Linux system with Podman installed on it and the API service activated. Credentials for this session can be passed in using flags, environment variables, or in ",(0,r.kt)("inlineCode",{parentName:"p"},"containers.conf"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"containers.conf")," file should be placed under ",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/.config/containers/containers.conf")," on Linux and Mac and ",(0,r.kt)("inlineCode",{parentName:"p"},"%APPDATA%\\containers\\containers.conf")," on Windows."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman ","[GLOBAL OPTIONS]")),(0,r.kt)("h2",{id:"global-options"},"GLOBAL OPTIONS"),(0,r.kt)("h4",{id:"--connectionname--c"},(0,r.kt)("strong",{parentName:"h4"},"--connection"),"=",(0,r.kt)("em",{parentName:"h4"},"name"),", ",(0,r.kt)("strong",{parentName:"h4"},"-c")),(0,r.kt)("p",null,"Remote connection name"),(0,r.kt)("p",null,"Overrides environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"CONTAINER_CONNECTION")," if set."),(0,r.kt)("h4",{id:"--help--h"},(0,r.kt)("strong",{parentName:"h4"},"--help"),", ",(0,r.kt)("strong",{parentName:"h4"},"-h")),(0,r.kt)("p",null,"Print usage statement"),(0,r.kt)("h4",{id:"--identitypath"},(0,r.kt)("strong",{parentName:"h4"},"--identity"),"=",(0,r.kt)("em",{parentName:"h4"},"path")),(0,r.kt)("p",null,"Path to ssh identity file. If the identity file has been encrypted, Podman prompts the user for the passphrase.\nIf no identity file is provided and no user is given, Podman defaults to the user running the podman command.\nPodman prompts for the login password on the remote server."),(0,r.kt)("p",null,"Identity value resolution precedence:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"command line value"),(0,r.kt)("li",{parentName:"ul"},"environment variable ",(0,r.kt)("inlineCode",{parentName:"li"},"CONTAINER_SSHKEY"),", if ",(0,r.kt)("inlineCode",{parentName:"li"},"CONTAINER_HOST")," is found"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"containers.conf"))),(0,r.kt)("h4",{id:"--log-levellevel"},(0,r.kt)("strong",{parentName:"h4"},"--log-level"),"=",(0,r.kt)("em",{parentName:"h4"},"level")),(0,r.kt)("p",null,"Log messages above specified level: debug, info, warn, error (default), fatal or panic"),(0,r.kt)("h4",{id:"--urlvalue"},(0,r.kt)("strong",{parentName:"h4"},"--url"),"=",(0,r.kt)("em",{parentName:"h4"},"value")),(0,r.kt)("p",null,"URL to access Podman service (default from ",(0,r.kt)("inlineCode",{parentName:"p"},"containers.conf"),', rootless "unix://run/user/$UID/podman/podman.sock" or as root "unix://run/podman/podman.sock).'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CONTAINER_HOST")," is of the format ",(0,r.kt)("inlineCode",{parentName:"li"},"<schema>://[<user[:<password>]@]<host>[:<port>][<path>]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CONTAINER_PROXY")," is of the format ",(0,r.kt)("inlineCode",{parentName:"li"},"<socks5|socks5h>://[<user[:<password>]@]<host>[:<port>]"))),(0,r.kt)("p",null,"Details:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"schema")," is one of:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ssh")," (default): a local unix(7) socket on the named ",(0,r.kt)("inlineCode",{parentName:"li"},"host")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"port"),", reachable via SSH"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tcp"),": an unencrypted, unauthenticated TCP connection to the named ",(0,r.kt)("inlineCode",{parentName:"li"},"host")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"port"),", can work with proxy if ",(0,r.kt)("inlineCode",{parentName:"li"},"CONTAINER_PROXY")," is set"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"unix"),": a local unix(7) socket at the specified ",(0,r.kt)("inlineCode",{parentName:"li"},"path"),", or the default for the user"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"user")," will default to either ",(0,r.kt)("inlineCode",{parentName:"li"},"root")," or the current running user (",(0,r.kt)("inlineCode",{parentName:"li"},"ssh")," only)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"password")," has no default (",(0,r.kt)("inlineCode",{parentName:"li"},"ssh")," only)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"host")," must be provided and is either the IP or name of the machine hosting the Podman service (",(0,r.kt)("inlineCode",{parentName:"li"},"ssh")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"tcp"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"port")," defaults to 22 (",(0,r.kt)("inlineCode",{parentName:"li"},"ssh")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"tcp"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path")," defaults to either ",(0,r.kt)("inlineCode",{parentName:"li"},"/run/podman/podman.sock"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},"/run/user/$UID/podman/podman.sock")," if running rootless (",(0,r.kt)("inlineCode",{parentName:"li"},"unix"),"), or must be explicitly specified (",(0,r.kt)("inlineCode",{parentName:"li"},"ssh"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CONTAINER_PROXY"),": use proxy (",(0,r.kt)("inlineCode",{parentName:"li"},"socks5")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"socks5h"),") to access Podman service (",(0,r.kt)("inlineCode",{parentName:"li"},"tcp")," only)")),(0,r.kt)("p",null,"URL value resolution precedence:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"command line value"),(0,r.kt)("li",{parentName:"ul"},"environment variable ",(0,r.kt)("inlineCode",{parentName:"li"},"CONTAINER_HOST")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"containers.conf")," ",(0,r.kt)("inlineCode",{parentName:"li"},"service_destinations")," table"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"unix://run/podman/podman.sock"))),(0,r.kt)("p",null,"Remote connections use local containers.conf for default."),(0,r.kt)("p",null,"Some example URL values in valid formats:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"unix://run/podman/podman.sock"),(0,r.kt)("li",{parentName:"ul"},"unix://run/user/$UID/podman/podman.sock"),(0,r.kt)("li",{parentName:"ul"},"ssh://notroot@localhost:22/run/user/$UID/podman/podman.sock"),(0,r.kt)("li",{parentName:"ul"},"ssh://root@localhost:22/run/podman/podman.sock"),(0,r.kt)("li",{parentName:"ul"},"tcp://localhost:34451"),(0,r.kt)("li",{parentName:"ul"},"tcp://127.0.0:34451")),(0,r.kt)("h4",{id:"--version"},(0,r.kt)("strong",{parentName:"h4"},"--version")),(0,r.kt)("p",null,"Print the version"),(0,r.kt)("h2",{id:"environment-variables"},"Environment Variables"),(0,r.kt)("p",null,"Podman can set up environment variables from env of ","[engine]"," table in containers.conf. These variables can be overridden by passing environment variables before the ",(0,r.kt)("inlineCode",{parentName:"p"},"podman")," commands."),(0,r.kt)("h4",{id:"containers_conf"},(0,r.kt)("strong",{parentName:"h4"},"CONTAINERS_CONF")),(0,r.kt)("p",null,"Set default locations of containers.conf file"),(0,r.kt)("h4",{id:"container_connection"},(0,r.kt)("strong",{parentName:"h4"},"CONTAINER_CONNECTION")),(0,r.kt)("p",null,"Set default ",(0,r.kt)("inlineCode",{parentName:"p"},"--connection")," value to access Podman service."),(0,r.kt)("h4",{id:"container_host"},(0,r.kt)("strong",{parentName:"h4"},"CONTAINER_HOST")),(0,r.kt)("p",null,"Set default ",(0,r.kt)("inlineCode",{parentName:"p"},"--url")," value to access Podman service."),(0,r.kt)("h4",{id:"container_sshkey"},(0,r.kt)("strong",{parentName:"h4"},"CONTAINER_SSHKEY")),(0,r.kt)("p",null,"Set default ",(0,r.kt)("inlineCode",{parentName:"p"},"--identity")," path to ssh key file value used to access Podman service."),(0,r.kt)("h2",{id:"exit-status"},"Exit Status"),(0,r.kt)("p",null,"The exit code from ",(0,r.kt)("inlineCode",{parentName:"p"},"podman")," gives information about why the container\nfailed to run or why it exited. When ",(0,r.kt)("inlineCode",{parentName:"p"},"podman")," commands exit with a non-zero code,\nthe exit codes follow the ",(0,r.kt)("inlineCode",{parentName:"p"},"chroot")," standard, see below:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"125")," The error is with podman itself"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ podman run --foo busybox; echo $?\nError: unknown flag: --foo\n125\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"126")," Executing a ",(0,r.kt)("em",{parentName:"p"},"contained command")," and the ",(0,r.kt)("em",{parentName:"p"},"command")," cannot be invoked"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ podman run busybox /etc; echo $?\nError: container_linux.go:346: starting container process caused "exec: \\"/etc\\": permission denied": OCI runtime error\n126\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"127")," Executing a ",(0,r.kt)("em",{parentName:"p"},"contained command")," and the ",(0,r.kt)("em",{parentName:"p"},"command"),' cannot be found\n$ podman run busybox foo; echo $?\nError: container_linux.go:346: starting container process caused "exec: \\"foo\\": executable file not found in $PATH": OCI runtime error\n127'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Exit code")," ",(0,r.kt)("em",{parentName:"p"},"contained command")," exit code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ podman run busybox /bin/sh -c 'exit 3'; echo $?\n3\n")),(0,r.kt)("h2",{id:"commands"},"COMMANDS"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Command"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-attach"},"podman-attach(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Attach to a running container.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-build"},"podman-build(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Build a container image using a Dockerfile.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-commit"},"podman-commit(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Create new image based on the changed container.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-container/"},"podman-container(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Manage containers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-cp"},"podman-cp(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Copy files/folders between a container and the local filesystem.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-create"},"podman-create(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Create a new container.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-diff"},"podman-diff(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Inspect changes on a container or image's filesystem.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-events"},"podman-events(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Monitor Podman events")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-export"},"podman-export(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Export a container's filesystem contents as a tar archive.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-generate/"},"podman-generate(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Generate structured data based for a containers and pods.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-healthcheck/"},"podman-healthcheck(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Manage healthchecks for containers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-history"},"podman-history(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Show the history of an image.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-image/"},"podman-image(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Manage images.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-images"},"podman-images(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"List images in local storage.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-import"},"podman-import(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Import a tarball and save it as a filesystem image.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-info"},"podman-info(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Displays Podman related system information.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-init"},"podman-init(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Initialize a container")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-inspect"},"podman-inspect(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Display a container or image's configuration.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-kill"},"podman-kill(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Kill the main process in one or more containers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-load"},"podman-load(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Load an image from a container image archive into container storage.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-logs"},"podman-logs(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Display the logs of a container.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-pause"},"podman-pause(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Pause one or more containers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-pod/"},"podman-pod(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Management tool for groups of containers, called pods.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-port"},"podman-port(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"List port mappings for a container.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-ps"},"podman-ps(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Prints out information about containers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-pull"},"podman-pull(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Pull an image from a registry.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-push"},"podman-push(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Push an image from local storage to elsewhere.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-restart"},"podman-restart(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Restart one or more containers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-rm"},"podman-rm(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Remove one or more containers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-rmi"},"podman-rmi(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Removes one or more locally stored images.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-run"},"podman-run(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Run a command in a new container.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-save"},"podman-save(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Save an image to a container archive.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-start"},"podman-start(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Start one or more containers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-stop"},"podman-stop(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Stop one or more running containers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-system/"},"podman-system(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Manage podman.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-tag"},"podman-tag(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Add an additional name to a local image.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-top"},"podman-top(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Display the running processes of a container.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-unpause"},"podman-unpause(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Unpause one or more containers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-version"},"podman-version(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Display the Podman version information.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/website-new/docs/commands/podman-volume/"},"podman-volume(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"Manage Volumes.")))),(0,r.kt)("h2",{id:"files"},"FILES"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"containers.conf")," (",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/.config/containers/containers.conf"),")"),(0,r.kt)("p",null,"Podman has builtin defaults for command line options. These defaults can be overridden using the containers.conf configuration files."),(0,r.kt)("p",null,"Users can modify defaults by creating the ",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/.config/containers/containers.conf")," file. Podman merges its builtin defaults with the specified fields from this file, if it exists. Fields specified in the users file override the built-in defaults."),(0,r.kt)("p",null,"Podman uses builtin defaults if no containers.conf file is found."),(0,r.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/website-new/docs/podman"},"podman(1)")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/website-new/docs/commands/podman-system/podman-system-service"},"podman-system-service(1)")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/containers/common/blob/main/docs/containers.conf.5.md"},"containers.conf(5)"))))}c.isMDXComponent=!0}}]);