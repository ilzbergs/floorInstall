import { services } from '@/data/services'
import type { GalleryProject } from '@/types/gallery'

export const siteOrigin = 'https://floorinstall.lv'
const brand = 'FloorInstall'
const defaults: Record<string, [string, string]> = {
  '/': ['Parketa un vinila ieklāšana Latvijā | FloorInstall', 'Parketa un click vinila ieklāšana, grīdu restaurācija un sagatavošana visā Latvijā. Vairāk nekā 15 gadu pieredze. Sazinieties ar FloorInstall.'],
  '/services': ['Grīdu ieklāšana, restaurācija un kopšana | FloorInstall', 'Parketa un vinila ieklāšana, grīdlīstu uzstādīšana, pamatnes sagatavošana un grīdu atjaunošana. Iepazīstiet FloorInstall pakalpojumus.'],
  '/gallery': ['Grīdu ieklāšanas projektu galerija | FloorInstall', 'Apskatiet FloorInstall paveiktos darbus: parketa ieklāšanu, grīdlīstu apdari un darba procesu reālos objektos.'],
  '/contact': ['Kontakti un grīdas darbu piedāvājums | FloorInstall', 'Pārrunājiet savu grīdas projektu ar FloorInstall. Strādājam visā Latvijā. Tālrunis +371 22 063 849, e-pasts info@floorinstall.lv.'],
  '/privacy-policy': ['Privātuma politika | FloorInstall', 'Informācija par FloorInstall personas datu apstrādi, analītikas piekrišanu un jūsu tiesībām.'],
  '/terms': ['Pakalpojumu noteikumi | FloorInstall', 'FloorInstall darbu pieteikšanas, saskaņošanas, apmaksas un garantijas vispārējā kārtība.'],
}

export function getSeo(path: string, projects: GalleryProject[] = []) {
  const cleanPath = path.split(/[?#]/)[0]?.replace(/\/$/, '') || '/'
  const service = services.find(s => cleanPath === `/services/${s.slug}`)
  const project = projects.find(p => p.published && cleanPath === `/gallery/${p.id}`)
  const base = defaults[cleanPath]
  const found = Boolean(base || service || project)
  const title = service ? `${service.title} | ${brand}` : project ? `${project.title} | ${brand}` : base?.[0] || 'Lapa nav atrasta | FloorInstall'
  const description = service?.intro || project?.summary || base?.[1] || 'Pieprasītā lapa nav atrasta. Apskatiet FloorInstall pakalpojumus un paveiktos darbus.'
  const image = new URL(service?.image || project?.cover || '/images/hero.webp', siteOrigin).href
  const url = siteOrigin + cleanPath
  const business = {
    '@type': 'HomeAndConstructionBusiness', '@id': siteOrigin + '/#business',
    name: brand, url: siteOrigin, telephone: '+37122063849', email: 'info@floorinstall.lv',
    areaServed: { '@type': 'Country', name: 'Latvija' },
    sameAs: ['https://www.facebook.com/floorinstall.lv'],
  }
  const graph: object[] = [business, {
    '@type': 'WebPage', '@id': url + '#webpage', url, name: title, description,
    inLanguage: 'lv-LV', publisher: { '@id': business['@id'] },
  }]
  if (service) graph.push({
    '@type': 'Service', name: service.title, description, url,
    provider: { '@id': business['@id'] }, areaServed: { '@type': 'Country', name: 'Latvija' },
  })
  if (project) graph.push({
    '@type': 'ImageGallery', name: project.title, description: project.description, url,
    image: project.photos.map(photo => new URL(photo.src, siteOrigin).href),
  })
  if (cleanPath !== '/' && found) {
    const crumbs = [{ name: 'Sākums', item: siteOrigin + '/' }]
    if (service) crumbs.push({ name: 'Pakalpojumi', item: siteOrigin + '/services' })
    if (project) crumbs.push({ name: 'Galerija', item: siteOrigin + '/gallery' })
    crumbs.push({ name: service?.title || project?.title || title.split(' | ')[0]!, item: url })
    graph.push({ '@type': 'BreadcrumbList', itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, ...c })) })
  }
  return { title, description, image, url, found, structuredData: { '@context': 'https://schema.org', '@graph': graph } }
}

export function updateSeo(path: string, projects: GalleryProject[], noindex = false) {
  const seo = getSeo(path, projects)
  document.title = seo.title
  const meta = (key: string, value: string, property = false) => {
    const attribute = property ? 'property' : 'name'
    let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)
    if (!element) { element = document.createElement('meta'); element.setAttribute(attribute, key); document.head.append(element) }
    element.content = value
  }
  meta('description', seo.description)
  meta('robots', noindex || !seo.found ? 'noindex, follow' : 'index, follow, max-image-preview:large')
  for (const [key, value] of Object.entries({ title: seo.title, description: seo.description, url: seo.url, image: seo.image, 'image:alt': seo.title })) meta('og:' + key, value, true)
  for (const [key, value] of Object.entries({ title: seo.title, description: seo.description, image: seo.image })) meta('twitter:' + key, value)
  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.append(canonical) }
  canonical.href = seo.url
  let json = document.getElementById('seo-schema')
  if (!json) { json = document.createElement('script'); json.id = 'seo-schema'; json.setAttribute('type', 'application/ld+json'); document.head.append(json) }
  json.textContent = JSON.stringify(seo.structuredData)
}
