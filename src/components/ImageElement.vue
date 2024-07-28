<template>
  <div
    class="image-container"
    :style="isMobile ? { backgroundColor: element.backgroundColor || 'transparent' } : {}"
  >
    <div @click="emits('showDetails', element)">
      <img :src="element.files ? element.files[0] : 'default'" :alt="`Image ${index}`" />
      <div 
        :class="['overlay', element.backgroundColor ? 'colored-overlay' : 'red-overlay']" 
        :style="element.backgroundColor ? { '--overlay-color': element.backgroundColor } : {}"
      >
        <div class="text-container">
          <div v-if="!element.year" class="description-little">{{ element.title }}</div>
          <div v-if="element.year" class="description">{{ element.title }}</div>
          <div v-if="element.year" class="year">{{ element.year }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { setupMobileUtils } from '@/utils/mobile.js';

  const isMobile = setupMobileUtils();

  const emits = defineEmits(['showDetails']);

  const props = defineProps({
    index: {
      type: Number,
      required: true
    },
    element: {
      type: Object,
      required: true
    }
  });
</script>

<style scoped>
  .image-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .image-container:hover .red-overlay {
    background-color: rgba(255, 0, 0, 0.7);
  }

  .image-container:hover .colored-overlay {
    background-color: var(--overlay-color, rgba(255, 0, 0, 0.7));
    opacity: 0.7;
  }

  .image-container:hover .description-little {
    opacity: 1;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 1vw;
    transition: background-color 0.3s ease;
  }

  .red-overlay {
    background-color: rgba(255, 0, 0, 0);
  }

  .colored-overlay {
    background-color: rgba(0, 0, 0, 0);
  }

  .description {
    font-size: 5rem;
    margin: 0;
  }

  .description-little {
    font-size: 1.2rem;
    margin: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .year {
    font-size: 1rem;
    margin: 0;
  }
</style>
