<template>
  <v-app>
    <LateralMenu />
    <v-layout>
      <v-main>
        <MainTitle :details="route.path.includes('/dettaglio/')" />
        <router-view />
        <Footer />
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup>
import Footer from './Footer';
import MainTitle from './MainTitle';
import LateralMenu from './LateralMenu';

import { storeToRefs } from 'pinia';
import { useDrawerStore } from '@/stores/drawer';
import { useRoute, useRouter } from 'vue-router';

const drawerStore = useDrawerStore();
const { visible } = storeToRefs(drawerStore);

const route = useRoute();
const router = useRouter();

router.beforeEach((_to, _from, next) => {
  visible.value = false;
  next();
});
</script>
