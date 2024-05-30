<template>
  <v-navigation-drawer
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    @click-outside="$emit('update:modelValue', false); $emit('close')"
    temporary
    color="red"
    app
    class="drawer-content"
    width="300"
    max-width="300"
  >
    <v-list-item class="list-item">
      <v-btn icon="mdi-microsoft-xbox-controller-menu" class="white-btn" @click="closeDrawer" />
      <p class="white-title"><b>netti</b>architetti</p>
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
    <div class="bottom-section">
      <p class="white_text">
        Progettare architetture per il mondo reale e al contempo ricercare <b>nuove forme espressive</b>,
        attenti ai temi della storia, dell’ambiente, del paesaggio urbano ed extraurbano,
        costituisce il nostro impegno e ci rende consapevoli della responsabilità di <b>essere architetti</b>.
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
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['update:modelValue', 'close']);

const closeDrawer = () => {
  emit('update:modelValue', false);
  emit('close');
};
</script>

<style scoped>
.drawer-content {
  background-color: red;
  /* Imposta il colore di sfondo del drawer */
}

.list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
}

.white-btn {
  background-color: white;
  color: red; /* Colore dell'icona del menu */
  margin-right: 12px;
  float: left;
}

.white-title {
  font-size: xx-large;
  color: white;
  float: left;
}

.white_text {
  font-size: x-small;
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
</style>
