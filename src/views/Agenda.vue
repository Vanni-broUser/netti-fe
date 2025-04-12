<template>
  <v-container>
    <v-row v-if="!isMobile" style="margin-right: 250px;">
      <v-col cols="8">
        <AgendaItem :post="posts[0]" :height="600" />
      </v-col>
      <v-col cols="4">
        <AgendaItem :post="posts[1]" :height="200" />
        <AgendaItem :post="posts[2]" :height="200" />
      </v-col>
    </v-row>
    <v-row v-if="!isMobile" style="margin-right: 250px;">
      <v-col cols="4" v-for="post in posts.slice(3)">
        <AgendaItem :post="post" :height="200" />
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12" md="12" v-for="post in posts">
        <AgendaItem :post="post" />
        <hr class="dotted-hr red" v-if="isMobile && posts.indexOf(post) != posts.length - 1">
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import http from '@/utils/http';
import { setupMobileUtils } from '@/utils/mobile';

import AgendaItem from '@/components/AgendaItem';

const posts = ref([]);
const isMobile = setupMobileUtils();
import { useHead } from '@vueuse/head'
import { generateSeoHead } from '@/utils/seoHelper'

useHead(generateSeoHead({
  title: "Agenda - Netti Architetti | Architettura Contemporanea a Bari",
  description: "Agenda. Il blog di Netti Architetti.",
  slug: "agenda",
  breadcrumbs: [
    { name: "Home", url: "https://nettiarchitetti.it" },
    { name: "Agenda", url: "https://nettiarchitetti.it/agenda" }
  ]
}))

http.getRequest('blog/post', {
  project: 'nettiarchitetti.it',
  topics: ['Agenda']
}, function (data) {
  posts.value = data.posts;
});
</script>

<style scoped>
.dotted-hr {
  border: 3px dotted;
  border-top: none;
  height: 0;
  margin: 20px 0;
  width: 100%;
}
</style>
