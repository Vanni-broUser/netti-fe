<template>
  <v-navigation-drawer 
    :model-value="modelValue" 
    @update:model-value="$emit('update:modelValue', $event)"
    @click-outside="$emit('update:modelValue', false); $emit('close')" 
    temporary 
    :color="theme.current.value.primary"
    :style="{width: isMobile ? '100%' : '338px'}"
  >
  <v-list density="compact" nav>
      <v-list-item>
        <MainTitle @toggleDrawer="closeDrawer" />
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
    <MenuOperations />
    <div>
      <p class="white-text" v-for="n in 6">
        {{ $t(`Menu.bottomTextLine${n}`) }}
      </p>
      <br><p class="white-text"><b>Lorenzo Netti &nbsp; Gloria Valente</b></p>
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
  import { useRoute } from 'vue-router';

  const theme = useTheme();
  const route = useRoute();
  const isMobile = mobile.setupMobileUtils();

  const props = defineProps({
    modelValue: Boolean
  });

  const emit = defineEmits(["update:modelValue", "close"]);

  const closeDrawer = () => {
    emit("update:modelValue", false);
    emit("close");
  };

  const getClasses = (page) => {
    const classes = ['ml-2', 'font-size', 'mt-3'];
    if (route.path.includes(page))
      classes.push('black');
    return classes;
  }
</script>

<style scoped>
  .white-text {
    font-size: 12.5px;
    color: white;
    margin-left: 15px;
    margin-right: 15px;
  }

  .font-size {
    font-size: large;
  }
</style>
