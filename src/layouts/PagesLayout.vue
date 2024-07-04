<template>
  <v-app>
    <v-layout>
      <LateralMenu v-if="isMobile" :modelValue="drawer" @update:modelValue="handleDrawerUpdate" />
      <AlwaysMenu v-else />
      <v-main>
        <MainTitle @toggleDrawer="toggleDrawer" v-if="isMobile" />
        <router-view />
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup>
import MainTitle from './MainTitle';
import AlwaysMenu from './AlwaysMenu';
import LateralMenu from './LateralMenu';

import mobile from '@/utils/mobile';
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

const isMobile = mobile.setupMobileUtils();
</script>
