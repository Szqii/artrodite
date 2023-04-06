import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'animate.css';
import VueLazyload from 'vue-lazyload'
import Tres from '@tresjs/core'
import VueGtag from "vue-gtag";



export const app = createApp(App)

app.use(router)
app.use(VueLazyload)
app.use(Tres)
app.use(VueGtag, {
  config: { 
    id: "G-4KVXM081NZ",
  },
}, router);

app.mount('#app')

// createApp(App).use(router).use(VueLazyload).use(Tres).mount('#app')
