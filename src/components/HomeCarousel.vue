<template>
  <v-carousel
    style="height: 100vh;"
    @click="resetTimer"
    v-model="selected"
    hide-delimiters
  >
    <v-carousel-item v-for="img in content" :src="img.path" cover/>
    <template #prev></template>
    <template #next></template>
    <v-row align="end" justify="end">
      <div>
        <div v-if="!isMobile" :class="['caption']" >
          {{ content[selected].caption }}
        </div>
        <div v-else :class="['caption-mobile']">
          {{ content[selected].caption }}
        </div>
      </div>
      <div class="custom-controls">
        <div v-for="(img, index) in content">
          <div
            :class="['mx-1', 'my-3', 'custom-dot', { 'custom-dot--active': selected == index }]"
            @click="selected = index">
          </div>
        </div>
      </div>
    </v-row>
  </v-carousel>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { setupMobileUtils } from '@/utils/mobile';

const isMobile = setupMobileUtils();

const props = defineProps({
  content: Array
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
  if (intervalId.value) {
    clearInterval(intervalId.value);
    intervalId.value = null;
  } else
    startTimer();
};

const handleKeydown = (event) => {
  if (event.key === 'ArrowLeft') {
    prev();
    resetTimer();
  } else if (event.key === 'ArrowRight') {
    next();
    resetTimer();
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
  startTimer();
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
  clearInterval(intervalId.value);
});
</script>

<style scoped>
.caption {
  position: absolute;
  bottom: 25px;
  left: 25px;
  color: white;
  font-size: larger;
}

.caption-mobile {
  position: absolute;
  bottom: 60px;
  right: 25px;
  text-align: right;
  color: white;
  font-size: larger;
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
