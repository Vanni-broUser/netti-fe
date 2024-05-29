<template>
  <v-navigation-drawer
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    temporary
    color="red"
  >
    <v-list-item style="margin-top: 20px;">
      <p style="font-size: xx-large;"><b>netti</b>architetti</p>
    </v-list-item>
    <v-divider />
    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-ruler-square" title="Architetture" />
      <v-list-item prepend-icon="mdi-text-box-multiple-outline" title="Progetti" />
      <v-list-item prepend-icon="mdi-text-box-search" title="Ricerche" />
      <v-list-item title="Chi siamo" />
      <v-list-item title="Agenda" />
      <v-list-item title="Contatti" />
    </v-list>
    <v-divider />
    <p class="white_text">
      Progettare architetture per il mondo reale e al contempo ricercare nuove forme espressive,
      attenti ai temi della storia, dell’ambiente, del paesaggio urbano ed extraurbano,
      costituisce il nostro impegno e ci rende consapevoli della responsabilità di esserearchitetti.
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
      © 2016 <b>netti</b>architetti.
    </p>
  </v-navigation-drawer>
</template>
  
<script setup>
  const props = defineProps({
    modelValue: {
      type: Boolean,
      required: true,
    },
  });
  
  const emit = defineEmits(['update:modelValue']);
</script>

<style scoped>
  .white_text {
    font-size: smaller;
    margin-left: 10px;
    margin-right: 10px;
  }
</style>
  