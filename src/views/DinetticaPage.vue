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
  title: 'Dinettica - Netti Architetti | Ricerca sul Progetto',
  description: 'Dinettica è il percorso di ricerca di Netti Architetti sulla relazione tra forma, funzione e linguaggio nell\'architettura contemporanea.',
  slug: 'ricerche/dinettica',
  breadcrumbs: [
    { name: 'Home', url: 'https://nettiarchitetti.it' },
    { name: 'Ricerche', url: 'https://nettiarchitetti.it/ricerche' },
    { name: 'Dinettica', url: 'https://nettiarchitetti.it/ricerche/dinettica' },
  ],
}));

http.getRequest('blog/post', {
  project: 'nettiarchitetti.it',
  topics: ['Dinettica']
}, function (data) {
  posts.value = data.posts;
  loading.value = true;
});
</script>
