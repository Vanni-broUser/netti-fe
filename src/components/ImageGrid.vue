<template>
  <div>
    <v-dialog
      v-model="dialog"
      max-width="1000px"
    >
      <v-card>
        <v-card-title>
          <router-link
            v-if="!isMobile && getImages('mobile') && getImages('desktop')"
            :to="`/dettaglio/${selectedImage.id}`"
          >
            <v-btn
              icon="mdi-arrow-right-circle-outline"
              class="red"
              variant="text"
            />
          </router-link>
          <v-btn
            v-if="!isMobile"
            icon="mdi-close-circle-outline"
            class="red"
            variant="text"
            @click="dialog = false"
          />
          {{ selectedImage.enrichment?.year }}
          {{ selectedImage.title }}
          {{ selectedImage.enrichment?.place }}
        </v-card-title>
        <v-card-actions
          v-if="isMobile"
          class="red"
        >
          <router-link
            v-if="getImages('mobile') && getImages('desktop')"
            :to="`/dettaglio/${selectedImage.id}`"
          >
            <v-btn
              icon="mdi-arrow-right-circle-outline"
              class="red"
            />
          </router-link>
          <v-btn
            icon="mdi-close-circle-outline"
            @click="dialog = false"
          />
        </v-card-actions>
        <v-card-text>
          <VueMarkdown :source="selectedImage.content" />
        </v-card-text>
      </v-card>
    </v-dialog>
    <div v-if="isMobile">
      <v-row>
        <v-col
          v-for="(element, index) in content"
          :key="index"
          cols="12"
        >
          <ImageElement
            :element="element"
            @show-details="showDetails"
          />
        </v-col>
      </v-row>
      <br>
    </div>
    <div
      v-else
      v-masonry
      class="masonry"
      item-selector=".item"
      originLeft:false
      horizontalOrder:true
      :gutter="gutter"
    >
      <div  
        v-for="(element, index) in content"
        :key="index"
        v-masonry-tile 
        class="item" 
        :style="getStyle(element)"
      >
        <ImageElement
          :element="element"
          @show-details="showDetails"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { setupMobileUtils } from '@/utils/mobile';

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
    required: true
  },
});

const safeNumCols = computed(() => {
  return props.numCols < 1 ? 1 : props.numCols;
});

const getStyle = (image) => {
  return {
    width: `${(100/safeNumCols.value) - 1}%`,
    backgroundColor: image.backgroundColor || 'transparent'
  };
};

const showDetails = (element) => {
  selectedImage.value = element;
  dialog.value = true;
};

const getImages = (type)  => {
  return selectedImage.value.files.filter(image => image.type == type);
};
</script>

<style scoped>
.masonry {
  margin-left: 13px;
}

.item {
  margin-bottom: 14px;
}

/* eslint-disable-next-line vue-scoped-css/no-unused-selector */
.v-btn--icon.v-btn--density-default {
  width: 36px;
  height: 36px;
}
</style>
