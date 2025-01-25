<template>
  <PortfolioPageViewer v-if="!isMobile" />
  <PortfolioFullViewer v-else />
</template>

<script setup>
import { setupMobileUtils } from '@/utils/mobile';
import PortfolioPageViewer from '@/components/PortfolioPageViewer.vue';
import PortfolioFullViewer from '@/components/PortfolioFullViewer.vue';

const isMobile = setupMobileUtils();
</script>
