<template>
  <ImageGrid v-if="loading" :content="posts" :numCols="4"/>
</template>

<script setup>
  import ImageGrid from '@/components/ImageGrid';

  import { ref } from 'vue';
  import http from '@/utils/http';
  import { randomHeight } from '@/utils/gridUtils';

  const posts = ref([]);
  const loading = ref(false);

  http.getRequest('blog/post', {
    // 'topics': ['Architetture']
  }, function (data) {
    let contents = [];
    // eliminare forEach
    data.posts.forEach(post => {
      contents.push({
        title: post.title,
        // grid options
        height: randomHeight(),
        description: post.subtitle,
        longDescription: post.content,
        src: post.files ? post.files[0] : 'default'
      });
    });
    posts.value = contents;
    loading.value = true;
  });
</script>