<template>
  <v-app>
    <LateralMenu v-if="isMobile" />
    <AlwaysMenu v-else />
    <v-layout>
      <v-main>
        <MainTitle v-if="isMobile" :alwaysMenu="true" />
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

import mobile from '@/utils/mobile';
import { useRouter } from 'vue-router';

import { storeToRefs } from 'pinia';
import { useDrawerStore } from '@/stores/drawer';

const isMobile = mobile.setupMobileUtils();

const drawerStore = useDrawerStore();
const { visible } = storeToRefs(drawerStore);

const router = useRouter();

router.beforeEach((_to, _from, next) => {
  visible.value = false;
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
