<template>
  <v-card :title="$t('SearchCard.searchBoxTtile')">
    <v-form @submit.prevent="searchPosts">
      <v-card-text>
        <v-slider v-model="searchType" step="1" max="2" :color="theme.current.value.primary" />
        <v-window v-model="searchType">
          <v-window-item>
            {{ $t('SearchCard.titleCard1') }}<br><br>
            <v-text-field v-model="text" variant="outlined" />
          </v-window-item>
          <v-window-item>
            {{ $t('SearchCard.titleCard2') }}<br><br>
            <v-select v-model="year" variant="outlined" :items="getYears()" />
          </v-window-item>
          <v-window-item>
            {{ $t('SearchCard.titleCard3') }}<br><br>
            <v-text-field v-model="place" variant="outlined" />
          </v-window-item>
        </v-window>
      </v-card-text>
      <v-card-actions>
        <v-btn text="Cerca" type="submit" :color="theme.current.value.primary" />
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script setup>
  import { ref } from 'vue';
  import { useTheme } from 'vuetify';

  const text = ref('');
  const year = ref('');
  const place = ref('');
  const theme = useTheme();
  const searchType = ref(0);

  const getYears = () => {
    const years = [];
    for (let year = 2000; year <= (new Date()).getFullYear(); year++)
      years.push(year);
    return years;
  };

  const searchPosts = () => {
    if (searchType.value == 1)
      location.href = `/ricerca-post?name=year&value=${year.value}`;
  };
</script>
