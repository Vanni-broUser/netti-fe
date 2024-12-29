<template>
  <ImageGrid v-if="loading" :content="posts" :numCols="3"/>
</template>

<script setup>
import ImageGrid from '@/components/ImageGrid';

import { ref } from 'vue';
import http from '@/utils/http';

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
