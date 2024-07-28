<template>
  <div class="container">
    <div class="second_layer">
      <router-link to="/" class="title-link">
        <p v-if="alwaysMenu" class="black title"><b class="red">netti</b>architetti</p>
        <p v-else class="white title"><b>netti</b>architetti</p>
      </router-link>
      <v-btn v-if="!alwaysMenu || isMobile" variant="text" color="white" icon="mdi-reorder-horizontal" @click.stop="emits('toggleDrawer')" class="square-btn" />
      <p v-if="year && !isMobile" class="white year">2024</p>
    </div>
  </div>
</template>

<script setup>
  import mobile from '@/utils/mobile';

  const isMobile = mobile.setupMobileUtils();

  const emits = defineEmits(['toggleDrawer']);

  const { year, alwaysMenu } = defineProps(['year', 'alwaysMenu']);
</script>

<style scoped>
.container {
  z-index: 3;
  position: fixed;
}

.second_layer {
  position: fixed;
  top: 30px;
  left: 15px;
  display: flex;
  align-items: center;
}

.title {
  font-size: 40px;
}

.square-btn {
  background-color: red;
  width: 25px;
  height: 25px;
  border-radius: 0px;
  margin-top: -5px;
  margin-left: 15px;
}

.year {
  font-size: 40px;
  margin-left: 15px;
}

.title-link {
  text-decoration: none;
}
</style>
