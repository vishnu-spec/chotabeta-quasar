
const routes = [

  {
    path: '/dashboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name:'dashboard', component: () => import('pages/Index.vue'),meta: { requiresAuth: true,} },
      { path: '/dashboard/table', name:'table', component: () => import('../components/table.vue'),meta: { requiresAuth: true,} },
      { path: '/dashboard/list', name:'list', component: () => import('../components/list.vue'),meta: { requiresAuth: true,} },
      { path: '/dashboard/cancelorders' , name:'cancelorders', component: () => import('../components/cancelorders.vue'),meta: { requiresAuth: true,} },
      { path: '/dashboard/ratingorder', name:'ratingorder', component: () => import('../components/ratingorder.vue'),meta: { requiresAuth: true,} },
      { path: '/dashboard/pincodelogs', name:'pincodelogs', component: () => import('../components/pincodelogs.vue'),meta: { requiresAuth: true,} },
      { path: '/dashboard/usercount', name:'usercount', component: () => import('../components/usercount.vue'),meta: { requiresAuth: true,} },
      { path: '/dashboard/newuser', name:'newuser', component: () => import('../components/newuser.vue'),meta: { requiresAuth: true,} },
      { path: '/dashboard/citybasedusers', name:'citybasedusers', component: () => import('../components/citybasedusers.vue'),meta: { requiresAuth: true,} },
      { path: '/dashboard/Today_orders_At_Glance', name:'todayorderatglance', component: () => import('../components/Today_orders _At _Glance.vue'),meta: { requiresAuth: true,}},
      { path: '/dashboard/childorders', name:'childorders', component: () => import('../components/childorders.vue'),meta: { requiresAuth: true,}},
      { path: '/dashboard/vendorslist', name:'vendorslist', component: () => import('../components/vendorslist.vue'),meta: { requiresAuth: true,}},
      { path: '/dashboard/pickfromstore', name:'pickfromstore', component: () => import('../components/pickfromstore.vue'),meta: { requiresAuth: true,}},
      { path: '/dashboard/yesterdaypickfromstore', name:'yesterdaypickfromstore', component: () => import('../components/yesterdaypickfromstore.vue'),meta: { requiresAuth: true,}},
      { path: '/dashboard/example', name:'example', component: () => import('../components/example.vue'),meta: { requiresAuth: true,}}, //monthvendorslist.vue
      { path: '/dashboard/Yesterday_orders_at_glance', name:'yesterdayordersatglance', component: () => import('../components/Yesterday_orders_at_glance.vue'),meta: { requiresAuth: true,}},
      { path: '/dashboard/monthvendorslist', name:'monthvendorslist', component: () => import('../components/monthvendorslist.vue'),meta: { requiresAuth: true,}},
      { path: '/dashboard/de_earnings', name:'deearnings', component: () => import('../components/de_earnings.vue'),meta: { requiresAuth: true,}},
      { path: '/dashboard/manualordersrestricted', name:'manualordersrestricted', component: () => import('../components/manualordersrestricted.vue'),meta: { requiresAuth: true,}},
      { path: '/dashboard/cancellationorders', name:'cancellationorders', component: () => import('../components/cancellationorders.vue'),meta: { requiresAuth: true,}},
      { path: '/dashboard/sla', name:'sla', component: () => import('../components/sla.vue'),meta: { requiresAuth: true,}},
      { path: '/dashboard/De_earnings_main', name:'De_earnings_main', component: () => import('../components/De_earnings_main.vue'),meta: { requiresAuth: true,}},
      { path: '/dashboard/b4b', name:'b4b', component: () => import('../components/b4b.vue'),meta: { requiresAuth: true,}},
      { path: '/dashboard/list1', name:'list1', component: () => import('../components/list1.vue'),meta: { requiresAuth: true,}}
      // { path: '/liveorders', component: () => import('../components/liveorders.vue') }, De_earnings_main.vue
    ]
  },
  // {
  //   path: '/table',
  //   component: () => import('../components/table.vue'),
  //   meta: { requiresAuth: true,}
  //   // children: [
  //   //   { path: '', component: () => import('pages/Index.vue') }
  //   // ]
  // },

  // Always leave this as last one,
  // but you can also remove it
  // {
  //   path: '*',
  //   component: () => import('pages/Error404.vue')
  // },
  {
    path: '/',
    name:'login',
    component: () => import('components/login.vue'),
    meta: {
      requiresVisitor: true,
    }
  }

]

if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('components/login.vue')
  })
}
export default routes
