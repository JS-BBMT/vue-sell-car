"use strict";(self["webpackChunkflutter_buy_sell"]=self["webpackChunkflutter_buy_sell"]||[]).push([[2709],{730:function(e,t,l){l.d(t,{Z:function(){return f}});var n=l(6252),o=l(3577),r=["data-ad-client","data-ad-format","data-ad-slot"];function a(e,t,l,a,i,s){return(0,n.wg)(),(0,n.iD)("ins",{class:"adsbygoogle mt-2 example_responsive_1",style:(0,o.j5)(l.adStyle),"data-ad-client":a.adsClient,"data-ad-format":l.adFormat,"data-ad-slot":a.adsSlot},null,12,r)}var i=l(655),s=l(2262),d=l(9399),u=l(4403),c=l(9788),g={name:"PsAdSense",props:{adStyle:{type:String,required:!1,default:"display:inline-block; width: 200px; height: 200px"},adFormat:{type:String,required:!1,default:"auto"}},setup:function(){var e=d.$.psValueHolder,t=e.getLoginUserId(),l=(0,u.ky)(),o=new c.Z;o.userId=t;var r=(0,s.iH)(""),a=(0,s.iH)("");function g(){return(0,i.mG)(this,void 0,void 0,(function(){return(0,i.Jh)(this,(function(e){switch(e.label){case 0:return[4,l.loadDeleteHistory(o)];case 1:return e.sent(),r.value=l.appInfo.data.frontendConfigSetting.adClient,a.value=l.appInfo.data.frontendConfigSetting.adSlot,console.log("Adsense"),console.log(a.value),console.log(r.value),[2]}}))}))}return(0,n.bv)((function(){g();var e=document.createElement("script");e.type="text/javascript",e.text="(adsbygoogle = window.adsbygoogle || []).push({});",document.getElementsByTagName("body")[0].appendChild(e)})),{adsClient:r,adsSlot:a}}},m=l(8118);const p=(0,m.Z)(g,[["render",a]]);var f=p},3013:function(e,t,l){l.d(t,{Z:function(){return u}});var n=l(6252),o=l(3577),r=["type","disabled"];function a(e,t,l,a,i,s){return(0,n.wg)(),(0,n.iD)("button",{type:l.type,disabled:l.disabled,class:(0,o.C_)(["items-center theme px-4 py-2 font-medium capitalize tracking-widest active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150",[l.disabled?"bg-primary-500 dark:bg-primaryDark-accent text-secondary-000 dark:text-secondaryDark-grey":l.theme,l.rounded,l.textSize]])},[(0,n.WI)(e.$slots,"default",{class:""})],10,r)}var i={name:"PsButton",props:{type:{type:String,default:"submit"},theme:{type:String,default:"bg-primary-500 dark:bg-primaryDark-accent text-textLight dark:text-textDark"},rounded:{type:String,default:"rounded-x sm:rounded-xl lg:rounded-2xl"},disabled:{type:Boolean,default:!1},textSize:{type:String,default:"lg:text-sm sm:text-xs text-xxs"}}},s=l(8118);const d=(0,s.Z)(i,[["render",a]]);var u=d},8960:function(e,t,l){l.d(t,{Z:function(){return d}});var n=l(6252);function o(e,t,l,o,r,a){var i=(0,n.up)("ps-label");return(0,n.wg)(),(0,n.j4)(i,{class:"lg:text-3xl sm:text-2xl text-xl font-medium",textColor:e.textColor},{default:(0,n.w5)((function(){return[(0,n.WI)(e.$slots,"default")]})),_:3},8,["textColor"])}var r=l(4687),a=(0,n.aZ)({name:"PsLabelHeader4",components:{PsLabel:r.Z},props:{textColor:{type:String,default:"text-secondary-500 dark:text-secondaryDark-white"}}}),i=l(8118);const s=(0,i.Z)(a,[["render",o]]);var d=s},8653:function(e,t,l){l.d(t,{Z:function(){return u}});var n=l(6252),o={class:"w-mobile sm:w-median lg:w-large mx-auto"};function r(e,t,l,r,a,i){return(0,n.wg)(),(0,n.iD)("div",o,[(0,n.WI)(e.$slots,"content")])}var a=l(8345),i={name:"PsContentContainer",setup:function(){var e=(0,a.yj)();return{route:e}}},s=l(8118);const d=(0,s.Z)(i,[["render",r]]);var u=d},1071:function(e,t,l){l.d(t,{Z:function(){return m}});var n=l(6252),o={key:0,class:"mt-2 px-0.5 lg:px-1"},r={class:"mt-2 lg:text-sm text-xs"};function a(e,t,l,a,i,s){var d=(0,n.up)("ps-label"),u=(0,n.Q2)("lazy");return(0,n.wg)(),(0,n.iD)("div",{class:"rounded-xl lg:rounded-2xl cursor-pointer lg:p-2 lg:pb-4 p-1 pb-2 bg-primary-000 dark:bg-primaryDark-black w-full h-full",onClick:t[2]||(t[2]=function(e){return null!=l.onClick?l.onClick(l.blog):null})},[(0,n.wy)((0,n._)("img",{alt:"Placeholder",class:"rounded-lg block lg:hidden w-full lg:h-32 h-20 object-cover",width:"360px",height:"100px",onError:t[0]||(t[0]=function(){for(var e,t=[],l=0;l<arguments.length;l++)t[l]=arguments[l];return a.blogProvider.defaultCarImage&&(e=a.blogProvider).defaultCarImage.apply(e,t)})},null,544),[[u,a.blogProvider.imageUrl(l.blog?l.blog.defaultPhoto.imgPath:"",2)]]),(0,n.wy)((0,n._)("img",{alt:"Placeholder",class:"rounded-lg lg:block hidden w-full lg:h-32 h-20 object-cover",width:"360px",height:"100px",onError:t[1]||(t[1]=function(){for(var e,t=[],l=0;l<arguments.length;l++)t[l]=arguments[l];return a.blogProvider.defaultCarImage&&(e=a.blogProvider).defaultCarImage.apply(e,t)})},null,544),[[u,a.blogProvider.imageUrl(l.blog?l.blog.defaultPhoto.imgPath:"",3)]]),l.blog?((0,n.wg)(),(0,n.iD)("div",o,[(0,n.Wm)(d,{class:"font-medium text-xs lg:text-sm",innerHTML:l.blog.name.length>20?l.blog.name.slice(0,15)+" ....":l.blog.name},null,8,["innerHTML"]),(0,n._)("p",r,[(0,n.Wm)(d,{class:"font-light text-xxs lg:text-xs",innerHTML:l.blog.description.length>70?l.blog.description.slice(0,70)+" ....":l.blog.description},null,8,["innerHTML"])])])):(0,n.kq)("",!0)])}var i=l(4687),s=l(2700),d=l(3149),u={name:"BlogHorizontalItem",components:{PsLabel:i.Z},props:{blog:{type:d.Z},onClick:Function},setup:function(){var e=(0,s.RT)();return{blogProvider:e}}},c=l(8118);const g=(0,c.Z)(u,[["render",a]]);var m=g},3354:function(e,t,l){l.r(t),l.d(t,{default:function(){return H}});var n=l(6252),o=l(3577),r={class:"flex flex-col mb-4"},a={class:"flex flex-col items-center"},i={class:"flex flex-row"},s={class:"w-full h-auto"},d={class:"grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3.5 lg:gap-4"},u={class:"items-center justify-center flex"},c={class:""},g={class:""};function m(e,t,l,m,p,f){var b=(0,n.up)("ps-label-header-4"),v=(0,n.up)("ps-label"),x=(0,n.up)("ps-ad-sense"),y=(0,n.up)("blog-horizontal-item"),w=(0,n.up)("ps-route-link"),h=(0,n.up)("ps-button"),k=(0,n.up)("ps-content-container");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(k,{class:"sm:mt-32 lg:mt-36 mt-28"},{content:(0,n.w5)((function(){return[(0,n._)("div",r,[(0,n._)("div",a,[(0,n.Wm)(b,{class:"font-medium"},{default:(0,n.w5)((function(){return[(0,n.Uk)((0,o.zw)(e.$t("blog_list__blog")),1)]})),_:1}),(0,n.Wm)(v,{class:"mt-2 mb-4 text-center"},{default:(0,n.w5)((function(){return[(0,n.Uk)((0,o.zw)(e.$t("blog_list__get_latest_update")),1)]})),_:1})]),(0,n._)("div",i,[(0,n._)("div",s,[(0,n.Wm)(x,{class:"mb-4",adFormat:"horizontal"}),(0,n._)("div",d,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(m.blogProvider.blogList.data,(function(e){return(0,n.wg)(),(0,n.iD)("div",{class:"w-full",key:e.id},[(0,n.Wm)(w,{to:{name:"blog-detail",params:{blogId:e.id,blogName:e.name}}},{default:(0,n.w5)((function(){return[(0,n.Wm)(y,{blog:e},null,8,["blog"])]})),_:2},1032,["to"])])})),128))]),(0,n._)("div",u,[0==m.blogProvider.loading.value?((0,n.wg)(),(0,n.j4)(h,{key:0,class:(0,o.C_)(["w-60 flex-grow-0 mt-6",m.blogProvider.isNoMoreRecord?"hidden":""]),onClick:m.loadMore},{default:(0,n.w5)((function(){return[(0,n.Uk)((0,o.zw)(e.$t("blog_list__load_more")),1)]})),_:1},8,["onClick","class"])):((0,n.wg)(),(0,n.j4)(h,{key:1,class:"w-60 flex-grow-0 mt-36",onClick:m.loadMore,disabled:!0},{default:(0,n.w5)((function(){return[(0,n.Uk)((0,o.zw)(e.$t("blog_list__loading")),1)]})),_:1},8,["onClick"]))])])])]),(0,n._)("div",c,[(0,n.Wm)(x,{adFormat:"horizontal"})])]})),_:1}),(0,n._)("div",g,[(0,n.Wm)(x,{adFormat:"horizontal"})])],64)}var p=l(2262),f=l(8653),b=l(3013),v=l(4687),x=l(8960),y=l(2776),w=l(730),h=l(2700),k=l(1071),_=l(9399),C={name:"BlogListView",components:{PsAdSense:w.Z,PsContentContainer:f.Z,BlogHorizontalItem:k.Z,PsButton:b.Z,PsLabel:v.Z,PsLabelHeader4:x.Z,PsRouteLink:y.Z},setup:function(){var e=(0,h.RT)(),t=_.$.psValueHolder,l=(0,p.iH)(t.locationId),n=t.getLoginUserId();function o(){e.loadBlogList(n,e.paramHolder)}return e.paramHolder.locationId=l.value,e.loadBlogList(n,e.paramHolder),{blogProvider:e,loadMore:o}}},P=l(8118);const Z=(0,P.Z)(C,[["render",m]]);var H=Z}}]);
//# sourceMappingURL=BlogList-legacy.2d325252.js.map