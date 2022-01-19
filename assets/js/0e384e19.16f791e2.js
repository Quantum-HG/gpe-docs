"use strict";(self.webpackChunkgame_pencil_engine_docs=self.webpackChunkgame_pencil_engine_docs||[]).push([[671],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9881:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={title:"Introduction",sidebar_position:2},s=void 0,c={unversionedId:"intro",id:"intro",title:"Introduction",description:"An introduction to Game Pencil Engine",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",editUrl:"https://github.com/pawbyte/gpe-docs/edit/main/docs/intro.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Introduction",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Welcome - Intro",permalink:"/docs/welcome"},next:{title:"Requirements",permalink:"/docs/quick-start-guide/requirements"}},p=[{value:"An introduction to Game Pencil Engine",id:"an-introduction-to-game-pencil-engine",children:[],level:2},{value:"Getting Started",id:"getting-started",children:[],level:2},{value:"The Editor",id:"the-editor",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"Tutorials",id:"tutorials",children:[],level:2},{value:"The C++ language",id:"the-c-language",children:[],level:2},{value:"Community",id:"community",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"an-introduction-to-game-pencil-engine"},"An introduction to Game Pencil Engine"),(0,a.kt)("p",null,"Game Pencil Engine is one of many open source Game Engines. It has a primary focus on 2D gaming for as many platforms as possible. Game Pencil's swappable backend design. The goal is for you to make your game and if need be easily modify the engine, backend or simply use our out-of-box features."),(0,a.kt)("p",null,"While here you can look into certain features of the engine or editor. You may also look into how the engine works and how to maximize it for your game projects."),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"Some people learn easier by hashing through apis, others may prefer video or written tutorials. Alas, others do well with example projects. Whichever is your best methods for learning we hope this manual can guide you to learn the basics of Game Pencil and game design."),(0,a.kt)("h2",{id:"the-editor"},"The Editor"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://olddocs.gamepencil.net/editor/"},"The editor overview")," provides you with the basics of using editor to create and import resources as well as manage code and ",(0,a.kt)("a",{parentName:"p",href:"https://olddocs.gamepencil.net/scenes/"},"game scenes"),"(levels). The editor applies is based on a dock-based system with room to toggle menu locations to your preference."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://olddocs.gamepencil.net/wp-content/uploads/sites/6/2021/12/editor_cute_kenney_platformer-1024x546.png",alt:"GPE Editor Screenshot"})),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Game Pencil comes with a few examples and more will be added to ",(0,a.kt)("a",{parentName:"p",href:"https://gamepencil.net/examples/"},"our example page here"),". We try to add comments in as many areas as possible to explain features and game logic. Stay tuned for more updates from the community as well as more official examples to come."),(0,a.kt)("h2",{id:"tutorials"},"Tutorials"),(0,a.kt)("h2",{id:"the-c-language"},"The C++ language"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://olddocs.gamepencil.net/wp-content/uploads/sites/6/2021/12/256px-ISO_C_Logo.svg.png",alt:"ISO C++ Logo"})),(0,a.kt)("p",null,"Game Pencil engine uses ",(0,a.kt)("a",{parentName:"p",href:"https://olddocs.gamepencil.net/cplusplus"},"C++")," as it's primary language for developing your games. ",(0,a.kt)("a",{parentName:"p",href:"https://olddocs.gamepencil.net/cplusplus"},"C++")," has been an industry standard for gaming for decades and due to its impressive performance it was selected to be the coding language as well for developers to avoid scripting languages which often time have runtime issues and can have slower performance, especially on older hardware. We have prepared a ",(0,a.kt)("a",{parentName:"p",href:"https://olddocs.gamepencil.net/cplusplus"},"short guide on using C++"),", but we strongly recommend using ",(0,a.kt)("a",{parentName:"p",href:"https://www.cplusplus.com/doc/tutorial/"},"cplusplus.com's official tutorials")," to fully learn about syntax, object-oriented designed and data types."),(0,a.kt)("h2",{id:"community"},"Community"),(0,a.kt)("p",null,"Join our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/dCrCwrQutP"},"discord server")," and engage with other developers and ask for help."))}d.isMDXComponent=!0}}]);