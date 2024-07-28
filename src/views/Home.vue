<template>
  <Carousel mode="home" :player="false" :content="images" />
</template>

<script setup>
  import Carousel from '@/components/Carousel.vue';

  const images = [
    '/home/817321E2-3ABC-453A-9336-C1A5A0DFDAAE-homepage.jpeg',
    '/home/IMG_9243-homepage.jpg',
    '/home/M_03-homepage.jpg',
    '/home/Netti-10-bis.jpg',
    '/home/Prova.jpg',
    '/home/slide_1.jpg',
    '/home/slide_2.jpg',
    '/home/slide_6.jpg'
  ];
</script>
