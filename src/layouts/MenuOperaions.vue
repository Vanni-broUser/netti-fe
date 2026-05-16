<template>
  <v-dialog max-width="500">
    <template #activator="{ props: activatorProps }">
      <v-container>
        <div
          style="float: left; margin-left: 2px; cursor: pointer;"
          @click="setLanguage('it')"
        >
          IT
        </div>
        <div
          style="float: left; margin-left: 20px; cursor: pointer;"
          @click="setLanguage('en')"
        >
          EN
        </div>
        <br><br>
        <v-row dense>
          <v-col
            cols="12"
            sm="6"
          >
            <router-link
              class="link"
              to="/portfolio-15"
            >
              <v-card elevation="5">
                <v-img :src="portfolio15" />
              </v-card>
            </router-link>
          </v-col>
          <v-col
            cols="12"
            sm="6"
          >
            <router-link
              class="link"
              to="/portfolio-25"
            >
              <v-card elevation="5">
                <v-img :src="portfolio25" />
              </v-card>
            </router-link>
          </v-col>
        </v-row>
        <br>
        <div
          v-bind="activatorProps"
          style="cursor: pointer;"
        >
          {{ $t('MenuOperations.searchButton') }}
        </div>
        <br>
      </v-container>
    </template>
    <template #default="">
      <SearchCard />
    </template>
  </v-dialog>
</template>

<script setup>
import i18n from '@/plugins/i18n';
import portfolio15 from '@/assets/portfolio15.png';
import portfolio25 from '@/assets/portfolio25.png';

import SearchCard from './SearchCard';

const setLanguage = (language) => {
  i18n.global.locale = language;
};
</script>
