import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import ElementPlus from 'element-plus'
import App from './App.vue'

const app = createApp(App)

const pinia = createPinia()
// pinia.use(piniaPluginPersistedstate)

app.use(pinia)
// app.use(router)
app.use(ElementPlus)

app.mount('#app')

