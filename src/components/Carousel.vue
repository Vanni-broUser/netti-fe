<template>
  <v-carousel ref="carousel" style="height: 100vh;" :show-arrows="false" @keydown.left="prev" @keydown.right="next"
    v-model="selected" hide-delimiters tabindex="0">
    <v-carousel-item v-for="(img, index) in imgArray" :key="index" :src="img" cover />
    <template #prev>
      <!-- Empty template to remove default arrows -->
    </template>
    <template #next>
      <!-- Empty template to remove default arrows -->
    </template>
    <v-row class="custom-controls" align="end" justify="end">
      <v-btn v-for="(img, index) in imgArray" :key="index" :class="['mx-2', { 'v-btn--active': selected === index }]"
        class="custom-dot" small icon @click="selected = index"></v-btn>
    </v-row>
  </v-carousel>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { carousel } from '@/utils/focusCarousel.js'; // Importa il riferimento del carosello

import immagine1 from '@/assets/817321E2-3ABC-453A-9336-C1A5A0DFDAAE-homepage.jpeg';
import immagine2 from '@/assets/IMG_9243-homepage.jpg';
import immagine3 from '@/assets/M_03-homepage.jpg';
import immagine4 from '@/assets/Netti-10-bis.jpg';
import immagine5 from '@/assets/PLANOVOLUMETRICO-SALV02.jpg';
import immagine6 from '@/assets/Prova.jpg';
import immagine7 from '@/assets/slide_1.jpg';
import immagine8 from '@/assets/slide_2.jpg';
import immagine9 from '@/assets/slide_6.jpg';

const imgArray = [
  immagine1,
  immagine2,
  immagine3,
  immagine4,
  immagine5,
  immagine6,
  immagine7,
  immagine8,
  immagine9,
];

const selected = ref(0);

const prev = () => {
  selected.value = (selected.value + imgArray.length - 1) % imgArray.length;
};

const next = () => {
  selected.value = (selected.value + 1) % imgArray.length;
};

// Imposta il riferimento al carosello e applica il focus all'avvio
onMounted(() => {
  carousel.value = document.querySelector('.v-carousel');
  if (carousel.value) {
    carousel.value.focus();
  }
});
</script>

<style scoped>
.custom-controls {
  position: absolute;
  bottom: 16px;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.custom-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #fff;
}

.v-btn--active {
  background-color: red;
  /* Cambia il colore del pallino attivo */
}
</style>