!function(e){function r(r){for(var t,o,s=r[0],i=r[1],d=r[2],c=r[3]||[],u=0,a=[];u<s.length;u++)o=s[u],q[o]&&a.push(q[o][0]),q[o]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);for(U&&U(r),H.push.apply(H,c);a.length;)a.shift()();return D.push.apply(D,d||[]),n()}function n(){for(var e,r=0;r<D.length;r++){for(var n=D[r],t=!0,o=1;o<n.length;o++){var s=n[o];0!==q[s]&&(t=!1)}t&&(D.splice(r--,1),e=S(S.s=n[0]))}return 0===D.length&&(H.forEach(function(e){if(void 0===q[e]){q[e]=null;var r=document.createElement("link");r.crossOrigin="anonymous",S.nc&&r.setAttribute("nonce",S.nc),r.rel="prefetch",r.as="script",r.href=R(e),document.head.appendChild(r)}}),H.length=0),e}var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,r){!function(e,r){if(!k[e]||!w[e])return;for(var n in w[e]=!1,r)Object.prototype.hasOwnProperty.call(r,n)&&(v[n]=r[n]);0===--y&&0===b&&E()}(e,r),t&&t(e,r)};var o,s=!0,i="9dfb7dddabfc36baeb13",d=1e4,c={},u=[],a=[];function l(e){var r={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,n){if(void 0===e)r._selfAccepted=!0;else if("function"===typeof e)r._selfAccepted=e;else if("object"===typeof e)for(var t=0;t<e.length;t++)r._acceptedDependencies[e[t]]=n||function(){};else r._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)r._selfDeclined=!0;else if("object"===typeof e)for(var n=0;n<e.length;n++)r._declinedDependencies[e[n]]=!0;else r._declinedDependencies[e]=!0},dispose:function(e){r._disposeHandlers.push(e)},addDisposeHandler:function(e){r._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=r._disposeHandlers.indexOf(e);n>=0&&r._disposeHandlers.splice(n,1)},check:j,apply:P,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var r=p.indexOf(e);r>=0&&p.splice(r,1)},data:c[e]};return o=void 0,r}var p=[],f="idle";function h(e){f=e;for(var r=0;r<p.length;r++)p[r].call(null,e)}var m,v,g,y=0,b=0,x={},w={},k={};function O(e){return+e+""===e?+e:e}function j(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return s=e,h("check"),(r=d,r=r||1e4,new Promise(function(e,n){if("undefined"===typeof XMLHttpRequest)return n(new Error("No browser support"));try{var t=new XMLHttpRequest,o=S.p+""+i+".hot-update.json";t.open("GET",o,!0),t.timeout=r,t.send(null)}catch(s){return n(s)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)n(new Error("Manifest request to "+o+" failed."));else{try{var r=JSON.parse(t.responseText)}catch(s){return void n(s)}e(r)}}})).then(function(e){if(!e)return h("idle"),null;w={},x={},k=e.c,g=e.h,h("prepare");var r=new Promise(function(e,r){m={resolve:e,reject:r}});for(var n in v={},q)_(n);return"prepare"===f&&0===b&&0===y&&E(),r});var r}function _(e){k[e]?(w[e]=!0,y++,function(e){var r=document.createElement("script");r.charset="utf-8",r.src=S.p+""+e+"."+i+".hot-update.js",r.crossOrigin="anonymous",document.head.appendChild(r)}(e)):x[e]=!0}function E(){h("ready");var e=m;if(m=null,e)if(s)Promise.resolve().then(function(){return P(s)}).then(function(r){e.resolve(r)},function(r){e.reject(r)});else{var r=[];for(var n in v)Object.prototype.hasOwnProperty.call(v,n)&&r.push(O(n));e.resolve(r)}}function P(r){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,t,o,s,d;function a(e){for(var r=[e],n={},t=r.slice().map(function(e){return{chain:[e],id:e}});t.length>0;){var o=t.pop(),i=o.id,d=o.chain;if((s=A[i])&&!s.hot._selfAccepted){if(s.hot._selfDeclined)return{type:"self-declined",chain:d,moduleId:i};if(s.hot._main)return{type:"unaccepted",chain:d,moduleId:i};for(var c=0;c<s.parents.length;c++){var u=s.parents[c],a=A[u];if(a){if(a.hot._declinedDependencies[i])return{type:"declined",chain:d.concat([u]),moduleId:i,parentId:u};-1===r.indexOf(u)&&(a.hot._acceptedDependencies[i]?(n[u]||(n[u]=[]),l(n[u],[i])):(delete n[u],r.push(u),t.push({chain:d.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:n}}function l(e,r){for(var n=0;n<r.length;n++){var t=r[n];-1===e.indexOf(t)&&e.push(t)}}r=r||{};var p={},m=[],y={},b=function(){console.warn("[HMR] unexpected require("+w.moduleId+") to disposed module")};for(var x in v)if(Object.prototype.hasOwnProperty.call(v,x)){var w;d=O(x);var j=!1,_=!1,E=!1,P="";switch((w=v[x]?a(d):{type:"disposed",moduleId:x}).chain&&(P="\nUpdate propagation: "+w.chain.join(" -> ")),w.type){case"self-declined":r.onDeclined&&r.onDeclined(w),r.ignoreDeclined||(j=new Error("Aborted because of self decline: "+w.moduleId+P));break;case"declined":r.onDeclined&&r.onDeclined(w),r.ignoreDeclined||(j=new Error("Aborted because of declined dependency: "+w.moduleId+" in "+w.parentId+P));break;case"unaccepted":r.onUnaccepted&&r.onUnaccepted(w),r.ignoreUnaccepted||(j=new Error("Aborted because "+d+" is not accepted"+P));break;case"accepted":r.onAccepted&&r.onAccepted(w),_=!0;break;case"disposed":r.onDisposed&&r.onDisposed(w),E=!0;break;default:throw new Error("Unexception type "+w.type)}if(j)return h("abort"),Promise.reject(j);if(_)for(d in y[d]=v[d],l(m,w.outdatedModules),w.outdatedDependencies)Object.prototype.hasOwnProperty.call(w.outdatedDependencies,d)&&(p[d]||(p[d]=[]),l(p[d],w.outdatedDependencies[d]));E&&(l(m,[w.moduleId]),y[d]=b)}var D,H=[];for(t=0;t<m.length;t++)d=m[t],A[d]&&A[d].hot._selfAccepted&&H.push({module:d,errorHandler:A[d].hot._selfAccepted});h("dispose"),Object.keys(k).forEach(function(e){!1===k[e]&&function(e){delete q[e]}(e)});for(var R,I,F=m.slice();F.length>0;)if(d=F.pop(),s=A[d]){var M={},U=s.hot._disposeHandlers;for(o=0;o<U.length;o++)(n=U[o])(M);for(c[d]=M,s.hot.active=!1,delete A[d],delete p[d],o=0;o<s.children.length;o++){var z=A[s.children[o]];z&&((D=z.parents.indexOf(d))>=0&&z.parents.splice(D,1))}}for(d in p)if(Object.prototype.hasOwnProperty.call(p,d)&&(s=A[d]))for(I=p[d],o=0;o<I.length;o++)R=I[o],(D=s.children.indexOf(R))>=0&&s.children.splice(D,1);for(d in h("apply"),i=g,y)Object.prototype.hasOwnProperty.call(y,d)&&(e[d]=y[d]);var T=null;for(d in p)if(Object.prototype.hasOwnProperty.call(p,d)&&(s=A[d])){I=p[d];var C=[];for(t=0;t<I.length;t++)if(R=I[t],n=s.hot._acceptedDependencies[R]){if(-1!==C.indexOf(n))continue;C.push(n)}for(t=0;t<C.length;t++){n=C[t];try{n(I)}catch(L){r.onErrored&&r.onErrored({type:"accept-errored",moduleId:d,dependencyId:I[t],error:L}),r.ignoreErrored||T||(T=L)}}}for(t=0;t<H.length;t++){var J=H[t];d=J.module,u=[d];try{S(d)}catch(L){if("function"===typeof J.errorHandler)try{J.errorHandler(L)}catch(N){r.onErrored&&r.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:N,originalError:L}),r.ignoreErrored||T||(T=N),T||(T=L)}else r.onErrored&&r.onErrored({type:"self-accept-errored",moduleId:d,error:L}),r.ignoreErrored||T||(T=L)}}return T?(h("fail"),Promise.reject(T)):(h("idle"),new Promise(function(e){e(m)}))}var A={},q={1:0},D=[],H=[];function R(e){return S.p+"static/js/"+({2:"src-index",3:"src-use-accordion-use-accordion",4:"src-use-form-use-form",5:"src-use-request-use-request"}[e]||e)+"."+{2:"933ed2ca",3:"380e8fcc",4:"80ea4464",5:"840d2086"}[e]+".js"}function S(r){if(A[r])return A[r].exports;var n=A[r]={i:r,l:!1,exports:{},hot:l(r),parents:(a=u,u=[],a),children:[]};return e[r].call(n.exports,n,n.exports,function(e){var r=A[e];if(!r)return S;var n=function(n){return r.hot.active?(A[n]?-1===A[n].parents.indexOf(e)&&A[n].parents.push(e):(u=[e],o=n),-1===r.children.indexOf(n)&&r.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),u=[]),S(n)},t=function(e){return{configurable:!0,enumerable:!0,get:function(){return S[e]},set:function(r){S[e]=r}}};for(var s in S)Object.prototype.hasOwnProperty.call(S,s)&&"e"!==s&&"t"!==s&&Object.defineProperty(n,s,t(s));return n.e=function(e){return"ready"===f&&h("prepare"),b++,S.e(e).then(r,function(e){throw r(),e});function r(){b--,"prepare"===f&&(x[e]||_(e),0===b&&0===y&&E())}},n.t=function(e,r){return 1&r&&(e=n(e)),S.t(e,-2&r)},n}(r)),n.l=!0,n.exports}S.e=function(e){var r=[],n=q[e];if(0!==n)if(n)r.push(n[2]);else{var t=new Promise(function(r,t){n=q[e]=[r,t]});r.push(n[2]=t);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,S.nc&&s.setAttribute("nonce",S.nc),s.src=R(e),0!==s.src.indexOf(window.location.origin+"/")&&(s.crossOrigin="anonymous");var i=new Error;o=function(r){s.onerror=s.onload=null,clearTimeout(d);var n=q[e];if(0!==n){if(n){var t=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;i.message="Loading chunk "+e+" failed.\n("+t+": "+o+")",i.type=t,i.request=o,n[1](i)}q[e]=void 0}};var d=setTimeout(function(){o({type:"timeout",target:s})},12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(r)},S.m=e,S.c=A,S.d=function(e,r,n){S.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},S.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},S.t=function(e,r){if(1&r&&(e=S(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(S.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)S.d(n,t,function(r){return e[r]}.bind(null,t));return n},S.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return S.d(r,"a",r),r},S.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},S.p="/react-handy-hooks/",S.oe=function(e){throw console.error(e),e},S.h=function(){return i};var I=window.webpackJsonp=window.webpackJsonp||[],F=I.push.bind(I);I.push=r,I=I.slice();for(var M=0;M<I.length;M++)r(I[M]);var U=F,z=(D.push([0,0]),n());r([[],{},0,[0,2,3,4,5]])}({"./.docz/app/db.json":function(e){e.exports={config:{title:"React Handy Hooks",description:"Set of useful react hooks",menu:[],version:"1.5.0",repository:"https://github.com/thegrinder/react-handy-hooks",native:!1,codeSandbox:!1,themeConfig:{},separator:"-",base:"/react-handy-hooks/"},entries:[{key:"src/index.mdx",value:{name:"Home",route:"/react-handy-hooks/",id:"6576455a124f9aaefd860597f03a8fe4",filepath:"src/index.mdx",link:"https://github.com/thegrinder/react-handy-hooks/edit/master/src/index.mdx",slug:"src-index",menu:"",headings:[{slug:"react-handy-hooks",depth:1,value:"react-handy-hooks"}]}},{key:"src/useAccordion/useAccordion.mdx",value:{name:"useAccordion",menu:"hooks",id:"abe3c0c322d68e4806d9005aa033e5b9",filepath:"src/useAccordion/useAccordion.mdx",link:"https://github.com/thegrinder/react-handy-hooks/edit/master/src/useAccordion/useAccordion.mdx",slug:"src-use-accordion-use-accordion",route:"/react-handy-hooks/src-use-accordion-use-accordion",headings:[{slug:"useaccordion",depth:1,value:"useAccordion"},{slug:"getheaderprops",depth:3,value:"getHeaderProps"},{slug:"getsectionprops",depth:3,value:"getSectionProps"},{slug:"isactivesection",depth:3,value:"isActiveSection"},{slug:"example",depth:2,value:"Example"}]}},{key:"src/useForm/useForm.mdx",value:{name:"useForm",menu:"hooks",id:"b281ca6cd88bc60b111719f1dfafecd9",filepath:"src/useForm/useForm.mdx",link:"https://github.com/thegrinder/react-handy-hooks/edit/master/src/useForm/useForm.mdx",slug:"src-use-form-use-form",route:"/react-handy-hooks/src-use-form-use-form",headings:[{slug:"useform",depth:1,value:"useForm"},{slug:"arguments",depth:2,value:"Arguments"},{slug:"initialvalues",depth:3,value:"initialValues"},{slug:"validate",depth:3,value:"validate"},{slug:"onsubmit",depth:3,value:"onSubmit"},{slug:"submitting",depth:3,value:"submitting"},{slug:"returned-object",depth:2,value:"Returned object"},{slug:"getfieldprops",depth:3,value:"getFieldProps"},{slug:"invalid",depth:3,value:"invalid"},{slug:"pristine",depth:3,value:"pristine"},{slug:"submitting-1",depth:3,value:"submitting"},{slug:"handlesubmit",depth:3,value:"handleSubmit"},{slug:"resetform",depth:3,value:"resetForm"},{slug:"example",depth:2,value:"Example"}]}},{key:"src/useRequest/useRequest.mdx",value:{name:"useRequest",menu:"hooks",id:"b56580a351c00fe8fc7a110abb73b875",filepath:"src/useRequest/useRequest.mdx",link:"https://github.com/thegrinder/react-handy-hooks/edit/master/src/useRequest/useRequest.mdx",slug:"src-use-request-use-request",route:"/react-handy-hooks/src-use-request-use-request",headings:[{slug:"userequest",depth:1,value:"useRequest"},{slug:"state",depth:2,value:"State"},{slug:"actions",depth:2,value:"Actions"},{slug:"loading",depth:3,value:"loading"},{slug:"succeeded",depth:3,value:"succeeded"},{slug:"failed",depth:3,value:"failed"},{slug:"fulfilled",depth:3,value:"fulfilled"},{slug:"example",depth:2,value:"Example"}]}}],props:[]}},"./.docz/app/index.jsx":function(e,r,n){"use strict";n.r(r);var t=n("./node_modules/react/index.js"),o=n.n(t),s=n("./node_modules/react-dom/index.js"),i=n.n(s),d=n("./node_modules/docz/dist/index.esm.js"),c=n("./node_modules/docz-theme-default/dist/index.esm.js"),u={"src/index.mdx":function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"./src/index.mdx"))},"src/useAccordion/useAccordion.mdx":function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"./src/useAccordion/useAccordion.mdx"))},"src/useForm/useForm.mdx":function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"./src/useForm/useForm.mdx"))},"src/useRequest/useRequest.mdx":function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"./src/useRequest/useRequest.mdx"))}},a=n("./.docz/app/db.json"),l=function(){return o.a.createElement(c.a,{linkComponent:d.b,db:a},o.a.createElement(d.d,{imports:u}))},p=[],f=[],h=function(){return f.forEach(function(e){return e&&e()})},m=document.querySelector("#root");!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;p.forEach(function(e){return e&&e()}),i.a.render(o.a.createElement(e,null),m,h)}(l)},0:function(e,r,n){e.exports=n("./.docz/app/index.jsx")}});
//# sourceMappingURL=app.9dfb7dddabfc36baeb13.js.map