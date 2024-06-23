// src/plugins/vue-masonry.js
import { VueMasonryPlugin } from 'vue-masonry/src/masonry.plugin.js';

import mitt from 'mitt';

const emitter = mitt();

export default {
  install(app) {
    app.config.globalProperties.emitter = emitter;
    app.use(VueMasonryPlugin);
  },
};