<template>
  <Carousel mode="detail" :player="true" :content="images" />
  <v-btn class="close-button" icon="mdi-arrow-left" @click="goBack" />
</template>

<script setup>
  import Carousel from '@/components/Carousel.vue';

  import { ref } from 'vue';
  import http from '@/utils/http';
  import { useRoute, useRouter } from 'vue-router';

  const images = ref([]);
  const route = useRoute();
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  http.getRequest(`post/${route.params.id}`, {}, function (data) {
    images.value = data.post.files;
  });
</script>

<style scoped>
.close-button {
  position: absolute;
  top: 45px;
  right: 15px;
  background-color: #ff0000;
  color: white;
  border-radius: 0px;
  width: 25px;
  height: 25px;
}
</style>
