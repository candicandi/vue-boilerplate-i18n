import{h as V,ah as D,d as A,p as q,t as N,o as l,b as p,c as y,w as c,a as K,z as C,D as U,aa as _,y as L,J as E,S as j,X as z,q as F,ai as O,Z as H,_ as M,r as T,e as d,L as f,B as m,O as G,$ as J,G as S,H as P,K as I,M as w,Q,aj as X,ak as Z,a5 as R}from"./index-cc90f92c.js";import{a as W,E as Y,b as x}from"./input-700fe4b3.js";import{l as ee}from"./lodash-464a65d9.js";const te=V({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},icon:{type:D}}),ne={click:e=>e instanceof MouseEvent},oe=["href"],se=A({name:"ElLink"}),ae=A({...se,props:te,emits:ne,setup(e,{emit:s}){const a=e,i=q("link"),k=N(()=>[i.b(),i.m(a.type),i.is("disabled",a.disabled),i.is("underline",a.underline&&!a.disabled)]);function v(n){a.disabled||s("click",n)}return(n,b)=>(l(),p("a",{class:L(C(k)),href:n.disabled||!n.href?void 0:n.href,onClick:v},[n.icon?(l(),y(C(U),{key:0},{default:c(()=>[(l(),y(K(n.icon)))]),_:1})):_("v-if",!0),n.$slots.default?(l(),p("span",{key:1,class:L(C(i).e("inner"))},[E(n.$slots,"default")],2)):_("v-if",!0),n.$slots.icon?E(n.$slots,"icon",{key:2}):_("v-if",!0)],10,oe))}});var le=j(ae,[["__file","/home/runner/work/element-plus/element-plus/packages/components/link/src/link.vue"]]);const re=z(le);const ie=A({name:"UserAccountContainerLayout",props:{title:{type:String,default:"",required:!0},titleIcon:{type:String,default:""},desc:{type:String,default:""},actionList:{type:Array,default(){return[]},required:!0},formData:{type:Object,default(){return{}},required:!0},formConfig:{type:Array,default(){return[]},required:!0}},emits:["on-submit"],setup(){const{proxy:e}=H(),s=F(!1),a=F();function i(){s.value=!s.value}function k(o){const r={},u=o.type==="password";return u?r.type=s.value?"text":"password":r.type="text",{clearable:!u,placeholder:o.placeholder,...r}}function v(o){return{rules:O(o.rules)?o.rules.call(e):"",...ee.omit(o,["rules"])}}function n(o){const r={};return Object.keys(o).forEach(u=>{r[u]=o[u].bind(e.$parent,a.value)}),r}function b(o){o.click.call(e.$parent,a.value)}function h(){e.$emit("on-submit",a.value)}return{showPassword:s,boxForm:a,tooglePassword:i,getInputItemAttrs:k,getFormItemAttrs:v,getActionItemEvent:n,handleClickLink:b,onSubmit:h}}});const ue={class:"user-account-container-layout"},ce={class:"form-title"},de={class:"form-title-icon"},pe={class:"form-title-text"},fe={class:"form-desc-text"},me={class:"form-custom-label"};function ye(e,s,a,i,k,v){const n=J,b=re,h=T("FontAwesomeIcon"),o=Y,r=x,u=R,B=W;return l(),p("div",ue,[d("div",ce,[d("div",de,[e.titleIcon?(l(),y(n,{key:0,icon:e.titleIcon},null,8,["icon"])):_("",!0),E(e.$slots,"titleIcon",{},void 0,!0)]),d("p",pe,f(e.title),1),d("p",fe,f(e.desc),1)]),m(B,{ref:"boxForm",model:e.formData,"label-position":"top","hide-required-asterisk":"",onKeyup:s[1]||(s[1]=G(t=>e.onSubmit(),["enter"]))},{default:c(()=>[(l(!0),p(S,null,P(e.formConfig,(t,g)=>(l(),y(r,X(w({key:g},e.getFormItemAttrs(t.attrs))),{default:c(()=>[d("div",me,[d("p",null,f(t.label),1),t.link?(l(),y(b,{key:0,type:"primary",underline:!1,onClick:$=>e.handleClickLink(t.link)},{default:c(()=>[I(f(t.link.text),1)]),_:2},1032,["onClick"])):_("",!0)]),m(o,w({modelValue:e.formData[t.attrs.prop],"onUpdate:modelValue":$=>e.formData[t.attrs.prop]=$},e.getInputItemAttrs(t)),Q({_:2},[t.prefixIcon?{name:"prefix",fn:c(()=>[m(h,{class:"input-icon-prefix",icon:t.prefixIcon},null,8,["icon"])]),key:"0"}:void 0,t.type==="password"?{name:"suffix",fn:c(()=>[m(h,{class:"input-icon-lock",icon:e.showPassword?"eye":"eye-slash",onClick:s[0]||(s[0]=$=>e.tooglePassword())},null,8,["icon"])]),key:"1"}:void 0]),1040,["modelValue","onUpdate:modelValue"])]),_:2},1040))),128)),(l(!0),p(S,null,P(e.actionList,(t,g)=>(l(),p("div",{key:`${g}-`,class:"submit-form-action-list"},[m(u,w(t.attrs,{class:"submit-form-action-button"},Z(e.getActionItemEvent(t.on)||{})),{default:c(()=>[I(f(t.text),1)]),_:2},1040)]))),128))]),_:1},8,["model"])])}const be=M(ie,[["render",ye],["__scopeId","data-v-242b50f9"]]);export{be as default};
