<template>
  <v-container style="padding-top: 0px;">
    <v-row>
      <v-col cols="12" md="4" v-for="post in posts">
        <router-link :to="`/agenda/${post.id}`" class="link">
          <v-card>
            <v-img :src="post.files[0]" />
            <v-card-title>
              {{ post.title }}
            </v-card-title>
            <v-card-text>
              {{ post.content }}
            </v-card-text>
          </v-card>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
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
  .link {
    text-decoration: none;
  }
</style>
