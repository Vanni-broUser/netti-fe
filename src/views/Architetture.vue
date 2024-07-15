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
  }, function (data) {
    let contents = [];
    data.posts.forEach(post => {
      contents.push({
        title: post.title,
        height: randomHeight(),
        description: post.subtitle,
        src: post.files ? post.files[0] : 'default'
      });
    });
    posts.value = contents;
    loading.value = true;
  });
</script>