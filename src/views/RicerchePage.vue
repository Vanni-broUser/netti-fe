<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        md="4"
      >
        <router-link
          class="link"
          to="/ricerche/dinettica"
        >
          <v-img
            :src="dinettica"
            style="width: 100%;"
          />
          <br>
          <p style="color: black;">
            {{ $t('Ricerche.dinettica') }}
          </p>
        </router-link>
        <br>
        <br>
      </v-col>
      <v-col
        cols="12"
        md="4"
      >
        <router-link
          class="link"
          to="/ricerche/extra"
        >
          <v-img
            :src="extra"
            style="width: 100%;"
          />
          <br>
          <p
            v-for="(n, index) in 2"
            :key="index"
            style="color: black;"
          >
            {{ $t(`Ricerche.extraLine${n}`) }}
          </p>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import extra from '@/assets/extra.gif';
import dinettica from '@/assets/dinettica.gif';
import { useHead } from '@vueuse/head';
import { generateSeoHead } from '@/utils/seo';

useHead(generateSeoHead({
  title: 'Ricerche - Netti Architetti | Ricerca Architettonica',
  description: 'I percorsi di ricerca teorica e progettuale di Netti Architetti: Dinettica ed Extra, esplorazioni sul linguaggio contemporaneo dell\'architettura.',
  slug: 'ricerche',
  type: 'CollectionPage',
  breadcrumbs: [
    { name: 'Home', url: 'https://nettiarchitetti.it' },
    { name: 'Ricerche', url: 'https://nettiarchitetti.it/ricerche' },
  ],
}));
</script>
