import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'animate.css';
import VueLazyload from 'vue-lazyload'
import Tres from '@tresjs/core'
import VueAnalytics from 'vue-analytics';



export const app = createApp(App)

app.use(router)
app.use(VueLazyload)
app.use(Tres)
app.mount('#app')
app.use(VueAnalytics, {
    id: 'G-4KVXM081NZ',
    router
})

// createApp(App).use(router).use(VueLazyload).use(Tres).mount('#app')
