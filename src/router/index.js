import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TestTheme from '../views/TestTheme.vue';

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: '/',
         name: 'home-view',
         component: HomeView,
      },
      {
         path: '/test-theme',
         name: 'test-theme',
         component: TestTheme,
      },

      {
         path: '/about',
         name: 'about',
         // route level code-splitting
         // this generates a separate chunk (About.[hash].js) for this route
         // which is lazy-loaded when the route is visited.
         component: () => import('../views/AboutView.vue'),
      },
   ],
});

export default router;
