<template>
  <v-app>
    <v-layout>
      <lateral-menu :modelValue="drawer" @update:modelValue="handleDrawerUpdate" />
      <v-main>
        <default-view />
        <div class="second_layer" v-if="!drawer">
          <v-btn color="red" style="
              float: left;" icon="mdi-microsoft-xbox-controller-menu" @click.stop="toggleDrawer" />
          <p style="color: white; float: left" class="title"><b>netti</b>architetti</p>
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
  margin-left: 20px;
  color: "red";
  /* Colore arancio-rosso */
  font-size: 35px;
}
</style>
