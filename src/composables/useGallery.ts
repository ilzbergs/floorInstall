import { publicAsset } from '@/utils/publicAsset'
import { ref } from 'vue'
import type { GalleryProject } from '@/types/gallery'

const projects = ref<GalleryProject[]>([])
const loading = ref(false)
const error = ref('')
let pending: Promise<void> | undefined
let loaded = false

export function useGallery() {
  const load = async () => {
    if (loaded) return
    if (pending) return pending
    loading.value = true
    error.value = ''
    pending = (async () => {
      try {
        const response = await fetch(publicAsset('/gallery-seed.json'), { headers: { Accept: 'application/json' } })
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
