<template>
  <div class="container">
    <div class="second_layer">
      <router-link to="/" class="link">
        <p v-if="alwaysMenu" class="black title"><b class="red">netti</b>architetti</p>
        <p v-else class="white title"><b>netti</b>architetti</p>
      </router-link>
      <v-btn
        v-if="!alwaysMenu || isMobile"
        variant="text"
        color="white"
        icon="mdi-reorder-horizontal"
        @click.stop="emits('toggleDrawer')"
        :class="{
          'background-red square-btn': true,
          'mobile-button': isMobile,
          'home-desktop-btn': !isMobile
        }"
      />
      <v-btn
        v-if="details"
        variant="text"
        color="white"
        icon="mdi-arrow-left"
        @click.stop="router.back()"
        :class="{
          'background-red square-btn': true,
          'mobile-button-second': isMobile,
          'detail-desktop-btn': !isMobile
        }"
      />
      <p v-if="year && !isMobile" class="white year">{{ new Date().getFullYear() }}</p>
    </div>
  </div>
</template>

<script setup>
  import mobile from '@/utils/mobile';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const isMobile = mobile.setupMobileUtils();

  const emits = defineEmits(['toggleDrawer']);

  const { props } = defineProps({
    year: Boolean,
    alwaysMenu: Boolean,
    details: Boolean
  });
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
  width: 25px;
  height: 25px;
  border-radius: 0px;
  margin-top: -5px;
}

.home-desktop-btn {
  margin-left: 15px;
}

.detail-desktop-btn {
  position: fixed;
  top: 50px;
  right: 27px;
}

.mobile-button {
  position: fixed;
  right: 15px;
}

.mobile-button-second {
  position: fixed;
  right: 50px;
}

.year {
  font-size: 40px;
  margin-left: 25px;
}
</style>
