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
import { useRouter } from 'vue-router';

const drawer = ref(false);
const router = useRouter();
const isMobile = mobile.setupMobileUtils();

const toggleDrawer = () => {
  drawer.value = !drawer.value;
};

router.beforeEach((_to, _from, next) => {
  drawer.value = false;
  next();
});
</script>

<style scoped>
.desktop-view {
  margin-left: 305px;
}

.content {
  height: 100vh;
}
</style>
