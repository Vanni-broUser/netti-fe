<template>
  <v-app>
    <v-layout>
      <lateral-menu :modelValue="drawer" @update:modelValue="handleDrawerUpdate" />
      <v-main>
        <default-view />
        <div class="second_layer">
          <p class="title v-elevation-3"><b>netti</b>architetti</p>
          <v-btn color="#ff0000" icon="mdi-reorder-horizontal" @click.stop="toggleDrawer" class="square-btn" small />
          <p v-if="!isMobile" class="year v-elevation-3"><b>2024</b></p>
        </div>
        <v-row v-if="isMobile" class="year v-elevation-3"><b>2024</b></v-row>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup>
import DefaultView from './View.vue';
import LateralMenu from './LateralMenu.vue';
import { ref, onMounted } from 'vue';
import { focusCarousel, carousel } from '@/utils/focusCarousel.js'; // Importa la funzione e il riferimento
import mobile from '@/utils/mobile.js'; // Importa la funzione per rilevare i dispositivi mobili

const drawer = ref(false);

const isMobile = mobile.setupMobileUtils(); // Rileva se il dispositivo è mobile

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
  align-items: center; /* Allinea gli elementi verticalmente al centro */
}

.title {
  margin-right: 10px;
  color: white;
  /* Colore arancio-rosso */
  font-size: 40px; /* Modifica l'altezza del font a 40px */
  padding: 10px;
  padding-top: 18px;
  /* Aggiungi padding per consistenza visiva */
  border-radius: 4px;
  /* Aggiungi border-radius per consistenza visiva */
}

.square-btn {
  width: 25px;
  height: 25px;
  border-radius: 0px;
  /* Assicurati che il border-radius sia coerente */
  min-width: 25px;
  min-height: 25px;
  margin: 0 10px;
  /* Distanza tra gli elementi */
  display: flex;
  align-items: center; /* Allinea il contenuto del bottone verticalmente al centro */
  justify-content: center; /* Allinea il contenuto del bottone orizzontalmente al centro */
}

.year {
  margin-left: 10px;
  color: white;
  /* Colore arancio-rosso */
  font-size: 35px;
  padding: 10px;
  padding-top: 20px; /* Aggiungi padding dall'alto */
  /* Aggiungi padding per consistenza visiva */
  border-radius: 4px;
  font-weight: 200;
  /* Aggiungi border-radius per consistenza visiva */
  display: flex;
  align-items: center; /* Allinea il contenuto del paragrafo verticalmente al centro */
}
</style>
