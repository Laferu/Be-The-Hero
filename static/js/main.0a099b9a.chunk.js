(this["webpackJsonpbe-the-hero"]=this["webpackJsonpbe-the-hero"]||[]).push([[0],{27:function(e,t,a){e.exports=a.p+"static/media/heroes.1f4b5508.png"},30:function(e,t,a){e.exports=a(63)},53:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),o=a.n(c),l=a(6),u=a(10),s=a(4),i=a.n(s),m=a(8),p=a(1),d=a(7),f=a(26),h=a.n(f).a.create({baseURL:"https://laferu-be-the-hero-backend.herokuapp.com/"}),E=(a(53),a(9)),b=a.n(E),v=a(27),g=a.n(v),O=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],o=Object(u.f)(),s=function(){var e=Object(m.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,h.post("sessions",{id:a});case 4:n=e.sent,localStorage.setItem("ongId",a),localStorage.setItem("ongName",n.data.name),o.push("/profile"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),alert("Falha no Login. Tente novamente!");case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"logon-container"},r.a.createElement("section",{className:"form"},r.a.createElement("img",{src:b.a,alt:"Be The Hero"}),r.a.createElement("form",{onSubmit:s},r.a.createElement("h1",null,"Fa\xe7a seu logon"),r.a.createElement("input",{placeholder:"Sua ID",value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",{className:"button",type:"submit"},"Entrar"),r.a.createElement(l.b,{className:"back-link",to:"/register"},r.a.createElement(d.b,{size:16,color:"#e02041"}),"N\xe3o tenho cadastro"))),r.a.createElement("img",{src:g.a,alt:"Heroes"}))},j=(a(59),function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),s=Object(p.a)(o,2),f=s[0],E=s[1],v=Object(n.useState)(""),g=Object(p.a)(v,2),O=g[0],j=g[1],S=Object(n.useState)(""),N=Object(p.a)(S,2),k=N[0],C=N[1],x=Object(n.useState)(""),y=Object(p.a)(x,2),w=y[0],I=y[1],z=Object(u.f)(),B=function(){var e=Object(m.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={name:a,email:f,whatsapp:O,city:k,uf:w},e.prev=2,e.next=5,h.post("/ongs",n);case 5:r=e.sent,alert("Seu ID de acesso: ".concat(r.data.id)),z.push("/"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),alert("Algo de errado n\xe3o est\xe1 certo. Consulte o console do seu navegador."),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"register-container"},r.a.createElement("div",{className:"content"},r.a.createElement("section",null,r.a.createElement("img",{src:b.a,alt:"Be The Hero"}),r.a.createElement("h1",null,"Cadastro"),r.a.createElement("p",null,"Fa\xe7a seu cadastro, entre na plataforma e ajude pessoas a encontrar os casos da sua ONG"),r.a.createElement(l.b,{className:"back-link",to:"/"},r.a.createElement(d.a,{size:16,color:"#e02041"}),"J\xe1 tenho cadastro")),r.a.createElement("form",{onSubmit:function(e){return B(e)}},r.a.createElement("input",{placeholder:"Nome da ONG",value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("input",{type:"email",placeholder:"E-mail",value:f,onChange:function(e){return E(e.target.value)}}),r.a.createElement("input",{type:"text",placeholder:"Whatsapp",value:O,onChange:function(e){return j(e.target.value)}}),r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{placeholder:"Cidade",value:k,onChange:function(e){return C(e.target.value)}}),r.a.createElement("input",{placeholder:"UF",style:{width:80},value:w,onChange:function(e){return I(e.target.value)}})),r.a.createElement("button",{className:"button",type:"submit"},"Cadastrar"))))}),S=(a(60),function(){var e=localStorage.getItem("ongId"),t=localStorage.getItem("ongName"),a=Object(u.f)(),c=Object(n.useState)([]),o=Object(p.a)(c,2),s=o[0],f=o[1];Object(n.useEffect)((function(){h.get("profile",{headers:{Authorization:e}}).then((function(e){f(e.data)}))}),[e]);var E=function(){var t=Object(m.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.delete("incidents/".concat(a),{headers:{Authorization:e}});case 3:f(s.filter((function(e){return e.id!==a}))),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),alert("Erro ao deletar caso, tente novamente.");case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"profile-container"},r.a.createElement("header",null,r.a.createElement("img",{src:b.a,alt:"Be The Hero"}),r.a.createElement("span",null,"Bem vinda, ",t),r.a.createElement(l.b,{className:"button",to:"/incidents/new"},"Cadastrar novo caso"),r.a.createElement("button",{type:"button",onClick:function(){localStorage.clear(),a.push("/")}},r.a.createElement(d.c,{size:18,color:"#e02041"}))),r.a.createElement("h1",null,"Casos cadastrados"),r.a.createElement("ul",null,s.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("strong",null,"CASO:"),r.a.createElement("p",null,e.title),r.a.createElement("strong",null,"DESCRI\xc7\xc3O:"),r.a.createElement("p",null,e.description),r.a.createElement("strong",null,"VALOR:"),r.a.createElement("p",null,Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e.value)),r.a.createElement("button",{onClick:function(){return E(e.id)},type:"button"},r.a.createElement(d.d,{size:20,color:"#a8a8b3"})))}))))}),N=(a(61),function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),s=Object(p.a)(o,2),f=s[0],E=s[1],v=Object(n.useState)(""),g=Object(p.a)(v,2),O=g[0],j=g[1],S=Object(u.f)(),N=localStorage.getItem("ongId"),k=function(){var e=Object(m.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={title:a,description:f,value:O},e.prev=2,e.next=5,h.post("/incidents",n,{headers:{Authorization:N}});case 5:S.push("/profile"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert("Erro ao cadastrar caso, tente novamente.");case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"new-incident-container"},r.a.createElement("div",{className:"content"},r.a.createElement("section",null,r.a.createElement("img",{src:b.a,alt:"Be The Hero"}),r.a.createElement("h1",null,"Cadastrar novo caso"),r.a.createElement("p",null,"Descreva o caso detalhadamente para encontrar um her\xf3i para resolver isso."),r.a.createElement(l.b,{className:"back-link",to:"/profile"},r.a.createElement(d.a,{size:16,color:"#e02041"}),"Voltar para o in\xedcio")),r.a.createElement("form",{onSubmit:k},r.a.createElement("input",{placeholder:"T\xedtulo do caso",value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("textarea",{placeholder:"Descri\xe7\xe3o",value:f,onChange:function(e){return E(e.target.value)}}),r.a.createElement("input",{placeholder:"Valor em reais",value:O,onChange:function(e){return j(e.target.value)}}),r.a.createElement("button",{className:"button",type:"submit"},"Cadastrar"))))}),k=function(){return r.a.createElement(l.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",exact:!0,component:O}),r.a.createElement(u.a,{path:"/register",component:j}),r.a.createElement(u.a,{path:"/profile",component:S}),r.a.createElement(u.a,{path:"/incidents/new",component:N})))},C=(a(62),function(){return r.a.createElement(k,null)});o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a.p+"static/media/logo.7eea718b.svg"}},[[30,1,2]]]);
//# sourceMappingURL=main.0a099b9a.chunk.js.map