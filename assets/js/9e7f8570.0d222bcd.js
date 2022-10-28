"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[2377],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=s(r),u=a,v=m["".concat(l,".").concat(u)]||m[u]||p[u]||o;return r?n.createElement(v,i(i({ref:t},d),{},{components:r})):n.createElement(v,i({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9729:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=r(5321);function o(e){let{version:t,severity:r,hasConfig:o,hasFix:i,isDeprecated:c}=e;return n.createElement("div",{className:"single-rule-info"},n.createElement(a.Z,{version:t,severity:r,hasConfig:o,hasFix:i,isDeprecated:c}))}},5321:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294);function a(e){let{hasConfig:t,hasFix:r,isDeprecated:a}=e;return n.createElement("div",{className:"rule-options"},t&&n.createElement("span",{title:"Configurable"},"\u2699\ufe0f"),r&&n.createElement("span",{title:"Has auto-fix"},"\ud83d\udee0"),a&&n.createElement("span",{title:"Deprecated"},"\u26a0\ufe0f"))}function o(e){let{severity:t,version:r,hasConfig:o,hasFix:i,isDeprecated:c}=e;const l=null==t?void 0:t.toLowerCase();return n.createElement("div",{className:"rule-additional-info"},n.createElement("div",null,n.createElement("span",{className:"added-in-label"},"added in:")," ",r),n.createElement("div",{className:"rule-severity "+l},l),n.createElement(a,{hasConfig:o,hasFix:i,isDeprecated:c}))}},825:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(7462),a=(r(7294),r(3905)),o=r(9729);const i={},c=void 0,l={unversionedId:"rules/common/avoid-throw-in-catch-block",id:"rules/common/avoid-throw-in-catch-block",title:"avoid-throw-in-catch-block",description:"Call throw in a catch block loses the original stack trace and the original exception.",source:"@site/docs/rules/common/avoid-throw-in-catch-block.mdx",sourceDirName:"rules/common",slug:"/rules/common/avoid-throw-in-catch-block",permalink:"/docs/rules/common/avoid-throw-in-catch-block",draft:!1,editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/rules/common/avoid-throw-in-catch-block.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"avoid-redundant-async",permalink:"/docs/rules/common/avoid-redundant-async"},next:{title:"avoid-top-level-members-in-tests",permalink:"/docs/rules/common/avoid-top-level-members-in-tests"}},s={},d=[{value:"Example",id:"example",level:3}],p={toc:d};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{version:"4.7.0",severity:"warning",mdxType:"RuleDetails"}),(0,a.kt)("p",null,"Call throw in a catch block loses the original stack trace and the original exception."),(0,a.kt)("p",null,"Since 2.16 version you can use ",(0,a.kt)("a",{parentName:"p",href:"https://api.dart.dev/dev/2.16.0-9.0.dev/dart-core/Error/throwWithStackTrace.html"},"Error.throwWithStackTrace"),"."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"void repository() {\n  try {\n    networkDataProvider();\n  } on Object {\n    throw RepositoryException(); // LINT\n  }\n}\n")))}m.isMDXComponent=!0}}]);