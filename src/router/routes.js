
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/table', component: () => import('../components/table.vue') },
      { path: '/list', component: () => import('../components/list.vue') },
      { path: '/cancelorders', component: () => import('../components/cancelorders.vue') },
      { path: '/ratingorder', component: () => import('../components/ratingorder.vue') },
      { path: '/pincodelogs', component: () => import('../components/pincodelogs.vue') },
      { path: '/usercount', component: () => import('../components/usercount.vue') },
      { path: '/newuser', component: () => import('../components/newuser.vue') }
      // { path: '/liveorders', component: () => import('../components/liveorders.vue') },
    ]
  },
  {
    path: '/table',
    component: () => import('../components/table.vue'),
    // children: [
    //   { path: '', component: () => import('pages/Index.vue') }
    // ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
