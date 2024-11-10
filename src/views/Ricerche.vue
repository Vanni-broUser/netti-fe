<template>
  <ResearchLegend v-if="isMobile" style="margin-top: 80px;" />
  <ImageGrid v-if="loading" :content="posts" :numCols="3" style="margin-top: 25px;"/>
</template>

<script setup>
  import ImageGrid from '@/components/ImageGrid';
  import ResearchLegend from '@/components/ResearchLegend';

  import { ref } from 'vue';
  import http from '@/utils/http';
  import { useRoute } from 'vue-router';
  import { setupMobileUtils } from '@/utils/mobile';

  const posts = ref([]);
  const route = useRoute();
  const loading = ref(false);
  const isMobile = setupMobileUtils();

  http.getRequest('blog/post', {
    project: 'nettiarchitetti.it',
    topics: [
      route.path.includes('/extra') ? 'Extra' : 'Dinettica'
    ]
  }, function (data) {
    posts.value = data.posts;
    loading.value = true;
  });
</script>