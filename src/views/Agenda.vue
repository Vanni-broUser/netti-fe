<template>
    <v-row style="margin-right: 5px;">
      <v-col cols="12" md="4" v-for="post in posts">
        <router-link :to="`/agenda/${post.id}`" class="link">
          <v-card height="560">
            <v-img :src="post.files[0]" height="400" />
            <v-card-text>
              <p class="red truncate-title" style="font-size: x-large;">{{ post.title }}</p>
              <br><p class="truncate-text">{{ post.content }}</p>
            </v-card-text>
          </v-card>
        </router-link>
      </v-col>
    </v-row>
</template>

<script setup>
  import { ref } from 'vue';
  import http from '@/utils/http';

  const posts = ref([]);

  http.getRequest('blog/post', {
    'topics': ['Agenda']
  }, function (data) {
    posts.value = data.posts;
  });
</script>

<style scoped>
  .truncate-text {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    max-height: 3.9em;
    line-height: 1.5em;
  }

  .truncate-title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    max-height: 4.5em;
    line-height: 1.0em;
  }
</style>
