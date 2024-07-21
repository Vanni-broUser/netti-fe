<template>
  <v-container>
    <v-row>
      <v-col>
        <a href="https://www.facebook.com/nettiarchitetti/" target="_blank">
          <v-icon icon="mdi-facebook" />
        </a>
      </v-col>
      <v-col>
        <a href="https://www.instagram.com/nettiarchitetti/" target="_blank">
          <v-icon icon="mdi-instagram" />
        </a>
      </v-col>
      <v-col>
        <a href="https://divisare.com/authors/10021575-netti-architetti" target="_blank">
          <v-icon :style="getStyle(devisare)" />
        </a>
      </v-col>
      <v-col>
        <a href="https://www.archilovers.com/lorenzo-netti/" target="_blank">
          <v-icon :style="getStyle(archilovers)" />
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import devisare from '@/assets/social/devisare.png';
import archilovers from '@/assets/social/archilovers2.png';

const { invertColor } = defineProps(['invertColor']);

const getStyle = (image) => {
  let style = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  };
  if (invertColor) style.filter = 'invert(100%)';
  return style;
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  text-decoration: none;
  color: inherit;
}

a:active {
  text-decoration: none;
  color: inherit;
}

a:visited {
  text-decoration: none;
  color: inherit;
}
</style>
