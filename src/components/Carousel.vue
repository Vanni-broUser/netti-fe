<template>
  <v-carousel
    ref="carousel"
    style="height: 100vh;"
    :show-arrows="mode === 'detail'"
    @keydown.left="prev"
    @keydown.right="next"
    @click="resetTimer"
    @touchstart="resetTimer"
    @wheel="handleWheel"
    v-model="selected"
    hide-delimiters
    tabindex="0"
  >
    <v-carousel-item v-for="(img, index) in content" :key="index" :src="img" cover />
    <template #prev>
      <v-btn v-if="mode == 'detail'" icon="mdi-arrow-left-drop-circle" @click="prev" variant="text" color="red" size="x-large" />
    </template>
    <template #next>
      <v-btn v-if="mode == 'detail'" icon="mdi-arrow-right-drop-circle" @click="next" variant="text" color="red" size="x-large" />
    </template>
    <v-row v-if="mode === 'home'" class="custom-controls" align="end" justify="end">
      <div v-for="(img, index) in content" :key="index"
        :class="['mx-1', 'my-3', 'custom-dot', { 'custom-dot--active': selected === index }]"
        @click="selected = index; resetTimer()"></div>
    </v-row>
  </v-carousel>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { carousel, focusCarousel } from '@/utils/focusCarousel.js';

const props = defineProps({
  mode: {
    type: String,
    default: 'home',
    validator: value => ['home', 'detail'].includes(value)
  },
  content: {
    type: Array,
    required: true
  }
});

const selected = ref(0);
const intervalId = ref(null);
const isPlaying = ref(false);
const speed = ref(1);
let isThrottled = false; // Variabile per gestire il throttling degli eventi wheel

const prev = () => {
  selected.value = (selected.value + props.content.length - 1) % props.content.length;
};

const next = () => {
  selected.value = (selected.value + 1) % props.content.length;
};

const startTimer = () => {
  intervalId.value = setInterval(() => {
    next();
  }, 5000 / speed.value); // 5 secondi divisi per la velocità
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
  focusCarousel();
  if (props.mode === 'home') {
    startTimer();
  }

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
  bottom: 1vh;
  right: 1vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.custom-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
}

.custom-dot--active {
  background-color: #ff0000;
  /* Cambia il colore del pallino attivo */
}
</style>
