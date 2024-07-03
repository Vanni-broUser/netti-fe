<template>
  <div class="second_layer">
    <router-link to="/" class="title-link">
      <span class="black title" v-if="alwaysMenu"><b class="red">netti</b>architetti</span>
      <p class="white title" v-else><b>netti</b>architetti</p>
    </router-link>
    <v-btn v-if="!alwaysMenu || isMobile" color="#ff0000" icon="mdi-reorder-horizontal" @click.stop="emits('toggleDrawer')" class="square-btn" small />
    <p v-if="year && !isMobile" class="white year"><b>2024</b></p>
  </div>
</template>

<script setup>
import mobile from '@/utils/mobile';

const isMobile = mobile.setupMobileUtils();

const emits = defineEmits(['toggleDrawer']);

const { year, alwaysMenu } = defineProps(['year', 'alwaysMenu']);
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
