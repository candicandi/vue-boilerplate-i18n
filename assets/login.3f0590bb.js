import{d as y,J as C,o as b,b as L,e as s,_ as I,u as R,P as _,L as z,K as P,f as m,I as T,z as A,i as E,X as U,C as q,t as D,h as d,w as O,G as V,M as w,x as $,y as j,r as p}from"./index.d904eb08.js";import B from"./ContainerLayout.0692de43.js";import{T as F}from"./Translations.e3f867e5.js";import"./lodash.adfbecef.js";const G=y({name:"Promotion"}),J={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},K=[s("path",{fill:"currentColor",d:"m64 448 832-320-128 704-446.08-243.328L832 192 242.816 545.472 64 448zm256 512V657.024L512 768 320 960z"},null,-1)],M=y({name:"UserAccountLogin",components:{UserAccountContainerLayout:B,Promotion:C(G,[["render",function(a,c,u,g,t,o){return b(),L("svg",J,K)}]]),Translations:F},setup(){const{proxy:a}=R(),c=_(),u=z(),g=P(),t=m(!0),o=m(""),n=m(""),l=T({email:"vite.admin@gmail.com",password:"123456"}),e=A(),h=E(()=>({title:e.t("login.hydl"),actionList:[{attrs:{type:"primary",loading:t.value,size:"large"},text:e.t("login.signin"),on:{click(i){a.onSubmit(i)}}}],formConfig:[{attrs:{prop:"email",error:o.value,rules:()=>[a.getRequiredRules({trigger:"change",message:e.t("login.plsemail")}),a.getValidatorRules("","blur",{type:"email",message:e.t("login.plscurrentemail")})]},label:e.t("login.email"),prefixIcon:"user-tie",placeholder:e.t("login.plsemail")},{attrs:{prop:"password",error:n.value,rules:()=>a.getRequiredRules({trigger:"change",message:e.t("login.plspwd")})},link:{text:e.t("login.fgtpwd"),click(){}},type:"password",label:e.t("login.pwd"),prefixIcon:"lock",placeholder:e.t("login.plspwd")}]}));function r(i=!1){t.value=i}return r(!0),U(()=>{q(()=>{r(!1)})}),{isLoading:t,inputErrorEmail:o,inputErrorPassword:n,formData:l,configLogin:h,setLoading:r,onSubmit:function(i){t.value||i.validate(async x=>{if(!x)return;o.value="",n.value="",r(!0);const{error:k,data:f,msg:S}=await c.login(l);if(k)return o.value=" ",n.value=S,void r(!1);w.set("token",f.user.token),w.set("name",f.user.username),g.replace(`/${u.params.locale||""}`).then(()=>{a.$message({type:"success",message:e.t("login.logingSuccess")})}).catch(()=>{})})}}}}),v=a=>($("data-v-107e6037"),a=a(),j(),a),X={class:"user-account-login"},H={class:"user-account-nav"},N={class:"nav-left"},Q=v(()=>s("div",{class:"nav-logo"},null,-1)),W=v(()=>s("div",{class:"nav-circle"},null,-1)),Y={class:"nav-title"},Z={class:"nav-right"},aa={class:"user-account-body"},ea=v(()=>s("img",{src:"assets/pinia.7ed2c830.svg",alt:""},null,-1));var ra=I(M,[["render",function(a,c,u,g,t,o){const n=p("Translations"),l=p("UserAccountContainerLayout"),e=p("Footer");return b(),L("div",X,[s("div",H,[s("div",N,[Q,W,s("div",Y,D(a._t("base.systemTitle")),1)]),s("div",Z,[d(n)])]),s("div",aa,[d(l,V(a.configLogin,{"form-data":a.formData,onOnSubmit:a.onSubmit}),{titleIcon:O(()=>[ea]),_:1},16,["form-data","onOnSubmit"])]),d(e)])}],["__scopeId","data-v-107e6037"]]);export{ra as default};
