"use strict";(self.webpackChunkgame_pencil_engine_docs=self.webpackChunkgame_pencil_engine_docs||[]).push([[695],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=o.createContext({}),s=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,d=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(n),m=i,g=p["".concat(d,".").concat(m)]||p[m]||c[m]||l;return n?o.createElement(g,r(r({ref:t},u),{},{components:n})):o.createElement(g,r({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=m;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a[p]="string"==typeof e?e:i,r[1]=a;for(var s=2;s<l;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},487:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var o=n(7462),i=(n(7294),n(3905));const l={title:"Building from Source",sidebar_position:4},r=void 0,a={unversionedId:"building",id:"building",title:"Building from Source",description:"For starters head over to our GitHub repository and download a .zip file containing Game Pencil's source. Extract it and then follow the instructions below.",source:"@site/docs/building.md",sourceDirName:".",slug:"/building",permalink:"/docs/building",draft:!1,editUrl:"https://github.com/pawbyte/gpe-docs/edit/main/docs/building.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Building from Source",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"The Editor",permalink:"/docs/quick-start-guide/editor"},next:{title:"The GPE Namespace",permalink:"/docs/gpe-namespace"}},d={},s=[{value:"C++ Version?",id:"c-version",level:2},{value:"Supported Backend Modules",id:"supported-backend-modules",level:2},{value:"Build via SDL2 modules",id:"build-via-sdl2-modules",level:3},{value:"Build via raylib modules",id:"build-via-raylib-modules",level:3},{value:"Build via SFML modules",id:"build-via-sfml-modules",level:3},{value:"Build via Irrlicht modules",id:"build-via-irrlicht-modules",level:3},{value:"Build via OLC:PixelGameEngine modules",id:"build-via-olcpixelgameengine-modules",level:3}],u={toc:s},p="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"For starters head over to our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pawbyte/Game-Pencil-Engine"},"GitHub repository")," and download a .zip file containing Game Pencil's source. Extract it and then follow the instructions below."),(0,i.kt)("p",null,"It is recommended to use ",(0,i.kt)("a",{parentName:"p",href:"http://www.codeblocks.org/"},"CodeBlocks")," to compile Game Pencil although other IDEs should compile the editor just as fine. We do provide our CodeBlocks project file alongside the source so one does not have to worry about makefiles and you see exactly what we see when we code updates for the editor."),(0,i.kt)("h2",{id:"c-version"},"C++ Version?"),(0,i.kt)("p",null,"Game Pencil's current codebase just uses basic C++ 11 and whichever modular system of your choice. . The \"toughest part\" to compiling Game Pencil is just properly linking and utilizing your Module's dependencies. ",(0,i.kt)("strong",{parentName:"p"},"Please note, some backend modules may require C++17.")),(0,i.kt)("h2",{id:"supported-backend-modules"},"Supported Backend Modules"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://olddocs.gamepencil.net/including-sdl2-modules/"},(0,i.kt)("img",{parentName:"a",src:"https://olddocs.gamepencil.net/wp-content/uploads/sites/6/2021/03/SDL_logo.png",alt:"SDL Logo"}))),(0,i.kt)("h3",{id:"build-via-sdl2-modules"},(0,i.kt)("a",{parentName:"h3",href:"https://olddocs.gamepencil.net/including-sdl2-modules/"},"Build via SDL2 modules")),(0,i.kt)("p",null,"Our quickstart guide to including and building from the cross-platform king that is known as SDL2."),(0,i.kt)("p",null,"Github repository: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pawbyte/gpe-sdl2"},"Download source from github")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://olddocs.gamepencil.net/including-raylib-module/"},(0,i.kt)("img",{parentName:"a",src:"https://olddocs.gamepencil.net/wp-content/uploads/sites/6/2021/03/raylib_logo.png",alt:"Raylib Logo"}))),(0,i.kt)("h3",{id:"build-via-raylib-modules"},(0,i.kt)("a",{parentName:"h3",href:"https://olddocs.gamepencil.net/including-raylib-module/"},"Build via raylib modules")),(0,i.kt)("p",null,"Coming soon, planned Q1 2022"),(0,i.kt)("p",null,"Github repository: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pawbyte/gpe-raylib"},"Download source from github")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://olddocs.gamepencil.net/including-sfml-module/"},(0,i.kt)("img",{parentName:"a",src:"https://olddocs.gamepencil.net/wp-content/uploads/sites/6/2021/03/SFML2.svg.png",alt:"SFML Logo"}))),(0,i.kt)("h3",{id:"build-via-sfml-modules"},(0,i.kt)("a",{parentName:"h3",href:"https://olddocs.gamepencil.net/including-sfml-module/"},"Build via SFML modules")),(0,i.kt)("p",null,"Coming soon, planned Q2 2022"),(0,i.kt)("p",null,"Github repository: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pawbyte/gpe-sfml"},"Download source from github")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://olddocs.gamepencil.net/including-irrlicht-module/"},(0,i.kt)("img",{parentName:"a",src:"https://olddocs.gamepencil.net/wp-content/uploads/sites/6/2021/03/irrlicht_logo.png",alt:"Irrlicht Logo"}))),(0,i.kt)("h3",{id:"build-via-irrlicht-modules"},(0,i.kt)("a",{parentName:"h3",href:"https://olddocs.gamepencil.net/including-irrlicht-module/"},"Build via Irrlicht modules")),(0,i.kt)("p",null,"Coming soon, planned Q4 2022"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://olddocs.gamepencil.net/including-olc/"},(0,i.kt)("img",{parentName:"a",src:"https://olddocs.gamepencil.net/wp-content/uploads/sites/6/2021/03/olc_pge_logo.png",alt:"OLC Logo"}))),(0,i.kt)("h3",{id:"build-via-olcpixelgameengine-modules"},(0,i.kt)("a",{parentName:"h3",href:"https://olddocs.gamepencil.net/including-olc/"},"Build via OLC:PixelGameEngine modules")),(0,i.kt)("p",null,"Coming soon, planned Q4 2022"))}c.isMDXComponent=!0}}]);