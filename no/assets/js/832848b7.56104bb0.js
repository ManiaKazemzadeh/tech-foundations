"use strict";(self.webpackChunktech_foundations=self.webpackChunktech_foundations||[]).push([[347],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1387:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={sidebar_position:1},s="Managing IP",l={unversionedId:"networking/the-internet-protocol/managing-ip",id:"networking/the-internet-protocol/managing-ip",isDocsHomePage:!1,title:"Managing IP",description:"Summary",source:"@site/i18n/no/docusaurus-plugin-content-docs/current/networking/the-internet-protocol/managing-ip.md",sourceDirName:"networking/the-internet-protocol",slug:"/networking/the-internet-protocol/managing-ip",permalink:"/tech-foundations/no/docs/networking/the-internet-protocol/managing-ip",editUrl:"https://github.com/jamesbelchamber/tech-foundations/edit/main/docs/networking/the-internet-protocol/managing-ip.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"networkingSidebar",previous:{title:"Routing",permalink:"/tech-foundations/no/docs/networking/the-internet-protocol/routing"},next:{title:"IP Subnets",permalink:"/tech-foundations/no/docs/networking/the-internet-protocol/ip-subnets"}},u=[{value:"Summary",id:"summary",children:[{value:"Objectives",id:"objectives",children:[],level:3},{value:"Key Points",id:"key-points",children:[],level:3}],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"managing-ip"},"Managing IP"),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("h3",{id:"objectives"},"Objectives"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"By the end of this session you should be able to:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Explain how computers are assigned IP addresses with the Dynamic Host Configuration Protocol"),(0,i.kt)("li",{parentName:"ul"},"Explain how Network Address Translation works"),(0,i.kt)("li",{parentName:"ul"},"Explain what IPv6 is")),(0,i.kt)("h3",{id:"key-points"},"Key Points"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"IP addresses of devices change based on which network they are in"),(0,i.kt)("li",{parentName:"ul"},"Organizations automatically assign IP addresses to new devices using DHCP"),(0,i.kt)("li",{parentName:"ul"},"NAT is a method of having more devices join the network than the number of allowed IP addresses for that network"),(0,i.kt)("li",{parentName:"ul"},"IP version v6 is the new Internet Protocol designed to increase the number of available IP addresses")))}d.isMDXComponent=!0}}]);