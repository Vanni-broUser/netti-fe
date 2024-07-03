<template>
  <v-navigation-drawer
    permanent
    color="#ffffff" 
    app
    class="drawer-content"
    width="360"
    max-width="360"
    style="padding-top: 6px; height: 100vh; position: fixed;"
  >
  <v-list density="compact" nav>
    <v-list-item>
      <MainTitle :alwaysMenu="true" />
    </v-list-item><br><br>
      <v-list-item to="/architetture">
        <b>Architetture</b>
      </v-list-item>
      <v-list-item to="/progetti">
        <b>Progetti</b>
      </v-list-item>
      <v-list-item to="/ricerche">
        <b>Ricerche</b>
      </v-list-item>
      <v-list-item to="/chi-siamo">
        Chi siamo
      </v-list-item>
      <v-list-item to="/agenda">
        Agenda
      </v-list-item>
      <v-list-item to="/contatti">
        Contatti
      </v-list-item>
    </v-list>
    <div v-if="isRicerchePage" class="central-section">
      <img src="../assets/dinettica.gif" alt="Dinettica">
      <p class="central-text">
        <b>Attività didattiche dei corsi di Composizione e Disegno dell’Architettura di Lorenzo Netti al Politecnico di Bari</b><br><br>
        <span class="small-text">
          <b>D</b> CdL in Disegno Industriale (DISEGNO)<br>
          <b>DA</b> CdLM in Ingegneria Edile-Architettura (DISEGNO DELL’ARCHITETTURA II)<br>
          <b>ACA</b> CdLM in Ingegneria Edile-Architettura (ARCHITETTURA E COMPOSIZIONE ARCHITETTONICA)<br>
          <b>TDL</b> (TESI DI LAUREA)
        </span>
      </p>
    </div>
    <div class="bottom-section">
      <SocialLinks :invertColor="true" />
      <p class="black_text">
        © 2024 <b>netti</b>architetti.
      </p>
    </div>
  </v-navigation-drawer>
</template>

<script setup>
import MainTitle from './MainTitle';
import SocialLinks from './SocialLinks';

import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const isRicerchePage = computed(() => route.path === '/ricerche');
</script>

<style scoped>
.list-item {
  margin-top: 16px;
  padding: 0 16px;
}

.title-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.color-title {
  font-size: 40px;
  padding: 10px;
  padding-top: 13px;
  border-radius: 4px;
}

.central-text {
  font-size: 14px; /* Font size leggermente inferiore */
}

.small-text {
  font-size: 12px; /* Font size ancora più piccolo */
}

.flex-grow-1 {
  flex-grow: 1;
  overflow-y: auto;
}

.central-section {
  /* Stili per la sezione centrale */
  padding: 16px;
  border-radius: 4px;
  margin: 16px 0;
}

.bottom-section {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  overflow: auto;
}

.title-link {
  text-decoration: none; /* Rimuove la sottolineatura dai link */
}
</style>
