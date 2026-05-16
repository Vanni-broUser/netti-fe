<template>
  <div style="padding: 30px; background-color: whitesmoke; overflow-x: auto; height: 95.8vh;">
    <v-btn
      variant="text"
      color="#5f5f5f"
      class="previous-element-arrow"
      @click="prev"
    >
      <img
        src="/arrow1.png"
        width="50"
      >
    </v-btn>
    <v-btn
      variant="text"
      color="#5f5f5f"
      class="next-element-arrow"
      @click="next"
    >
      <img
        src="/arrow2.png"
        width="50"
      >
    </v-btn>
    <div style="width: 1250px; margin: auto; padding-top: 60px;">
      <VuePDF
        ref="pdfRef"
        class="carousel-image"
        :pdf="pdf"
        :page="Math.round(curPageNo)"
        fit-parent
      />
    </div>
  </div>
</template>

<script setup>
import { VuePDF, usePDF } from '@tato30/vue-pdf';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const curPageNo = ref(1);
const pdfRef = ref(null);
let windowResizeDebounceTimeout;

const props = defineProps({
  pdf: {
    type: String,
    required: true
  }
});
const { pdf, pages } = usePDF(props.pdf);

const updatePageSize = () => {
  if (!pdfRef.value) return;
  pdfRef.value.reload();
};

const debounceUpdatePageSize = () => {
  clearTimeout(windowResizeDebounceTimeout);
  windowResizeDebounceTimeout = setTimeout(updatePageSize, 150);
};

const prev = () => {
  curPageNo.value -= 1;
  if (curPageNo.value < 1)
    curPageNo.value = pages.value;
};

const next = () => {
  curPageNo.value += 1;
  if (curPageNo.value > pages.value)
    curPageNo.value = 1;
};

const handleArrowKeys = (event) => {
  if (event.key === 'ArrowLeft')
    prev();
  else if (event.key === 'ArrowRight')
    next();
};

onMounted(() => {
  updatePageSize();
  window.addEventListener('resize', debounceUpdatePageSize);
  window.addEventListener('keydown', handleArrowKeys);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', debounceUpdatePageSize);
  window.removeEventListener('keydown', handleArrowKeys);
});
</script>
