<template>
  <v-dialog max-width="500">
    <template v-slot:activator="{ props: activatorProps }">
      <v-container>
        <div @click="setLanguage('it')" style="float: left; margin-left: 2px; cursor: pointer;">IT</div>
        <div @click="setLanguage('en')" style="float: left; margin-left: 20px; cursor: pointer;">EN</div>
        <br><br>
        <a href="/portfolio.pdf">
          <v-card width="150" elevation="5">
            <v-img :src="portfolio" />
          </v-card>
        </a>
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
  import portfolio from '@/assets/portfolio.jpg';

  import SearchCard from './SearchCard';

  const setLanguage = (language) => {
    i18n.global.locale = language;
  };
</script>
