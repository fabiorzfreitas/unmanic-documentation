"use strict";(self.webpackChunkunmanic_documentation=self.webpackChunkunmanic_documentation||[]).push([[6602],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=c(n),g=a,h=u["".concat(l,".").concat(g)]||u[g]||m[g]||o;return n?i.createElement(h,s(s({ref:t},d),{},{components:n})):i.createElement(h,s({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var c=2;c<o;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2238:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return m}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],r={title:"Link Settings",description:"Unmanic Configuration - Link",id:"link_settings"},l=void 0,c={unversionedId:"configuration/link_settings",id:"configuration/link_settings",title:"Link Settings",description:"Unmanic Configuration - Link",source:"@site/docs/configuration/linking.mdx",sourceDirName:"configuration",slug:"/configuration/link_settings",permalink:"/docs/configuration/link_settings",tags:[],version:"current",frontMatter:{title:"Link Settings",description:"Unmanic Configuration - Link",id:"link_settings"},sidebar:"docs",previous:{title:"Configuring Plugins",permalink:"/docs/configuration/plugins/configuring_plugins"},next:{title:"Plugin Development Overview",permalink:"/docs/development/developing_plugins"}},d={},m=[{value:"Local",id:"local",level:2},{value:"Name this installation",id:"name-this-installation",level:3},{value:"Authentication",id:"authentication",level:3},{value:"Remote installations",id:"remote-installations",level:2},{value:"Adding a new Link",id:"adding-a-new-link",level:3},{value:"Connection status",id:"connection-status",level:3},{value:"Configure remote installation Link",id:"configure-remote-installation-link",level:3},{value:"Receive tasks from this installation when workers are available",id:"receive-tasks-from-this-installation-when-workers-are-available",level:4},{value:"Send tasks to this installation when workers are available",id:"send-tasks-to-this-installation-when-workers-are-available",level:4},{value:"Enable distributed worker count for this link",id:"enable-distributed-worker-count-for-this-link",level:4}],u={toc:m};function g(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("img",{className:"screenshot",style:{width:"400px"},src:n(3347).Z}),(0,o.kt)("p",null,"Under the ",(0,o.kt)("strong",{parentName:"p"},"Link")," section of your Unmanic settings you will find options for linking multiple Unmanic installations."),(0,o.kt)("p",null,"Linking Unmanic installations is completely optional and in no way required in order to use the application, however,\nit opens a range of options that further extend what Unmanic can do."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"local"},"Local"),(0,o.kt)("h3",{id:"name-this-installation"},"Name this installation"),(0,o.kt)("p",null,"Set a name for this installation. This will be used to identify it once linked with other installatins."),(0,o.kt)("h3",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,"Set credentials for accessing the remote installation."),(0,o.kt)("h2",{id:"remote-installations"},"Remote installations"),(0,o.kt)("h3",{id:"adding-a-new-link"},"Adding a new Link"),(0,o.kt)("p",null,"To add a new link, open the ",(0,o.kt)("em",{parentName:"p"},"Add remote installation")," dialog."),(0,o.kt)("img",{className:"screenshot",style:{width:"300px"},src:n(6550).Z}),(0,o.kt)("p",null,"Insert the ",(0,o.kt)("strong",{parentName:"p"},"Hostname")," or ",(0,o.kt)("strong",{parentName:"p"},"IP")," as well as the ",(0,o.kt)("strong",{parentName:"p"},"port")," of the remote installation that you wish to link to."),(0,o.kt)("img",{className:"screenshot",style:{width:"300px"},src:n(7313).Z}),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If your remote installation is behind a proxy adding a TLS SSL layer, be sure to add ",(0,o.kt)("em",{parentName:"p"},"https://")," before the hostname or IP."))),(0,o.kt)("p",null,"Once you add a new link, it will be displayed immediately on both installations."),(0,o.kt)("h3",{id:"connection-status"},"Connection status"),(0,o.kt)("img",{className:"screenshot",style:{width:"400px"},src:n(5904).Z}),(0,o.kt)("p",null,"When a remote installation is available, the Unmanic icon will display in colour. ",(0,o.kt)("img",{className:"inline-text-screenshot",src:n(6696).Z,title:"Connected Link"})),(0,o.kt)("img",{className:"screenshot",style:{width:"400px"},src:n(6635).Z}),(0,o.kt)("p",null,"When the remote installation is not available, the Unmanic icon will display in greyscale. ",(0,o.kt)("img",{className:"inline-text-screenshot",src:n(7161).Z,title:"Disconnected Link"})),(0,o.kt)("p",null,"If both installations show the other remote installation icon in colour, then the link will be synchronised bi-directionally.\nThat is to say, modifying the configuration either of the installations will sync that configuration over to the other."),(0,o.kt)("p",null,"If only one installation shows the other remote installation icon in colour, then the link is synchronised one way.\nThis means that settings will be pushed out from only the installation that is able to see the other."),(0,o.kt)("p",null,"Unmanic does not require that links be configured to sync bi-directionally.\nBecause of this, a link may traverse more complicated network configurations such as a NAT."),(0,o.kt)("h3",{id:"configure-remote-installation-link"},"Configure remote installation Link"),(0,o.kt)("p",null,"Click the configure button ",(0,o.kt)("img",{className:"inline-text-screenshot",src:n(798).Z,title:"Connected Link"})," to open\nthe link's configuration."),(0,o.kt)("img",{className:"screenshot",style:{width:"500px"},src:n(3301).Z}),(0,o.kt)("p",null,"A link can be configured with the following options:"),(0,o.kt)("h4",{id:"receive-tasks-from-this-installation-when-workers-are-available"},"Receive tasks from this installation when workers are available"),(0,o.kt)("p",null,"When selected, this local installation will be configured to receive tasks from the remote installations whenever local\nWorkers are Idle and there aren't any Pending Tasks are in the queue."),(0,o.kt)("h4",{id:"send-tasks-to-this-installation-when-workers-are-available"},"Send tasks to this installation when workers are available"),(0,o.kt)("p",null,"When selected, the remote installation will be configured to receive tasks from this local installation.\nThe same configuration option as above, but reversed."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This configuration option is disabled if the remote installation is not available.\nHowever, if you set this option while the remote installation is available and then that installation becomes unavailable,\nthis option will not be disabled."),(0,o.kt)("img",{className:"screenshot",style:{width:"500px"},src:n(2590).Z}))),(0,o.kt)("p",null,"If this option is selected, you will also have the option to preload a task on the remote installation Pending Tasks queue."),(0,o.kt)("img",{className:"screenshot",style:{width:"500px"},src:n(9289).Z}),(0,o.kt)("p",null,"When sending tasks to a remote installation, you may also configure Unmanic to preload the remote Pending Task queue\nwith an additional Task. This will speed up processing time as it allows the remote worker to begin carrying out jobs\non the new Task without needing to wait for the network transfer."),(0,o.kt)("h4",{id:"enable-distributed-worker-count-for-this-link"},"Enable distributed worker count for this link"),(0,o.kt)("img",{className:"screenshot",style:{width:"500px"},src:n(139).Z}),(0,o.kt)("p",null,"Under some circumstances you may wish to link multiple installations together to share in a collective number of Workers."),(0,o.kt)("p",null,"This option gives you the ability to set a Worker count target to maintain across all linked installations with this\noption selected."),(0,o.kt)("p",null,"The value selected for the Worker count target will be pushed to the remote installation."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The Worker target value is global across all installations that you select this option for. Changing it in the configuration\nof one link will also change it for all others."))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'The Worker target is a "target". Meaning that all configured installations do their best to maintain this number of Workers.\nHowever, from time to time you may see the actually distributed Worker count increase over this or maintain below this.\nThis is normal. Assume this value is plus or minus one.'))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When wanting to maintain two libraries independently on the same PC, it is a good idea to link those installations and\nconfigure a Worker target to share amongst those installations."),(0,o.kt)("p",{parentName:"div"},"This way, you get to maintain custom plugin stacks for each library, with the benefit of limiting the overall Worker count\nfor that PC to whatever target you configure here."))))}g.isMDXComponent=!0},798:function(e,t,n){t.Z=n.p+"assets/images/unmanic-configure-icon-03d08e19ba2f312a66f3d75e5dfb3820.png"},139:function(e,t,n){t.Z=n.p+"assets/images/unmanic-link-configure-distributed-worker-count-c6a29e6278ffdd36f75d2a90094df445.png"},2590:function(e,t,n){t.Z=n.p+"assets/images/unmanic-link-configure-send-disabled-29327236d1e7728dc9d9ce00c97a21c0.png"},9289:function(e,t,n){t.Z=n.p+"assets/images/unmanic-link-configure-send-with-preload-2e81e66708e1edf3a74dcd7e1f8a0c35.png"},3301:function(e,t,n){t.Z=n.p+"assets/images/unmanic-link-configure-34ca9447ae562127b796c9b6784eb363.png"},6696:function(e,t,n){t.Z=n.p+"assets/images/unmanic-link-connected-icon-caaa6c3f2e6714ad3320008fe29d9840.png"},7161:function(e,t,n){t.Z=n.p+"assets/images/unmanic-link-disconnected-icon-e91d39323a06598794592ba106da3252.png"},6550:function(e,t){t.Z="data:image/png;base64,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"},7313:function(e,t){t.Z="data:image/png;base64,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"},5904:function(e,t,n){t.Z=n.p+"assets/images/unmanic-settings-link-connected-af044669a1077455b00b25a4a58992a6.png"},6635:function(e,t,n){t.Z=n.p+"assets/images/unmanic-settings-link-disconnected-e55bc486d45a33ff95f2958cc81f1a15.png"},3347:function(e,t,n){t.Z=n.p+"assets/images/unmanic-settings-link-e39b29a922888925bd5f709693d3bf6e.png"}}]);