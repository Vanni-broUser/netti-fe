<template>
  <v-row>
    <v-col cols="12" md="5">
      <v-container>
        <p style="color: black;">
          Contatti di prova riga 1
          <br>
          Contatti di prova riga 2
          <br>
          Contatti di prova riga 3
        </p>
        <br><br><br>
        <Contacts :class="{'mt-10': !isMobile}"/>
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

  import mobile from '@/utils/mobile';

  const isMobile = mobile.setupMobileUtils();
</script>
