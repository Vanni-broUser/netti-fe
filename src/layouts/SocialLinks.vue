<template>
  <v-container>
    <v-row>
      <v-col>
        <v-icon icon="mdi-facebook" />
      </v-col>
      <v-col>
        <v-icon icon="mdi-instagram" />
      </v-col>
        <v-col>
        <v-icon :style="getStyle(devisare)" />
        </v-col>
      <v-col>
        <v-icon :style="getStyle(archilovers)" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import devisare from '@/assets/social/devisare.png';
import archilovers from '@/assets/social/archilovers.png';

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
