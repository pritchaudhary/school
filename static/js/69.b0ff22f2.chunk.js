(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{1006:function(e,a,t){"use strict";var n=t(2),r=t.n(n),m=t(938),l=t(1029),c=t(939),u=t(1002),o=t(947),i=t(971),s=function(e){var a=e.values,t=e.form,n=[{label:"Parameter 1",value:1},{label:"Parameter 2",value:2}];return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{row:!0},r.a.createElement(c.a,{md:"2"},r.a.createElement(u.a,{htmlFor:"name"},"Name")),r.a.createElement(c.a,{xs:"12",md:"9"},r.a.createElement(m.a,{name:"name"},function(e){var a=e.input;e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,Object.assign({type:"text"},a)))}))),r.a.createElement(l.a,{row:!0},r.a.createElement(c.a,{md:"2"},r.a.createElement(u.a,{htmlFor:"reportName"},"Report Name")),r.a.createElement(c.a,{xs:"12",md:"9"},r.a.createElement(m.a,{name:"reportName"},function(e){var a=e.input;e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,Object.assign({type:"text"},a)))}))),r.a.createElement(l.a,{row:!0},r.a.createElement(c.a,{md:"2"},r.a.createElement(u.a,{htmlFor:"unit"},"Unit")),r.a.createElement(c.a,{xs:"12",md:"3"},r.a.createElement(m.a,{name:"unit"},function(e){var a=e.input;e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,Object.assign({type:"text"},a)))}))),r.a.createElement(l.a,{row:!0},r.a.createElement(c.a,{md:"2"},r.a.createElement(u.a,{htmlFor:"rate"},"Rate")),r.a.createElement(c.a,{xs:"12",md:"3"},r.a.createElement(m.a,{name:"rate"},function(e){var a=e.input;e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,Object.assign({type:"text"},a)))}))),r.a.createElement(l.a,{row:!0},r.a.createElement(c.a,{md:"2"},r.a.createElement(u.a,{htmlFor:"method"},"Method")),r.a.createElement(c.a,{xs:"12",md:"10"},r.a.createElement(m.a,{name:"method"},function(e){var a=e.input;e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,Object.assign({type:"text"},a)))}))),r.a.createElement(l.a,{row:!0},r.a.createElement(c.a,{md:"2"},r.a.createElement(u.a,{htmlFor:"suffix"},"Suffix")),r.a.createElement(c.a,{xs:"12",md:"3"},r.a.createElement(m.a,{name:"suffix"},function(e){var a=e.input;e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,Object.assign({type:"text"},a)))}))),r.a.createElement(l.a,{row:!0},r.a.createElement(c.a,{md:"2"},r.a.createElement(u.a,{htmlFor:"formulae"},"Formulae")),r.a.createElement(c.a,{xs:"12",md:"3"},r.a.createElement(m.a,{name:"formulae"},function(e){var a=e.input;e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,Object.assign({type:"text"},a)))}))),r.a.createElement(l.a,{row:!0},r.a.createElement(c.a,{md:"2"},r.a.createElement(u.a,{htmlFor:"formulae"})),r.a.createElement(c.a,{xs:"12",md:"3"},r.a.createElement(m.a,{name:"formulae"},function(e){e.input,e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{name:"department"},function(e){var m=e.input.name;return r.a.createElement(i.a,{placeholder:"Select parameter for formulae",name:m,options:n,onChange:function(e){!function(e){var n=a.formulae,r=(n||"")+"{"+String(e)+"}";t.change("formulae",r)}(e.value)}})}))}))))};s.defaultProps={},a.a=s},1183:function(e,a,t){"use strict";t.r(a),t.d(a,"sleep",function(){return F});var n=t(185),r=t.n(n),m=t(7),l=t(244),c=t(2),u=t.n(c),o=t(938),i=t(936),s=t(939),E=t(940),f=t(942),p=t(1029),d=t(941),b=t(950),g=t(243),h=t(1006),v=t(252),x=t(944),F=function(e){return new Promise(function(a){return setTimeout(a,e)})};a.default=function(e){var a=Object(g.c)();Object(c.useEffect)(function(){},[]);var t=function(){var t=Object(l.a)(r.a.mark(function t(n){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(n),t.next=3,F(300);case 3:a(Object(v.a)(Object(m.a)({},n,{id:Math.floor(100*Math.random()),name:n.firstName+" "+n.lastName}))),e.history.push("/master/doctor");case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();return u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement(o.b,{onSubmit:t,mutators:{},render:function(e){var a=e.handleSubmit,t=e.submitting,n=(e.submitError,e.dirtySinceLastSubmit,e.values),r=e.form;return u.a.createElement("form",{onSubmit:a,className:"form-horizontal"},u.a.createElement(i.a,null,u.a.createElement(s.a,{xs:"12",sm:"12"},u.a.createElement(E.a,null,u.a.createElement(f.a,null,u.a.createElement(p.a,null,u.a.createElement(i.a,null,u.a.createElement(s.a,{xs:"12",md:"6"},u.a.createElement("strong",null,"Parameter"))))),u.a.createElement(d.a,null,u.a.createElement(h.a,{values:n,form:r})),u.a.createElement(b.a,null,u.a.createElement(x.a,{backUrl:"/parameter",submitting:t}))))),u.a.createElement("pre",null,JSON.stringify(n,null,2)))}}))}},944:function(e,a,t){"use strict";var n=t(2),r=t.n(n),m=t(949),l=t(242),c=function(e){var a=e.backUrl,t=e.submitting;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{type:"submit",size:"sm",color:"primary",className:"pull-right",disabled:t},t&&r.a.createElement("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"})," ",r.a.createElement("i",{className:"fa fa-dot-circle-o"}),"Save"),r.a.createElement(l.Link,{to:a,className:"pull-right mr-1",size:"sm"},r.a.createElement(m.a,{type:"submit",size:"sm",color:"danger",className:"pull-right"},r.a.createElement("i",{className:"fa fa-dot-circle-o"})," Back")))};c.defaultProps={},a.a=c}}]);
//# sourceMappingURL=69.b0ff22f2.chunk.js.map