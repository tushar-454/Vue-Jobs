import AddJob from '@/page/Add-Job.vue';
import HomeView from '@/page/HomeView.vue';
import JobView from '@/page/JobView.vue';
import NoRoute from '@/page/NoRoute.vue';

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
      path: '/jobs/add',
      name: 'add-jobs',
      component: AddJob,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NoRoute,
    },
  ],
});

export default router;
