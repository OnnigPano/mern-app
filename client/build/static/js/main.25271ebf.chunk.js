(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{115:function(e,t,a){e.exports=a.p+"static/media/dog5.b84e8c54.jpg"},116:function(e,t,a){e.exports=a.p+"static/media/dog-wide.676718f7.jpg"},141:function(e,t,a){e.exports=a(245)},148:function(e,t,a){},149:function(e,t,a){},245:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),o=a.n(c),l=a(22),i=a(332),s=a(333),u=a(122),m=a(283),p=a(77),d=Object(u.a)({palette:{primary:m.a,secondary:p.a}}),f=(a(148),a(149),a(19)),b=a(16),h=a(8),g=a.n(h),v=a(17),E=a(13),x=a(9),j=a(85),O=a.n(j),k=a(286),y=a(37),w=a(334),S=a(290),C=a(291),I=a(292),N=a(284),A=a(24),z=a.n(A),T=r.a.createContext({isAuth:!1,user:{}}),B=function(e){var t=Object(n.useState)(!1),a=Object(E.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)({email:"",name:"",img:""}),i=Object(E.a)(l,2),s=i[0],u=i[1],m=Object(n.useState)([]),p=Object(E.a)(m,2),d=p[0],f=p[1],b=function(){var e=Object(v.a)(g.a.mark((function e(t){var a,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.a.post("https://kimbalache-store.herokuapp.com/api/v1/users/login",t);case 3:return a=e.sent,n=a.data,localStorage.setItem("token",n.token),o(!0),u({email:n.user.email,name:n.user.name,img:n.user.profileImage}),f(n.user.favs),e.abrupt("return",!0);case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(v.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("token"),e.prev=1,e.next=4,z.a.post("https://kimbalache-store.herokuapp.com/api/v1/users/logout",{},{headers:{Authorization:"Bearer "+t}});case 4:localStorage.removeItem("token"),o(!1),u({}),f([]),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(v.a)(g.a.mark((function e(){var t,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=localStorage.getItem("token"))){e.next=12;break}return e.prev=2,e.next=5,z.a.get("https://kimbalache-store.herokuapp.com/api/v1/users/me",{headers:{Authorization:"Bearer "+t}});case 5:(a=e.sent)?(o(!0),u({email:a.data.email,name:a.data.name,img:a.data.profileImage}),f(a.data.favs)):localStorage.removeItem("token"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(v.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.a.post("https://kimbalache-store.herokuapp.com/api/v1/users",t);case 3:return a=e.sent,localStorage.setItem("token",a.data.token),a&&(o(!0),u({email:a.data.user.email,name:a.data.user.name,img:a.data.user.profileImage})),e.abrupt("return",!0);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(T.Provider,{value:{isAuth:c,user:s,favs:d,login:b,checkToken:x,register:j,logout:h}},e.children)},F=a(115),P=a.n(F),W=a(116),D=a.n(W),R=Object(N.a)((function(e){var t;return{root:(t={},Object(x.a)(t,e.breakpoints.down("sm"),{backgroundImage:"url(".concat(P.a,")"),height:"calc(".concat(document.querySelector("html").offsetHeight,"px - 56px)"),paddingTop:"50px"}),Object(x.a)(t,e.breakpoints.up("sm"),{backgroundImage:"url(".concat(D.a,")"),height:"calc(".concat(document.querySelector("html").offsetHeight,"px - 64px)")}),Object(x.a)(t,"backgroundPosition","center"),Object(x.a)(t,"backgroundRepeat","no-repeat"),Object(x.a)(t,"backgroundSize","cover"),Object(x.a)(t,"paddingTop","70px"),t)}})),V=function(e){var t=R();return r.a.createElement("div",{className:t.root},e.children)},L=Object(N.a)((function(e){return{root:Object(x.a)({width:"94%",maxWidth:400,marginRight:"auto",marginLeft:"auto",padding:20,display:"flex",flexDirection:"column",justifyContent:"space-around",height:340,backgroundColor:"rgba(255,255,255,0.8)"},e.breakpoints.up("md"),{marginRight:"80px"}),typography:{fontWeight:500},form:{display:"flex",flexDirection:"column",justifyContent:"space-around",height:280}}})),_=function(e){var t=L(),a=Object(n.useState)(""),c=Object(E.a)(a,2),o=c[0],l=c[1],i=Object(n.useState)(""),s=Object(E.a)(i,2),u=s[0],m=s[1],p=Object(n.useState)(""),d=Object(E.a)(p,2),h=d[0],x=d[1],j=Object(n.useState)(!1),N=Object(E.a)(j,2),A=N[0],z=N[1],B=Object(n.useState)(!1),F=Object(E.a)(B,2),P=F[0],W=F[1],D=Object(n.useState)(!1),R=Object(E.a)(D,2),_=R[0],H=R[1],q=Object(n.useState)({email:{error:!1,msg:"Ingrese un e-mail v\xe1lido"},name:{error:!1,msg:"El nombre de usuario es obligatorio"},password:{error:!1,msg:"La contrase\xf1a debe contener al menos 6 caracteres"}}),G=Object(E.a)(q,2),J=G[0],M=G[1],U=Object(n.useContext)(T),$=function(e,t,a){t(e.target.value),Y(e.target.value,a),A&&z(!1)},K=function(){var t=Object(v.a)(g.a.mark((function t(a){var n,r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),W(!0),z(!1),n={email:o,password:u,name:h},!_){t.next=10;break}return t.next=7,U.register(n);case 7:r=t.sent,t.next=13;break;case 10:return t.next=12,U.login(n);case 12:r=t.sent;case 13:r?e.history.length>0?e.history.goBack():e.history.push("/"):(W(!1),z(!0));case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Y=function(e,t){"email"===t?M(Object(b.a)(Object(b.a)({},J),{},{email:Object(b.a)(Object(b.a)({},J.email),{},{error:!O.a.isEmail(e.trim())})})):"name"===t?M(Object(b.a)(Object(b.a)({},J),{},{name:Object(b.a)(Object(b.a)({},J.name),{},{error:O.a.isEmpty(e.trim())})})):"password"===t&&M(Object(b.a)(Object(b.a)({},J),{},{password:Object(b.a)(Object(b.a)({},J.password),{},{error:e.trim().length<6})}))};return r.a.createElement(r.a.Fragment,null,U.isAuth?r.a.createElement(f.a,{to:"/"}):null,r.a.createElement(V,null,r.a.createElement(k.a,{className:t.root},r.a.createElement(y.a,{className:t.typography,component:"h2",variant:"h5",align:"center"},"Ingres\xe1 tus datos"),A&&r.a.createElement(y.a,{color:"error",component:"span",variant:"subtitle2",align:"center"},"Datos inv\xe1lidos"),r.a.createElement("form",{className:t.form,onSubmit:function(e){return K(e)},noValidate:!0},_&&r.a.createElement(w.a,{error:A||J.name.error,type:"text",label:"Usuario",variant:"outlined",size:"small",helperText:J.name.error&&J.name.msg,onChange:function(e){return $(e,x,"name")}}),r.a.createElement(w.a,{error:A||J.email.error,type:"email",label:"E-mail",variant:"outlined",size:"small",helperText:J.email.error&&J.email.msg,onChange:function(e){return $(e,l,"email")}}),r.a.createElement(w.a,{error:A||J.password.error,type:"password",label:"Contrase\xf1a",variant:"outlined",size:"small",helperText:J.password.error&&J.password.msg,onChange:function(e){return $(e,m,"password")}}),P?r.a.createElement(S.a,{color:"primary"}):r.a.createElement(C.a,{variant:"contained",color:"primary",type:"submit"},_?"Registrarse":"Iniciar Sesi\xf3n")),r.a.createElement(y.a,{variant:"caption",component:"small",align:"center"},_?"\xbfYa tienes usuario? ":"\xbfNo tienes usuario? ",r.a.createElement(I.a,{component:"button",onClick:function(){H(!_),document.getElementsByTagName("form")[0].reset(),l(""),x(""),m(""),z(!1)}},_?"Iniciar Sesi\xf3n":"Registarse")))))},H=a(307),q=a(308),G=a(309),J=a(337),M=a(117),U=a.n(M),$=a(119),K=a.n($),Y=a(118),Q=a.n(Y),X=a(305),Z=a(338),ee=a(289),te=a(298),ae=a(293),ne=a(294),re=a(295),ce=a(296),oe=a(297),le=a(299),ie=a(300),se=a(301),ue=a(302),me=a(303),pe=a(304);var de=function(e){var t=e.icon,a=e.primary,n=e.to,c=r.a.useMemo((function(){return r.a.forwardRef((function(e,t){return r.a.createElement(l.b,Object.assign({ref:t,to:n},e))}))}),[n]);return r.a.createElement("li",null,r.a.createElement(ae.a,{button:!0,component:c},r.a.createElement(ne.a,null,t),r.a.createElement(re.a,{primary:a})))},fe=Object(N.a)({list:{width:250},avatar:{width:70,height:70,marginRight:10}});function be(e){var t=fe(),a=Object(n.useContext)(T),c=r.a.createElement("div",null,r.a.createElement(de,{to:"/auth",primary:"Ingresar",icon:r.a.createElement(ce.a,null)})),o=r.a.createElement(de,{to:"/logout",primary:"Cerrar Sesi\xf3n",icon:r.a.createElement(oe.a,null)}),i=r.a.createElement("div",{className:t.list,role:"presentation",onClick:e.toggleDrawer},r.a.createElement(ee.a,null,r.a.createElement(ae.a,null,r.a.createElement(Z.a,{src:a.user.profileImage,className:t.avatar,variant:"rounded"}),r.a.createElement(y.a,{variant:"subtitle1",component:"h4"},a.isAuth?a.user.name:"Bienvenido"))),r.a.createElement(te.a,null),r.a.createElement(ee.a,null,a.isAuth?o:c),r.a.createElement(te.a,null),r.a.createElement(ee.a,null,a.isAuth?r.a.createElement(de,{to:"/profile",primary:"Mi Cuenta",icon:r.a.createElement(le.a,null)}):null,r.a.createElement(de,{to:"/products",primary:"Productos",icon:r.a.createElement(ie.a,null)}),r.a.createElement(de,{to:"/categories",primary:"Categorias",icon:r.a.createElement(se.a,null)}),r.a.createElement(de,{to:"/favs",primary:"Favoritos",icon:r.a.createElement(ue.a,null)}),r.a.createElement(ae.a,{button:!0,component:l.b,to:"/cart"},r.a.createElement(ne.a,null," ",r.a.createElement(me.a,null)," "),r.a.createElement(re.a,{primary:"Mi Carrito"})),r.a.createElement(te.a,null),r.a.createElement(ae.a,{button:!0,component:l.b,to:"/about"},r.a.createElement(ne.a,null," ",r.a.createElement(pe.a,null)," "),r.a.createElement(re.a,{primary:"Nosotros"}))));return r.a.createElement(X.a,{anchor:"left",open:e.drawerState,onClose:e.toggleDrawer},i)}var he=a(246),ge=a(306),ve=a(18),Ee=Object(N.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(x.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(x.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(ve.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(ve.c)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(x.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function xe(e){var t=Object(ge.a)();return r.a.createElement(he.a,{appear:!1,direction:"down",in:!t},e.children)}function je(e){var t=Ee(),a=Object(n.useState)(!1),c=Object(E.a)(a,2),o=c[0],i=c[1],s=function(){i(!o)};return r.a.createElement("div",{className:t.root},r.a.createElement(xe,e,r.a.createElement(H.a,{position:"fixed"},r.a.createElement(q.a,null,r.a.createElement(be,{drawerState:o,toggleDrawer:s}),r.a.createElement(G.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"open drawer",onClick:s},r.a.createElement(U.a,null)),r.a.createElement(y.a,{className:t.title,variant:"h6",noWrap:!0},"Kimbalache Store"),r.a.createElement("div",{className:t.search},r.a.createElement("div",{className:t.searchIcon},r.a.createElement(Q.a,null)),r.a.createElement(J.a,{placeholder:"Buscar\u2026",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"}})),r.a.createElement(I.a,{component:l.b,to:"/cart"},r.a.createElement(G.a,{edge:"end","aria-label":"go to cart"},r.a.createElement(K.a,{style:{color:"white"}})))))),r.a.createElement(q.a,null))}var Oe=function(e){var t=Object(n.useContext)(T);return Object(n.useEffect)((function(){t.logout(),e.history.push("/")})),null},ke=a(123),ye=a(318),we=a(321),Se=a(322),Ce=a(127),Ie=a(323),Ne=a(324),Ae=a(121),ze=a.n(Ae),Te=a(310),Be=a(311),Fe=a(312),Pe=a(313),We=a(314),De=a(315),Re=a(316),Ve=a(317),Le=Object(N.a)((function(e){return{root:Object(x.a)({maxWidth:600,position:"relative",fontSize:"1rem"},e.breakpoints.down("xs"),{maxHeight:"250px"}),media:{height:0,paddingTop:"56.25%",backgroundSize:"contain"},fav:{position:"absolute",top:"5px",right:"5px",color:"yellow"},desc:Object(x.a)({},e.breakpoints.down("xs"),{display:"none"}),title:Object(x.a)({},e.breakpoints.up("sm"),{fontSize:"1.2rem"}),actions:{justifyContent:"space-around","& svg":Object(x.a)({},e.breakpoints.up("sm"),{fontSize:"larger"}),"& button":{padding:"0px"}}}})),_e=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});var He=function(e){var t=e.product,a=e.addToFavs,c=e.addProductToCart,o=e.alreadyInFavs,l=e.deleteFromFavs,i=Le(),s=Object(n.useState)(!!o),u=Object(E.a)(s,2),m=u[0],p=u[1];return r.a.createElement(k.a,{className:i.root},r.a.createElement(Te.a,{className:i.media,image:"/product1.png"}),r.a.createElement(Be.a,{disableTypography:!0,className:i.title,title:t.productName}),r.a.createElement(Fe.a,{className:i.desc},r.a.createElement(y.a,{variant:"body2",color:"textSecondary",component:"p"},t.description)),r.a.createElement(Pe.a,{className:i.actions,disableSpacing:!0},m?r.a.createElement(G.a,{className:i.fav,onClick:function(){l(t._id),p(!1)}},r.a.createElement(We.a,null)):r.a.createElement(G.a,{className:i.fav,onClick:function(){a(t._id),p(!0)}},r.a.createElement(De.a,null)),r.a.createElement(G.a,{onClick:function(){return c(t._id)}},r.a.createElement(Re.a,null)),r.a.createElement(G.a,{"aria-label":"share"},r.a.createElement(Ve.a,null)),r.a.createElement("span",null,_e.format(Number(t.price)))))},qe=a(124),Ge=a(120),Je=a(319),Me=a(320);function Ue(e){var t=e.inputRef,a=e.onChange,n=Object(qe.a)(e,["inputRef","onChange"]);return r.a.createElement(Ge.a,Object.assign({},n,{getInputRef:t,onValueChange:function(t){a({target:{name:e.name,value:t.value}})},thousandSeparator:!0,isNumericString:!0,fixedDecimalScale:!0,decimalScale:2}))}var $e=function(e){var t=Object(n.useState)({}),a=Object(E.a)(t,2),c=a[0],o=a[1],l=function(e){o(Object(b.a)(Object(b.a)({},c),{},Object(x.a)({},e.target.name,e.target.value)))},i=function(){var e=Object(v.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,z.a.post("".concat("https://kimbalache-store.herokuapp.com/api/v1","/products"),c);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(ye.a,{maxWidth:"lg"},r.a.createElement("form",{noValidate:!0,style:{width:"100%",maxWidth:"600px",margin:"30px auto"},onSubmit:function(t){i(t),e.handleDialog(!1),e.addProductToList(c)}},r.a.createElement(Je.a,null,r.a.createElement(w.a,{onChange:l,name:"productName",color:"secondary",label:"Nombre del producto",variant:"outlined",type:"text",margin:"dense"}),r.a.createElement(w.a,{onChange:l,name:"category",color:"secondary",label:"Categoria",variant:"outlined",type:"text",margin:"dense"}),r.a.createElement(w.a,{color:"secondary",name:"price",margin:"dense",variant:"outlined",onChange:l,value:c.price,InputProps:{startAdornment:r.a.createElement(Me.a,{position:"start"},"$"),inputComponent:Ue}}),r.a.createElement(C.a,{onChange:function(e){console.log(e.target.files[0]),o(Object(b.a)(Object(b.a)({},c),{},Object(x.a)({},e.target.name,e.target.files[0])))},style:{marginTop:"8px",backgroundColor:"lightblue"},variant:"contained",component:"label"},"Subir Im\xe1gen",r.a.createElement("input",{accept:"image/*",name:"image",type:"file",style:{display:"none"}})),r.a.createElement(w.a,{name:"description",onChange:l,style:{marginTop:"8px"},color:"secondary",label:"Descripci\xf3n",variant:"outlined",fullWidth:!0,multiline:!0,rows:4}),r.a.createElement(C.a,{style:{marginTop:"8px"},variant:"contained",color:"secondary",type:"submit"},"Crear Producto"))))},Ke=function(e){var t=Object(n.useState)(!1),a=Object(E.a)(t,2),c=a[0],o=a[1];return r.a.createElement(r.a.Fragment,null,c?r.a.createElement(f.a,{push:!0,to:"/auth"}):null,r.a.createElement(we.a,{onClose:function(){return e.handleClose(!1)},open:!0},r.a.createElement(C.a,{variant:"outlined",color:"primary",size:"large",onClick:function(){return o(!0)}},"Iniciar Sesi\xf3n")))},Ye=a(336),Qe=a(335);function Xe(e){return r.a.createElement(Qe.a,Object.assign({elevation:6,variant:"filled"},e))}var Ze=Object(N.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function et(e){var t=Ze(),a=function(t,a){"clickaway"!==a&&e.handleFromParent(Object(b.a)(Object(b.a)({},e.snackBarState),{},{open:!1}))};return r.a.createElement("div",{className:t.root},r.a.createElement(Ye.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:e.snackBarState.open,autoHideDuration:3e3,onClose:a},r.a.createElement(Xe,{onClose:a,severity:e.snackBarState.severity},e.snackBarState.message)))}function tt(){return at.apply(this,arguments)}function at(){return(at=Object(v.a)(g.a.mark((function e(){var t,a,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=localStorage.getItem("token"))){e.next=13;break}return e.prev=2,e.next=5,z.a.get("".concat("https://kimbalache-store.herokuapp.com/api/v1","/favs"),{headers:{Authorization:"Bearer "+t}});case 5:return a=e.sent,n=a.data,e.abrupt("return",n.favs);case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}function nt(e){return rt.apply(this,arguments)}function rt(){return(rt=Object(v.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=localStorage.getItem("token"))){e.next=10;break}return e.prev=2,e.next=5,z.a.delete("".concat("https://kimbalache-store.herokuapp.com/api/v1","/favs/").concat(t),{headers:{Authorization:"Bearer "+a}});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})))).apply(this,arguments)}function ct(e){return ot.apply(this,arguments)}function ot(){return(ot=Object(v.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=localStorage.getItem("token"))){e.next=10;break}return e.prev=2,e.next=5,z.a.post("".concat("https://kimbalache-store.herokuapp.com/api/v1","/favs/").concat(t),{},{headers:{Authorization:"Bearer "+a}});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})))).apply(this,arguments)}var lt={fab:{position:"fixed",bottom:"20px",right:"20px",zIndex:"10"}},it=function(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!0),l=Object(E.a)(o,2),i=l[0],s=l[1],u=Object(n.useState)(!1),m=Object(E.a)(u,2),p=m[0],d=m[1],f=Object(n.useState)(!1),h=Object(E.a)(f,2),x=h[0],j=h[1],O=Object(n.useState)({open:!1,severity:"success",message:"A\xf1adido al carrito!"}),k=Object(E.a)(O,2),y=k[0],w=k[1],S=Object(n.useContext)(T);Object(n.useEffect)((function(){C()}),[]);var C=function(){var e=Object(v.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.a.get("".concat("https://kimbalache-store.herokuapp.com/api/v1","/products"));case 3:t=e.sent,c(t.data),s(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s(!1);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();function I(e){return N.apply(this,arguments)}function N(){return(N=Object(v.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!S.isAuth){e.next=14;break}if(!(a=localStorage.getItem("token"))){e.next=12;break}return e.prev=3,e.next=6,z.a.post("https://kimbalache-store.herokuapp.com/api/v1/cart",{productId:t,quantity:1},{headers:{Authorization:"Bearer "+a}});case 6:w(Object(b.a)(Object(b.a)({},y),{},{open:!0,severity:"success",message:"A\xf1adido al carrito!"})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.log(e.t0);case 12:e.next=15;break;case 14:j(!0);case 15:case"end":return e.stop()}}),e,null,[[3,9]])})))).apply(this,arguments)}function A(e){return B.apply(this,arguments)}function B(){return(B=Object(v.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!S.isAuth){e.next=7;break}return e.next=3,ct(t);case 3:w(Object(b.a)(Object(b.a)({},y),{},{open:!0,severity:"info",message:"A\xf1adido a favoritos!"})),S.favs.push(t),e.next=8;break;case 7:j(!0);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e){S.isAuth&&Object(v.a)(g.a.mark((function t(){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,nt(e);case 2:S.favs=S.favs.filter((function(t){return t.toString()!==e}));case 3:case"end":return t.stop()}}),t)})))()}return r.a.createElement(ye.a,{style:{marginTop:"20px"}},r.a.createElement(we.a,{onClose:function(){return d(!1)},open:p,fullWidth:!0,maxWidth:"sm"},r.a.createElement($e,{handleDialog:d,addProductToList:function(e){c([].concat(Object(ke.a)(a),[e]))}})),x?r.a.createElement(Ke,{handleClose:j}):null,r.a.createElement(Se.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"flex-start",spacing:3},a.map((function(e,t){return r.a.createElement(Se.a,{item:!0,xs:6,sm:6,md:4,lg:3,key:t},i?r.a.createElement(Ce.a,{open:i},r.a.createElement(Ie.a,{color:"primary"})):r.a.createElement(He,{addToFavs:A,deleteFromFavs:F,addProductToCart:I,product:e,alreadyInFavs:S.favs.includes(e._id)}))}))),r.a.createElement(Ne.a,{style:lt.fab,onClick:function(){return d(!0)},color:"secondary",size:"large","aria-label":"add"},r.a.createElement(ze.a,null)),r.a.createElement(et,{snackBarState:y,handleFromParent:w}))},st=a(78),ut=a(325),mt=Object(N.a)((function(e){return{root:Object(x.a)({height:"120px",width:"45%",marginTop:"10px",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover",position:"relative"},e.breakpoints.up("md"),{height:"200px",width:"280px"}),chip:{position:"absolute",bottom:"5px",right:"5px"}}}));var pt=function(e){var t=mt();return r.a.createElement(r.a.Fragment,null,r.a.createElement(st.a,{className:t.root,elevation:8,style:{backgroundImage:"url(".concat(e.image,")")}},r.a.createElement(C.a,{className:t.chip,variant:"contained",color:"primary",endIcon:r.a.createElement(ut.a,null),size:"small",disableElevation:!0,to:e.target,component:l.b},e.category)))},dt=Object(N.a)((function(e){var t,a;return{title:(t={fontFamily:"Shadows Into Light!important",color:"white"},Object(x.a)(t,e.breakpoints.down("xs"),{fontSize:"4rem"}),Object(x.a)(t,"textShadow","2px 1px 0 #000"),t),subtitle:(a={fontFamily:"Shadows Into Light!important",color:"white"},Object(x.a)(a,e.breakpoints.down("xs"),{fontSize:"2rem",marginBottom:"50px"}),Object(x.a)(a,"marginBottom","150px"),Object(x.a)(a,"textShadow","2px 1px 0 #000"),a)}}));var ft=function(){var e=dt();return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{className:e.title,variant:"h1",component:"h1",align:"center"},"Kimbalache Store"),r.a.createElement(y.a,{className:e.subtitle,variant:"h3",component:"h2",align:"center"},"Todo para tu mascota"))},bt=Object(N.a)((function(e){return{cards:Object(x.a)({display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"},e.breakpoints.up("md"),{flexDirection:"row",flexBasis:"40%"}),wrapper:Object(x.a)({display:"flex",flexDirection:"column",justifyContent:"space-evenly",height:"100%"},e.breakpoints.up("md"),{flexDirection:"row",justifyContent:"space-between","& div":{flexBasis:"40%"}})}})),ht=function(){var e=bt();return r.a.createElement(V,null,r.a.createElement("div",{className:e.wrapper},r.a.createElement("div",null,r.a.createElement(ft,null)),r.a.createElement("div",{className:e.cards},r.a.createElement(pt,{image:"/puppy.jpg",category:"Perros",target:"/products"}),r.a.createElement(pt,{image:"/kitten.jpg",category:"Gatos",target:"/products"}),r.a.createElement(pt,{image:"/iguana.jpg",category:"Reptiles",target:"/products"}),r.a.createElement(pt,{image:"/accesorios.jpg",category:"Accesorios",target:"/products"}))))},gt=a(327),vt=a(326);var Et=function(){var e=Object(n.useContext)(T),t=Object(n.useState)([]),a=Object(E.a)(t,2),c=a[0],o=a[1];return Object(n.useEffect)((function(){e.isAuth&&Object(v.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,tt();case 2:t=e.sent,o(t);case 4:case"end":return e.stop()}}),e)})))()}),[e.isAuth]),r.a.createElement(r.a.Fragment,null,e.isAuth?null:r.a.createElement(f.a,{to:"/"}),c.length>0?c.map((function(t){return r.a.createElement(ae.a,{key:t._id,divider:!0,alignItems:"flex-start"},r.a.createElement(vt.a,null,r.a.createElement(Z.a,{alt:"product image",src:"/product1.png",variant:"rounded"})),r.a.createElement(re.a,{primary:t.productName}),r.a.createElement(G.a,{edge:"end"},r.a.createElement(Re.a,null)),r.a.createElement(G.a,{edge:"end",onClick:function(){return a=t._id,void(e.isAuth&&Object(v.a)(g.a.mark((function t(){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,nt(a);case 2:o(c.filter((function(e){return e._id.toString()!==a}))),e.favs=e.favs.filter((function(e){return e.toString()!==a}));case 4:case"end":return t.stop()}}),t)})))());var a}},r.a.createElement(gt.a,null)))})):r.a.createElement("div",null,r.a.createElement(y.a,{variant:"h5",component:"h2",align:"center"},"No tienes Favoritos"),r.a.createElement(C.a,{size:"large",variant:"contained",color:"secondary",disableElevation:!0,to:"/products",component:l.b},"Ver Productos")))},xt=a(328),jt=a(329),Ot=a(330),kt=a(331),yt=Object(N.a)((function(e){return{root:{borderTop:"1px solid #cacaca"}}}));var wt=r.a.memo((function(e){var t=yt();return r.a.createElement(xt.a,{className:t.root,showLabels:!0},r.a.createElement(jt.a,{to:"/products",component:l.b,label:"Ir de compras",icon:r.a.createElement(Ot.a,null)}),r.a.createElement("h3",null,"$",e.total),r.a.createElement(jt.a,{label:"Pagar",icon:r.a.createElement(kt.a,null)}))})),St=Object(N.a)((function(e){var t;return{root:{width:"100%",backgroundColor:e.palette.background.paper},inline:{display:"inline"},flex:(t={display:"flex",flexDirection:"column",justifyContent:"space-between"},Object(x.a)(t,e.breakpoints.down("sm"),{minHeight:"calc(".concat(document.querySelector("html").offsetHeight,"px - 56px)")}),Object(x.a)(t,e.breakpoints.up("sm"),{minHeight:"calc(".concat(document.querySelector("html").offsetHeight,"px - 64px)")}),t),emptyCart:Object(x.a)({backgroundImage:"url(/empty-cart.png)",backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat",height:"calc(".concat(document.querySelector("html").offsetHeight,"px - 64px)"),width:"90%",display:"block",margin:"0 auto"},e.breakpoints.up("sm"),{width:"50%"})}}));var Ct=function(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(0),l=Object(E.a)(o,2),i=l[0],s=l[1],u=Object(n.useContext)(T);Object(n.useEffect)((function(){!function(){p.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){!function(e){var t=0;e&&(t=e.reduce((function(e,t){return e+t.quantity*t.product.price}),0));s(t)}(a)}),[a]);var m=St();function p(){return(p=Object(v.a)(g.a.mark((function e(){var t,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=localStorage.getItem("token"))){e.next=12;break}return e.prev=2,e.next=5,z.a.get("https://kimbalache-store.herokuapp.com/api/v1/cart",{headers:{Authorization:"Bearer "+t}});case 5:a=e.sent,c(a.data.items),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}function d(){return(d=Object(v.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=localStorage.getItem("token"))){e.next=11;break}return e.prev=2,e.next=5,z.a.delete("".concat("https://kimbalache-store.herokuapp.com/api/v1","/cart/").concat(t),{headers:{Authorization:"Bearer "+n}});case 5:c(a.filter((function(e){return e.product._id.toString()!==t}))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})))).apply(this,arguments)}var b=r.a.createElement("div",{className:m.emptyCart}),h=r.a.createElement("div",{className:m.flex},r.a.createElement(ye.a,{maxWidth:"md",disableGutters:!0},r.a.createElement(ee.a,{className:m.root},a?a.map((function(e){var t=e.product,a=e.quantity;return r.a.createElement(r.a.Fragment,{key:t._id},r.a.createElement(ae.a,{divider:!0,alignItems:"flex-start"},r.a.createElement(vt.a,null,r.a.createElement(Z.a,{alt:"product image",src:"/product1.png",variant:"rounded"})),r.a.createElement(re.a,{primary:t.productName,secondary:"$"+t.price+" x "+a+"u."}),r.a.createElement(G.a,{edge:"end",onClick:function(){return function(e){return d.apply(this,arguments)}(t._id)},"aria-label":"delete"},r.a.createElement(gt.a,null))))})):null)),r.a.createElement(wt,{total:i}));return r.a.createElement(r.a.Fragment,null,u.isAuth?null:r.a.createElement(f.a,{push:!0,to:"/auth"}),0===a.length?b:h)},It=Object(N.a)((function(e){return{root:{},avatar:{width:"100px",height:"100px"}}}));var Nt=function(){var e=It();return r.a.createElement(ye.a,{style:{marginTop:"20px"},maxWidth:"md"},r.a.createElement(k.a,{className:e.root},r.a.createElement(Be.a,{avatar:r.a.createElement(Z.a,{className:e.avatar,variant:"rounded"},"JP")}),r.a.createElement(Fe.a,null,r.a.createElement(Se.a,{container:!0,spacing:3},r.a.createElement(Se.a,{item:!0,xs:12,sm:12,md:6},r.a.createElement(w.a,{label:"Nombre",defaultValue:"Juan",fullWidth:!0})),r.a.createElement(Se.a,{item:!0,xs:12,sm:12,md:6},r.a.createElement(w.a,{label:"Apellido",defaultValue:"Perez",fullWidth:!0})),r.a.createElement(Se.a,{item:!0,xs:12,sm:12,md:6},r.a.createElement(w.a,{label:"Email",defaultValue:"juanperez@gmail.com",fullWidth:!0})),r.a.createElement(Se.a,{item:!0,xs:12,sm:12,md:6},r.a.createElement(w.a,{label:"Calle",defaultValue:"Calle Falsa ",fullWidth:!0})),r.a.createElement(Se.a,{item:!0,xs:6,sm:6,md:6},r.a.createElement(w.a,{label:"Altura",defaultValue:"123",fullWidth:!0})),r.a.createElement(Se.a,{item:!0,xs:6,sm:6,md:6},r.a.createElement(w.a,{label:"Piso",defaultValue:"-",fullWidth:!0})),r.a.createElement(Se.a,{item:!0,xs:6,sm:6,md:6},r.a.createElement(w.a,{label:"Dpto",defaultValue:"-",fullWidth:!0})),r.a.createElement(Se.a,{item:!0,xs:6,sm:6,md:6},r.a.createElement(w.a,{label:"Codigo Postal",defaultValue:"1616",fullWidth:!0})),r.a.createElement(Se.a,{item:!0,xs:12,sm:12,md:6},r.a.createElement(w.a,{label:"Telefeno",defaultValue:"11-5676-3456",fullWidth:!0})),r.a.createElement(Se.a,{item:!0,xs:12,sm:12,md:12},r.a.createElement(C.a,{variant:"contained",color:"secondary"},"Actualizar Datos"))))))};var At=function(){var e=Object(n.useContext)(T),t=e.isAuth,a=e.checkToken;return Object(n.useEffect)((function(){a()}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(je,null),r.a.createElement(f.d,null,r.a.createElement(f.b,{exact:!0,path:"/",component:ht}),r.a.createElement(f.b,{path:"/products",component:it}),t?r.a.createElement(f.b,{path:"/logout",component:Oe}):r.a.createElement(f.b,{path:"/auth",component:_}),r.a.createElement(f.b,{path:"/cart",component:Ct}),r.a.createElement(f.b,{path:"/favs",component:Et}),r.a.createElement(f.b,{path:"/profile",component:Nt}),r.a.createElement(f.a,{path:"*",to:"/"})))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null,r.a.createElement(l.a,null,r.a.createElement(i.a,{theme:d},r.a.createElement(s.a,null),r.a.createElement(At,null))))),document.getElementById("root"))}},[[141,1,2]]]);
//# sourceMappingURL=main.25271ebf.chunk.js.map