!function(e){function t(t){for(var r,a,l=t[0],i=t[1],c=t[2],f=0,p=[];f<l.length;f++)a=l[f],o[a]&&p.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(u&&u(t);p.length;)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,l=1;l<n.length;l++){var i=n[l];0!==o[i]&&(r=!1)}r&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={0:0},s=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="./";var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=i;s.push(["./src/index.tsx",1]),n()}({"./node_modules/css-loader/index.js!./src/components/App/styles.legacy.css":function(e,t,n){(e.exports=n("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,".app {\r\n  justify-content: flex-start;\r\n  margin: 0;\r\n  padding: var(--m-xl);\r\n}\r\n\r\n#root {\r\n  height: 100%;\r\n}\r\n",""])},"./node_modules/css-loader/index.js!./src/styles/root.css":function(e,t,n){(t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(!1)).i(n("./node_modules/css-loader/index.js!./src/styles/typography.css"),""),t.push([e.i,"/* This is an example of the escape hatch for PostCSS.\r\n * Ideally you want to avoid using this as much as possible.\r\n *\r\n * However, there *are* cases where vanilla CSS is more appropriate\r\n * so this is still provided as a fallback.\r\n*/\r\n\r\n/* Relative path resolution */\r\n\r\n:root {\r\n  --font-color-override: hsl(0, 0%, 0%);\r\n}\r\n\r\n/* Global HTML rules */\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  color: var(--font-color-override);\r\n}\r\n\r\na {\r\n  color: var(--blue-60);\r\n}\r\n",""])},"./node_modules/css-loader/index.js!./src/styles/typography.css":function(e,t,n){(e.exports=n("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,"html {\r\n  font-size: 1em;\r\n}\r\n\r\nbody {\r\n  font-family: Arial, sans-serif;\r\n  font-weight: 400;\r\n  line-height: 1.45;\r\n  color: #333;\r\n}\r\n\r\np {\r\n  margin-bottom: 1.3em;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4 {\r\n  margin: 1.414em 0 0.5em;\r\n  font-weight: inherit;\r\n  line-height: 1.2;\r\n}\r\n\r\nh1 {\r\n  margin-top: 0;\r\n  font-size: 3.157em;\r\n}\r\n\r\nh2 {\r\n  font-size: 2.369em;\r\n}\r\n\r\nh3 {\r\n  font-size: 1.777em;\r\n}\r\n\r\nh4 {\r\n  font-size: 1.333em;\r\n}\r\n\r\nsmall,\r\n.font_small {\r\n  font-size: 0.75em;\r\n}\r\n",""])},"./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./src/components/App/styles.scss":function(e,t,n){(t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,":root{--black:#000;--blue-40:#45a1ff;--blue-50:#0a84ff;--blue-60:#0a84ff;--blue-70:#003eaa;--blue-80:#002275;--blue-90:#000f40;--curve:2px;--green-50:#30e60b;--green-60:#12bc00;--green-70:#058b00;--green-80:#006504;--green-90:#003706;--grey-10:#f9f9f9;--grey-20:#ededf0;--grey-30:#d7d7db;--grey-40:#b1b1b3;--grey-50:#737373;--grey-60:#4a4a4f;--grey-70:#38383d;--grey-80:#2a2a2e;--grey-90:#0c0c0d;--ink-70:#363959;--ink-80:#202340;--ink-90:#0f1126;--m:4px;--m-l:32px;--m-l:calc(var(--m) * 8);--m-m:16px;--m-m:calc(var(--m) * 4);--m-s:8px;--m-s:calc(var(--m) * 2);--m-xl:64px;--m-xl:calc(var(--m) * 16);--magenta-50:#ff1ad9;--magenta-60:#ed00b5;--magenta-70:#b5007f;--magenta-80:#7d004f;--magenta-90:#440027;--orange-50:#ff9400;--orange-60:#d76e00;--orange-70:#a44900;--orange-80:#712b00;--orange-90:#3e1300;--red-50:#ff0039;--red-60:#d70022;--red-70:#a4000f;--red-80:#5a0002;--red-90:#3e0200;--teal-40:#00feff;--teal-50:#00c8d7;--teal-60:#008ea4;--teal-70:#005a71;--teal-80:#002d3e;--white:#fff;--yellow-50:#ffe900;--yellow-60:#d7b600;--yellow-70:#a47f00;--yellow-80:#715100;--yellow-90:#3e2800}@-webkit-keyframes _1yaKCUlEtIQ-iGPo5m-Br3{to{-webkit-transform:rotateX(1turn) rotateY(1turn) rotate(1turn);transform:rotateX(1turn) rotateY(1turn) rotate(1turn)}}@keyframes _1yaKCUlEtIQ-iGPo5m-Br3{to{-webkit-transform:rotateX(1turn) rotateY(1turn) rotate(1turn);transform:rotateX(1turn) rotateY(1turn) rotate(1turn)}}._2NJIZX_RcQUZUpdEbCsXNQ{-webkit-animation:_1yaKCUlEtIQ-iGPo5m-Br3 60s ease-in-out infinite;animation:_1yaKCUlEtIQ-iGPo5m-Br3 60s ease-in-out infinite;border-radius:50%;height:auto;transition:all 1s;width:160px}.k0IxfRu8Nb-cdAiNQ4DWp{align-self:center;border-radius:100px;border-radius:calc(var(--curve) * 50);color:#d76e00;color:var(--orange-60);transition:border-radius .3s ease-in}.k0IxfRu8Nb-cdAiNQ4DWp ._2uLTF1NqLRDgFRDDjIM4oF{font-style:italic}.k0IxfRu8Nb-cdAiNQ4DWp:hover{border-radius:2px;border-radius:var(--curve)}.k0IxfRu8Nb-cdAiNQ4DWp:hover ._2uLTF1NqLRDgFRDDjIM4oF{color:red;text-decoration:underline}._Y5TZDnliC1I-neCaNLFa{display:grid;grid-gap:16px;grid-gap:var(--m-m);grid-template-columns:1fr 1fr;grid-template-rows:1fr 2fr 2fr;margin:0 auto;max-width:960px;max-width:calc(var(--m) * 240)}._Y5TZDnliC1I-neCaNLFa ._2J6H8Y7c5fxcHGabNW7Lz2{grid-column-start:span 3}._Y5TZDnliC1I-neCaNLFa ._2oTSsqqs0CxgdG7fVoPyEf{-webkit-transform-origin:center;align-items:center;display:flex;height:100%;justify-content:center;min-height:300px;outline:2px solid #b1b1b3;outline:solid 2px var(--grey-40);transform-origin:center;transition:all .1s ease-in;width:100%}._Y5TZDnliC1I-neCaNLFa ._2oTSsqqs0CxgdG7fVoPyEf:hover{-webkit-transform:scale(1.025);outline:5px solid #45a1ff;outline:solid 5px var(--blue-40);transform:scale(1.025)}._Y5TZDnliC1I-neCaNLFa ._2oTSsqqs0CxgdG7fVoPyEf:active{-webkit-transform:scale(.975);transform:scale(.975);transition:-webkit-transform .05s;transition:transform .05s;transition:transform .05s,-webkit-transform .05s}._Y5TZDnliC1I-neCaNLFa ._2oTSsqqs0CxgdG7fVoPyEf>*{align-items:center;display:flex;flex-direction:column;height:90%;justify-content:center;width:90%}._Y5TZDnliC1I-neCaNLFa ._2oTSsqqs0CxgdG7fVoPyEf:nth-child(2n){grid-column:1/2}._Y5TZDnliC1I-neCaNLFa ._2oTSsqqs0CxgdG7fVoPyEf:nth-child(odd){grid-column:2/3}",""]),t.locals={robot:"_2NJIZX_RcQUZUpdEbCsXNQ",spin:"_1yaKCUlEtIQ-iGPo5m-Br3",themedDiv:"k0IxfRu8Nb-cdAiNQ4DWp",sub:"_2uLTF1NqLRDgFRDDjIM4oF",grid:"_Y5TZDnliC1I-neCaNLFa",row:"_2J6H8Y7c5fxcHGabNW7Lz2",box:"_2oTSsqqs0CxgdG7fVoPyEf"}},"./src/components/App/hello.jpg":function(e,t,n){e.exports=n.p+"./f/afa648da6fc4a46c.jpg"},"./src/components/App/styles.legacy.css":function(e,t,n){var r=n("./node_modules/css-loader/index.js!./src/components/App/styles.legacy.css");"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n("./node_modules/style-loader/lib/addStyles.js")(r,o);r.locals&&(e.exports=r.locals)},"./src/components/App/styles.scss":function(e,t,n){var r=n("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./src/components/App/styles.scss");"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n("./node_modules/style-loader/lib/addStyles.js")(r,o);r.locals&&(e.exports=r.locals)},"./src/index.tsx":function(e,t,n){"use strict";n.r(t);var r=n("./node_modules/react/index.js"),o=n("./node_modules/react-dom/index.js"),s=n("./node_modules/react-redux/es/index.js"),a=n("./node_modules/redux/es/redux.js"),l=n("./node_modules/redux-thunk/es/index.js"),i=n("./node_modules/connected-react-router/lib/index.js"),c=n("./node_modules/history/createBrowserHistory.js"),u=n.n(c),f=n("./node_modules/history/createHashHistory.js"),p=n.n(f),d=n("./node_modules/react-router-dom/es/Route.js"),m={environment:"github",url:{basePath:"/",publicPath:"./",historyType:"hash"}},b=(n("./node_modules/react-hot-loader/index.js"),n("./node_modules/react-router-dom/es/Switch.js")),y=n("./node_modules/react-router-dom/es/Link.js"),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{text:"Default!"};return r.createElement("p",{style:{fontStyle:"italic"}},e.text)},g=n("./node_modules/typesafe-actions/dist/index.umd.js"),v=Object(g.createAction)("INCREMENT",function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return e({value:t})}}),_=Object(g.createAction)("DECREMENT",function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return e({value:t})}});function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var C=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),E(this,w(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,r["Component"]),function(e,t,n){t&&j(e.prototype,t),n&&j(e,n)}(t,[{key:"render",value:function(){return r.createElement("div",null,r.createElement("div",{className:"value"},this.props.value),r.createElement("button",{className:"increment",onClick:this.props.onIncrementClick},"INCREMENT"),r.createElement("button",{className:"decrement",onClick:this.props.onDecrementClick},"DECREMENT"),r.createElement("button",{className:"increment",onClick:this.props.onIncrementClickAsync},"INCREMENT AFTER 1 SECOND"),r.createElement("a",{href:"https://github.com/gyng/jsapp-boilerplate/blob/master/src/components/Counter/index.tsx"},r.createElement("div",{style:{fontFamily:"monospace"}},"components/Counter/index.tsx")),r.createElement("a",{href:"https://github.com/gyng/jsapp-boilerplate/blob/master/src/containers/Counter.ts"},r.createElement("div",{style:{fontFamily:"monospace"}},"containers/Counter/index.tsx")),r.createElement("a",{href:"https://github.com/gyng/jsapp-boilerplate/blob/master/src/reducers/counters.ts"},r.createElement("div",{style:{fontFamily:"monospace"}},"reducers/counters.ts")))}}]),t}();!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(C,"defaultProps",{value:0});var N=Object(s.connect)(function(e){return{value:e.counters.value}},function(e){return{onDecrementClick:function(){return e(_())},onIncrementClick:function(){return e(v())},onIncrementClickAsync:function(){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;return function(n){setTimeout(function(){return n(v(e))},t)}}())}}})(C);function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var R=n("./src/components/App/hello.jpg"),F=n("./src/components/App/styles.scss");n("./src/styles/root.css"),n("./src/components/App/styles.legacy.css");var A=function(e){return r.createElement("div",D({className:F.box},e),e.children)},L=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),k(this,T(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(t,r["Component"]),function(e,t,n){t&&P(e.prototype,t),n&&P(e,n)}(t,[{key:"render",value:function(){return r.createElement("div",{className:"app ".concat(F.grid)},r.createElement("div",{className:F.row},r.createElement("h1",null,"jsapp-boilerplate"),r.createElement("div",null,r.createElement("a",{href:"https://github.com/gyng/jsapp-boilerplate"},"GitHub")," · ",r.createElement("span",null,"Find me in"," ",r.createElement("a",{href:"https://github.com/gyng/jsapp-boilerplate/blob/master/src/components/App/index.tsx"},r.createElement("code",null,"src/components/App/index.tsx"))))),r.createElement(A,{className:F.box,style:{alignSelf:"flex-start"}},r.createElement(b.a,null,r.createElement(d.a,{path:"/counter",component:N}),r.createElement(d.a,{path:"/",render:function(){return r.createElement(y.a,{to:"/counter"},"Link to /counter. Click to show counter. Back/Forward buttons and page refresh work.")}}))),r.createElement(A,null,r.createElement("div",null,r.createElement("img",{className:F.robot,src:R,alt:"Cute robot?"}),r.createElement(h,{text:"Hello, world!"}))),r.createElement(A,null,r.createElement("div",{className:F.themedDiv,style:{border:"solid 1px grey"}},"This div is themed using ",r.createElement("span",{className:F.sub},"PostCSS")," ","and",r.createElement("span",{className:F.sub},"React's style prop"))),r.createElement(A,null,r.createElement("div",{style:{alignItems:"flex-start"}},r.createElement("div",{style:{marginBottom:"var(--m-m)"}},"Current configuration"),r.createElement("pre",null,JSON.stringify(m,null,2)),r.createElement("p",null,"Configure in"," ",r.createElement("a",{href:"https://github.com/gyng/jsapp-boilerplate/blob/master/config/configValues.js"},r.createElement("code",null,"config/configValues.js"))))))}}]),t}();function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){G(e,t,n[t])})}return e}function G(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var M={counters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{value:0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Object(g.getType)(v):return q({},e,{value:e.value+t.payload.value});case Object(g.getType)(_):return q({},e,{value:e.value-t.payload.value});default:return e}}};function Y(e){return(Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Q(e,t){return!t||"object"!==Y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Z(e){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function X(e,t){return(X=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}!function(){var e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({actionsBlacklist:[]}):a.d,t=(0,{browser:u.a,hash:p.a}[m.url.historyType])({basename:m.url.basePath}),n=Object(a.c)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){H(e,t,n[t])})}return e}({},M)),c=Object(i.connectRouter)(t)(n),f=[l.a,Object(i.routerMiddleware)(t)],b=Object(a.e)(c,e(a.a.apply(void 0,f))),y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Q(this,Z(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&X(e,t)}(t,d.a),t}();o.render(r.createElement(s.Provider,{store:b},r.createElement(i.ConnectedRouter,{history:t},r.createElement(r.Fragment,null,r.createElement(y,{path:"/counter",component:L,unusedProp:"unused"}),r.createElement(y,{path:"/",exact:!0,component:L,unusedProp:"unused"})))),document.getElementById("root"))}()},"./src/styles/root.css":function(e,t,n){var r=n("./node_modules/css-loader/index.js!./src/styles/root.css");"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n("./node_modules/style-loader/lib/addStyles.js")(r,o);r.locals&&(e.exports=r.locals)}});