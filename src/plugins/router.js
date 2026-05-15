import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/HomePage.vue')
      },
      {
        path: '/admin',
        name: 'Admin Panel',
        beforeEnter() {
          window.location.href = 'https://fastsite.it/login';
        }
      },
      {
        path: '/dettaglio/:id',
        name: 'Dettaglio',
        component: () => import('@/views/DettaglioPage.vue'),
        props: true
      },
      {
        path: '/portfolio-15',
        name: 'Portfolio 2015',
        component: () => import('@/views/Portfolio15Page.vue')
      },
      {
        path: '/portfolio-25',
        name: 'Portfolio 2025',
        component: () => import('@/views/Portfolio25Page.vue')
      }
    ]
  },
  {
    path: '/',
    component: () => import('@/layouts/PagesLayout.vue'),
    children: [
      {
        path: '/ricerca-post',
        name: 'Ricerca Post',
        component: () => import('@/views/RicercaPost.vue')
      },
      {
        path: '/architetture',
        name: 'Architetture',
        component: () => import('@/views/ArchitetturePage.vue')
      },
      {
        path: '/progetti',
        name: 'Progetti',
        component: () => import('@/views/ProgettiPage.vue')
      },
      {
        path: '/ricerche',
        name: 'Ricerche',
        component: () => import('@/views/RicerchePage.vue'),
      },
      {
        path: '/chi-siamo',
        name: 'ChiSiamo',
        component: () => import('@/views/ChiSiamo.vue')
      },
      {
        path: '/agenda',
        name: 'Agenda',
        component: () => import('@/views/AgendaPage.vue')
      },
      {
        path: '/agenda/:id',
        name: 'Dettaglio Agenda',
        component: () => import('@/views/DettaglioAgenda.vue')
      },
      {
        path: '/contatti',
        name: 'Contatti',
        component: () => import('@/views/ContattiPage.vue')
      },
      {
        path: '/ricerche/dinettica',
        name: 'Dinettica',
        component: () => import('@/views/DinetticaPage.vue')
      },
      {
        path: '/ricerche/extra',
        name: 'Extra',
        component: () => import('@/views/ExtraPage.vue')
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
        behavior: 'smooth'
      };
    } else if (savedPosition) return savedPosition;
    else return { left: 0, top: 0 };
  }
});

export default router;
