import{i as c,Y as d,f as i,o as a,v as r,H as o,C as l,V as m,G as p}from"./vendor.1c8fcf2d.js";import{_ as f}from"./index.d699b4b9.js";const u=c({name:"ProjectTableHeader",setup(){const e=d();return{list:i(()=>[{name:e.t("project.name")},{name:e.t("project.createDate"),width:"18%"},{name:e.t("project.state"),width:"19%"}]),getHeadItem:function(t){return{width:t.width,flex:t.width?"initial":1}}}}}),h={class:"project-table-header-container"};var x=f(u,[["render",function(e,t,j,b,w,_){return a(),r("ul",h,[(a(!0),r(o,null,l(e.list,(s,n)=>(a(),r("li",{key:n,style:m(e.getHeadItem(s)),class:"project-table-header-container__head-item"},p(s.name),5))),128))])}],["__scopeId","data-v-ae7c48c0"]]);export{x as default};
