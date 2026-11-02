import { publicAsset } from '@/utils/publicAsset'
import { ref } from 'vue'
import type { GalleryProject } from '@/types/gallery'

// Reuse build-time data so project pages do not briefly become "not found".
const initialProjects = readPrerenderedProjects()
const projects = ref<GalleryProject[]>(initialProjects || [])
const loading = ref(false)
const error = ref('')
let pending: Promise<void> | undefined
let loaded = initialProjects !== null

function readPrerenderedProjects(): GalleryProject[] | null {
  if (typeof document === 'undefined') return null
  const content = document.getElementById('gallery-state')?.textContent
  if (!content) return null
  try {
    const data = JSON.parse(content)
    return Array.isArray(data) ? data as GalleryProject[] : null
  } catch {
    return null
  }
}

export function useGallery() {
  const load = async () => {
    if (loaded) return
    if (pending) return pending
    loading.value = true
    error.value = ''
    pending = (async () => {
      try {
        const response = await fetch(publicAsset('/gallery-seed.json'), {
          cache: 'no-store',
          headers: { Accept: 'application/json' },
        })
        if (!response.ok) throw new Error('Galeriju šobrīd neizdevās ielādēt.')
        const data: unknown = await response.json()
        if (!Array.isArray(data)) throw new Error('Galerijas atbilde nav derīga.')
        projects.value = (data as GalleryProject[]).filter(project => project.published).map(project => ({
          ...project,
          cover: publicAsset(project.cover),
          photos: project.photos.map(photo => ({ ...photo, src: publicAsset(photo.src) })),
        }))
        loaded = true
      } catch {
        error.value = 'Galeriju šobrīd neizdevās ielādēt. Lūdzu, mēģiniet vēlreiz.'
      } finally {
        loading.value = false
        pending = undefined
      }
    })()
    return pending
  }
  return { projects, loading, error, load }
}
