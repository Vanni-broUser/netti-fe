<template>
  <div>
    <v-container>
      <BackButton/>
    </v-container>
    <ImageGrid v-if="loading" :content="posts" :numCols="3"/>
  </div>
</template>

<script setup>
import ImageGrid from '@/components/ImageGrid';

import { ref } from 'vue';
import http from '@/utils/http';
import BackButton from '@/components/BackButton.vue';

const posts = ref([]);
const loading = ref(false);

http.getRequest('blog/post', {
  project: 'nettiarchitetti.it',
  topics: ['Extra']
}, function (data) {
  posts.value = data.posts;
  loading.value = true;
});
</script>
