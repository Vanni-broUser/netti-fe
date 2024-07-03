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
    <v-carousel-item v-for="(img, index) in content" :key="index" :src="img.src" cover />
    <template #prev>
      <!-- Empty template to remove default arrows -->
    </template>
    <template #next>
      <!-- Empty template to remove default arrows -->
    </template>
    <v-row v-if="mode === 'home'" class="custom-controls" align="end" justify="end">
      <div v-for="(img, index) in content" :key="index"
        :class="['mx-1', 'my-3', 'custom-dot', { 'custom-dot--active': selected === index }]"
        @click="selected = index; resetTimer()"></div>
    </v-row>
    <v-row v-if="player" class="player-controls" align="center" justify="center">
      <PlayerControls :isPlaying="isPlaying" :speed="speed" @prev="prev" @next="next" @togglePlay="togglePlay" @stopPlay="stopPlay" @toggleSpeed="toggleSpeed" />
    </v-row>
  </v-carousel>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import PlayerControls from './Player.vue'; // Importa il componente PlayerControls
import { carousel, focusCarousel } from '@/utils/focusCarousel.js'; // Importa il riferimento e la funzione focusCarousel

const props = defineProps({
  mode: {
    type: String,
    default: 'home',
    validator: value => ['home', 'detail'].includes(value)
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

const togglePlay = () => {
  isPlaying.value = !isPlaying.value;
  if (isPlaying.value) {
    startTimer();
  } else {
    clearInterval(intervalId.value);
  }
};

const stopPlay = () => {
  isPlaying.value = false;
  clearInterval(intervalId.value);
};

const toggleSpeed = () => {
  speed.value = speed.value === 3 ? 1 : speed.value + 1;
  if (isPlaying.value) {
    resetTimer();
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

.player-controls {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
