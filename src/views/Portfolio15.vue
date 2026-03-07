<template>
  <v-btn
    variant="text"
    color="white"
    icon="mdi-download"
    :style="getMargin()"
    class="background-red square-btn main-button"
    @click="downloadPDF('/portfolio-15.pdf')"
  />
  <PortfolioPageViewer :pdf="'/portfolio-15.pdf'" v-if="!isMobile" />
  <PortfolioFullViewer :pdf="'/portfolio-15.pdf'" v-else />
</template>

<script setup>
import { setupMobileUtils } from '@/utils/mobile';
import PortfolioPageViewer from '@/components/PortfolioPageViewer.vue';
import PortfolioFullViewer from '@/components/PortfolioFullViewer.vue';

import { useRoute } from 'vue-router';

const route = useRoute();
const isMobile = setupMobileUtils();

const downloadPDF = (pdfUrl) => {
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = pdfUrl.split('/').pop();
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const getMargin = () => {
  const style = {marginLeft: '55px'};
  if (isMobile.value) style.marginRight = '100%';
  else if (route.path.includes('dettaglio')) style.marginRight = '360px';
  return style;
};
</script>

<style scoped>
.square-btn {
  width: 25px;
  height: 25px;
  border-radius: 0px;
}

.main-button {
  position: fixed;
  /* left: 55px; */
  top: 45px;
  z-index: 999;
}
</style>
