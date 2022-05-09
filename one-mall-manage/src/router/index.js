import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/Login.vue')
  },
  {
    path: '/',
    redirect: '/main/home',
    name: 'main',
    component: () => import('../views/Main/Main.vue'),
    children: [
      {
        path: '/main/home',
        name: 'home',
        component: () => import('../views/Main/Home/Home.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
