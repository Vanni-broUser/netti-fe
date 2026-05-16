<template>
  <v-carousel
    v-model="selected"
    style="height: 96vh;"
    hide-delimiters
    @click="resetTimer"
  >
    <v-carousel-item
      v-for="(text, index) in content"
      :key="index"
      :src="`/home/${isMobile ? 'mobile' : 'desktop'}/${index + 1}.jpg`"
      cover
    />
    <template #prev />
    <template #next />
    <v-row
      align="end"
      justify="end"
    >
      <div>
        <div
          v-if="!isMobile"
          class="caption"
        >
          {{ content[selected] }}
        </div>
        <div
          v-else
          class="caption-mobile"
        >
          {{ content[selected] }}
        </div>
      </div>
      <div class="custom-controls">
        <div
          v-for="(_img, index) in content"
          :key="index"
        >
          <div
            :class="['mx-1', 'my-3', 'custom-dot', { 'custom-dot--active': selected == index }]"
            @click="selected = index"
          />
        </div>
      </div>
    </v-row>
  </v-carousel>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { setupMobileUtils } from '@/utils/mobile';

const isMobile = setupMobileUtils();

const { content } = defineProps({
  content: {
    type: Array,
    required: true
  }
});

const selected = ref(0);
const intervalId = ref(null);

const prev = () => {
  selected.value = (selected.value + content.length - 1) % content.length;
};

const next = () => {
  selected.value = (selected.value + 1) % content.length;
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
  left: 15px;
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
