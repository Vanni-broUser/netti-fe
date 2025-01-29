<template>
  <div class="container">
    <div class="second_layer">
      <v-btn
        v-if="!alwaysMenu || isMobile"
        variant="text"
        color="white"
        icon="mdi-reorder-horizontal"
        @click.stop="emits('toggleDrawer')"
        class="background-red square-btn main-button"
      />
      <v-btn
        v-if="details"
        variant="text"
        color="white"
        icon="mdi-arrow-left"
        @click.stop="router.back()"
        class="background-red square-btn detail-button"
      />
      <v-btn
        v-if="(route.path.includes('ricerche/') && alwaysMenu)"
        variant="text"
        color="white"
        icon="mdi-arrow-left"
        @click.stop="router.back()"
        :class="isMobile ? 'background-red square-btn detail-button': 'background-red desktop-back-button'"
      />
      <router-link to="/" class="link">
        <p v-if="alwaysMenu" :class="{
          'black title': true,
          'always-menu-position': !isMobile,
          'detail-position': isMobile && route.path.includes('ricerche/')
        }">
          <b class="red">netti</b>architetti
        </p>
        <p v-else-if="lateralMenu || !route.path.includes('portfolio')" :class="{
          'white title': true,
          'detail-position': details,
        }"> 
          <b>netti</b>architetti
      </p>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import mobile from '@/utils/mobile';
import { useRouter, useRoute } from 'vue-router';

const route = useRoute();
const router = useRouter();
const isMobile = mobile.setupMobileUtils();

const emits = defineEmits(['toggleDrawer']);
const props = defineProps({
  alwaysMenu: Boolean,
  details: Boolean,
  lateralMenu: Boolean
});
</script>

<style scoped>
.container {
  z-index: 3;
  position: fixed;
}

.square-btn {
  width: 25px;
  height: 25px;
  border-radius: 0px;
}

.second_layer {
  position: fixed;
  top: 30px;
  width: 100%;
  display: flex;
  align-items: center;
}

.title {
  position: fixed;
  font-size: 40px;
  left: 50px;
}

.main-button {
  position: fixed;
  left: 15px;
  top: 45px;
}

.detail-button {
  position: fixed;
  left: 50px;
  top: 45px;
}

.detail-position {
  margin-left: 40px;
}

.always-menu-position {
  left: 15px;
}

.desktop-back-button {
  position: fixed;
  left: 318px;
  top: 45px;
  width: 25px;
  height: 25px;
  border-radius: 0px;
}
</style>
