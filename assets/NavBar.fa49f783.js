import{T as B}from"./Translations.d15488ee.js";import{d,J as S,o,b as r,e as n,u as T,z as x,i as _,_ as h,F as b,v as N,t as A,K as q,L as z,M as k,r as i,c as w,w as s,h as l,a as L,N as M,n as I,x as V,y as $}from"./index.bfd7e640.js";const F=d({name:"SwitchButton"}),J={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},j=[n("path",{fill:"currentColor",d:"M352 159.872V230.4a352 352 0 1 0 320 0v-70.528A416.128 416.128 0 0 1 512 960a416 416 0 0 1-160-800.128z"},null,-1),n("path",{fill:"currentColor",d:"M512 64q32 0 32 32v320q0 32-32 32t-32-32V96q0-32 32-32z"},null,-1)];var K=S(F,[["render",function(a,t,c,v,u,m){return o(),r("svg",J,j)}]]);const D=d({name:"NavigationSideAction",emits:["click"],setup(){const{proxy:a}=T(),t=x();return{title:_(()=>t.t("base.systemTitle")),handleClick:function(){a.$emit("click")}}}}),E={class:"side-action-container"},G={class:"action-list"};var H=h(D,[["render",function(a,t,c,v,u,m){return o(),r("div",E,[n("ul",G,[(o(),r(b,null,N(3,e=>n("li",{key:e,class:"action-item"}," Action "+A(e),1)),64))])])}],["__scopeId","data-v-86e728c6"]]);const O=d({name:"NavigationAvatar",components:{SwitchButton:K},setup(){q(),z();const a=x();return{commandList:_(()=>[{label:a.t("login.signout"),icon:"switch-button",click:()=>{k.remove("token"),k.remove("name"),window.location.reload()}}]),handleCommand:t=>{t==null||t.click()}}}}),P=n("div",{style:{padding:"0 12px"}},[n("img",{src:"assets/navigation-avatar.d1925bd8.webp"})],-1),Q={class:"navigation-avatar__dropdown-command"},R=d({name:"NavigationNavBar",components:{Translations:B,NavigationSideAction:H,NavigationAvatar:h(O,[["render",function(a,t,c,v,u,m){const e=i("el-icon"),p=i("el-dropdown-item"),f=i("el-dropdown-menu"),y=i("el-dropdown");return o(),w(y,{class:"navigation-avatar",trigger:"click"},{dropdown:s(()=>[l(f,null,{default:s(()=>[(o(!0),r(b,null,N(a.commandList,(g,C)=>(o(),w(p,{key:C,onClick:X=>a.handleCommand(g)},{default:s(()=>[n("div",Q,[l(e,null,{default:s(()=>[(o(),w(L(g.icon)))]),_:2},1024),n("span",null,A(g.label),1)])]),_:2},1032,["onClick"]))),128))]),_:1})]),default:s(()=>[P]),_:1})}]])},props:{fixed:{type:Boolean,default:!0}}}),U={class:"navbar-header-box"},W=(a=>(V("data-v-31d19f53"),a=a(),$(),a))(()=>n("div",{style:{flex:"1"}},null,-1));var aa=h(R,[["render",function(a,t,c,v,u,m){const e=i("NavigationSideAction"),p=i("NavigationAvatar"),f=i("Translations");return o(),r("div",null,[n("header",{class:I(["navigation-navbar-header-container",{"fixed-header":a.fixed}])},[n("div",U,[M(a.$slots,"default",{},void 0,!0),W,l(e),l(p),l(f,{dark:""})])],2)])}],["__scopeId","data-v-31d19f53"]]);export{aa as N};
