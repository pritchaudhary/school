(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1045:function(e,t,n){"use strict";n.r(t);var r=n(244),o=n(235),a=n(236),i=n(238),d=n(237),l=n(239),u=n(2),s=n.n(u),c=n(931),f=n.n(c),p=n(966),y=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,o=e.cssModule,a=e.dataBox,i=(Object(r.a)(e,["children","className","cssModule","dataBox"]),a()),d=i.variant;if(!d||["facebook","twitter","linkedin","google-plus"].indexOf(d)<0)return null;var l="bg-"+d,u="fa fa-"+d,c=Object.keys(i),y=Object.values(i),m=f()("".concat("brand-card","-header"),l),b=f()("".concat("brand-card","-body")),h=Object(p.mapToCssModules)(f()("brand-card",n),o);return s.a.createElement("div",{className:h},s.a.createElement("div",{className:m},s.a.createElement("i",{className:u}),t),s.a.createElement("div",{className:b},s.a.createElement("div",null,s.a.createElement("div",{className:"text-value"},y[1]),s.a.createElement("div",{className:"text-uppercase text-muted small"},c[1])),s.a.createElement("div",null,s.a.createElement("div",{className:"text-value"},y[2]),s.a.createElement("div",{className:"text-uppercase text-muted small"},c[2]))))}}]),t}(u.Component);y.defaultProps={dataBox:function(){return{variant:"facebook",friends:"-",feeds:"-"}}},t.default=y},966:function(e,t,n){"use strict";var r=n(970);t.__esModule=!0,t.getScrollbarWidth=d,t.setScrollbarWidth=l,t.isBodyOverflowing=u,t.getOriginalBodyPadding=function(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)},t.conditionallyUpdateScrollbar=function(){var e=d(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;u()&&l(n+e)},t.setGlobalCssModule=function(e){o=e},t.mapToCssModules=function(e,t){void 0===e&&(e="");void 0===t&&(t=o);return t?e.split(" ").map(function(e){return t[e]||e}).join(" "):e},t.omit=function(e,t){var n={};return Object.keys(e).forEach(function(r){-1===t.indexOf(r)&&(n[r]=e[r])}),n},t.pick=function(e,t){var n,r=Array.isArray(t)?t:[t],o=r.length,a={};for(;o>0;)n=r[o-=1],a[n]=e[n];return a},t.warnOnce=c,t.deprecated=function(e,t){return function(n,r,o){null!==n[r]&&"undefined"!==typeof n[r]&&c('"'+r+'" property of "'+o+'" has been deprecated.\n'+t);for(var a=arguments.length,i=new Array(a>3?a-3:0),d=3;d<a;d++)i[d-3]=arguments[d];return e.apply(void 0,[n,r,o].concat(i))}},t.DOMElement=p,t.isReactRefObj=h,t.findDOMElements=v,t.isArrayOrNodeList=g,t.getTarget=function(e){var t=v(e);if(g(t))return t[0];return t},t.addMultipleEventListeners=function(e,t,n,r){var o=e;g(o)||(o=[o]);var a=n;"string"===typeof a&&(a=a.split(/\s+/));if(!g(o)||"function"!==typeof t||!Array.isArray(a))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(a,function(e){Array.prototype.forEach.call(o,function(n){n.addEventListener(e,t,r)})}),function(){Array.prototype.forEach.call(a,function(e){Array.prototype.forEach.call(o,function(n){n.removeEventListener(e,t,r)})})}},t.focusableElements=t.defaultToggleEvents=t.canUseDOM=t.PopperPlacements=t.keyCodes=t.TransitionStatuses=t.TransitionPropTypeKeys=t.TransitionTimeouts=t.tagPropType=t.targetPropType=void 0;var o,a=r(n(947)),i=r(n(116));function d(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}function l(e){document.body.style.paddingRight=e>0?e+"px":null}function u(){return document.body.clientWidth<window.innerWidth}var s={};function c(e){s[e]||("undefined"!==typeof console&&console.error(e),s[e]=!0)}var f="object"===typeof window&&window.Element||function(){};function p(e,t,n){if(!(e[t]instanceof f))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}var y=i.default.oneOfType([i.default.string,i.default.func,p,i.default.shape({current:i.default.any})]);t.targetPropType=y;var m=i.default.oneOfType([i.default.func,i.default.string,i.default.shape({$$typeof:i.default.symbol,render:i.default.func}),i.default.arrayOf(i.default.oneOfType([i.default.func,i.default.string,i.default.shape({$$typeof:i.default.symbol,render:i.default.func})]))]);t.tagPropType=m;t.TransitionTimeouts={Fade:150,Collapse:350,Modal:300,Carousel:600};t.TransitionPropTypeKeys=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"];t.TransitionStatuses={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"};t.keyCodes={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80};t.PopperPlacements=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"];var b=!("undefined"===typeof window||!window.document||!window.document.createElement);function h(e){return!(!e||"object"!==typeof e)&&"current"in e}function v(e){if(h(e))return e.current;if((0,a.default)(e))return e();if("string"===typeof e&&b){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function g(e){return null!==e&&(Array.isArray(e)||b&&"number"===typeof e.length)}t.canUseDOM=b;t.defaultToggleEvents=["touchstart","click"];t.focusableElements=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},970:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}}}]);
//# sourceMappingURL=56.af20102d.chunk.js.map