(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{1004:function(e,a,t){"use strict";var n=t(2),r=t.n(n),m=t(938),l=t(1029),c=t(939),u=t(1002),s=t(947),o=t(971),i=t(243),E=function(e){var a=e.values,t=Object(i.d)(function(e){return e.departments.data}).map(function(e){var a=e.id;return{label:e.name,value:a}});return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{row:!0},r.a.createElement(c.a,{md:"2"},r.a.createElement(u.a,{htmlFor:"name"},"Name")),r.a.createElement(c.a,{xs:"12",md:"10"},r.a.createElement(m.a,{name:"name"},function(e){var a=e.input;e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,Object.assign({type:"text",id:"name"},a)))}))),r.a.createElement(l.a,{row:!0},r.a.createElement(c.a,{md:"2"},r.a.createElement(u.a,{htmlFor:"code"},"Code")),r.a.createElement(c.a,{xs:"12",md:"2"},r.a.createElement(m.a,{name:"code"},function(e){var a=e.input;e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,Object.assign({type:"text"},a)))})),r.a.createElement(c.a,{xs:"12",md:"2"},r.a.createElement(u.a,{htmlFor:"rate"},"Rate")),r.a.createElement(c.a,{xs:"12",md:"2"},r.a.createElement(m.a,{name:"rate"},function(e){var a=e.input;e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,Object.assign({type:"text"},a)))})),r.a.createElement(c.a,{xs:"12",md:"2"},r.a.createElement(u.a,{htmlFor:"format"},"Format")),r.a.createElement(c.a,{xs:"12",md:"2"},r.a.createElement(m.a,{name:"format"},function(e){var a=e.input;e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,Object.assign({type:"text"},a)))}))),r.a.createElement(l.a,{row:!0},r.a.createElement(c.a,{xs:"12",md:"2"},r.a.createElement(u.a,{htmlFor:"department"},"Department")),r.a.createElement(c.a,{xs:"12",md:"4"},r.a.createElement(m.a,{name:"department"},function(e){var n=e.input,m=n.onChange,l=n.name;return r.a.createElement(o.a,{name:l,value:a.department?t.filter(function(e){return e.value===a.department}):a.department,options:t,onChange:function(e){m(e.value)}})}))),r.a.createElement(l.a,{row:!0},r.a.createElement(c.a,{xs:"12",md:"2"},r.a.createElement(u.a,{htmlFor:"footer"},"Footer")),r.a.createElement(c.a,{xs:"12",md:"10"},r.a.createElement(m.a,{name:"footer"},function(e){var a=e.input;e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,Object.assign({type:"textarea"},a,{row:"5"})))}))),r.a.createElement(l.a,{row:!0},r.a.createElement(c.a,{xs:"12",md:"2"},r.a.createElement(u.a,{htmlFor:"RepostName"},"Report Name")),r.a.createElement(c.a,{xs:"12",md:"10"},r.a.createElement(m.a,{name:"ReportName"},function(e){var a=e.input;e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,Object.assign({type:"text"},a)))}))))};E.defaultProps={values:{}},a.a=E},1179:function(e,a,t){"use strict";t.r(a),t.d(a,"sleep",function(){return F});var n=t(185),r=t.n(n),m=t(7),l=t(244),c=t(2),u=t.n(c),s=t(938),o=t(936),i=t(939),E=t(940),d=t(942),p=t(1029),f=t(941),b=t(950),v=t(243),g=t(1004),h=t(250),x=t(944),F=function(e){return new Promise(function(a){return setTimeout(a,e)})};a.default=function(e){var a=Object(v.c)();Object(c.useEffect)(function(){},[]);var t=function(){var t=Object(l.a)(r.a.mark(function t(n){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F(300);case 2:a(Object(h.a)(Object(m.a)({},n,{id:Math.floor(100*Math.random())}))),e.history.push("/master/service");case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();return u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement(s.b,{onSubmit:t,mutators:{},render:function(e){var a=e.handleSubmit,t=e.submitting,n=(e.submitError,e.dirtySinceLastSubmit,e.values);return e.form,u.a.createElement("form",{onSubmit:a,className:"form-horizontal"},u.a.createElement(o.a,null,u.a.createElement(i.a,{xs:"12",sm:"12"},u.a.createElement(E.a,null,u.a.createElement(d.a,null,u.a.createElement(p.a,null,u.a.createElement(o.a,null,u.a.createElement(i.a,{xs:"12",md:"6"},u.a.createElement("strong",null,"Service Add"))))),u.a.createElement(f.a,null,u.a.createElement(g.a,{values:n})),u.a.createElement(b.a,null,u.a.createElement(x.a,{backUrl:"/department",submitting:t}))))),u.a.createElement("pre",null,JSON.stringify(n,null,2)))}}))}},944:function(e,a,t){"use strict";var n=t(2),r=t.n(n),m=t(949),l=t(242),c=function(e){var a=e.backUrl,t=e.submitting;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{type:"submit",size:"sm",color:"primary",className:"pull-right",disabled:t},t&&r.a.createElement("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"})," ",r.a.createElement("i",{className:"fa fa-dot-circle-o"}),"Save"),r.a.createElement(l.Link,{to:a,className:"pull-right mr-1",size:"sm"},r.a.createElement(m.a,{type:"submit",size:"sm",color:"danger",className:"pull-right"},r.a.createElement("i",{className:"fa fa-dot-circle-o"})," Back")))};c.defaultProps={},a.a=c}}]);
//# sourceMappingURL=71.27b70dce.chunk.js.map