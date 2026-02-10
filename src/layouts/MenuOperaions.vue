<template>
  <v-dialog max-width="500">
    <template v-slot:activator="{ props: activatorProps }">
      <v-container>
        <div @click="setLanguage('it')" style="float: left; margin-left: 2px; cursor: pointer;">IT</div>
        <div @click="setLanguage('en')" style="float: left; margin-left: 20px; cursor: pointer;">EN</div>
        <br><br>
        <div
          class="d-flex align-center"
        >
          <router-link class="link" to="/portfolio-15" style="margin-right: 16px;">
            <v-card width="143" elevation="5">
              <v-img :src="portfolio15" />
            </v-card>
          </router-link>
          <router-link class="link" to="/portfolio-25">
            <v-card width="143" elevation="5">
              <v-img :src="portfolio25" />
            </v-card>
          </router-link>
        </div>
        <br>
        <div v-bind="activatorProps" style="cursor: pointer;">
          {{ $t('MenuOperations.searchButton') }}
        </div>
        <br>
      </v-container>
    </template>
    <template v-slot:default="">
      <SearchCard />
    </template>
  </v-dialog>
</template>

<script setup>
import i18n from '@/plugins/i18n';
import portfolio15 from '@/assets/portfolio15.png';
import portfolio25 from '@/assets/portfolio25.png';

import SearchCard from './SearchCard';
import { setupMobileUtils } from '@/utils/mobile';

const isMobile = setupMobileUtils();

const setLanguage = (language) => {
  i18n.global.locale = language;
};
</script>
