(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{1186:function(e,a,t){"use strict";t.r(a),t.d(a,"sleep",function(){return v});var n=t(185),l=t.n(n),s=t(7),r=t(244),c=t(2),o=t.n(c),i=t(938),m=t(940),u=t(942),d=t(1029),f=t(936),b=t(939),p=t(941),E=t(1002),g=t(949),O=t(986),N=t(243),h=t(248),v=function(e){return new Promise(function(a){return setTimeout(a,e)})};a.default=function(e){var a=Object(N.c)();Object(c.useEffect)(function(){},[]);var t=function(){var t=Object(r.a)(l.a.mark(function t(n){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(n),t.next=3,v(300);case 3:a(Object(h.a)(Object(s.a)({},n,{id:Math.floor(100*Math.random()),name:n.firstName+" "+n.lastName}))),e.history.push("/master/doctor");case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();return o.a.createElement("div",{className:"animated fadeIn"},o.a.createElement(i.b,{onSubmit:t,mutators:{},render:function(e){var a=e.handleSubmit,t=(e.submitting,e.submitError,e.dirtySinceLastSubmit,e.values);return e.form,o.a.createElement("form",{onSubmit:a},o.a.createElement(m.a,null,o.a.createElement(u.a,null,o.a.createElement(d.a,null,o.a.createElement(f.a,null,o.a.createElement(b.a,{xs:"12",md:"6"},o.a.createElement("strong",null,"Bulk Add"))))),o.a.createElement(p.a,null,o.a.createElement(d.a,{row:!0,className:"my-0"},o.a.createElement(b.a,{xs:"12",md:"4"},o.a.createElement(d.a,null,o.a.createElement(E.a,{htmlFor:"firstName"},"Class"),o.a.createElement("select",{className:"form-control"},o.a.createElement("option",null,"Select Class")))),o.a.createElement(b.a,{xs:"12",md:"4"},o.a.createElement(d.a,null,o.a.createElement(E.a,{htmlFor:"lastName"},"Section"),o.a.createElement("select",{className:"form-control"},o.a.createElement("option",null,"Select Section"))))),o.a.createElement(d.a,{row:!0,className:"my-0"},o.a.createElement(b.a,{xs:"12",md:"4"},o.a.createElement(d.a,null,o.a.createElement(g.a,{color:"primary",size:"sm",className:" mr-1"},"Generate Csv"),o.a.createElement(g.a,{color:"warning",size:"sm",className:" mr-1"},"Select Csv"),o.a.createElement(g.a,{color:"success",size:"sm",className:" mr-1"},"Import Csv")))),o.a.createElement(d.a,{row:!0},o.a.createElement(O.a,null,o.a.createElement("ol",null,o.a.createElement("li",null,"At First Select The Class And Section."),o.a.createElement("li",null,'After Selecting Class And Section Click "Generate CSV File".'),o.a.createElement("li",null,'Open The Downloaded "bulk_student.csv" File. Enter Student Details As Written In There And Remember Take The Parent ID From Parent Table.'),o.a.createElement("li",null,'Save The Edited "bulk_student.csv" File.'),o.a.createElement("li",null,'Click The "Select CSV File" And Choose The File You Just Edited.'),o.a.createElement("li",null,"Import That File."),o.a.createElement("li",null,'Hit "Import CSV File".')))))),o.a.createElement("pre",null,JSON.stringify(t,null,2)))}}))}},936:function(e,a,t){"use strict";var n=t(36),l=t(106),s=t(2),r=t.n(s),c=t(105),o=t.n(c),i=t(931),m=t.n(i),u=t(932),d={tag:u.p,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool},f=function(e){var a=e.className,t=e.cssModule,s=e.noGutters,c=e.tag,o=e.form,i=Object(l.a)(e,["className","cssModule","noGutters","tag","form"]),d=Object(u.l)(m()(a,s?"no-gutters":null,o?"form-row":"row"),t);return r.a.createElement(c,Object(n.a)({},i,{className:d}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},943:function(e,a,t){"use strict";var n=t(36),l=t(106),s=t(937),r=t(2),c=t.n(r),o=t(105),i=t.n(o),m=t(931),u=t.n(m),d=t(946),f=t(932),b=Object(s.a)({},d.Transition.propTypes,{children:i.a.oneOfType([i.a.arrayOf(i.a.node),i.a.node]),tag:f.p,baseClass:i.a.string,baseClassActive:i.a.string,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])}),p=Object(s.a)({},d.Transition.defaultProps,{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:f.e.Fade,appear:!0,enter:!0,exit:!0,in:!0});function E(e){var a=e.tag,t=e.baseClass,s=e.baseClassActive,r=e.className,o=e.cssModule,i=e.children,m=e.innerRef,b=Object(l.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),p=Object(f.n)(b,f.c),E=Object(f.m)(b,f.c);return c.a.createElement(d.Transition,p,function(e){var l="entered"===e,d=Object(f.l)(u()(r,t,l&&s),o);return c.a.createElement(a,Object(n.a)({className:d},E,{ref:m}),i)})}E.propTypes=b,E.defaultProps=p,a.a=E},986:function(e,a,t){"use strict";var n=t(36),l=t(106),s=t(937),r=t(2),c=t.n(r),o=t(105),i=t.n(o),m=t(931),u=t.n(m),d=t(932),f=t(943),b={children:i.a.node,className:i.a.string,closeClassName:i.a.string,closeAriaLabel:i.a.string,cssModule:i.a.object,color:i.a.string,fade:i.a.bool,isOpen:i.a.bool,toggle:i.a.func,tag:d.p,transition:i.a.shape(f.a.propTypes),innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},p={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:Object(s.a)({},f.a.defaultProps,{unmountOnExit:!0})};function E(e){var a=e.className,t=e.closeClassName,r=e.closeAriaLabel,o=e.cssModule,i=e.tag,m=e.color,b=e.isOpen,p=e.toggle,E=e.children,g=e.transition,O=e.fade,N=e.innerRef,h=Object(l.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),v=Object(d.l)(u()(a,"alert","alert-"+m,{"alert-dismissible":p}),o),C=Object(d.l)(u()("close",t),o),j=Object(s.a)({},f.a.defaultProps,g,{baseClass:O?g.baseClass:"",timeout:O?g.timeout:0});return c.a.createElement(f.a,Object(n.a)({},h,j,{tag:i,className:v,in:b,role:"alert",innerRef:N}),p?c.a.createElement("button",{type:"button",className:C,"aria-label":r,onClick:p},c.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null,E)}E.propTypes=b,E.defaultProps=p,a.a=E}}]);
//# sourceMappingURL=66.7314b520.chunk.js.map