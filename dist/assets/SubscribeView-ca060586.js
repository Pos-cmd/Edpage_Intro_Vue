import{_ as u,u as _,r as w,o as f,c as g,a as s,n as l,t as m,w as h,p as b,b as S}from"./index-8fff7c3b.js";const r=a=>(b("data-v-7d8e9238"),a=a(),S(),a),v={class:"loginForm"},M=r(()=>s("h2",null,"Login",-1)),C=r(()=>s("input",{id:"username",type:"text",name:"username",placeholder:"Username",required:""},null,-1)),y=r(()=>s("input",{id:"password",type:"password",name:"password",placeholder:"Mot de passe...",required:""},null,-1)),I=r(()=>s("p",null,[s("button",{id:"login",type:"submit",class:"btnSubmit"}," Se connecter ")],-1)),x={__name:"SubscribeView",setup(a){const i=_(),o={name:"admin",password:"admin"},e=w({}),d=p=>{const{username:t,password:n}=Object.fromEntries(new FormData(p.target));t.trim()!==o.name?(e.name=!1,e.nameMsg="Nom d'utilisateur incorrect"):(e.name=!0,e.nameMsg="Champ valide"),n.trim()!==o.password?(e.psw=!1,e.pswMsg="Mot de passe incorrect"):(e.psw=!0,e.pswMsg="Champ valide"),t.trim()===o.name&&n.trim()===o.password&&(localStorage.setItem("isConnect",JSON.stringify({isConnect:!0})),i.push("/home"))},c=localStorage.getItem("isConnect");return c&&JSON.parse(c).isConnect&&i.push("/home"),(p,t)=>(f(),g("div",v,[M,s("form",{class:"form",onSubmit:t[0]||(t[0]=h(n=>d(n),["prevent"]))},[s("p",null,[C,s("span",{class:l({err:!e.name,succ:e.name})},m(e.nameMsg),3)]),s("p",null,[y,s("span",{class:l({err:!e.psw,succ:e.psw})},m(e.pswMsg),3)]),I],32)]))}},N=u(x,[["__scopeId","data-v-7d8e9238"]]);export{N as default};
