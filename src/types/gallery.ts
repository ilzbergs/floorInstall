export const galleryCategories = ['Parkets', 'Vinils', 'Grīdlīstes'] as const
export type GalleryCategory = typeof galleryCategories[number]
export const photoStages = ['Pirms', 'Darba laikā', 'Rezultāts'] as const
export type PhotoStage = typeof photoStages[number]
export interface ProjectPhoto {
  src: string
  alt: string
  caption: string
  stage: PhotoStage
}
export interface GalleryProject {
  id: string
  title: string
  summary: string
  description: string
  flooring: string
  work: string[]
  categories: GalleryCategory[]
  published: boolean
  cover: string
  photos: ProjectPhoto[]
}
