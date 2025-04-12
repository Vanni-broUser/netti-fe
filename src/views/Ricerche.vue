<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <router-link class="link" to="/ricerche/dinettica">
          <v-img :src="dinettica" style="width: 100%;" />
          <br>
          <p style="color: black;">
            {{ $t('Ricerche.dinettica') }}
          </p>
        </router-link>
        <br>
        <br>
      </v-col>
      <v-col cols="12" md="4">
        <router-link class="link" to="/ricerche/extra">
          <v-img :src="extra" style="width: 100%;" />
          <br>
          <p style="color: black;" v-for="n in 2">
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
import { useHead } from '@vueuse/head'
import { generateSeoHead } from '@/utils/seoHelper'

useHead(generateSeoHead({
  title: "Ricerche - Netti Architetti | Architettura Contemporanea a Bari",
  description: "Ricerche. La parola chiave è ricerca.",
  slug: "ricerca",
  breadcrumbs: [
    { name: "Home", url: "https://nettiarchitetti.it" },
    { name: "Ricerche", url: "https://nettiarchitetti.it/ricerche" }
  ]
}))
</script>
