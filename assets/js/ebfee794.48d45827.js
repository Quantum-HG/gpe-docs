"use strict";(self.webpackChunkgame_pencil_engine_docs=self.webpackChunkgame_pencil_engine_docs||[]).push([[305],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=i.createContext({}),m=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=m(e.components);return i.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=m(n),p=o,g=d["".concat(u,".").concat(p)]||d[p]||c[p]||r;return n?i.createElement(g,a(a({ref:t},s),{},{components:n})):i.createElement(g,a({ref:t},s))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var m=2;m<r;m++)a[m]=n[m];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4756:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return m},toc:function(){return s},default:function(){return d}});var i=n(7462),o=n(3366),r=(n(7294),n(3905)),a=["components"],l={title:"Welcome - Intro",hide_title:!0,sidebar_position:1,keyboards:["gpe","intro"]},u=void 0,m={unversionedId:"welcome",id:"welcome",title:"Welcome - Intro",description:"Game Pencil Engine Logo",source:"@site/docs/welcome.md",sourceDirName:".",slug:"/welcome",permalink:"/docs/welcome",editUrl:"https://github.com/pawbyte/gpe-docs/docs/welcome.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Welcome - Intro",hide_title:!0,sidebar_position:1,keyboards:["gpe","intro"]},sidebar:"tutorialSidebar",next:{title:"Introduction",permalink:"/docs/intro"}},s=[{value:"Getting Started",id:"getting-started",children:[],level:2},{value:"Development",id:"development",children:[],level:2},{value:"Community",id:"community",children:[],level:2},{value:"Modules",id:"modules",children:[{value:"Backend Modules(Your game requires one below)",id:"backend-modulesyour-game-requires-one-below",children:[],level:3},{value:"Front-end modules(These make up the bulk of what Game Pencil Engine does)",id:"front-end-modulesthese-make-up-the-bulk-of-what-game-pencil-engine-does",children:[],level:3}],level:2},{value:"Coding Guide",id:"coding-guide",children:[],level:2},{value:"Documentation License",id:"documentation-license",children:[{value:"Creative Commons License",id:"creative-commons-license",children:[],level:3},{value:"Under The Following Terms",id:"under-the-following-terms",children:[],level:3}],level:2},{value:"Reporting Issues With Documentation",id:"reporting-issues-with-documentation",children:[],level:2}],c={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"welcome-to-the-official-game-pencil-user-manual"},"Welcome to the official Game Pencil user manual"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.gamepencil.net/wp-content/uploads/sites/6/2022/01/logo_white-1024x304.png",alt:"Game Pencil Engine Logo"}),"\nWelcome to the official documentation of the ",(0,r.kt)("a",{parentName:"p",href:"htps://www.gamepencil.net",title:"Game Pencil Engine"},"Game Pencil Engine"),", the simple C++ modular game engine. Here you will learn how to get started with the engine, familiarize yourself with it's design and find more detailed information on it's classes, functions, variables and the editor.","\xa0"),(0,r.kt)("p",null,"We will do our best here to get you acquainted with the engine and editor as well as the different backends involved with Game Pencil Engine. There will be coverage on all types of classes, functions, variables and structs. If you are still unable to find the exact thing you are looking for please let us know via Github or Discord, so we can best help you."),(0,r.kt)("p",null,"Please review the table of contents below. Please note, with the engine being modular, we will do our best to include documentation on as many modules as possible which are official module or community created modules that are stable.","\xa0"),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"intro"},"Introduction to Game Pencil Engine")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"quick-start-guide/requirements"},"Quick Start Guide")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#"},"Editor Guide")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#"},"Building Game Pencil from Source"))),(0,r.kt)("h2",{id:"development"},"Development"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Setting up Game Pencil."),(0,r.kt)("li",{parentName:"ul"},"Coding in Game Pencil")),(0,r.kt)("h2",{id:"community"},"Community"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Community groups"),(0,r.kt)("li",{parentName:"ul"},"Contributing code")),(0,r.kt)("h2",{id:"modules"},"Modules"),(0,r.kt)("h3",{id:"backend-modulesyour-game-requires-one-below"},"Backend Modules(Your game requires one below)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Raylib Modules")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"modules/SDL2"},"SDL2 Modules"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"modules/SFML"},"SFML Modules"))),(0,r.kt)("li",{parentName:"ul"},"Irrlicht Modules - ",(0,r.kt)("em",{parentName:"li"},"Not Yet Supported")),(0,r.kt)("li",{parentName:"ul"},"OLC::PixelGameEngine Modules - ",(0,r.kt)("em",{parentName:"li"},"Not Yet Supported")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"modules/comparing-modules"},"Comparing backend modules")))),(0,r.kt)("h3",{id:"front-end-modulesthese-make-up-the-bulk-of-what-game-pencil-engine-does"},"Front-end modules(These make up the bulk of what Game Pencil Engine does)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Audio Modules - ",(0,r.kt)("em",{parentName:"li"},"Coming Soon")),(0,r.kt)("li",{parentName:"ul"},"Cursor Modules - ",(0,r.kt)("em",{parentName:"li"},"Coming Soon")),(0,r.kt)("li",{parentName:"ul"},"Font Modules - ",(0,r.kt)("em",{parentName:"li"},"Coming Soon")),(0,r.kt)("li",{parentName:"ul"},"Input Modules - ",(0,r.kt)("em",{parentName:"li"},"Coming Soon")),(0,r.kt)("li",{parentName:"ul"},"Networking Modules - ",(0,r.kt)("em",{parentName:"li"},"Coming Soon")),(0,r.kt)("li",{parentName:"ul"},"Render Modules - ",(0,r.kt)("em",{parentName:"li"},"Coming Soon")),(0,r.kt)("li",{parentName:"ul"},"Scripting Modules - ",(0,r.kt)("em",{parentName:"li"},"Coming Soon")),(0,r.kt)("li",{parentName:"ul"},"Time Modules - ",(0,r.kt)("em",{parentName:"li"},"Coming Soon")),(0,r.kt)("li",{parentName:"ul"},"Vide Playback Modules - ",(0,r.kt)("em",{parentName:"li"},"Coming Soon")),(0,r.kt)("li",{parentName:"ul"},"Window Modules - ",(0,r.kt)("em",{parentName:"li"},"Coming Soon"))),(0,r.kt)("h2",{id:"coding-guide"},"Coding Guide"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The C++ language - ",(0,r.kt)("em",{parentName:"li"},"Coming Soon")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"gpe-namespace"},"The gpe namespace")),(0,r.kt)("li",{parentName:"ul"},"Engine Classes - ",(0,r.kt)("em",{parentName:"li"},"Coming Soon")),(0,r.kt)("li",{parentName:"ul"},"Engine Functions - ",(0,r.kt)("em",{parentName:"li"},"Coming Soon")),(0,r.kt)("li",{parentName:"ul"},"Engine Variables - ",(0,r.kt)("em",{parentName:"li"},"Coming Soon"))),(0,r.kt)("h2",{id:"documentation-license"},"Documentation License"),(0,r.kt)("h3",{id:"creative-commons-license"},"Creative Commons License"),(0,r.kt)("p",null,"The Game Pencil Engine Documentation is licensed under ",(0,r.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by/4.0/"},"Creative Commons"),"."),(0,r.kt)("p",null,"You are free to"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Share")," \u2014 copy and redistribute the material in any medium or format"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Adapt")," \u2014 remix, transform, and build upon the material\nfor any purpose, even commercially.")),(0,r.kt)("h3",{id:"under-the-following-terms"},"Under The Following Terms"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Attribution")," \u2014 You must ",(0,r.kt)("a",{parentName:"li",href:"https://creativecommons.org/licenses/by/4.0/#"},"give appropriate credit"),", provide a link to the license, and ",(0,r.kt)("a",{parentName:"li",href:"https://creativecommons.org/licenses/by/4.0/#"},"indicate if changes were made"),". You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use")),(0,r.kt)("h2",{id:"reporting-issues-with-documentation"},"Reporting Issues With Documentation"),(0,r.kt)("p",null,"If while reading this documentation you run into any outdated information, typos, errors or omissions please ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pawbyte/gpe-docs/issues"},"submit an issue request")," and include the page URL in your notes."))}d.isMDXComponent=!0}}]);