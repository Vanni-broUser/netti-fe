<template>
  <div class="second_layer">
    <router-link to="/" class="title-link">
      <p class="title v-elevation-3"><b>netti</b>architetti</p>
    </router-link>
    <v-btn color="#ff0000" icon="mdi-reorder-horizontal" @click.stop="emits('toggleDrawer')" class="square-btn" small />
    <p v-if="!isMobile && year" class="year v-elevation-3"><b>2024</b></p>
  </div>
</template>

<script setup>
import mobile from '@/utils/mobile';

const isMobile = mobile.setupMobileUtils();

const emits = defineEmits(['toggleDrawer']);

const { year } = defineProps(['year']);
</script>

<style scoped>
.second_layer {
  position: fixed;
  top: 16px;
  left: 16px;
  z-index: 3;
  display: flex;
  align-items: center;
}

.title {
  margin-right: 10px;
  color: white;
  font-size: 40px;
  padding: 10px;
  padding-top: 18px;
  border-radius: 4px;
}

.square-btn {
  width: 25px;
  height: 25px;
  border-radius: 0px;
  min-width: 25px;
  min-height: 25px;
  margin: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.year {
  margin-left: 10px;
  color: white;
  font-size: 35px;
  padding: 10px;
  padding-top: 20px;
  border-radius: 4px;
  font-weight: 200;
  display: flex;
  align-items: center;
}

.title-link {
  text-decoration: none;
}
</style>
