<template>
  <v-carousel
    v-model="selected"
    style="height: 96vh; background-color: whitesmoke; padding: 20px; box-sizing: border-box;"
    hide-delimiters
  >
    <v-carousel-item
      v-for="(img, index) in content"
      :key="index"
    >
      <div class="carousel-item-wrapper">
        <img
          :src="img.preview"
          alt="carousel item"
          class="carousel-image"
        >
      </div>
    </v-carousel-item>
    <template #prev>
      <v-btn
        v-if="!isMobile"
        variant="text"
        color="#5f5f5f"
        class="previous-element-arrow"
        @click="prev"
      >
        <img
          src="/arrow1.png"
          width="50"
        >
      </v-btn>
    </template>
    <template #next>
      <v-btn
        v-if="!isMobile"
        variant="text"
        color="#5f5f5f"
        class="next-element-arrow"
        @click="next"
      >
        <img
          src="/arrow2.png"
          width="50"
        >
      </v-btn>
    </template>
    <v-row
      class="custom-controls"
      align="end"
      justify="end"
    >
      <div
        v-for="(_img, index) in content"
        :key="index"
        :class="['mx-1', 'my-3', 'custom-dot', { 'custom-dot--active': selected == index }]"
        @click="selected = index"
      />
    </v-row>
  </v-carousel>
</template>

<script setup>
import mobile from '@/utils/mobile';
import { ref, onMounted, onUnmounted } from 'vue';

const { content } = defineProps({
  content: {
    type: Array,
    required: true
  }
});

const selected = ref(0);
const isMobile = mobile.setupMobileUtils();

const prev = () => {
  selected.value = (selected.value + content.length - 1) % content.length;
};

const next = () => {
  selected.value = (selected.value + 1) % content.length;
};

const handleKeydown = (event) => {
  if (event.key === 'ArrowLeft') prev();
  else if (event.key === 'ArrowRight') next();
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
  padding-top: 40px;
}

.carousel-image {
  max-height: 90%;
  max-width: 100%;
  object-fit: contain;
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
