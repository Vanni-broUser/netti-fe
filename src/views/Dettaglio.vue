<template>
  <v-dialog v-model="dialog" max-width="80vw" persistent>
    <v-card>
      <Carousel mode="detail" :player="true" :content="images" />
      <v-btn icon class="close-button">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import Carousel from '@/components/Carousel.vue';

const { id, content } = defineProps(['id', 'content']);
const router = useRouter();
const dialog = ref(false);

import immagine1 from '@/assets/817321E2-3ABC-453A-9336-C1A5A0DFDAAE-homepage.jpeg';
import immagine2 from '@/assets/IMG_9243-homepage.jpg';
import immagine3 from '@/assets/M_03-homepage.jpg';
import immagine4 from '@/assets/Netti-10-bis.jpg';
import immagine6 from '@/assets/Prova.jpg';
import immagine7 from '@/assets/slide_1.jpg';
import immagine8 from '@/assets/slide_2.jpg';
import immagine9 from '@/assets/slide_6.jpg';

const images = [
  { src: immagine1 },
  { src: immagine2 },
  { src: immagine3 },
  { src: immagine4 },
  { src: immagine6 },
  { src: immagine7 },
  { src: immagine8 },
  { src: immagine9 },
];

watchEffect(() => {
  // Monitoriamo il cambiamento dell'ID per aprire automaticamente il dialog
  dialog.value = !!router.currentRoute.value.params.id;
});

function goToRicerche() {
  router.push('/ricerche');
}
</script>

<style scoped>
.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #ff0000;  /* Sfondo rosso */
  color: white;  /* Testo bianco */
  border-radius: 4px;  /* Angoli arrotondati per rendere il bottone quadrato */
  width: 36px;  /* Larghezza del bottone */
  height: 36px;  /* Altezza del bottone */
  display: flex;
  justify-content: center;
  align-items: center;
}

.close-button .v-icon {
  font-size: 24px;  /* Dimensione della "x" */
  color: white;  /* Colore della "x" */
}
</style>

