<template>
  <v-app>
    <LateralMenu v-if="isMobile" :modelValue="drawer" @toggleDrawer="toggleDrawer" />
    <AlwaysMenu v-else />
    <v-layout>
      <v-main>
        <MainTitle @toggleDrawer="toggleDrawer" v-if="isMobile" :alwaysMenu="true" />
        <router-view :class="{ 'desktop-view': !isMobile }" style="margin-top: 100px;" />
      </v-main>
    </v-layout>
    <Footer :class="{ 'desktop-view': !isMobile }" />
  </v-app>
</template>

<script setup>
  import Footer from './Footer';
  import MainTitle from './MainTitle';
  import AlwaysMenu from './AlwaysMenu';
  import LateralMenu from './LateralMenu';

  import { ref } from 'vue';
  import mobile from '@/utils/mobile';

  const drawer = ref(false);
  const isMobile = mobile.setupMobileUtils();

  const toggleDrawer = () => {
    drawer.value = !drawer.value;
  };
</script>

<style scoped>
  .desktop-view {
    margin-left: 338px;
  }

  .content {
    height: 100vh;
  }
</style>
