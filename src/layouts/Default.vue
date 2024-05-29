<template>
  <v-app>
    <v-layout>
      <lateral-menu :modelValue="drawer" @update:modelValue="drawer = $event" />
      <v-main>
        <default-view />
        <div class="second_layer" v-if="!drawer">
          <v-btn
            color="red"
            icon="mdi-microsoft-xbox-controller-menu"
            @click.stop="drawer = !drawer"
          />
          <p class="title"><b>netti</b>architetti</p>
        </div>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup>
  import DefaultView from './View.vue';
  import LateralMenu from './LateralMenu.vue';
  import { ref } from 'vue';

  const drawer = ref(false);
</script>

<style scoped>
  .second_layer {
    position: absolute;
    top: 16px;
    left: 16px;
    z-index: 3;
    display: flex;
  }
  .title {
    margin-left: 20px;
    color: white;
    font-size: 35px;
  }
</style>
