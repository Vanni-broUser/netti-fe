<template>
  <div>
    <Carousel mode="home" :player="false" :content="images" />
  </div>
</template>

<script setup>
import Carousel from '@/components/Carousel.vue';

import immagine1 from '@/assets/home/817321E2-3ABC-453A-9336-C1A5A0DFDAAE-homepage.jpeg';
import immagine2 from '@/assets/home/IMG_9243-homepage.jpg';
import immagine3 from '@/assets/home/M_03-homepage.jpg';
import immagine4 from '@/assets/home/Netti-10-bis.jpg';
import immagine6 from '@/assets/home/Prova.jpg';
import immagine7 from '@/assets/home/slide_1.jpg';
import immagine8 from '@/assets/home/slide_2.jpg';
import immagine9 from '@/assets/home/slide_6.jpg';

const images = [
  { src: immagine1 },
  { src: immagine2 },
  { src: immagine3 },
  { src: immagine4 },
  { src: immagine6 },
  { src: immagine7 },
  { src: immagine8 },
  { src: immagine9 },
];
</script>
