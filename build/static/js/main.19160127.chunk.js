(this.webpackJsonpvitaejjrc=this.webpackJsonpvitaejjrc||[]).push([[0],{103:function(e,a,c){},104:function(e,a,c){},225:function(e,a,c){},233:function(e,a,c){},234:function(e,a,c){},235:function(e,a,c){},237:function(e,a,c){},238:function(e,a,c){"use strict";c.r(a);var t=c(1),s=c(0),n=c(22),i=c.n(n),o=c(6),r=c(7),l=c(10),d=c(11),j=c(240),b=c(23),m=c.n(b),u=c(248),h=(c(76),function(e){var a=e.name,c=e.percent;return Object(t.jsxs)("div",{children:[Object(t.jsxs)("span",{class:"skill",children:[a," ",Object(t.jsx)("i",{class:"val",children:c.toString()+"%"})]}),Object(t.jsx)(u.a,{now:c,variant:"progress"})]})});h.defaultProps={name:"Title",percent:0};var O=h,p=(c(36),[{name:"React.js",percent:80},{name:"HTML",percent:60},{name:"CSS",percent:70},{name:"Javascript",percent:65},{name:"Java",percent:73}]),x=function(){return Object(s.useEffect)((function(){m.a.init({once:!0})}),[]),Object(t.jsx)("section",{id:"about",children:Object(t.jsxs)(j.a,{children:[Object(t.jsx)("h5",{className:"aboutTitle",children:"Sobre m\xed"}),Object(t.jsx)("h1",{className:"introTitle",children:"Perm\xedtame presentarme"}),Object(t.jsx)(j.a,{children:Object(t.jsxs)("div",{class:"row",className:"rowContainer",children:[Object(t.jsx)("div",{class:"col-md-4",children:Object(t.jsx)("div",{className:"imgIntro"})}),Object(t.jsx)("div",{class:"col-md-8",children:Object(t.jsxs)("h4",{className:"lead",children:[" Soy una persona con habilidades de proactividad, comunicaci\xf3n efectiva, trabajo en equipo y capacidad de planificaci\xf3n y organizaci\xf3n. Puedo trabajar como ",Object(t.jsx)("b",{children:"desarrollador Full Stack, desarrollador m\xf3vil, dise\xf1ador UI/UX y dise\xf1ador web."})]})})]})}),Object(t.jsx)("hr",{}),Object(t.jsx)("div",{class:"content","data-aos":"zoom-in","data-aos-delay":"200","data-aos-easing":"ease-in-cubic",children:Object(t.jsx)(j.a,{children:Object(t.jsxs)("div",{class:"row",children:[Object(t.jsxs)("div",{class:"col-md-6 col1",children:[Object(t.jsx)("h4",{children:"Datos de contacto"}),Object(t.jsxs)("ul",{children:[Object(t.jsxs)("li",{children:[Object(t.jsx)("i",{class:"fa fa-dot-circle-o"})," ",Object(t.jsx)("strong",{children:"P\xe1gina web:"})," www.example.com"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("i",{class:"fa fa-dot-circle-o"})," ",Object(t.jsx)("strong",{children:"Ciudad:"})," Popay\xe1n"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("i",{class:"fa fa-dot-circle-o"})," ",Object(t.jsx)("strong",{children:"Departamento:"})," Cauca, Colombia"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("i",{class:"fa fa-dot-circle-o"})," ",Object(t.jsx)("strong",{children:"Email:"})," juanrosero1407@gmail.com"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("i",{class:"fa fa-dot-circle-o"})," ",Object(t.jsx)("strong",{children:"T\xe9lefono:"})," 321 581 ****"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("i",{class:"fa fa-dot-circle-o"})," ",Object(t.jsx)("strong",{children:"GitHub:"})," JuanRosero97"]})]})]}),Object(t.jsxs)("div",{class:"col-md-6 col2",children:[Object(t.jsx)("h4",{children:"Habilidades"}),Object(t.jsx)(j.a,{children:p.map((function(e,a){return Object(t.jsx)(O,{name:e.name,percent:e.percent},a+"PBskill")}))})]})]})})})]})})},f=c(73),v=c.n(f),g=c(105),w=c(14),k=c(245),y=c(111),C=c(241),N=(c(77),c(115)),S=c(35),P=function(){var e=Object(s.useState)("not"),a=Object(w.a)(e,2),c=a[0],n=a[1],i=function(){var e=Object(g.a)(v.a.mark((function e(a,c){var t,s,n,i,r,l;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.resetForm,s=a.email,n=a.message,i=a.name,r={name:i,email:s,message:n},l={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(r)},"https://formspree.io/f/mdopbkvo",e.prev=5,e.next=8,fetch("https://formspree.io/f/mdopbkvo",l);case 8:e.sent.ok?o(t,"ok"):o(t,"dont"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(a,c){return e.apply(this,arguments)}}(),o=function(e,a){"ok"===a?e():console.log("Something went wrong. Please try again."),n(a),window.setTimeout((function(){n(" ")}),5e3)};return Object(t.jsx)(N.a,{initialValues:{email:"",message:"",name:""},onSubmit:i,validationSchema:S.a().shape({email:S.b().email().required("Obligatorio"),message:S.b().required("Obligatorio"),name:S.b().required("Obligatorio")}),children:function(e){var a=e.values,s=e.touched,n=e.errors,i=e.isSubmitting,o=e.handleChange,r=e.handleBlur,l=e.handleSubmit;return Object(t.jsxs)(k.a,{onSubmit:l,className:"contactForm",children:[Object(t.jsxs)("div",{className:"contactFilds",children:[Object(t.jsxs)(k.a.Row,{children:[Object(t.jsxs)(k.a.Group,{as:y.a,children:[Object(t.jsxs)(k.a.Label,{children:["Nombre ",Object(t.jsx)("span",{className:"requerid",children:"*"})]}),Object(t.jsx)(k.a.Control,{variant:"outlined",margin:"normal",required:!0,id:"name",value:a.name,label:"nombre",name:"name",onChange:o,onBlur:r,className:n.name&&s.name&&"error"}),n.name&&s.name&&Object(t.jsx)("div",{className:"input-feedback",children:"Campo vac\xedo o inv\xe1lido"})]}),Object(t.jsxs)(k.a.Group,{as:y.a,children:[Object(t.jsxs)(k.a.Label,{children:["Email ",Object(t.jsx)("span",{className:"requerid",children:"*"})]}),Object(t.jsx)(k.a.Control,{variant:"outlined",margin:"normal",required:!0,id:"email",value:a.email,label:"Correo electr\xf3nico",name:"email",autoComplete:"email",onChange:o,onBlur:r,className:n.email&&s.email&&"error"}),n.email&&s.email&&Object(t.jsx)("div",{className:"input-feedback",children:"Campo vac\xedo o inv\xe1lido"})]})]}),Object(t.jsxs)(k.a.Group,{children:[Object(t.jsxs)(k.a.Label,{children:["Mensaje ",Object(t.jsx)("span",{className:"requerid",children:"*"})]}),Object(t.jsx)(k.a.Control,{variant:"outlined",margin:"normal",required:!0,name:"message",value:a.message,label:"Mensaje",type:"text",id:"message",onBlur:r,className:(n.message&&s.message,"textarea"),onChange:o,as:"textarea",rows:3,maxLength:"600"}),n.message&&s.message&&Object(t.jsx)("div",{className:"input-feedback",children:n.message})]}),Object(t.jsx)(k.a.Group,{children:Object(t.jsx)(k.a.Check,{required:!0,name:"terms",label:"Acepta t\xe9rminos y condiciones",onChange:o,isInvalid:!!n.terms,feedback:n.terms,className:"checkItem"})})]}),Object(t.jsx)(C.a,{variant:"primary",type:"submit",className:"buttonContact",disabled:i,children:"Enviar"}),"ok"===c?Object(t.jsx)("div",{className:"textSendOk",children:Object(t.jsx)("i",{class:"fa fa-check",children:Object(t.jsx)("span",{children:"Formulario enviado con \xe9xito."})})}):"dont"===c?Object(t.jsx)("div",{className:"textSendError",children:Object(t.jsx)("i",{class:"fa fa-times",children:Object(t.jsx)("span",{children:"Corr\xedja el email o intente de nuevo m\xe1s tarde."})})}):""]})}})},E=function(){return Object(s.useEffect)((function(){m.a.init({once:!0})}),[]),Object(t.jsx)("section",{id:"contact",children:Object(t.jsx)("div",{className:"contact",children:Object(t.jsxs)(j.a,{children:[Object(t.jsxs)("div",{class:"col-md-8 offset-md-2 head",children:[Object(t.jsx)("h5",{children:"Contacto"}),Object(t.jsx)("h1",{children:"Ponte en contacto conmigo"}),Object(t.jsx)("h4",{className:"lead",children:" Me encantar\xeda que te pongas en contacto y que juntos pongamos en marcha algo impresionante."})]}),Object(t.jsx)("div",{className:"col-md-10 offset-md-1","data-aos":"zoom-in","data-aos-delay":"400","data-aos-easing":"ease-in-cubic",children:Object(t.jsx)(j.a,{children:Object(t.jsxs)("div",{className:"row",children:[Object(t.jsxs)("div",{class:"col-md-4 row2",children:[Object(t.jsx)("div",{class:"col-md-12 row2col1",children:Object(t.jsxs)("div",{class:"contact-address",children:[Object(t.jsx)("h3",{children:"Direcci\xf3n"}),Object(t.jsx)("p",{children:"Popay\xe1n, COL"})]})}),Object(t.jsx)("hr",{}),Object(t.jsx)("div",{class:"col-md-12 row2col2",children:Object(t.jsxs)("div",{class:"contact-phone",children:[Object(t.jsx)("h3",{children:"Tel\xe9fono Celular"}),Object(t.jsx)("p",{children:Object(t.jsx)("span",{children:"+57 321 581 ****"})})]})}),Object(t.jsx)("hr",{}),Object(t.jsx)("div",{class:"col-md-12 row2col3",children:Object(t.jsxs)("div",{class:"contact-email",children:[Object(t.jsx)("h3",{children:"Email"}),Object(t.jsx)("p",{children:Object(t.jsx)("span",{children:"juanrosero14@gmail.com"})})]})})]}),Object(t.jsx)("div",{class:"col-md-8 row1",children:Object(t.jsx)(P,{})})]})})})]})})})},D=(c(225),function(){return Object(t.jsx)("section",{id:"footer",children:Object(t.jsx)("div",{className:"footer",children:Object(t.jsx)(j.a,{children:Object(t.jsx)("div",{class:"col-md-10 offset-md-1 head",children:Object(t.jsxs)("div",{class:"row",children:[Object(t.jsx)("div",{class:"col-6 row3col1",children:Object(t.jsx)("div",{class:"row",children:Object(t.jsxs)("ul",{class:"footer-social",children:[Object(t.jsx)("li",{children:Object(t.jsx)("a",{href:"https://www.linkedin.com/in/juan-jos%C3%A9-rosero-calder%C3%B3n-27564b203/",target:"_blank",rel:"noreferrer",children:Object(t.jsx)("i",{class:"fa fa-linkedin-square"})})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{href:"https://github.com/JuanRosero97",target:"_blank",rel:"noreferrer",children:Object(t.jsx)("i",{class:"fa fa-github"})})})]})})}),Object(t.jsx)("div",{class:"col-6 row3col2",children:Object(t.jsx)("div",{class:"design",children:Object(t.jsxs)("span",{children:["Design by ",Object(t.jsx)("strong",{children:"Juan Rosero"})," using React.js and Bootstrap"]})})})]})})})})})}),I=c(52),T=(c(233),function(){var e=Object(s.useState)("none"),a=Object(w.a)(e,2),c=a[0],n=a[1];return Object(s.useEffect)((function(){window.addEventListener("scroll",(function(){window.scrollY>30?n("block"):n("none")}))}),[]),Object(t.jsx)("div",{class:"fixed-bottom",className:"divArrow",style:{display:c},children:Object(t.jsx)("a",{class:"arrowButton",title:"A Inicio",onClick:function(e){e.stopPropagation(),e.preventDefault(),I.scroller.scrollTo("home",{smooth:!0,offset:-70,duration:600})},children:Object(t.jsx)("i",{class:"fa fa-chevron-up"})})})}),q=c(13),M=c(244),B=c(246),R=(c(234),[{id:"b1",link:"home",text:"Inicio"},{id:"b2",link:"about",text:"Sobre M\xed"},{id:"b3",link:"resume",text:"Curr\xedculum"},{id:"b4",link:"portfolio",text:"Trabajos"},{id:"b5",link:"contact",text:"Contacto"}]),A=[500,1200,2100,3500],J=function(){var e=Object(s.useState)(!1),a=Object(w.a)(e,2),c=a[0],n=a[1],i=Object(s.useState)({home:"menu-active",about:" ",resume:" ",portfolio:" ",contact:" "}),o=Object(w.a)(i,2),r=o[0],l=o[1];Object(s.useEffect)((function(){window.addEventListener("scroll",(function(){n(window.scrollY>30),window.scrollY<A[0]?l(Object(q.a)(Object(q.a)({},r),{},{home:"menu-active",about:" ",resume:" ",portfolio:" ",contact:" "})):window.scrollY>=A[0]&&window.scrollY<A[1]?l(Object(q.a)(Object(q.a)({},r),{},{home:" ",about:"menu-active",resume:" ",portfolio:" ",contact:" "})):window.scrollY>=A[1]&&window.scrollY<A[2]?l(Object(q.a)(Object(q.a)({},r),{},{home:" ",about:" ",resume:"menu-active",portfolio:" ",contact:" "})):window.scrollY>=A[2]&&window.scrollY<A[3]?l(Object(q.a)(Object(q.a)({},r),{},{home:" ",about:" ",resume:" ",portfolio:"menu-active",contact:" "})):l(Object(q.a)(Object(q.a)({},r),{},{home:" ",about:" ",resume:" ",portfolio:" ",contact:"menu-active"}))}))}),[]);return Object(t.jsxs)(M.a,{collapseOnSelect:!0,expand:"lg",className:c?"black":"transparent",fixed:"top",children:[Object(t.jsx)(M.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(t.jsx)(M.a.Collapse,{id:"responsive-navbar-nav",children:Object(t.jsx)(B.a,{className:"justify-content-center nav-menu",style:{flex:1},children:R.map((function(e,a){return Object(t.jsx)(B.a.Item,{className:(c=a,(0===c?r.home:1===c?r.about:2===c?r.resume:3===c?r.portfolio:r.contact)||" "),children:Object(t.jsx)(B.a.Link,{onMouseDown:function(e){return e.stopPropagation()},onClick:function(c){c.stopPropagation(),c.preventDefault(),function(e){for(var a=[],c=0;c<R.length;c++)c===e?a.push("menu-active"):a.push(" ");l(Object(q.a)(Object(q.a)({},r),{},{home:a[0],about:a[1],resume:a[2],portfolio:a[3],contact:a[4]}))}(a),I.scroller.scrollTo(e.link,{smooth:!0,offset:-70,duration:600})},children:e.text},e.id)},a);var c}))})})]})},L=(c(235),c(242)),z=c(114),U=c.n(z),Y=function(){return Object(t.jsx)("section",{id:"home",children:Object(t.jsxs)(L.a,{fluid:!0,alt:"",id:"placeholder",children:[Object(t.jsxs)(j.a,{children:[Object(t.jsx)("h5",{children:"Hello, World!"}),Object(t.jsx)("h1",{children:"Juan Jos\xe9 Rosero"}),Object(t.jsx)("div",{className:"p",children:Object(t.jsx)(U.a,{options:{autoStart:!0,delay:70},onInit:function(e){e.typeString('<span style="color: #f06000;"> Desarrollador</span>').typeString('<span style="color: #fff;"> - </span>').pauseFor(500).typeString('<span style="color: #f06000;"> Ingeniero en Aut\xf3matica Industrial</span>').pauseFor(3e3).start()}})})]}),Object(t.jsx)(j.a,{children:Object(t.jsxs)("ul",{className:"intro-social",children:[Object(t.jsx)("li",{children:Object(t.jsx)("a",{href:"https://www.linkedin.com/in/juan-jos%C3%A9-rosero-calder%C3%B3n-27564b203/",target:"_blank",rel:"noreferrer",children:Object(t.jsx)("i",{class:"fa fa-linkedin-square"})})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{href:"https://github.com/JuanRosero97",target:"_blank",rel:"noreferrer",children:Object(t.jsx)("i",{class:"fa fa-github"})})})]})})]})})},F=c(243),G=(c(103),c(247)),_=function(e){var a=e.img,c=e.title,s=e.description,n=e.link,i=e.info;return Object(t.jsxs)(G.a,{className:"card-center",children:[Object(t.jsx)("div",{className:"overload",children:Object(t.jsx)(G.a.Img,{className:"cardImg",variant:"top",src:a,alt:"",id:"placeholder"})}),Object(t.jsxs)(G.a.Body,{children:[Object(t.jsx)(G.a.Title,{className:"cardTitle",children:c}),Object(t.jsx)(G.a.Text,{className:"cardDescript",children:s}),""===n?Object(t.jsx)(G.a.Text,{children:Object(t.jsx)("small",{className:"text-muted",children:i})}):Object(t.jsx)(C.a,{className:"cardButton",href:n,target:"_blank",rel:"noreferrer",children:"Ver m\xe1s"})]})]})},H=c.p+"static/media/EMC.fe687990.jpeg",W=c.p+"static/media/mern.8d1f6d0d.png",V=c.p+"static/media/mipapy.404127c9.png",Q=c.p+"static/media/pop.761e62a7.png",X=[{img:W,link:"https://github.com/JuanRosero97/categories-mern",title:"MERN Stack",description:"Constru\xed una API RESTful en Node.js usando express.js y MongoDB. Dise\xf1\xe9 una base de datos donde se puede realizar CRUD gracias a un _id de identificaci\xf3n. En este caso, utilice Material Ui para el dise\xf1o FRONT-END."},{img:c.p+"static/media/megarobot.2d8b72a9.PNG",link:"https://www.megarobotpop.com/",title:"Web Master",description:"Dise\xf1\xe9 y d\xed mantenimiento a la p\xe1gina web creada en Wordpress para un ecommerce."},{img:H,link:"https://www.facebook.com/permalink.php?story_fbid=1626519460881991&id=436341623233120",title:"EMC.apk",description:"Desarroll\xe9 una app en Android Studio para personas mayores de 65 a\xf1os que padecen p\xe9rdida de Memoria a Corto Plazo (MCP)."},{img:Q,link:"https://github.com/JuanRosero97/PopShow-android-app",title:"PopShow app",description:"Desarroll\xe9 una app tanto para IOs como Android, donde se brind\xf3 soporte para espa\xf1ol e ingl\xe9s y se incluy\xf3 una BD en SQLite para realizar un CRUD a los sitios turisticos de Popay\xe1n."},{img:V,link:"",title:"MiPapy.apk",info:"Independiente",description:"Desarroll\xe9 una aplicaci\xf3n m\xf3vil en Thunkable para mejorar la comprensi\xf3n de las operaciones matem\xe1ticas b\xe1sicas para ni\xf1os."}],K=function(){return Object(s.useEffect)((function(){m.a.init({once:!0})}),[]),Object(t.jsx)("section",{id:"portfolio",children:Object(t.jsx)("div",{className:"portfolio",children:Object(t.jsx)(j.a,{children:Object(t.jsx)("div",{class:"row",children:Object(t.jsxs)("div",{class:"col-md-10 offset-md-1 head",children:[Object(t.jsx)("h5",{children:"Trabajos"}),Object(t.jsx)("h1",{children:"Acerca de mis desarrollos"}),Object(t.jsx)("h4",{className:"lead",children:" Estos son algunos de mis trabajos m\xe1s recientes; en cada uno de ellos he tenido experiencias increibles y me siento muy orgulloso de lo que pude realizar."}),Object(t.jsx)(F.a,{"data-aos":"zoom-in","data-aos-delay":"200","data-aos-easing":"ease-in-cubic",className:"cardColumn",children:X.map((function(e,a){return Object(t.jsx)(_,{img:e.img,title:e.title,description:e.description,link:e.link,info:e.info},a)}))})]})})})})})},Z=(c(104),function(e){var a=e.title,c=e.date,s=e.ubication;return Object(t.jsxs)("div",{class:"resume-item",children:[Object(t.jsx)("h4",{children:a}),Object(t.jsx)("h5",{children:c}),Object(t.jsx)("p",{children:Object(t.jsx)("em",{children:s})})]})});Z.defaultProps={title:"Title",date:"Date",ubication:"Ubication"};var $=Z,ee=[{title:"Ingeniero en Autom\xe1tica Industrial",date:"2015 - 2020",ubication:"Universidad del Cauca, Col"},{title:"Bachiller Acad\xe9mico",date:"2010 - 2014",ubication:"I.E. Gabriela Mistral, Col"},{title:"Educaci\xf3n B\xe1sica",date:"2010 - 2014",ubication:"I.E. Normal Superior, Col"}],ae=[{title:"Desarrollador web",date:"01/21 - 01/21",ubication:"Independiente, Popay\xe1n - Col"},{title:"Web Master",date:"04/19 - 12/20",ubication:"MegaRobot Popay\xe1n, Popay\xe1n - Col"},{title:"Desarrollador",date:"02/20 - 10/20",ubication:"Universidad del Cauca, Popay\xe1n - Col"},{title:"Desarrollador",date:"08/18 - 03/19",ubication:"Universidad del Cauca, Popay\xe1n - Col"},{title:"Desarrollador",date:"01/18 - 06/18",ubication:"Independiente, Popay\xe1n - Col"}],ce=function(){return Object(s.useEffect)((function(){m.a.init({once:!0})}),[]),Object(t.jsx)("section",{id:"resume",children:Object(t.jsx)("div",{className:"resume",children:Object(t.jsx)(j.a,{children:Object(t.jsxs)("div",{class:"col-md-12 head",children:[Object(t.jsx)("h5",{children:"Curr\xedculum"}),Object(t.jsx)("h1",{children:"Acerca de mi formaci\xf3n"}),Object(t.jsx)("h4",{className:"lead",children:" Me caracterizo por ejecutar las actividades propuestas de manera responsable y r\xe1pida lo que me ha permitido cumplir con los objetivos que me prongo."}),Object(t.jsxs)("div",{class:"row","data-aos":"zoom-in","data-aos-delay":"200","data-aos-easing":"ease-in-cubic",children:[Object(t.jsxs)("div",{class:"col-md-6 col1",children:[Object(t.jsx)("h3",{class:"resume-title",children:"Educaci\xf3n"}),ee.map((function(e,a){return Object(t.jsx)($,{title:e.title,date:e.date,ubication:e.ubication},a+"col1")}))]}),Object(t.jsxs)("div",{class:"col-md-6 col2",children:[Object(t.jsx)("h3",{class:"resume-title",children:"Experiencia Laboral"}),ae.map((function(e,a){return Object(t.jsx)($,{title:e.title,date:e.date,ubication:e.ubication},a+"col2")}))]})]})]})})})})},te=(c(236),c(237),function(e){Object(l.a)(c,e);var a=Object(d.a)(c);function c(){return Object(o.a)(this,c),a.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return Object(t.jsxs)("div",{className:"App",children:[Object(t.jsx)(J,{}),Object(t.jsx)(Y,{}),Object(t.jsx)(x,{}),Object(t.jsx)(ce,{}),Object(t.jsx)(K,{}),Object(t.jsx)(E,{}),Object(t.jsx)(D,{}),Object(t.jsx)(T,{})]})}}]),c}(s.Component));i.a.render(Object(t.jsx)(te,{}),document.getElementById("root"))},76:function(e,a,c){},77:function(e,a,c){}},[[238,1,2]]]);
//# sourceMappingURL=main.19160127.chunk.js.map