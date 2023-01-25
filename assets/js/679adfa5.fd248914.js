"use strict";(self.webpackChunkunmanic_documentation=self.webpackChunkunmanic_documentation||[]).push([[1179],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),m=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(n),d=a,k=c["".concat(s,".").concat(d)]||c[d]||u[d]||r;return n?i.createElement(k,l(l({ref:t},p),{},{components:n})):i.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var m=2;m<r;m++)l[m]=n[m];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3384:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var i=n(7462),a=(n(7294),n(3905));const r={title:"Linking Unmanic Installations",description:"Linking Unmanic Installations",id:"unmanic_link_installations"},l=void 0,o={unversionedId:"guides/unmanic_link_installations",id:"guides/unmanic_link_installations",title:"Linking Unmanic Installations",description:"Linking Unmanic Installations",source:"@site/docs/guides/unmanic_link_installations.md",sourceDirName:"guides",slug:"/guides/unmanic_link_installations",permalink:"/docs/guides/unmanic_link_installations",draft:!1,tags:[],version:"current",frontMatter:{title:"Linking Unmanic Installations",description:"Linking Unmanic Installations",id:"unmanic_link_installations"},sidebar:"docs",previous:{title:"Install Unmanic - Kubernetes",permalink:"/docs/guides/unmanic_kubernetes_install"},next:{title:"NVIDIA Hardware Acceleration on Linux",permalink:"/docs/guides/nvidia_support_unmanic_on_linux"}},s={},m=[{value:"Instructions",id:"instructions",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup",id:"setup",level:3}],p={toc:m};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/Difficulty-moderate-orange?style=flat",alt:"Difficulty"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/Setup%20Time-10%20minutes-orange?style=flat",alt:"Setup Time"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fredrikbaberg"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Original%20Author-fredrikbaberg-lightgrey?style=flat?style=plastic&logo=github",alt:"Original Author"}))),(0,a.kt)("p",null,"Multiple installations of Unmanic can be linked, this allows the distribution of tasks to be processed."),(0,a.kt)("p",null,"This guide will describe the use of a main installation with access to the library, with a remote installation that does the work."),(0,a.kt)("h2",{id:"instructions"},"Instructions"),(0,a.kt)("h3",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"At least two installs of Unmanic:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"One install will be called ",(0,a.kt)("inlineCode",{parentName:"li"},"main"),", this has access to a folder with files to process."),(0,a.kt)("li",{parentName:"ul"},"The other install will be called ",(0,a.kt)("inlineCode",{parentName:"li"},"remote"),", this has to be reachable from ",(0,a.kt)("inlineCode",{parentName:"li"},"main")," but does not require access to the files. Files will automatically be transfered from ",(0,a.kt)("inlineCode",{parentName:"li"},"main")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"remote")," and back.")))),(0,a.kt)("h3",{id:"setup"},"Setup"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"On ",(0,a.kt)("inlineCode",{parentName:"p"},"main"),", setup a ",(0,a.kt)("a",{parentName:"p",href:"/docs/configuration/libraries/adding_libraries"},"Library")," following the normal instructions. Let us call the library ",(0,a.kt)("inlineCode",{parentName:"p"},"Guide"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"On ",(0,a.kt)("inlineCode",{parentName:"p"},"remote"),", create a new library. The name of this library has to be ",(0,a.kt)("strong",{parentName:"p"},"exactly")," the same as the library in ",(0,a.kt)("inlineCode",{parentName:"p"},"main"),", in this case ",(0,a.kt)("inlineCode",{parentName:"p"},"Guide"),". You can either export the library from ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," and import it on ",(0,a.kt)("inlineCode",{parentName:"p"},"remote"),', see tip below, or set it up manually. This library only needs plugins for making changes, i.e. encoding. "Scanning" plugins, such as filter by size, are not needed.'))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Library name must be identical on both installations.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"It is recommended to create a new library for this, instead of using the default library.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/configuration/link_settings"},"Link")," the installs:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"On ",(0,a.kt)("inlineCode",{parentName:"li"},"main"),", add ",(0,a.kt)("inlineCode",{parentName:"li"},"remote")," as remote installation and enable ",(0,a.kt)("em",{parentName:"li"},'"Send tasks to this installation when workers are available"'),". ",(0,a.kt)("em",{parentName:"li"},'"Preload some tasks on the remote installation Pending Tasks queue"')," is optional.",(0,a.kt)("img",{className:"screenshot",src:n(3895).Z}))))),(0,a.kt)("p",null,"Pending tasks on ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," should now be sent to ",(0,a.kt)("inlineCode",{parentName:"p"},"remote"),". This may take a few minutes, depending on network speed."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can export the library configuration from ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," using the export button, copy the code shown in the panel that opens."),(0,a.kt)("img",{className:"screenshot",src:n(9037).Z}),(0,a.kt)("p",{parentName:"admonition"},"You can then use import on ",(0,a.kt)("inlineCode",{parentName:"p"},"remote"),", paste the code you got from ",(0,a.kt)("inlineCode",{parentName:"p"},"main"),"."),(0,a.kt)("img",{className:"screenshot",src:n(2209).Z})))}c.isMDXComponent=!0},2209:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/import_config-14b96ba794daac45fb156c146e05caed.png"},9037:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/export_config-9ec2e9ec2adbb0b39ac4e5c77f21dd7f.png"},3895:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/link_from_main-a735355afd42c2ff12588d30bf81a52e.png"}}]);