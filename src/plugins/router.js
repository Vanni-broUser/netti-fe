import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: '/admin',
        name: 'Admin Panel',
        beforeEnter() {
          window.location.href = 'https://fastsite.it/#/login';
        }
      }
    ]
  },
  {
    path: '/',
    component: () => import('@/layouts/PagesLayout.vue'),
    children: [
      {
        path: 'architetture',
        name: 'Architetture',
        component: () => import('@/views/Architetture.vue')
      },
      {
        path: 'progetti',
        name: 'Progetti',
        component: () => import('@/views/Progetti.vue')
      },
      {
        path: 'ricerche',
        name: 'Ricerche',
        component: () => import('@/views/Ricerche.vue'),
      },
      {
        path: ':id',
        name: 'Dettaglio',
        component: () => import('@/views/Dettaglio.vue'),
        props: true
      },
      {
        path: 'chi-siamo',
        name: 'ChiSiamo',
        component: () => import('@/views/ChiSiamo.vue')
      },
      {
        path: 'agenda',
        name: 'Agenda',
        component: () => import('@/views/Agenda.vue')
      },
      {
        path: 'contatti',
        name: 'Contatti',
        component: () => import('@/views/Contatti.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
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
