import { createApp, h } from 'vue'
import { createInertiaApp, Head, Link } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import Layout from "./componentes/Layout.vue";
import bootstrap from './bootstrap'

createInertiaApp({
  resolve: async name => {
        let page = (await import(`./Pages/${name}`)).default;

        if(page.layout === undefined) {
            page.layout = Layout;
        }

        return page;
    },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(bootstrap)
      .component("Link", Link)
      .component("Head", Head)
      .mount(el)
  },
  title: title => "Anime List - " + title
});

InertiaProgress.init();
