import{d as u,x as i,_ as c,o as f,b as _,F as o,w as t}from"./index-278598f5.js";import{e as V,E as g,f as h}from"./input-550c7436.js";const b=u({name:"ProjectForm",props:{modelValue:{type:Object,default(){return{}}}},setup(e){const l=i();return{refForm:l,validateRules:async()=>new Promise(r=>{l.value.validate(m=>{r(!!m)})})}}});const j={class:"project-form-container"};function w(e,l,p,r,m,F){const s=g,n=h,d=V;return f(),_("div",j,[o(d,{ref:"refForm",model:e.modelValue,"label-position":"right","label-width":"145px"},{default:t(()=>[o(n,{prop:"name",label:e._t("project.name"),rules:e.getRequiredRules({trigger:"change",message:e._t("base.pleaseInput")})},{default:t(()=>[o(s,{modelValue:e.modelValue.name,"onUpdate:modelValue":l[0]||(l[0]=a=>e.modelValue.name=a),maxlength:"30","show-word-limit":"",placeholder:e._t("project.name")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),o(n,{prop:"corpName",label:e._t("project.corpName"),rules:e.getRequiredRules({trigger:"change",message:e._t("base.pleaseInput")})},{default:t(()=>[o(s,{modelValue:e.modelValue.corpName,"onUpdate:modelValue":l[1]||(l[1]=a=>e.modelValue.corpName=a),maxlength:"30","show-word-limit":"",placeholder:e._t("project.corpName")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),o(n,{prop:"notes",label:e._t("project.notes")},{default:t(()=>[o(s,{modelValue:e.modelValue.notes,"onUpdate:modelValue":l[2]||(l[2]=a=>e.modelValue.notes=a),type:"textarea",placeholder:e._t("project.notes"),maxlength:"200",autosize:{minRows:2},"show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model"])])}const N=c(b,[["render",w],["__scopeId","data-v-e41c7062"]]);export{N as default};
