import{d,i as u,f as h,r as j,o as s,v as o,x as r,H as g,C as y,G as b,K as f,M as N,O as P,l as L}from"./vendor.02ca542b.js";import{b as c,a as i,_ as k}from"./index.b85b7596.js";import w from"./ProjectItem.70491530.js";const M={id:Math.random(),name:"\u6D4B\u8BD5\u9879\u76EE",corpName:"\u6D4B\u8BD5\u516C\u53F8",notes:"\u5907\u6CE8",isPublished:!1,createTime:"2021.01.29"},v=[{id:"111",name:"\u6D4B\u8BD5\u9879\u76EE",corpName:"\u6D4B\u8BD5\u516C\u53F8",notes:"\u5907\u6CE8\u5907\u6CE8",isPublished:!1,createTime:"2021.01.29"},{id:"222",name:"\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE\u6D4B\u8BD5\u9879\u76EE",corpName:"\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8\u6D4B\u8BD5\u516C\u53F8",notes:"\u5907\u6CE8\u5907\u6CE8",isPublished:!0,createTime:"2021.03.29"},{id:"333",name:"\u6D4B\u8BD5\u9879\u76EE",corpName:"\u6D4B\u8BD5\u516C\u53F8",notes:"",isPublished:!1,createTime:"2021.02.29"}],J=["Alabama","Alaska","Arizona","\u6D4B\u8BD5","\u6D4B\u8BD51","\u6D4B\u8BD52","\u6D4B\u8BD53","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],T=d("Project",{state:()=>({demoList:{},projectList:[],projectDetail:{corpName:"",createTime:"",id:"",isPublished:!0,name:"",notes:""}}),getters:{demoList:e=>e.demoList},actions:{async getSearchProjectByQuery(e){await i(2e3);const a=await(t=e,c({url:"/project/list",method:"get",params:t}));var t;return this.filterResponse(a,null,()=>{})},async getProjectList(e={}){await i(2e3);const a={msg:"ok",error:0,data:{projectList:v}};return this.filterResponse(a,()=>{this.projectList=a.data.projectList},()=>{})},async createProject(e){return await i(1e3),this.filterResponse({msg:"ok",error:0,data:{}},()=>{this.projectList.push(JSON.parse(JSON.stringify(M)))})},async updateTogglePublishStatus({commit:e},a){const t=await function(n){return c({url:"/project/toggle_status",method:"get",params:n})}(a);return this.filterResponse(t,null)}}}),_=u({name:"ProjectTableBody",components:{ProjectItem:w},setup(){const e=T();return{projectList:h(()=>e.projectList)}}}),I={class:"project-table-body-container"},S={class:"project-table-body-container__inner"},O={key:0,class:"project-empty-box"},C=(e=>(N("data-v-15e161d0"),e=e(),P(),e))(()=>r("img",{src:"assets/project-empty.ef06cc83.svg",alt:"Empty"},null,-1));var x=k(_,[["render",function(e,a,t,n,R,A){const l=j("ProjectItem");return s(),o("div",I,[r("div",S,[(s(!0),o(g,null,y(e.projectList,(m,p)=>(s(),L(l,{key:p,dataset:m},null,8,["dataset"]))),128)),e.projectList.length?f("",!0):(s(),o("div",O,[C,r("span",null,b(e._t("base.empty")),1)]))])])}],["__scopeId","data-v-15e161d0"]]),K=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:x});export{x as P,K as T,J as c,T as u};
