<template>
  <v-dialog max-width="500">
    <template v-slot:activator="{ props: activatorProps }">
      <v-container>
        <br>
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
      </v-container>
      <br>
    </template>
    <template v-slot:default="">
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
