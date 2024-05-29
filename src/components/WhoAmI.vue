<template>
  <v-container>
    <h1 :style="{ color: data.primaryColor }">
      Chi sono
    </h1>
    <v-row>
      <v-col cols="12" sm="4">
        <center>
          <v-avatar image="/avatar.jpeg" size="200" />
        </center>
      </v-col>
      <v-col cols="12" sm="8" class="body_text_container">
        <div>
          <h1>Caterina</h1>
          L'obiettivo che mi sono posta, aprendo questa casa vacanze, è quello di voler contribuire, nel mio piccolo, alla conoscenza della nostra regione e alla diffusione delle nostre tradizioni,
          ospitando il maggior numero di persone. Nonostante quella dell'host non sia la mia principale attività, ho iniziato questa avventura con grande determinazione e Amore.
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { storeToRefs } from 'pinia';
  import { useDataStore } from '@/stores/data';

  const dataStore = useDataStore();
  const { data } = storeToRefs(dataStore);
</script>

<style scoped>
  .body_text_container {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
</style>
