import{T as S}from"./Translations.605acde4.js";import{i as u,Y as b,f as h,o as i,v as d,x as n,H as x,C as N,G as A,a3 as T,a4 as B,k as I,b as w,r as o,l as m,m as s,n as l,p as L,J as $,A as G,M as H,O as j}from"./vendor.02ca542b.js";import{u as J,_ as p}from"./index.b85b7596.js";const M=u({name:"NavigationSideAction",emits:["click"],setup(){const{proxy:a}=J(),t=b();return{title:h(()=>t.t("base.systemTitle")),handleClick:function(){a.$emit("click")}}}}),O={class:"side-action-container"},Y={class:"action-list"};var q=p(M,[["render",function(a,t,f,g,k,_){return i(),d("div",O,[n("ul",Y,[(i(),d(x,null,N(3,e=>n("li",{key:e,class:"action-item"}," Action "+A(e),1)),64))])])}],["__scopeId","data-v-86e728c6"]]);const z=u({name:"NavigationAvatar",components:{SwitchButton:T},setup(){B(),I();const a=b();return{commandList:h(()=>[{label:a.t("login.signout"),icon:"switch-button",click:()=>{w.remove("token"),w.remove("name"),window.location.reload()}}]),handleCommand:t=>{t==null||t.click()}}}}),D=n("div",{style:{padding:"0 12px"}},[n("img",{src:"assets/navigation-avatar.d1925bd8.webp"})],-1),E={class:"navigation-avatar__dropdown-command"},F=u({name:"NavigationNavBar",components:{Translations:S,NavigationSideAction:q,NavigationAvatar:p(z,[["render",function(a,t,f,g,k,_){const e=o("el-icon"),c=o("el-dropdown-item"),r=o("el-dropdown-menu"),y=o("el-dropdown");return i(),m(y,{class:"navigation-avatar",trigger:"click"},{dropdown:s(()=>[l(r,null,{default:s(()=>[(i(!0),d(x,null,N(a.commandList,(v,C)=>(i(),m(c,{key:C,onClick:Q=>a.handleCommand(v)},{default:s(()=>[n("div",E,[l(e,null,{default:s(()=>[(i(),m(L(v.icon)))]),_:2},1024),n("span",null,A(v.label),1)])]),_:2},1032,["onClick"]))),128))]),_:1})]),default:s(()=>[D]),_:1})}]])},props:{fixed:{type:Boolean,default:!0}}}),K={class:"navbar-header-box"},P=(a=>(H("data-v-31d19f53"),a=a(),j(),a))(()=>n("div",{style:{flex:"1"}},null,-1));var W=p(F,[["render",function(a,t,f,g,k,_){const e=o("NavigationSideAction"),c=o("NavigationAvatar"),r=o("Translations");return i(),d("div",null,[n("header",{class:G(["navigation-navbar-header-container",{"fixed-header":a.fixed}])},[n("div",K,[$(a.$slots,"default",{},void 0,!0),P,l(e),l(c),l(r,{dark:""})])],2)])}],["__scopeId","data-v-31d19f53"]]);export{W as N};
