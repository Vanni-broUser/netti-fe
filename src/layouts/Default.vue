<template>
  <v-app>
    <v-layout>
      <lateral-menu :modelValue="drawer" @update:modelValue="handleDrawerUpdate" />
      <v-main>
        <default-view />
        <div class="second_layer" >
          <p class="title v-elevation-3"><b>netti</b>architetti</p>
          <v-btn color="#ff0000" icon="mdi-reorder-horizontal" @click.stop="toggleDrawer" class="square-btn" small />
          <p class="year v-elevation-3"><b>2024</b></p>
        </div>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup>
import DefaultView from './View.vue';
import LateralMenu from './LateralMenu.vue';
import { ref, onMounted } from 'vue';
import { focusCarousel, carousel } from '@/utils/focusCarousel.js'; // Importa la funzione e il riferimento

const drawer = ref(false);

const toggleDrawer = () => {
  drawer.value = !drawer.value;
  if (!drawer.value) {
    focusCarousel(); // Imposta il focus sul carosello quando il menu laterale si chiude
  }
};

const handleDrawerUpdate = (value) => {
  drawer.value = value;
  if (!value) {
    focusCarousel(); // Imposta il focus sul carosello quando il menu laterale si chiude
  }
};

// Associa il riferimento del carosello e imposta il focus all'avvio
onMounted(() => {
  carousel.value = document.querySelector('.v-carousel');
  focusCarousel(); // Imposta il focus sul carosello all'avvio
});
</script>

<style scoped>
.second_layer {
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 3;
  display: flex;
  align-items: center;
}

.title {
  margin-right: 10px;
  color: white;
  /* Colore arancio-rosso */
  font-size: 35px;
  padding: 10px;
  /* Aggiungi padding per consistenza visiva */
  border-radius: 4px;
  /* Aggiungi border-radius per consistenza visiva */
}

.square-btn {
  width: 30px;
  height: 30px;
  border-radius: 0px;
  /* Assicurati che il border-radius sia coerente */
  min-width: 40px;
  min-height: 40px;
  margin: 0 10px;
  /* Distanza tra gli elementi */
}

.year {
  margin-left: 10px;
  color: white;
  /* Colore arancio-rosso */
  font-size: 35px;
  padding: 10px;
  /* Aggiungi padding per consistenza visiva */
  border-radius: 4px;
  /* Aggiungi border-radius per consistenza visiva */
}
</style>
