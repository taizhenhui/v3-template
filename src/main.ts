import { createApp } from 'vue'
import router from './router'
import './assets/main.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import moment from 'moment'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPersist)

app.config.globalProperties.$moment = moment

app.use(router)
  .use(pinia)
  .mount('#app')


