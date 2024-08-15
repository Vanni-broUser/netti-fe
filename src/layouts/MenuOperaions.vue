<template>
  <v-dialog max-width="500">
    <template v-slot:activator="{ props: activatorProps }">
      <br><v-btn text="IT" variant="text" @click="setLanguage('it')" />
      <v-btn text="EN" variant="text" @click="setLanguage('en')" />
      <br><v-btn :text="$t('MenuOperations.searchButton')" variant="text" v-bind="activatorProps" />
      <br><v-container>
        <a href="/portfolio.pdf">
          <v-card width="150" elevation="5">
            <v-img :src="portfolio" />
          </v-card>
        </a>
      </v-container><br>
    </template>
    <template v-slot:default="{ isActive }">
      <v-card :title="$t('MenuOperations.searchBoxTtile')">
        <v-timeline>
          <v-timeline-item>Ricerca testuale</v-timeline-item>
          <v-timeline-item>
            <template v-slot:opposite>Ricerca per anno
            </template>
          </v-timeline-item>
          <v-timeline-item>Ricerca per luogo</v-timeline-item>
        </v-timeline>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup>
  import i18n from '@/plugins/i18n';
  import portfolio from '@/assets/portfolio.jpg';

  const setLanguage = (language) => {
    i18n.global.locale = language;
  };
</script>
