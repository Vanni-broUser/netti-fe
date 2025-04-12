<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <v-img src="/chiSiamo/lorenzo_netti.jpg" style="height: 200px; width: 200px;" />
        <br>
        <p style="color: black; font-size: x-large;">Lorenzo Netti</p>
        <p style="color: black;" v-for="n in 3">
          {{ $t(`ChiSiamo.lorenzoNettiLine${n}`) }}
        </p>
      </v-col>
      <v-col cols="12" md="4">
        <v-img src="/chiSiamo/gloria_valente.jpg" style="height: 200px; width: 200px;" />
        <br>
        <p style="color: black; font-size: x-large;">Gloria Valente</p>
        <p style="color: black;" v-for="n in 2">
          {{ $t(`ChiSiamo.gloriaValenteLine${n}`) }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useHead } from '@vueuse/head'
import { generateSeoHead } from '@/utils/seoHelper'

useHead(generateSeoHead({
  title: "Chi Siamo - Netti Architetti | Architettura Contemporanea a Bari",
  description: "Chi Siamo. Scopri chi siamo e la nostra storia.",
  slug: "chi-siamo",
  breadcrumbs: [
    { name: "Home", url: "https://nettiarchitetti.it" },
    { name: "Chi Siamo", url: "https://nettiarchitetti.it/chi-siamo" }
  ]
}))
</script>