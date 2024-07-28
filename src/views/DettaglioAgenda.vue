<template>
  <v-container style="padding-top: 0px;">
    <h1 class="red">
      {{ post.title }}
    </h1>
    <v-img v-if="post.files" :src="post.files[0]" height="500" width="500" />
    <br><VueMarkdown v-if="post.content" :source="post.content" />
  </v-container>
</template>

<script setup>
  import { ref } from 'vue';
  import http from '@/utils/http';
  import { useRoute } from 'vue-router';

  import VueMarkdown from 'vue-markdown-render';

  const post = ref({});
  const route = useRoute();

  http.getRequest(`post/${route.params.id}`, {}, function (data) {
    post.value = data.post;
  });
</script>
