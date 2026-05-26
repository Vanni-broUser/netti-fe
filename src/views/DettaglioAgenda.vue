<template>
  <v-container style="padding-top: 0px;">
    <p :class="{red: true, 'margin-desktop': !isMobile}">
      {{ post.title }}
    </p>
    <v-breadcrumbs
      :items="breadcrumbs"
      style="padding: 0px; margin-top: 20px;"
    />
    <v-img
      v-if="post.files"
      width="800"
      :src="post.files.find(p => p.type == 'cover')?.preview"
    />
    <br><VueMarkdown
      v-if="post.content"
      :source="post.content"
    /><br>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useHead } from '@vueuse/head';

import http from '@/utils/http';
import i18n from '@/plugins/i18n';
import mobile from '@/utils/mobile';
import { generateSeoHead } from '@/utils/seo';
import VueMarkdown from 'vue-markdown-render';

const post = ref({});
const route = useRoute();
const breadcrumbs = ref([]);
const isMobile = mobile.setupMobileUtils();

const { patch: patchHead } = useHead({});

http.getRequest(
  `blog/post/${route.params.id}`,
  { project: 'nettiarchitetti.it' },
  (data) => {
    post.value = data.post;

    breadcrumbs.value = [
      { title: 'Home', disabled: false, href: '/' },
      {
        title: i18n.global.t('Menu.pagina5'),
        disabled: false,
        href: '/agenda',
      },
      { title: data.post.title, disabled: true },
    ];

    patchHead(
      generateSeoHead({
        title: `${data.post.title} - Netti Architetti`,
        description:
          data.post.excerpt ||
          data.post.content?.replace(/[#*_`]/g, '').slice(0, 155).trim(),
        slug: `agenda/${route.params.id}`,
        type: 'BlogPosting',
        datePublished: data.post.created_at,
        dateModified: data.post.updated_at,
        breadcrumbs: [
          { name: 'Home', url: 'https://nettiarchitetti.it' },
          { name: 'Agenda', url: 'https://nettiarchitetti.it/agenda' },
          {
            name: data.post.title,
            url: `https://nettiarchitetti.it/agenda/${route.params.id}`,
          },
        ],
      })
    );
  }
);
</script>

<style scoped>
.margin-desktop {
  margin-right: 500px;
}
</style>
