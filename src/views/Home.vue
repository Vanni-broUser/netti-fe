<template>
  <Carousel :content="images" />
</template>

<script setup>
import Carousel from '@/components/Carousel.vue';
import { useHead } from '@vueuse/head';
import { head } from "@/utils/SEO";

const images = [
  '/home/2020_Mercato_san_Giovanni_di_Dio_Roma.jpg',
  '/home/2021_Palazzo_Carcano_Trani.jpg',
  '/home/2021_Spazio_ecumenico_Caltagirone.jpg',
  '/home/2022_Ex_Caserma_Cimarrusti_Lecce.jpg',
  '/home/2022_Palazzo_Frisini_Taranto.jpg',
  '/home/2023_Ex_centrale_del_latte_Bari.jpg',
  '/home/2023_Scuola_materna_Lizzano.jpg',
  '/home/2024_Scuola_A._Frank._Bari.jpg'
];

useHead(head);
</script>
