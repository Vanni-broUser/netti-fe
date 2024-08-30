<template>
  <div :class="{ margin: !isMobile }">
    <v-container>
      <h2>
        {{ $t(`SearchCard.titleCard${capitalize(route.query.name)}`) }}:
        {{ route.query.value }}
      </h2>
    </v-container>
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

  const args = {};
  if (route.query.name == 'text')
    args.title = route.query.value;
  else {
    args.enrichment_name = route.query.name;
    args.enrichment_value = route.query.value;
    if (route.query.name == 'place')
      args.enrichment_like = true;
  }

  http.getRequest('blog/post', args, function (data) {
    posts.value = data.posts;
    loading.value = true;
  });

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
</script>

<style scoped>
  .margin {
    margin-left: 338px;
  }
</style>
