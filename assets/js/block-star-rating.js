!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=window.lodash},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?s(e):t}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(d,React.Component);var t,n,r,a,y=(r=d,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(r);if(a){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return i(this,e)});function d(){var e;c(this,d);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return p(s(e=y.call.apply(y,[this].concat(n))),"getElementStyle",(function(e){var t={outline:"dashicons dashicons-star-empty",colored:"dashicons dashicons-star-filled custom-color",full:"dashicons dashicons-star-filled"},n=o.a.chain(e).split(" ").last().replace("is-style-","");return void 0===t[n]&&(n="full"),t[n]})),e}return t=d,(n=[{key:"render",value:function(){var e=this.props,t=e.count,n=e.className,r=e.setAttributes,o=this.getElementStyle(n);r({elementStyle:o});for(var a=[],c=0;c<t;c++)a.push(React.createElement("span",{key:c,className:o}));return React.createElement("div",{className:"star-rating-wrapper"},a)}}])&&l(t.prototype,n),d}(),d=wp.blocks.registerBlockType,__=wp.i18n.__,b=wp.blockEditor,m=b.InspectorControls,v=b.useBlockProps,h=wp.components,g=h.PanelBody,R=h.RangeControl;d("devton/star-rating",{title:__("Star Rating","devton"),description:__("Rate content based on importance and usefulness","devton"),category:"widgets",icon:"star-empty",keywords:[__("Star","devton"),__("Rating","devton"),__("Rate","devton")],styles:[{name:"full",label:__("Full","devton"),isDefault:!0},{name:"outline",label:__("Outline","devton")},{name:"colored",label:__("Colored","devton")}],attributes:{count:{type:"integer",default:5},elementStyle:{type:"string",default:""}},edit:function(e){var t=e.attributes,n=e.setAttributes,r=e.className;return React.createElement("div",{className:r},React.createElement(m,null,React.createElement(g,{title:__("Star Rating Settings","devton"),initialOpen:!0},React.createElement(R,{label:__("Number of stars","devton"),value:t.count,onChange:function(e){return n({count:e})},min:1,max:5}))),React.createElement(y,{count:t.count,className:r,setAttributes:n}))},save:function(e){for(var t=e.attributes,n=v.save(),r=[],o=0;o<t.count;o++)r.push(React.createElement("span",{key:o,className:t.elementStyle}));return React.createElement("div",n,React.createElement("div",{className:"star-rating-wrapper"},r))}})}]);