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
  title: 'Progetti - Netti Architetti | Progettazione Architettonica',
  description: 'I progetti di architettura di Netti Architetti: concorsi, progettazioni in corso e proposte innovative per il territorio italiano.',
  slug: 'progetti',
  type: 'CollectionPage',
  keywords: ['progetti architettura', 'concorsi architettura', 'progettazione Bari'],
  breadcrumbs: [
    { name: 'Home', url: 'https://nettiarchitetti.it' },
    { name: 'Progetti', url: 'https://nettiarchitetti.it/progetti' },
  ],
}));
http.getRequest('blog/post', {
  project: 'nettiarchitetti.it',
  topics: ['Progetti']
}, function (data) {
  posts.value = data.posts;
  loading.value = true;
});
</script>
