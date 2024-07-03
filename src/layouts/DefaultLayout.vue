<template>
  <v-app>
    <v-layout>
      <LateralMenu :modelValue="drawer" @update:modelValue="handleDrawerUpdate" />
      <v-main>
        <router-view />
        <MainTitle @toggleDrawer="toggleDrawer" :year="true" />
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup>
import LateralMenu from './LateralMenu';
import MainTitle from './MainTitle';

import { ref, onMounted } from 'vue';
import { focusCarousel, carousel } from '@/utils/focusCarousel';

const drawer = ref(false);

const toggleDrawer = () => {
  drawer.value = !drawer.value;
  if (!drawer.value) focusCarousel();
};

const handleDrawerUpdate = (value) => {
  drawer.value = value;
  if (!value) focusCarousel();
};

onMounted(() => {
  carousel.value = document.querySelector('.v-carousel');
  focusCarousel();
});
</script>
