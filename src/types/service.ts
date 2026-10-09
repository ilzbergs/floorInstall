export interface Service {
  slug: string
  title: string
  category: string
  featured: boolean
  shortDescription: string
  description: string
  image: string
  intro: string
  benefits: string[]
  process: string[]
}

export interface ServiceTechnicalGuide {
  headings?: {
    preparationTitle: string
    preparationIntro: string
    installationTitle: string
    installationIntro: string
    aftercareTitle: string
  }
  conditions: { title: string; value: string; text: string }[]
  preparation: string[]
  moisture: { substrate: string; level: string; text: string }[]
  moistureNote: string
  bonding: { title: string; text: string }[]
  heating: string
  aftercare: string
  faq: { question: string; answer: string }[]
}
