(function(e){function t(t){for(var n,o,i=t[0],c=t[1],d=t[2],l=0,m=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(m.length)m.shift()();return s.push.apply(s,d||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,o=1;o<r.length;o++){var i=r[o];0!==a[i]&&(n=!1)}n&&(s.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={app:0},a={app:0},s=[];function i(e){return c.p+"js/"+({"immortal-regiment":"immortal-regiment",login:"login","planet-earth":"planet-earth",register:"register",terms:"terms"}[e]||e)+"."+{"immortal-regiment":"b14bc0a4",login:"18081020","planet-earth":"efee1f98",register:"a8928a77",terms:"3f8971b2"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={"immortal-regiment":1,login:1,"planet-earth":1,register:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({"immortal-regiment":"immortal-regiment",login:"login","planet-earth":"planet-earth",register:"register",terms:"terms"}[e]||e)+"."+{"immortal-regiment":"b50aa526",login:"44b8b1f3","planet-earth":"153a8aa2",register:"68ac2430",terms:"31d6cfe0"}[e]+".css",a=c.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var d=s[i],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===n||l===a))return t()}var m=document.getElementsByTagName("style");for(i=0;i<m.length;i++){d=m[i],l=d.getAttribute("data-href");if(l===n||l===a)return t()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=t,u.onerror=function(t){var n=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete o[e],u.parentNode.removeChild(u),r(s)},u.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(u)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=s);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var m=new Error;d=function(t){l.onerror=l.onload=null,clearTimeout(u);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",m.name="ChunkLoadError",m.type=n,m.request=o,r[1](m)}a[e]=void 0}};var u=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=t,d=d.slice();for(var m=0;m<d.length;m++)t(d[m]);var u=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"39c5":function(e,t,r){"use strict";var n=r("f528"),o=r.n(n);o.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view"),r("CookiesAccept")],1)},a=[],s=(r("c975"),r("d81d"),r("5530")),i=r("2f62"),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"show",rawName:"v-show",value:!e.isAccepted,expression:"!isAccepted"}],staticClass:"cookies-accept"},[r("p",{staticClass:"cookies-accept__text"},[e._v(" "+e._s(e._f("translate")("cookiesAcceptText"))+" ")]),r("div",{staticClass:"cookies-accept__button"},[r("button",{staticClass:"ir-blue-button accept-button",attrs:{type:"button"},on:{click:e.accept}},[e._v(" "+e._s(e._f("translate")("cookiesAcceptButtonText"))+" ")]),r("span",{staticClass:"decorate-line"})])])},d=[],l={name:"CookiesAccept",data:function(){return{isAccepted:!1}},methods:{accept:function(){this.isAccepted=!0,this.$cookies.set("cookies-accept",this.isAccepted)}},created:function(){this.isAccepted=this.$cookies.get("cookies-accept")}},m=l,u=(r("e9f0"),r("2877")),p=Object(u["a"])(m,c,d,!1,null,null,null),g=p.exports,f={name:"app",components:{CookiesAccept:g},data:function(){return{selectedLanguage:this.$store.state.curLanguage}},computed:Object(s["a"])({},Object(i["b"])(["languages"])),created:function(){var e=this.$cookies.get("lang"),t=this.languages.map((function(e){return e.short}));e&&-1!==t.indexOf(e)||(e="en"),n["a"].i18n.set(e),this.$store.commit("setLanguage",e)}},h=f,v=(r("5c0b"),Object(u["a"])(h,o,a,!1,null,null,null)),w=v.exports,b=(r("d3b7"),r("8c4f")),y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page-home"},[r("ul",{staticClass:"home-menu-list"},[r("li",{staticClass:"home-menu-list__item",on:{click:function(t){return e.goTo("ir")}}},[e._m(0),r("div",{staticClass:"description"},[e._v(" Contrary to popular belief, Lorem Ipsum is not simply random text. It has. ")])]),r("li",{staticClass:"home-menu-list__item",on:{click:function(t){return e.goTo("pe")}}})]),e.showIRVideo?r("VideoBox"):e._e()],1)},P=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"title"},[r("h1",{staticClass:"style-1"},[e._v("Они")]),r("h1",{staticClass:"style-2"},[e._v("сражались за родину")])])}],k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade-video"}},[e.showVideo?n("div",{staticClass:"video-box",on:{click:function(t){e.showVideo=!1}}},[n("video",{staticClass:"video-box__item",attrs:{autoplay:""}},[n("source",{attrs:{src:r("f562"),type:"video/webm"}})])]):e._e()])},N=[],R={name:"VideoBox",data:function(){return{showVideo:!0}}},C=R,E=(r("d877"),Object(u["a"])(C,k,N,!1,null,null,null)),S=E.exports,x={name:"PageHome",components:{VideoBox:S},data:function(){return{showIRVideo:!1,showPEVideo:!1}},methods:{goTo:function(e){var t=this;console.log(e),"ir"===e&&(this.showIRVideo=!0,setTimeout((function(){t.showIRVideo=!0,t.$router.push("/ir")}),5e3)),"pe"===e&&this.$router.push("/pe")}}},A=x,T=(r("39c5"),Object(u["a"])(A,y,P,!1,null,null,null)),_=T.exports;n["a"].use(b["a"]);var I=[{path:"/",name:"PageHome",component:_},{path:"/register",name:"PageRegister",component:function(){return r.e("register").then(r.bind(null,"55eb"))}},{path:"/confirm-register",name:"PageConfirmRegister",component:function(){return r.e("register").then(r.bind(null,"42b9"))}},{path:"/login",name:"PageLogin",component:function(){return r.e("login").then(r.bind(null,"8379"))}},{path:"/password-recovery",name:"PagePasswordRecovery",props:function(e){return{token:e.query.token}},component:function(){return r.e("login").then(r.bind(null,"ad35"))}},{path:"/ir",name:"PageIR",component:function(){return r.e("immortal-regiment").then(r.bind(null,"43a9"))}},{path:"/pe",name:"PagePE",component:function(){return r.e("planet-earth").then(r.bind(null,"51cc"))}},{path:"/terms",name:"PageTerms",component:function(){return r.e("terms").then(r.bind(null,"4564"))}},{path:"*",redirect:"/"}],L=new b["a"]({mode:"history",base:"/",routes:I}),O=L,j=r("f2f3"),B={cookiesAcceptText:"This site uses cookies and other technologies to help you navigate and provide the best user experience, analyze the use of our products and services, and improve the quality of advertising and marketing activities.",cookiesAcceptButtonText:"ACCEPT",registration:"Sign In",register:"SIGN IN",registerWarningText:'By clicking the "Register" button you agree to the <a href="/terms" target="_blank">User Agreement</a> and agree to the processing of personal data.',confirmRegistration:"Confirmation E-mail",confirmRegistrationWarningText:"To complete the registration, follow the link in the letter that was sent to the specified e-mail",confirmRegistrationRepeat:"SEND AGAIN",confirmRegistrationSeconds:"SEC",authorization:"Authorization",forgotPassword:"Forgot your password?",passwordRecovery:"Password recovery",passwordRecoverySend:"RESTORE PASSWORD",passwordRecoverySendedText:"Password reset link has been sent to your e-mail:",passwordRecoveryCheckEmail:"CHECK E-MAIL",email:"E-mail",phone:"Phone number",password:"Password",confirmPassword:"Confirm password",firstName:"First name",lastName:"Last name",login:"LOG IN",save:"SAVE PASSWORD",passwordNew:"New password",confirmPasswordNew:"Repeat new password",mustbeEmail:"e-mail must be entered",invalidEmail:"invalid e-mail",invalidPhone:"invalid phone number",mustbePassword:"password must be entered",invalidPassword:"invalid password",invalidConfirmPassword:"passwords do not match",mustbeFirstName:"first name must be entered",mustbeLastName:"last name must be entered"},F={cookiesAcceptText:"Этот сайт использует куки-файлы и другие технологии, чтобы помочь вам в навигации, а также предоставить лучший пользовательский опыт, анализировать использование наших продуктов и услуг, повысить качество рекламных и маркетинговых активностей.",cookiesAcceptButtonText:"ПРИНЯТЬ",registration:"Регистрация",register:"ЗАРЕГИСТРИРОВАТЬСЯ",registerWarningText:'Нажатием кнопки "Зарегистрироваться" Вы соглашаетесь с <a href="/terms" target="_blank">Пользовательским соглашением</a> и даете согласие на обработку персональных данных',confirmRegistration:"Подтверждение E-mail",confirmRegistrationWarningText:"Для завершения регистрации перейдите по ссылке в письме, которая была отправлена на указанный e-mail",confirmRegistrationRepeat:"ОТПРАВИТЬ ЕЩЁ РАЗ",confirmRegistrationSeconds:"СЕК",authorization:"Авторизация",forgotPassword:"Забыли пароль?",passwordRecovery:"Восстановление пароля",passwordRecoverySend:"ВОССТАНОВИТЬ ПАРОЛЬ",passwordRecoverySendedText:"Ссылка для сброса пароля была отправлена на ваш e-mail:",passwordRecoveryCheckEmail:"ПРОВЕРИТЬ ПОЧТУ",email:"E-mail",phone:"Номер телефона",password:"Пароль",confirmPassword:"Подтвердите пароль",firstName:"Имя",lastName:"Фамилия",login:"ВОЙТИ",save:"СОХРАНИТЬ ПАРОЛЬ",passwordNew:"Новый пароль",confirmPasswordNew:"Повторите новый пароль",mustbeEmail:"e-mail должен быть указан",invalidEmail:"неверно введён e-mail",invalidPhone:"неверно введён номер телефона",mustbePassword:"пароль должен быть указан",invalidPassword:"некорректный пароль",invalidConfirmPassword:"пароли не совпадают",mustbeFirstName:"имя должно быть указано",mustbeLastName:"фамилия должна быть указана"},z={cookiesAcceptText:"This site uses cookies and other technologies to help you navigate and provide the best user experience, analyze the use of our products and services, and improve the quality of advertising and marketing activities.",cookiesAcceptButtonText:"Accept",registration:"Sign In",register:"SIGN IN",registerWarningText:'By clicking the "Register" button you agree to the <a href="/terms" target="_blank">User Agreement</a> and agree to the processing of personal data.',confirmRegistration:"Confirmation E-mail",confirmRegistrationWarningText:"To complete the registration, follow the link in the letter that was sent to the specified e-mail",confirmRegistrationRepeat:"SEND AGAIN",confirmRegistrationSeconds:"SEC",authorization:"Authorization",forgotPassword:"Forgot your password?",passwordRecovery:"Password recovery",passwordRecoverySend:"Send",passwordRecoverySendedText:"Password reset link has been sent to your e-mail:",email:"E-mail",phone:"Phone number",password:"Password",confirmPassword:"Confirm password",firstName:"First name",lastName:"Last name",login:"LOG IN",save:"Save",passwordNew:"New password",confirmPasswordNew:"Confirm new password",mustbeEmail:"e-mail must be entered",invalidEmail:"invalid e-mail",invalidPhone:"invalid phone number",mustbePassword:"password must be entered",invalidPassword:"invalid password",invalidConfirmPassword:"passwords do not match",mustbeFirstName:"first name must be entered",mustbeLastName:"last name must be entered"},$={cookiesAcceptText:"This site uses cookies and other technologies to help you navigate and provide the best user experience, analyze the use of our products and services, and improve the quality of advertising and marketing activities.",cookiesAcceptButtonText:"Accept",registration:"Sign In",register:"SIGN IN",registerWarningText:'By clicking the "Register" button you agree to the <a href="/terms" target="_blank">User Agreement</a> and agree to the processing of personal data.',confirmRegistration:"Confirmation E-mail",confirmRegistrationWarningText:"To complete the registration, follow the link in the letter that was sent to the specified e-mail",confirmRegistrationRepeat:"SEND AGAIN",confirmRegistrationSeconds:"SEC",authorization:"Authorization",forgotPassword:"Forgot your password?",passwordRecovery:"Password recovery",passwordRecoverySend:"Send",passwordRecoverySendedText:"Password reset link has been sent to your e-mail:",email:"E-mail",phone:"Phone number",password:"Password",confirmPassword:"Confirm password",firstName:"First name",lastName:"Last name",login:"LOG IN",save:"Save",passwordNew:"New password",confirmPasswordNew:"Confirm new password",mustbeEmail:"e-mail must be entered",invalidEmail:"invalid e-mail",invalidPhone:"invalid phone number",mustbePassword:"password must be entered",invalidPassword:"invalid password",invalidConfirmPassword:"passwords do not match",mustbeFirstName:"first name must be entered",mustbeLastName:"last name must be entered"},G={cookiesAcceptText:"This site uses cookies and other technologies to help you navigate and provide the best user experience, analyze the use of our products and services, and improve the quality of advertising and marketing activities.",cookiesAcceptButtonText:"Accept",registration:"Sign In",register:"SIGN IN",registerWarningText:'By clicking the "Register" button you agree to the <a href="/terms" target="_blank">User Agreement</a> and agree to the processing of personal data.',confirmRegistration:"Confirmation E-mail",confirmRegistrationWarningText:"To complete the registration, follow the link in the letter that was sent to the specified e-mail",confirmRegistrationRepeat:"SEND AGAIN",confirmRegistrationSeconds:"SEC",authorization:"Authorization",forgotPassword:"Forgot your password?",passwordRecovery:"Password recovery",passwordRecoverySend:"Send",passwordRecoverySendedText:"Password reset link has been sent to your e-mail:",email:"E-mail",phone:"Phone number",password:"Password",confirmPassword:"Confirm password",firstName:"First name",lastName:"Last name",login:"LOG IN",save:"Save",passwordNew:"New password",confirmPasswordNew:"Confirm new password",mustbeEmail:"e-mail must be entered",invalidEmail:"invalid e-mail",invalidPhone:"invalid phone number",mustbePassword:"password must be entered",invalidPassword:"invalid password",invalidConfirmPassword:"passwords do not match",mustbeFirstName:"first name must be entered",mustbeLastName:"last name must be entered"};n["a"].use(i["a"]);var V={curLanguage:null,languages:[{short:"en",long:"English"},{short:"ru",long:"Русский"},{short:"de",long:"Deutsch"},{short:"fr",long:"Français"},{short:"it",long:"Italiano"}]};V.curLanguage=V.languages[0];var W={},D={setLanguage:function(e,t){e.curLanguage=t}},q={},M={},U=new i["a"].Store({state:V,getters:W,mutations:D,actions:q,modules:M});n["a"].use(j["a"].plugin,U),n["a"].i18n.add("en",B),n["a"].i18n.add("ru",F),n["a"].i18n.add("de",z),n["a"].i18n.add("fr",$),n["a"].i18n.add("it",G);var H=U,J=r("2b27"),K=r.n(J);n["a"].use(K.a),n["a"].config.productionTip=!1,new n["a"]({router:O,store:H,render:function(e){return e(w)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),o=r.n(n);o.a},"606b":function(e,t,r){},"9c0c":function(e,t,r){},ce07:function(e,t,r){},d877:function(e,t,r){"use strict";var n=r("ce07"),o=r.n(n);o.a},e9f0:function(e,t,r){"use strict";var n=r("606b"),o=r.n(n);o.a},f528:function(e,t,r){},f562:function(e,t,r){e.exports=r.p+"media/test_video1.3eb6a33b.webm"}});
//# sourceMappingURL=app.448b8837.js.map