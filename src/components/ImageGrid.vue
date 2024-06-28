<template>
  <div>
    <div v-if="isMobile">
      <div class="red-band"></div>
      <v-row>
        <v-col cols="12" v-for="(image, index) in content" :key="index">
          <router-link :to="{ name: 'Dettaglio', params: { id: index } }">
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
          </router-link>
        </v-col>
      </v-row>
    </div>
    <div v-else v-masonry class="masonry" item-selector=".item" originLeft:false horizontalOrder:true :gutter="gutter">
      <center>
        <div 
          v-masonry-tile 
          class="item" 
          v-for="(image, index) in content" 
          :key="index" 
          :style="{ height: image.height + 'px', backgroundColor: image.backgroundColor || 'transparent' }"
          @mouseenter="showImage(index)"
          @mouseleave="hideImage(index)"
        >
        <router-link :to="{ name: 'Dettaglio', params: { id: index } }">
            <div class="image-container">
              <div v-if="image.backgroundColor && showOverlay[index]" class="overlay">
                <div class="description">{{ image.description }}</div>
                <div class="year">{{ image.year }}</div>
              </div>
              <img v-show="!showOverlay[index] || !image.backgroundColor" :src="image.src" :alt="'Image ' + index" />
            </div>
          </router-link>
        </div>
      </center>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  id: {
    type: Number,
    default: 232323
  },
  player: {
    type: Boolean,
    default: false
  },
  content: {
    type: Array,
    required: true
  }

});


import { ref } from 'vue';
import { setupMobileUtils } from '@/utils/mobile.js';

// Setup rilevamento dispositivo mobile
const isMobile = setupMobileUtils();

// Stato per mostrare/nascondere l'overlay
const showOverlay = ref(Array(props.content.length).fill(true));

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
