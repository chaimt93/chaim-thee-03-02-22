const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '',component: () => import('pages/Home')},
      { path: 'favorites',component: () => import('pages/Favorites')},
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
    ,meta:{authNotRequired:true}
  }
]
export default routes
