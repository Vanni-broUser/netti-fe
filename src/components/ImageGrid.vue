<template>
  <div>
    <div v-if="isMobile">
      <div class="red-band"></div>
      <v-row>
        <v-col cols="12" v-for="(image, index) in images" :key="index">
          <div 
            class="image-container" 
            :style="{ backgroundColor: image.backgroundColor || 'transparent' }"
            @mouseenter="showImage(index)"
            @mouseleave="hideImage(index)"
          >
            <div v-if="image.backgroundColor && showOverlay[index]" class="overlay">
              <div class="description">{{ image.description }}</div>
              <div class="year">{{ image.year }}</div>
            </div>
            <img v-show="!showOverlay[index] || !image.backgroundColor" :src="image.src" :alt="'Image ' + index" />
          </div>
        </v-col>
      </v-row>
    </div>
    <div v-else v-masonry class="masonry" item-selector=".item" originLeft:false horizontalOrder:true :gutter="gutter">
      <center>
        <div 
          v-masonry-tile 
          class="item" 
          v-for="(image, index) in images" 
          :key="index" 
          :style="{ height: image.height + 'px', backgroundColor: image.backgroundColor || 'transparent' }"
          @mouseenter="showImage(index)"
          @mouseleave="hideImage(index)"
        >
          <div class="image-container">
            <div v-if="image.backgroundColor && showOverlay[index]" class="overlay">
              <div class="description">{{ image.description }}</div>
              <div class="year">{{ image.year }}</div>
            </div>
            <img v-show="!showOverlay[index] || !image.backgroundColor" :src="image.src" :alt="'Image ' + index" />
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

import { ref } from 'vue';
import { setupMobileUtils } from '@/utils/mobile.js';

// Funzione che restituisce un numero casuale tra 160, 320, 640
const randomHeight = () => {
  const height = [160, 320, 640];
  return height[Math.floor(Math.random() * height.length)];
};

// Array delle immagini con altezza calcolata una volta
const images = ref([
  { src: immagine1, backgroundColor: '#ffcccc', description: 'Descrizione 1', year: '2021', height: randomHeight() },
  { src: immagine2, height: randomHeight() },
  { src: immagine3, backgroundColor: '#ccffcc', description: 'Descrizione 3', year: '2020', height: randomHeight() },
  { src: immagine4, height: randomHeight() },
  { src: immagine6, backgroundColor: '#ccccff', description: 'Descrizione 6', year: '2019', height: randomHeight() },
  { src: immagine7, height: randomHeight() },
  { src: immagine8, backgroundColor: '#ffccff', description: 'Descrizione 8', year: '2022', height: randomHeight() },
  { src: immagine9, height: randomHeight() },
]);

// Setup rilevamento dispositivo mobile
const isMobile = setupMobileUtils();

// Stato per mostrare/nascondere l'overlay
const showOverlay = ref(Array(images.value.length).fill(true));

const showImage = (index) => {
  showOverlay.value[index] = false;
};

const hideImage = (index) => {
  showOverlay.value[index] = true;
};

// Gutter dinamico in base al dispositivo
const gutter = 13;
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
  width: 100%;
  height: 100%;
  overflow: hidden; /* Nasconde parti dell'immagine che eccedono i limiti del contenitore */
  position: relative;
}

/* Stile per l'immagine all'interno del contenitore */
.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Crop centrale dell'immagine per adattarsi al contenitore */
  display: block;
}

.red-band {
  background-color: #ff0000;
  height: 10%;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); /* Aggiunge un overlay semi-trasparente per migliorare la leggibilità del testo */
}

.description {
  font-size: 1.5rem;
}

.year {
  font-size: 1rem;
  margin-top: 0.5rem;
}
</style>
