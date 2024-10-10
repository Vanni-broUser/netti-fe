<template>
  <v-footer
    :color="theme.current.value.primary"
    elevation="2"
    style="max-height: max-content;"
  >
    <v-row>
      <v-col cols="12" md="4">
        NETTI ARCHITETTI © {{ new Date().getFullYear() }}
      </v-col>
      <v-col cols="12" md="4" :class="{ center: !isMobile }">
        Bari-Italia
      </v-col>
      <v-col cols="12" md="4" :class="{ right: !isMobile }">
        studio@nettiarchitetti.it
      </v-col>
    </v-row>
  </v-footer>
</template>

<script setup>
  import { useTheme } from 'vuetify';
  import { setupMobileUtils } from '@/utils/mobile';

  const theme = useTheme();
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
