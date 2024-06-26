import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/Default.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('@/layouts/DefaultCopy.vue'),
    children: [
      {
        path: 'architetture',
        name: 'Architetture',
        component: () => import('@/views/Architetture.vue'),
      },
      {
        path: 'progetti',
        name: 'Progetti',
        component: () => import('@/views/Progetti.vue'),
      },
      {
        path: 'ricerche',
        name: 'Ricerche',
        component: () => import('@/views/Ricerche.vue'),
      },
      {
        path: 'chi-siamo',
        name: 'ChiSiamo',
        component: () => import('@/views/ChiSiamo.vue'),
      },
      {
        path: 'agenda',
        name: 'Agenda',
        component: () => import('@/views/Agenda.vue'),
      },
      {
        path: 'contatti',
        name: 'Contatti',
        component: () => import('@/views/Contatti.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 };
    }
  },
});

export default router;
