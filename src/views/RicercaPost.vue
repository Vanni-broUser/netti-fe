<template>
  <div :class="{ margin: !isMobile }">
    <div style="font-size: large; margin-left: 13px;">
      {{ $t('RicercaPost.header') }}:
      <span v-for="filter in filters">
        <span v-if="route.query[filter]">
          {{ `${route.query[filter]} ` }}
        </span>
      </span>
      <br><br>
    </div>
    <ImageGrid v-if="loading" :content="posts" :numCols="3"/>
  </div>
</template>

<script setup>
import ImageGrid from '@/components/ImageGrid';

import { ref } from 'vue';
import http from '@/utils/http';
import { useRoute } from 'vue-router';
import { setupMobileUtils } from '@/utils/mobile';

const posts = ref([]);
const route = useRoute();
const loading = ref(false);
const isMobile = setupMobileUtils();

const filters = ['text', 'year', 'place'];
let args = { project: 'nettiarchitetti.it' };
for (const filter of filters) {
  if (route.query[filter])
    args[filter] = route.query[filter];
}

http.getRequest('blog/post', args, function (data) {
  posts.value = data.posts;
  loading.value = true;
});
</script>

<style scoped>
.margin {
  margin-left: 305px;
}
</style>
