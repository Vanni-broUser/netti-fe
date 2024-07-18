<template>
  <div>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card :title="selectedImage.title" :text="selectedImage.longDescription">
        <v-card-actions>
          <v-btn 
            color="#ff0000" 
            icon="mdi-reorder-horizontal" 
            @click="dialog = false"
            size="x-small"
          />
        </v-card-actions>
      </v-card>
    </v-dialog>
    <div v-if="isMobile">
      <div class="red-band"></div>
      <v-row>
        <v-col cols="12" v-for="(element, index) in content" :key="index">
          <ImageElement :index="index" :element="element" @showDetails="showDetails" />
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
          <ImageElement :index="index" :element="element" @showDetails="showDetails" />
        </div>
      </center>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { setupMobileUtils } from '@/utils/mobile.js';

  import ImageElement from '@/components/ImageElement';

  const gutter = 13;
  const dialog = ref(false);
  const isMobile = setupMobileUtils();
  const selectedImage = ref({
    title: '',
    longDescription: ''
  });

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
      height: image.height + 'px',
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
    margin-bottom: 20px;
  }

  .red-band {
    background-color: #ff0000;
    height: 10%;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1;
  }
</style>
