(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"./app/containers/HomePage/HomePage.scss":function(e,n,t){var o=t("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./app/containers/HomePage/HomePage.scss");"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t("./node_modules/style-loader/lib/addStyles.js")(o,r);o.locals&&(e.exports=o.locals)},"./app/containers/HomePage/index.js":function(e,n,t){"use strict";t.r(n);var o=t("./node_modules/react/index.js"),r=t.n(o),u=(t("./node_modules/prop-types/index.js"),t("./node_modules/react-redux/lib/index.js"));function i(e,n){return e===n}var a=function(e){for(var n=arguments.length,t=Array(n>1?n-1:0),o=1;o<n;o++)t[o-1]=arguments[o];return function(){for(var n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];var u=0,i=o.pop(),a=function(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every(function(e){return"function"==typeof e})){var t=n.map(function(e){return typeof e}).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+t+"]")}return n}(o),c=e.apply(void 0,[function(){return u++,i.apply(null,arguments)}].concat(t)),s=e(function(){for(var e=[],n=a.length,t=0;t<n;t++)e.push(a[t].apply(null,arguments));return c.apply(null,e)});return s.resultFunc=i,s.dependencies=a,s.recomputations=function(){return u},s.resetRecomputations=function(){return u=0},s}}(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i,t=null,o=null;return function(){return function(e,n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var o=n.length,r=0;r<o;r++)if(!e(n[r],t[r]))return!1;return!0}(n,t,arguments)||(o=e.apply(null,arguments)),t=arguments,o}});t("./app/containers/HomePage/HomePage.scss");function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,n){return!n||"object"!==c(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,n){return(f=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var d,m=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),l(this,p(n).apply(this,arguments))}var t,o,u;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&f(e,n)}(n,r.a.PureComponent),t=n,(o=[{key:"render",value:function(){}}])&&s(t.prototype,o),u&&s(t,u),n}(),y=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;if("object"!=typeof e)throw new Error("createStructuredSelector expects first argument to be an object where each property is a selector, instead received a "+typeof e);var t=Object.keys(e);return n(t.map(function(n){return e[n]}),function(){for(var e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];return n.reduce(function(e,n,o){return e[t[o]]=n,e},{})})}({account:d.account});n.default=Object(u.connect)(y,function(e){return{callbackForAction:function(n){return e({type:"NO_TYPE"})}}})(m)},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./app/containers/HomePage/HomePage.scss":function(e,n,t){(e.exports=t("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([e.i,".home-page h2{font-size:1.5em}.home-page section{margin:3em auto}.home-page section:first-child{margin-top:0}.home-page section.centered{text-align:center}.home-page form{margin-bottom:1em}.home-page form input{outline:none;border-bottom:1px dotted #999}.home-page span.at-prefix{color:black;margin-left:0.4em}\n",""])}}]);