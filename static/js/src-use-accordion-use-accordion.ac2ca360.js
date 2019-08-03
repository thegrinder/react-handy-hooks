(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/index.js":function(e,n,t){"use strict";var r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),i=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),c=t("./node_modules/react/index.js"),o=t("./node_modules/fast-deep-equal/index.js"),u=t.n(o),s=function(e){var n=e.initialValues,t=e.validate,o=e.onSubmit,s=e.submitting,l=void 0!==s&&s,b=Object(c.useState)(n),d=Object(a.a)(b,2),p=d[0],f=d[1],j=Object(c.useState)(t?t(n):{}),m=Object(a.a)(j,2),O=m[0],v=m[1],g=Object(c.useState)({}),y=Object(a.a)(g,2),h=y[0],x=y[1],_=Object(c.useCallback)(function(e){t&&v(t(e))},[t]),E=Object(c.useMemo)(function(){return!!Object.keys(O).length},[O]),A=Object(c.useMemo)(function(){return u()(n,p)},[n,p]),w=Object(c.useCallback)(function(e){return{submitting:l,error:O[e],touched:!!h[e],value:p[e],onChange:function(n){var t=Object(i.a)({},p,Object(r.a)({},e,n.target.value));f(t),_(t)},onBlur:function(){x(Object(i.a)({},h,Object(r.a)({},e,!0)))}}},[O,_,l,h,p]),P=Object(c.useCallback)(function(e){e.preventDefault(),!E&&o&&o(p)},[E,o,p]),C=Object(c.useCallback)(function(){f(n),v({}),x({})},[n]);return{getFieldProps:w,invalid:E,pristine:A,submitting:l,handleSubmit:P,resetForm:C}},l=s;s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useForm",filename:"src/useForm/useForm.js"}});var b=function(e,n){return(e%n+n)%n};b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"mod",filename:"src/utils/index.js"}});var d={13:"Enter",27:"Escape",32:" ",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown"},p=function(e){return function(n){var t=n.key||d[n.keyCode];return e===t}};p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isKey",filename:"src/utils/index.js"}});var f=p("ArrowDown");"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isArrowDown",filename:"src/utils/index.js"}});var j=p("ArrowUp");"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isArrowUp",filename:"src/utils/index.js"}});var m=p("ArrowLeft");"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isArrowLeft",filename:"src/utils/index.js"}});var O=p("ArrowRight");"undefined"!==typeof O&&O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isArrowRight",filename:"src/utils/index.js"}});var v=p("Enter");"undefined"!==typeof v&&v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isEnter",filename:"src/utils/index.js"}});var g=p("Escape");"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isEscape",filename:"src/utils/index.js"}});var y=p(" ");"undefined"!==typeof y&&y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isSpace",filename:"src/utils/index.js"}});var h=function(){var e=Object(c.useRef)([]).current,n=Object(c.useCallback)(function(n){return function(t){null===t?e.splice(n,1):e[n]=t}},[e]),t=Object(c.useRef)([]).current,r=Object(c.useCallback)(function(e){return function(n){null===n?t.splice(e,1):t[e]=n}},[t]),o=Object(c.useState)([]),u=Object(a.a)(o,2),s=u[0],l=u[1],d=Object(c.useCallback)(function(e){return s.includes(e)},[s]),p=Object(c.useCallback)(function(e){var n=t[e],r={overflow:"hidden",transition:"height 200ms linear"};return n&&d(e)?Object(i.a)({},r,{height:"".concat(n.clientHeight,"px")}):Object(i.a)({},r,{height:"0px"})},[d,t]),m=Object(c.useState)(-1),O=Object(a.a)(m,2),v=O[0],g=O[1],y=Object(c.useCallback)(function(e){return function(){g(e),function(e){l(function(n){return n.includes(e)?n.filter(function(n){return n!==e}):n.concat(e)})}(e)}},[]),h=Object(c.useCallback)(function(n){var t=e[n];t&&t.focus()},[e]),x=function(e){return function(){return g(e)}},_=function(e){return"".concat(e,"-tab")},E=Object(c.useCallback)(function(n){var t=e.length;if(j(n)){n.preventDefault();var r=b(v-1,t);g(r),h(r)}else if(f(n)){n.preventDefault();var i=b(v+1,t);g(i),h(i)}},[v,h,e]);return{getHeaderProps:Object(c.useCallback)(function(e,t){return{"aria-controls":_(e),"aria-disabled":d(t),"aria-expanded":d(t),id:e,key:e,onClick:y(t),onFocus:x(t),onKeyDown:E,ref:n(t)}},[n,y,d,E]),getSectionProps:Object(c.useCallback)(function(e,n){return{"aria-hidden":!d(n),"aria-labelledby":e,id:_(e),key:_(e),ref:r(n),role:"region",style:p(n)}},[r,p,d]),isActiveSection:d}},x=h;h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useAccordion",filename:"src/useAccordion/useAccordion.js"}});var _={loading:!1,initialLoad:!0,succeeded:!1,error:null,data:{}},E={LOADING:"".concat("useRequest","/LOADING"),SUCCEEDED:"".concat("useRequest","/SUCCEEDED"),FAILED:"".concat("useRequest","/FAILED"),FULFILLED:"".concat("useRequest","/FULFILLED")},A=function(){return{type:E.LOADING}},w=function(){return{data:arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},type:E.SUCCEEDED}},P=function(e){return{error:e,type:E.FAILED}},C=function(){return{type:E.FULFILLED}},S=function(e,n){switch(n.type){case E.LOADING:return Object(i.a)({},e,{error:null,loading:!0,succeeded:!1});case E.SUCCEEDED:return Object(i.a)({},e,{loading:!1,succeeded:!0,initialLoad:!1,data:n.data});case E.FAILED:return Object(i.a)({},e,{loading:!1,initialLoad:!1,error:n.error});case E.FULFILLED:return Object(i.a)({},e,{loading:!1,initialLoad:!1});default:return e}},k=function(){var e=Object(c.useReducer)(S,_),n=Object(a.a)(e,2),t=n[0],r=n[1],i={loading:function(){return r(A())},succeeded:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r(w(e))},failed:function(e){return r(P(e))},fulfilled:function(){return r(C())}};return Object(c.useMemo)(function(){return[t,i]},[t,i])},D=k;k&&k===Object(k)&&Object.isExtensible(k)&&Object.defineProperty(k,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useRequest",filename:"src/useRequest/useRequest.js"}});var L=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=Object(c.useState)(e),t=Object(a.a)(n,2),r=t[0],i=t[1],o={toggle:function(){return i(function(e){return!e})},toggleOn:function(){return i(!0)},toggleOff:function(){return i(!1)}};return Object(c.useMemo)(function(){return[r,o]},[o,r])},N=L;L&&L===Object(L)&&Object.isExtensible(L)&&Object.defineProperty(L,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useToggle",filename:"src/useToggle/useToggle.js"}}),t.d(n,"b",function(){return l}),t.d(n,"a",function(){return x}),t.d(n,"c",function(){return D}),t.d(n,"d",function(){return N}),"undefined"!==typeof N&&N&&N===Object(N)&&Object.isExtensible(N)&&Object.defineProperty(N,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useToggle",filename:"src/index.js"}}),"undefined"!==typeof D&&D&&D===Object(D)&&Object.isExtensible(D)&&Object.defineProperty(D,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useRequest",filename:"src/index.js"}}),"undefined"!==typeof x&&x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useAccordion",filename:"src/index.js"}}),"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useForm",filename:"src/index.js"}})},"./src/useAccordion/useAccordion.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return p});var r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),i=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=t("./node_modules/react/index.js"),c=t.n(a),o=t("./node_modules/@mdx-js/react/dist/index.es.js"),u=t("./node_modules/docz/dist/index.esm.js"),s=t("./src/index.js"),l=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",n)}},b=(l("AccordionHeader"),l("AccordionSection"),l("Example"),{}),d="wrapper";function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)(d,Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"useaccordion"},"useAccordion"),Object(o.b)("p",null,"useAccordion is a react hook that returns two prop getters, ",Object(o.b)("inlineCode",{parentName:"p"},"getHeaderProps")," and ",Object(o.b)("inlineCode",{parentName:"p"},"getSectionProps"),", and an ",Object(o.b)("inlineCode",{parentName:"p"},"isActiveSection")," function,\nwhich allow you to build the tabs component you want without forgetting about accessibility."),Object(o.b)("h3",{id:"getheaderprops"},Object(o.b)("strong",{parentName:"h3"},"getHeaderProps")),Object(o.b)("p",null,"It's a function that takes in a unique id and index, and returns all the props that should be applied to each tab header.\nHere is the list of returned props:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"aria-controls"),Object(o.b)("li",{parentName:"ul"},"aria-disabled"),Object(o.b)("li",{parentName:"ul"},"aria-expanded"),Object(o.b)("li",{parentName:"ul"},"id"),Object(o.b)("li",{parentName:"ul"},"key"),Object(o.b)("li",{parentName:"ul"},"onClick"),Object(o.b)("li",{parentName:"ul"},"onFocus"),Object(o.b)("li",{parentName:"ul"},"onKeyDown"),Object(o.b)("li",{parentName:"ul"},"ref")),Object(o.b)("p",null,"If you spread these props over a custom component, make sure to properly pass down ref (typically, using ",Object(o.b)("inlineCode",{parentName:"p"},"React.forwardRef"),")."),Object(o.b)("h3",{id:"getsectionprops"},Object(o.b)("strong",{parentName:"h3"},"getSectionProps")),Object(o.b)("p",null,"It's a function that takes in a unique id and index, and returns all the props that should be applied to each tab header.\nHere is the list of returned props:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"aria-hidden"),Object(o.b)("li",{parentName:"ul"},"aria-labelledby"),Object(o.b)("li",{parentName:"ul"},"id"),Object(o.b)("li",{parentName:"ul"},"key"),Object(o.b)("li",{parentName:"ul"},"role"),Object(o.b)("li",{parentName:"ul"},"style"),Object(o.b)("li",{parentName:"ul"},"ref")),Object(o.b)("p",null,"If you spread these props over a custom component, make sure to properly pass down ref (typically, using ",Object(o.b)("inlineCode",{parentName:"p"},"React.forwardRef"),")."),Object(o.b)("h3",{id:"isactivesection"},Object(o.b)("strong",{parentName:"h3"},"isActiveSection")),Object(o.b)("p",null,"It's a simple function that takes in an index of the tab header/section and returns true or false depending whether it's an active one or not."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)(u.c,{__position:0,__code:"() => {\n  const AccordionHeader = React.forwardRef((props, ref) => (\n    <button {...props} style={{ fontSize: '16px' }}>\n      {props.isOpen ? 'close' : 'open'}\n    </button>\n  ))\n  const AccordionSection = React.forwardRef((props, ref) => (\n    <div {...props}>\n      <div ref={ref}>{props.children}</div>\n    </div>\n  ))\n\n  const Example = () => {\n    const {\n      getHeaderProps,\n      getSectionProps,\n      isActiveSection,\n    } = useAccordion()\n    const items = [\n      {\n        id: 'one',\n        section: 'section one',\n      },\n      {\n        id: 'two',\n        section: 'section two',\n      },\n    ]\n    return (\n      <div aria-label=\"accordion example\">\n        {items.map(({ id, section }, index) => (\n          <div key={id}>\n            <AccordionHeader\n              isOpen={isActiveSection(index)}\n              {...getHeaderProps(id, index)}\n            />\n            <AccordionSection {...getSectionProps(id, index)}>\n              {section}\n            </AccordionSection>\n          </div>\n        ))}\n      </div>\n    )\n  }\n\n  return <Example />\n}",__scope:{props:this?this.props:t,Playground:u.c,useAccordion:s.a},mdxType:"Playground"},function(){var e=c.a.forwardRef(function(e,n){return Object(o.b)("button",Object(r.a)({},e,{style:{fontSize:"16px"}}),e.isOpen?"close":"open")}),n=c.a.forwardRef(function(e,n){return Object(o.b)("div",e,Object(o.b)("div",{ref:n},e.children))});return Object(o.b)(function(){var t=Object(s.a)(),i=t.getHeaderProps,a=t.getSectionProps,c=t.isActiveSection;return Object(o.b)("div",{"aria-label":"accordion example"},[{id:"one",section:"section one"},{id:"two",section:"section two"}].map(function(t,u){var s=t.id,l=t.section;return Object(o.b)("div",{key:s},Object(o.b)(e,Object(r.a)({isOpen:c(u)},i(s,u),{mdxType:"AccordionHeader"})),Object(o.b)(n,Object(r.a)({},a(s,u),{mdxType:"AccordionSection"}),l))}))},{mdxType:"Example"})}))}p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/useAccordion/useAccordion.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=src-use-accordion-use-accordion.39f5ddfb980300ed8579.js.map