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
            >
              <div 
                :class="['overlay', image.backgroundColor ? 'colored-overlay' : 'red-overlay']" 
                :style="image.backgroundColor ? { '--overlay-color': image.backgroundColor } : {}"
              >
                <div class="text-container">
                  <div class="description">{{ image.description }}</div>
                  <div v-if="image.year" class="year">{{ image.year }}</div>
                </div>
              </div>
              <img :src="image.src" :alt="'Image ' + index" />
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
        >
          <router-link :to="{ name: 'Dettaglio', params: { id: index } }">
            <div class="image-container">
              <div 
                :class="['overlay', image.backgroundColor ? 'colored-overlay' : 'red-overlay']" 
                :style="image.backgroundColor ? { '--overlay-color': image.backgroundColor } : {}"
              >
                <div class="text-container">
                  <div class="description">{{ image.description }}</div>
                  <div v-if="image.year" class="year">{{ image.year }}</div>
                </div>
              </div>
              <img :src="image.src" :alt="'Image ' + index" />
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

// Gutter dinamico in base al dispositivo
const gutter = 13;
</script>

<style scoped>
.masonry {
  margin-left: 13px;
  margin-top: 113px;
}

.item {
  width: 24%; /* 4 colonne */
  margin-bottom: 20px;
}

.masonry-mobile {
  margin-top: 113px;
}

.item-mobile {
  width: 100%; /* 1 colonna */
  margin-bottom: 4px;
}

.image-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1vw;
  transition: background-color 0.3s ease;
}

.red-overlay {
  background-color: rgba(255, 0, 0, 0);
}

.image-container:hover .red-overlay {
  background-color: rgba(255, 0, 0, 0.7);
}

.colored-overlay {
  background-color: rgba(0, 0, 0, 0);
}

.image-container:hover .colored-overlay {
  background-color: var(--overlay-color, rgba(255, 0, 0, 0.7));
  opacity: 0.7;
}

.text-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.description {
  font-size: 5rem;
  margin: 0;
}

.year {
  font-size: 1rem;
  margin: 0;
}
</style>
