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

http.getRequest('article', {
  project: 'nettiarchitetti.it',
  categories: ['Architetture']
}, function (data) {
  posts.value = data.data || [];
  loading.value = true;
});
</script>
