"use strict";(self.webpackChunktech_foundations=self.webpackChunktech_foundations||[]).push([[24],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=m(n),c=i,h=p["".concat(l,".").concat(c)]||p[c]||u[c]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var m=2;m<r;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},215:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return d},default:function(){return p}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],s={sidebar_position:0},l="Linux and you",m={unversionedId:"linux/introduction-to-linux/linux-and-you",id:"linux/introduction-to-linux/linux-and-you",isDocsHomePage:!1,title:"Linux and you",description:"Summary",source:"@site/docs/linux/introduction-to-linux/linux-and-you.md",sourceDirName:"linux/introduction-to-linux",slug:"/linux/introduction-to-linux/linux-and-you",permalink:"/tech-foundations/no/docs/linux/introduction-to-linux/linux-and-you",editUrl:"https://github.com/jamesbelchamber/tech-foundations/edit/main/docs/linux/introduction-to-linux/linux-and-you.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"linuxSidebar",previous:{title:"Linux Foundations",permalink:"/tech-foundations/no/docs/linux/index"},next:{title:"Open Source Software",permalink:"/tech-foundations/no/docs/linux/introduction-to-linux/Open Source Software"}},d=[{value:"Summary",id:"summary",children:[{value:"Objectives",id:"objectives",children:[],level:3},{value:"Key Points",id:"key-points",children:[],level:3}],level:2},{value:"Breakdown",id:"breakdown",children:[{value:"What is an operating system?",id:"what-is-an-operating-system",children:[],level:3},{value:"Examples of Operating Systems",id:"examples-of-operating-systems",children:[],level:3},{value:"Computers without Operating Systems",id:"computers-without-operating-systems",children:[],level:3},{value:"What does an Operating System do?",id:"what-does-an-operating-system-do",children:[{value:"Hardware Abstraction",id:"hardware-abstraction",children:[],level:4},{value:"Common Services",id:"common-services",children:[],level:4},{value:"Software management",id:"software-management",children:[],level:4}],level:3},{value:"What is Linux?",id:"what-is-linux",children:[{value:"Linux is a Kernel",id:"linux-is-a-kernel",children:[],level:4},{value:"Linux is a family of Operating Systems",id:"linux-is-a-family-of-operating-systems",children:[],level:4}],level:3},{value:"Linux Distributions",id:"linux-distributions",children:[],level:3}],level:2}],u={toc:d};function p(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"linux-and-you"},"Linux and you"),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("h3",{id:"objectives"},"Objectives"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"By the end of this session you should be able to:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Explain what operating systems are, and what a kernel is"),(0,r.kt)("li",{parentName:"ul"},"Explain what the Linux Kernel is, and what Linux Distributions are")),(0,r.kt)("h3",{id:"key-points"},"Key Points"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An Operating System is a piece of software that manages both hardware and software resources, and provides common services for other software to run"),(0,r.kt)("li",{parentName:"ul"},"All Operating Systems include a kernel, which handles interactions between hardware and software"),(0,r.kt)("li",{parentName:"ul"},"Many distributions of Linux exist, which are all different Operating Systems that use the same Linux kernel"),(0,r.kt)("li",{parentName:"ul"},"Linux can be found in most homes, built into smartphones, smart devices, games consoles and network equipment")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In this session we use the concept of an ",(0,r.kt)("em",{parentName:"p"},"analogy")," quite extensively. An analogy is a comparison between two things that are similar in some way. When you draw an analogy between two different things, you are comparing them because you want to make a concept easier to understand."))),(0,r.kt)("h2",{id:"breakdown"},"Breakdown"),(0,r.kt)("h3",{id:"what-is-an-operating-system"},"What is an operating system?"),(0,r.kt)("p",null,"An Operating System is system software that manages computer hardware, software resources, and provides common services for computer programs."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},'An Operating System is commonly abbreviated as "OS" - pronounced both "Oss" and "Oh-Es".'))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Early Operating Systems were people! Early computers were far too expensive to be used by one person - instead, programmers would drop off their programs with Machine Operators (much like you may drop off the post). These people would then schedule and run the programs on the computer, returning the results (on paper) to the programmer."))),(0,r.kt)("h3",{id:"examples-of-operating-systems"},"Examples of Operating Systems"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Windows")," - a family of Operating Systems built by Microsoft. Designed primarily for desktop, laptop and server computers."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Android")," - an Operating System ",(0,r.kt)("em",{parentName:"li"},"mostly")," built by Google. Designed primarily for touchscreen devices like smartphones and tablets."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"macOS")," - an Operating System built by Apple. Designed for desktop, laptop and server computers."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"iOS/ipadOS/tvOS/watchOS")," - a family of Operating Systems based on macOS and built by Apple for their smartphones, tablets, televisions and smartwatches.")),(0,r.kt)("h3",{id:"computers-without-operating-systems"},"Computers without Operating Systems"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Without an Operating System",src:n(2169).Z})),(0,r.kt)("p",null,"Computers can run without an Operating Systems - early computers often did, and very lightweight computers still do."),(0,r.kt)("p",null,"Programmers can interface with the hardware directly - this can be faster, and result in less bugs. However, the programmer will have to write code for every piece of hardware the program might run on!"),(0,r.kt)("p",null,"The Nintendo Entertainment System (NES) is an example of a computer without an Operating System. Game Developers needed to squeeze every bit of performance from the console, and since every NES used the same hardware it was easier to do so."),(0,r.kt)("h3",{id:"what-does-an-operating-system-do"},"What does an Operating System do?"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"With an Operating System",src:n(2175).Z})),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Analogy")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"An Operating system is like waiting staff in a restaurant; while a customer could place their order directly with the chef, and the chef could simply bring food out to the table, this quickly breaks down under the stress of more than one or two customers. Waiting staff can queue orders, reserve tables, clean up mess, provide menus and manage resource constraints. Waiting staff allow multiple chefs and multiple customers to efficiently use a restaurant."))),(0,r.kt)("h4",{id:"hardware-abstraction"},"Hardware Abstraction"),(0,r.kt)("p",null,"An Operating System can ",(0,r.kt)("em",{parentName:"p"},"abstract"),' the hardware from the software. This means programmers don\'t need to write their software to work with e.g. every make and model of mouse. Instead, hardware manufacturers just write a driver for an Operating System, and the Operating System offers a generic "mouse" for the programmer to write their software to use.'),(0,r.kt)("p",null,"This doesn't just save time when writing software - it also means that as new hardware comes out over time, old software will automatically keep working with it."),(0,r.kt)("h4",{id:"common-services"},"Common Services"),(0,r.kt)("p",null,'Keeping the time is surprisingly complex - you need to consider everything from timezones to leap seconds. An Operating System can provide this as a service to programmers, who can simply ask for "the time" and not worry about anything else.'),(0,r.kt)("p",null,"This is an example of a service that lots of programs need to operate, but that is quite complex. Users and programmers both prefer to just set the time once. Other examples includ print queues and language preferences."),(0,r.kt)("h4",{id:"software-management"},"Software management"),(0,r.kt)("p",null,"With the NES, changing programs was as simple as plugging in a new cartridge. Modern computers are more complex; users expect to run multiple programs at once, install programs to the computer directly, update programs, and easily launch them."),(0,r.kt)("p",null,"Modern Operating Systems provide interfaces to start programs (e.g. the Start Menu), keep track of running programs (e.g. the Taskbar), Install, Update, and Remove programs. Some Operating Systems even come with application stores to buy programs!"),(0,r.kt)("h3",{id:"what-is-linux"},"What is Linux?"),(0,r.kt)("h4",{id:"linux-is-a-kernel"},"Linux is a Kernel"),(0,r.kt)("p",null,"Linux is an operating system ",(0,r.kt)("em",{parentName:"p"},"kernel")," - the part of the operating system that handles the interactions between hardware and software components. To create an Operating System you need to combine the kernel with many other tools, created by many different projects."),(0,r.kt)("h4",{id:"linux-is-a-family-of-operating-systems"},"Linux is a family of Operating Systems"),(0,r.kt)("p",null,"Linux is included as part of many operating systems - which we call ",(0,r.kt)("em",{parentName:"p"},"distributions")," of Linux. However, since these distributions are all quite similar, they are collectively also known as \u201cLinux\u201d."),(0,r.kt)("h3",{id:"linux-distributions"},"Linux Distributions"),(0,r.kt)("p",null,"Each distribution combines the Linux Kernel with all the tools required to provide a useful Operating System. Each Linux Distribution is an Operating System."),(0,r.kt)("p",null,"Different distributions bundle different software, and configure that software differently by default. This may be for philosophical reasons, to target different applications, or simply because engineers disagree on the best way to fix a problem. However, most distributions share the similar fundamentals."),(0,r.kt)("p",null,"Linux Distributions you may have heard of include Ubuntu, Red Hat Enterprise Linux, Fedora, Arch, Manjaro and CentOS."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Analogy")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Linux is like an engine; an engine needs to take inputs (fuel, acceleration, etc) and apply an output (power). An engine could be placed in lots of different cars, and alongside lots of different components, to make many different cars with different strengths and weaknesses. The cars are like distributions."))))}p.isMDXComponent=!0},2175:function(e,t,n){t.Z=n.p+"assets/images/with-operating-system-527259db6e8e231b7229d0d5e2bfc8bf.png"},2169:function(e,t,n){t.Z=n.p+"assets/images/without-operating-system-6e51ba986a5687c31d24e727547ec9fa.png"}}]);