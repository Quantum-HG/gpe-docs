"use strict";(self.webpackChunkgame_pencil_engine_docs=self.webpackChunkgame_pencil_engine_docs||[]).push([[1081],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),p=i,g=d["".concat(u,".").concat(p)]||d[p]||m[p]||a;return r?n.createElement(g,o(o({ref:t},l),{},{components:r})):n.createElement(g,o({ref:t},l))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8396:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const a={},o="Welcome to our basic Scrum Master guide for Pawbyte and Game Pencil Engine.",s={unversionedId:"quick-start-guide/scrummaster-guide",id:"quick-start-guide/scrummaster-guide",title:"Welcome to our basic Scrum Master guide for Pawbyte and Game Pencil Engine.",description:"Please consult this guide weekly ( evrey Monday by End Of Day).",source:"@site/docs/quick-start-guide/scrummaster-guide.md",sourceDirName:"quick-start-guide",slug:"/quick-start-guide/scrummaster-guide",permalink:"/docs/quick-start-guide/scrummaster-guide",draft:!1,editUrl:"https://github.com/pawbyte/gpe-docs/edit/main/docs/quick-start-guide/scrummaster-guide.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"The Editor",permalink:"/docs/quick-start-guide/editor"},next:{title:"Building from Source",permalink:"/docs/building"}},u={},c=[{value:"Please consult this guide weekly ( evrey Monday by End Of Day).",id:"please-consult-this-guide-weekly--evrey-monday-by-end-of-day",level:2},{value:"Versioning and security checking",id:"versioning-and-security-checking",level:3},{value:"Website and Programming languages",id:"website-and-programming-languages",level:2}],l={toc:c},d="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"welcome-to-our-basic-scrum-master-guide-for-pawbyte-and-game-pencil-engine"},"Welcome to our basic Scrum Master guide for Pawbyte and Game Pencil Engine."),(0,i.kt)("h2",{id:"please-consult-this-guide-weekly--evrey-monday-by-end-of-day"},"Please consult this guide weekly ( evrey Monday by End Of Day)."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"versioning-and-security-checking"},"Versioning and security checking"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Check PawByte website key web resources"),(0,i.kt)("li",{parentName:"ul"},"( Any security or crucial feature changes?) "),(0,i.kt)("li",{parentName:"ul"},"review changelogs")),(0,i.kt)("h2",{id:"website-and-programming-languages"},"Website and Programming languages"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"PHP version"),(0,i.kt)("li",{parentName:"ul"},"WordPress"),(0,i.kt)("li",{parentName:"ul"},"Hestia Pro theme"),(0,i.kt)("li",{parentName:"ul"},"Docusaurus"),(0,i.kt)("li",{parentName:"ul"},"C/C++ ")),(0,i.kt)("p",null,"##Game Pencil Modules\n-- SDL2\n-- Raylib\n-- SFML"),(0,i.kt)("p",null,"#Create issues in related repositories about updating versions and explain reason why update is needed."),(0,i.kt)("h1",{id:"check-on-current-issues-in-each-repo"},"Check on current issues in each repo."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Message users with assigned issues asking for updates\n-- If PR is open, review and check for merge conflicts.\n-- If user is unable to complete task due to tech problem, comment on issue.\n-- If user is able to complete task, comment on issue current status.")))}m.isMDXComponent=!0}}]);