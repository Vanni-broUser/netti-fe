<template>
  <v-carousel
    ref="carousel"
    style="height: 100vh;"
    :show-arrows="false"
    @keydown.left="prev"
    @keydown.right="next"
    @click="resetTimer"
    @touchstart="resetTimer"
    @wheel="handleWheel"
    v-model="selected"
    hide-delimiters
    tabindex="0"
  >
    <v-carousel-item v-for="(img, index) in imgArray" :key="index" :src="img" cover />
    <template #prev>
      <!-- Empty template to remove default arrows -->
    </template>
    <template #next>
      <!-- Empty template to remove default arrows -->
    </template>
    <v-row
      class="custom-controls"
      align="end"
      justify="end"
    >
      <v-icon
        v-for="(img, index) in imgArray"
        :key="index"
        :class="['mx-1', 'custom-dot', { 'v-icon--active': selected === index }]"
        @click="selected = index; resetTimer()"
      >
        mdi-circle
      </v-icon>
    </v-row>
  </v-carousel>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
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
const intervalId = ref(null);
let isThrottled = false; // Variabile per gestire il throttling degli eventi wheel

const prev = () => {
  selected.value = (selected.value + imgArray.length - 1) % imgArray.length;
};

const next = () => {
  selected.value = (selected.value + 1) % imgArray.length;
};

const startTimer = () => {
  intervalId.value = setInterval(() => {
    next();
  }, 10000); // 10 secondi
};

const resetTimer = () => {
  if (intervalId.value) {
    clearInterval(intervalId.value);
    startTimer();
  }
};

const handleUserInteraction = () => {
  resetTimer();
};

const handleWheel = (event) => {
  event.preventDefault(); // Preveniamo il comportamento di default dello scroll
  if (!isThrottled) {
    if (event.deltaY < 0) {
      prev();
    } else if (event.deltaY > 0) {
      next();
    }
    resetTimer();
    isThrottled = true;
    setTimeout(() => {
      isThrottled = false;
    }, 850); // Imposta un breve intervallo di throttling per evitare scorrimenti troppo rapidi
  }
};

// Imposta il riferimento al carosello e avvia il timer all'avvio
onMounted(() => {
  carousel.value = document.querySelector('.v-carousel');
  if (carousel.value) {
    carousel.value.focus();
  }
  startTimer();

  // Aggiungi ascoltatori globali per resettare il timer su qualsiasi interazione dell'utente
  window.addEventListener('mousemove', handleUserInteraction);
  window.addEventListener('click', handleUserInteraction);
  window.addEventListener('keydown', handleUserInteraction);
  window.addEventListener('touchstart', handleUserInteraction);
});

onBeforeUnmount(() => {
  if (intervalId.value) {
    clearInterval(intervalId.value);
  }

  // Rimuovi gli ascoltatori globali quando il componente viene smontato
  window.removeEventListener('mousemove', handleUserInteraction);
  window.removeEventListener('click', handleUserInteraction);
  window.removeEventListener('keydown', handleUserInteraction);
  window.removeEventListener('touchstart', handleUserInteraction);
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
  font-size: 12px;
}

.v-icon--active {
  color: red; /* Cambia il colore del pallino attivo */
}
</style>
