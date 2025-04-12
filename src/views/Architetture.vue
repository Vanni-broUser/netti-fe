<template>
  <ImageGrid v-if="loading" :content="posts" :numCols="3" />
</template>

<script setup>
import { ref } from 'vue'
import { useHead } from '@vueuse/head'
import ImageGrid from '@/components/ImageGrid'
import http from '@/utils/http'
import { generateSeoHead } from '@/utils/seoHelper'

useHead(generateSeoHead({
  title: "Architetture - Netti Architetti | Architettura Contemporanea a Bari",
  description: "Ecco le nostre architetture contemporanee a Bari e in Puglia. Scopri i nostri progetti di architettura.",
  slug: "architetture",
  breadcrumbs: [
    { name: "Home", url: "https://nettiarchitetti.it" },
    { name: "Architetture", url: "https://nettiarchitetti.it/architetture" }
  ]
}))

// Caricamento dati
const posts = ref([])
const loading = ref(false)

http.getRequest('blog/post', {
  project: 'nettiarchitetti.it',
  topics: ['Architetture']
}, function (data) {
  posts.value = data.posts
  loading.value = true
})
</script>
