import pinia from './pinia';
import router from './router';
import vuetify from './vuetify';
import VueMasonryPlugin from './vue-masonry';

export function registerPlugins(app) {
  app.
    use(vuetify).
    use(router).
    use(pinia).
    use(VueMasonryPlugin);
}
