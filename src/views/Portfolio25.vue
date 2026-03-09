<template>
  <PortfolioPageViewer :pdf="'/portfolio-25.pdf'" v-if="!isMobile" />
  <PortfolioFullViewer :pdf="'/portfolio-25.pdf'" v-else />
</template>

<script setup>
import { setupMobileUtils } from '@/utils/mobile';
import PortfolioPageViewer from '@/components/PortfolioPageViewer.vue';
import PortfolioFullViewer from '@/components/PortfolioFullViewer.vue';

const isMobile = setupMobileUtils();
</script>
