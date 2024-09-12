<template>
  <Carousel :content="images" />
</template>

<script setup>
  import Carousel from '@/components/Carousel.vue';

  import { ref } from 'vue';
  import http from '@/utils/http';
  import { useRoute } from 'vue-router';

  const images = ref([]);
  const route = useRoute();

  http.getRequest(`post/${route.params.id}`, {
    project: 'nettiarchitetti.it'
  }, function (data) {
    images.value = data.post.files;
  });
</script>
