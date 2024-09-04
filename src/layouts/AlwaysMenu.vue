<template>
  <v-navigation-drawer permanent width="338">
    <v-list density="compact" nav>
      <v-list-item>
        <MainTitle :alwaysMenu="true" />
      </v-list-item><br><br>
      <router-link class="link" to="/architetture">
        <div :class="getClasses('/architetture')"><b>{{ $t('Menu.pagina1') }}</b></div>
      </router-link>
      <router-link class="link" to="/progetti">
        <div :class="getClasses('/progetti')"><b>{{ $t('Menu.pagina2') }}</b></div>
      </router-link>
      <router-link class="link" to="/ricerche/didattica">
        <div :class="getClasses('/ricerche')"><b>{{ $t('Menu.pagina3') }}</b></div>
      </router-link>
      <router-link class="link" to="/chi-siamo">
        <div :class="getClasses('/chi-siamo')">{{ $t('Menu.pagina4') }}</div>
      </router-link>
      <router-link class="link" to="/agenda">
        <div :class="getClasses('/agenda')">{{ $t('Menu.pagina5') }}</div>
      </router-link>
      <router-link class="link" to="/contatti">
        <div :class="getClasses('/contatti')">{{ $t('Menu.pagina6') }}</div>
      </router-link>
    </v-list>
    <ResearchLegend v-if="route.path.includes('/ricerche')" />
    <MenuOperations v-else />
    <div class="bottom-section">
      <SocialLinks :invertColor="true" />
    </div>
  </v-navigation-drawer>
</template>

<script setup>
  import MainTitle from './MainTitle';
  import SocialLinks from './SocialLinks';
  import MenuOperations from './MenuOperaions';
  import ResearchLegend from './ResearchLegend';

  import { useRoute } from 'vue-router';

  const route = useRoute();

  const getClasses = (page) => {
    const classes = ['ml-2', 'font-size', 'mt-3'];
    if (route.path.includes(page))
      classes.push('red');
    return classes;
  }
</script>

<style scoped>
  .bottom-section {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
    overflow: auto;
  }

  .font-size {
    font-size: large;
  }
</style>
