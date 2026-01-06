import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import Gallery from '../views/Gallery.vue'
import Contact from '../views/Contact.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import Terms from '../views/Terms.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/services', name: 'services', component: Services },
  { path: '/gallery', name: 'gallery', component: Gallery },
  { path: '/contact', name: 'contact', component: Contact },
  { path: '/privacy-policy', name: 'privacy-policy', component: PrivacyPolicy },
  { path: '/terms', name: 'terms', component: Terms },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
