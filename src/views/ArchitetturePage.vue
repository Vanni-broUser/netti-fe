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
import { seoFor } from '@/utils/seo.routes';

useHead(generateSeoHead(seoFor('/architetture')));

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
