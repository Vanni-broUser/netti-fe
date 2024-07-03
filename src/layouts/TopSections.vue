<template>
  <v-app>
    <v-layout>
      <always-menu />
      <v-main>
        <router-view />
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup>
import AlwaysMenu from './AlwaysMenu.vue';
import { ref, onMounted } from 'vue';
import mobile from '@/utils/mobile.js'; // Importa la funzione per rilevare i dispositivi mobili

const drawer = ref(false);

const isMobile = mobile.setupMobileUtils(); // Rileva se il dispositivo è mobile

</script>

<style scoped>

</style>
