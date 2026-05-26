<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        md="4"
      >
        <v-img
          src="/chiSiamo/lorenzo_netti.jpg"
          style="height: 200px; width: 200px;"
        />
        <br>
        <p style="color: black; font-size: x-large;">
          Lorenzo Netti
        </p>
        <p
          v-for="(n, index) in 3"
          :key="index"
          style="color: black;"
        >
          {{ $t(`ChiSiamo.lorenzoNettiLine${n}`) }}
        </p>
      </v-col>
      <v-col
        cols="12"
        md="4"
      >
        <v-img
          src="/chiSiamo/gloria_valente.jpg"
          style="height: 200px; width: 200px;"
        />
        <br>
        <p style="color: black; font-size: x-large;">
          Gloria Valente
        </p>
        <p
          v-for="(n, index) in 2"
          :key="index"
          style="color: black;"
        >
          {{ $t(`ChiSiamo.gloriaValenteLine${n}`) }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useHead } from '@vueuse/head';
import { generateSeoHead } from '@/utils/seo';

useHead(generateSeoHead({
  title: 'Chi Siamo - Netti Architetti | Studio di Architettura a Bari',
  description: 'Netti Architetti è uno studio di architettura fondato a Bari. Scopri la storia, la filosofia progettuale e il team dello studio.',
  slug: 'chi-siamo',
  type: 'AboutPage',
  breadcrumbs: [
    { name: 'Home', url: 'https://nettiarchitetti.it' },
    { name: 'Chi Siamo', url: 'https://nettiarchitetti.it/chi-siamo' },
  ],
}));
</script>
