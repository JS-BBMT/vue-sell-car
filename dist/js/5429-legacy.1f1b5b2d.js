"use strict";(self["webpackChunkflutter_buy_sell"]=self["webpackChunkflutter_buy_sell"]||[]).push([[5429],{3013:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(6252),l=a(3577),o=["type","disabled"];function r(e,t,a,r,i,d){return(0,n.wg)(),(0,n.iD)("button",{type:a.type,disabled:a.disabled,class:(0,l.C_)(["items-center theme px-4 py-2 font-medium capitalize tracking-widest active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150",[a.disabled?"bg-primary-500 dark:bg-primaryDark-accent text-secondary-000 dark:text-secondaryDark-grey":a.theme,a.rounded,a.textSize]])},[(0,n.WI)(e.$slots,"default",{class:""})],10,o)}var i={name:"PsButton",props:{type:{type:String,default:"submit"},theme:{type:String,default:"bg-primary-500 dark:bg-primaryDark-accent text-textLight dark:text-textDark"},rounded:{type:String,default:"rounded-x sm:rounded-xl lg:rounded-2xl"},disabled:{type:Boolean,default:!1},textSize:{type:String,default:"lg:text-sm sm:text-xs text-xxs"}}},d=a(8118);const u=(0,d.Z)(i,[["render",r]]);var s=u},5429:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(6252),l=a(3577),o={class:"flex justify-end"},r=(0,n.Uk)(" Ok ");function i(e,t,a,i,d,u){var s=(0,n.up)("ps-label-title"),c=(0,n.up)("ps-label"),p=(0,n.up)("ps-button"),m=(0,n.up)("ps-modal");return(0,n.wg)(),(0,n.j4)(m,{ref:"psmodal",maxWidth:"350px",isClickOut:!1},{title:(0,n.w5)((function(){return[(0,n.Wm)(s,null,{default:(0,n.w5)((function(){return[(0,n.Uk)((0,l.zw)(e.title),1)]})),_:1})]})),body:(0,n.w5)((function(){return[(0,n.Wm)(c,null,{default:(0,n.w5)((function(){return[(0,n.Uk)((0,l.zw)(e.message),1)]})),_:1})]})),footer:(0,n.w5)((function(){return[(0,n._)("div",o,[(0,n.Wm)(p,{onClick:t[0]||(t[0]=function(t){return e.psmodal.toggle(!1)})},{default:(0,n.w5)((function(){return[r]})),_:1})])]})),_:1},512)}var d=a(2262),u=a(2379),s=a(1340),c=a(4687),p=a(3013),m=a(679),f=(0,n.aZ)({name:"PsErrorDialog",components:{PsModal:u.Z,PsLabel:c.Z,PsLabelTitle:s.Z,PsButton:p.Z},setup:function(){var e=(0,d.iH)(),t=(0,d.iH)(m.a.global.t("ps_error_dialog__error")),a=(0,d.iH)(m.a.global.t("ps_error_dialog__error_message"));function n(n,l){null!=n&&""!=n.trim()&&(t.value=n),null!=l&&""!=l.trim()&&(a.value=l),e.value.toggle(!0)}function l(){e.value.toggle(!1)}return{psmodal:e,openModal:n,closeModal:l,title:t,message:a}}}),g=a(8118);const v=(0,g.Z)(f,[["render",i]]);var y=v},1340:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(6252);function l(e,t,a,l,o,r){var i=(0,n.up)("ps-label");return(0,n.wg)(),(0,n.j4)(i,{class:"lg:text-xl sm:text-lg text-base font-medium",textColor:e.textColor},{default:(0,n.w5)((function(){return[(0,n.WI)(e.$slots,"default")]})),_:3},8,["textColor"])}var o=a(4687),r=(0,n.aZ)({name:"PsLabelTitle",components:{PsLabel:o.Z},props:{textColor:{type:String,default:"text-secondary-500 dark:text-secondaryDark-white"}}}),i=a(8118);const d=(0,i.Z)(r,[["render",l]]);var u=d},2379:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(6252),l=a(3577);function o(e,t,a,o,r,i){var d=(0,n.up)("ps-line"),u=(0,n.up)("Modal");return(0,n.wg)(),(0,n.j4)(u,{modelValue:o.isOpen,"onUpdate:modelValue":t[0]||(t[0]=function(e){return o.isOpen=e}),fullscreen:a.isFullscreen,"modal-transition":a.modalTransition,"click-out":a.isClickOut,"disable-motion":a.isMotionDisabled,teleportTarget:"#app","max-width":a.isFullscreen?void 0:a.maxWidth,"remove-backdrop":a.isBackdropRemoved},{default:(0,n.w5)((function(){return[(0,n._)("div",{class:(0,l.C_)([a.theme,"overflow-y-auto max-h-auto bg-background dark:bg-backgroundDark"])},[(0,n.WI)(e.$slots,"title",{},void 0,!0),(0,n.Wm)(d,{class:(0,l.C_)(["mb-4",a.line])},null,8,["class"]),(0,n._)("div",{class:(0,l.C_)(["mb-4 overflow-y-auto",a.bodyHeight])},[(0,n.WI)(e.$slots,"body",{},void 0,!0)],2),(0,n.WI)(e.$slots,"footer",{},void 0,!0)],2)]})),_:3},8,["modelValue","fullscreen","modal-transition","click-out","disable-motion","max-width","remove-backdrop"])}var r=a(532),i=a(2262),d=a(3251),u={name:"PsModal",components:{Modal:r.u,PsLine:d.Z},props:{maxWidth:{type:String,default:"500px"},bodyHeight:{type:String,default:"max-h-80"},isBackdropRemoved:{type:Boolean,default:!1},isMotionDisabled:{type:Boolean,default:!1},isClickOut:{type:Boolean,default:!0},modalTransition:{type:String,default:"scale"},isFullscreen:{type:Boolean,default:!1},theme:{type:String,default:" p-6 border lg:rounded-2xl rounded-xl  "},line:{type:String,default:"mt-4 "}},setup:function(){var e=(0,i.iH)(!1);function t(t){e.value=t}return{isOpen:e,toggle:t}}},s=a(8118);const c=(0,s.Z)(u,[["render",o],["__scopeId","data-v-1dcc699c"]]);var p=c},532:function(e,t,a){a.d(t,{u:function(){return s}});var n=a(6252),l=a(2262),o=a(9963);const r=()=>window.innerWidth-document.body.clientWidth,i={alignX:"center",alignY:"center",noSpacing:!1,clickOut:!0,eager:!1,teleportTarget:"#app",backdropTransition:void 0,modalTransition:"scale",disableMotion:!1,removeBackdrop:!1,width:"auto",maxWidth:"none",fullscreen:!1},d=e=>i[e],u="vue-neat-modal";var s=(0,n.aZ)({inheritAttrs:!1,emits:["after-enter","after-leave","update:modelValue"],props:{modelValue:{type:Boolean,default:void 0},alignX:{type:String,validator:e=>["left","center","right"].includes(e),default:()=>d("alignX")},alignY:{type:String,validator:e=>["top","center","bottom"].includes(e),default:()=>d("alignY")},noSpacing:{type:Boolean,default:()=>d("noSpacing")},eager:{type:Boolean,default:()=>d("eager")},clickOut:{type:Boolean,default:()=>d("clickOut")},teleportTarget:{type:[String,HTMLElement],default:()=>d("teleportTarget")},backdropTransition:{type:String,default:()=>d("backdropTransition")},modalTransition:{type:String,default:()=>d("modalTransition")},disableMotion:{type:Boolean,default:()=>d("disableMotion")},removeBackdrop:{type:Boolean,default:()=>d("removeBackdrop")},width:{type:String,default:()=>d("width")},maxWidth:{type:String,default:()=>d("maxWidth")},fullscreen:{type:Boolean,default:()=>d("fullscreen")},wrapperClass:String,modalClass:String,backdropClass:String},setup(e,{slots:t,emit:a}){const i=(0,l.iH)(!1),d=(0,l.iH)(e.eager),s=(0,l.Fl)((()=>e.modelValue||i.value)),c=t=>{void 0===e.modelValue?i.value=t:a("update:modelValue",t)},p=(0,l.Fl)((()=>({width:e.width,maxWidth:e.maxWidth}))),m=(0,l.Fl)((()=>[u,e.fullscreen&&`${u}--fullscreen`,e.noSpacing&&`${u}--no-spacing`,e.modalClass])),f=`${u}-wrapper`,g=(0,l.Fl)((()=>[f,`${f}--x-${e.alignX}`,`${f}--y-${e.alignY}`,e.wrapperClass])),v=(0,l.Fl)((()=>[`${u}-backdrop`,s.value&&`${u}-backdrop--active`,e.backdropClass])),y=()=>{document.body.classList.add(`${u}-open`),document.body.style.paddingRight=`${r()}px`},b=()=>{document.body.classList.remove(`${u}-open`),document.body.style.paddingRight=""};(0,n.YP)([()=>e.modelValue,i],((e,t)=>{d.value||!e&&!t||(d.value=!0)})),(0,n.YP)(s,(e=>{(0,n.Y3)((()=>{e&&y()}))}));const k=()=>{e.clickOut&&c(!1)},x=e=>{if(!s.value)return;const t=e.target;t.closest(`.${u}`)||k()};(0,n.YP)(s,(e=>{setTimeout((()=>{e?document.addEventListener("click",x):document.removeEventListener("click",x)}),0)})),(0,n.Ah)((()=>{document.removeEventListener("click",x),b()}));const h=()=>{b(),a("after-leave")},w=()=>{if(e.removeBackdrop)return null;const t=(0,n.wy)((0,n.Wm)("div",{class:v.value},null),[[o.F8,s.value]]);return e.disableMotion?t:(0,n.Wm)(o.uT,{appear:!0,name:e.backdropTransition,onAfterLeave:h},{default:()=>[t]})},_={close:()=>c(!1)},S=()=>{const l=(0,n.wy)((0,n.Wm)("div",{class:m.value,style:p.value},[t.default(_)]),[[o.F8,s.value]]);return e.disableMotion?l:(0,n.Wm)(o.uT,{appear:!0,name:e.modalTransition,onAfterEnter:()=>a("after-enter")},{default:()=>[l]})},W=()=>(0,n.Wm)("div",{class:g.value},[S()]),C=()=>d.value?(0,n.Wm)(n.lR,{to:e.teleportTarget},{default:()=>[w(),W()]}):null;if(t.activator){const e={onClick:()=>c(!s.value)};return()=>(0,n.Wm)(n.HY,null,[t.activator(e),C()])}return C}})}}]);
//# sourceMappingURL=5429-legacy.1f1b5b2d.js.map