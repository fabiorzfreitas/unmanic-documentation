"use strict";(self.webpackChunkunmanic_documentation=self.webpackChunkunmanic_documentation||[]).push([[7362],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),d=i,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||r;return t?a.createElement(g,o(o({ref:n},u),{},{components:t})):a.createElement(g,o({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1898:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var a=t(7462),i=t(3366),r=(t(7294),t(3905)),o=["components"],l={title:"Unmanic Kubernetes Install guide",description:"Unmanic Kubernetes Install guide",id:"unmanic_kubernetes_install"},s=void 0,c={unversionedId:"guides/unmanic_kubernetes_install",id:"guides/unmanic_kubernetes_install",title:"Unmanic Kubernetes Install guide",description:"Unmanic Kubernetes Install guide",source:"@site/docs/guides/unmanic_Kubernetes_Guide.md",sourceDirName:"guides",slug:"/guides/unmanic_kubernetes_install",permalink:"/docs/guides/unmanic_kubernetes_install",tags:[],version:"current",frontMatter:{title:"Unmanic Kubernetes Install guide",description:"Unmanic Kubernetes Install guide",id:"unmanic_kubernetes_install"},sidebar:"docs",previous:{title:"Unmanic MacOS Install guide",permalink:"/docs/guides/unmanic_macos_install"}},u={},m=[{value:"Requirements",id:"requirements",level:2},{value:"Running Unmanic",id:"running-unmanic",level:2},{value:"Tuning Kubernetes Unmanic Configuration",id:"tuning-kubernetes-unmanic-configuration",level:2},{value:"Accessing Unmanic via NodePort",id:"accessing-unmanic-via-nodeport",level:2}],p={toc:m};function d(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/Difficulty-moderate-orange?style=flat",alt:"Difficulty"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/Setup%20Time-30%20minutes-orange?style=flat",alt:"Setup Time"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/preimmortal"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Original%20Author-preimmortal-lightgrey?style=flat?style=plastic&logo=github",alt:"Original Author"}))),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"This requires a functional Kubernetes Cluster or similar (k3s, minikube, etc)."),(0,r.kt)("p",null,"For Kubernetes installation instructions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/setup/"},"Kubernetes Getting Started Guide"))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"K3S 1.22.7 was used to create this guide."))),(0,r.kt)("h2",{id:"running-unmanic"},"Running Unmanic"),(0,r.kt)("p",null,"There are two parts to running Unmanic in Kubernetes."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Deployment - The unmanic container configuration"),(0,r.kt)("li",{parentName:"ol"},"Service - The service that exposes the unmanic container to outside the Kubernetes cluster")),(0,r.kt)("p",null,"For a basic deployment and service, create a file ",(0,r.kt)("inlineCode",{parentName:"p"},"unmanic.yaml")," and append the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: unmanic-deployment\nspec:\n  selector:\n    matchLabels:\n      app: unmanic\n  replicas: 1\n  strategy:\n    type: Recreate\n  template:\n    metadata:\n      labels:\n        app: unmanic\n    spec:\n      containers:\n        - name: unmanic\n          image: josh5/unmanic:latest\n          ports:\n            - containerPort: 8888\n              name: unmanic-port\n              protocol: TCP\n          env:\n            - name: PUID\n              value: "<PUID>"\n            - name: PGID\n              value: "<PGID>"\n          volumeMounts:\n            - mountPath: /library\n              name: library\n            - mountPath: /config\n              name: unmanic-config\n            - mountPath: /tmp/unmanic\n              name: unmanic-cache\n      volumes:\n        - name: library\n          nfs:\n            server: <NFS_SERVER_ADDRESS>\n            path: </PATH/TO/NFS/SHARE>\n        - name: unmanic-config\n          emptyDir: {} # Please use a more permanent storage, see Tuning section\n        - name: unmanic-cache\n          emptyDir: {}\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: unmanic-service\nspec:\n  selector:\n    app: unmanic\n  type: NodePort\n  ports:\n    - name: unmanic-port\n      port: 8888\n      targetPort: 8888\n      nodePort: 30000\n')),(0,r.kt)("p",null,"To start the deployment and service, run the following command: ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl create -f unmanic.yaml")),(0,r.kt)("p",null,"To delete the deployment and service, run the following command: ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl delete -f unmanic.yaml")),(0,r.kt)("h2",{id:"tuning-kubernetes-unmanic-configuration"},"Tuning Kubernetes Unmanic Configuration"),(0,r.kt)("p",null,"Note that the following values should be tuned based on need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using NFS to share the library path to Kubernetes, please update as necessary if using CIFS or another file sharing service"),(0,r.kt)("li",{parentName:"ul"},"Using emptyDir for the config and cache path, please update emptyDir to more permanent paths"),(0,r.kt)("li",{parentName:"ul"},"Using NodePort to expose the Unmanic service, please update when using a load balancer or other method to expose the unmanic deployment")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"It is important not to use ",(0,r.kt)("inlineCode",{parentName:"p"},"emptyDir")," for the ",(0,r.kt)("inlineCode",{parentName:"p"},"unmanic-config")," in a permanent installation because the config will be deleted upon stopping the deployment.\nPlease consider using a more permanent volume such as iSCSI or backing up to NFS."),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/storage/volumes/"},"Kubernetes Volumes"))))),(0,r.kt)("h2",{id:"accessing-unmanic-via-nodeport"},"Accessing Unmanic via NodePort"),(0,r.kt)("p",null,"Unmanic will be available via the web browser at following address: ",(0,r.kt)("inlineCode",{parentName:"p"},"<Kubernetes_Cluster_Address>:30000")))}d.isMDXComponent=!0}}]);