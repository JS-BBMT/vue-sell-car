"use strict";(self["webpackChunkflutter_buy_sell"]=self["webpackChunkflutter_buy_sell"]||[]).push([[2171],{4525:function(e,t,r){r.r(t),r.d(t,{default:function(){return W}});var l=r(6252),s=r(3577),o={class:"sm:mt-32 lg:mt-36 mt-28 mb-16"},n={class:"flex flex-col items-start mt-10"},u={class:"flex items-center mt-8"},i={class:"flex flex-col pb-16 mt-4"},a={class:"flex flex-row"},d={class:"w-full"},c={key:0,class:"grid lg:grid-cols-12 sm:grid-cols-8 grid-cols-4 gap-4 sm:gap-3.5 lg:gap-4"},f={key:1,class:"w-full flex justify-center"},m={class:"flex flex-col items-center"};function w(e,t,r,w,_,g){var p=(0,l.up)("ps-label-header-4"),v=(0,l.up)("ps-label"),k=(0,l.up)("ps-route-link"),x=(0,l.up)("ps-icon"),b=(0,l.up)("user-list-horizontal"),P=(0,l.up)("ps-button"),U=(0,l.up)("ps-content-container");return(0,l.wg)(),(0,l.j4)(U,null,{content:(0,l.w5)((function(){return[(0,l._)("div",o,[(0,l._)("div",n,[(0,l.Wm)(p,{class:"mb-4 font-medium"},{default:(0,l.w5)((function(){return[(0,l.Uk)((0,s.zw)(e.$t("follower_list__follower_list")),1)]})),_:1}),(0,l.Wm)(v,{textColor:""},{default:(0,l.w5)((function(){return[(0,l.Uk)((0,s.zw)(e.$t("follower_list__test")),1)]})),_:1})]),(0,l._)("div",u,[(0,l.Wm)(k,{to:{name:"profile"}},{default:(0,l.w5)((function(){return[(0,l.Wm)(v,{class:"hover:underline cursor-pointer font-medium"},{default:(0,l.w5)((function(){return[(0,l.Uk)((0,s.zw)(w.breadcrumbuserProvider.user.data?w.breadcrumbuserProvider.user.data.userName:""),1)]})),_:1})]})),_:1}),(0,l.Wm)(x,{name:"rightArrow",class:"mx-2"}),(0,l.Wm)(v,{class:"font-light"},{default:(0,l.w5)((function(){return[(0,l.Uk)((0,s.zw)(e.$t("follower_list__follower_list")),1)]})),_:1})]),(0,l._)("div",i,[(0,l._)("div",a,[(0,l._)("div",d,[null!=w.userProvider.userList.data?((0,l.wg)(),(0,l.iD)("div",c,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(w.userProvider.userList.data,(function(e){return(0,l.wg)(),(0,l.iD)("div",{class:"w-full col-span-2 lg:col-span-3",key:e.userId},[(0,l.Wm)(k,{to:{name:"other-profile",params:{userId:e.userId}}},{default:(0,l.w5)((function(){return[(0,l.Wm)(b,{user:e},null,8,["user"])]})),_:2},1032,["to"])])})),128))])):0==w.userProvider.loading.value?((0,l.wg)(),(0,l.iD)("div",f,[(0,l.Wm)(v,{textColor:"text-secondary-500 dark:text-secondaryDark-white lg:text-xl sm:text-lg text-base font-medium",class:"mt-10 flex-grow-0 mx-auto"},{default:(0,l.w5)((function(){return[(0,l.Uk)((0,s.zw)(e.$t("list__no_result")),1)]})),_:1})])):(0,l.kq)("",!0)])])]),(0,l._)("div",m,[0==w.userProvider.loading.value?((0,l.wg)(),(0,l.j4)(P,{key:0,class:(0,s.C_)(["w-60 mx-auto mt-8",w.userProvider.isNoMoreRecord?"hidden":""]),onClick:w.loadMore},{default:(0,l.w5)((function(){return[(0,l.Uk)((0,s.zw)(e.$t("follower_list__load_more")),1)]})),_:1},8,["onClick","class"])):((0,l.wg)(),(0,l.j4)(P,{key:1,class:"w-60 mx-auto mt-8",onClick:w.loadMore,disabled:!0},{default:(0,l.w5)((function(){return[(0,l.Uk)((0,s.zw)(e.$t("follower_list__loading")),1)]})),_:1},8,["onClick"]))])])]})),_:1})}var _=r(8653),g=r(8960),p=r(4687),v=r(3013),k=r(9602),x=r(2776),b=r(4808),P=r(7259),U=r(2941),h=r(9399),C=r(6948),L={name:"FollowerListView",components:{PsContentContainer:_.Z,PsLabelHeader4:g.Z,UserListHorizontal:U.Z,PsLabel:p.Z,PsButton:v.Z,PsIcon:k.Z,PsRouteLink:x.Z},setup:function(){var e=h.$.psValueHolder,t=(0,b.L)(),r=(0,P.xu)(),l=e.getLoginUserId(),s=(new C.Z).getFollowerUsers();function o(){t.loadUserList(s)}return s.loginUserId=l,t.loadUserList(s),r.getUser(l),{userProvider:t,loadMore:o,breadcrumbuserProvider:r}}},y=r(8118);const z=(0,y.Z)(L,[["render",w]]);var W=z}}]);
//# sourceMappingURL=FollowerList-legacy.059069a1.js.map