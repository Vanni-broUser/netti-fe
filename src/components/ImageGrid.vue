<template>
  <div>
    <v-dialog v-model="dialog" max-width="1000px">
      <v-card>
        <v-card-title>
          <router-link :to="`/dettaglio/${selectedImage.id}`" v-if="!isMobile && getImages('mobile') && getImages('desktop')">
            <v-btn icon="mdi-arrow-right-circle-outline" class="red" variant="text"/>
          </router-link>
          <v-btn icon="mdi-close-circle-outline" @click="dialog = false" class="red" variant="text" v-if="!isMobile" />
          {{ `${selectedImage.enrichment.year} ${selectedImage.title} - ${selectedImage.enrichment.place}` }}
        </v-card-title>
        <v-card-actions class="red" v-if="isMobile">
          <router-link :to="`/dettaglio/${selectedImage.id}`" v-if="getImages('mobile') && getImages('desktop')">
            <v-btn icon="mdi-arrow-right-circle-outline" class="red" />
          </router-link>
          <v-btn icon="mdi-close-circle-outline" @click="dialog = false"/>
        </v-card-actions>
        <v-card-text>
          <VueMarkdown :source="selectedImage.content" />
        </v-card-text>
      </v-card>
    </v-dialog>
    <div v-if="isMobile">
      <v-row>
        <v-col cols="12" v-for="(element, index) in content" :key="index">
          <ImageElement :element="element" @showDetails="showDetails" />
        </v-col>
      </v-row>
      <br>
    </div>
    <div v-else v-masonry class="masonry" item-selector=".item" originLeft:false horizontalOrder:true :gutter="gutter">
      <div  
        v-masonry-tile
        class="item"
        v-for="(element, index) in content" 
        :key="index" 
        :style="getStyle(element)"
      >
        <ImageElement :element="element" @showDetails="showDetails" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { setupMobileUtils } from '@/utils/mobile';

import VueMarkdown from 'vue-markdown-render';
import ImageElement from '@/components/ImageElement';

const gutter = 13;
const dialog = ref(false);
const isMobile = setupMobileUtils();
const selectedImage = ref({});

const props = defineProps({
  content: Array,
  numCols: Number
});

const getStyle = (image) => {
  if (props.numCols < 1) props.numCols = 1;
  return {
    width: `${(100/props.numCols) - 1}%`,
    backgroundColor: image.backgroundColor || 'transparent'
  };
};

const showDetails = (element) => {
  selectedImage.value = element;
  dialog.value = true;
};

const getImages = (type)  => {
  return selectedImage.value. files.filter(image => image.type == type);
};
</script>

<style scoped>
.masonry {
  margin-left: 13px;
}

.item {
  margin-bottom: 14px;
}

.v-btn--icon.v-btn--density-default {
  width: 36px;
  height: 36px;
}
</style>
