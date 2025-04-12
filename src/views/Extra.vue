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
  title: "Extra - Netti Architetti | Architettura Contemporanea a Bari",
  description: "Extra. Scopri i nostri progetti bonus.",
  slug: "extra",
  breadcrumbs: [
    { name: "Home", url: "https://nettiarchitetti.it" },
    { name: "Extra", url: "https://nettiarchitetti.it/extra" }
  ]
}))

http.getRequest('blog/post', {
  project: 'nettiarchitetti.it',
  topics: ['Extra']
}, function (data) {
  posts.value = data.posts;
  loading.value = true;
});
</script>
