<template>
  <div style=" margin-left: 373px;" v-masonry item-selector=".item"  horizontalOrder gutter="13" >
    <center>
    <div v-masonry-tile class="item" v-for="(image, index) in images" :key="index" :style="{ height: randomHeight() + 'px' }">
      <div class="image-container">
        <img :src="image.src" :alt="'Image ' + index" />
      </div>
    </div>
  </center> 
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

import { ref } from 'vue';

// Funzione per generare altezza casuale tra 100 e 700 px
const randomHeight = () => Math.floor(Math.random() * 600) + 100;

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
]);
</script>



<style scoped>
/* Definisce la larghezza della colonna */
.item {
  width: 24%; /* 5 colonne */
  margin-bottom: 13px;
  /* L'altezza viene impostata dinamicamente dalla funzione randomHeight */
}

/* Stile per il contenitore dell'immagine */
.image-container {
  width: 100%;
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


