import{d as s,_ as r,o as c,b as k,h as o,w as a,r as t,e as i,t as N,K as b,c as B}from"./index.1f08b643.js";import{N as S}from"./NavBar.c4280971.js";import"./Translations.c74e5637.js";const w=s({name:"NavigationSideGoBack",props:{title:{type:String,default:""}}}),y={class:"go-back-container"},h={class:"go-back-title"},G=s({name:"LayoutView",components:{NavigationNavBar:S,NavigationSideGoBack:r(w,[["render",function(e,u,d,f,p,g){const n=t("IconFont"),l=t("router-link");return c(),k("div",y,[o(l,{to:`/${e.$route.params.locale||""}`},{default:a(()=>[o(n,{icon:"iconarrow_left",class:"go-back-icon"}),i("h1",h,N(e.title),1)]),_:1},8,["to"])])}],["__scopeId","data-v-684c4b0a"]])},setup:()=>(b(),{})}),L=i("ul",null,[i("li",null,"111"),i("li",null,"222"),i("li",null,"333")],-1),A=r(G,[["render",function(e,u,d,f,p,g){const n=t("NavigationSideGoBack"),l=t("NavigationNavBar"),v=t("LayoutSection"),_=t("router-view"),m=t("LayoutArea");return c(),B(m,null,{top:a(()=>[o(l,{fixed:!1},{default:a(()=>[o(n,{title:e._t("base.goback")},null,8,["title"])]),_:1})]),side:a(()=>[o(v,{"has-divider":"",title:e._t("result.title")},{default:a(()=>[L]),_:1},8,["title"])]),content:a(()=>[o(_)]),_:1})}]]);export{A as default};
