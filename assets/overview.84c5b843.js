import{d as i,i as n,k as d,f as v,r as c,o as l,l as f,m,x as u,G as w}from"./vendor.1c8fcf2d.js";import{a as p,_ as x}from"./index.d699b4b9.js";const D={title:"\u6D4B\u8BD5\u6807\u9898\u603B\u89C8",content:"\u6D4B\u8BD5\u5185\u5BB9 overview"},g=i("Result",{state:()=>({demoList:{},overviewData:{title:"",content:""}}),getters:{demoList:t=>t.demoList},actions:{async getResultOverview({commit:t},a){await p(800);const e={msg:"ok",error:0,data:D};return this.filterResponse(e,({data:s})=>{this.overviewData=s},()=>{})}}}),R=n({name:"ResultOverView",setup(){const t=g(),a=d(),e=v(()=>t.overviewData);return async function(){const{error:s,data:o}=await t.getResultOverview({projectId:a.params.projectId})}(),{overviewData:e}}}),b={style:{height:"100%",flex:"1",border:"1px solid"}};var L=x(R,[["render",function(t,a,e,s,o,h){const r=c("LayoutSection");return l(),f(r,{"flex-content":"",title:t.overviewData.title},{default:m(()=>[u("div",b,w(t.overviewData.content),1)]),_:1},8,["title"])}],["__scopeId","data-v-6022bdaf"]]);export{L as default};
