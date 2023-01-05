"use strict";(self.webpackChunkunmanic_documentation=self.webpackChunkunmanic_documentation||[]).push([[6653],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),u=o,h=p["".concat(l,".").concat(u)]||p[u]||m[u]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9845:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),o=(n(7294),n(3905)),r=n(2004);const i={title:"Installation on Unraid",description:"Unmanic Installation on Unraid",id:"unraid"},s=void 0,l={unversionedId:"installation/unraid",id:"installation/unraid",title:"Installation on Unraid",description:"Unmanic Installation on Unraid",source:"@site/docs/installation/unraid.mdx",sourceDirName:"installation",slug:"/installation/unraid",permalink:"/docs/installation/unraid",draft:!1,tags:[],version:"current",frontMatter:{title:"Installation on Unraid",description:"Unmanic Installation on Unraid",id:"unraid"},sidebar:"docs",previous:{title:"Installation via Docker",permalink:"/docs/installation/docker"},next:{title:"Installation on Synology",permalink:"/docs/installation/synology"}},d={},c=[{value:"Video Guide:",id:"video-guide",level:2},{value:"Instructions:",id:"instructions",level:2},{value:"Some optional configuration steps:",id:"some-optional-configuration-steps",level:2},{value:"Nvidia GPU hardware encoding:",id:"nvidia-gpu-hardware-encoding",level:3},{value:"Intel hardware encoding:",id:"intel-hardware-encoding",level:3},{value:"AMD hardware encoding:",id:"amd-hardware-encoding",level:3}],p={toc:c};function m(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"video-guide"},"Video Guide:"),(0,o.kt)(r.Z,{url:"https://www.youtube.com/watch?v=8_t_DJ6azkw",light:!0,controls:!0,mdxType:"ReactPlayer"}),(0,o.kt)("h2",{id:"instructions"},"Instructions:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to the ",(0,o.kt)("strong",{parentName:"li"},"Apps"),' tab and search for "Unmanic" in the search box.'),(0,o.kt)("li",{parentName:"ol"},'Click on the "Install" button')),(0,o.kt)("img",{className:"screenshot",src:n(5834).Z}),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Modify the container variables as desired:")),(0,o.kt)("img",{className:"screenshot",src:n(3151).Z}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("h3",{parentName:"admonition",id:"configuring-ram-as-the-cache-directory"},"Configuring RAM as the ",(0,o.kt)("em",{parentName:"h3"},"Cache Directory"),"."),(0,o.kt)("p",{parentName:"admonition"},"There are two main options:"),(0,o.kt)("h4",{parentName:"admonition",id:"1-use-devshm"},"1) Use /dev/shm/"),(0,o.kt)("p",{parentName:"admonition"},"The simplest way to set the ",(0,o.kt)("em",{parentName:"p"},"Cache Directory")," to a ramdisk is to set this path as ",(0,o.kt)("inlineCode",{parentName:"p"},"/dev/shm/unmanic"),".\nThis path is a tmpfs mount, however it is limited to 50% of your total system memory by default."),(0,o.kt)("hr",{parentName:"admonition"}),(0,o.kt)("h4",{parentName:"admonition",id:"2-create-a-custom-tmpfs-mount"},"2) Create a custom tmpfs mount"),(0,o.kt)("p",{parentName:"admonition"},"If you wish to use more than 50% of your memory, add the following snippet to your Extra Parameters\n(changing ",(0,o.kt)("em",{parentName:"p"},"20g")," to the upper limit of whatever amount of RAM you wish to use):"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"--mount type=tmpfs,destination=/tmp/unmanic_tmpfs,tmpfs-size=20g\n")),(0,o.kt)("p",{parentName:"admonition"},"This does not reserve this amount of RAM for the container. It only creates a mount limited to the amount specified.\nYou will still be limited to the amount of RAM available on the system as shared by all other processes."),(0,o.kt)("hr",{parentName:"admonition"}),(0,o.kt)("p",{parentName:"admonition"},"Whatever option above that you choose, you will need ensure you have enough available memory for the container to use this location as the cache.")),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},'Scroll to the bottom and click the "APPLY" button')),(0,o.kt)("p",null,"Once the image is downloaded you should see it appear in the ",(0,o.kt)("strong",{parentName:"p"},"Docker")," tab."),(0,o.kt)("h2",{id:"some-optional-configuration-steps"},"Some optional configuration steps:"),(0,o.kt)("h3",{id:"nvidia-gpu-hardware-encoding"},"Nvidia GPU hardware encoding:"),(0,o.kt)("p",null,"To use your NVIDIA GPU for hardware encoding in this container, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install the ",(0,o.kt)("a",{parentName:"li",href:"https://forums.unraid.net/topic/98978-plugin-nvidia-driver/"},"Unraid Nvidia-Driver Plugin")," to install\nan up-to-date NVIDIA driver onto your Unraid server.")),(0,o.kt)("img",{className:"screenshot",src:n(6742).Z}),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},'Toggle this Docker Container template editor to "Advanced View".'),(0,o.kt)("li",{parentName:"ol"},'In the "Extra Parameters" field, add "--runtime=nvidia".')),(0,o.kt)("img",{className:"screenshot",src:n(1978).Z}),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},'Expand the template "Show more settings..." section near the bottom.'),(0,o.kt)("li",{parentName:"ol"},'In the "NVIDIA_VISIBLE_DEVICES" variable, copy your GPU UUID (can be found in the Unraid Nvidia Plugin. See that forum thread for details)')),(0,o.kt)("img",{className:"screenshot",src:n(1962).Z}),(0,o.kt)("p",null,"Once you have completed these steps, you should be able to use the ",(0,o.kt)("strong",{parentName:"p"},"h264_nvenc")," and ",(0,o.kt)("strong",{parentName:"p"},"hvec_nvenc")," encoders."),(0,o.kt)("h3",{id:"intel-hardware-encoding"},"Intel hardware encoding:"),(0,o.kt)("p",null,"To use your INTEL Processor for hardware encoding in this container, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install the ",(0,o.kt)("a",{parentName:"li",href:"https://forums.unraid.net/topic/92865-support-ich777-nvidiadvb-kernel-helperbuilder-docker/"},"Intel-GPU-TOP Plugin"),".")),(0,o.kt)("img",{className:"screenshot",src:n(4813).Z}),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},'Toggle this Docker Container template editor to "Advanced View".'),(0,o.kt)("li",{parentName:"ol"},'In the "Extra Parameters" field, add "--device=/dev/dri".')),(0,o.kt)("img",{className:"screenshot",src:n(403).Z}),(0,o.kt)("p",null,"Once you have completed these steps, you should be able to use the ",(0,o.kt)("strong",{parentName:"p"},"h264_vaapi")," and ",(0,o.kt)("strong",{parentName:"p"},"hevc_vaapi")," encoders."),(0,o.kt)("h3",{id:"amd-hardware-encoding"},"AMD hardware encoding:"),(0,o.kt)("p",null,"To use your AMD APU/GPU for hardware encoding in this container, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install the ",(0,o.kt)("a",{parentName:"li",href:"https://forums.unraid.net/topic/92865-support-ich777-nvidiadvb-kernel-helperbuilder-docker/"},"Radeon-TOP Plugin"),".")),(0,o.kt)("img",{className:"screenshot",src:n(183).Z}),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},'Toggle this Docker Container template editor to "Advanced View".'),(0,o.kt)("li",{parentName:"ol"},'In the "Extra Parameters" field, add "--device=/dev/dri".')),(0,o.kt)("img",{className:"screenshot",src:n(403).Z}),(0,o.kt)("p",null,"Once you have completed these steps, you should be able to use the ",(0,o.kt)("strong",{parentName:"p"},"h264_vaapi")," and ",(0,o.kt)("strong",{parentName:"p"},"hevc_vaapi")," encoders."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Ryzen APU transcode performance is heavily determined by the speed of your RAM."),(0,o.kt)("p",{parentName:"admonition"},"Setting RAM speed from 2400 to 3200 changed transcode times from around 10 minutes to around 5."),(0,o.kt)("p",{parentName:"admonition"},"Also, if you have the option in your BIOS, set your iGPU RAM to at least 1GB (So long as you can afford to subtract that from your available RAM).")))}m.isMDXComponent=!0},5834:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/unraid-install-ca1-a87655d2ed8c6f2f8964476215aa0777.png"},4813:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/unraid-intel-top-plugin-acd4c754403b98dc07f404ff9fe358fa.png"},6742:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/unraid-nvidia-plugin-d75086535837dc4ec96fe941f2c5755d.png"},183:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/unraid-radeon-top-plugin-992fb707317c30e1c8ac6ceb1ea83fb7.png"},403:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/unraid-unmanic-template-dri-device-extra-params-6257d8d4514f09b0482358fbcfc1b6d9.png"},1978:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/unraid-unmanic-template-nvidia-extra-params-52b98423e5a527063baa11dd84161f87.png"},1962:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/unraid-unmanic-template-nvidia-gpu-1f2d09896e31d11bb4a5ab75e4d13c58.png"},3151:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/unraid-unmanic-template-volumes-ce9c93265da5b0bb5257ef445da52a79.png"}}]);