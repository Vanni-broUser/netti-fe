<template>
<div>
  <v-container>
    <v-row>
      <v-col>
        <v-btn class="mx-2" @click="goToPage(curPageNo - 1)">
          Pagina Precedente
        </v-btn>
        <v-btn class="mx-2" @click="goToPage(curPageNo + 1)">
          Pagina Successiva
        </v-btn>
      </v-col>
  </v-row>
    <v-row class="debug-row">
      <v-col cols="12" md="8" class="debug-col">
        <VuePDF ref="pdfRef" :pdf="pdf" :page="Math.round(curPageNo)" fit-parent/>
      </v-col>
    </v-row>
  </v-container>
</div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { VuePDF, usePDF } from '@tato30/vue-pdf'

const curPageNo = ref(1);
const { pdf, pages } = usePDF('/portfolio.pdf');

const pdfRef = ref(null);

let windowResizeDebounceTimeout;

const updatePageSize = () => {    
  pdfRef.value.reload();
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

const goToPage = (pageNo) => {
  if (pageNo < 1) {
    curPageNo.value = 1;
    return;
  }
  if (pageNo > pages.value) {
    curPageNo.value = pages.value;
    return;
  }
  curPageNo.value = pageNo;
}
</script>

<style>
</style>