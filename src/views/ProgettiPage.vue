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
import { seoFor } from '@/utils/seo.routes';

useHead(generateSeoHead(seoFor('/progetti')));

http.getRequest('article', {
  project: 'nettiarchitetti.it',
  categories: ['Progetti']
}, function (data) {
  posts.value = data.data || [];
  loading.value = true;
});
</script>
