<template>
  <v-carousel
    style="height: 100vh; background-color: whitesmoke;"
    @keydown.left="prev"
    @keydown.right="next"
    @click="resetTimer"
    v-model="selected"
    hide-delimiters
    tabindex="0"
  >
    <v-carousel-item v-for="img in content" :src="img" />
    <template #prev></template>
    <template #next></template>
    <v-row class="custom-controls" align="end" justify="end">
      <div
        v-for="(_img, index) in content"
        :class="['mx-1', 'my-3', 'custom-dot', { 'custom-dot--active': selected == index }]"
        @click="selected = index"
      />
    </v-row>
  </v-carousel>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  content: Array,
  notScroll: Boolean
});

const selected = ref(0);
const intervalId = ref(null);

const prev = () => {
  selected.value = (selected.value + props.content.length - 1) % props.content.length;
};

const next = () => {
  selected.value = (selected.value + 1) % props.content.length;
};

const startTimer = () => {
  intervalId.value = setInterval(() => {
    next();
  }, 5000);
};

const resetTimer = () => {
  if (!props.notScroll) {
    if (intervalId.value) {
      clearInterval(intervalId.value);
      intervalId.value = null;
    } else
      startTimer();
  }
};

if (!props.notScroll)
  startTimer();
</script>

<style scoped>
.carousel {
  
}

.custom-controls {
  position: absolute;
  bottom: 25px;
  right: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.custom-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
}

.custom-dot--active {
  background-color: #fb2831;
}
</style>
