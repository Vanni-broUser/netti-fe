<template>
  <v-row>
    <v-col
      cols="12"
      md="5"
    >
      <v-container>
        <p style="color: black;">
          Netti Architetti Associazione Professionale
          <br>
          Piazza Giuseppe Massari 36, Bari
          <br>
          Identificativo IVA IT04211070729
        </p>
        <br><br><br>
        <ContactsItem :class="{'mt-10': !isMobile}" />
      </v-container>
    </v-col>
    <v-col
      cols="12"
      md="5"
    >
      <MapItem />
    </v-col>
  </v-row>
</template>

<script setup>
import MapItem from '@/components/MapItem';
import { generateSeoHead } from '@/utils/seo';
import ContactsItem from '@/components/ContactsItem';

import mobile from '@/utils/mobile';

const isMobile = mobile.setupMobileUtils();

useHead(generateSeoHead({
  title: 'Contatti — Netti Architetti | Studio di Architettura a Bari',
  description: 'Contatta Netti Architetti: siamo in Piazza Giuseppe Massari 36, Bari. Telefono +39 080 524 1767, email studio@nettiarchitetti.it. Ricevimento su appuntamento.',
  slug: 'contatti',
  pageType: 'ContactPage',
  keywords: 'contatti Netti Architetti, studio architettura Bari contatti, architetto Bari telefono',
  breadcrumbs: [
    { name: 'Home', url: 'https://nettiarchitetti.it' },
    { name: 'Contatti', url: 'https://nettiarchitetti.it/contatti' }
  ]
}));
</script>
