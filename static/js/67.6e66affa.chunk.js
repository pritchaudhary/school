(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{1187:function(e,t,a){"use strict";a.r(t),a.d(t,"sleep",function(){return j});var n=a(185),s=a.n(n),l=a(7),r=a(244),o=a(2),c=a.n(o),m=a(938),i=a(940),u=a(942),f=a(1029),d=a(936),b=a(939),p=a(941),E=a(1002),g=a(949),h=a(986),N=a(243),O=a(248),j=function(e){return new Promise(function(t){return setTimeout(t,e)})};t.default=function(e){var t=Object(N.c)();Object(o.useEffect)(function(){},[]);var a=function(){var a=Object(r.a)(s.a.mark(function a(n){return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return console.log(n),a.next=3,j(300);case 3:t(Object(O.a)(Object(l.a)({},n,{id:Math.floor(100*Math.random()),name:n.firstName+" "+n.lastName}))),e.history.push("/master/doctor");case 5:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}();return c.a.createElement("div",{className:"animated fadeIn"},c.a.createElement(m.b,{onSubmit:a,mutators:{},render:function(e){var t=e.handleSubmit,a=(e.submitting,e.submitError,e.dirtySinceLastSubmit,e.values);return e.form,c.a.createElement("form",{onSubmit:t},c.a.createElement(i.a,null,c.a.createElement(u.a,null,c.a.createElement(f.a,null,c.a.createElement(d.a,null,c.a.createElement(b.a,{xs:"12",md:"6"},c.a.createElement("strong",null,"Promote Student"))))),c.a.createElement(p.a,null,c.a.createElement(f.a,{row:!0,className:"my-0"},c.a.createElement(b.a,{xs:"12",md:"3"},c.a.createElement(f.a,null,c.a.createElement(E.a,{htmlFor:"firstName"},"Current Session"),c.a.createElement("select",{className:"form-control"},c.a.createElement("option",null,"Select Class")))),c.a.createElement(b.a,{xs:"12",md:"3"},c.a.createElement(f.a,null,c.a.createElement(E.a,{htmlFor:"lastName"},"Promote To Session"),c.a.createElement("select",{className:"form-control"},c.a.createElement("option",null,"Select Section")))),c.a.createElement(b.a,{xs:"12",md:"3"},c.a.createElement(f.a,null,c.a.createElement(E.a,{htmlFor:"lastName"},"Promotion From Class"),c.a.createElement("select",{className:"form-control"},c.a.createElement("option",null,"Select Section")))),c.a.createElement(b.a,{xs:"12",md:"3"},c.a.createElement(f.a,null,c.a.createElement(E.a,{htmlFor:"lastName"},"Promotion To Class"),c.a.createElement("select",{className:"form-control"},c.a.createElement("option",null,"Select Section"))))),c.a.createElement(f.a,{row:!0,className:"my-0"},c.a.createElement(b.a,{xs:"12",md:"4"},c.a.createElement(f.a,null,c.a.createElement(g.a,{color:"success",size:"sm",className:" mr-1"},"Promote")))),c.a.createElement(f.a,{row:!0},c.a.createElement(h.a,null,c.a.createElement("h4",null," Student Promotion Notes "),"Promoting student from the present class to the next class will create an enrollment of that student to the next session. Make sure to select correct class options from the select menu before promoting.If you don't want to promote a student to the next class, please select that option. That will not promote the student to the next class but it will create an enrollment to the next session but in the same class.")))),c.a.createElement("pre",null,JSON.stringify(a,null,2)))}}))}},936:function(e,t,a){"use strict";var n=a(36),s=a(106),l=a(2),r=a.n(l),o=a(105),c=a.n(o),m=a(931),i=a.n(m),u=a(932),f={tag:u.p,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool},d=function(e){var t=e.className,a=e.cssModule,l=e.noGutters,o=e.tag,c=e.form,m=Object(s.a)(e,["className","cssModule","noGutters","tag","form"]),f=Object(u.l)(i()(t,l?"no-gutters":null,c?"form-row":"row"),a);return r.a.createElement(o,Object(n.a)({},m,{className:f}))};d.propTypes=f,d.defaultProps={tag:"div"},t.a=d},943:function(e,t,a){"use strict";var n=a(36),s=a(106),l=a(937),r=a(2),o=a.n(r),c=a(105),m=a.n(c),i=a(931),u=a.n(i),f=a(946),d=a(932),b=Object(l.a)({},f.Transition.propTypes,{children:m.a.oneOfType([m.a.arrayOf(m.a.node),m.a.node]),tag:d.p,baseClass:m.a.string,baseClassActive:m.a.string,className:m.a.string,cssModule:m.a.object,innerRef:m.a.oneOfType([m.a.object,m.a.string,m.a.func])}),p=Object(l.a)({},f.Transition.defaultProps,{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:d.e.Fade,appear:!0,enter:!0,exit:!0,in:!0});function E(e){var t=e.tag,a=e.baseClass,l=e.baseClassActive,r=e.className,c=e.cssModule,m=e.children,i=e.innerRef,b=Object(s.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),p=Object(d.n)(b,d.c),E=Object(d.m)(b,d.c);return o.a.createElement(f.Transition,p,function(e){var s="entered"===e,f=Object(d.l)(u()(r,a,s&&l),c);return o.a.createElement(t,Object(n.a)({className:f},E,{ref:i}),m)})}E.propTypes=b,E.defaultProps=p,t.a=E},986:function(e,t,a){"use strict";var n=a(36),s=a(106),l=a(937),r=a(2),o=a.n(r),c=a(105),m=a.n(c),i=a(931),u=a.n(i),f=a(932),d=a(943),b={children:m.a.node,className:m.a.string,closeClassName:m.a.string,closeAriaLabel:m.a.string,cssModule:m.a.object,color:m.a.string,fade:m.a.bool,isOpen:m.a.bool,toggle:m.a.func,tag:f.p,transition:m.a.shape(d.a.propTypes),innerRef:m.a.oneOfType([m.a.object,m.a.string,m.a.func])},p={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:Object(l.a)({},d.a.defaultProps,{unmountOnExit:!0})};function E(e){var t=e.className,a=e.closeClassName,r=e.closeAriaLabel,c=e.cssModule,m=e.tag,i=e.color,b=e.isOpen,p=e.toggle,E=e.children,g=e.transition,h=e.fade,N=e.innerRef,O=Object(s.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),j=Object(f.l)(u()(t,"alert","alert-"+i,{"alert-dismissible":p}),c),v=Object(f.l)(u()("close",a),c),w=Object(l.a)({},d.a.defaultProps,g,{baseClass:h?g.baseClass:"",timeout:h?g.timeout:0});return o.a.createElement(d.a,Object(n.a)({},O,w,{tag:m,className:j,in:b,role:"alert",innerRef:N}),p?o.a.createElement("button",{type:"button",className:v,"aria-label":r,onClick:p},o.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null,E)}E.propTypes=b,E.defaultProps=p,t.a=E}}]);
//# sourceMappingURL=67.6e66affa.chunk.js.map