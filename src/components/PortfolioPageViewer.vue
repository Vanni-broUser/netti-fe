<template>
  <v-btn
    variant="text"
    color="#fb2831"
    icon="mdi-arrow-left-thin"
    @click="prev"
    class="previous-element-arrow"
  />
  <v-btn
    variant="text"
    color="#fb2831"
    icon="mdi-arrow-right-thin"
    @click="next"
    class="next-element-arrow"
  />
  <VuePDF ref="pdfRef" :pdf="pdf" :page="Math.round(curPageNo)" fit-parent />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { VuePDF, usePDF } from '@tato30/vue-pdf';

const curPageNo = ref(1);
const pdfRef = ref(null);
let windowResizeDebounceTimeout;
const { pdf, pages } = usePDF('/portfolio.pdf');

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
  if (curPageNo.value < 1) {
    curPageNo.value = pages.value;
  }
};

const next = () => {
  curPageNo.value += 1;
  if (curPageNo.value > pages.value) {
    curPageNo.value = 1;
  }
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
