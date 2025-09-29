<template>
  <Carousel :content="images" :notScroll="true" />
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

http.getRequest(`blog/post/${route.params.id}`, {
  project: 'nettiarchitetti.it'
}, function (data) {
  images.value = isMobile.value ? data.post.mobile_files : data.post.desktop_files;
});
</script>
