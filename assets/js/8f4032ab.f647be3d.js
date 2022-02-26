"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[4224],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7909:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={},c="Long Method",l={unversionedId:"anti-patterns/long-method",id:"anti-patterns/long-method",title:"Long Method",description:"Long blocks of code are difficult to reuse and understand because they are usually responsible for more than one thing. Separating those to several short ones with proper names helps you reuse your code and understand it better without reading methods body.",source:"@site/docs/anti-patterns/long-method.md",sourceDirName:"anti-patterns",slug:"/anti-patterns/long-method",permalink:"/docs/anti-patterns/long-method",editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/anti-patterns/long-method.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Overview",permalink:"/docs/anti-patterns/overview"},next:{title:"Long Parameter List",permalink:"/docs/anti-patterns/long-parameter-list"}},p=[{value:"Detection strategy",id:"detection-strategy",children:[],level:2},{value:"Exceptions",id:"exceptions",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"long-method"},"Long Method"),(0,a.kt)("p",null,"Long blocks of code are difficult to reuse and understand because they are usually responsible for more than one thing. Separating those to several short ones with proper names helps you reuse your code and understand it better without reading methods body."),(0,a.kt)("p",null,"Lines of code with clarification comments are usually a sign for possible method extraction because you can name extracted method in a way that will cover the comment description and then remove the comment. Even comments for one line is a sign for method extraction."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To shorten a method, just apply ",(0,a.kt)("strong",{parentName:"li"},"Extract Method")," command."),(0,a.kt)("li",{parentName:"ul"},"If local variables and parameters prevent a method extraction, apply ",(0,a.kt)("strong",{parentName:"li"},"Replace Temp with Query"),", ",(0,a.kt)("strong",{parentName:"li"},"Introduce Parameter Object")," or ",(0,a.kt)("strong",{parentName:"li"},"Preserve Whole Object")," commands."),(0,a.kt)("li",{parentName:"ul"},"Conditional statements or loops indicate the possibility of method extraction. Use ",(0,a.kt)("strong",{parentName:"li"},"Decompose Conditional")," command for conditional expressions and ",(0,a.kt)("strong",{parentName:"li"},"Extract Method")," for loops.")),(0,a.kt)("h2",{id:"detection-strategy"},"Detection strategy"),(0,a.kt)("p",null,"Uses ",(0,a.kt)("a",{parentName:"p",href:"/docs/metrics/source-lines-of-code"},(0,a.kt)("inlineCode",{parentName:"a"},"Source lines of Code"))," value and compares it with configured threshold."),(0,a.kt)("h2",{id:"exceptions"},"Exceptions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flutter widget build method.")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"P.S. We use terminology from a book ",(0,a.kt)("strong",{parentName:"p"},"Refactoring Improving the Design of Existing Code")," by ",(0,a.kt)("em",{parentName:"p"},"Martin Fowler")))}d.isMDXComponent=!0}}]);