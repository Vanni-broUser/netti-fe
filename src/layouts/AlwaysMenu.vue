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
          <b class="red-title">netti</b><span class="black-title">architetti</span>
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
    <div class="bottom-section">
      <v-container>
        <v-row>
          <v-col>
            <v-icon icon="mdi-facebook" />
          </v-col>
          <v-col>
            <v-icon icon="mdi-instagram" />
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
import mobile from '@/utils/mobile.js'; // Importa la funzione per rilevare i dispositivi mobili
const isMobile = mobile.setupMobileUtils(); // Rileva se il dispositivo è mobile
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

.black_text {
  font-size: small;
  color: black;
  margin-left: 8px;
  margin-right: 8px;
}

.flex-grow-1 {
  flex-grow: 1;
  overflow-y: auto;
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
</style>
