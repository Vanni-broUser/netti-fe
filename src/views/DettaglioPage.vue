<template>
  <Carousel
    :content="images"
    :not-scroll="true"
  />
</template>

<script setup>
import Carousel from '@/components/PostCarousel.vue';

import { ref } from 'vue';
import { useHead } from '@vueuse/head';
import { useRoute } from 'vue-router';
import http from '@/utils/http';
import { setupMobileUtils } from '@/utils/mobile';
import { generateSeoHead } from '@/utils/seo';

const images = ref([]);
const route = useRoute();

const { patch: patchHead } = useHead({});

http.getRequest(`blog/post/${route.params.id}`, {
  project: 'nettiarchitetti.it'
}, function (data) {
  const post = data.post;

  patchHead(
    generateSeoHead({
      title: `${post.title} - Netti Architetti`,
      description:
        post.excerpt ||
        post.content?.replace(/[#*_`]/g, '').slice(0, 155).trim() ||
        `Progetto ${post.title} di Netti Architetti, studio di architettura a Bari.`,
      slug: `dettaglio/${route.params.id}`,
      type: 'BlogPosting',
      breadcrumbs: [
        { name: 'Home', url: 'https://nettiarchitetti.it' },
        { name: post.title, url: `https://nettiarchitetti.it/dettaglio/${route.params.id}` },
      ],
    })
  );
});
</script>
