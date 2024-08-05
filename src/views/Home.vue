<template>
  <Carousel mode="home" :content="images" />
</template>

<script setup>
  import Carousel from '@/components/Carousel.vue';

  const images = [
    '/home/M_03-homepage.jpg',
    '/home/IMG_9243-homepage.jpg',
    '/home/817321E2-3ABC-453A-9336-C1A5A0DFDAAE-homepage.jpeg',
    '/home/Netti-10-bis.jpg',
    '/home/slide_2.jpg',
    '/home/Prova.jpg',
    '/home/slide_6.jpg',
    '/PLANOVOLUMETRICO-SALV02.jpg',
    '/home/slide_1.jpg'
  ];
</script>
