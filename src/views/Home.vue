<template>
  <Carousel :content="images" />
</template>

<script setup>
import Carousel from '@/components/HomeCarousel.vue';
import { useHead } from '@vueuse/head';
import { head } from "@/utils/SEO";

const images = [
  {
    path: '/home/2020_Mercato_san_Giovanni_di_Dio_Roma.jpg',
    caption: 'Mercato San Giovanni di Dio | Roma'
  },
  {
    path: '/home/2021_Palazzo_Carcano_Trani.jpg',
    caption: 'Palazzo Carcano | Trani'
  },
  {
    path: '/home/2021_Spazio_ecumenico_Caltagirone.jpg',
    caption: 'Spazio ecumenico | Caltagirone'
  },
  {
    path: '/home/2022_Ex_Caserma_Cimarrusti_Lecce.jpg',
    caption: 'Ex Caserma Cimarrusti | Lecce'
  },
  {
    path: '/home/2022_Palazzo_Frisini_Taranto.jpg',
    caption: 'Palazzo Frisini | Taranto'
  },
  {
    path: '/home/2023_Ex_centrale_del_latte_Bari.jpg',
    caption: 'Ex centrale del latte | Bari'
  },
  {
    path: '/home/2023_Scuola_materna_Lizzano.jpg',
    caption: 'Scuola materna | Lizzano'
  },
  {
    path: '/home/2024_Scuola_A._Frank._Bari.jpg',
    caption: 'Scuola A. Frank | Bari'
  }
];

useHead(head);
</script>
