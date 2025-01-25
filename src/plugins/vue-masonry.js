import mitt from 'mitt';
import { VueMasonryPlugin } from 'vue-masonry/src/masonry.plugin.js';

const emitter = mitt();

export default {
  install(app) {
    app.config.globalProperties.emitter = emitter;
    app.use(VueMasonryPlugin);
  }
};