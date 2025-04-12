<template>
  <ImageGrid v-if="loading" :content="posts" :numCols="3" />
</template>

<script setup>
import ImageGrid from '@/components/ImageGrid';

import { ref } from 'vue';
import http from '@/utils/http';

const posts = ref([]);
const loading = ref(false);
import { useHead } from '@vueuse/head';
import { generateSeoHead } from '@/utils/seoHelper'

useHead(generateSeoHead({
  title: "Dinettica - Netti Architetti | Architettura Contemporanea a Bari",
  description: "Dinettica. Scopri i nostri progetti didattici di architettura.",
  slug: "dinettica",
  breadcrumbs: [
    { name: "Home", url: "https://nettiarchitetti.it" },
    { name: "Dinettica", url: "https://nettiarchitetti.it/dinettica" }
  ]
}))

http.getRequest('blog/post', {
  project: 'nettiarchitetti.it',
  topics: ['Dinettica']
}, function (data) {
  posts.value = data.posts;
  loading.value = true;
});
</script>
