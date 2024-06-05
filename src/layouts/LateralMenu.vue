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
          <p class="white-title v-elevation-3"><b>netti</b>architetti</p>
          <v-btn 
            v-if="!isMobile" 
            color="#ff0000" 
            icon="mdi-reorder-horizontal" 
            class="white-btn"
            @click="closeDrawer" 
            small 
          />
          <v-btn 
            v-if="isMobile" 
            color="#ff0000" 
            icon="mdi-reorder-horizontal" 
            class="white-btn-mobile"
            @click="closeDrawer" 
            small 
          />
        </div>
      </v-list-item>
      <v-divider />
      <v-list density="compact" nav>
        <v-list-item>
          <b>Architetture</b>
        </v-list-item>
        <v-list-item>
          <b>Progetti</b>
        </v-list-item>
        <v-list-item>
          <b>Ricerche</b>
        </v-list-item>
        <v-list-item>
          Chi siamo
        </v-list-item>
        <v-list-item>
          Agenda
        </v-list-item>
        <v-list-item>
          Contatti
        </v-list-item>
      </v-list>
      <v-divider />
      <div class="bottom-section">
        <p class="white_text">
          Progettare architetture per il mondo reale e al contempo ricercare
          <b>nuove forme espressive</b>, attenti ai temi della storia,
          dell’ambiente, del paesaggio urbano ed extraurbano, è l'impegno che ci
          rende consapevoli della responsabilità dell'<b>essere architetti</b>.<br /><br />
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
          </v-row>
        </v-container>
        <p class="white_text">
          © 2024 <b>netti</b>architetti.
        </p>
      </div>
    </v-navigation-drawer>
  </template>
  
  <script setup>
  import mobile from '@/utils/mobile.js'; // Importa la funzione per rilevare i dispositivi mobili
  
  const props = defineProps({
    modelValue: {
      type: Boolean,
      required: true,
    },
  });
  
  const emit = defineEmits(["update:modelValue", "close"]);
  
  const isMobile = mobile.setupMobileUtils(); // Rileva se il dispositivo è mobile
  
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
  
  .white-title {
    color: white;
    /* Colore arancio-rosso */
    font-size: 40px;
    /* Modifica l'altezza del font a 40px */
    padding: 10px;
    padding-top: 13px;
    /* Aggiungi padding per consistenza visiva */
    border-radius: 4px;
  }
  
  .white-btn {
    width: 25px;
    height: 25px;
    border-radius: 0px;
    /* Assicurati che il border-radius sia coerente */
    min-width: 25px;
    min-height: 25px;
    margin: -07px 0px 0 0;
    /* Abbassa il bottone e spostalo a sinistra */
    display: flex;
    align-items: center;
    /* Allinea il contenuto del bottone verticalmente al centro */
    justify-content: center;
    /* Allinea il contenuto del bottone orizzontalmente al centro */
  }
  
  .white-btn-mobile {
    width: 25px;
    height: 25px;
    border-radius: 0px;
    /* Assicurati che il border-radius sia coerente */
    min-width: 25px;
    min-height: 25px;
    margin: -7px 0px 0 0;
    /* Abbassa il bottone e spostalo a sinistra */
    display: flex;
    align-items: center;
    /* Allinea il contenuto del bottone verticalmente al centro */
    justify-content: center;
    /* Allinea il contenuto del bottone orizzontalmente al centro */
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
  </style>
  