<template>
  <ImageGrid
    v-if="loading"
    :content="posts"
    :num-cols="3"
  />
</template>

<script setup>
import { ref } from 'vue';
import { useHead } from '@vueuse/head';
import ImageGrid from '@/components/ImageGrid';
import http from '@/utils/http';
import { generateSeoHead } from '@/utils/seo';

useHead(generateSeoHead({
  title: 'Architetture - Netti Architetti | Opere Realizzate',
  description: 'Le opere di architettura realizzate da Netti Architetti: edifici residenziali, religiosi, scolastici e pubblici in Italia.',
  slug: 'architetture',
  type: 'CollectionPage',
  keywords: ['architetture realizzate', 'opere architettoniche', 'edifici Bari', 'architettura residenziale'],
  breadcrumbs: [
    { name: 'Home', url: 'https://nettiarchitetti.it' },
    { name: 'Architetture', url: 'https://nettiarchitetti.it/architetture' },
  ],
}));
// Caricamento dati
const posts = ref([]);
const loading = ref(false);

http.getRequest('blog/post', {
  project: 'nettiarchitetti.it',
  topics: ['Architetture']
}, function (data) {
  posts.value = data.posts;
  loading.value = true;
});
</script>
