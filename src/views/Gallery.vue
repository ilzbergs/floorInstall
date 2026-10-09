<template>
  <div class="bg-[#F8F5EF] text-left text-[#262421]">
    <section class="bg-[#2A2926] text-white">
      <div class="mx-auto max-w-7xl px-5 py-16 sm:py-24 lg:px-8">
        <p class="eyebrow text-[#D2AF8A]">Mūsu darbi</p>
        <h1 class="mt-4 max-w-4xl text-4xl font-semibold tracking-[-.045em] sm:text-6xl">{{ selectedProject?.title || 'Grīdas, kas izmaina telpas sajūtu.' }}</h1>
        <p class="mt-6 max-w-2xl text-lg leading-8 text-white/70">{{ selectedProject?.summary || 'Reāli projekti — no pamatnes sagatavošanas līdz pēdējai apdares detaļai.' }}</p>
      </div>
    </section>
    <section class="mx-auto max-w-7xl px-5 py-12 sm:py-16 lg:px-8">
      <p v-if="loading" role="status">Ielādējam projektus…</p>
      <div v-else-if="error" role="alert" class="rounded-2xl bg-white p-8">
        <p>{{ error }}</p><button class="action mt-4" @click="load">Mēģināt vēlreiz</button>
      </div>
      <template v-else-if="selectedProject">
        <router-link to="/gallery" class="text-[#7F5D3E] font-semibold">← Visi projekti</router-link>
        <div class="mt-8 grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <p class="eyebrow text-[#98724F]">Par projektu</p>
            <p class="mt-4 whitespace-pre-line text-lg leading-8 text-black/65">{{ selectedProject.description }}</p>
          </div>
          <div class="rounded-2xl border border-[#D9CBB9] bg-white p-6">
            <h2 class="text-xl font-semibold text-[#5C3A21]">Segums un paveiktie darbi</h2>
            <p v-if="selectedProject.flooring" class="mt-4 font-semibold">{{ selectedProject.flooring }}</p>
            <ul class="mt-4 list-disc space-y-2 pl-5 text-black/65"><li v-for="work in selectedProject.work" :key="work">{{ work }}</li></ul>
            <p class="mt-5 text-sm text-[#98724F]">{{ selectedProject.categories.join(' · ') }}</p>
          </div>
        </div>
        <div class="mt-10 flex flex-wrap gap-2" role="group" aria-label="Darba posmi">
          <button v-for="stage in availableStages" :key="stage" :aria-pressed="activeStage === stage" class="filter" :class="{ chosen: activeStage === stage }" @click="activeStage = stage">{{ stage }}</button>
        </div>
        <div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <figure v-for="photo in filteredPhotos" :key="photo.src">
            <button class="photo-button block w-full overflow-hidden rounded-2xl bg-[#E8E0D5]" :aria-label="`Palielināt: ${photo.alt}`" @click="openPhoto(photo)">
              <img :src="photo.src" :alt="photo.alt" loading="lazy" decoding="async" class="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-105" />
            </button>
            <figcaption class="mt-3"><span class="eyebrow text-[#98724F]">{{ photo.stage }}</span><p class="mt-1 text-sm text-black/65">{{ photo.caption }}</p></figcaption>
          </figure>
        </div>
      </template>
      <div v-else-if="route.params.id" class="rounded-2xl bg-white p-8">
        <h2 class="text-2xl font-semibold">Projekts nav atrasts.</h2>
        <router-link to="/gallery" class="mt-4 inline-block text-[#7F5D3E]">Atgriezties galerijā →</router-link>
      </div>
      <template v-else>
        <div class="flex flex-wrap gap-2" role="group" aria-label="Projektu filtri">
          <button v-for="category in categories" :key="category" class="filter" :class="{ chosen: activeCategory === category }" :aria-pressed="activeCategory === category" @click="selectCategory(category)">{{ category }}</button>
        </div>
        <p class="mt-5 text-sm text-black/55" role="status">{{ filteredProjects.length }} {{ filteredProjects.length === 1 ? 'projekts' : 'projekti' }}</p>
        <div class="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          <router-link v-for="project in visibleProjects" :key="project.id" :to="`/gallery/${project.id}`" class="project-card group overflow-hidden rounded-[1.5rem] border border-[#E4D9CC] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div class="relative overflow-hidden">
              <img :src="project.cover" :alt="project.title" loading="lazy" decoding="async" class="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />
              <span class="absolute bottom-4 right-4 rounded-full bg-[#242321]/80 px-3 py-1 text-xs text-white">{{ project.photos.length }} foto</span>
            </div>
            <div class="p-6">
              <p class="eyebrow text-[#98724F]">{{ project.categories.join(' · ') }}</p>
              <h2 class="mt-3 text-2xl font-semibold leading-tight text-[#5C3A21]">{{ project.title }}</h2>
              <p class="mt-3 text-sm leading-6 text-black/60">{{ project.summary }}</p>
              <p class="mt-5 font-semibold text-[#7F5D3E]">Apskatīt projektu →</p>
            </div>
          </router-link>
        </div>
        <p v-if="!filteredProjects.length" class="mt-8 rounded-2xl border border-dashed border-[#D9CBB9] p-10 text-center text-black/60">Šajā kategorijā projektus pievienosim drīzumā.</p>
        <button v-if="hasMore" class="action mx-auto mt-10 block" @click="visibleCount += 9">Ielādēt vēl projektus ↓</button>
      </template>
    </section>
    <section class="bg-[#F5F0E1] px-5 py-14">
      <div class="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6">
        <h2 class="text-3xl font-semibold text-[#5C3A21]">Arī jūsu telpa var izskatīties šādi.</h2>
        <router-link to="/contact" class="action">Saņemt piedāvājumu →</router-link>
      </div>
    </section>
    <dialog ref="lightbox" class="lightbox" @click="handleBackdrop" @close="selectedPhoto = null">
      <div v-if="selectedPhoto" class="relative">
        <button autofocus class="close-button" aria-label="Aizvērt attēlu" @click="lightbox?.close()">×</button>
        <img :src="selectedPhoto.src" :alt="selectedPhoto.alt" class="max-h-[75dvh] w-full object-contain" />
        <div class="mt-4 flex items-center justify-between gap-4 text-white">
          <button class="action" :disabled="photoIndex <= 0" aria-label="Iepriekšējais attēls" @click="movePhoto(-1)">←</button>
          <p class="text-center text-sm">{{ selectedPhoto.caption }}<br /><span class="text-white/60">{{ photoIndex + 1 }} / {{ filteredPhotos.length }}</span></p>
          <button class="action" :disabled="photoIndex >= filteredPhotos.length - 1" aria-label="Nākamais attēls" @click="movePhoto(1)">→</button>
        </div>
      </div>
    </dialog>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useGallery } from '@/composables/useGallery'
import { galleryCategories, photoStages, type GalleryCategory, type ProjectPhoto, type PhotoStage } from '@/types/gallery'

const route = useRoute()
const { projects, loading, error, load } = useGallery()
const categories = ['Visi', ...galleryCategories] as const
const activeCategory = ref<GalleryCategory | 'Visi'>('Visi')
const activeStage = ref<PhotoStage | 'Visi'>('Visi')
const visibleCount = ref(9)
const selectedPhoto = ref<ProjectPhoto | null>(null)
const lightbox = ref<HTMLDialogElement | null>(null)
const selectedProject = computed(() => projects.value.find(p => p.id === route.params.id))
const filteredProjects = computed(() => projects.value.filter(p => activeCategory.value === 'Visi' || p.categories.includes(activeCategory.value)))
const visibleProjects = computed(() => filteredProjects.value.slice(0, visibleCount.value))
const hasMore = computed(() => visibleProjects.value.length < filteredProjects.value.length)
const availableStages = computed<(PhotoStage | 'Visi')[]>(() => ['Visi', ...photoStages.filter(stage => selectedProject.value?.photos.some(p => p.stage === stage))])
const filteredPhotos = computed(() => selectedProject.value?.photos.filter(p => activeStage.value === 'Visi' || p.stage === activeStage.value) || [])
const photoIndex = computed(() => filteredPhotos.value.findIndex(p => p.src === selectedPhoto.value?.src))
const selectCategory = (category: GalleryCategory | 'Visi') => { activeCategory.value = category; visibleCount.value = 9 }
const openPhoto = async (photo: ProjectPhoto) => { selectedPhoto.value = photo; await nextTick(); lightbox.value?.showModal() }
const movePhoto = (direction: number) => { const photo = filteredPhotos.value[photoIndex.value + direction]; if (photo) selectedPhoto.value = photo }
const handleBackdrop = (event: MouseEvent) => {
  if (event.target !== lightbox.value) return
  const rect = lightbox.value?.getBoundingClientRect()
  if (rect && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) lightbox.value?.close()
}
const keys = (event: KeyboardEvent) => {
  if (!lightbox.value?.open) return
  if (event.key === 'ArrowRight') movePhoto(1)
  if (event.key === 'ArrowLeft') movePhoto(-1)
}
watch(() => route.params.id, () => { activeStage.value = 'Visi'; lightbox.value?.close() })
onMounted(() => { void load(); window.addEventListener('keydown', keys) })
onBeforeUnmount(() => { lightbox.value?.close(); window.removeEventListener('keydown', keys) })
</script>

<style scoped>
.eyebrow { font-size: .68rem; font-weight: 700; text-transform: uppercase; letter-spacing: .18em; }
.filter { border: 1px solid #d9cbb9; background: white; color: #7f5d3e; border-radius: 99px; padding: .65rem 1.2rem; font-weight: 600; }
.filter.chosen, .action { background: #98724f; color: white; border-color: #98724f; }
.action { display: inline-block; padding: .8rem 1.2rem; border-radius: .8rem; font-weight: 600; }
.action:hover { background: #7f5d3e; }
button:disabled { opacity: .35; cursor: not-allowed; }
button:focus-visible, a:focus-visible { outline: 2px solid #98724f; outline-offset: 4px; }
.lightbox { border: 0; padding: 1rem; background: #242321; border-radius: 1rem; width: min(95vw, 70rem); max-height: 95dvh; overflow: auto; }
.lightbox::backdrop { background: #17100bea; }
.close-button { position: absolute; right: .5rem; top: .5rem; border-radius: 99px; background: #242321d9; color: white; width: 2.75rem; height: 2.75rem; font-size: 1.8rem; }
@media (prefers-reduced-motion: reduce) { .project-card, img { transition: none; } }
</style>
