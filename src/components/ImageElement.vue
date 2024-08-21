<template>
  <div
    class="image-container"
    :style="isMobile ? { backgroundColor: element.enrichment.backgroundColor || 'transparent' } : {}"
  >
    <div @click="emits('showDetails', element)">
      <img :src="element.files ? element.files[0] : 'default'" :alt="`Image ${element.id}`" />
      <div 
        :class="['overlay', element.enrichment.backgroundColor ? 'colored-overlay' : 'red-overlay']" 
        :style="element.enrichment.backgroundColor ? { '--overlay-color': element.enrichment.backgroundColor } : {}"
      >
        <div class="text-container" v-if="element.enrichment.place">
          {{ `${element.enrichment.year} ${element.title} - ${element.enrichment.place}` }}
        </div>
        <div class="text-container" v-else-if="element.enrichment.didacticalArea">
          <h1>{{ element.enrichment.didacticalArea }}</h1>
          {{ element.enrichment.year }}
        </div>
        <div class="text-container" v-else>
          {{ element.title }}
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
    background-color: rgba(0, 0, 255, 0.7);
  }

  .image-container:hover .colored-overlay {
    background-color: var(--overlay-color, rgba(0, 0, 255, 0.7));
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
    background-color: rgba(0, 0, 255, 0);
  }

  .colored-overlay {
    background-color: rgba(0, 0, 0, 0);
  }
</style>
