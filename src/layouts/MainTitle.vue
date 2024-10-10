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
      <router-link to="/" class="link">
        <p v-if="alwaysMenu" :class="{
          'black title': true,
          'always-menu-position': !isMobile
        }"><b class="red">netti</b>architetti</p>
        <p v-else :class="{
          'white title': true,
          'detail-position': details
        }"><b>netti</b>architetti</p>
      </router-link>
    </div>
  </div>
</template>

<script setup>
  import mobile from '@/utils/mobile';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const isMobile = mobile.setupMobileUtils();

  const emits = defineEmits(['toggleDrawer']);
  const props = defineProps({
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
    width: 100%;
    display: flex;
    align-items: center;
  }

  .title {
    position: fixed;
    font-size: 40px;
    left: 45px;
  }

  .square-btn {
    width: 25px;
    height: 25px;
    border-radius: 0px;
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
</style>
