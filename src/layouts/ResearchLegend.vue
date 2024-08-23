<template>
  <div class="central-section">
    <v-img :src="dinettica" alt="Dinettica" />
    <p class="central-text">
      <b>Attività didattiche dei corsi di Composizione e Disegno dell’Architettura di Lorenzo Netti al Politecnico di Bari</b>
    </p><br>
    <p class="small-text">
      <b>D</b> CdL in Disegno Industriale (DISEGNO)<br>
      <b>DA</b> CdLM in Ingegneria Edile-Architettura (DISEGNO DELL’ARCHITETTURA II)<br>
      <b>ACA</b> CdLM in Ingegneria Edile-Architettura (ARCHITETTURA E COMPOSIZIONE ARCHITETTONICA)<br>
      <b>TDL</b> (TESI DI LAUREA)
    </p>
  </div>
</template>

<script setup>
  import dinettica from '@/assets/dinettica.gif';
</script>

<style scoped>
.central-section {
  margin-left: 16px;
  margin-right: 60px;
  margin-top: 30px;
}

.small-text {
  font-size: 12px;
}

.central-text {
  font-size: 14px;
}
</style>
