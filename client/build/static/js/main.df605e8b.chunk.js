(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{115:function(e,t,a){e.exports=a.p+"static/media/dog5.b84e8c54.jpg"},116:function(e,t,a){e.exports=a.p+"static/media/dog-wide.676718f7.jpg"},141:function(e,t,a){e.exports=a(245)},148:function(e,t,a){},149:function(e,t,a){},245:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),o=a.n(c),l=a(22),i=a(331),s=a(332),u=a(122),m=a(283),p=a(77),d=Object(u.a)({palette:{primary:m.a,secondary:p.a}}),b=(a(148),a(149),a(18)),g=a(14),h=a(16),f=a.n(h),E=a(24),v=a(15),j=a(8),x=a(85),O=a.n(x),y=a(286),k=a(37),w=a(333),S=a(290),C=a(291),I=a(292),N=a(284),T=a(28),z=a.n(T),A=r.a.createContext({isAuth:!1,user:{}}),B=function(e){var t=Object(n.useState)(!1),a=Object(v.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)({email:"",name:"",img:""}),i=Object(v.a)(l,2),s=i[0],u=i[1],m=function(){var e=Object(E.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.a.post("https://kimbalache-store.herokuapp.com/api/v1/users/login",t);case 3:return a=e.sent,n=a.data,localStorage.setItem("token",n.token),o(!0),u({email:n.user.email,name:n.user.name,img:n.user.profileImage}),e.abrupt("return",!0);case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(E.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("token"),e.prev=1,e.next=4,z.a.post("https://kimbalache-store.herokuapp.com/api/v1/users/logout",{},{headers:{Authorization:"Bearer "+t}});case 4:localStorage.removeItem("token"),o(!1),u({}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(E.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=localStorage.getItem("token"))){e.next=12;break}return e.prev=2,e.next=5,z.a.get("https://kimbalache-store.herokuapp.com/api/v1/users/me",{headers:{Authorization:"Bearer "+t}});case 5:(a=e.sent)?(o(!0),u({email:a.data.email,name:a.data.name,img:a.data.profileImage})):localStorage.removeItem("token"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(E.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.a.post("https://kimbalache-store.herokuapp.com/api/v1/users",t);case 3:return a=e.sent,localStorage.setItem("token",a.data.token),a&&(o(!0),u({email:a.data.user.email,name:a.data.user.name,img:a.data.user.profileImage})),e.abrupt("return",!0);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(A.Provider,{value:{isAuth:c,user:s,login:m,checkToken:d,register:b,logout:p}},e.children)},D=a(115),R=a.n(D),P=a(116),F=a.n(P),L=Object(N.a)((function(e){var t;return{root:(t={},Object(j.a)(t,e.breakpoints.down("sm"),{backgroundImage:"url(".concat(R.a,")"),height:"calc(".concat(document.querySelector("html").offsetHeight,"px - 56px)"),paddingTop:"50px"}),Object(j.a)(t,e.breakpoints.up("sm"),{backgroundImage:"url(".concat(F.a,")"),height:"calc(".concat(document.querySelector("html").offsetHeight,"px - 64px)")}),Object(j.a)(t,"backgroundPosition","center"),Object(j.a)(t,"backgroundRepeat","no-repeat"),Object(j.a)(t,"backgroundSize","cover"),Object(j.a)(t,"paddingTop","70px"),t)}})),W=function(e){var t=L();return r.a.createElement("div",{className:t.root},e.children)},H=Object(N.a)((function(e){return{root:Object(j.a)({width:"94%",maxWidth:400,marginRight:"auto",marginLeft:"auto",padding:20,display:"flex",flexDirection:"column",justifyContent:"space-around",height:340,backgroundColor:"rgba(255,255,255,0.8)"},e.breakpoints.up("md"),{marginRight:"80px"}),typography:{fontWeight:500},form:{display:"flex",flexDirection:"column",justifyContent:"space-around",height:280}}})),q=function(e){var t=H(),a=Object(n.useState)(""),c=Object(v.a)(a,2),o=c[0],l=c[1],i=Object(n.useState)(""),s=Object(v.a)(i,2),u=s[0],m=s[1],p=Object(n.useState)(""),d=Object(v.a)(p,2),h=d[0],j=d[1],x=Object(n.useState)(!1),N=Object(v.a)(x,2),T=N[0],z=N[1],B=Object(n.useState)(!1),D=Object(v.a)(B,2),R=D[0],P=D[1],F=Object(n.useState)(!1),L=Object(v.a)(F,2),q=L[0],M=L[1],_=Object(n.useState)({email:{error:!1,msg:"Ingrese un e-mail v\xe1lido"},name:{error:!1,msg:"El nombre de usuario es obligatorio"},password:{error:!1,msg:"La contrase\xf1a debe contener al menos 6 caracteres"}}),G=Object(v.a)(_,2),U=G[0],V=G[1],$=Object(n.useContext)(A),J=function(e,t,a){t(e.target.value),Y(e.target.value,a),T&&z(!1)},K=function(){var t=Object(E.a)(f.a.mark((function t(a){var n,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),P(!0),z(!1),n={email:o,password:u,name:h},!q){t.next=10;break}return t.next=7,$.register(n);case 7:r=t.sent,t.next=13;break;case 10:return t.next=12,$.login(n);case 12:r=t.sent;case 13:r?e.history.length>0?e.history.goBack():e.history.push("/"):(P(!1),z(!0));case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Y=function(e,t){"email"===t?V(Object(g.a)(Object(g.a)({},U),{},{email:Object(g.a)(Object(g.a)({},U.email),{},{error:!O.a.isEmail(e.trim())})})):"name"===t?V(Object(g.a)(Object(g.a)({},U),{},{name:Object(g.a)(Object(g.a)({},U.name),{},{error:O.a.isEmpty(e.trim())})})):"password"===t&&V(Object(g.a)(Object(g.a)({},U),{},{password:Object(g.a)(Object(g.a)({},U.password),{},{error:e.trim().length<6})}))};return r.a.createElement(r.a.Fragment,null,$.isAuth?r.a.createElement(b.a,{to:"/"}):null,r.a.createElement(W,null,r.a.createElement(y.a,{className:t.root},r.a.createElement(k.a,{className:t.typography,component:"h2",variant:"h5",align:"center"},"Ingres\xe1 tus datos"),T&&r.a.createElement(k.a,{color:"error",component:"span",variant:"subtitle2",align:"center"},"Datos inv\xe1lidos"),r.a.createElement("form",{className:t.form,onSubmit:function(e){return K(e)},noValidate:!0},q&&r.a.createElement(w.a,{error:T||U.name.error,type:"text",label:"Usuario",variant:"outlined",size:"small",helperText:U.name.error&&U.name.msg,onChange:function(e){return J(e,j,"name")}}),r.a.createElement(w.a,{error:T||U.email.error,type:"email",label:"E-mail",variant:"outlined",size:"small",helperText:U.email.error&&U.email.msg,onChange:function(e){return J(e,l,"email")}}),r.a.createElement(w.a,{error:T||U.password.error,type:"password",label:"Contrase\xf1a",variant:"outlined",size:"small",helperText:U.password.error&&U.password.msg,onChange:function(e){return J(e,m,"password")}}),R?r.a.createElement(S.a,{color:"primary"}):r.a.createElement(C.a,{variant:"contained",color:"primary",type:"submit"},q?"Registrarse":"Iniciar Sesi\xf3n")),r.a.createElement(k.a,{variant:"caption",component:"small",align:"center"},q?"\xbfYa tienes usuario? ":"\xbfNo tienes usuario? ",r.a.createElement(I.a,{component:"button",onClick:function(){M(!q),document.getElementsByTagName("form")[0].reset(),l(""),j(""),m(""),z(!1)}},q?"Iniciar Sesi\xf3n":"Registarse")))))},M=a(307),_=a(308),G=a(309),U=a(336),V=a(117),$=a.n(V),J=a(119),K=a.n(J),Y=a(118),Q=a.n(Y),X=a(305),Z=a(337),ee=a(289),te=a(298),ae=a(293),ne=a(294),re=a(295),ce=a(296),oe=a(297),le=a(299),ie=a(300),se=a(301),ue=a(302),me=a(303),pe=a(304);var de=function(e){var t=e.icon,a=e.primary,n=e.to,c=r.a.useMemo((function(){return r.a.forwardRef((function(e,t){return r.a.createElement(l.b,Object.assign({ref:t,to:n},e))}))}),[n]);return r.a.createElement("li",null,r.a.createElement(ae.a,{button:!0,component:c},r.a.createElement(ne.a,null,t),r.a.createElement(re.a,{primary:a})))},be=Object(N.a)({list:{width:250},avatar:{width:70,height:70,marginRight:10}});function ge(e){var t=be(),a=Object(n.useContext)(A),c=r.a.createElement("div",null,r.a.createElement(de,{to:"/auth",primary:"Ingresar",icon:r.a.createElement(ce.a,null)})),o=r.a.createElement(de,{to:"/logout",primary:"Cerrar Sesi\xf3n",icon:r.a.createElement(oe.a,null)}),i=r.a.createElement("div",{className:t.list,role:"presentation",onClick:e.toggleDrawer},r.a.createElement(ee.a,null,r.a.createElement(ae.a,null,r.a.createElement(Z.a,{src:a.user.profileImage,className:t.avatar}),r.a.createElement(k.a,{variant:"subtitle1",component:"h4"},a.isAuth?a.user.name:"Bienvenido"))),r.a.createElement(te.a,null),r.a.createElement(ee.a,null,a.isAuth?o:c),r.a.createElement(te.a,null),r.a.createElement(ee.a,null,a.isAuth?r.a.createElement(de,{to:"/profile",primary:"Mi Cuenta",icon:r.a.createElement(le.a,null)}):null,r.a.createElement(de,{to:"/products",primary:"Productos",icon:r.a.createElement(ie.a,null)}),r.a.createElement(de,{to:"/categories",primary:"Categorias",icon:r.a.createElement(se.a,null)}),r.a.createElement(ae.a,{button:!0,component:l.b,to:"/favs"},r.a.createElement(ne.a,null," ",r.a.createElement(ue.a,null)," "),r.a.createElement(re.a,{primary:"Favoritos"})),r.a.createElement(ae.a,{button:!0,component:l.b,to:"/cart"},r.a.createElement(ne.a,null," ",r.a.createElement(me.a,null)," "),r.a.createElement(re.a,{primary:"Mi Carrito"})),r.a.createElement(te.a,null),r.a.createElement(ae.a,{button:!0,component:l.b,to:"/about"},r.a.createElement(ne.a,null," ",r.a.createElement(pe.a,null)," "),r.a.createElement(re.a,{primary:"Nosotros"}))));return r.a.createElement(X.a,{anchor:"left",open:e.drawerState,onClose:e.toggleDrawer},i)}var he=a(246),fe=a(306),Ee=a(17),ve=Object(N.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(j.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(j.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(Ee.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(Ee.c)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(j.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function je(e){var t=Object(fe.a)();return r.a.createElement(he.a,{appear:!1,direction:"down",in:!t},e.children)}function xe(e){var t=ve(),a=Object(n.useState)(!1),c=Object(v.a)(a,2),o=c[0],i=c[1],s=function(){i(!o)};return r.a.createElement("div",{className:t.root},r.a.createElement(je,e,r.a.createElement(M.a,{position:"fixed"},r.a.createElement(_.a,null,r.a.createElement(ge,{drawerState:o,toggleDrawer:s}),r.a.createElement(G.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"open drawer",onClick:s},r.a.createElement($.a,null)),r.a.createElement(k.a,{className:t.title,variant:"h6",noWrap:!0},"Kimbalache Store"),r.a.createElement("div",{className:t.search},r.a.createElement("div",{className:t.searchIcon},r.a.createElement(Q.a,null)),r.a.createElement(U.a,{placeholder:"Buscar\u2026",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"}})),r.a.createElement(I.a,{component:l.b,to:"/cart"},r.a.createElement(G.a,{edge:"end","aria-label":"go to cart"},r.a.createElement(K.a,{style:{color:"white"}})))))),r.a.createElement(_.a,null))}var Oe=function(e){var t=Object(n.useContext)(A);return Object(n.useEffect)((function(){t.logout(),e.history.push("/")})),null},ye=a(123),ke=a(317),we=a(320),Se=a(321),Ce=a(127),Ie=a(322),Ne=a(323),Te=a(121),ze=a.n(Te),Ae=a(310),Be=a(311),De=a(312),Re=a(313),Pe=a(314),Fe=a(315),Le=a(316),We=Object(N.a)((function(e){return{root:Object(j.a)({maxWidth:600,position:"relative",fontSize:"1rem"},e.breakpoints.down("xs"),{maxHeight:"250px"}),media:{height:0,paddingTop:"56.25%"},fav:{position:"absolute",top:"0px",right:"0px",color:e.palette.secondary.main},desc:Object(j.a)({},e.breakpoints.down("xs"),{display:"none"}),title:Object(j.a)({},e.breakpoints.up("sm"),{fontSize:"1.2rem"}),actions:{justifyContent:"space-around","& svg":Object(j.a)({},e.breakpoints.up("sm"),{fontSize:"larger"})}}})),He=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});var qe=function(e){var t=We();return r.a.createElement(y.a,{className:t.root},r.a.createElement(Ae.a,{className:t.media,image:"/product1.jpg",title:e.title}),r.a.createElement(Be.a,{disableTypography:!0,className:t.title,title:e.title}),r.a.createElement(De.a,{className:t.desc},r.a.createElement(k.a,{variant:"body2",color:"textSecondary",component:"p"},e.description)),r.a.createElement(Re.a,{className:t.actions,disableSpacing:!0},r.a.createElement(G.a,{className:t.fav,onClick:function(){return e.addToFavs()}},r.a.createElement(Pe.a,null)),r.a.createElement(G.a,{onClick:function(){return e.addProductToCart(e.id)}},r.a.createElement(Fe.a,null)),r.a.createElement(G.a,{"aria-label":"share"},r.a.createElement(Le.a,null)),r.a.createElement("span",null,He.format(Number(e.price)))))},Me=a(124),_e=a(120),Ge=a(318),Ue=a(319);function Ve(e){var t=e.inputRef,a=e.onChange,n=Object(Me.a)(e,["inputRef","onChange"]);return r.a.createElement(_e.a,Object.assign({},n,{getInputRef:t,onValueChange:function(t){a({target:{name:e.name,value:t.value}})},thousandSeparator:!0,isNumericString:!0,fixedDecimalScale:!0,decimalScale:2}))}var $e=function(e){var t=Object(n.useState)({}),a=Object(v.a)(t,2),c=a[0],o=a[1],l=function(e){o(Object(g.a)(Object(g.a)({},c),{},Object(j.a)({},e.target.name,e.target.value)))},i=function(){var e=Object(E.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,z.a.post("".concat("https://kimbalache-store.herokuapp.com/api/v1","/products"),c);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(ke.a,{maxWidth:"lg"},r.a.createElement("form",{noValidate:!0,style:{width:"100%",maxWidth:"600px",margin:"30px auto"},onSubmit:function(t){i(t),e.handleDialog(!1),e.addProductToList(c)}},r.a.createElement(Ge.a,null,r.a.createElement(w.a,{onChange:l,name:"productName",color:"secondary",label:"Nombre del producto",variant:"outlined",type:"text",margin:"dense"}),r.a.createElement(w.a,{onChange:l,name:"category",color:"secondary",label:"Categoria",variant:"outlined",type:"text",margin:"dense"}),r.a.createElement(w.a,{color:"secondary",name:"price",margin:"dense",variant:"outlined",onChange:l,value:c.price,InputProps:{startAdornment:r.a.createElement(Ue.a,{position:"start"},"$"),inputComponent:Ve}}),r.a.createElement(C.a,{onChange:function(e){console.log(e.target.files[0]),o(Object(g.a)(Object(g.a)({},c),{},Object(j.a)({},e.target.name,e.target.files[0])))},style:{marginTop:"8px",backgroundColor:"lightblue"},variant:"contained",component:"label"},"Subir Im\xe1gen",r.a.createElement("input",{accept:"image/*",name:"image",type:"file",style:{display:"none"}})),r.a.createElement(w.a,{name:"description",onChange:l,style:{marginTop:"8px"},color:"secondary",label:"Descripci\xf3n",variant:"outlined",fullWidth:!0,multiline:!0,rows:4}),r.a.createElement(C.a,{style:{marginTop:"8px"},variant:"contained",color:"secondary",type:"submit"},"Crear Producto"))))},Je=function(e){var t=Object(n.useState)(!1),a=Object(v.a)(t,2),c=a[0],o=a[1];return r.a.createElement(r.a.Fragment,null,c?r.a.createElement(b.a,{push:!0,to:"/auth"}):null,r.a.createElement(we.a,{onClose:function(){return e.handleClose(!1)},open:!0},r.a.createElement(C.a,{variant:"outlined",color:"primary",size:"large",onClick:function(){return o(!0)}},"Iniciar Sesi\xf3n")))},Ke=a(335),Ye=a(334);function Qe(e){return r.a.createElement(Ye.a,Object.assign({elevation:6,variant:"filled"},e))}var Xe=Object(N.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function Ze(e){var t=Xe(),a=function(t,a){"clickaway"!==a&&e.handleFromParent(Object(g.a)(Object(g.a)({},e.snackBarState),{},{open:!1}))};return r.a.createElement("div",{className:t.root},r.a.createElement(Ke.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:e.snackBarState.open,autoHideDuration:3e3,onClose:a},r.a.createElement(Qe,{onClose:a,severity:e.snackBarState.severity},e.snackBarState.message)))}var et={fab:{position:"fixed",bottom:"20px",right:"20px",zIndex:"10"}},tt=function(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!0),l=Object(v.a)(o,2),i=l[0],s=l[1],u=Object(n.useState)(!1),m=Object(v.a)(u,2),p=m[0],d=m[1],b=Object(n.useState)(!1),h=Object(v.a)(b,2),j=h[0],x=h[1],O=Object(n.useState)({open:!1,severity:"success",message:"A\xf1adido al carrito!"}),y=Object(v.a)(O,2),k=y[0],w=y[1],S=Object(n.useContext)(A);Object(n.useEffect)((function(){C()}),[]);var C=function(){var e=Object(E.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.a.get("".concat("https://kimbalache-store.herokuapp.com/api/v1","/products"));case 3:t=e.sent,c(t.data),s(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s(!1);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();function I(e){return N.apply(this,arguments)}function N(){return(N=Object(E.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!S.isAuth){e.next=13;break}return e.prev=1,a=localStorage.getItem("token"),e.next=5,z.a.post("https://kimbalache-store.herokuapp.com/api/v1/cart",{productId:t},{headers:{Authorization:"Bearer "+a}});case 5:w(Object(g.a)(Object(g.a)({},k),{},{open:!0,severity:"success",message:"A\xf1adido al carrito!"})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:e.next=14;break;case 13:x(!0);case 14:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function T(){S.isAuth&&w(Object(g.a)(Object(g.a)({},k),{},{open:!0,severity:"warning",message:"Funcionalidad en desarrollo :)"}))}return r.a.createElement(ke.a,{style:{marginTop:"20px"}},r.a.createElement(we.a,{onClose:function(){return d(!1)},open:p,fullWidth:!0,maxWidth:"sm"},r.a.createElement($e,{handleDialog:d,addProductToList:function(e){c([].concat(Object(ye.a)(a),[e]))}})),j?r.a.createElement(Je,{handleClose:x}):null,r.a.createElement(Se.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"flex-start",spacing:3},a.map((function(e,t){return r.a.createElement(Se.a,{item:!0,xs:6,sm:6,md:4,lg:3,key:t},i?r.a.createElement(Ce.a,{open:i},r.a.createElement(Ie.a,{color:"primary"})):r.a.createElement(qe,{addToFavs:T,addProductToCart:I,id:e._id,title:e.productName,description:e.description,price:e.price}))}))),r.a.createElement(Ne.a,{style:et.fab,onClick:function(){return d(!0)},color:"secondary",size:"large","aria-label":"add"},r.a.createElement(ze.a,null)),r.a.createElement(Ze,{snackBarState:k,handleFromParent:w}))},at=a(78),nt=a(324),rt=Object(N.a)((function(e){return{root:Object(j.a)({height:"120px",width:"45%",marginTop:"10px",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover",position:"relative"},e.breakpoints.up("md"),{height:"200px",width:"280px"}),chip:{position:"absolute",bottom:"5px",right:"5px"}}}));var ct=function(e){var t=rt();return r.a.createElement(r.a.Fragment,null,r.a.createElement(at.a,{className:t.root,elevation:8,style:{backgroundImage:"url(".concat(e.image,")")}},r.a.createElement(C.a,{className:t.chip,variant:"contained",color:"primary",endIcon:r.a.createElement(nt.a,null),size:"small",disableElevation:!0,to:e.target,component:l.b},e.category)))},ot=Object(N.a)((function(e){var t,a;return{title:(t={fontFamily:"Shadows Into Light!important",color:"white"},Object(j.a)(t,e.breakpoints.down("xs"),{fontSize:"4rem"}),Object(j.a)(t,"textShadow","2px 1px 0 #000"),t),subtitle:(a={fontFamily:"Shadows Into Light!important",color:"white"},Object(j.a)(a,e.breakpoints.down("xs"),{fontSize:"2rem",marginBottom:"50px"}),Object(j.a)(a,"marginBottom","150px"),Object(j.a)(a,"textShadow","2px 1px 0 #000"),a)}}));var lt=function(){var e=ot();return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{className:e.title,variant:"h1",component:"h1",align:"center"},"Kimbalache Store"),r.a.createElement(k.a,{className:e.subtitle,variant:"h3",component:"h2",align:"center"},"Todo para tu mascota"))},it=Object(N.a)((function(e){return{cards:Object(j.a)({display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"},e.breakpoints.up("md"),{flexDirection:"row",flexBasis:"40%"}),wrapper:Object(j.a)({display:"flex",flexDirection:"column",justifyContent:"space-evenly",height:"100%"},e.breakpoints.up("md"),{flexDirection:"row",justifyContent:"space-between","& div":{flexBasis:"40%"}})}})),st=function(){var e=it();return r.a.createElement(W,null,r.a.createElement("div",{className:e.wrapper},r.a.createElement("div",null,r.a.createElement(lt,null)),r.a.createElement("div",{className:e.cards},r.a.createElement(ct,{image:"/puppy.jpg",category:"Perros",target:"/products"}),r.a.createElement(ct,{image:"/kitten.jpg",category:"Gatos",target:"/products"}),r.a.createElement(ct,{image:"/iguana.jpg",category:"Reptiles",target:"/products"}),r.a.createElement(ct,{image:"/product1.jpg",category:"Accesorios",target:"/products"}))))},ut=a(329),mt=a(330),pt=a(325),dt=a(326),bt=a(327),gt=a(328),ht=Object(N.a)((function(e){return{root:{borderTop:"1px solid #cacaca"}}}));var ft=function(){var e=ht();return r.a.createElement(pt.a,{className:e.root,showLabels:!0},r.a.createElement(dt.a,{label:"Ir de compras",icon:r.a.createElement(bt.a,null)}),r.a.createElement("h3",null,"$156.00"),r.a.createElement(dt.a,{label:"Pagar",icon:r.a.createElement(gt.a,null)}))},Et=Object(N.a)((function(e){var t;return{root:{width:"100%",backgroundColor:e.palette.background.paper},inline:{display:"inline"},flex:(t={display:"flex",flexDirection:"column",justifyContent:"space-between"},Object(j.a)(t,e.breakpoints.down("sm"),{minHeight:"calc(".concat(document.querySelector("html").offsetHeight,"px - 56px)")}),Object(j.a)(t,e.breakpoints.up("sm"),{minHeight:"calc(".concat(document.querySelector("html").offsetHeight,"px - 64px)")}),t),emptyCart:Object(j.a)({backgroundImage:"url(/empty-cart.png)",backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat",height:"calc(".concat(document.querySelector("html").offsetHeight,"px - 64px)"),width:"90%",display:"block",margin:"0 auto"},e.breakpoints.up("sm"),{width:"50%"})}}));var vt=function(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),a=t[0],c=t[1],o=Object(n.useContext)(A);Object(n.useEffect)((function(){!function(){i.apply(this,arguments)}()}),[]);var l=Et();function i(){return(i=Object(E.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=localStorage.getItem("token"))){e.next=12;break}return e.prev=2,e.next=5,z.a.get("https://kimbalache-store.herokuapp.com/api/v1/cart",{headers:{Authorization:"Bearer "+t}});case 5:a=e.sent,c(a.data.items),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}function s(){return(s=Object(E.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=localStorage.getItem("token"))){e.next=11;break}return e.prev=2,e.next=5,z.a.delete("".concat("https://kimbalache-store.herokuapp.com/api/v1","/cart/").concat(t),{headers:{Authorization:"Bearer "+n}});case 5:c(a.filter((function(e){return e.product._id.toString()!==t}))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})))).apply(this,arguments)}var u=r.a.createElement("div",{className:l.emptyCart}),m=r.a.createElement("div",{className:l.flex},r.a.createElement(ke.a,{style:{marginTop:"20px"}},r.a.createElement(ee.a,{className:l.root},a?a.map((function(e,t){var a=e.product;return r.a.createElement(r.a.Fragment,{key:a._id},r.a.createElement(ae.a,{alignItems:"flex-start"},r.a.createElement(ut.a,null,r.a.createElement(Z.a,{alt:"product image",src:"/product1.jpg"})),r.a.createElement(re.a,{primary:a.productName,secondary:"$"+a.price}),r.a.createElement(G.a,{edge:"end",onClick:function(){return function(e){return s.apply(this,arguments)}(a._id)},"aria-label":"delete"},r.a.createElement(mt.a,null))),r.a.createElement(te.a,{variant:"inset",component:"li"}))})):null)),r.a.createElement(ft,null));return r.a.createElement(r.a.Fragment,null,o.isAuth?null:r.a.createElement(b.a,{push:!0,to:"/auth"}),0===a.length?u:m)};var jt=function(){var e=Object(n.useContext)(A),t=e.isAuth,a=e.checkToken;return Object(n.useEffect)((function(){a(),console.log("desde App useEffect")}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(xe,null),r.a.createElement(b.d,null,r.a.createElement(b.b,{exact:!0,path:"/",component:st}),r.a.createElement(b.b,{path:"/products",component:tt}),t?r.a.createElement(b.b,{path:"/logout",component:Oe}):r.a.createElement(b.b,{path:"/auth",component:q}),r.a.createElement(b.b,{path:"/cart",component:vt}),r.a.createElement(b.a,{path:"*",to:"/"})))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null,r.a.createElement(l.a,null,r.a.createElement(i.a,{theme:d},r.a.createElement(s.a,null),r.a.createElement(jt,null))))),document.getElementById("root"))}},[[141,1,2]]]);
//# sourceMappingURL=main.df605e8b.chunk.js.map