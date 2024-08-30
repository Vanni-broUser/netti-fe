<template>
  <div>
    <v-dialog v-model="dialog" max-width="1000px">
      <v-card :title="`${selectedImage.enrichment.year} ${selectedImage.title} - ${selectedImage.enrichment.place}`">
        <v-card-actions class="red">
          <router-link :to="`/dettaglio/${selectedImage.id}`">
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
  import { setupMobileUtils } from '@/utils/mobile.js';

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
</script>

<style scoped>
  .masonry {
    margin-left: 13px;
  }

  .item {
    margin-bottom: 14px;
  }
</style>
