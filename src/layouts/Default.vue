<template>
  <v-app>
    <v-card>
      <v-layout>
        <lateral-menu :modelValue="drawer" @update:modelValue="drawer = $event" />
        <v-main>
          <default-view />
          <v-btn
            icon="mdi-microsoft-xbox-controller-menu"
            @click.stop="drawer = !drawer"
            style="position: absolute; top: 16px; left: 16px; z-index: 3;"
          />
        </v-main>
      </v-layout>
    </v-card>
  </v-app>
</template>

<script setup>
import DefaultView from './View.vue';
import LateralMenu from './LateralMenu.vue';
import { ref } from 'vue';

const drawer = ref(false);
</script>
