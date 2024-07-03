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
  padding: 16px;
  border-radius: 4px;
  margin: 16px 0;
}

.small-text {
  font-size: 12px;
}

.central-text {
  font-size: 14px;
}
</style>
