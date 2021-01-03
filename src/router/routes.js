export default [
	{
    path: '/',
    redirect: {
      path: '/portal'
    }
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('../pages/login/index.vue')
  },
  {
    name: 'portal',
    path: '/portal',
    component: () => import('../pages/home/index.vue'),
    children: [
      {
        path: '/',
        redirect: {
          name: 'pageOne'
        }
      },
      {
        name: 'pageOne',
        path: 'pageOne',
        component: () => import('../pages/detail/index.vue')
      },
      {
        name: 'pageTwo',
        path: 'pageTwo',
        component: () => import('../pages/detail/index.vue')
      }
    ]
  }, {
    name: 'list',
    path: '/list',
    component: () => import('../pages/list/index.vue')
  }, {
    name: 'detail',
    path: '/detail',
    component: () => import('../pages/detail/index.vue')
  }, {
    name: 'error',
    path: '/error',
    component: () => import('../pages/error/index.vue')
  }, {
    name: 'notFound',
    path: '/not_found',
    component: () => import('../pages/not_found/index.vue')
  }, {
    name: 'default',
    path: '*',
    component: () => import('../pages/not_found/index.vue')
  }
]