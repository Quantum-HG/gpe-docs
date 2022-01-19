"use strict";(self.webpackChunkgame_pencil_engine_docs=self.webpackChunkgame_pencil_engine_docs||[]).push([[662],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return n?i.createElement(h,o(o({ref:t},c),{},{components:n})):i.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1422:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],l={title:"The Editor"},s=void 0,d={unversionedId:"quick-start-guide/editor",id:"quick-start-guide/editor",title:"The Editor",description:"The GUI",source:"@site/docs/quick-start-guide/editor.md",sourceDirName:"quick-start-guide",slug:"/quick-start-guide/editor",permalink:"/docs/quick-start-guide/editor",editUrl:"https://github.com/pawbyte/gpe-docs/edit/main/docs/quick-start-guide/editor.md",tags:[],version:"current",frontMatter:{title:"The Editor"},sidebar:"tutorialSidebar",previous:{title:"Requirements",permalink:"/docs/quick-start-guide/requirements"},next:{title:"Building from Source",permalink:"/docs/building"}},c=[{value:"The GUI",id:"the-gui",children:[{value:"Editor Panel",id:"editor-panel",children:[],level:3},{value:"Grid Settings",id:"grid-settings",children:[],level:3},{value:"Inspector",id:"inspector",children:[],level:3},{value:"Main Panel",id:"main-panel",children:[],level:3},{value:"Meta",id:"meta",children:[],level:3},{value:"Resources",id:"resources",children:[],level:3},{value:"Migration Guide from Past Engines",id:"migration-guide-from-past-engines",children:[],level:3}],level:2}],p={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"the-gui"},"The GUI"),(0,a.kt)("p",null,'The editor is built on top of Game Pencil Engine and is named "',(0,a.kt)("a",{parentName:"p",href:"https://docs.pawbyte.com/pawgui/"},"PAWGUI"),'". It is meant to offer cross-platform near-native feel. Since it does not actually know about your operating system ',(0,a.kt)("a",{parentName:"p",href:"https://olddocs.gamepencil.net/themes"},"themes"),", it is advised to either download or create a ",(0,a.kt)("a",{parentName:"p",href:"https://olddocs.gamepencil.net/themes"},"theme"),' file similar to your operating system. By default, Game Pencil comes with a dozen themes, with dark being the default theme. In later versions themes will also store iconpack information for those wishing to toggle away from "',(0,a.kt)("a",{parentName:"p",href:"https://fontawesome.com/"},"FontAwesome"),'" buttons.'),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},"Limitations:")),(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"At the moment the editor is for English based characters. Although our font-renderer does render unicode, we have not accurately measured wide-text in our current iteration of GUI elements designed for monospaced characters."),(0,a.kt)("li",{parentName:"ul"},"With the GUI not being entirely native or something like WxWidgets there may be areas where shortcuts do not mimic native-widgets.")))),(0,a.kt)("p",null,"The editor embraces a fixed-grid of panels to become one dock. Below are all of the currently supported tabs within the dock and their purpose."),(0,a.kt)("h3",{id:"editor-panel"},"Editor Panel"),(0,a.kt)("p",null,"The Editor Panel consists of your primary menu for each resource as well as settings tabs."),(0,a.kt)("p",null,"In the Scene Editor when browsing through resources it may open individual branches into The Inspector Tab."),(0,a.kt)("p",null,"Modify resource names and various properties. Although with our dock system this is closable, it is not advised to hide as it is considered a primary panel."),(0,a.kt)("h3",{id:"grid-settings"},"Grid Settings"),(0,a.kt)("p",null,"The Grid Settings panel is located in the ",(0,a.kt)("a",{parentName:"p",href:"https://olddocs.gamepencil.net/scenes"},"Scene Editor")," and it is used to modify the grid used for branch placement."),(0,a.kt)("p",null,"The main properties are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"UseObjectGrid"),": A togglable checkbox to enable placing new entities on the grid."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GridWidthField"),": The width in pixels for each gridbox on the x-axis."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GridHeightField"),": The height in pixels for each gridbox on the y-axis."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GridColorField"),": A Colorbox to select which color of the grid you will like to view."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GridAlphaField"),": A number between 0 and 255 for the grid's alpha value.."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ForceSnap"),": Select this button to snap all entities to the grid.")),(0,a.kt)("h3",{id:"inspector"},"Inspector"),(0,a.kt)("p",null,"The Inspector Panel is a useful area for modifying branch data and properties."),(0,a.kt)("h3",{id:"main-panel"},"Main Panel"),(0,a.kt)("p",null,"The main panel is where you can preview or toy around with your creations. From previewing particles, lighting and graphics. This area is where you can draw paths, design scenes and even write code."),(0,a.kt)("h3",{id:"meta"},"Meta"),(0,a.kt)("p",null,"The Meta panel is so meta..."),(0,a.kt)("p",null,"...................................................................."),(0,a.kt)("p",null,"Sorry about that, dad jokes sometimes can infiltrate this manual from time to time."),(0,a.kt)("p",null,"The Meta panel contains useful metadata for each branch. This information can vary from being comments, timestamp data as well as data summations."),(0,a.kt)("h3",{id:"resources"},"Resources"),(0,a.kt)("p",null,"The resources panel stores your open projects resources. It is currently organized into a folder-sorted list view. With each Branch Type and ending with a link to open project settings."),(0,a.kt)("h3",{id:"migration-guide-from-past-engines"},"Migration Guide from Past Engines"),(0,a.kt)("p",null,"With Game Pencil being a C++ based engine it may be unlikely that it maybe your first game engine. Although not perfect, I've prepared a few small guides to explain some of the core differences between editors."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Popular Game Engines to Game Pencil:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://olddocs.gamepencil.net/game-maker-to-game-pencil/"},"Game Maker Studio to Game Pencil")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://olddocs.gamepencil.net/godot-to-game-pencil/"},"Godot Engine to Game Pencil")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://olddocs.gamepencil.net/unity-to-game-pencil/"},"Unity to Game Pencil"))))}u.isMDXComponent=!0}}]);