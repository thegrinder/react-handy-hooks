(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./src/index.js":function(e,t,n){"use strict";var r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),c=n("./node_modules/react/index.js"),o=n("./node_modules/fast-deep-equal/index.js"),u=n.n(o);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var l=function(e,t){return(e%t+t)%t};l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"mod",filename:"src/utils/index.js"}});var s={13:"Enter",27:"Escape",32:" ",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown"},b=function(e){return function(t){var n=t.key||s[t.keyCode];return e===n}};b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isKey",filename:"src/utils/index.js"}});var f=b("ArrowDown");"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isArrowDown",filename:"src/utils/index.js"}});var d=b("ArrowUp");"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isArrowUp",filename:"src/utils/index.js"}});var O=b("ArrowLeft");"undefined"!==typeof O&&O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isArrowLeft",filename:"src/utils/index.js"}});var j=b("ArrowRight");"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isArrowRight",filename:"src/utils/index.js"}});var p=b("Enter");"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isEnter",filename:"src/utils/index.js"}});var m=b("Escape");"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isEscape",filename:"src/utils/index.js"}});var g=b(" ");"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isSpace",filename:"src/utils/index.js"}});var y=function(e,t){return Object.keys(e).filter((function(e){return e!==t})).reduce((function(t,n){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(n,!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,Object(r.a)({},n,e[n]))}),{})};function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(n,!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"filterOut",filename:"src/utils/index.js"}});var _=function(e){var t=e.initialValues,n=e.validate,o=e.onSubmit,a=e.submissionErrors,l=e.submitting,s=void 0!==l&&l,b=Object(c.useState)(t),f=Object(i.a)(b,2),d=f[0],O=f[1],j=Object(c.useState)(n?n(t):{}),p=Object(i.a)(j,2),m=p[0],g=p[1],v=Object(c.useState)({}),_=Object(i.a)(v,2),P=_[0],E=_[1],x=Object(c.useState)(void 0),w=Object(i.a)(x,2),D=w[0],C=w[1];Object(c.useEffect)((function(){a&&C(a)}),[a]);var k=Object(c.useCallback)((function(e){n&&g(n(e))}),[n]),A=Object(c.useMemo)((function(){return!!Object.keys(m).length}),[m]),L=Object(c.useMemo)((function(){return u()(t,d)}),[t,d]),S=Object(c.useCallback)((function(e){return{submitting:s,error:m[e],submissionError:D&&D[e],touched:!!P[e],value:d[e],onChange:function(t){var n=h({},d,Object(r.a)({},e,t.target.value));D&&C((function(t){return y(t,e)})),O(n),k(n)},onBlur:function(){E(h({},P,Object(r.a)({},e,!0)))}}}),[m,k,D,s,P,d]),T=Object(c.useCallback)((function(e){e.preventDefault(),!A&&o&&(D&&C(void 0),o(d))}),[A,o,D,d]),F=Object(c.useCallback)((function(){O(t),C(void 0),g({}),E({})}),[t]);return{getFieldProps:S,invalid:A,pristine:L,submitting:s,handleSubmit:T,resetForm:F}},P=_;function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(n,!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useForm",filename:"src/useForm/useForm.js"}});var w=function(){var e=Object(c.useRef)([]).current,t=Object(c.useCallback)((function(t){return function(n){null===n?e.splice(t,1):e[t]=n}}),[e]),n=Object(c.useRef)([]).current,r=Object(c.useCallback)((function(e){return function(t){null===t?n.splice(e,1):n[e]=t}}),[n]),o=Object(c.useState)([]),u=Object(i.a)(o,2),a=u[0],s=u[1],b=Object(c.useCallback)((function(e){return a.includes(e)}),[a]),O=Object(c.useCallback)((function(e){var t=n[e],r={overflow:"hidden",transition:"height 200ms linear"};return t&&b(e)?x({},r,{height:"".concat(t.clientHeight,"px")}):x({},r,{height:"0px"})}),[b,n]),j=Object(c.useState)(-1),p=Object(i.a)(j,2),m=p[0],g=p[1],y=Object(c.useCallback)((function(e){return function(){g(e),function(e){s((function(t){return t.includes(e)?t.filter((function(t){return t!==e})):t.concat(e)}))}(e)}}),[]),v=Object(c.useCallback)((function(t){var n=e[t];n&&n.focus()}),[e]),h=function(e){return function(){return g(e)}},_=function(e){return"".concat(e,"-tab")},P=Object(c.useCallback)((function(t){var n=e.length;if(d(t)){t.preventDefault();var r=l(m-1,n);g(r),v(r)}else if(f(t)){t.preventDefault();var i=l(m+1,n);g(i),v(i)}}),[m,v,e]);return{getHeaderProps:Object(c.useCallback)((function(e,n){return{"aria-controls":_(e),"aria-disabled":b(n),"aria-expanded":b(n),id:e,key:e,onClick:y(n),onFocus:h(n),onKeyDown:P,ref:t(n)}}),[t,y,b,P]),getSectionProps:Object(c.useCallback)((function(e,t){return{"aria-hidden":!b(t),"aria-labelledby":e,id:_(e),key:_(e),ref:r(t),role:"region",style:O(t)}}),[r,O,b]),isActiveSection:b}},D=w;function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(n,!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}w&&w===Object(w)&&Object.isExtensible(w)&&Object.defineProperty(w,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useAccordion",filename:"src/useAccordion/useAccordion.js"}});var A={loading:!1,initialLoad:!0,succeeded:!1,error:null,data:{}},L={LOADING:"".concat("useRequest","/LOADING"),SUCCEEDED:"".concat("useRequest","/SUCCEEDED"),FAILED:"".concat("useRequest","/FAILED"),FULFILLED:"".concat("useRequest","/FULFILLED")},S=function(){return{type:L.LOADING}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{data:e,type:L.SUCCEEDED}},F=function(e){return{error:e,type:L.FAILED}},U=function(){return{type:L.FULFILLED}},R=function(e,t){switch(t.type){case L.LOADING:return k({},e,{error:null,loading:!0,succeeded:!1});case L.SUCCEEDED:return k({},e,{loading:!1,succeeded:!0,initialLoad:!1,data:t.data});case L.FAILED:return k({},e,{loading:!1,initialLoad:!1,error:t.error});case L.FULFILLED:return k({},e,{loading:!1,initialLoad:!1});default:return e}},I=function(){var e=Object(c.useReducer)(R,A),t=Object(i.a)(e,2),n=t[0],r=t[1],o=Object(c.useMemo)((function(){return{loading:function(){return r(S())},succeeded:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r(T(e))},failed:function(e){return r(F(e))},fulfilled:function(){return r(U())}}}),[]);return[Object(c.useMemo)((function(){return n}),[n]),o]},N=I;I&&I===Object(I)&&Object.isExtensible(I)&&Object.defineProperty(I,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useRequest",filename:"src/useRequest/useRequest.js"}});var q=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(c.useState)(e),n=Object(i.a)(t,2),r=n[0],o=n[1],u={toggle:function(){return o((function(e){return!e}))},toggleOn:function(){return o(!0)},toggleOff:function(){return o(!1)}},a=Object(c.useMemo)((function(){return[r,u]}),[u,r]);return a},M=q;q&&q===Object(q)&&Object.isExtensible(q)&&Object.defineProperty(q,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useToggle",filename:"src/useToggle/useToggle.js"}}),n.d(t,"b",(function(){return P})),n.d(t,"a",(function(){return D})),n.d(t,"c",(function(){return N})),n.d(t,"d",(function(){return M})),"undefined"!==typeof M&&M&&M===Object(M)&&Object.isExtensible(M)&&Object.defineProperty(M,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useToggle",filename:"src/index.js"}}),"undefined"!==typeof N&&N&&N===Object(N)&&Object.isExtensible(N)&&Object.defineProperty(N,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useRequest",filename:"src/index.js"}}),"undefined"!==typeof D&&D&&D===Object(D)&&Object.isExtensible(D)&&Object.defineProperty(D,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useAccordion",filename:"src/index.js"}}),"undefined"!==typeof P&&P&&P===Object(P)&&Object.isExtensible(P)&&Object.defineProperty(P,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useForm",filename:"src/index.js"}})},"./src/useToggle/useToggle.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r,i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),c=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),u=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),a=n("./node_modules/docz/dist/index.esm.js"),l=n("./src/index.js"),s=(r="UseToggleDemo",{}),b="wrapper";function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(u.b)(b,Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(u.b)("h1",{id:"usetoggle"},"useToggle"),Object(u.b)("p",null,"useToggle is a simple hook that returns a boolean value and three actions to update it."),Object(u.b)("h2",{id:"state"},"State"),Object(u.b)("p",null,"Boolean, ",Object(u.b)("inlineCode",{parentName:"p"},"false")," by default. You can provide the initial value by calling the hook with an argument, e.g ",Object(u.b)("inlineCode",{parentName:"p"},"useToggle(true)"),"."),Object(u.b)("h2",{id:"actions"},"Actions"),Object(u.b)("h3",{id:"toggle"},"toggle"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"toggles the current state value")),Object(u.b)("h3",{id:"toggleon"},"toggleOn"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"sets the state value to ",Object(u.b)("inlineCode",{parentName:"li"},"true"))),Object(u.b)("h3",{id:"toggleoff"},"toggleOff"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"sets the state value to ",Object(u.b)("inlineCode",{parentName:"li"},"false"))),Object(u.b)("h2",{id:"example"},"Example"),Object(u.b)(a.c,{__position:0,__code:"() => {\n  const UseToggleDemo = () => {\n    const [state, actions] = useToggle()\n    return <button onClick={actions.toggle}>{state ? 'on' : 'off'}</button>\n  }\n  return <UseToggleDemo />\n}",__scope:{props:this?this.props:n,Playground:a.c,useToggle:l.d},mdxType:"Playground"},(function(){return Object(u.b)((function(){var e=Object(l.d)(),t=Object(c.a)(e,2),n=t[0],r=t[1];return Object(u.b)("button",{onClick:r.toggle},n?"on":"off")}),{mdxType:"UseToggleDemo"})})))}f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/useToggle/useToggle.mdx"}}),f.isMDXComponent=!0}}]);
//# sourceMappingURL=src-use-toggle-use-toggle.91f2b136509d2adba26a.js.map