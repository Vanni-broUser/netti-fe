<template>
  <v-card :title="$t('SearchCard.searchBoxTitle')">
    <v-form @submit.prevent="searchPosts">
      <v-card-text class="margin">
        {{ $t('SearchCard.titleCardText') }}
        <v-text-field v-model="text" variant="outlined"/>
        {{ $t('SearchCard.titleCardYear') }}
        <v-select v-model="year" variant="outlined" :items="getYears()" />
        {{ $t('SearchCard.titleCardPlace') }}
        <v-text-field v-model="place" variant="outlined" />
      </v-card-text>
      <v-card-actions class="margin">
        <v-btn :text="$t('SearchCard.button')" type="submit" :color="theme.current.value.primary" />
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

  const getYears = () => {
    const years = [];
    for (let year = 2000; year <= (new Date()).getFullYear(); year++)
      years.push(year);
    return years;
  };

  const searchPosts = () => {
    const params = new URLSearchParams();
    if (text.value)
      params.append('text', text.value);
    if (year.value)
      params.append('year', year.value);
    if (place.value)
      params.append('place', place.value);
    if (params.toString())
      location.href = `/ricerca-post?${params.toString()}`;
  };
</script>

<style scoped>
  .margin {
    margin-left: 7px;
    margin-right: 7px;
  }
</style>
