export const galleryCategories = ['Parkets', 'Vinils', 'Grīdlīstes'] as const
export type GalleryCategory = typeof galleryCategories[number]
export interface ProjectPhoto {
  src: string
  alt: string
}
export interface GalleryProject {
  id: string
  title: string
  summary: string
  description: string
  categories: GalleryCategory[]
  published: boolean
  cover: string
  photos: ProjectPhoto[]
}
