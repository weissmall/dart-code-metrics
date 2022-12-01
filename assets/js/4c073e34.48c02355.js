"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[9386],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,y=u["".concat(l,".").concat(d)]||u[d]||m[d]||s;return r?n.createElement(y,o(o({ref:t},p),{},{components:r})):n.createElement(y,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9729:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(7294),a=r(5321);function s(e){let{version:t,severity:r,hasConfig:s,hasFix:o,isDeprecated:i}=e;return n.createElement("div",{className:"single-rule-info"},n.createElement(a.Z,{version:t,severity:r,hasConfig:s,hasFix:o,isDeprecated:i}))}},5321:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(7294);function a(e){let{hasConfig:t,hasFix:r,isDeprecated:a}=e;return n.createElement("div",{className:"rule-options"},t&&n.createElement("span",{title:"Configurable"},"\u2699\ufe0f"),r&&n.createElement("span",{title:"Has auto-fix"},"\ud83d\udee0"),a&&n.createElement("span",{title:"Deprecated"},"\u26a0\ufe0f"))}function s(e){let{severity:t,version:r,hasConfig:s,hasFix:o,isDeprecated:i}=e;const l=null==t?void 0:t.toLowerCase();return n.createElement("div",{className:"rule-additional-info"},n.createElement("div",null,n.createElement("span",{className:"added-in-label"},"added in:")," ",r),n.createElement("div",{className:`rule-severity ${l}`},l),n.createElement(a,{hasConfig:s,hasFix:o,isDeprecated:i}))}},8161:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905)),s=r(9729);const o={},i=void 0,l={unversionedId:"rules/common/avoid-unnecessary-type-assertions",id:"rules/common/avoid-unnecessary-type-assertions",title:"avoid-unnecessary-type-assertions",description:"Warns about unnecessary usage of is and whereType operators.",source:"@site/docs/rules/common/avoid-unnecessary-type-assertions.mdx",sourceDirName:"rules/common",slug:"/rules/common/avoid-unnecessary-type-assertions",permalink:"/docs/rules/common/avoid-unnecessary-type-assertions",draft:!1,editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/rules/common/avoid-unnecessary-type-assertions.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"avoid-top-level-members-in-tests",permalink:"/docs/rules/common/avoid-top-level-members-in-tests"},next:{title:"avoid-unnecessary-type-casts",permalink:"/docs/rules/common/avoid-unnecessary-type-casts"}},c={},p=[{value:"Example",id:"example",level:3},{value:"Example 1 Check is same type",id:"example-1-check-is-same-type",level:4},{value:"Example 2 whereType method",id:"example-2-wheretype-method",level:4}],m={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(s.Z,{version:"4.7.0",severity:"warning",mdxType:"RuleDetails"}),(0,a.kt)("p",null,"Warns about unnecessary usage of ",(0,a.kt)("inlineCode",{parentName:"p"},"is")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"whereType")," operators."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("h4",{id:"example-1-check-is-same-type"},"Example 1 Check is same type"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"class Example {\n  final myList = <int>[1, 2, 3];\n\n  void main() {\n    final result = myList is List<int>; // LINT\n    myList.whereType<int>();\n  }\n}\n")),(0,a.kt)("h4",{id:"example-2-wheretype-method"},"Example 2 whereType method"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"main(){\n  ['1', '2'].whereType<String?>(); // LINT\n}\n")))}u.isMDXComponent=!0}}]);