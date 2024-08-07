/*import { ref } from 'vue';

export const carousel = ref(null);

export const focusCarousel = () => {
  if (carousel.value && carousel.value.$el) {
    carousel.value.$el.focus();
  }
};

export default {
  focusCarousel,
  carousel
};
*/

import { ref } from 'vue';

export const carousel = ref(null);

export const focusCarousel = () => {
  if (carousel.value) {
    carousel.value.focus();
  }
};

export default {
  focusCarousel,
  carousel
};
