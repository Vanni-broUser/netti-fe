<template>
  <div class="central-section">
    <div v-if="route.path.includes('/didattica')">
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
    <div v-if="route.path.includes('/extra')">
      <v-img :src="extra" alt="Extra" />
      <p class="central-text mt-5">
        Qui sono raccolti i contributi e le ricerche di netti architetti sul design e i cambiamenti in atto nell’architettura e nelle città mediterranee. 
        <br>
        In questa sezione, video, fotografie e immagini non convenzionali di un’attività esplorativa e autonoma sui nuovi linguaggi e sull’evoluzione delle arti del progetto alle diverse scale.
      </p>
    </div>
    <router-link
      :to="route.path.includes('/extra') ? '/ricerche/didattica' : '/ricerche/extra'"
      class="link"
    >
      <v-img
        :src="route.path.includes('/extra') ? dinettica : extra"
        alt="Extra"
      />
      <p class="central-text">
        <b>Vedi anche...</b>
      </p>
    </router-link>
  </div>
</template>

<script setup>
  import extra from '@/assets/extra.gif';
  import dinettica from '@/assets/dinettica.gif';

  import { useRoute } from 'vue-router';

  const route = useRoute();
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
