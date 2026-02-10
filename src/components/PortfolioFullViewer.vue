<template>
<div>
  <div v-for="(page, index) in pages">
    <VuePDF :ref="pageRef => pdfRef[index]=pageRef" :pdf="pdf" :page="page" fit-parent />
  </div>
</div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { VuePDF, usePDF } from '@tato30/vue-pdf';

const pdfRef = ref([]);
let windowResizeDebounceTimeout;

const props = defineProps({
  pdf: {
    type: String,
    required: true
  }
})
const { pdf, pages } = usePDF(props.pdf);

const updatePageSize = () => {    
  if (!pdfRef.value) return;

  pdfRef.value.forEach((ref) => {
    if (ref) {
      ref.reload();
    }
  });
};

const debounceUpdatePageSize = () => {
  clearTimeout(windowResizeDebounceTimeout);
  windowResizeDebounceTimeout = setTimeout(updatePageSize, 150);
};

onMounted(() => {
  updatePageSize();
  window.addEventListener('resize', debounceUpdatePageSize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', debounceUpdatePageSize);
});
</script>