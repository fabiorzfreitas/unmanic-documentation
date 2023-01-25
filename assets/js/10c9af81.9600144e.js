"use strict";(self.webpackChunkunmanic_documentation=self.webpackChunkunmanic_documentation||[]).push([[4196],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var s=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,s,o=function(e,t){if(null==e)return{};var n,s,o={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=s.createContext({}),c=function(e){var t=s.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return s.createElement(a.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(a,".").concat(m)]||d[m]||p[m]||i;return n?s.createElement(h,r(r({ref:t},u),{},{components:n})):s.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return s.createElement.apply(null,r)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9694:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=n(7462),o=(n(7294),n(3905));const i={title:"Install Unmanic - Windows 10 (WSL + Docker)",description:"Unmanic Windows 10 Install Guide",id:"unmanic_windows_install"},r=void 0,l={unversionedId:"guides/unmanic_windows_install",id:"guides/unmanic_windows_install",title:"Install Unmanic - Windows 10 (WSL + Docker)",description:"Unmanic Windows 10 Install Guide",source:"@site/docs/guides/unmanic_windows_install.md",sourceDirName:"guides",slug:"/guides/unmanic_windows_install",permalink:"/docs/guides/unmanic_windows_install",draft:!1,tags:[],version:"current",frontMatter:{title:"Install Unmanic - Windows 10 (WSL + Docker)",description:"Unmanic Windows 10 Install Guide",id:"unmanic_windows_install"},sidebar:"docs",previous:{title:"Docker-Compose SMB/CIFS mounts",permalink:"/docs/advanced/docker_compose_cifs_mounts"},next:{title:"Install Unmanic - MacOS",permalink:"/docs/guides/unmanic_macos_install"}},a={},c=[{value:"Requirements",id:"requirements",level:2},{value:"1) Checking requirements",id:"1-checking-requirements",level:3},{value:"Instructions",id:"instructions",level:2},{value:"1) Installing WSL 2(Windows subsystem for Linux 2)",id:"1-installing-wsl-2windows-subsystem-for-linux-2",level:3},{value:"2) Mount your media library in WSL 2 Ubuntu",id:"2-mount-your-media-library-in-wsl-2-ubuntu",level:3},{value:"3) Docker for Windows",id:"3-docker-for-windows",level:3},{value:"4) Troubleshooting common issues",id:"4-troubleshooting-common-issues",level:3}],u={toc:c};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,s.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/Difficulty-moderate-orange?style=flat",alt:"Difficulty"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/Setup%20Time-30%20minutes-orange?style=flat",alt:"Setup Time"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/austinsr1"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Original%20Author-austinsr1-lightgrey?style=flat?style=plastic&logo=github",alt:"Original Author"}))),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The process for setting this up on Windows11 should be similar.")),(0,o.kt)("p",null,"This requires Windows 10, Version 1903, Build 18362 or higher."),(0,o.kt)("h3",{id:"1-checking-requirements"},"1) Checking requirements"),(0,o.kt)("p",null,"To check this, press windows key R."),(0,o.kt)("p",null,"In the run dialog, type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"winver\n")),(0,o.kt)("img",{className:"screenshot",src:n(2739).Z}),(0,o.kt)("img",{className:"screenshot",src:n(7280).Z}),(0,o.kt)("p",null,"If you are not running Version 1903, Build 18362 or higher, you can\ndownload the Windows Update Assistant from Microsoft.\n",(0,o.kt)("a",{parentName:"p",href:"https://www.microsoft.com/en-us/software-download/windows10"},"https://www.microsoft.com/en-us/software-download/windows10")," . This\nwill update your system to the newest Windows 10 version."),(0,o.kt)("h2",{id:"instructions"},"Instructions"),(0,o.kt)("h3",{id:"1-installing-wsl-2windows-subsystem-for-linux-2"},"1) Installing WSL 2(Windows subsystem for Linux 2)"),(0,o.kt)("p",null,"As an administrator account, open a cmd window by pressing windows key R"),(0,o.kt)("img",{className:"screenshot",src:n(9237).Z}),(0,o.kt)("p",null,"In the run dialog, enter the command, cmd and click ok. Enter the\nfollowing command in the cmd window:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wsl --install -d Ubuntu\n")),(0,o.kt)("p",null,"Once the command has finished, reboot your computer. "),(0,o.kt)("p",null,"After rebooting, the Ubuntu install will continue. This will take a few\nminutes. Do not close the Ubuntu dialog box while it is installing."),(0,o.kt)("img",{className:"screenshot",src:n(6254).Z}),(0,o.kt)("p",null,"You will eventually see a prompt to Enter new UNIX username: prompt."),(0,o.kt)("img",{className:"screenshot",src:n(3930).Z}),(0,o.kt)("p",null,'Select a username and press enter. It will now prompt for a "New\npassword". Enter a password and press enter. '),(0,o.kt)("p",null,'It will then ask you to "Retype new password". Verify your password and press enter.\nYou will now be at a bash prompt. If at any point, you close the Ubuntu bash window,\nyou can re-open it by pressing windows key R and typing: bash then press ok.'),(0,o.kt)("img",{className:"screenshot",src:n(4459).Z}),(0,o.kt)("h3",{id:"2-mount-your-media-library-in-wsl-2-ubuntu"},"2) Mount your media library in WSL 2 Ubuntu"),(0,o.kt)("p",null,"First, we will make a mount point for our library."),(0,o.kt)("p",null,"To make the changes we need to directories and files, we will use the\nsudo command. This will prompt for the password that you set earlier."),(0,o.kt)("p",null,"As an example, we will use the Windows drive letter Y for the location\nof our library."),(0,o.kt)("p",null,"In your Ubuntu bash window, type: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo mkdir /library\n")),(0,o.kt)("p",null,"This will create a local mount point where Unmanic will be able to see your media."),(0,o.kt)("p",null,"Next, we will want to make sure this drive will be mounted after\nreboots. For this command, we will need to run as root."),(0,o.kt)("p",null,"From the Ubuntu bash window, type: ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo su -")," and press enter. Enter your\npassword when prompted."),(0,o.kt)("p",null,"Next, we will add the drive entry to the fstab file."),(0,o.kt)("p",null,"With the following command, we will want to leave the quotes in place.\nReplace Y with the drive letter of your mounted library."),(0,o.kt)("p",null,"From your Ubuntu bash window, type: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'echo "Y: /library drvfs defaults 0 0" >> /etc/fstab\n')),(0,o.kt)("p",null,"Next, we will need to mount the drive. From the Ubuntu bash window, type: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mount -a\n")),(0,o.kt)("p",null,"To verify the drive is now mounted, type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"df -h\n")),(0,o.kt)("p",null,"The drive will be shown somewhere in the listed entries."),(0,o.kt)("img",{className:"screenshot",src:n(1015).Z}),(0,o.kt)("h3",{id:"3-docker-for-windows"},"3) Docker for Windows"),(0,o.kt)("p",null,"Next we will install Docker for Windows."),(0,o.kt)("p",null,"Docker for Windows can be found at\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/desktop/windows/install/"},"https://docs.docker.com/desktop/windows/install/")),(0,o.kt)("p",null,"Once the Docker Desktop Installer has been downloaded, run the\ninstaller."),(0,o.kt)("p",null,'When the installer opens, make sure the "Install required Windows\ncomponents for WSL 2" is checked. Click Ok to start the installation.'),(0,o.kt)("p",null,"When the installation is complete, it will prompt you to log out of\nwindows. Press the Close and log out button in the Docker installer."),(0,o.kt)("p",null,"After logging back in, Docker will have you accept its terms of use.\nClick the I accept the terms box and hit Accept."),(0,o.kt)("img",{className:"screenshot",src:n(6421).Z}),(0,o.kt)("p",null,"Once the Docker starting message closes, click the Skip tutorial link."),(0,o.kt)("p",null,"Next we will enable WSL2 support in docker. Click the gear icon on the\ntop right of the Docker window to bring up settings."),(0,o.kt)("img",{className:"screenshot",src:n(7154).Z}),(0,o.kt)("p",null,"Click Resources from the left menu and then WSL INTEGRATION"),(0,o.kt)("p",null,"Click the Enable integration with my default WSL distro."),(0,o.kt)("p",null,"Under the Enable integration with additional distros: , enable Ubuntu."),(0,o.kt)("p",null,"Click Apply & Restart."),(0,o.kt)("p",null,"Next we will install the Unmanic docker container."),(0,o.kt)("p",null,"Open the Ubuntu bash window and type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo docker pull josh5/unmanic\n")),(0,o.kt)("p",null,"Finally, we will go to the Unmanic documentation page to get the shell\nscript that will pass all the required flags to Unmanic.\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.unmanic.app/docs/installation/docker"},"https://docs.unmanic.app/docs/installation/docker")),(0,o.kt)("p",null,"In the Ubuntu bash window, type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo nano -w /usr/local/bin/start-unmanic.sh\n")),(0,o.kt)("p",null,"This will open the text editor nano."),(0,o.kt)("img",{className:"screenshot",src:n(6136).Z}),(0,o.kt)("p",null,"Once the nano window is open, copy the block of shellscript from the\nunmanic documentation link above. Switch back to your Ubuntu bash window\nwith nano open and right click anywhere on the screen. This will paste\nin the shellscript copied from the documentation."),(0,o.kt)("p",null,'Next, we will save and exit from nano. Press Ctrl x . You will see a\nmessage "Save modified buffer?" at the bottom left of the window. Type Y\nand press enter to save and exit.'),(0,o.kt)("img",{className:"screenshot",src:n(9779).Z}),(0,o.kt)("p",null,"Next, we will set the shell script to be executable. In the Ubuntu bash\nwindow, type: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo chmod 755 /usr/local/bin/start-unmanic.sh\n")),(0,o.kt)("p",null,"Finally, in the Ubuntu bash window, type: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo start-unmanic.sh\n")),(0,o.kt)("p",null,"If you are running the Windows firewall, you may see a security dialog.\nClick the Allow access button."),(0,o.kt)("img",{className:"screenshot",src:n(814).Z}),(0,o.kt)("p",null,"Unmanic is now running in Docker. To access Unmanic, open a web browser\nwindow to ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8888"},"http://localhost:8888")),(0,o.kt)("h3",{id:"4-troubleshooting-common-issues"},"4) Troubleshooting common issues"),(0,o.kt)("p",null,"Problems can arise if the network connection to the computer is\ninterrupted. If Unmanic can no longer see your library, first check that\nthe network drive is still connected to the file server."),(0,o.kt)("p",null,"If the network drive is connected, and Unmanic still cannot see the\nlibrary, quit Docker by right clicking the Docker icon in the system\ntray and click Quit Docker Desktop. Docker must be quit completely, the\nRestart option will not resolve the issue."),(0,o.kt)("img",{className:"screenshot",src:n(7329).Z}),(0,o.kt)("p",null,"Restart Docker Desktop and restart Unmanic from the Ubuntu bash window."))}d.isMDXComponent=!0},9237:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/cmd-05779fd6c6867ce59c2c616910374c16.png"},1015:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/df-4776a48144c7138bdcae1ef2947161bf.png"},6421:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/docker_starting-075a998ea4abe8589831c588b732cc2a.png"},7154:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/docker_wsl_setup-a8d3baddbce578fdb0602d055c3e28eb.png"},6136:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/new_nano-233e6a8bbf8b7ac7d2408331e9c8641e.png"},6254:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/post_reboot_ubuntu_install-b3115a17cefe47ff33b2aa081684e4fa.png"},7329:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/quit_docker-2739890e0c9464ff766819c457208f8f.png"},4459:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/run_bash-78bd0a38645b492b426c89b6c0d81081.png"},9779:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/save_nano-bbc5c11025d7e21b77e736c689a490b7.png"},3930:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/username-f75075ff71871284259d3a637c301bc0.png"},814:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/windows_security_alert-387453140c788c038406b8f8bd7f6af2.png"},7280:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/winver-3bf61b87bbda8fd542264424bfb633d4.png"},2739:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/winver_run-0ef2f7c960ce738968151c60693162b0.png"}}]);