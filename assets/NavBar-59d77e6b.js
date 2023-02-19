import{T as A}from"./Translations-678c0437.js";import{d as m,u as w,f as N,m as S,_ as f,o as t,b as l,e as o,F as k,C as y,t as b,V as B,O as L,J as T,N as $,c as v,w as r,r as a,h as d,a as I,Q as R,H as V,p as j,i as D}from"./index-20b7a676.js";const F=m({name:"NavigationSideAction",emits:["click"],setup(){const{proxy:n}=S(),i=w();function c(){n.$emit("click")}return{title:N(()=>i.t("base.systemTitle")),handleClick:c}}});const z={class:"side-action-container"},E={class:"action-list"};function H(n,i,c,e,g,h){return t(),l("div",z,[o("ul",E,[(t(),l(k,null,y(3,s=>o("li",{key:s,class:"action-item"}," Action "+b(s),1)),64))])])}const J=f(F,[["render",H],["__scopeId","data-v-97ff2a97"]]),O=m({name:"NavigationAvatar",components:{SwitchButton:B},setup(){L(),T();const n=w();return{commandList:N(()=>[{label:n.t("login.signout"),icon:"switch-button",click:()=>{$.remove("token"),$.remove("name"),window.location.reload()}}]),handleCommand:e=>{e==null||e.click()}}}}),Q=""+new URL("navigation-avatar-d1925bd8.webp",import.meta.url).href;const U=o("div",{style:{padding:"0 12px"}},[o("img",{src:Q})],-1),q={class:"navigation-avatar__dropdown-command"};function G(n,i,c,e,g,h){const s=a("el-icon"),_=a("el-dropdown-item"),p=a("el-dropdown-menu"),C=a("el-dropdown");return t(),v(C,{class:"navigation-avatar",trigger:"click"},{dropdown:r(()=>[d(p,null,{default:r(()=>[(t(!0),l(k,null,y(n.commandList,(u,x)=>(t(),v(_,{key:x,onClick:Z=>n.handleCommand(u)},{default:r(()=>[o("div",q,[d(s,null,{default:r(()=>[(t(),v(I(u.icon)))]),_:2},1024),o("span",null,b(u.label),1)])]),_:2},1032,["onClick"]))),128))]),_:1})]),default:r(()=>[U]),_:1})}const K=f(O,[["render",G]]),M=m({name:"NavigationNavBar",components:{Translations:A,NavigationSideAction:J,NavigationAvatar:K},props:{fixed:{type:Boolean,default:!0}}});const P=n=>(j("data-v-3730fb23"),n=n(),D(),n),W={class:"navbar-header-box"},X=P(()=>o("div",{style:{flex:"1"}},null,-1));function Y(n,i,c,e,g,h){const s=a("NavigationSideAction"),_=a("NavigationAvatar"),p=a("Translations");return t(),l("div",null,[o("header",{class:V(["navigation-navbar-header-container",{"fixed-header":n.fixed}])},[o("div",W,[R(n.$slots,"default",{},void 0,!0),X,d(s),d(_),d(p,{dark:""})])],2)])}const en=f(M,[["render",Y],["__scopeId","data-v-3730fb23"]]);export{en as N};
