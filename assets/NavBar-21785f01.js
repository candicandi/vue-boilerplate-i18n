import{T as A}from"./Translations-75fbae6b.js";import{d as m,a0 as w,t as b,Z as S,_ as f,o as t,b as d,e as a,G as y,H as N,L as k,b9 as B,af as D,ac as L,ag as $,c as u,w as c,ba as E,B as r,a as I,D as T,bb as R,bc as j,r as v,J as V,y as z,a1 as F,a2 as G}from"./index-cc90f92c.js";const H=m({name:"NavigationSideAction",emits:["click"],setup(){const{proxy:n}=S(),s=w();function i(){n.$emit("click")}return{title:b(()=>s.t("base.systemTitle")),handleClick:i}}});const J={class:"side-action-container"},M={class:"action-list"};function U(n,s,i,o,g,h){return t(),d("div",J,[a("ul",M,[(t(),d(y,null,N(3,e=>a("li",{key:e,class:"action-item"}," Action "+k(e),1)),64))])])}const Z=f(H,[["render",U],["__scopeId","data-v-9309dda5"]]),q=m({name:"NavigationAvatar",components:{SwitchButton:B},setup(){D(),L();const n=w();return{commandList:b(()=>[{label:n.t("login.signout"),icon:"switch-button",click:()=>{$.remove("token"),$.remove("name"),window.location.reload()}}]),handleCommand:o=>{o==null||o.click()}}}}),K=""+new URL("navigation-avatar-d1925bd8.webp",import.meta.url).href;const O=a("div",{style:{outline:"none",padding:"0 12px"}},[a("img",{src:K})],-1),P={class:"navigation-avatar__dropdown-command"};function Q(n,s,i,o,g,h){const e=T,l=R,_=j,x=E;return t(),u(x,{class:"navigation-avatar",trigger:"hover"},{dropdown:c(()=>[r(_,null,{default:c(()=>[(t(!0),d(y,null,N(n.commandList,(p,C)=>(t(),u(l,{key:C,onClick:tn=>n.handleCommand(p)},{default:c(()=>[a("div",P,[r(e,null,{default:c(()=>[(t(),u(I(p.icon)))]),_:2},1024),a("span",null,k(p.label),1)])]),_:2},1032,["onClick"]))),128))]),_:1})]),default:c(()=>[O]),_:1})}const W=f(q,[["render",Q]]),X=m({name:"NavigationNavBar",components:{Translations:A,NavigationSideAction:Z,NavigationAvatar:W},props:{fixed:{type:Boolean,default:!0}}});const Y=n=>(F("data-v-6f983a1d"),n=n(),G(),n),nn={class:"navbar-header-box"},an=Y(()=>a("div",{style:{flex:"1"}},null,-1));function on(n,s,i,o,g,h){const e=v("NavigationSideAction"),l=v("NavigationAvatar"),_=v("Translations");return t(),d("div",null,[a("header",{class:z(["navigation-navbar-header-container",{"fixed-header":n.fixed}])},[a("div",nn,[V(n.$slots,"default",{},void 0,!0),an,r(e),r(l),r(_,{dark:""})])],2)])}const cn=f(X,[["render",on],["__scopeId","data-v-6f983a1d"]]);export{cn as N};
