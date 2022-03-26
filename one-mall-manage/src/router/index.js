import { createRouter, createWebHashHistory } from 'vue-router';
import { allRoutes } from './routes';

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('../views/Main/Main.vue'),
    children: [...allRoutes]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
