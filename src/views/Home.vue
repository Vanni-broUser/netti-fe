<template>
  <Carousel :content="images" />
</template>

<script setup>
import Carousel from '@/components/HomeCarousel.vue';

import { head } from "@/utils/SEO";
import { useHead } from '@vueuse/head';

const images = [
  'Abitare Milano | Milano',
  'Casa Di Palma | Conversano',
  'Casa dello studente | Bari',
  'Casa NL | Sammichele di Bari',
  'Lonely Living | Venezia',
  'Piazza e aula civica | Sammichele di Bari',
  'Picos.02 | Bari',
  'Picos.01 | Bari',
  'Casa S3 | Capurso',
  'Chiesa di San Girolamo | Bari',
  'Scuola media \'A. De Rienzo\' | Bitonto',
  'Scuola primaria | Genga',
  'Complesso Parrocchiale \'Stella Maris\'',
  'Urban center | Modica'
];

useHead(head);
</script>
