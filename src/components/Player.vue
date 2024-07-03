<template>
  <v-btn-toggle v-model="currentAction">
    <v-btn @click="prev">Indietro</v-btn>
    <v-btn @click="toggleSpeed">Velocità: {{ speed }}</v-btn>
    <v-btn @click="togglePlay">{{ isPlaying ? 'Pausa' : 'Play' }}</v-btn>
    <v-btn @click="stopPlay">Stop</v-btn>
    <v-btn @click="next">Avanti</v-btn>
  </v-btn-toggle>
</template>

<script setup>
const props = defineProps({
  isPlaying: {
    type: Boolean,
    required: true
  },
  speed: {
    type: Number,
    required: true
  }
});

const emit = defineEmits(['prev', 'next', 'togglePlay', 'stopPlay', 'toggleSpeed']);

const prev = () => emit('prev');
const next = () => emit('next');
const togglePlay = () => emit('togglePlay');
const stopPlay = () => emit('stopPlay');
const toggleSpeed = () => emit('toggleSpeed');
</script>
