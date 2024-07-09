import AddJob from '@/page/Add-Job.vue';
import HomeView from '@/page/HomeView.vue';
import JobView from '@/page/JobView.vue';

import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobView,
    },
    {
      path: '/add-jobs',
      name: 'add-jobs',
      component: AddJob,
    },
  ],
});

export default router;
