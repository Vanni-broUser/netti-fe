<template>
  <v-btn
    v-if="!isMobile"
    variant="text"
    color="white"
    icon="mdi-arrow-left"
    @click.stop="router.back()"
    class="background-red square-btn detail-button"
  />
</template>

<script setup>
import { useRouter } from 'vue-router';
import mobile from '@/utils/mobile';

const router = useRouter();
const isMobile = mobile.setupMobileUtils();

</script>

<style>
.square-btn {
  width: 25px;
  height: 25px;
  border-radius: 0px;
}
</style>