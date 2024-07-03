<template>
	<ImageGrid :content = "images"/>
</template>

<script setup>
import immagine1 from '@/assets/817321E2-3ABC-453A-9336-C1A5A0DFDAAE-homepage.jpeg';
import immagine2 from '@/assets/IMG_9243-homepage.jpg';
import immagine3 from '@/assets/M_03-homepage.jpg';
import immagine4 from '@/assets/Netti-10-bis.jpg';
import immagine5 from '@/assets/PLANOVOLUMETRICO-SALV02.jpg';
import immagine6 from '@/assets/Prova.jpg';
import immagine7 from '@/assets/slide_1.jpg';
import immagine8 from '@/assets/slide_2.jpg';
import immagine9 from '@/assets/slide_6.jpg';

import { randomHeight } from '@/utils/gridUtils';

const images = [
  { src: immagine1, height: randomHeight() },
  { src: immagine2, height: randomHeight() },
  { src: immagine3, height: randomHeight() },
  { src: immagine4, height: randomHeight() },
  { src: immagine6, height: randomHeight() },
  { src: immagine7, height: randomHeight() },
  { src: immagine8, height: randomHeight() },
  { src: immagine9, height: randomHeight() },
];

import ImageGrid from '@/components/ImageGrid.vue'
</script>