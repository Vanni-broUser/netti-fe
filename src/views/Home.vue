<template>
  <Carousel :content="images" />
</template>

<script setup>
import Carousel from '@/components/Carousel.vue';
import { useHead } from '@vueuse/head';
import { head } from "@/utils/SEO";

const images = [
  '/home/M_03-homepage.jpg',
  '/home/IMG_9243-homepage.jpg',
  '/home/Netti-10-bis.jpg',
  '/home/slide_2.jpg',
  '/home/Prova.jpg',
  '/home/slide_6.jpg',
  '/home/PLANOVOLUMETRICO-SALV02.jpg',
  '/home/slide_1.jpg'
];

//useHead(head);
</script>
