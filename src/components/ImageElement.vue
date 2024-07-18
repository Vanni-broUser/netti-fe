<template>
  <div
    v-if="isMobile"
    class="image-container"
    :style="{ backgroundColor: element.backgroundColor || 'transparent' }"
  >
    <router-link :to="`/dettaglio/${index}`">
      <img :src="element.src" :alt="`Image ${index}`" />
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
    </router-link>
    <v-btn
      color="#ff0000"
      icon="mdi-reorder-horizontal" 
      class="details-button-mobile"
      @click="emits('showDetails', element)"
      size="x-small"
    />
  </div>
  <div v-else class="image-container">
    <router-link :to="`/dettaglio/${index}`">
      <img :src="element.src" :alt="`Image ${index}`" />
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
    </router-link>
    <v-btn
      color="#ff0000"
      icon="mdi-reorder-horizontal"
      @click="emits('showDetails', element)"
      class="details-button"
      size="x-small"
    />
  </div>
</template>

<script setup>
  import { setupMobileUtils } from '@/utils/mobile.js';

  const isMobile = setupMobileUtils();

  const emits = defineEmits(['toggleDrawer']);

  const props = defineProps({
    index: {
      type: Number,
      required: 0
    },
    element: {
      type: Object,
      default: {}
    }
  });
</script>

<style scoped>
  .details-button {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: #ff0000;
    margin: -07px 0px 0 0;
    color: white;
    border-radius: 0px;
    padding: 0;
    width: 25px;
    height: 25px;
  }

  .details-button-mobile {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: #ff0000;
    color: white;
    width: 40px;
    height: 40px;
    margin: -07px 0px 0 0;
    border-radius: 0;
    min-width: 0;
    padding: 0;
  }

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
