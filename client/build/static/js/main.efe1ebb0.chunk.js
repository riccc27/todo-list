(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{15:function(e,t,a){e.exports={btnAdd:"todo_btnAdd__2igMH",todoContainer:"todo_todoContainer__sPuy5",listTodo:"todo_listTodo__3vUF6",todoItem:"todo_todoItem__1oLwT",listItem:"todo_listItem__3hVda",iconBtn:"todo_iconBtn__1v-Nm"}},18:function(e,t,a){e.exports={main:"profile_main__2peyQ",avatar:"profile_avatar__2Y-cg",form:"profile_form__2-4gz",signupFooter:"profile_signupFooter__2e6kt",button:"profile_button__1psfa"}},19:function(e,t,a){e.exports={main:"login_main__1ZQCL",avatar:"login_avatar__2IcrT",form:"login_form__Y5eFR",loginFooter:"login_loginFooter__3xvZ4",button:"login_button__d9RMx"}},20:function(e,t,a){e.exports={main:"signup_main__2YWoV",avatar:"signup_avatar__3I0dm",form:"signup_form__2DyG3",signupFooter:"signup_signupFooter__1wpu2",button:"signup_button__2NfNt"}},23:function(e,t,a){e.exports={navbar:"navbar_navbar__3BhC6",navLink:"navbar_navLink__mvQpF"}},26:function(e,t,a){e.exports={notFound:"notFound_notFound__2Z2YK",text:"notFound_text__1iXJ6",link:"notFound_link__5b_uM"}},33:function(e,t,a){e.exports={welcome:"home_welcome__3QwV6",todo:"home_todo__3xX55"}},34:function(e,t,a){e.exports={footer:"footer_footer__33Ken",link:"footer_link__3sfHQ"}},53:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(45),r=a.n(c),s=(a(53),a(9)),o=a(3),i=a(4),l=a.n(i),u=a(11),b=a(6),j=a(7),d=a.n(j),m=a(23),p=a.n(m),f=a(31),O=a(47),h=a(1),x=function(){return Object(h.jsxs)("nav",{className:"navbar ".concat(p.a.navbar),children:[Object(h.jsx)("div",{children:"/"===window.location.pathname?Object(h.jsx)(s.b,{to:"/profile",className:p.a.navLink,children:Object(h.jsx)(f.b,{})}):Object(h.jsx)(s.b,{to:"/",className:p.a.navLink,children:Object(h.jsx)(f.a,{})})}),Object(h.jsx)("div",{children:Object(h.jsx)("span",{children:"ToDo"})}),Object(h.jsx)("div",{children:Object(h.jsx)(s.b,{to:"/login",onClick:function(){sessionStorage.clear()},className:p.a.navLink,children:Object(h.jsx)(O.a,{})})})]})},g=a(35),v=a(15),_=a.n(v),N=a(32),y=a(48),w=JSON.parse(sessionStorage.getItem("userLogged")),k=function(){var e=Object(n.useState)(w),t=Object(b.a)(e,2),a=t[0],c=(t[1],Object(n.useState)("")),r=Object(b.a)(c,2),s=r[0],o=r[1],i=Object(n.useState)([]),j=Object(b.a)(i,2),m=j[0],p=j[1];Object(n.useEffect)((function(){f()}),[a]);var f=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("/todos");case 3:t=e.sent,n=t.data,c=n.filter((function(e){return e.userId===a._id})),p(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Error: ".concat(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a._id,c={task:s,userId:n},e.prev=3,e.next=6,d.a.post("/todos",c).then((function(e){var t=e.data;p([].concat(Object(g.a)(m),[t]))}));case 6:o(""),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(u.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.delete("/todos/".concat(t));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log("Error: ".concat(e.t0.message));case 8:a=m.filter((function(e){return e._id!==t})),p(a);case 10:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(g.a)(m),n=a.find((function(e){return e._id===t})),c={completed:!n.completed},n.completed=c.completed,p(a),e.next=7,d.a.put("/todos/".concat(t),c).then((function(e){console.log(e.data.todo)})).catch((function(e){return console.log(e)}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:_.a.todoContainer,children:[Object(h.jsx)("form",{onSubmit:O,children:Object(h.jsxs)("div",{className:"input-group mb-3",children:[Object(h.jsx)("input",{type:"text",className:"form-control bg-secondary",placeholder:"Insert Your Todo","aria-label":"input_todo","aria-describedby":"input_todo",value:s,onChange:function(e){return o(e.target.value)}}),Object(h.jsx)("button",{className:"btn btn-primary ".concat(_.a.btnAdd),type:"submit",id:"add_todo",children:"ADD"})]})}),Object(h.jsx)("ul",{className:_.a.listTodo,children:m&&m.map((function(e){return Object(h.jsxs)("div",{className:_.a.listItem,children:[Object(h.jsx)("span",{className:_.a.iconBtn,onClick:function(){return v(e._id)},children:e.completed?Object(h.jsx)(N.b,{}):Object(h.jsx)(N.a,{})}),Object(h.jsx)("div",{className:_.a.todoItem,children:Object(h.jsx)("li",{className:_.a.todoTask,children:Object(h.jsx)("h4",{className:"m-0",children:e.task})})}),Object(h.jsx)("div",{children:Object(h.jsx)("span",{className:_.a.iconBtn,onClick:function(){return x(e._id)},children:Object(h.jsx)(y.a,{})})})]},e._id)}))})]})},S=a(33),F=a.n(S),C=function(){var e=Object(o.f)(),t=Object(n.useState)(""),a=Object(b.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(sessionStorage.getItem("token")),i=Object(b.a)(s,2),j=i[0];i[1];Object(n.useEffect)((function(){m()}),[j]);var m=function(){var t=Object(u.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!j){t.next=6;break}return a=JSON.parse(sessionStorage.getItem("userLogged")),t.next=4,d.a.get("/users/".concat(a._id)).then((function(e){r(e.data),window.location.reload()})).catch((function(e){return console.log(e)}));case 4:t.next=8;break;case 6:e.replace("/login"),localStorage.clear();case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(x,{}),Object(h.jsxs)("div",{className:"container-l",children:[Object(h.jsx)("div",{className:F.a.welcome,children:Object(h.jsx)("h1",{children:Object(h.jsxs)("b",{children:["Welcome ",c.username]})})}),Object(h.jsx)("div",{className:F.a.todo,children:Object(h.jsx)(k,{})})]})]})},I=a(8),L=a(18),D=a.n(L),q=a(16),T=JSON.parse(sessionStorage.getItem("userLogged")),B=function(){var e=Object(o.f)(),t=Object(n.useState)(""),a=Object(b.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(T),i=Object(b.a)(s,2),j=i[0],m=(i[1],function(){var t=Object(u.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,d.a.put("/users/".concat(j._id),c).then((function(t){e.push("/")})).catch((function(e){return console.log(e)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(x,{}),Object(h.jsx)("div",{className:"container-sm",children:Object(h.jsxs)("div",{className:D.a.main,children:[Object(h.jsx)("div",{className:D.a.avatar,children:Object(h.jsx)(q.c,{})}),Object(h.jsx)("h4",{children:"Profile"}),Object(h.jsxs)("form",{onSubmit:m,className:D.a.form,children:[Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{htmlFor:"email",className:"form-label",children:"Username"}),Object(h.jsx)("input",{type:"text",className:"form-control bg-secondary",id:"username","aria-describedby":"username",required:!0,autoComplete:"username",onChange:function(e){return r(Object(I.a)(Object(I.a)({},c),{},{username:e.target.value}))}})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email"}),Object(h.jsx)("input",{type:"email",className:"form-control bg-secondary",id:"email","aria-describedby":"email",required:!0,autoComplete:"email",onChange:function(e){return r(Object(I.a)(Object(I.a)({},c),{},{username:e.target.value}))}})]}),Object(h.jsx)("div",{className:D.a.signupFooter,children:Object(h.jsx)("button",{className:"btn btn-primary mt-3 ".concat(D.a.button),type:"submit",children:"Update"})})]})]})})]})},E=a(19),J=a.n(E),U=a(25),A=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),i=Object(b.a)(r,2),j=i[0],m=i[1],p=Object(n.useState)(!1),f=Object(b.a)(p,2),O=f[0],x=f[1],g=Object(o.f)();function v(){return(v=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={email:a,password:j},e.next=4,d.a.post("/login",n).then((function(e){sessionStorage.setItem("token",JSON.stringify(e.data.token)),sessionStorage.setItem("userLogged",JSON.stringify(e.data.user[0])),setTimeout((function(){sessionStorage.clear()}),27e5),g.push("/")})).catch((function(e){return console.log(e)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(h.jsx)("div",{className:"container-sm",children:Object(h.jsxs)("div",{className:J.a.main,children:[Object(h.jsx)("div",{className:J.a.avatar,children:Object(h.jsx)(U.a,{})}),Object(h.jsx)("h4",{children:"Login"}),Object(h.jsxs)("form",{onSubmit:function(e){return v.apply(this,arguments)},className:J.a.form,children:[Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email"}),Object(h.jsx)("input",{type:"email",className:"form-control bg-secondary",id:"email","aria-describedby":"email",required:!0,autoComplete:"email",onChange:function(e){return c(e.target.value)}})]}),Object(h.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password"}),Object(h.jsxs)("div",{className:"input-group mb-3",children:[Object(h.jsx)("input",{type:O?"text":"password",className:"form-control bg-secondary",id:"password","aria-describedby":"password",required:!0,onChange:function(e){return m(e.target.value)}}),Object(h.jsx)("span",{className:"input-group-text bg-secondary",onClick:function(){x(!O)},onMouseDown:function(e){e.preventDefault()},children:O?Object(h.jsx)(q.a,{}):Object(h.jsx)(q.b,{})})]}),Object(h.jsxs)("div",{className:J.a.loginFooter,children:[Object(h.jsx)("button",{className:"btn btn-primary my-3 ".concat(J.a.button),type:"submit",children:"Login"}),Object(h.jsx)(s.b,{to:"/signup",children:"Don't have an account? Sign Up"})]})]})]})})},Y=a(20),M=a.n(Y),Q=function(){var e=Object(o.f)(),t=Object(n.useState)(!1),a=Object(b.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)({firstname:"",lastname:"",username:"",email:"",password:""}),j=Object(b.a)(i,2),m=j[0],p=j[1],f=function(){var t=Object(u.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,d.a.post("/users",m).then((function(t){console.log(t.data),e.push("/login")})).catch((function(e){return console.log(e)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"container-sm",children:Object(h.jsxs)("div",{className:M.a.main,children:[Object(h.jsx)("div",{className:M.a.avatar,children:Object(h.jsx)(U.a,{})}),Object(h.jsx)("h4",{children:"Sign Up"}),Object(h.jsxs)("form",{onSubmit:f,className:M.a.form,children:[Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{htmlFor:"email",className:"form-label",children:"First Name"}),Object(h.jsx)("input",{type:"text",className:"form-control bg-secondary",id:"firstName","aria-describedby":"firstName",required:!0,autoComplete:"firstName",onChange:function(e){return p(Object(I.a)(Object(I.a)({},m),{},{firstname:e.target.value}))}})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{htmlFor:"email",className:"form-label",children:"Last Name"}),Object(h.jsx)("input",{type:"text",className:"form-control bg-secondary",id:"lastName","aria-describedby":"lastName",required:!0,autoComplete:"lastName",onChange:function(e){return p(Object(I.a)(Object(I.a)({},m),{},{lastname:e.target.value}))}})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{htmlFor:"email",className:"form-label",children:"Username"}),Object(h.jsx)("input",{type:"text",className:"form-control bg-secondary",id:"username","aria-describedby":"username",required:!0,autoComplete:"username",onChange:function(e){return p(Object(I.a)(Object(I.a)({},m),{},{username:e.target.value}))}})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email"}),Object(h.jsx)("input",{type:"email",className:"form-control bg-secondary",id:"email","aria-describedby":"email",required:!0,autoComplete:"email",onChange:function(e){return p(Object(I.a)(Object(I.a)({},m),{},{email:e.target.value}))}})]}),Object(h.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password"}),Object(h.jsxs)("div",{className:"input-group mb-3",children:[Object(h.jsx)("input",{type:c?"text":"password",className:"form-control bg-secondary",id:"password","aria-describedby":"password",required:!0,onChange:function(e){return p(Object(I.a)(Object(I.a)({},m),{},{password:e.target.value}))}}),Object(h.jsx)("span",{className:"input-group-text bg-secondary",onClick:function(){r(!c)},onMouseDown:function(e){e.preventDefault()},children:c?Object(h.jsx)(q.a,{}):Object(h.jsx)(q.b,{})})]}),Object(h.jsxs)("div",{className:M.a.signupFooter,children:[Object(h.jsx)("button",{className:"btn btn-primary my-3 ".concat(M.a.button),type:"submit",children:"Sign Up"}),Object(h.jsx)(s.b,{to:"/login",children:"Already have an account? Sign In"})]})]})]})})},P=a(26),R=a.n(P),V=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:R.a.notFound,children:Object(h.jsxs)("span",{className:R.a.text,children:[Object(h.jsx)("b",{children:"404"})," - Not Found. Back to ",Object(h.jsx)(s.b,{to:"/login",onClick:function(){sessionStorage.clear()},className:R.a.link,children:"Login"})]})})})},Z=a(34),z=a.n(Z),H=function(){return Object(h.jsx)("footer",{className:z.a.footer,children:Object(h.jsxs)("div",{children:["Copyright \xa9"," "," ",Object(h.jsx)("a",{className:z.a.link,href:"https://riccardo-dev.github.io/portfolio/",children:"Riccardo Andria"})," ",(new Date).getFullYear(),"."]})})},K=function(){return Object(h.jsx)(s.a,{children:Object(h.jsxs)("div",{className:"container-l",children:[Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{exact:!0,path:"/",component:C}),Object(h.jsx)(o.a,{path:"/profile",component:B}),Object(h.jsx)(o.a,{path:"/login",component:A}),Object(h.jsx)(o.a,{path:"/signup",component:Q}),Object(h.jsx)(o.a,{component:V})]}),Object(h.jsx)(H,{})]})})};var W=function(){return Object(h.jsx)(K,{})};d.a.defaults.baseURL="https://planningday.herokuapp.com",d.a.defaults.headers.common.Authorization="Bearer "+sessionStorage.getItem("token"),r.a.render(Object(h.jsx)(W,{}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.efe1ebb0.chunk.js.map