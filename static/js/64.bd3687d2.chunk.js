(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{1000:function(e,a,t){"use strict";var n=t(2),r=t.n(n),m=t(942),l=t(1025),c=t(938),u=t(998),s=t(947),i=t(967),o=t(240),E=function(e){var a=e.values,t=Object(o.d)(function(e){return e.departments.data}).map(function(e){var a=e.id;return{label:e.name,value:a}});return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{row:!0},r.a.createElement(c.a,{md:"2"},r.a.createElement(u.a,{htmlFor:"name"},"Name")),r.a.createElement(c.a,{xs:"12",md:"10"},r.a.createElement(m.a,{name:"name"},function(e){var a=e.input;e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,Object.assign({type:"text",id:"name"},a)))}))),r.a.createElement(l.a,{row:!0},r.a.createElement(c.a,{md:"2"},r.a.createElement(u.a,{htmlFor:"code"},"Code")),r.a.createElement(c.a,{xs:"12",md:"2"},r.a.createElement(m.a,{name:"code"},function(e){var a=e.input;e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,Object.assign({type:"text"},a)))})),r.a.createElement(c.a,{xs:"12",md:"2"},r.a.createElement(u.a,{htmlFor:"rate"},"Rate")),r.a.createElement(c.a,{xs:"12",md:"2"},r.a.createElement(m.a,{name:"rate"},function(e){var a=e.input;e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,Object.assign({type:"text"},a)))})),r.a.createElement(c.a,{xs:"12",md:"2"},r.a.createElement(u.a,{htmlFor:"format"},"Format")),r.a.createElement(c.a,{xs:"12",md:"2"},r.a.createElement(m.a,{name:"format"},function(e){var a=e.input;e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,Object.assign({type:"text"},a)))}))),r.a.createElement(l.a,{row:!0},r.a.createElement(c.a,{xs:"12",md:"2"},r.a.createElement(u.a,{htmlFor:"department"},"Department")),r.a.createElement(c.a,{xs:"12",md:"4"},r.a.createElement(m.a,{name:"department"},function(e){var n=e.input,m=n.onChange,l=n.name;return r.a.createElement(i.a,{name:l,value:a.department?t.filter(function(e){return e.value===a.department}):a.department,options:t,onChange:function(e){m(e.value)}})}))),r.a.createElement(l.a,{row:!0},r.a.createElement(c.a,{xs:"12",md:"2"},r.a.createElement(u.a,{htmlFor:"footer"},"Footer")),r.a.createElement(c.a,{xs:"12",md:"10"},r.a.createElement(m.a,{name:"footer"},function(e){var a=e.input;e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,Object.assign({type:"textarea"},a,{row:"5"})))}))),r.a.createElement(l.a,{row:!0},r.a.createElement(c.a,{xs:"12",md:"2"},r.a.createElement(u.a,{htmlFor:"RepostName"},"Report Name")),r.a.createElement(c.a,{xs:"12",md:"10"},r.a.createElement(m.a,{name:"ReportName"},function(e){var a=e.input;e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,Object.assign({type:"text"},a)))}))))};E.defaultProps={values:{}},a.a=E},1180:function(e,a,t){"use strict";t.r(a),t.d(a,"sleep",function(){return F});var n=t(184),r=t.n(n),m=t(241),l=t(243),c=t(2),u=t.n(c),s=t(942),i=t(937),o=t(938),E=t(939),d=t(941),p=t(1025),f=t(940),b=t(951),v=t(240),g=t(1e3),x=t(249),h=t(943),F=function(e){return new Promise(function(a){return setTimeout(a,e)})},O={};a.default=function(e){var a=Object(v.c)(),t=Object(c.useState)(O),n=Object(l.a)(t,2),j=n[0],w=n[1],N=Object(v.d)(function(e){return e.services.data}),y=e.match.params.id;Object(c.useEffect)(function(){var e=N.filter(function(e){return e.id===Number(y)}),a=Object(l.a)(e,1)[0];w(a)},[N,y]);var S=function(){var t=Object(m.a)(r.a.mark(function t(n){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(n),t.next=3,F(300);case 3:a(Object(x.e)(y,n)),e.history.push("/master/service");case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();return u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement(s.b,{initialValues:j,onSubmit:S,mutators:{},render:function(e){var a=e.handleSubmit,t=e.submitting,n=(e.submitError,e.dirtySinceLastSubmit,e.values);return e.form,u.a.createElement("form",{onSubmit:a,className:"form-horizontal"},u.a.createElement(i.a,null,u.a.createElement(o.a,{xs:"12",sm:"12"},u.a.createElement(E.a,null,u.a.createElement(d.a,null,u.a.createElement(p.a,null,u.a.createElement(i.a,null,u.a.createElement(o.a,{xs:"12",md:"6"},u.a.createElement("strong",null,"Service Edit"))))),u.a.createElement(f.a,null,u.a.createElement(g.a,{values:n})),u.a.createElement(b.a,null,u.a.createElement(h.a,{backUrl:"/service",submitting:t}))))),u.a.createElement("pre",null,JSON.stringify(n,null,2)))}}))}},943:function(e,a,t){"use strict";var n=t(2),r=t.n(n),m=t(945),l=t(930),c=function(e){var a=e.backUrl,t=e.submitting;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{type:"submit",size:"sm",color:"primary",className:"pull-right",disabled:t},t&&r.a.createElement("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"})," ",r.a.createElement("i",{className:"fa fa-dot-circle-o"}),"Save"),r.a.createElement(l.Link,{to:a,className:"pull-right mr-1",size:"sm"},r.a.createElement(m.a,{type:"submit",size:"sm",color:"danger",className:"pull-right"},r.a.createElement("i",{className:"fa fa-dot-circle-o"})," Back")))};c.defaultProps={},a.a=c}}]);
//# sourceMappingURL=64.bd3687d2.chunk.js.map