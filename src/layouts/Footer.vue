<template>
  <v-footer
    elevation="2"
    style="min-height: 4vh; max-height: max-content; padding-top: 0 !important; padding-bottom: 0 !important;"
  >
    <span v-if="isMobile">NETTI ARCHITETTI © {{ new Date().getFullYear() }}</span>
    <span v-else>
      NETTI ARCHITETTI © {{ new Date().getFullYear() }} | Bari &mdash; Italia | studio@nettiarchitetti.it
    </span>
  </v-footer>
</template>

<script setup>
import { setupMobileUtils } from '@/utils/mobile';
const isMobile = setupMobileUtils();
</script>

<style scoped>
.center {
  text-align: center;
}

.right {
  text-align: right;
}
</style>
