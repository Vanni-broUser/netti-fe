<template>
  <v-navigation-drawer
    permanent
    color="#ffffff" 
    app
    width="360"
  >
    <v-list density="compact" nav>
      <v-list-item>
        <MainTitle :alwaysMenu="true" />
      </v-list-item><br><br>
      <v-list-item to="/architetture">
        <b>{{ $t('Menu.pagina1') }}</b>
      </v-list-item>
      <v-list-item to="/progetti">
        <b>{{ $t('Menu.pagina2') }}</b>
      </v-list-item>
      <v-list-item to="/ricerche">
        <b>{{ $t('Menu.pagina3') }}</b>
      </v-list-item>
      <v-list-item to="/chi-siamo">
        {{ $t('Menu.pagina4') }}
      </v-list-item>
      <v-list-item to="/agenda">
        {{ $t('Menu.pagina5') }}
      </v-list-item>
      <v-list-item to="/contatti">
        {{ $t('Menu.pagina6') }}
      </v-list-item>
    </v-list>
    <MenuOperations />
    <ResearchLegend v-if="isRicerchePage" />
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
  import { computed } from 'vue';

  const route = useRoute();
  const isRicerchePage = computed(() => route.path === '/ricerche');
</script>

<style scoped>
.list-item {
  margin-top: 16px;
  padding: 0 16px;
}

.title-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.color-title {
  font-size: 40px;
  padding: 10px;
  padding-top: 13px;
  border-radius: 4px;
}

.flex-grow-1 {
  flex-grow: 1;
  overflow-y: auto;
}

.bottom-section {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  overflow: auto;
}
</style>
