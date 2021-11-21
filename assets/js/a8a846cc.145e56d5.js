"use strict";(self.webpackChunktech_foundations=self.webpackChunktech_foundations||[]).push([[51],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2349:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:2},u="IP Subnets",l={unversionedId:"networking/the-internet-protocol/ip-subnets",id:"networking/the-internet-protocol/ip-subnets",isDocsHomePage:!1,title:"IP Subnets",description:"Summary",source:"@site/docs/networking/the-internet-protocol/ip-subnets.md",sourceDirName:"networking/the-internet-protocol",slug:"/networking/the-internet-protocol/ip-subnets",permalink:"/tech-foundations/docs/networking/the-internet-protocol/ip-subnets",editUrl:"https://github.com/jamesbelchamber/tech-foundations/edit/main/docs/networking/the-internet-protocol/ip-subnets.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"networkingSidebar",previous:{title:"Managing IP",permalink:"/tech-foundations/docs/networking/the-internet-protocol/managing-ip"}},c=[{value:"Summary",id:"summary",children:[{value:"Objectives",id:"objectives",children:[],level:3},{value:"Key Points",id:"key-points",children:[],level:3}],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ip-subnets"},"IP Subnets"),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("h3",{id:"objectives"},"Objectives"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"By the end of this session you should be able to:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Explain how an IP address is constructed"),(0,i.kt)("li",{parentName:"ul"},"Explain how and why IP networks are divided up into subnets")),(0,i.kt)("h3",{id:"key-points"},"Key Points"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"IP addresses have two parts:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Network (prefix) bits: The first bits of the IP address that is assigned to an org, used to route packets to the network from outside."),(0,i.kt)("li",{parentName:"ul"},"Host bits: The last bits, used to route packets internally."))),(0,i.kt)("li",{parentName:"ul"},"Subnets allow organizations to split an IP block into smaller networks, while still appearing as a single network from the outside")))}d.isMDXComponent=!0}}]);