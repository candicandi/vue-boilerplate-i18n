import{i as j,a1 as v,L as h,f as x,r as e,o,l as n,m as r,x as t,n as d,G as i,I as p,K as b,A as g,E as w}from"./vendor.4e25e6fc.js";import{_ as y,u as P,a as k}from"./index.43d66492.js";const I=j({name:"ProjectItem",components:{Loading:v},props:{dataset:{type:Object,default:()=>({})}},setup(a){P();const s=h(!1),l=x(()=>a.dataset.isPublished?"iconstop":"iconplay");return{isLoading:s,getActionIcon:l,handlePublish:async function(m){s.value||(s.value=!0,await k(300),s.value=!1,w.success({message:"Successful!"}),a.dataset.isPublished=!a.dataset.isPublished)}}}}),L={class:"project-item-container"},C={style:{flex:"1","min-width":"0"}},$={class:"project-item__name"},A={class:"project-item__name-left"},T={class:"project-item__name-desc"},E={class:"project-item__name-desc__corpname"},F={class:"project-item__name-desc__corpname-maintext text_nowrap"},G={class:"project-item__name-desc__fullname text_nowrap"},K={style:{width:"18.5%",flex:"initial"},class:"text_nowrap"},N={class:"project-item-action__icon"},O={class:"project-item-action__status"};var H=y(I,[["render",function(a,s,l,m,S,q){const c=e("IconFont"),_=e("TooltipCustom"),u=e("Loading"),f=e("router-link");return o(),n(f,{to:`${a.$route.params.locale?"/"+a.$route.params.locale+"/":"/"}result/${a.dataset.id}/overview`},{default:r(()=>[t("ul",L,[t("li",C,[t("div",$,[t("div",A,[d(c,{icon:"iconfile"})]),t("div",T,[t("div",E,[t("span",F,i(a.dataset.corpName),1),t("span",{onClick:s[0]||(s[0]=p(()=>{},["prevent"]))},[a.dataset.notes?(o(),n(_,{key:0,content:a.dataset.notes},{default:r(()=>[d(c,{icon:"iconhelp",class:"corpname-notes"})]),_:1},8,["content"])):b("",!0)])]),t("p",G,i(a.dataset.name),1)])])]),t("li",K,i(a.dataset.createTime),1),t("li",{class:g(["project-item-action text_nowrap",{active:a.dataset.isPublished,loading:a.isLoading}]),onClick:s[1]||(s[1]=p(z=>a.handlePublish(a.dataset.id),["prevent"]))},[t("span",N,[a.isLoading?(o(),n(u,{key:1,class:"transform-rotate360"})):(o(),n(c,{key:0,icon:a.getActionIcon},null,8,["icon"]))]),t("span",O,i(a.dataset.isPublished?a._t("project.stop"):a._t("project.publish")),1)],2)])]),_:1},8,["to"])}],["__scopeId","data-v-29ccf1f2"]]);export{H as default};
