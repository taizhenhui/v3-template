import { createApp } from 'vue'
import router from './router'
import './assets/main.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import moment from 'moment'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { permissionDirective } from '@/directives/permission'
const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPersist)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.config.globalProperties.$moment = moment

app.directive('permission', permissionDirective)
app.use(router)
  .use(pinia)
  .mount('#app')


