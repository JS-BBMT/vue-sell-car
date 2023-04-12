import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
//const route = useRoute();
const routes: Array<RouteRecordRaw> = [
    // *** General ***
    {
      // path: "/:catchAll(.*)",
      path: "/:catchAll(.*)",
      name: "not-found",
      component: () =>
        import(/* webpackChunkName: "Not Fount" */ "../views/general/NotFound.vue")
    },
    // *** Dashboard ***
    {
      path: "/",
      name: "dashboard",
      component: () =>
        import(/* webpackChunkName: "Not Fount" */ "../views/dashboard/Dashboard.vue"),
        //component: Dashboard
    },
    // *** Users ***
    {
      path: "/login",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "Login" */  /* webpackPrefetch: true */ "../views/user/PhoneLogin.vue"),
     
    },
    {
      path: "/login/phone",
      name: "phone-login",
      component: () =>
        import(/* webpackChunkName: "PhoneLogin" */ /* webpackPrefetch: true */ "../views/user/PhoneLogin.vue"),
  
    },
    {
      path: "/profile",
      name: "profile",
      component: () =>
        import(/* webpackChunkName: "Profile" */ /* webpackPrefetch: true */ "../views/user/Profile.vue"),
     
    },
    {
      path: "/other-profile/:userId",
      name: "other-profile",
      component: () =>
        import(/* webpackChunkName: "OtherProfile" */ /* webpackPrefetch: true */ "../views/user/OtherProfile.vue"),

    },
    {
      path: "/edit-profile",
      name: "edit-profile",
      component: () =>
        import(/* webpackChunkName: "EditProfile" */ /* webpackPrefetch: true */ "../views/user/EditProfile.vue"),
     
    },
    {
      path: "/register",
      name: "register",
      component: () =>
        import(/* webpackChunkName: "Register" */ /* webpackPrefetch: true */ "../views/user/PhoneLogin.vue"),
      
    },
    {
      path: "/forgotpassword",
      name: "forgotpassword",
      component: () =>
        import(/* webpackChunkName: "ForgotPassword" */ /* webpackPrefetch: true */ "../views/user/ForgotPassword.vue"),
     
    },
    {
      path: "/followers",
      name: "followers",
      component: () =>
        import(/* webpackChunkName: "FollowerList" */ /* webpackPrefetch: true */ "../views/user/FollowerList.vue"),
      
    },
    {
      path: "/following",
      name: "following",
      component: () =>
        import(/* webpackChunkName: "FollowingList" */ /* webpackPrefetch: true */ "../views/user/FollowingList.vue"),
     
    },
    {
      path: "/blocked-users",
      name: "blocked-users",
      component: () =>
        import(/* webpackChunkName: "BlockedUserList" */ /* webpackPrefetch: true */ "../views/user/BlockedUserList.vue"),
      
    },
    {
      path: "/verify-code",
      name: "verify-code",
      component: () =>
        import(/* webpackChunkName: "VerifyCode" */ /* webpackPrefetch: true */ "../views/user/VerifyCode.vue"),
     
    },
    {
      path: "/verify-email",
      name: "verify-email",
      component: () =>
        import(/* webpackChunkName: "VerifyEmail" */ /* webpackPrefetch: true */ "../views/user/VerifyEmail.vue"),
     
    },
    // *** Items ***
    {
      path: "/item-list/:manufacturerName",
      name: "item-list",
      component: () =>
        import(/* webpackChunkName: "ItemList" */ /* webpackPrefetch: true */ "../views/item/list/ItemList.vue"),   
          
    },
    {
      path: "/item-list",
      name: "item-list",
      component: () =>
        import(/* webpackChunkName: "Item" */ /* webpackPrefetch: true */ "../views/item/list/ItemList.vue"),
             
    },
    {
      path: "/item/:itemName",
      name: "item",
      component: () =>
        import(/* webpackChunkName: "ItemDetail" */ /* webpackPrefetch: true */ "../views/item/detail/ItemDetail.vue"),
      
    },
    {
      path: "/item-entry",
      name: "item-entry",
      component: () =>
        import(/* webpackChunkName: "ItemEntry" */ /* webpackPrefetch: true */ "../views/item/entry/ItemEntry.vue"),
          
    },
    {
      path: "/favourite",
      name: "favourite",
      component: () =>
        import(/* webpackChunkName: "FavouriteList" */ /* webpackPrefetch: true */ "../views/item/favourite/FavouriteList.vue"),
     
    },
    {
      path: "/reported-items",
      name: "reported-items",
      component: () =>
        import(/* webpackChunkName: "ReportedItemList" */ /* webpackPrefetch: true */ "../views/item/reported/ReportedItemList.vue"),
     
    },
    {
      path: "/paid-items",
      name: "paid-items",
      component: () =>
        import(/* webpackChunkName: "PaidItemList" */ /* webpackPrefetch: true */ "../views/item/list/PaidItemList.vue"),
     
    },
    {
      path: "/active-items",
      name: "active-items",
      component: () =>
        import(/* webpackChunkName: "ActiveItemList" */ /* webpackPrefetch: true */ "../views/item/list/ActiveItemList.vue"),
     
    },
    {
      path: "/follower-items",
      name: "follower-items",
      component: () =>
        import(/* webpackChunkName: "FollowerItemList" */ /* webpackPrefetch: true */ "../views/item/list/FollowerItemList.vue"),
     
    },
    {
      path: "/pending-items",
      name: "pending-items",
      component: () =>
        import(/* webpackChunkName: "PendingItemList" */ /* webpackPrefetch: true */ "../views/item/list/PendingItemList.vue"),
     
    },
    {
      path: "/reject-items",
      name: "reject-items",
      component: () =>
        import(/* webpackChunkName: "RejectItemList" */ /* webpackPrefetch: true */ "../views/item/list/RejectItemList.vue"),
     
    },
    // *** UI ***
    {
      path: "/ui-collection",
      name: "ui-collection",
      component: () =>
        import(/* webpackChunkName: "UiCollection" */ /* webpackPrefetch: true */ "../views/general/UiCollection.vue"),
     
    },
    // *** Chat ***
    {
      path: "/chat",
      name: "chat",
      component: () =>
        import(/* webpackChunkName: "Chat" */ /* webpackPrefetch: true */ "../views/chat/Chat.vue"),
     
    },
    {
      path: "/chat-list",
      name: "chat-list",
      component: () =>
        import(/* webpackChunkName: "ChatList" */ /* webpackPrefetch: true */ "../views/chat/list/ChatList.vue"),
     
    },
    {
      path: "/offer-list",
      name: "offer-list",
      component: () =>
        import(/* webpackChunkName: "OfferList" */ /* webpackPrefetch: true */ "../views/chat/list/OfferList.vue"),
      
    },
    // *** Contact Us ***
    {
      path: "/contact",
      name: "contact",
      component: () =>
        import(/* webpackChunkName: "Contact" */ /* webpackPrefetch: true */ "../views/contact/ContactUs.vue"),
     
    },
    // *** About Us ***
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "About" */ /* webpackPrefetch: true */ "../views/about/About.vue"),
      
    },
    // *** Privacy ***
    {
      path: "/privacy",
      name: "privacy",
      component: () =>
        import(/* webpackChunkName: "Privacy" */ /* webpackPrefetch: true */ "../views/privacy/Privacy.vue"),
      
    },
    // *** TermsAndConditions ***
    {
        path: "/terms-and-conditions",
        name: "terms-and-conditions",
        component: () =>
          import(/* webpackChunkName: "Terms and Condition" */ /* webpackPrefetch: true */ "../views/about/TermsAndConditions.vue"),
        
      },
    // *** FAQ ***
    {
      path: "/faq",
      name: "faq",
      component: () =>
        import(/* webpackChunkName: "FAQ" */ /* webpackPrefetch: true */ "../views/about/FaqPage.vue"),
     
    },
    // *** Safety ***
    {
        path: "/safety",
        name: "safety",
        component: () =>
          import(/* webpackChunkName: "FAQ" */ /* webpackPrefetch: true */ "../views/safety/Safety.vue"),
       
      },
    // *** Blog ***
    {
      path: "/blog",
      name: "blog-list",
      component: () =>
        import(/* webpackChunkName: "BlogList" */ /* webpackPrefetch: true */ "../views/blog/list/BlogList.vue"),    
        
    },
     // *** Buy Ad Transaction History ***
     {
      path: "/limit-ads",
      name: "limit-ads",
      component: () =>
        import(/* webpackChunkName: "BuyAdTransaction" */ /* webpackPrefetch: true */ "../views/transaction/BuyAdTransaction.vue"),    
         
    },
    {
      path: "/limit",
      name: "limit",
      component: () =>
        import(/* webpackChunkName: "BuyAdTransaction" */ /* webpackPrefetch: true */ "../views/transaction/BuyAdTransaction.vue"),    
         
    },
    {
      path: "/category",
      name: "category-list",
      component: () =>
        import(/* webpackChunkName: "CategoryList" */ /* webpackPrefetch: true */ "../views/category/list/CategoryList.vue"),   
       
    },
    {
      path: "/category/:catId/:catName",
      name: "sub-category-list",
      component: () =>
        import(/* webpackChunkName: "SubCategoryList" */ /* webpackPrefetch: true */ "../views/subCategory/list/SubCategoryList.vue"),  
          
    },
    {
      path: "/blog/:blogId",
      name: "blog-detail",
      component: () =>
        import(/* webpackChunkName: "BlogDetail" */ /* webpackPrefetch: true */ "../views/blog/detail/BlogDetail.vue"), 
          
    },
    // *** Notification ***
    {
      path: "/notification/:notificationId",
      name: "notification",
      component: () =>
        import(/* webpackChunkName: "Notification" */ /* webpackPrefetch: true */ "../views/notification/Notification.vue"),
      
    },
    {
      path: "/notification",
      name: "notification-list",
      component: () =>
        import(/* webpackChunkName: "NotificationList" */ /* webpackPrefetch: true */ "../views/notification/NotificationList.vue"),
      
    },
    {
      path: "/account-list",
      name: "account-list",
      component: () =>
        import(/* webpackChunkName: "NotificationList" */ /* webpackPrefetch: true */ "../views/user/AccountList.vue"),
      
    },

    // *** Credit Card Entry ***
    // {
    //     path: "/card-entry",
    //     name: "card-entry",
    //     component: () =>
    //         import(/* webpackChunkName: "Card Entry" */ "../views/card/CreditCardView.vue")
    // },
    // *** Review ***
    {
      path: "/review-list",
      name: "review-list",
      component: () =>
        import(/* webpackChunkName: "Review" */ /* webpackPrefetch: true */ "../views/review/ReviewList.vue"),
     
    },
    {
      path: "/deal",
      name: "deal-list",
      component: () =>
        import(/* webpackChunkName: "DealList" */ /* webpackPrefetch: true */ "../views/deal/DealList.vue"),
      
    },

];

const router = createRouter({

    history: createWebHistory(process.env.BASE_URL),
    // history: createMemoryHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        
       // to.meta.metaTags.fromHistory = savedPosition !== null;
        if(savedPosition) {
            return savedPosition;
        }
        return { left: 0, top: 0 };

    }
    
})

// This callback runs before every route change, including on page load.
// router.beforeEach((to, from, next) => {
//   let setitemName = '';
//   let setblogName = '';
//   if (to.query.item_name) {
//     setitemName = to.query.item_name.toString() || "ro";
//   }
//   if (to.params.blogName) {
//     setblogName = to.params.blogName.toString() || "ro";
//   }
//   const DEFAULT_TITLE = 'Some Default Title';
//   document.title = to.meta.title || DEFAULT_TITLE;
  
//   // Find the nearest route element with meta tags.
//   const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

//   // Remove any stale meta tags from the document using the key attribute we set below.
//   Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode?.removeChild(el));

//   // Skip rendering meta tags if there are none.
//   if(!nearestWithMeta) return next();

//   // Turn the meta tag definitions into actual elements in the head.
//   nearestWithMeta.meta.metaTags.map(tagDef => {
//     const tag = document.createElement('meta');

//     Object.keys(tagDef).forEach(key => {
//       tag.setAttribute(key, tagDef[key]);
//     });
//     if (setitemName) {
//       tag.setAttribute('name', setitemName);
//     }
//     if (setblogName) {
//       tag.setAttribute('content',setblogName);
//     }
    
//     // We use this to track which meta tags we create so we don't interfere with other ones.
//     tag.setAttribute('data-vue-router-controlled', '');

//     return tag;
//   })
//   // Add the meta tags to the document head.
//   .forEach(tag => document.head.appendChild(tag));

//   next();
// });

// ...

export default router;
//This callback runs before every route change, including on page load.
// router.beforeEach((to, from, next) => {

//   const tag = document.createElement('meta');
//   Object.keys(to.meta.metaTags).forEach(key => {
//     tag.setAttribute(key, to.meta.metaTags[key]);
   
//   });
//   document.getElementsByTagName('head')[0].appendChild(tag);
//   next();
// });