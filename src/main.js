import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'animate.css';
import VueLazyload from 'vue-lazyload'
import Tres from '@tresjs/core'


export const app = createApp(App)

app.use(router)
app.use(VueLazyload)
app.use(Tres)
app.mount('#app')

// createApp(App).use(router).use(VueLazyload).use(Tres).mount('#app')
