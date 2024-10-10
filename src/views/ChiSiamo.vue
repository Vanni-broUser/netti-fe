<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <v-img src="/chiSiamo/lorenzo_netti.jpg" style="height: 200px; width: 200px;" />
        <br>
        <p style="font-size: x-large;">Lorenzo Netti</p>
        <p style="color: black;" v-for="n in 3">
          {{ $t(`ChiSiamo.lorenzoNettiLine${n}`) }}
        </p>
      </v-col>
      <v-col cols="12" md="4">
        <v-img src="/chiSiamo/gloria_valente.jpg" style="height: 200px; width: 200px;" />
        <br>
        <p style="font-size: x-large;">Gloria Valente</p>
        <p style="color: black;" v-for="n in 2">
          {{ $t(`ChiSiamo.gloriaValenteLine${n}`) }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  //
</script>