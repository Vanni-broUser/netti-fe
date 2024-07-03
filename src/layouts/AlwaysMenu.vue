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
    <v-list-item class="list-item">
      <div class="title-container">
        <p class="color-title v-elevation-3">
					<router-link to="/" class="title-link">
          <b class="red-title">netti</b><span class="black-title">architetti</span>
				</router-link>
        </p>
      </div>
    </v-list-item>
    <v-list density="compact" nav class="flex-grow-1">
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
      <v-container>
        <v-row>
          <v-col>
            <v-icon icon="mdi-facebook" />
          </v-col>
          <v-col>
            <v-icon icon="mdi-instagram" />
          </v-col>
            <v-col>
            <v-icon :style="{ backgroundImage: `url(${devisare})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', filter: 'invert(100%)' }" />
            </v-col>
          <v-col>
            <v-icon :style="{ backgroundImage: `url(${archilovers})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', filter: 'invert(100%)'  }" />
          </v-col>
        </v-row>
      </v-container>
      <p class="black_text">
        © 2024 <b>netti</b>architetti.
      </p>
    </div>
  </v-navigation-drawer>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import devisare from '@/assets/social/devisare.png';
import archilovers from '@/assets/social/archilovers.png';
import mobile from '@/utils/mobile.js'; // Importa la funzione per rilevare i dispositivi mobili
const isMobile = mobile.setupMobileUtils(); // Rileva se il dispositivo è mobile

const route = useRoute();
const isRicerchePage = computed(() => route.path === '/ricerche');
</script>

<style scoped>

.drawer-content {
  background-color: #ffffff;
}

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

.red-title {
  color: #ff0000;
}

.black-title {
  color: #000000;
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
}

/* Media query per abilitare lo scroll nel menu laterale sui dispositivi mobili */
@media (max-width: 768px) {
  .drawer-content {
    overflow: auto;
  }
	.bottom-section {
    display: none;
  }
}
.title-link {
  text-decoration: none; /* Rimuove la sottolineatura dai link */
}
</style>
