<template>
  <PortfolioPageViewer
    v-if="!isMobile"
    :pdf="'/portfolio-25.pdf'"
  />
  <PortfolioFullViewer
    v-else
    :pdf="'/portfolio-25.pdf'"
  />
</template>

<script setup>
import { setupMobileUtils } from '@/utils/mobile';
import PortfolioPageViewer from '@/components/PortfolioPageViewer.vue';
import PortfolioFullViewer from '@/components/PortfolioFullViewer.vue';

const isMobile = setupMobileUtils();
</script>
