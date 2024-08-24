<template>
  <v-row>
    <v-col cols="12" md="5">
      <v-container>
        <v-typography style="color: black;">
          Contatti di prova riga 1
          <br>
          Contatti di prova riga 2
          <br>
          Contatti di prova riga 3
        </v-typography>
        <br><br><br>
        <Contacts/>
      </v-container>
    </v-col>
    <v-col cols="12" md="5">
      <Map />
    </v-col>
  </v-row>
</template>

<script setup>
  import Map from '@/components/Map';
  import Contacts from '@/components/Contacts';
</script>
