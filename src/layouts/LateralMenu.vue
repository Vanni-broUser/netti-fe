<template>
  <v-navigation-drawer 
    :model-value="modelValue" 
    @update:model-value="$emit('update:modelValue', $event)"
    @click-outside="$emit('update:modelValue', false); $emit('close')" 
    temporary 
    color="#ff0000" 
    app
    class="drawer-content" 
    width="360"
    max-width="360" 
    style="padding-top: 6px; height: 100vh;"
  >
    <v-list-item class="list-item">
      <div class="title-container">
        <MainTitle @toggleDrawer="closeDrawer" />
      </div>
    </v-list-item>
    <v-divider />
    <v-list density="compact" nav>
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
    <v-divider />
    <div class="bottom-section">
      <p class="white_text">
        Progettare architetture per il mondo reale e al contempo ricercare
        nuove forme espressive, attenti ai temi della storia,
        dell’ambiente, del paesaggio urbano ed extraurbano, è l'impegno che ci
        rende consapevoli della responsabilità dell'essere architetti.<br /><br />
        <b>Lorenzo Netti</b><br />
        <b>Gloria Valente</b>
      </p>
      <v-container>
        <v-row>
          <v-col>
            <v-icon icon="mdi-facebook" />
          </v-col>
          <v-col>
            <v-icon icon="mdi-instagram" />
          </v-col>
          <v-col>
            <v-icon :style="{ backgroundImage: `url(${devisare})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }" />
          </v-col>
          <v-col>
            <v-icon :style="{ backgroundImage: `url(${archilovers})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }" />
          </v-col>
        </v-row>
      </v-container>
      <p class="white_text">
        © 2024 <b>netti</b>architetti.
      </p>
    </div>
  </v-navigation-drawer>
</template>

<script setup>
import MainTitle from './MainTitle';

import devisare from '@/assets/social/devisare.png';
import archilovers from '@/assets/social/archilovers.png';

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue", "close"]);

const closeDrawer = () => {
  emit("update:modelValue", false);
  emit("close");
};
</script>

<style scoped>
.drawer-content {
  background-color: #ff0000;
  /* Imposta il colore di sfondo del drawer */
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

.white_text {
  font-size: small;
  color: white;
  margin-left: 8px;
  margin-right: 8px;
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
    bottom: 72px
  }
}

.title-link {
  text-decoration: none; /* Rimuove la sottolineatura dai link */
}
</style>
