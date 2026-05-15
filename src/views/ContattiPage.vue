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
import ContactsItem from '@/components/ContactsItem';

import mobile from '@/utils/mobile';

const isMobile = mobile.setupMobileUtils();
</script>
