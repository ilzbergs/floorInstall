import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import ServiceDetail from '../views/ServiceDetail.vue'
import Gallery from '../views/Gallery.vue'
import Contact from '../views/Contact.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import Terms from '../views/Terms.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/services', name: 'services', component: Services },
  { path: '/services/:slug', name: 'service-detail', component: ServiceDetail },
  { path: '/gallery', name: 'gallery', component: Gallery },
  { path: '/gallery/:id', name: 'gallery-project', component: Gallery },
  { path: '/contact', name: 'contact', component: Contact },
  { path: '/privacy-policy', name: 'privacy-policy', component: PrivacyPolicy },
  { path: '/terms', name: 'terms', component: Terms },
]

const router = createRouter({
  history: import.meta.env.MODE === 'github'
    ? createWebHashHistory(import.meta.env.BASE_URL)
    : createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: (to, _from, savedPosition) => {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

export default router
