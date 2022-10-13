"use strict";(self.webpackChunkunmanic_documentation=self.webpackChunkunmanic_documentation||[]).push([[6653],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(n),u=i,h=m["".concat(l,".").concat(u)]||m[u]||p[u]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9845:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=n(2004),s=["components"],l={title:"Installation on Unraid",description:"Unmanic Installation on Unraid",id:"unraid"},d=void 0,c={unversionedId:"installation/unraid",id:"installation/unraid",title:"Installation on Unraid",description:"Unmanic Installation on Unraid",source:"@site/docs/installation/unraid.mdx",sourceDirName:"installation",slug:"/installation/unraid",permalink:"/docs/installation/unraid",tags:[],version:"current",frontMatter:{title:"Installation on Unraid",description:"Unmanic Installation on Unraid",id:"unraid"},sidebar:"docs",previous:{title:"Installation via Docker",permalink:"/docs/installation/docker"},next:{title:"Installation on Synology",permalink:"/docs/installation/synology"}},p={},m=[{value:"Video Guide:",id:"video-guide",level:2},{value:"Instructions:",id:"instructions",level:2},{value:"Some optional configuration steps:",id:"some-optional-configuration-steps",level:2},{value:"Nvidia GPU hardware encoding:",id:"nvidia-gpu-hardware-encoding",level:3},{value:"Intel hardware encoding:",id:"intel-hardware-encoding",level:3},{value:"AMD hardware encoding:",id:"amd-hardware-encoding",level:3}],u={toc:m};function h(e){var t=e.components,l=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"video-guide"},"Video Guide:"),(0,r.kt)(o.Z,{url:"https://www.youtube.com/watch?v=8_t_DJ6azkw",light:!0,controls:!0,mdxType:"ReactPlayer"}),(0,r.kt)("h2",{id:"instructions"},"Instructions:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to the ",(0,r.kt)("strong",{parentName:"li"},"Apps"),' tab and search for "Unmanic" in the search box.'),(0,r.kt)("li",{parentName:"ol"},'Click on the "Install" button')),(0,r.kt)("img",{className:"screenshot",src:n(5834).Z}),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Modify the container variables as desired:")),(0,r.kt)("img",{className:"screenshot",src:n(3151).Z}),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("h3",{parentName:"div",id:"configuring-ram-as-the-cache-directory"},"Configuring RAM as the ",(0,r.kt)("em",{parentName:"h3"},"Cache Directory"),"."),(0,r.kt)("p",{parentName:"div"},"There are two main options:"),(0,r.kt)("h4",{parentName:"div",id:"1-use-devshm"},"1) Use /dev/shm/"),(0,r.kt)("p",{parentName:"div"},"The simplest way to set the ",(0,r.kt)("em",{parentName:"p"},"Cache Directory")," to a ramdisk is to set this path as ",(0,r.kt)("inlineCode",{parentName:"p"},"/dev/shm/unmanic"),".\nThis path is a tmpfs mount, however it is limited to 50% of your total system memory by default."),(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("h4",{parentName:"div",id:"2-create-a-custom-tmpfs-mount"},"2) Create a custom tmpfs mount"),(0,r.kt)("p",{parentName:"div"},"If you wish to use more than 50% of your memory, add the following snippet to your Extra Parameters\n(changing ",(0,r.kt)("em",{parentName:"p"},"20g")," to the upper limit of whatever amount of RAM you wish to use):"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"--mount type=tmpfs,destination=/tmp/unmanic_tmpfs,tmpfs-size=20g\n")),(0,r.kt)("p",{parentName:"div"},"This does not reserve this amount of RAM for the container. It only creates a mount limited to the amount specified.\nYou will still be limited to the amount of RAM available on the system as shared by all other processes."),(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("p",{parentName:"div"},"Whatever option above that you choose, you will need ensure you have enough available memory for the container to use this location as the cache."))),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},'Scroll to the bottom and click the "APPLY" button')),(0,r.kt)("p",null,"Once the image is downloaded you should see it appear in the ",(0,r.kt)("strong",{parentName:"p"},"Docker")," tab."),(0,r.kt)("h2",{id:"some-optional-configuration-steps"},"Some optional configuration steps:"),(0,r.kt)("h3",{id:"nvidia-gpu-hardware-encoding"},"Nvidia GPU hardware encoding:"),(0,r.kt)("p",null,"To use your NVIDIA GPU for hardware encoding in this container, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the ",(0,r.kt)("a",{parentName:"li",href:"https://forums.unraid.net/topic/98978-plugin-nvidia-driver/"},"Unraid Nvidia-Driver Plugin")," to install\nan up-to-date NVIDIA driver onto your Unraid server.")),(0,r.kt)("img",{className:"screenshot",src:n(6742).Z}),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},'Toggle this Docker Container template editor to "Advanced View".'),(0,r.kt)("li",{parentName:"ol"},'In the "Extra Parameters" field, add "--runtime=nvidia".')),(0,r.kt)("img",{className:"screenshot",src:n(1978).Z}),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},'Expand the template "Show more settings..." section near the bottom.'),(0,r.kt)("li",{parentName:"ol"},'In the "NVIDIA_VISIBLE_DEVICES" variable, copy your GPU UUID (can be found in the Unraid Nvidia Plugin. See that forum thread for details)')),(0,r.kt)("img",{className:"screenshot",src:n(1962).Z}),(0,r.kt)("p",null,"Once you have completed these steps, you should be able to use the ",(0,r.kt)("strong",{parentName:"p"},"h264_nvenc")," and ",(0,r.kt)("strong",{parentName:"p"},"hvec_nvenc")," encoders."),(0,r.kt)("h3",{id:"intel-hardware-encoding"},"Intel hardware encoding:"),(0,r.kt)("p",null,"To use your INTEL Processor for hardware encoding in this container, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the ",(0,r.kt)("a",{parentName:"li",href:"https://forums.unraid.net/topic/92865-support-ich777-nvidiadvb-kernel-helperbuilder-docker/"},"Intel-GPU-TOP Plugin"),".")),(0,r.kt)("img",{className:"screenshot",src:n(4813).Z}),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},'Toggle this Docker Container template editor to "Advanced View".'),(0,r.kt)("li",{parentName:"ol"},'In the "Extra Parameters" field, add "--device=/dev/dri".')),(0,r.kt)("img",{className:"screenshot",src:n(403).Z}),(0,r.kt)("p",null,"Once you have completed these steps, you should be able to use the ",(0,r.kt)("strong",{parentName:"p"},"h264_vaapi")," and ",(0,r.kt)("strong",{parentName:"p"},"hevc_vaapi")," encoders."),(0,r.kt)("h3",{id:"amd-hardware-encoding"},"AMD hardware encoding:"),(0,r.kt)("p",null,"To use your AMD APU/GPU for hardware encoding in this container, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the ",(0,r.kt)("a",{parentName:"li",href:"https://forums.unraid.net/topic/92865-support-ich777-nvidiadvb-kernel-helperbuilder-docker/"},"Radeon-TOP Plugin"),".")),(0,r.kt)("img",{className:"screenshot",src:n(183).Z}),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},'Toggle this Docker Container template editor to "Advanced View".'),(0,r.kt)("li",{parentName:"ol"},'In the "Extra Parameters" field, add "--device=/dev/dri".')),(0,r.kt)("img",{className:"screenshot",src:n(403).Z}),(0,r.kt)("p",null,"Once you have completed these steps, you should be able to use the ",(0,r.kt)("strong",{parentName:"p"},"h264_vaapi")," and ",(0,r.kt)("strong",{parentName:"p"},"hevc_vaapi")," encoders."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Ryzen APU transcode performance is heavily determined by the speed of your RAM."),(0,r.kt)("p",{parentName:"div"},"Setting RAM speed from 2400 to 3200 changed transcode times from around 10 minutes to around 5."),(0,r.kt)("p",{parentName:"div"},"Also, if you have the option in your BIOS, set your iGPU RAM to at least 1GB (So long as you can afford to subtract that from your available RAM)."))))}h.isMDXComponent=!0},5834:function(e,t,n){t.Z=n.p+"assets/images/unraid-install-ca1-a87655d2ed8c6f2f8964476215aa0777.png"},4813:function(e,t,n){t.Z=n.p+"assets/images/unraid-intel-top-plugin-acd4c754403b98dc07f404ff9fe358fa.png"},6742:function(e,t,n){t.Z=n.p+"assets/images/unraid-nvidia-plugin-d75086535837dc4ec96fe941f2c5755d.png"},183:function(e,t,n){t.Z=n.p+"assets/images/unraid-radeon-top-plugin-992fb707317c30e1c8ac6ceb1ea83fb7.png"},403:function(e,t,n){t.Z=n.p+"assets/images/unraid-unmanic-template-dri-device-extra-params-6257d8d4514f09b0482358fbcfc1b6d9.png"},1978:function(e,t,n){t.Z=n.p+"assets/images/unraid-unmanic-template-nvidia-extra-params-52b98423e5a527063baa11dd84161f87.png"},1962:function(e,t,n){t.Z=n.p+"assets/images/unraid-unmanic-template-nvidia-gpu-1f2d09896e31d11bb4a5ab75e4d13c58.png"},3151:function(e,t,n){t.Z=n.p+"assets/images/unraid-unmanic-template-volumes-ce9c93265da5b0bb5257ef445da52a79.png"}}]);