<template>
  <v-app>
    <LateralMenu
      :model-value="drawer"
      @toggle-drawer="toggleDrawer"
    />
    <v-layout>
      <v-main>
        <MainTitle
          :details="route.path.includes('/dettaglio/')"
          @toggle-drawer="toggleDrawer"
        />
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

import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const drawer = ref(false);
const route = useRoute();
const router = useRouter();

const toggleDrawer = () => {
  drawer.value = !drawer.value;
};

router.beforeEach((_to, _from, next) => {
  drawer.value = false;
  next();
});
</script>
