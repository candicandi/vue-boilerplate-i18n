import{d as r,_ as s,r as t,o as c,b as k,h as o,w as a,e as i,t as N,K as b,c as B}from"./index.a810b227.js";import{N as S}from"./NavBar.54cf056f.js";import"./Translations.00b1bc65.js";const w=r({name:"NavigationSideGoBack",props:{title:{type:String,default:""}}}),y={class:"go-back-container"},h={class:"go-back-title"},G=r({name:"LayoutView",components:{NavigationNavBar:S,NavigationSideGoBack:s(w,[["render",function(e,u,d,f,p,v){const n=t("IconFont"),l=t("router-link");return c(),k("div",y,[o(l,{to:`/${e.$route.params.locale||""}`},{default:a(()=>[o(n,{icon:"iconarrow_left",class:"go-back-icon"}),i("h1",h,N(e.title),1)]),_:1},8,["to"])])}],["__scopeId","data-v-f11fc9f6"]])},setup:()=>(b(),{})}),L=i("ul",null,[i("li",null,"111"),i("li",null,"222"),i("li",null,"333")],-1);var A=s(G,[["render",function(e,u,d,f,p,v){const n=t("NavigationSideGoBack"),l=t("NavigationNavBar"),g=t("LayoutSection"),_=t("router-view"),m=t("LayoutArea");return c(),B(m,null,{top:a(()=>[o(l,{fixed:!1},{default:a(()=>[o(n,{title:e._t("base.goback")},null,8,["title"])]),_:1})]),side:a(()=>[o(g,{"has-divider":"",title:e._t("result.title")},{default:a(()=>[L]),_:1},8,["title"])]),content:a(()=>[o(_)]),_:1})}]]);export{A as default};
