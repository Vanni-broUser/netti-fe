<template>
  <div>
    <v-dialog v-model="dialog" max-width="1000px">
      <v-card :title="`${selectedImage.enrichment.year} ${selectedImage.title} - ${selectedImage.enrichment.place}`">
        <v-card-text>
          <VueMarkdown :source="selectedImage.content" />
        </v-card-text>
        <v-card-actions class="red">
          <v-btn icon="mdi-close-circle-outline" @click="dialog = false"/>
          <router-link :to="`/dettaglio/${selectedImage.id}`">
            <v-btn icon="mdi-arrow-right-circle-outline" class="red" />
          </router-link>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <div v-if="isMobile">
      <v-row>
        <v-col cols="12" v-for="(element, index) in content" :key="index">
          <ImageElement :element="element" @showDetails="showDetails" />
        </v-col>
      </v-row>
    </div>
    <div v-else v-masonry class="masonry" item-selector=".item" originLeft:false horizontalOrder:true :gutter="gutter">
      <center>
        <div  
          v-masonry-tile
          class="item"
          v-for="(element, index) in content" 
          :key="index" 
          :style="getStyle(element)"
        >
          <ImageElement :element="element" @showDetails="showDetails" />
        </div>
      </center>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { randomHeight } from '@/utils/gridUtils';
  import { setupMobileUtils } from '@/utils/mobile.js';

  import VueMarkdown from 'vue-markdown-render';
  import ImageElement from '@/components/ImageElement';

  const gutter = 13;
  const dialog = ref(false);
  const isMobile = setupMobileUtils();
  const selectedImage = ref({});

  const props = defineProps({
    content: {
      type: Array,
      required: true
    },
    numCols: {
      type: Number,
      default: 4
    },
  });

  const getStyle = (image) => {
    if (props.numCols < 1) props.numCols = 1;
    return {
      width: `${(100/props.numCols) - 1}%`,
      maxHeight: `${randomHeight()}px`,
      backgroundColor: image.backgroundColor || 'transparent'
    };
  };

  const showDetails = (element) => {
    console.log(element)
    selectedImage.value = element;
    dialog.value = true;
  };
</script>

<style scoped>
  .masonry {
    margin-left: 13px;
  }

  .item {
    margin-bottom: 20px;
  }
</style>
