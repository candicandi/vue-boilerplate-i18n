import{i as k,a9 as x,k as S,a4 as R,L as c,S as _,Y as I,f as T,aa as A,X as C,r as u,o as D,v as E,x as s,G as O,n as g,m as U,D as q,b as y,M as P,O as $}from"./vendor.e082af1e.js";import j from"./ContainerLayout.902de4f1.js";import{T as z}from"./Translations.48e3a8f8.js";import{_ as F,u as G,c as M}from"./index.4eef73bd.js";import"./lodash.e269361c.js";const V=k({name:"UserAccountLogin",components:{UserAccountContainerLayout:j,Promotion:x,Translations:z},setup(){const{proxy:a}=G(),p=M(),d=S(),v=R(),o=c(!0),i=c(""),t=c(""),l=_({email:"vite.admin@gmail.com",password:"123456"}),e=I(),b=T(()=>({title:e.t("login.hydl"),actionList:[{attrs:{type:"primary",loading:o.value,size:"large"},text:e.t("login.signin"),on:{click(r){a.onSubmit(r)}}}],formConfig:[{attrs:{prop:"email",error:i.value,rules:()=>[a.getRequiredRules({trigger:"change",message:e.t("login.plsemail")}),a.getValidatorRules("","blur",{type:"email",message:e.t("login.plscurrentemail")})]},label:e.t("login.email"),prefixIcon:"user-tie",placeholder:e.t("login.plsemail")},{attrs:{prop:"password",error:t.value,rules:()=>a.getRequiredRules({trigger:"change",message:e.t("login.plspwd")})},link:{text:e.t("login.fgtpwd"),click(){}},type:"password",label:e.t("login.pwd"),prefixIcon:"lock",placeholder:e.t("login.plspwd")}]}));function n(r=!1){o.value=r}return n(!0),A(()=>{C(()=>{n(!1)})}),{isLoading:o,inputErrorEmail:i,inputErrorPassword:t,formData:l,configLogin:b,setLoading:n,onSubmit:function(r){o.value||r.validate(async L=>{if(!L)return;i.value="",t.value="",n(!0);const{error:w,data:f,msg:h}=await p.login(l);if(w)return i.value=" ",t.value=h,void n(!1);y.set("token",f.user.token),y.set("name",f.user.username),v.replace(`/${d.params.locale||""}`).then(()=>{a.$message({type:"success",message:e.t("login.logingSuccess")})}).catch(()=>{})})}}}}),m=a=>(P("data-v-107e6037"),a=a(),$(),a),X={class:"user-account-login"},Y={class:"user-account-nav"},B={class:"nav-left"},H=m(()=>s("div",{class:"nav-logo"},null,-1)),J=m(()=>s("div",{class:"nav-circle"},null,-1)),K={class:"nav-title"},N={class:"nav-right"},Q={class:"user-account-body"},W=m(()=>s("img",{src:"assets/pinia.7ed2c830.svg",alt:""},null,-1));var oa=F(V,[["render",function(a,p,d,v,o,i){const t=u("Translations"),l=u("UserAccountContainerLayout"),e=u("Footer");return D(),E("div",X,[s("div",Y,[s("div",B,[H,J,s("div",K,O(a._t("base.systemTitle")),1)]),s("div",N,[g(t)])]),s("div",Q,[g(l,q(a.configLogin,{"form-data":a.formData,onOnSubmit:a.onSubmit}),{titleIcon:U(()=>[W]),_:1},16,["form-data","onOnSubmit"])]),g(e)])}],["__scopeId","data-v-107e6037"]]);export{oa as default};
