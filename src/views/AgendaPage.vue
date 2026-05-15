<template>
  <v-container>
    <v-row
      v-if="!isMobile"
      style="margin-right: 250px;"
    >
      <v-col cols="8">
        <AgendaItem
          v-if="posts[0]"
          :post="posts[0]"
          :height="600"
        />
      </v-col>
      <v-col cols="4">
        <AgendaItem
          v-if="posts[1]"
          :post="posts[1]"
          :height="200"
        />
        <AgendaItem
          v-if="posts[2]"
          :post="posts[2]"
          :height="200"
        />
      </v-col>
    </v-row>
    <v-row
      v-if="!isMobile"
      style="margin-right: 250px;"
    >
      <v-col
        v-for="(post, index) in posts.slice(3)"
        :key="index"
        cols="4"
      >
        <AgendaItem
          v-if="post"
          :post="post"
          :height="200"
        />
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col
        v-for="(post, index) in posts"
        :key="index"
        cols="12"
        md="12"
      >
        <AgendaItem :post="post" />
        <hr
          v-if="isMobile && posts.indexOf(post) != posts.length - 1"
          class="dotted-hr red"
        >
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
import { useHead } from '@vueuse/head';
import { generateSeoHead } from '@/utils/seo';

useHead(generateSeoHead({
  title: 'Agenda - Netti Architetti | Architettura Contemporanea a Bari',
  description: 'Agenda. Il blog di Netti Architetti.',
  slug: 'agenda',
  breadcrumbs: [
    { name: 'Home', url: 'https://nettiarchitetti.it' },
    { name: 'Agenda', url: 'https://nettiarchitetti.it/agenda' }
  ]
}));

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
