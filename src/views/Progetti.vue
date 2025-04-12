<template>
  <ImageGrid v-if="loading" :content="posts" :numCols="3" />
</template>

<script setup>
import ImageGrid from '@/components/ImageGrid';

import { ref } from 'vue';
import http from '@/utils/http';

const posts = ref([]);
const loading = ref(false);
import { useHead } from '@vueuse/head'
import { generateSeoHead } from '@/utils/seoHelper'

useHead(generateSeoHead({
  title: "Progetti - Netti Architetti | Architettura Contemporanea a Bari",
  description: "Progetti. Scopri i nostri progetti di architettura contemporanea a Bari e in Puglia.",
  slug: "progetti",
  breadcrumbs: [
    { name: "Home", url: "https://nettiarchitetti.it" },
    { name: "Progetti", url: "https://nettiarchitetti.it/progetti" }
  ]
}))

http.getRequest('blog/post', {
  project: 'nettiarchitetti.it',
  topics: ['Progetti']
}, function (data) {
  posts.value = data.posts;
  loading.value = true;
});
</script>
