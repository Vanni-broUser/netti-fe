<template>
  <v-navigation-drawer 
    :model-value="modelValue" 
    @update:model-value="$emit('update:modelValue', $event)"
    @click-outside="$emit('update:modelValue', false); $emit('close')" 
    temporary 
    :color="theme.current.value.primary"
    app
    :style="{width: isMobile ? '100%' : '360px'}"
  >
  <v-list density="compact" nav>
      <v-list-item>
        <MainTitle @toggleDrawer="closeDrawer" />
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
    <div>
      <p class="white_text" v-html="$t('Menu.bottomText')" />
      <SocialLinks />
    </div>
  </v-navigation-drawer>
</template>

<script setup>
  import MainTitle from './MainTitle';
  import SocialLinks from './SocialLinks';
  import MenuOperations from './MenuOperaions';

  import { useTheme } from 'vuetify';
  import mobile from '@/utils/mobile';

  const theme = useTheme();
  const isMobile = mobile.setupMobileUtils();

  const props = defineProps({
    modelValue: {
      type: Boolean,
      required: true
    }
  });

  const emit = defineEmits(["update:modelValue", "close"]);

  const closeDrawer = () => {
    emit("update:modelValue", false);
    emit("close");
  };
</script>

<style scoped>
  .white_text {
    font-size: small;
    color: white;
    margin-left: 8px;
    margin-right: 8px;
  }
</style>
