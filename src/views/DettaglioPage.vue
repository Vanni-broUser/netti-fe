<template>
  <Carousel
    :content="images"
    :not-scroll="true"
  />
</template>

<script setup>
import Carousel from '@/components/PostCarousel.vue';

import { ref } from 'vue';
import http from '@/utils/http';
import { useRoute } from 'vue-router';
import { setupMobileUtils } from '@/utils/mobile';

const images = ref([]);
const route = useRoute();
const isMobile = setupMobileUtils();

http.getRequest(`article/${route.params.id}`, {
  project: 'nettiarchitetti.it'
}, function (data) {
  images.value = isMobile.value ? data.data.files.filter(image => image.type == 'mobile') : data.data.files.filter(image => image.type == 'desktop');
});
</script>
