import{bl as n,bj as c,bd as v}from"./index-a07fc1d4.js";import{x as p,e as d,ai as u,y as l,H as _,I as m,a7 as f,A as w,O as y}from"./_plugin-vue_export-helper-7e675be8.js";import"./runtime-dom.esm-bundler-31a74585.js";import"./type-19eb5797.js";import"./vue-i18n.cjs-4f7698a4.js";import"./_commonjsHelpers-87174ba5.js";import"./index-e6d5c965.js";const g={title:"测试标题总览",content:"测试内容 overview"},h=n("Result",{state:()=>({demoList:{},overviewData:{title:"",content:""}}),getters:{},actions:{async getResultOverview({commit:e},r){await c(800);const t={msg:"ok",error:0,data:g};return this.filterResponse(t,({data:o})=>{this.overviewData=o},()=>{})}}}),x=p({name:"ResultOverView",setup(){const e=h(),r=v(),t=d(()=>e.overviewData);async function o(){const{error:s,data:a}=await e.getResultOverview({projectId:r.params.projectId})}return o(),{overviewData:t}}});const D={style:{height:"100%",flex:"1",border:"1px solid"}};function R(e,r,t,o,s,a){const i=f("LayoutSection");return l(),_(i,{"flex-content":"",title:e.overviewData.title},{default:m(()=>[w("div",D,y(e.overviewData.content),1)]),_:1},8,["title"])}const B=u(x,[["render",R],["__scopeId","data-v-4fd2d865"]]);export{B as default};
