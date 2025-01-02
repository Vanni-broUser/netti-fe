<template>
<div>
  <v-row v-for="(page, index) in pages" :key="page">
    <v-col>
      <VuePDF :ref="pageRef => pdfRef[index]=pageRef" :pdf="pdf" :page="page" fit-parent />
    </v-col>
  </v-row>
</div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { VuePDF, usePDF } from '@tato30/vue-pdf'

const { pdf, pages } = usePDF('/portfolio.pdf');

const pdfRef = ref([]);
let windowResizeDebounceTimeout;

const updatePageSize = () => {    
  pdfRef.value.forEach((ref) => {
    if (ref) {
      ref.reload();
    }
  });
}

const debounceUpdatePageSize = () => {
  clearTimeout(windowResizeDebounceTimeout);
  windowResizeDebounceTimeout = setTimeout(updatePageSize, 150);
};

onMounted(() => {
  updatePageSize();
  window.addEventListener('resize', debounceUpdatePageSize);
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', debounceUpdatePageSize);
})
</script>