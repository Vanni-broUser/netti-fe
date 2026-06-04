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
  title: 'Ricerche — Netti Architetti | Dinettica e Ricerca sul Design Mediterraneo',
  description: 'Le ricerche di Netti Architetti: Dinettica, le attività didattiche al Politecnico di Bari, ed Extra, esplorazioni sul design, l\'architettura e le città mediterranee contemporanee.',
  slug: 'ricerche',
  pageType: 'CollectionPage',
  keywords: 'ricerca architettura, Dinettica Politecnico Bari, design mediterraneo, architettura contemporanea ricerca',
  breadcrumbs: [
    { name: 'Home', url: 'https://nettiarchitetti.it' },
    { name: 'Ricerche', url: 'https://nettiarchitetti.it/ricerche' }
  ]
}));
</script>
