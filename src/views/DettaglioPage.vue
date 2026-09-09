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
  // Con il passaggio ad `article` gli id sono cambiati: un vecchio link risponde
  // "non trovato" e senza questa guardia il carosello farebbe saltare la pagina.
  const files = data?.data?.files || [];

  images.value = files.filter(image => image.type == (isMobile.value ? 'mobile' : 'desktop'));
});
</script>
