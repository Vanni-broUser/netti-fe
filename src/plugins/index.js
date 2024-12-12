import i18n from "./i18n";
import pinia from "./pinia";
import router from "./router";
import vuetify from "./vuetify";
import head from "./head";
import vueMasonryPlugin from "./vue-masonry";

export function registerPlugins(app) {
  app
    .use(i18n)
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(head)
    .use(vueMasonryPlugin);
}
