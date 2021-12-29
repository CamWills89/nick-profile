(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{29:function(e,a,t){e.exports={shadowed:"Home_shadowed__C8qcS",firstName:"Home_firstName__1Q5r-",emoji:"Home_emoji__3BRIr",avatar:"Home_avatar__pdsM0",mainImg:"Home_mainImg__2soHG",socials:"Home_socials__1PaLa",video:"Home_video__3W7ue"}},34:function(e,a,t){e.exports={shadowed:"BaseLayout_shadowed__2pEMu",light:"BaseLayout_light__1zOIe",dark:"BaseLayout_dark__irX0d",container:"BaseLayout_container__2it_D"}},35:function(e,a,t){e.exports={shadowed:"Navbar_shadowed__335xV",navList:"Navbar_navList__3N-Te",logo:"Navbar_logo__17Pw7",dark:"Navbar_dark__3X6Pu",topRow:"Navbar_topRow__27WBp"}},368:function(e,a,t){"use strict";t.r(a);var n=t(2),o=t.n(n),r=t(72),l=t.n(r),i=t(73),c=t.n(i),s=t(79),m=t(34),u=t.n(m),d=t(28),p=t.n(d),h=t(23),w=t(35),v=t.n(w),_=t(74),f=t.n(_);function E(e){var a=e.darkMode,t=e.handleClick;return o.a.createElement("div",{className:f.a.toggler,onClick:t},a?o.a.createElement("span",{"aria-label":"Full Moon",role:"img"},"\ud83c\udf15"):o.a.createElement("span",{"aria-label":"New Moon",role:"img"},"\ud83c\udf11"))}var b=t(75),g={firstName:"Nick",lastName:"Oliveira",initials:"Nick_Oliveira",position:"Freelance Videographer",selfPortrait:t.n(b).a,gradient:"linear-gradient(135deg, ".concat(["rgb(185, 85, 211)","rgb(247, 10, 7)"],")"),miniBio:[["\ud83c\uddfa\ud83c\uddf8","Atlanta, Georgia"],["\ud83d\udcbc","Cinematographer, editor, artist"],["\u2709\ufe0f","ngoliveira25@gmail.com"]],socials:[["https://www.facebook.com/nick.oliveira.161",o.a.createElement("i",{className:"fa fa-facebook","aria-hidden":"true"})],["https://www.instagram.com/nicholas_oliveira/?hl=en",o.a.createElement("i",{className:"fa fa-instagram","aria-hidden":"true"})],["https://www.youtube.com/channel/UCDXtabhCqaTKi4nd1VVsb8g/videos",o.a.createElement("i",{className:"fa fa-youtube","aria-hidden":"true"})]],bio:"\nI am Toronto born, an Atlanta based director, cinematographer, editor, and artist with over ten years of experience. Combining my love for films and visual art, I have developed a truly unique storytelling style. I can produce a wide variety of media, including concerts, business events, product advertisements, short films, and more!"};function N(e){var a=e.darkMode,t=e.handleClick;return o.a.createElement("nav",null,o.a.createElement("ul",{className:p()(v.a.navList,a?v.a.dark:null)},o.a.createElement("li",null,o.a.createElement(h.b,{exact:!0,activeClassName:"current",to:"/"},"Home")),o.a.createElement("li",null,o.a.createElement(h.b,{exact:!0,activeClassName:"none",to:"/"},o.a.createElement("span",{className:v.a.logo},g.initials))),o.a.createElement("li",null,o.a.createElement(h.b,{exact:!0,activeClassName:"current",to:"/portfolio"},"Videos")),o.a.createElement(E,{darkMode:a,handleClick:t})))}var y=t(11),k=t(29),x=t.n(k);function C(){var e={background:g.gradient,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},a=g.miniBio;var t=g.socials;return o.a.createElement("main",null,o.a.createElement("div",{className:p()(x.a.avatar)},o.a.createElement("img",{src:g.selfPortrait,alt:"self",className:x.a.mainImg})),o.a.createElement("div",{className:x.a.mainText},o.a.createElement("h1",null,"Hi, I'm ",o.a.createElement("span",{style:e},g.firstName)," \ud83d\udc4b\ud83c\udffb"),o.a.createElement("h2",null,"I'm a ",g.position,"."),o.a.createElement("ul",null,function(){for(var e=[],t=0;t<a.length;t++){var n=a[t];e.push(o.a.createElement("li",null,o.a.createElement("span",{"aria-label":"emoji",key:"img",role:"img",className:x.a.emoji},n[0])," ",n[1]))}return e}()),o.a.createElement("div",{className:x.a.socials},function(){for(var e=[],a=0;a<t.length;a++){var n=t[a];e.push(o.a.createElement("a",{href:n[0]},n[1]))}return e}())))}var I=t(77),M=t.n(I),H=t(20),B=t.n(H);function j(){return o.a.createElement("main",null,o.a.createElement("div",{className:M.a.projectsGrid},o.a.createElement(B.a,{width:"100%",controls:!0,url:"https://www.youtube.com/watch?v=W6NABTIyo2o"}),o.a.createElement(B.a,{width:"100%",controls:!0,url:"https://www.youtube.com/watch?v=eC1uEUltnWw"}),o.a.createElement(B.a,{width:"100%",controls:!0,url:"https://www.youtube.com/watch?v=jMptewfuVoQ"}),o.a.createElement(B.a,{width:"100%",controls:!0,url:"https://www.youtube.com/watch?v=ut5ry1Zz0PM"}),o.a.createElement(B.a,{width:"100%",controls:!0,url:"https://www.youtube.com/watch?v=xNDtq8biDHo"}),o.a.createElement(B.a,{width:"100%",controls:!0,url:"https://www.youtube.com/watch?v=xD3TkB3VH7Y"}),o.a.createElement(B.a,{width:"100%",controls:!0,url:"https://www.youtube.com/watch?v=3rVscwZMuuM"}),o.a.createElement(B.a,{width:"100%",controls:!0,url:"https://www.youtube.com/watch?v=UIoo9YIRen8"})))}function L(){var e=Object(n.useState)(!0),a=Object(s.a)(e,2),t=a[0],r=a[1];return o.a.createElement("div",{className:p()(u.a.container,t?u.a.dark:u.a.light)},o.a.createElement(N,{darkMode:t,handleClick:function(){r(!t)}}),o.a.createElement(P,null))}var P=function(){return o.a.createElement(y.c,null,o.a.createElement(y.a,{exact:!0,path:"/",component:C}),o.a.createElement(y.a,{exact:!0,path:"/portfolio",component:j}))},V=t(78),T=t.n(V);var O=function(){return o.a.createElement(h.a,{basename:"/nick-profile"},o.a.createElement(T.a,{id:"tsparticles",init:function(e){console.log(e)},loaded:function(e){console.log(e)},options:{fpsLimit:60,background:{color:"blue"},interactivity:{events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"repulse",parallax:{enable:!1,force:60,smooth:10}},resize:!0},modes:{push:{quantity:4},repulse:{distance:200,duration:.4}}},particles:{color:{value:"#ffffff"},move:{direction:"none",enable:!0,outModes:"out",random:!1,speed:.2,straight:!1},number:{density:{enable:!0,area:800},value:150},opacity:{animation:{enable:!0,speed:.05,sync:!0,startValue:"max",count:1,destroy:"min"},value:{min:0,max:.5}},shape:{type:"circle"},size:{value:{min:1,max:5}}},detectRetina:!0}}),o.a.createElement("div",{className:c.a.app},o.a.createElement(L,null,o.a.createElement(C,null))))};l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(O,null)),document.getElementById("root"))},73:function(e,a,t){e.exports={shadowed:"App_shadowed__17FOO"}},74:function(e,a,t){e.exports={toggler:"Toggler_toggler__1GiR1"}},75:function(e,a,t){e.exports=t.p+"static/media/self.94fdd148.png"},77:function(e,a,t){e.exports={shadowed:"Portfolio_shadowed__3s6Ps",projectsGrid:"Portfolio_projectsGrid__1cmNt"}},80:function(e,a,t){e.exports=t(368)}},[[80,1,2]]]);
//# sourceMappingURL=main.3d0cb526.chunk.js.map