<template>
  <v-container style="padding-top: 0px;">
    <p :class="{red: true, 'margin-desktop': !isMobile}">
      {{ post.title }}
    </p>
    <v-breadcrumbs :items="breadcrumbs" style="padding: 0px; margin-top: 20px;" />
    <v-img v-if="post.files" width="800" :src="post.files.find(p => p.type == 'cover').preview" />
    <br><VueMarkdown v-if="post.content" :source="post.content" /><br>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import http from '@/utils/http';
import i18n from '@/plugins/i18n';
import mobile from '@/utils/mobile';
import { useRoute } from 'vue-router';

import VueMarkdown from 'vue-markdown-render';

const post = ref({});
const route = useRoute();
const breadcrumbs = ref([]);
const isMobile = mobile.setupMobileUtils();

http.getRequest(`blog/post/${route.params.id}`, {
  project: 'nettiarchitetti.it'
}, function (data) {
  post.value = data.post;
  breadcrumbs.value = [
    {
      title: 'Home',
      disabled: false,
      href: '/'
    }, {
      title: i18n.global.t('Menu.pagina5'),
      disabled: false,
      href: '/agenda'
    }, {
      title: data.post.title,
      disabled: true
    }
  ];
});
</script>

<style scoped>
.margin-desktop {
  margin-right: 500px;
}
</style>
