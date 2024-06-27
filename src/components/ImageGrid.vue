<template>
  <div>
    <div v-if="isMobile">
      <v-row>
        <v-col cols="12" v-for="(image, index) in images" :key="index">
          <div class="image-container">
            <img :src="image.src" :alt="'Image ' + index" />
          </div>
        </v-col>
      </v-row>
    </div>
    <div v-else v-masonry class="masonry" item-selector=".item" originLeft:false horizontalOrder:true gutter="2">
      <center>
        <div v-masonry-tile class="item" v-for="(image, index) in images" :key="index" :style="{ height: randomHeight() + 'px' }">
          <div class="image-container">
            <img :src="image.src" :alt="'Image ' + index" />
          </div>
        </div>
      </center> 
    </div>
  </div>
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

import { ref, computed } from 'vue';
import { setupMobileUtils } from '@/utils/mobile.js';

// Funzione che restituisce un numero casuale tra 160, 320, 640
const randomHeight = () => {
  const height = [160, 320, 640];
  return height[Math.floor(Math.random() * height.length)];
};

// Array delle immagini
const images = ref([
  { src: immagine1 },
  { src: immagine2 },
  { src: immagine3 },
  { src: immagine4 },
  { src: immagine6 },
  { src: immagine7 },
  { src: immagine8 },
  { src: immagine9 },
  { src: immagine1 },
  { src: immagine2 },
  { src: immagine3 },
  { src: immagine4 },
  { src: immagine6 },
  { src: immagine7 },
  { src: immagine8 },
  { src: immagine9 },
]);

// Setup rilevamento dispositivo mobile
const isMobile = setupMobileUtils();

// Gutter dinamico in base al dispositivo
const gutter = 2;
</script>

<style scoped>
.masonry {
  margin-left: 13px;
  margin-top: 113px;
}
/* Definisce la larghezza della colonna */
.item {
  width: 24%; /* 4 colonne */
  margin-bottom: 20px;
  /* L'altezza viene impostata dinamicamente dalla funzione randomHeight */
}

.masonry-mobile {
  margin-top: 113px;
}

/* Stile per la colonna mobile */
.item-mobile {
  width: 100%; /* 1 colonna */
  margin-bottom: 4px;
}

/* Stile per il contenitore dell'immagine */
.image-container {
  width: 95%;
  margin-left: 2.5%;
  margin-right: 2.5%;
  height: 100%;
  overflow: hidden; /* Nasconde parti dell'immagine che eccedono i limiti del contenitore */
}

/* Stile per l'immagine all'interno del contenitore */
.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Crop centrale dell'immagine per adattarsi al contenitore */
  display: block;
}
</style>
