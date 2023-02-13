import{T as C}from"./Translations-e695a008.js";import{u as b}from"./vue-i18n.cjs-4f7698a4.js";import{u as S}from"./useCurrentInstance-178fc0aa.js";import{x as v,e as w,ai as f,y as e,z as d,A as o,F as k,a0 as y,O as N,H as m,I as r,a7 as a,P as l,K as B,B as L,D as T,ak as I,al as D}from"./_plugin-vue_export-helper-7e675be8.js";import{bm as R,bn as j,bd as z,bo as $}from"./index-a07fc1d4.js";const F=v({name:"NavigationSideAction",emits:["click"],setup(){const{proxy:n}=S(),i=b();function c(){n.$emit("click")}return{title:w(()=>i.t("base.systemTitle")),handleClick:c}}});const V={class:"side-action-container"},E={class:"action-list"};function H(n,i,c,t,g,h){return e(),d("div",V,[o("ul",E,[(e(),d(k,null,y(3,s=>o("li",{key:s,class:"action-item"}," Action "+N(s),1)),64))])])}const K=f(F,[["render",H],["__scopeId","data-v-97ff2a97"]]),O=v({name:"NavigationAvatar",components:{SwitchButton:R},setup(){j(),z();const n=b();return{commandList:w(()=>[{label:n.t("login.signout"),icon:"switch-button",click:()=>{$.remove("token"),$.remove("name"),window.location.reload()}}]),handleCommand:t=>{t==null||t.click()}}}}),P=""+new URL("navigation-avatar-d1925bd8.webp",import.meta.url).href;const U=o("div",{style:{padding:"0 12px"}},[o("img",{src:P})],-1),q={class:"navigation-avatar__dropdown-command"};function G(n,i,c,t,g,h){const s=a("el-icon"),_=a("el-dropdown-item"),p=a("el-dropdown-menu"),x=a("el-dropdown");return e(),m(x,{class:"navigation-avatar",trigger:"click"},{dropdown:r(()=>[l(p,null,{default:r(()=>[(e(!0),d(k,null,y(n.commandList,(u,A)=>(e(),m(_,{key:A,onClick:Z=>n.handleCommand(u)},{default:r(()=>[o("div",q,[l(s,null,{default:r(()=>[(e(),m(B(u.icon)))]),_:2},1024),o("span",null,N(u.label),1)])]),_:2},1032,["onClick"]))),128))]),_:1})]),default:r(()=>[U]),_:1})}const J=f(O,[["render",G]]),M=v({name:"NavigationNavBar",components:{Translations:C,NavigationSideAction:K,NavigationAvatar:J},props:{fixed:{type:Boolean,default:!0}}});const Q=n=>(I("data-v-3730fb23"),n=n(),D(),n),W={class:"navbar-header-box"},X=Q(()=>o("div",{style:{flex:"1"}},null,-1));function Y(n,i,c,t,g,h){const s=a("NavigationSideAction"),_=a("NavigationAvatar"),p=a("Translations");return e(),d("div",null,[o("header",{class:T(["navigation-navbar-header-container",{"fixed-header":n.fixed}])},[o("div",W,[L(n.$slots,"default",{},void 0,!0),X,l(s),l(_),l(p,{dark:""})])],2)])}const sn=f(M,[["render",Y],["__scopeId","data-v-3730fb23"]]);export{sn as N};
