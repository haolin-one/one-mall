import { createRouter, createWebHashHistory } from 'vue-router';
import { allRoutes } from './routes';

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('../views/Main/Main.vue'),
    children: [
      ...allRoutes,
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
