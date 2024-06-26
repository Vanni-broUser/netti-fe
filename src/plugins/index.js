import pinia from './pinia';
import { isMobileCongi } from '@/utils/mobile';
import desktopRouter from '@/router/desktop';
import mobileRouter from '@/router/mobile';
import vuetify from './vuetify';
import VueMasonryPlugin from './vue-masonry';

const router = isMobileCongi() ? mobileRouter : desktopRouter;

export function registerPlugins(app) {
  app.
    use(vuetify).
    use(router).
    use(pinia).
    use(VueMasonryPlugin);
}
