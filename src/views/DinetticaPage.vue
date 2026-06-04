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
  title: 'Dinettica — Netti Architetti | Didattica di Architettura al Politecnico di Bari',
  description: 'Dinettica raccoglie le attività didattiche dei corsi di Composizione e Disegno dell\'Architettura tenuti da Lorenzo Netti al Politecnico di Bari. Esercizi, elaborati e ricerche degli studenti.',
  slug: 'ricerche/dinettica',
  pageType: 'CollectionPage',
  keywords: 'Dinettica, didattica architettura Politecnico Bari, Lorenzo Netti corso architettura, disegno architettura Bari',
  breadcrumbs: [
    { name: 'Home', url: 'https://nettiarchitetti.it' },
    { name: 'Ricerche', url: 'https://nettiarchitetti.it/ricerche' },
    { name: 'Dinettica', url: 'https://nettiarchitetti.it/ricerche/dinettica' }
  ]
}));

http.getRequest('blog/post', {
  project: 'nettiarchitetti.it',
  topics: ['Dinettica']
}, function (data) {
  posts.value = data.posts;
  loading.value = true;
});
</script>
