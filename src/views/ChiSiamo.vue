<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <h1>Lorenzo Netti</h1>
        <v-img src="/chiSiamo/lorenzo_netti.jpg" style="height: 200px; width: 200px;" />
        <br>
        <v-typography style="color: black;" v-html="$t('ChiSiamo.lorenzoNetti')" />
      </v-col>
      <v-col cols="12" md="4">
        <h1>Gloria Valente</h1>
        <v-img src="/chiSiamo/gloria_valente.jpg" style="height: 200px; width: 200px;" />
        <br>
        <v-typography style="color: black;" v-html="$t('ChiSiamo.gloriaValente')" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  //
</script>