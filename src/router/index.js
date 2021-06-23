import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/cs33',
    name: 'CS33',
    component: () => import('../views/CS33.vue')
  },
  {
    path: '/csm51a',
    name: 'CSM51A',
    component: () => import('../views/CSM51A.vue')
  },
  {
    path: '/cs131',
    name: 'CS131',
    component: () => import('../views/CS131.vue')
  },
  {
    path: '/cs180',
    name: 'CS180',
    component: () => import('../views/CS180.vue')
  },
  {
    path: '/math61',
    name: 'MATH61',
    component: () => import('../views/MATH61.vue')
  },
  {
    path: '/phys1c',
    name: 'PHYS1C',
    component: () => import('../views/PHYS1C.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    else return { left: 0, top: 0 };
  },
});

export default router
