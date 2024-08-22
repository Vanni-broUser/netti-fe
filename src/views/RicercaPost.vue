<template>
  <div style="margin-left: 338px;">
    <v-container>
      <h2>Ricerca per anno: {{ route.query.value }}</h2>
    </v-container>
    <ImageGrid v-if="loading" :content="posts" :numCols="3"/>
  </div>
</template>

<script setup>
  import ImageGrid from '@/components/ImageGrid';

  import { ref } from 'vue';
  import http from '@/utils/http';
  import { useRoute } from 'vue-router';

  const posts = ref([]);
  const route = useRoute();
  const loading = ref(false);

  http.getRequest('blog/post', {
    'enrichment_name': route.query.name,
    'enrichment_value': route.query.value
  }, function (data) {
    posts.value = data.posts;
    loading.value = true;
  });
</script>
