import { createSSRApp } from 'vue'
import { renderToString } from '@vue/server-renderer'
import App from './App.vue'
import router from './router'
import { useGallery } from './composables/useGallery'
import { services } from './data/services'
import { getSeo } from './utils/seo'
import type { GalleryProject } from './types/gallery'

export async function render(path: string, projects: GalleryProject[]) {
  useGallery().projects.value = projects
  await router.push(path)
  await router.isReady()
  return { html: await renderToString(createSSRApp(App).use(router)), seo: getSeo(path, projects) }
}
export function paths(projects: GalleryProject[]) {
  return ['/', '/services', '/gallery', '/contact', '/privacy-policy', '/terms',
    ...services.map(s => '/services/' + s.slug),
    ...projects.filter(p => p.published).map(p => '/gallery/' + p.id)]
}
