(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{1186:function(e,a,t){"use strict";t.r(a),t.d(a,"sleep",function(){return v});var n=t(184),l=t.n(n),r=t(7),s=t(241),c=t(2),i=t.n(c),o=t(942),m=t(939),u=t(941),d=t(1025),b=t(937),f=t(938),p=t(940),E=t(998),g=t(945),O=t(982),h=t(240),C=t(245),v=function(e){return new Promise(function(a){return setTimeout(a,e)})};a.default=function(e){var a=Object(h.c)();Object(c.useEffect)(function(){},[]);var t=function(){var t=Object(s.a)(l.a.mark(function t(n){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(n),t.next=3,v(300);case 3:a(Object(C.a)(Object(r.a)({},n,{id:Math.floor(100*Math.random()),name:n.firstName+" "+n.lastName}))),e.history.push("/master/doctor");case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();return i.a.createElement("div",{className:"animated fadeIn"},i.a.createElement(o.b,{onSubmit:t,mutators:{},render:function(e){var a=e.handleSubmit,t=(e.submitting,e.submitError,e.dirtySinceLastSubmit,e.values);return e.form,i.a.createElement("form",{onSubmit:a},i.a.createElement(m.a,null,i.a.createElement(u.a,null,i.a.createElement(d.a,null,i.a.createElement(b.a,null,i.a.createElement(f.a,{xs:"12",md:"6"},i.a.createElement("strong",null,"Bulk Add"))))),i.a.createElement(p.a,null,i.a.createElement(d.a,{row:!0,className:"my-0"},i.a.createElement(f.a,{xs:"12",md:"4"},i.a.createElement(d.a,null,i.a.createElement(E.a,{htmlFor:"firstName"},"Class"),i.a.createElement("select",{className:"form-control"},i.a.createElement("option",null,"Select Class")))),i.a.createElement(f.a,{xs:"12",md:"4"},i.a.createElement(d.a,null,i.a.createElement(E.a,{htmlFor:"lastName"},"Section"),i.a.createElement("select",{className:"form-control"},i.a.createElement("option",null,"Select Section"))))),i.a.createElement(d.a,{row:!0,className:"my-0"},i.a.createElement(f.a,{xs:"12",md:"4"},i.a.createElement(d.a,null,i.a.createElement(g.a,{color:"primary",size:"sm",className:" mr-1"},"Generate Csv"),i.a.createElement(g.a,{color:"warning",size:"sm",className:" mr-1"},"Select Csv"),i.a.createElement(g.a,{color:"success",size:"sm",className:" mr-1"},"Import Csv")))),i.a.createElement(d.a,{row:!0},i.a.createElement(O.a,null,i.a.createElement("ol",null,i.a.createElement("li",null,"At First Select The Class And Section."),i.a.createElement("li",null,'After Selecting Class And Section Click "Generate CSV File".'),i.a.createElement("li",null,'Open The Downloaded "bulk_student.csv" File. Enter Student Details As Written In There And Remember Take The Parent ID From Parent Table.'),i.a.createElement("li",null,'Save The Edited "bulk_student.csv" File.'),i.a.createElement("li",null,'Click The "Select CSV File" And Choose The File You Just Edited.'),i.a.createElement("li",null,"Import That File."),i.a.createElement("li",null,'Hit "Import CSV File".')))))),i.a.createElement("pre",null,JSON.stringify(t,null,2)))}}))}},944:function(e,a,t){"use strict";var n=t(45),l=t(183),r=t(936),s=t(2),c=t.n(s),i=t(116),o=t.n(i),m=t(931),u=t.n(m),d=t(946),b=t(932),f=Object(r.a)({},d.Transition.propTypes,{children:o.a.oneOfType([o.a.arrayOf(o.a.node),o.a.node]),tag:b.p,baseClass:o.a.string,baseClassActive:o.a.string,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])}),p=Object(r.a)({},d.Transition.defaultProps,{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:b.e.Fade,appear:!0,enter:!0,exit:!0,in:!0});function E(e){var a=e.tag,t=e.baseClass,r=e.baseClassActive,s=e.className,i=e.cssModule,o=e.children,m=e.innerRef,f=Object(l.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),p=Object(b.n)(f,b.c),E=Object(b.m)(f,b.c);return c.a.createElement(d.Transition,p,function(e){var l="entered"===e,d=Object(b.l)(u()(s,t,l&&r),i);return c.a.createElement(a,Object(n.a)({className:d},E,{ref:m}),o)})}E.propTypes=f,E.defaultProps=p,a.a=E},982:function(e,a,t){"use strict";var n=t(45),l=t(183),r=t(936),s=t(2),c=t.n(s),i=t(116),o=t.n(i),m=t(931),u=t.n(m),d=t(932),b=t(944),f={children:o.a.node,className:o.a.string,closeClassName:o.a.string,closeAriaLabel:o.a.string,cssModule:o.a.object,color:o.a.string,fade:o.a.bool,isOpen:o.a.bool,toggle:o.a.func,tag:d.p,transition:o.a.shape(b.a.propTypes),innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},p={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:Object(r.a)({},b.a.defaultProps,{unmountOnExit:!0})};function E(e){var a=e.className,t=e.closeClassName,s=e.closeAriaLabel,i=e.cssModule,o=e.tag,m=e.color,f=e.isOpen,p=e.toggle,E=e.children,g=e.transition,O=e.fade,h=e.innerRef,C=Object(l.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),v=Object(d.l)(u()(a,"alert","alert-"+m,{"alert-dismissible":p}),i),N=Object(d.l)(u()("close",t),i),j=Object(r.a)({},b.a.defaultProps,g,{baseClass:O?g.baseClass:"",timeout:O?g.timeout:0});return c.a.createElement(b.a,Object(n.a)({},C,j,{tag:o,className:v,in:f,role:"alert",innerRef:h}),p?c.a.createElement("button",{type:"button",className:N,"aria-label":s,onClick:p},c.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null,E)}E.propTypes=f,E.defaultProps=p,a.a=E}}]);
//# sourceMappingURL=68.9d96bd15.chunk.js.map