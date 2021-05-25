(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{100:function(e,n,t){"use strict";var a=t(0),r=t(101);n.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},101:function(e,n,t){"use strict";var a=t(0),r=Object(a.createContext)(void 0);n.a=r},105:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(100),o=t(97),c=t(56),l=t.n(c);var s=37,u=39;n.a=function(e){var n=e.lazy,t=e.block,c=e.defaultValue,d=e.values,m=e.groupId,p=e.className,b=Object(i.a)(),f=b.tabGroupChoices,v=b.setTabGroupChoices,O=Object(a.useState)(c),h=O[0],y=O[1],g=a.Children.toArray(e.children),j=[];if(null!=m){var w=f[m];null!=w&&w!==h&&d.some((function(e){return e.value===w}))&&y(w)}var I=function(e){var n=e.currentTarget,t=j.indexOf(n),a=d[t].value;y(a),null!=m&&(v(m,a),setTimeout((function(){var e,t,a,r,i,o,c,s;(e=n.getBoundingClientRect(),t=e.top,a=e.left,r=e.bottom,i=e.right,o=window,c=o.innerHeight,s=o.innerWidth,t>=0&&i<=s&&r<=c&&a>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(l.a.tabItemActive),setTimeout((function(){return n.classList.remove(l.a.tabItemActive)}),2e3))}),150))},N=function(e){var n,t;switch(e.keyCode){case u:var a=j.indexOf(e.target)+1;t=j[a]||j[0];break;case s:var r=j.indexOf(e.target)-1;t=j[r]||j[j.length-1]}null===(n=t)||void 0===n||n.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},p)},d.map((function(e){var n=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:h===n?0:-1,"aria-selected":h===n,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":h===n}),key:n,ref:function(e){return j.push(e)},onKeyDown:N,onFocus:I,onClick:I},t)}))),n?Object(a.cloneElement)(g.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,n){return Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==h})}))))}},106:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(e){var n=e.children,t=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},80:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return m}));var a=t(3),r=t(7),i=(t(0),t(96)),o=t(105),c=t(106),l={title:"Installation via Docker",description:"Unmanic Installation via Docker",id:"docker"},s={unversionedId:"installation/docker",id:"installation/docker",isDocsHomePage:!1,title:"Installation via Docker",description:"Unmanic Installation via Docker",source:"@site/docs/installation/docker.mdx",sourceDirName:"installation",slug:"/installation/docker",permalink:"/docs/installation/docker",version:"current",frontMatter:{title:"Installation via Docker",description:"Unmanic Installation via Docker",id:"docker"},sidebar:"docs",previous:{title:"Installation via Python pip",permalink:"/docs/installation/pip"},next:{title:"Installation on Unraid",permalink:"/docs/installation/unraid"}},u=[{value:"Supported Architectures",id:"supported-architectures",children:[]},{value:"Running Unmanic",id:"running-unmanic",children:[]}],d={toc:u};function m(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"supported-architectures"},"Supported Architectures"),Object(i.b)("p",null,"The Unmanic docker image is built for the following architectures:"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"It may work on others such as Windows or MacOS but they will not be officially supported at this time."))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"linux/amd64"),Object(i.b)("li",{parentName:"ul"},"linux/arm/v7"),Object(i.b)("li",{parentName:"ul"},"linux/arm64")),Object(i.b)("h2",{id:"running-unmanic"},"Running Unmanic"),Object(i.b)("p",null,"There are a number of ways you may start Unmanic with Docker."),Object(i.b)("p",null,"The most basic method is shown below:"),Object(i.b)(o.a,{defaultValue:"docker_run",values:[{label:"Docker run",value:"docker_run"},{label:"Docker-compose",value:"docker_compose"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"docker_run",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"  PUID=$(id -u)\n  PGID=$(id -g)\n\n  # CONFIG_DIR - Where you settings are saved\n  CONFIG_DIR=/config\n\n  # TZ - Your time zone\n  TZ=Pacific/Auckland\n\n  # LIBRARY_DIR - The location/locations of your library\n  LIBRARY_DIR=/library\n\n  # CACHE_DIR - A tmpfs or and folder for temporary conversion files\n  CACHE_DIR=/tmp/unmanic\n\n  docker run -ti --rm \\\n      -e PUID=${PUID} \\\n      -e PGID=${PGID} \\\n      -e TZ=${TZ} \\\n      -p 8888:8888 \\\n      -v ${CONFIG_DIR}:/config \\\n      -v ${LIBRARY_DIR}:/library \\\n      -v ${CACHE_DIR}:/tmp/unmanic \\\n      josh5/unmanic:latest\n"))),Object(i.b)(c.a,{value:"docker_compose",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"  # Variables that will need to be changed:\n  #     <PUID>                            -  User id for folder/file permissions\n  #     <PGID>                            -  Group id for folder/file permissions\n  #     <TZ>                              -  Your time zone, eg - Pacific/Auckland\n  #     <PATH_TO_CONFIG>                  -  Path where Unmanic will store config files\n  #     <PATH_TO_LIBRARY>                 -  Path where you store the files that Unmanic will scan\n  #     <PATH_TO_ENCODE_CACHE>            -  Cache path for in-progress encoding tasks\n  #\n\n  ---\n  version: '2.4'\n  services:\n    unmanic:\n      container_name: unmanic\n      image: josh5/unmanic:latest\n      ports:\n        - 8888:8888\n      environment:\n        - PUID=<PUID>\n        - PGID=<PGID>\n        - TZ=<TZ>\n      volumes:\n        - <PATH_TO_CONFIG>:/config\n        - <PATH_TO_LIBRARY>:/library\n        - <PATH_TO_ENCODE_CACHE>:/tmp/unmanic\n")))),Object(i.b)("p",null,"For more advanced methods using hardware acceleration, see these articles:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/advanced/hardware_accelerated_encoding_nvenc"},"NVENC Hardware Acceleration")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/advanced/hardware_accelerated_encoding_vaapi"},"VAAPI Hardware Acceleration"))))}m.isMDXComponent=!0},96:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),u=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=u(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),p=a,b=d["".concat(o,".").concat(p)]||d[p]||m[p]||i;return t?r.a.createElement(b,c(c({ref:n},s),{},{components:t})):r.a.createElement(b,c({ref:n},s))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},97:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}}}]);