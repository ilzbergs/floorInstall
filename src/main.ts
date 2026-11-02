import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import { setupAnalytics } from './composables/useAnalytics'
import { watch } from 'vue'
import { useGallery } from './composables/useGallery'
import { updateSeo } from './utils/seo'

const app = createApp(App)

app.use(router)
const gallery = useGallery()
watch(
  [() => router.currentRoute.value.path, gallery.projects],
  ([path]) => updateSeo(path, gallery.projects.value, import.meta.env.MODE === 'github' || import.meta.env.VITE_SITE_MODE === 'maintenance'),
  { immediate: true },
)
setupAnalytics(router)

app.mount('#app')
