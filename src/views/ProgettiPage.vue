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
  title: 'Progetti — Netti Architetti | Progettazione Architettonica a Bari',
  description: 'I progetti di Netti Architetti: concorsi, studi preliminari e proposte per la trasformazione del territorio. Architettura contemporanea a Bari e in Puglia tra innovazione e identità dei luoghi.',
  slug: 'progetti',
  pageType: 'CollectionPage',
  keywords: 'progetti architettura Bari, concorsi architettura, progettazione urbana Puglia, studi architettonici',
  breadcrumbs: [
    { name: 'Home', url: 'https://nettiarchitetti.it' },
    { name: 'Progetti', url: 'https://nettiarchitetti.it/progetti' }
  ]
}));

http.getRequest('blog/post', {
  project: 'nettiarchitetti.it',
  topics: ['Progetti']
}, function (data) {
  posts.value = data.posts;
  loading.value = true;
});
</script>
