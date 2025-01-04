<template>
  <v-carousel
    style="height: 97vh; background-color: whitesmoke; padding: 20px; box-sizing: border-box;"
    @click="resetTimer"
    v-model="selected"
    hide-delimiters
  >
    <v-carousel-item v-for="(img, index) in content" :key="index">
      <div class="carousel-item-wrapper">
        <img :src="img" alt="carousel item" class="carousel-image" />
      </div>
    </v-carousel-item>
    <template #prev>
      <v-btn
        variant="text"
        color="black"
        icon="mdi-arrow-left"
        @click="prev"
      />
    </template>
    <template #next>
      <v-btn
        variant="text"
        color="black"
        icon="mdi-arrow-right"
        @click="next"
      />
    </template>
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
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  content: Array
});

const selected = ref(0);

const prev = () => {
  selected.value = (selected.value + props.content.length - 1) % props.content.length;
};

const next = () => {
  selected.value = (selected.value + 1) % props.content.length;
};

const handleKeydown = (event) => {
  if (event.key === 'ArrowLeft')
    prev();
  else if (event.key === 'ArrowRight')
    next();
};

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});
</script>

<style scoped>
.carousel-item-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: whitesmoke;
  overflow: hidden;
  padding-top: 60px;
}

.carousel-image {
  height: 100%;
  padding-bottom: 55px;
  width: auto;
  object-fit: cover;
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
