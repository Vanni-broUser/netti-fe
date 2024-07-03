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
  <v-list density="compact" nav>
      <v-list-item>
        <MainTitle @toggleDrawer="closeDrawer" />
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
    <v-divider />
    <div class="bottom-section">
      <p class="white_text">
        Progettare architetture per il mondo reale e al contempo ricercare
        nuove forme espressive, attenti ai temi della storia,
        dell’ambiente, del paesaggio urbano ed extraurbano, è l'impegno che ci
        rende consapevoli della responsabilità dell'essere architetti.<br /><br />
        <b>Lorenzo Netti &nbsp; Gloria Valente</b>
      </p>
      <SocialLinks />
      <p class="white_text">
        © 2024 <b>netti</b>architetti.
      </p>
    </div>
  </v-navigation-drawer>
</template>

<script setup>
import MainTitle from './MainTitle';
import SocialLinks from './SocialLinks';

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(["update:modelValue", "close"]);

const closeDrawer = () => {
  emit("update:modelValue", false);
  emit("close");
};
</script>

<style scoped>
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
  overflow: auto;
}

.title-link {
  text-decoration: none; /* Rimuove la sottolineatura dai link */
}
</style>
