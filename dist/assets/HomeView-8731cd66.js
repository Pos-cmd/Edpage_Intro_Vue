import{_ as h,o as t,c as a,p as S,a as w,b as e,r as $,n as I,u as v,d as _,w as E,R as G,e as T,f as A,F as p,g,T as Q,h as P,t as x,v as J,i as V,s as H,j as W,k as X,l as k,m as O,q as Y,x as Z,y as K,z as D}from"./index-a2bda78e.js";const M="/Edpage_Intro_Vue/assets/logo-0597a9b4.png";const ee={},se=s=>(S("data-v-1f154437"),s=s(),w(),s),te={class:"navmenu"},ae=se(()=>e("ul",null,[e("li",null,"ACCEUIL"),e("li",null,"CALENRIER"),e("li",null,"CONTACT"),e("li",null,"SE CONNECTER / S'INSCRIRE")],-1)),oe=[ae];function ce(s,o){return t(),a("nav",te,oe)}const ne=h(ee,[["render",ce],["__scopeId","data-v-1f154437"]]);const F=s=>(S("data-v-aff97427"),s=s(),w(),s),le={id:"header"},de={class:"header"},ie={class:"logo"},_e=F(()=>e("img",{class:"logo-img",src:M,alt:"Logo"},null,-1)),re=F(()=>e("i",{class:"fa-solid fa-bars"},null,-1)),ue=[re],ve={__name:"Header",setup(s){let o=$(!1);const c=()=>{o.value=!o.value,console.log(o)};return(n,d)=>(t(),a("section",le,[e("header",de,[e("div",{class:I({overlay:!0,"dsp-none":!v(o)}),onClick:c},null,2),e("div",ie,[_(v(G),{to:"/home"},{default:E(()=>[_e]),_:1})]),e("span",{class:"burger",onClick:c},ue),e("div",{class:I({nav:!0,"show-nav":v(o)})},[_(ne)],2)])]))}},pe=h(ve,[["__scopeId","data-v-aff97427"]]),he="/Edpage_Intro_Vue/assets/salsa1-807385d6.webp",fe="/Edpage_Intro_Vue/assets/salsa2-8437976c.webp",me="/Edpage_Intro_Vue/assets/salsa2-8437976c.webp";const j=s=>(S("data-v-95ef0fad"),s=s(),w(),s),be={class:"carousel"},ge=j(()=>e("i",{class:"fa-solid fa-chevron-left fa-xs"},null,-1)),$e=[ge],ye=j(()=>e("i",{class:"fa-solid fa-chevron-right fa-xs"},null,-1)),Ce=[ye],Se={class:"pagination"},we=["onClick"],xe={__name:"Carousel",setup(s){const o=$(1),c=$(null),n=$(!0),d=$(5e3),r=()=>{if(o.value===c.value){o.value=1;return}o.value+=1},u=()=>{if(o.value===1){o.value=1;return}o.value-=1},y=f=>{o.value=f+1},N=()=>{setInterval(()=>{r()},d.value)};return n.value&&N(),T(()=>{c.value=document.querySelectorAll(".slide").length}),(f,m)=>(t(),a("div",be,[A(f.$slots,"default",{currentSlide:o.value},void 0,!0),e("div",{class:"navigate"},[e("div",{class:"toggle-page left"},[e("div",{class:"icon",onClick:u},$e)]),e("div",{class:"toggle-page right"},[e("div",{class:"icon",onClick:r},Ce)])]),e("div",Se,[(t(!0),a(p,null,g(c.value,(l,i)=>(t(),a("span",{key:i,class:I({active:i+1===o.value}),onClick:b=>y(i)},null,10,we))),128))])]))}},ke=h(xe,[["__scopeId","data-v-95ef0fad"]]);const Ie={},Ee={class:"slide"};function Ne(s,o){return t(),a("div",Ee,[_(Q,{name:"slide"},{default:E(()=>[A(s.$slots,"default",{},void 0,!0)]),_:3})])}const Re=h(Ie,[["render",Ne],["__scopeId","data-v-782df6eb"]]);const Te={class:"hero"},Ae={class:"slide-info"},Ve={class:"slide-text"},He=["src","alt"],Oe={__name:"Hero",setup(s){const o=[{img:"salsa1",msg:"Bienvenue"},{img:"salsa2",msg:"Dos Con Dos"}],c=n=>new URL(Object.assign({"../../assets/img/salsa1.webp":he,"../../assets/img/salsa2.webp":fe,"../../assets/img/salsa3.webp":me})[`../../assets/img/${n}.webp`],self.location).href;return(n,d)=>(t(),a("section",Te,[_(ke,{class:"carousel"},{default:E(({currentSlide:r})=>[(t(),a(p,null,g(o,(u,y)=>_(Re,{key:y},{default:E(()=>[P(e("div",Ae,[e("p",Ve,x(u.msg),1),e("img",{src:c(u.img),alt:u},null,8,He)],512),[[J,r===y+1]])]),_:2},1024)),64))]),_:1})]))}},De=h(Oe,[["__scopeId","data-v-23d09608"]]);const Me=s=>(S("data-v-cc9089be"),s=s(),w(),s),Fe={class:"schedule"},je={class:"schedule-table"},Le={class:"thead"},Be=Me(()=>e("th",null,"Horaire",-1)),Ue={class:"heure"},ze={key:0},qe={key:0},Ge=["onClick"],Qe={__name:"ScheduleTable",setup(s){const o=V(),{scheduleData:c,scheduleTime:n}=H(o),d=$({}),r=$(!1),u=()=>{r.value=window.innerWidth<768};W(()=>r.value),T(()=>{window.addEventListener("resize",u),u()}),X(()=>{window.removeEventListener("resize",u)});const y=(f,m,l,i,b)=>{d.value[i]&&d.value[i][m]===l?delete d.value[i][m]:(d.value[i]=d.value[i]||{},d.value[i][m]=l),o.subscribe({id:f,date:i,time:m,course:l,price:b})},N=(f,m,l)=>d.value[l]&&d.value[l][f]===m;return(f,m)=>(t(),a("div",Fe,[e("table",je,[e("thead",Le,[e("tr",null,[Be,(t(!0),a(p,null,g(v(c),(l,i)=>(t(),a("td",{class:"date",key:i},x(l[0]),1))),128))])]),e("tbody",null,[(t(!0),a(p,null,g(v(n),(l,i)=>(t(),a("tr",{key:i},[e("td",Ue,x(l),1),(t(!0),a(p,null,g(v(c),(b,L)=>(t(),a("td",{class:"course-cell",key:L},[Object.keys(b[1]).includes(l)?(t(),a("div",ze,[Object.keys(b[1]).includes(l)?(t(!0),a(p,{key:0},g(b,(B,U)=>(t(),a("div",{key:U},[(t(!0),a(p,null,g(B,(z,R)=>(t(),a("ul",{key:R,class:"events"},[R===l?(t(),a("div",qe,[(t(!0),a(p,null,g(z,(C,q)=>(t(),a("li",{key:q,class:I(["event",{active:N(l,C.name,b[0],C.price)}]),onClick:Fs=>y(C.id,l,C.name,b[0],C.price)},x(C.name)+" ",11,Ge))),128))])):k("",!0)]))),128))]))),128)):k("",!0)])):k("",!0)]))),128))]))),128))])])]))}},Pe=h(Qe,[["__scopeId","data-v-cc9089be"]]),Je=s=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(s);const We={class:"scheduleHeader"},Xe=e("h1",{class:"titre"}," CALENDRIER ",-1),Ye={class:"information"},Ze=e("span",{class:"info-item"},"SESSION DÉCEMBRE 2022",-1),Ke=e("div",{class:"date info-item"},[e("span",null,"04 déc 2022"),O("-"),e("span",null,"19 jan 2023")],-1),es={class:"lastpart"},ss={key:0},ts={key:0,class:"modal-bg"},as={class:"modal"},os={class:"modal-header"},cs=e("span",null,"Formulaire - Connexion",-1),ns=e("div",{class:"modal-form"},[e("form",{action:""},[e("div",{class:"form-item"},[e("label",{for:""},"Adresse Email"),e("div",{class:"input-element"},[e("input",{type:"email",placeholder:"Adresse Email"}),e("span")])]),e("div",{class:"form-item"},[e("label",{for:""},"Mot de passe"),e("div",{class:"input-element"},[e("input",{type:"password",placeholder:"Mot de passe"}),e("span")])])])],-1),ls=e("section",{class:"modal-info"},[e("a",{class:"info",href:"#"},"Vous n'avez pas de compte? S'inscrire"),e("a",{class:"info",href:"#"},"Mot de passe oublié")],-1),ds=e("div",{class:"modal-footer"},[e("span",null,[e("button",{class:"btn-annuler"},"Annuler"),e("button",{class:"btn-valider"},"Valider")])],-1),is={__name:"ScheduleHeader",setup(s){const o=V(),c=$(!1),{totalPrice:n}=H(o);return(d,r)=>(t(),a(p,null,[e("div",We,[Xe,e("div",Ye,[Ze,Ke,e("div",es,[e("button",{onClick:r[0]||(r[0]=u=>v(n)?c.value=!0:""),class:I([{noClick:v(n)===0},"subscribeBtn"])},[O(" Je m'inscris "),v(n)>0?(t(),a("span",ss,"("+x(v(Je)(parseInt(v(n))))+")",1)):k("",!0)],2)])])]),(t(),Y(Z,{to:"#app"},[c.value?(t(),a("div",ts,[e("div",as,[e("div",os,[cs,e("button",{class:"close-btn",onClick:r[1]||(r[1]=u=>c.value=!1)},"X")]),ns,ls,ds])])):k("",!0)]))],64))}},_s={id:"schedule"},rs={class:"container"},us={class:"element"},vs={__name:"Schedule",setup(s){return(o,c)=>(t(),a("section",_s,[e("div",rs,[e("div",us,[_(is),_(Pe)])])]))}};const ps=s=>(S("data-v-0b29d7db"),s=s(),w(),s),hs={id:"contact"},fs={class:"container"},ms={class:"element"},bs={class:"contactForm"},gs=ps(()=>e("div",{class:"msg"},[e("h4",null,"NOUS ÉCRIRE"),e("p",null,"Envoyez nous vos demande")],-1)),$s={class:"form"},ys=D('<div class="form-row" data-v-0b29d7db><div class="form-el" data-v-0b29d7db><input id="name" type="text" name="name" placeholder="Nom" required data-v-0b29d7db><input id="phone" type="text" name="phone" placeholder="Telephone" required data-v-0b29d7db></div><div class="form-el" data-v-0b29d7db><input id="email" type="text" name="email" placeholder="Email" required data-v-0b29d7db><input id="subject" type="text" name="subject" placeholder="Sujet" data-v-0b29d7db></div></div><div class="form-row" data-v-0b29d7db><textarea id="textarea" name="message" cols="30" placeholder="Message" data-v-0b29d7db></textarea></div><button type="submit" data-v-0b29d7db> ENVOYER </button>',3),Cs=[ys],Ss={__name:"ContactForm",setup(s){function o(c){const{name:n}=Object.fromEntries(new FormData(c.target));alert("Vous ête bien incrit: "+n)}return(c,n)=>(t(),a("section",hs,[e("div",fs,[e("div",ms,[e("div",bs,[gs,e("div",$s,[e("form",{action:"",onSubmit:n[0]||(n[0]=K(d=>o(d),["prevent"]))},Cs,32)])])])])]))}},ws=h(Ss,[["__scopeId","data-v-0b29d7db"]]);const xs={},ks=s=>(S("data-v-0f37ce9c"),s=s(),w(),s),Is={class:"map"},Es=ks(()=>e("div",null,[e("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10926.62769140608!2d-71.29485528071773!3d46.79136423117064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb896e05475c2ff%3A0x9d356c46d4cce2b6!2s2323%20Rue%20Galvani%2C%20Qu%C3%A9bec%2C%20QC%20G1N%204H7%2C%20Canada!5e0!3m2!1sfr!2stg!4v1680875553742!5m2!1sfr!2stg",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})],-1)),Ns=[Es];function Rs(s,o){return t(),a("section",Is,Ns)}const Ts=h(xs,[["render",Rs],["__scopeId","data-v-0f37ce9c"]]);const As={},Vs={class:"footer",id:"footer"},Hs=D('<footer data-v-2cb83499><div class="container" data-v-2cb83499><div class="element" data-v-2cb83499><div class="footer-items" data-v-2cb83499><div class="footer-logo item" data-v-2cb83499><div class="logo" data-v-2cb83499><a href="#" data-v-2cb83499><img class="logo-img" src="'+M+'" alt="logo" data-v-2cb83499></a></div><p data-v-2cb83499>Dos Con Dos</p></div><div class="footer-contact item" data-v-2cb83499><div class="title" data-v-2cb83499>CONTACTEZ-NOUS</div><ul data-v-2cb83499><li data-v-2cb83499><span data-v-2cb83499><i class="fa-solid fa-location-pin" data-v-2cb83499></i> 2323 Rue Galvani, Québec, QC, CA G1N 4H7 </span></li><li data-v-2cb83499><span data-v-2cb83499><i class="fa-solid fa-phone" data-v-2cb83499></i> 4189328666 </span></li><li data-v-2cb83499><span data-v-2cb83499><i class="fa-solid fa-envelope" data-v-2cb83499></i> info@doscondos.com </span></li></ul></div></div><div class="copyright" data-v-2cb83499><div class="copyright-items" data-v-2cb83499><span data-v-2cb83499>© Copyright 2023</span><div class="social" data-v-2cb83499><a href="#" class="soc-f" data-v-2cb83499><i class="fa-brands fa-facebook" data-v-2cb83499></i></a></div></div></div></div></div></footer>',1),Os=[Hs];function Ds(s,o){return t(),a("section",Vs,Os)}const Ms=h(As,[["render",Ds],["__scopeId","data-v-2cb83499"]]),Ls={__name:"HomeView",setup(s){return(o,c)=>(t(),a(p,null,[_(pe),_(De),_(vs),_(ws),_(Ts),_(Ms)],64))}};export{Ls as default};