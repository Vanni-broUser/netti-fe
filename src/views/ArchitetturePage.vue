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
  title: 'Architetture — Netti Architetti | Progetti di Architettura a Bari e in Puglia',
  description: 'Scopri le architetture realizzate da Netti Architetti: residenze, edifici pubblici, chiese e scuole a Bari, in Puglia e in tutta Italia. Progettazione contemporanea con attenzione al contesto.',
  slug: 'architetture',
  pageType: 'CollectionPage',
  keywords: 'architetture Bari, progetti architettonici Puglia, residenze contemporanee, edifici pubblici, studio architettura Bari',
  breadcrumbs: [
    { name: 'Home', url: 'https://nettiarchitetti.it' },
    { name: 'Architetture', url: 'https://nettiarchitetti.it/architetture' }
  ]
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
