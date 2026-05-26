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
  title: 'Extra - Netti Architetti | Ricerca Espressiva',
  description: 'Extra è il percorso di ricerca di Netti Architetti oltre i confini della disciplina: sperimentazioni visive e progettuali.',
  slug: 'ricerche/extra',
  breadcrumbs: [
    { name: 'Home', url: 'https://nettiarchitetti.it' },
    { name: 'Ricerche', url: 'https://nettiarchitetti.it/ricerche' },
    { name: 'Extra', url: 'https://nettiarchitetti.it/ricerche/extra' },
  ],
}));

http.getRequest('blog/post', {
  project: 'nettiarchitetti.it',
  topics: ['Extra']
}, function (data) {
  posts.value = data.posts;
  loading.value = true;
});
</script>
