<template>
  <v-app>
    <LateralMenu v-if="isMobile" :modelValue="drawer" @update:modelValue="handleDrawerUpdate" />
    <AlwaysMenu v-if="!isMobile" />
    <v-layout>
      <v-main>
        <MainTitle @toggleDrawer="toggleDrawer" v-if="isMobile" :alwaysMenu="true" />
        <router-view :class="{ 'desktop-view': !isMobile }" style="margin-top: 100px;" />
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
  const isMobile = mobile.setupMobileUtils();

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

<style scoped>
.desktop-view {
  margin-left: 338px;
}
</style>
