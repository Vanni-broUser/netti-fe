<template>
  <div :class="{'image-container': true, 'mobile-container': isMobile}">
    <div @click="emits('showDetails', element)">
      <img :src="element.files.find(p => p.type == 'cover').preview" :alt="`Image ${element.id}`" />
      <div 
        :class="!isMobile ? 'overlay red-overlay' : 'overlay'" 
        @mouseover="showText = true" @mouseleave="showText = false"
      >
        <div v-if="showText && !isMobile">
          <div class="text-container">
            <b>{{ element.enrichment.year }}</b>
            <p style="text-align: start;">{{element.title}} - {{element.enrichment.place}}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isMobile" class="mobile-title">
      <b>{{ element.enrichment.year }}</b>
      {{element.title}} - {{element.enrichment.place}}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { setupMobileUtils } from '@/utils/mobile';

const showText = ref(false);
const isMobile = setupMobileUtils();

const emits = defineEmits(['showDetails']);
const props = defineProps({
  element: Object
});
</script>

<style scoped>
.mobile-title {
  margin-top: 15px;
  margin-bottom: 15px;
}
.mobile-container {
  padding-left: 15px;
  padding-right: 15px;
}

.image-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  cursor: pointer;
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
  background-color: rgba(0, 0, 255, 0.5);
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
</style>
