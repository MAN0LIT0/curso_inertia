import { createApp, h } from 'vue'
import { createInertiaApp, Link } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import Layout from "./componentes/Layout.vue";

createInertiaApp({
  resolve: async name => {
        let page = (await import(`./Pages/${name}`)).default;

        page.layout ??= Layout;

        return page;
    },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .component("Link", Link)
      .mount(el)
  },
})

InertiaProgress.init()
