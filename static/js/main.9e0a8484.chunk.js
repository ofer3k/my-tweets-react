(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{143:function(e,t,r){},144:function(e,t,r){},145:function(e,t,r){},148:function(e,t,r){},149:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(25),s=r.n(c),i=r(30),o=r(16),l=r(2),u=r(5),j=r(28),p=r(1),b=["component"];function d(e){var t=e.component,r=Object(u.a)(e,b);return Object(p.jsx)(o.b,Object(l.a)(Object(l.a)({},r),{},{render:function(e){return function(){var e=localStorage.getItem("token");try{return!!e}catch(t){return!1}}()?Object(p.jsx)(t,Object(l.a)({},e)):Object(p.jsx)(o.a,{to:{pathname:"/signin"}})}}))}var h=r(9),O=r(29),f=r(12),x=function(e,t){switch(t.type){case"INITIAL_USER":return console.log(Object(l.a)({},t.value),"action"),Object(l.a)({},t.value);case"update_field":return Object(l.a)(Object(l.a)({},e),{},Object(f.a)({},t.field,t.value));case"update_skills_list":return Object(l.a)(Object(l.a)({},e),{},{skills:t.skillList});case"remove_mission":var r=e.filter((function(e){return e.title!==t.title}));return Object(O.a)(r);case"update_mission":var n;n="false"!==t.isDone;var a=e.findIndex((function(e){return e.title===t.title}));return e[a].isDone=!n,Object(O.a)(e)}},m=Object(n.createContext)(),v=function(e){var t=Object(n.useReducer)(x,{name:"",email:"",ProfilePic:"",about:"",createdAt:"",followers:"",following:"",_id:""}),r=Object(h.a)(t,2),a=r[0],c=r[1];return Object(p.jsx)(m.Provider,{value:{userInfo:a,dispatch:c},children:e.children})},g=r(184),w=r(172),y=r(181);function k(){return Object(p.jsx)("div",{children:Object(p.jsx)(g.a,{bg:"light",expand:"lg",children:Object(p.jsxs)(w.a,{children:[Object(p.jsx)(g.a.Brand,{href:"/",children:"Social-Tweets"}),Object(p.jsx)(g.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(p.jsx)(g.a.Collapse,{id:"basic-navbar-nav",children:Object(p.jsxs)(y.a,{className:"me-auto",children:[Object(p.jsx)(y.a.Link,{href:"/signIn",children:"SignIn"}),Object(p.jsx)(y.a.Link,{href:"/signUp",children:"SignUp"})]})})]})})})}function I(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(k,{}),Object(p.jsx)("div",{className:"wrapper fadeInDown",children:Object(p.jsxs)("div",{id:"formContent",children:[Object(p.jsx)("h2",{className:"inactive underlineHover",children:"The application uses the following technologies:"}),Object(p.jsxs)("form",{children:[Object(p.jsx)("input",{disabled:!0,type:"text",className:"fadeIn second",placeholder:"NodeJS"}),Object(p.jsx)("input",{disabled:!0,type:"text",className:"fadeIn second",placeholder:"React"}),Object(p.jsx)("input",{disabled:!0,type:"text",className:"fadeIn second",placeholder:"MongoDB"}),Object(p.jsx)("input",{disabled:!0,type:"text",className:"fadeIn second",placeholder:"Cloudinary"}),Object(p.jsx)("input",{disabled:!0,type:"text",className:"fadeIn second",placeholder:"AWS"}),Object(p.jsx)("input",{disabled:!0,type:"text",className:"fadeIn second",placeholder:"Bootstrap"}),Object(p.jsx)("input",{disabled:!0,type:"text",className:"fadeIn second",placeholder:"MaterialUI"})]}),Object(p.jsx)("div",{id:"formFooter"})]})})]})}var S=r(4),N=r.n(S),C=r(11),_=r(22),E=r.n(_);console.log("http://3.143.230.51:8000/api","serverAPI");var P=function(){var e=Object(C.a)(N.a.mark((function e(t){var r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.prev=1,e.next=4,E.a.post("http://3.143.230.51:8000/api/signIn/",t);case 4:return r=e.sent,e.abrupt("return",r.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(C.a)(N.a.mark((function e(t){var r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.post("http://3.143.230.51:8000/api/readUser/",{_id:t});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(C.a)(N.a.mark((function e(t,r){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t,"listOfUsers"),e.prev=1,e.next=4,E.a.post("http://3.143.230.51:8000/api/getPostsByFollowing/",{list:t});case 4:return n=e.sent,e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,r){return e.apply(this,arguments)}}(),U=function(){var e=Object(C.a)(N.a.mark((function e(t){var r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.post("http://3.143.230.51:8000/api/getAllUsersForSearch/",{email:t});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(C.a)(N.a.mark((function e(t,r){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t,r),e.prev=1,e.next=4,E.a.post("http://3.143.230.51:8000/api/followUser/",{myEmail:t,userEmail:r});case 4:return n=e.sent,e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,r){return e.apply(this,arguments)}}(),T=function(){var e=Object(C.a)(N.a.mark((function e(t,r){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t,r),e.prev=1,e.next=4,E.a.post("http://3.143.230.51:8000/api/unFollowUser/",{myEmail:t,userEmail:r});case 4:return n=e.sent,e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,r){return e.apply(this,arguments)}}(),B=function(){var e=Object(C.a)(N.a.mark((function e(t){var r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.post("http://3.143.230.51:8000/api/uploadPhoto/",t);case 3:return r=e.sent,console.log(r),e.abrupt("return",r);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(C.a)(N.a.mark((function e(t){var r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t,"here"),e.next=4,E.a.post("http://3.143.230.51:8000/api/createUser/",t);case 4:return r=e.sent,e.abrupt("return",r);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(C.a)(N.a.mark((function e(t){var r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t),e.next=4,E.a.post("http://3.143.230.51:8000/api/createPost/",t);case 4:return r=e.sent,e.abrupt("return",r.data);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(C.a)(N.a.mark((function e(t){var r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t),e.next=4,E.a.post("http://3.143.230.51:8000/api/updateUser/",t);case 4:return r=e.sent,e.abrupt("return",r.data);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(C.a)(N.a.mark((function e(t){var r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t,"server"),e.next=4,E.a.post("http://3.143.230.51:8000/api/deletePost/",t);case 4:return r=e.sent,e.abrupt("return",r.data);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(C.a)(N.a.mark((function e(t){var r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t,"server"),e.next=4,E.a.post("http://3.143.230.51:8000/api/updatePost/",t);case 4:return r=e.sent,e.abrupt("return",r.data);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(C.a)(N.a.mark((function e(t){var r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.post("http://3.143.230.51:8000/api/getUsersByName/",t);case 3:return r=e.sent,e.abrupt("return",r.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();r(68);function J(){var e=Object(n.useState)({email:"ofer3klein@gmail.com",password:"ofer3k1998"}),t=Object(h.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)({isError:!1,msg:""}),s=Object(h.a)(c,2),i=s[0],u=s[1],j=Object(o.g)(),b=function(e){a(Object(l.a)(Object(l.a)({},r),{},Object(f.a)({},e.target.name,e.target.value))),console.log(r)},d=function(){var e=Object(C.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,P(r);case 4:if(!(n=e.sent).error){e.next=9;break}return console.log(n.error),u({isError:!0,msg:n.error}),e.abrupt("return");case 9:return u(!1),localStorage.setItem("token",n.token),j.push("/main"),e.abrupt("return");case 15:e.prev=15,e.t0=e.catch(1),u({isError:!0,msg:e.t0});case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("span",{children:[Object(p.jsx)(k,{}),Object(p.jsx)("div",{className:"wrapper fadeInDown",children:Object(p.jsxs)("div",{id:"formContent",children:[!i.isError&&Object(p.jsx)("h2",{className:"inactive underlineHover",children:"Sign In "}),i.isError&&Object(p.jsx)("h2",{children:i.msg}),Object(p.jsxs)("form",{children:[Object(p.jsx)("input",{onChange:b,type:"text",id:"login",className:"fadeIn second",name:"email",placeholder:"email"}),Object(p.jsx)("input",{type:"password",id:"password",className:"fadeIn third",name:"password",onChange:b,placeholder:"password"}),Object(p.jsx)("input",{type:"submit",onClick:d,className:"fadeIn fourth",value:"Log In"})]}),Object(p.jsx)("div",{id:"formFooter"})]})})]})}var K=r(76),z=r.n(K),Y=r(77),q=r.n(Y);function Q(){var e=Object(o.g)(),t=Object(n.useState)({name:"",email:"",password:"",about:"",profilePic:""}),r=Object(h.a)(t,2),a=r[0],c=r[1],s=Object(n.useState)({isError:!1,msg:""}),i=Object(h.a)(s,2),u=i[0],j=i[1],b=Object(n.useState)(!1),d=Object(h.a)(b,2),O=d[0],x=d[1],m=Object(n.useState)({isSuccess:!1,msg:""}),v=Object(h.a)(m,2),g=v[0],w=v[1],y=Object(n.useState)(!1),I=Object(h.a)(y,2),S=I[0],_=I[1],E=function(e){c(Object(l.a)(Object(l.a)({},a),{},Object(f.a)({},e.target.name,e.target.value)))},P=function(){var e=Object(C.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==a.name.length){e.next=2;break}return e.abrupt("return","NAME");case 2:if(z()(a.email)){e.next=5;break}return e.abrupt("return","MAIL");case 5:if(q()(a.password)){e.next=8;break}return e.abrupt("return","PASSWORD");case 8:return e.abrupt("return","GOOD");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(C.a)(N.a.mark((function e(){var t,r,n,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById("image-file").files[0],(r=new FormData).set("photo",t),e.prev=3,e.next=6,B(r);case 6:return n=e.sent,e.next=9,F(Object(l.a)(Object(l.a)({},a),{},{profilePic:n.data}));case 9:return c=e.sent,e.abrupt("return",c);case 13:return e.prev=13,e.t0=e.catch(3),e.abrupt("return",e.t0);case 16:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(C.a)(N.a.mark((function e(t){var r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,P();case 3:r=e.sent,e.t0=r,e.next="NAME"===e.t0?7:"MAIL"===e.t0?9:"PASSWORD"===e.t0?11:"GOOD"===e.t0?13:28;break;case 7:return j({isError:!0,msg:"Please Enter A Name"}),e.abrupt("return");case 9:return j({isError:!0,msg:"Mail not valid"}),e.abrupt("return");case 11:return j({isError:!0,msg:"Password Must = up, down, special, numer , 8 characters long"}),e.abrupt("return");case 13:return j({isError:!1,msg:""}),e.prev=14,x(!0),e.next=18,A();case 18:return e.sent.data.msg?(x(!1),j({isError:!0,msg:"email is taken"})):(x(!1),w({isSuccess:!0,msg:"Welcome ".concat(a.name," To Our Comunity")})),e.abrupt("return");case 23:return e.prev=23,e.t1=e.catch(14),x(!1),j({isError:!0,msg:"email is taken"}),e.abrupt("return");case 28:return e.abrupt("return");case 29:case"end":return e.stop()}}),e,null,[[14,23]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("span",{children:[Object(p.jsx)(k,{}),Object(p.jsx)("div",{class:"wrapper fadeInDown",children:Object(p.jsxs)("div",{id:"formContent",children:[O&&Object(p.jsx)("h2",{class:"inactive underlineHover",children:"Loading..."}),g.isSuccess&&Object(p.jsx)("h2",{class:"inactive underlineHover",children:g.msg}),u.isError&&Object(p.jsx)("h2",{class:"inactive underlineHover",children:u.msg}),!u.isError&&!g.isSuccess&&!O&&Object(p.jsx)("h2",{class:"inactive underlineHover",children:"Sign Up "}),Object(p.jsxs)("form",{children:[Object(p.jsx)("input",{onChange:E,type:"text",id:"login",class:"fadeIn second",name:"name",placeholder:"Full Name"}),Object(p.jsx)("input",{onChange:E,type:"text",id:"login",class:"fadeIn second",name:"email",placeholder:"Email"}),Object(p.jsx)("input",{onClick:function(){_(!S)},onChange:E,type:S?"text":"password",id:"login",class:"fadeIn second",name:"password",placeholder:"Password"}),Object(p.jsx)("input",{onChange:E,type:"text",id:"login",class:"fadeIn second",name:"about",placeholder:"About"}),Object(p.jsxs)("label",{className:"upload_photo_label",for:"image-file",children:[Object(p.jsx)("div",{className:"upload_photo_div",children:"Click or Drop picture"}),Object(p.jsx)("input",{accept:"image/*",type:"file",id:"image-file"})]}),!g.isSuccess&&Object(p.jsx)("input",{onClick:L,type:"submit",class:"fadeIn fourth",value:"Register"}),g.isSuccess&&Object(p.jsx)("input",{onClick:function(){e.push("/signIn")},type:"submit",class:"fadeIn fourth",value:"Go Login"})]})]})})]})}var V=function(e,t){switch(t.type){case"initial_user":return Object(l.a)({},t.userInfo);case"update_field":return Object(l.a)(Object(l.a)({},e),{},Object(f.a)({},t.field,t.value));case"update_skills_list":return Object(l.a)(Object(l.a)({},e),{},{skills:t.skillList});case"remove_mission":var r=e.filter((function(e){return e.title!==t.title}));return Object(O.a)(r);case"update_mission":var n;n="false"!==t.isDone;var a=e.findIndex((function(e){return e.title===t.title}));return e[a].isDone=!n,Object(O.a)(e)}},X=Object(n.createContext)(),Z=function(e){var t=Object(n.useReducer)(V,{name:"",email:""}),r=Object(h.a)(t,2),a=r[0],c=r[1];return Object(p.jsx)(X.Provider,{value:{signInInfo:a,dispatch:c},children:e.children})},$=function(e,t){switch(t.type){case"initial_user":return Object(l.a)(Object(l.a)({},e),{},{name:t.name,following:t.following});case"update_field":return Object(l.a)(Object(l.a)({},e),{},Object(f.a)({},t.field,t.value));case"update_skills_list":return Object(l.a)(Object(l.a)({},e),{},{skills:t.skillList});case"remove_mission":var r=e.filter((function(e){return e.title!==t.title}));return Object(O.a)(r);case"update_mission":var n;n="false"!==t.isDone;var a=e.findIndex((function(e){return e.title===t.title}));return e[a].isDone=!n,Object(O.a)(e)}},ee=Object(n.createContext)(),te=function(e){var t=Object(n.useReducer)($,{name:"",ProfilePic:"",about:"",createdAt:"",followers:"",following:"",_id:""}),r=Object(h.a)(t,2),a=r[0],c=r[1];return Object(p.jsx)(ee.Provider,{value:{mainPageInfo:a,dispatch:c},children:e.children})};function re(){return Object(p.jsx)("div",{children:Object(p.jsx)(g.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(p.jsxs)(w.a,{children:[Object(p.jsx)(g.a.Brand,{href:"/main",children:"Social-Tweets"}),Object(p.jsx)(g.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(p.jsxs)(g.a.Collapse,{id:"responsive-navbar-nav",children:[Object(p.jsxs)(y.a,{className:"me-auto",children:[Object(p.jsx)(y.a.Link,{href:"/profile",children:"Profile"}),Object(p.jsx)(y.a.Link,{href:"/searchUsers",children:"Search"}),Object(p.jsx)(y.a.Link,{href:"/createPost",children:"Post"})]}),Object(p.jsx)(y.a,{children:Object(p.jsx)(y.a.Link,{onClick:function(){localStorage.clear(),window.location.reload()},eventKey:2,children:"logout"})})]})]})})})}var ne=r(186),ae=r(173),ce=r(174),se=r(175),ie=r(176),oe=r(185),le=r(177),ue=r(50),je=r(78),pe=r.n(je);function be(e){var t=e.post;console.log(t);var r=t.createdAt;return Object(p.jsxs)(ne.a,{style:{width:"70%",margin:"20px auto 0"},children:[Object(p.jsx)(ae.a,{avatar:Object(p.jsx)(oe.a,{alt:t.ownerName,"aria-label":"recipe",src:t.ownerPic}),title:t.title,subheader:t.ownerName}),Object(p.jsx)(ce.a,{image:"/static/images/cards/paella.jpg",title:"Paella dish"}),Object(p.jsx)(se.a,{children:Object(p.jsx)(ue.a,{variant:"body2",color:"textSecondary",component:"p",children:t.content})}),Object(p.jsx)(ie.a,{disableSpacing:!0,children:Object(p.jsx)(le.a,{"aria-label":"add to favorites",children:Object(p.jsx)(pe.a,{toNow:!0,children:r})})})]})}var de=r(82),he=r.n(de),Oe=(r(143),r.p+"static/media/search.9fd0ea41.jpg"),fe=r.p+"static/media/profile.5e7c9398.jpg",xe=r.p+"static/media/post.a460cf9a.jpg";function me(e){var t=Object(n.useContext)(ee),r=t.mainPageInfo;t.dispatch;return Object(p.jsxs)(he.a,Object(l.a)(Object(l.a)({style:{width:"90vw",margin:"0 auto"}},{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,draggable:!0,useCSS:!0}),{},{children:[Object(p.jsx)("div",{className:"section",children:Object(p.jsxs)("div",{class:"container_main",children:[Object(p.jsxs)("p",{children:[r.name,Object(p.jsx)("br",{}),"Welcom!"]}),Object(p.jsx)("hr",{}),Object(p.jsx)("p",{children:"Since you are not following any users yet, it would be a good time to take a tour of the place"})]})}),Object(p.jsx)("div",{class:"section",children:Object(p.jsx)("div",{class:"container_main",children:Object(p.jsx)("img",{className:"fit_image",src:fe})})}),Object(p.jsx)("div",{class:"section",children:Object(p.jsx)("div",{class:"container_main",children:Object(p.jsx)("img",{className:"fit_image",src:Oe})})}),Object(p.jsx)("div",{class:"section",children:Object(p.jsx)("div",{class:"container_main",children:Object(p.jsx)("img",{className:"fit_image",src:xe})})}),Object(p.jsx)("div",{className:"section",children:Object(p.jsxs)("div",{class:"container_main",children:[Object(p.jsxs)("p",{children:["Thank you!",Object(p.jsx)("br",{}),"And good luck"]}),Object(p.jsx)("hr",{}),Object(p.jsx)("p",{children:"To get out of the apprentice mode you are welcome to follow the first user you want"})]})})]}))}function ve(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),r=t[0],a=t[1],c=Object(n.useContext)(ee),s=c.mainPageInfo,i=c.dispatch,o=function(){var e=Object(C.a)(N.a.mark((function e(){var t,r,n,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem("token"),e.next=4,Object(j.a)(t);case 4:return r=e.sent,e.next=7,A(r.data);case 7:return n=e.sent,e.next=10,L(n.following);case 10:c=e.sent,a(c),i({type:"initial_user",name:n.name,profilePic:n.profilePic,following:n.following}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(Object(C.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o();case 2:case"end":return e.stop()}}),e)}))),[]),Object(p.jsxs)("div",{className:0===r.length?"grayBackground":"whiteBackground",children:[Object(p.jsx)(re,{}),0===s.following.length&&Object(p.jsx)(me,{}),0===r.length&&s.following.length>0&&Object(p.jsx)("div",{className:"section",children:Object(p.jsxs)("div",{class:"container_main",children:[Object(p.jsxs)("p",{children:[s.name,Object(p.jsx)("br",{}),"You are doing greate!"]}),Object(p.jsx)("hr",{}),Object(p.jsxs)("p",{children:["The users you follow have not ",Object(p.jsx)("span",{style:{borderBottom:"dotted"},children:"yet"})," posted thoughts"]})]})}),r.map((function(e,t){return Object(p.jsx)(be,{post:e},t)}))]})}var ge=r(178);r(144);function we(){var e=Object(n.useState)({isSuccess:!1,msg:"asdasd"}),t=Object(h.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)({isError:!1,msg:"error"}),s=Object(h.a)(c,2),i=s[0],o=s[1],u=Object(n.useState)(),b=Object(h.a)(u,2),d=b[0],O=b[1],x=Object(n.useState)(),m=Object(h.a)(x,2),v=m[0],g=m[1],w=Object(n.useState)(),y=Object(h.a)(w,2),k=y[0],I=y[1],S=Object(n.useState)({title:"",content:""}),_=Object(h.a)(S,2),E=_[0],P=_[1],L=function(){var e=Object(C.a)(N.a.mark((function e(){var t,r,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem("token"),e.next=4,Object(j.a)(t);case 4:return r=e.sent,e.next=7,A(r.data);case 7:n=e.sent,O(n.email),g(n.name),I(n.profilePic),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),o({isError:!0,msg:"somthing went wrong fetching the user"});case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)(Object(C.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:case"end":return e.stop()}}),e)}))),[]);var U=function(e){P(Object(l.a)(Object(l.a)({},E),{},Object(f.a)({},e.target.name,e.target.value)))},D=function(){var e=Object(C.a)(N.a.mark((function e(t){var r,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,r=E.content.trim(),n=E.title.trim(),!(!E.content||!E.title)){e.next=9;break}return a({isSuccess:!1,msg:""}),o({isError:!0,msg:"You Must Enter Title And Content"}),e.abrupt("return");case 9:return e.next=11,M({title:n,content:r,email:d,ownerName:v,ownerPic:k});case 11:e.sent.createdAt&&(o({isError:!1,msg:""}),a({isSuccess:!0,msg:"post added"})),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),o({isError:!0,msg:"somthing went wrong posting"});case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{children:[Object(p.jsx)(re,{}),r.isSuccess&&Object(p.jsx)("h3",{className:"post_state_success",children:r.msg}),i.isError&&Object(p.jsx)("h3",{className:"post_state_error",children:i.msg}),Object(p.jsxs)("div",{class:"paper",children:[Object(p.jsx)("div",{class:"holes"}),Object(p.jsx)("textarea",{onChange:U,maxlength:"40",className:"textarea1",name:"title",placeholder:"title"}),Object(p.jsx)("textarea",{onChange:U,maxlength:"110",className:"textarea2",name:"content",placeholder:"what are you thinking about?"})]}),Object(p.jsx)("span",{children:Object(p.jsx)(ge.a,{onClick:D,type:"submit",className:"submit_post",variant:"contained",color:"dark",children:"Post your thought"})})]})}var ye=r(182),ke=r(179);function Ie(e){var t=e.post,r=Object(n.useState)({title:t.title,content:t.content}),a=Object(h.a)(r,2),c=a[0],s=a[1],i=function(e){s(Object(l.a)(Object(l.a)({},c),{},Object(f.a)({},e.target.name,e.target.value)))},o=function(){var e=Object(C.a)(N.a.mark((function e(){var r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H({title:c.title,content:c.content,_id:t._id});case 2:r=e.sent,console.log(r);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(C.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G({_id:t._id});case 3:1===e.sent.deletedCount&&window.location.reload(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)(ye.a,{style:{width:"60%",margin:"0 auto"},children:[Object(p.jsxs)(ye.a.Group,{className:"mb-1",controlId:"exampleForm.ControlInput1",children:[Object(p.jsx)(ye.a.Label,{children:"Title"}),Object(p.jsx)(ye.a.Control,{name:"title",onChange:i,type:"email",placeholder:t.title})]}),Object(p.jsxs)(ye.a.Group,{className:"mb-1",controlId:"exampleForm.ControlTextarea1",children:[Object(p.jsx)(ye.a.Label,{children:"Content"}),Object(p.jsx)(ye.a.Control,{name:"content",onChange:i,as:"textarea",placeholder:t.content,rows:2})]}),Object(p.jsxs)("span",{className:"flex_buttons",children:[Object(p.jsx)(ke.a,{onClick:o,style:{border:"2px solid black",opacity:"0.8"},variant:"outline-secondary",children:"Update"}),Object(p.jsx)(ke.a,{onClick:u,style:{border:"2px solid red",color:"red",opacity:"0.8"},variant:"outline-secondary",children:"Delete"})]}),Object(p.jsx)("hr",{})]},e.key)}var Se=r(183);function Ne(){var e=Object(n.useContext)(m),t=e.userInfo,r=e.dispatch,a=Object(n.useState)({name:"",about:"",email:""}),c=Object(h.a)(a,2),s=c[0],i=c[1],o=Object(n.useState)([]),u=Object(h.a)(o,2),b=u[0],d=u[1],O=function(){var e=Object(C.a)(N.a.mark((function e(){var t,n,a,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem("token"),e.next=4,Object(j.a)(t);case 4:return n=e.sent,e.next=7,A(n.data);case 7:return a=e.sent,r({type:"INITIAL_USER",value:a}),e.next=11,L(a.email);case 11:c=e.sent,d(c),i({name:a.name,about:a.about,email:a.email}),e.next=20;break;case 16:return e.prev=16,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return");case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){O()}),[]);var x=function(e){i(Object(l.a)(Object(l.a)({},s),{},Object(f.a)({},e.target.name,e.target.value))),console.log(s,"update user")},v=function(){var e=Object(C.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R(s);case 3:t=e.sent,console.log(t),e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{children:[Object(p.jsx)(re,{}),Object(p.jsx)(g.a,{style:{cursor:"default"},expand:"lg",variant:"light",bg:"light",children:Object(p.jsxs)(w.a,{children:[Object(p.jsx)(g.a.Brand,{children:t.name}),Object(p.jsxs)(g.a.Brand,{children:["Followers: ",t.followers.length]}),Object(p.jsxs)(g.a.Brand,{children:["Following: ",t.following.length]})]})}),Object(p.jsxs)(Se.a,{children:[Object(p.jsxs)(Se.a.Item,{eventKey:"0",children:[Object(p.jsx)(Se.a.Header,{children:"Edit Info"}),Object(p.jsx)(Se.a.Body,{children:Object(p.jsxs)(ye.a,{style:{width:"60%",margin:"0 auto"},children:[Object(p.jsxs)(ye.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[Object(p.jsx)(ye.a.Label,{children:"Name"}),Object(p.jsx)(ye.a.Control,{name:"name",onChange:x,type:"email",placeholder:t.name})]}),Object(p.jsxs)(ye.a.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1",children:[Object(p.jsx)(ye.a.Label,{children:"About"}),Object(p.jsx)(ye.a.Control,{name:"about",onChange:x,as:"textarea",placeholder:t.about,rows:3})]}),Object(p.jsxs)(ye.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[Object(p.jsx)(ye.a.Label,{children:"Email"}),Object(p.jsx)(ye.a.Control,{disabled:!0,type:"email",placeholder:t.email})]}),Object(p.jsx)(ge.a,{onClick:v,style:{border:"2px solid black",opacity:"0.8"},variant:"outline-secondary",children:"Update"})]})})]}),Object(p.jsxs)(Se.a.Item,{eventKey:"1",children:[Object(p.jsx)(Se.a.Header,{children:"Edit Posts"}),Object(p.jsxs)(Se.a.Body,{children:[0===b.length&&Object(p.jsx)("h1",{children:"There Are No Posts"}),b.map((function(e,t){return Object(p.jsx)(Ie,{post:e},t)}))]})]})]})]})}r(145);var Ce=r(56),_e=r(57);function Ee(e){var t=e.user,r=e.myEmail,a=(e.myFollowing,e.myUser),c=(e.key1,Object(n.useState)()),s=Object(h.a)(c,2),i=s[0],o=s[1],l=function(){var e=Object(C.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!i){e.next=8;break}return e.next=4,T(r,t.email);case 4:"updated"===e.sent&&o(!i),e.next=12;break;case 8:return e.next=10,D(r,t.email);case 10:"updated"===e.sent&&o(!i);case 12:e.next=17;break;case 14:return e.prev=14,e.t0=e.catch(0),e.abrupt("return");case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){a.following.includes(t.email)?o(!0):o(!1)}),[]),console.log(t,"key"),Object(p.jsxs)(ne.a,{style:{width:"80%",margin:"1rem",padding:"1rem"},children:[Object(p.jsx)(ae.a,{avatar:Object(p.jsx)(oe.a,{alt:t.name,"aria-label":"recipe",src:t.profilePic}),title:t.name,subheader:t.about}),Object(p.jsxs)(ie.a,{disableSpacing:!0,children:[Object(p.jsx)("i",{class:"fas fa-user-plus"}),Object(p.jsx)("button",{onClick:l,className:i?"green":"blue",children:i?Object(p.jsx)(Ce.a,{color:"white",size:"lg",icon:_e.b}):Object(p.jsx)(Ce.a,{color:"grey",size:"lg",icon:_e.a})})]})]})}var Pe=r(180);r(148);function Ae(){var e,t=Object(n.useState)([]),r=Object(h.a)(t,2),a=r[0],c=r[1],s=Object(n.useState)(),i=Object(h.a)(s,2),o=i[0],l=i[1],u=Object(n.useState)([]),b=Object(h.a)(u,2),d=b[0],O=b[1],f=Object(n.useState)(),x=Object(h.a)(f,2),m=x[0],v=x[1],g=function(){var t=Object(C.a)(N.a.mark((function t(){var r;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e,"myEmail"),t.next=3,U(e.email);case 3:r=t.sent,c(r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),y=function(){var t=Object(C.a)(N.a.mark((function t(){var r,n;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=localStorage.getItem("token"),t.next=4,Object(j.a)(r);case 4:return n=t.sent,t.next=7,A(n.data);case 7:e=t.sent,l(e.email),O(e.following),v(e),console.log(e,"user"),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(){return t.apply(this,arguments)}}();Object(n.useEffect)(Object(C.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:return e.next=4,g();case 4:case"end":return e.stop()}}),e)}))),[]);var k=function(){var e=Object(C.a)(N.a.mark((function e(t){var r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W({name:t.target.value});case 3:r=e.sent,c(r),e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{children:[Object(p.jsx)(re,{}),Object(p.jsxs)(w.a,{children:[Object(p.jsx)(Pe.a,{className:"justify-content-md-center",children:Object(p.jsx)("div",{style:{width:"80%"},className:"search_container",children:Object(p.jsxs)("div",{class:"search-box ",children:[Object(p.jsx)("button",{class:"btn-search",children:Object(p.jsx)("i",{class:"fas fa-search"})}),Object(p.jsx)("input",{onChange:k,type:"text",class:"input-search",placeholder:"Type to Search..."})]})})}),a.map((function(e,t){return Object(p.jsx)(Pe.a,{className:"justify-content-md-center",children:Object(p.jsx)(Ee,{myEmail:o,myFollowing:d,myUser:m,user:e,key1:t})})}))]})]})}var Le=function(){return Object(p.jsxs)(i.a,{children:[Object(p.jsxs)(o.d,{children:[Object(p.jsx)(o.b,{path:"/",exact:!0,component:I}),Object(p.jsx)(o.b,{path:"/signUp",exact:!0,component:Q}),Object(p.jsx)(Z,{children:Object(p.jsx)(o.b,{path:"/signIn",exact:!0,component:J})})]}),Object(p.jsxs)(o.d,{children:[Object(p.jsx)(d,{path:"/searchUsers",component:Ae}),Object(p.jsx)(d,{path:"/createPost",component:we}),Object(p.jsx)(v,{children:Object(p.jsx)(d,{path:"/profile",component:Ne})})]}),Object(p.jsx)(o.d,{children:Object(p.jsx)(te,{children:Object(p.jsx)(d,{path:"/main",component:ve})})})]})};s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(Le,{})}),document.getElementById("root"))},68:function(e,t,r){}},[[149,1,2]]]);
//# sourceMappingURL=main.9e0a8484.chunk.js.map