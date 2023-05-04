"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[3403],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),h=r,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8788:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={},i=void 0,l={unversionedId:"tutorials/podman-install-certificate-authority",id:"tutorials/podman-install-certificate-authority",title:"podman-install-certificate-authority",description:"PODMAN logo",source:"@site/docs/tutorials/podman-install-certificate-authority.md",sourceDirName:"tutorials",slug:"/tutorials/podman-install-certificate-authority",permalink:"/website-new/docs/tutorials/podman-install-certificate-authority",draft:!1,editUrl:"https://github.com/containers/website-new/docs/tutorials/podman-install-certificate-authority.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-for-windows",permalink:"/website-new/docs/tutorials/podman-for-windows"},next:{title:"podman_tutorial",permalink:"/website-new/docs/tutorials/podman_tutorial"}},c={},s=[{value:"Method one",id:"method-one",level:3},{value:"Alternative Method",id:"alternative-method",level:3},{value:"Final Notes",id:"final-notes",level:3}],d={toc:s},p="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"PODMAN logo",src:n(8762).Z,width:"867",height:"222"})),(0,r.kt)("h1",{id:"install-certificate-authority"},"Install Certificate Authority"),(0,r.kt)("p",null,"Organizations may create their own local certificate authority (CA) or acquire one from a third party. This may mean more than one certificate, such as one or more intermediate certificates and a root certificate, for example. In any case, it is necessary to add the certificate authority (CA) certificate(s) so that it can be employed for various use cases."),(0,r.kt)("h3",{id:"method-one"},"Method one"),(0,r.kt)("p",null,"Certificates may be either individual or concatenated (bundles). The following steps are one method to add such certificates to Podman. It is assumed that Podman is running and the certificate(s) to be installed are available on an accessible server via curl. If such access is not possible, an alternative method follows."),(0,r.kt)("p",null,"First, assuming a running Podman machine, ssh into the machine:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"podman machine ssh\n")),(0,r.kt)("p",null,"If Podman is running in the default rootless mode, an additional command is required to get to a root shell:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[core@localhost ~]$ sudo su -\n")),(0,r.kt)("p",null,'After issuing the above command, the prompt should change to indicate the "root" instead of the "core" user.'),(0,r.kt)("p",null,"Next, while in the machine, change to the directory where the certificate(s) should be installed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[root@localhost ~]# cd /etc/pki/ca-trust/source/anchors\n")),(0,r.kt)("p",null,"Then use curl to download the certificate. Notes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The -k is only necessary if connecting securely to a server for which the certificate is not yet trusted"),(0,r.kt)("li",{parentName:"ul"},"The MY-SERVER.COM/SOME-CERTIFICATE.pem should be replaced as appropriate")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[root@localhost anchors]# curl -k -o some-certificate.pem https://MY-SERVER.COM/SOME-CERTIFICATE.pem\n")),(0,r.kt)("p",null,"Repeat as necessary for multiple certificates."),(0,r.kt)("p",null,"Once all of the certificates have been downloaded, run the command to add the certificates to the list of trusted CAs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[root@localhost anchors]# update-ca-trust\n")),(0,r.kt)("p",null,"Exit the machine:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[root@localhost anchors]# exit\n")),(0,r.kt)("p",null,'If the "sudo su -" command was used to switch to a root shell as described above, an additional exit command is needed to exit the machine:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[core@localhost ~]$ exit\n")),(0,r.kt)("h3",{id:"alternative-method"},"Alternative Method"),(0,r.kt)("p",null,"If the above method is for some reason not practical or desirable, the certificate may be created using vi."),(0,r.kt)("p",null,"As above, assuming a running Podman machine, ssh into the machine:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"podman machine ssh\n")),(0,r.kt)("p",null,'If the prompt starts with "core" instead of "root", switch to a root shell:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[core@localhost ~]$ sudo su -\n")),(0,r.kt)("p",null,"Next, change to the directory where the certificate(s) should be installed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[root@localhost ~]# cd /etc/pki/ca-trust/source/anchors\n")),(0,r.kt)("p",null,"Then use vi to create the certificate."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[root@localhost ~]# vi SOME-CERTIFICATE.pem\n")),(0,r.kt)("p",null,"After vi opens, copy the certificate to the clipboard, then in insert mode, paste the clipboard contents to vi. Lastly, save the file and close vi."),(0,r.kt)("p",null,"Repeat as necessary for multiple certificates."),(0,r.kt)("p",null,"Once all of the certificates have been created, run the command to add the certificates to the list of trusted CAs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[root@localhost anchors]# update-ca-trust\n")),(0,r.kt)("p",null,"Exit the machine:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[root@localhost anchors]# exit\n")),(0,r.kt)("p",null,'If the "sudo su -" command described above was used, an additional exit command is needed:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[core@localhost ~]$ exit\n")),(0,r.kt)("h3",{id:"final-notes"},"Final Notes"),(0,r.kt)("p",null,"The certificate installation will persist during machine restarts. There is no need to stop and start the machine to begin using the certificate."))}u.isMDXComponent=!0},8762:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/podman-logo-orig-712a0500fc9e0758c3d1b3f0ef44e38f.png"}}]);