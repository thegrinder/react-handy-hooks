(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/useForm/useForm.mdx":function(e,n,t){"use strict";t.r(n);var r=t("./node_modules/react/index.js"),o=t.n(r),u=t("./node_modules/@mdx-js/tag/dist/index.js"),a=t("./node_modules/docz/dist/index.m.js"),i=t("./node_modules/fast-deep-equal/index.js"),l=t.n(i);function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){s(e,n,t[n])})}return e}function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function f(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,u=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(l){o=!0,u=l}finally{try{r||null==i.return||i.return()}finally{if(o)throw u}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var p=function(e){var n=e.initialValues,t=e.validate,o=e.onSubmit,u=f(Object(r.useState)(n),2),a=u[0],i=u[1],p=f(Object(r.useState)({}),2),d=p[0],m=p[1],b=f(Object(r.useState)({}),2),v=b[0],y=b[1],h=function(e){t&&m(t(e))};Object(r.useEffect)(function(){h(a)},[]);var g=!!Object.keys(d).length,O=l()(n,a);return{getFieldProps:function(e){return{error:d[e],touched:!!v[e],value:a[e],onChange:function(n){var t=c({},a,s({},e,n.target.value));i(t),h(t)},onBlur:function(){y(c({},v,s({},e,!0)))}}},invalid:g,pristine:O,handleSubmit:function(e){e.preventDefault(),!g&&o&&o(a)},resetForm:function(){i(n),m({}),y({})}}};function d(e){return(d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function b(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,n){return!n||"object"!==d(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,n){return(h=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}t.d(n,"default",function(){return g});var g=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=v(this,y(n).call(this,e))).layout=null,t}var t,r,i;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&h(e,n)}(n,o.a.Component),t=n,(r=[{key:"render",value:function(){var e=this.props,n=e.components,t=m(e,["components"]);return o.a.createElement(u.MDXTag,{name:"wrapper",components:n},o.a.createElement(u.MDXTag,{name:"h2",components:n,props:{id:"useform"}},"useForm"),o.a.createElement(a.e,{__position:0,__code:"() => {\n  const Input = ({ error, touched, value, onChange, onBlur }) => (\n    <div>\n      <input onChange={onChange} onBlur={onBlur} value={value} />\n      <div>\n        {touched && error && <span style={{ color: 'red' }}>{error}</span>}\n      </div>\n    </div>\n  )\n  const validate = values => {\n    let errors = {}\n    if (values.name === '') {\n      errors.name = 'required'\n    }\n    return errors\n  }\n\n  const initialValues = {\n    name: '',\n  }\n\n  const onSubmit = values => {\n    alert(JSON.stringify(values))\n  }\n\n  const Example = () => {\n    const { pristine, invalid, getFieldProps, handleSubmit } = useForm({\n      initialValues,\n      validate,\n      onSubmit,\n    })\n    const { error, touched, value, onChange, onBlur } = getFieldProps('name')\n    return (\n      <form onSubmit={handleSubmit}>\n        <Input\n          error={error}\n          touched={touched}\n          value={value}\n          onChange={onChange}\n          onBlur={onBlur}\n        />\n        <div>\n          <button disabled={pristine || invalid}>submit</button>\n        </div>\n      </form>\n    )\n  }\n\n  return <Example />\n}",__scope:{props:this?this.props:t,useForm:p}},function(){var e=function(e){var n=e.error,t=e.touched,r=e.value,u=e.onChange,a=e.onBlur;return o.a.createElement("div",null,o.a.createElement("input",{onChange:u,onBlur:a,value:r}),o.a.createElement("div",null,t&&n&&o.a.createElement("span",{style:{color:"red"}},n)))},n=function(e){var n={};return""===e.name&&(n.name="required"),n},t={name:""},r=function(e){alert(JSON.stringify(e))};return o.a.createElement(function(){var u=p({initialValues:t,validate:n,onSubmit:r}),a=u.pristine,i=u.invalid,l=u.getFieldProps,c=u.handleSubmit,s=l("name"),f=s.error,d=s.touched,m=s.value,b=s.onChange,v=s.onBlur;return o.a.createElement("form",{onSubmit:c},o.a.createElement(e,{error:f,touched:d,value:m,onChange:b,onBlur:v}),o.a.createElement("div",null,o.a.createElement("button",{disabled:a||i},"submit")))},null)}))}}])&&b(t.prototype,r),i&&b(t,i),n}();g.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=src-use-form-use-form.bff9767d18d344058606.js.map