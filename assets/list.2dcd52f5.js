import{d as g,y as V,i as $,_ as p,r as l,o as m,b as T,h as n,w as r,e as f,t as x,v as E,x as N,l as k,f as v,A as w,B,C as b,c as y,D as F,G as j,H,I}from"./index.c27651d0.js";import{N as M}from"./NavBar.08a3b526.js";import R from"./ProjectForm.dcdb0fbe.js";import U from"./TableHeader.700c50fb.js";import{c as A,P as D,u as O}from"./TableBody.95a86c2a.js";import{l as G}from"./lodash.1d1e12a9.js";import"./Translations.e394062c.js";import"./ProjectItem.46a9e875.js";const K=g({name:"NavigationSideLogo",setup(){const e=V();return{title:$(()=>e.t("base.systemTitle"))}}}),q=""+new URL("i18n.8595eb6e.svg",import.meta.url).href,z={class:"side-logo-container"},J=(e=>(E("data-v-43e184f5"),e=e(),N(),e))(()=>f("img",{class:"side-logo-img",src:q,alt:"\u5546\u6807"},null,-1)),Q={class:"side-logo-title"},W=p(K,[["render",function(e,t,c,o,a,d){const s=l("router-link");return m(),T("div",z,[n(s,{to:`/${e.$route.params.locale||""}`},{default:r(()=>[J,f("h1",Q,x(e.title),1)]),_:1},8,["to"])])}],["__scopeId","data-v-43e184f5"]]),X=g({name:"SearchSelect",components:{Loading:k},props:{modelValue:{type:String,default:""},placeholder:{type:String,default:""},fetch:{type:Function,default:()=>()=>{}}},emits:["update:modelValue","change","select"],setup(e){const{proxy:t}=b(),c=v(!1),o=v("");return w(()=>e.modelValue,a=>{o.value=a},{immediate:!0}),w(()=>o,G.exports.debounce(function(a){t.$emit("update:modelValue",a),t.$emit("change",a)},300)),{loading:c,searchValue:o}},methods:{keydown(e){e.keyCode===229&&(e.returnValue=!1,e.stopPropagation()),e.keyCode===32&&(e.returnValue=!1)},getExecText:e=>e.replace(new RegExp(/(<([^>]+)>)/,"gi"),""),handleSelect({value:e}){this.$emit("select",e)},async handleSearch(e,t){const c=e.toLowerCase().replace(new RegExp(/[-[\]{}()*+?.,\\^$|#\s]/g),"\\$&");let o=[];if(!c)return void t(o);this.loading=!0,o=await this.fetch(c)||[],o.forEach(a=>{a.label=a.label.replace(new RegExp(c,"gi"),d=>`<span class="search-select-highlight">${d}</span>`)}),t(o),setTimeout(()=>{B(()=>{this.loading=!1})},200)}}}),Y=["title","innerHTML"],Z=g({name:"SearchCorporation",components:{SearchSelect:p(X,[["render",function(e,t,c,o,a,d){const s=l("loading"),u=l("el-icon"),h=l("IconFont"),S=l("el-autocomplete");return m(),y(S,j({modelValue:e.searchValue,"onUpdate:modelValue":t[0]||(t[0]=i=>e.searchValue=i),modelModifiers:{trim:!0}},e.$attrs,{class:"search-input-container","popper-class":"search-select-container","trigger-on-focus":!1,"fetch-suggestions":e.handleSearch,placeholder:e.placeholder,onSelect:e.handleSelect,onKeydownCapture:t[1]||(t[1]=i=>e.keydown(i))}),F({default:r(({item:i})=>[f("span",{title:e.getExecText(i.label),innerHTML:i.label},null,8,Y)]),_:2},[e.loading?{name:"suffix",fn:r(()=>[n(u,{class:"search-loading-icon"},{default:r(()=>[n(s)]),_:1})])}:{name:"suffix",fn:r(()=>[f("i",{class:"search-icon"},[n(h,{icon:"iconsearch"})])])}]),1040,["modelValue","fetch-suggestions","placeholder","onSelect"])}]])},emits:["select"],setup:()=>({searchValue:v("")}),methods:{handleFetchSearch:async e=>A.map(t=>({value:t,label:t})),handleSelectSearch(e){this.$emit("select",e)}}}),ie=p(g({name:"ProjectList",components:{NavigationNavBar:M,NavigationSideLogo:W,ProjectTableHeader:U,ProjectTableBody:D,SearchCorporation:p(Z,[["render",function(e,t,c,o,a,d){const s=l("SearchSelect");return m(),y(s,j({modelValue:e.searchValue,"onUpdate:modelValue":t[0]||(t[0]=u=>e.searchValue=u),fetch:e.handleFetchSearch,placeholder:"\u641C\u7D22\u9879\u76EE","select-when-unmatched":"","highlight-first-item":""},e.$attrs,{onSelect:e.handleSelectSearch}),null,16,["modelValue","fetch","onSelect"])}]])},setup(){const{proxy:e}=b(),t=O(),c=V();function o(a){t.getProjectList({kw:a})}return o(),{handleCreateProject:function(){const a=H({name:"",corpName:"",notes:""});e.$ModalDialog({title:c.t("project.create"),top:"10vh",width:"50vw",showClose:!0,closeOnClickModal:!1,closeOnPressEscape:!1,renderComponent:{data:a,component:R},async onConfirm(d,s){if(!await d.validateRules())return Promise.reject(new Error("error"));s.fullLoading=!0;const{error:u,data:h}=await t.createProject(a);if(s.fullLoading=!1,u)return Promise.reject(new Error("error"));t.getProjectList()}})},handleSelectSearch:o}}}),[["render",function(e,t,c,o,a,d){const s=l("NavigationSideLogo"),u=l("NavigationNavBar"),h=l("IconFont"),S=l("el-button"),i=l("LayoutSection"),C=l("SearchCorporation"),L=l("ProjectTableHeader"),P=l("ProjectTableBody"),_=l("LayoutArea");return m(),y(_,null,{top:r(()=>[n(u,{fixed:!1},{default:r(()=>[n(s)]),_:1})]),side:r(()=>[n(i,{title:e._t("project.manageTitle")},{default:r(()=>[n(S,{type:"primary",class:"create-action",onClick:t[0]||(t[0]=ee=>e.handleCreateProject())},{default:r(()=>[n(h,{icon:"iconestablish"}),I(" "+x(e._t("project.create")),1)]),_:1})]),_:1},8,["title"])]),content:r(()=>[n(i,{"has-divider":"","flex-content":""},{head:r(()=>[n(C,{onSelect:e.handleSelectSearch},null,8,["onSelect"])]),default:r(()=>[n(L),n(P)]),_:1})]),_:1})}],["__scopeId","data-v-856d5574"]]);export{ie as default};
