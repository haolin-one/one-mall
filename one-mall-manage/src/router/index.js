import { createRouter, createWebHashHistory } from 'vue-router';
import { sessionCache } from '@/utils/cache';

export const routes = [
  {
    path: '/',
    redirect: '/main/home'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/Login.vue')
  },
  {
    name: 'main',
    path: '/main',
    component: () => import('../views/Main/Main.vue'),
    children: [
      {
        path: '/main/home',
        name: 'home',
        component: () => import('../views/Main/Home/Home.vue')
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../views/Notfound/Notfound.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to) => {
  if (to.path !== '/login' && !sessionCache.getItem('admin')) {
    return '/login';
  } else if (to.path === '/login' && sessionCache.getItem('admin')) {
    return '/';
  }
});

export default router;
