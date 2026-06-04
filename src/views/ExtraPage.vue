<template>
  <ImageGrid
    v-if="loading"
    :content="posts"
    :num-cols="3"
  />
</template>

<script setup>
import ImageGrid from '@/components/ImageGrid';

import { ref } from 'vue';
import http from '@/utils/http';

const posts = ref([]);
const loading = ref(false);
import { useHead } from '@vueuse/head';
import { generateSeoHead } from '@/utils/seo';

useHead(generateSeoHead({
  title: 'Extra — Netti Architetti | Ricerca su Design e Architettura Mediterranea',
  description: 'Extra: esplorazioni di Netti Architetti su design, cambiamenti nell\'architettura e nelle città mediterranee. Video, fotografie e immagini di una ricerca autonoma sui nuovi linguaggi del progetto.',
  slug: 'ricerche/extra',
  pageType: 'CollectionPage',
  keywords: 'design mediterraneo, architettura città mediterranee, fotografia architettura, ricerca progettuale',
  breadcrumbs: [
    { name: 'Home', url: 'https://nettiarchitetti.it' },
    { name: 'Ricerche', url: 'https://nettiarchitetti.it/ricerche' },
    { name: 'Extra', url: 'https://nettiarchitetti.it/ricerche/extra' }
  ]
}));

http.getRequest('blog/post', {
  project: 'nettiarchitetti.it',
  topics: ['Extra']
}, function (data) {
  posts.value = data.posts;
  loading.value = true;
});
</script>
