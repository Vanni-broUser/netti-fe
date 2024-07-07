<template>
  <v-row>
    <v-col cols="12" md="6">
      <Map />
    </v-col>
    <v-col cols="12" md="6">
      <Contacts />
    </v-col>
  </v-row>
</template>

<script setup>
  import Map from '@/components/Map';
  import Contacts from '@/components/Contacts';
</script>
