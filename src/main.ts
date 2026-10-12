import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import { setupAnalytics } from './composables/useAnalytics'

const app = createApp(App)

app.use(router)
setupAnalytics(router)

app.mount('#app')
