<template>
  <div class="min-w-0">
    <p v-if="loading" class="text-black/60" role="status">Ielādējam projektus…</p>
    <p v-else-if="error" class="text-black/60">Projektus varat apskatīt <router-link to="/gallery" class="underline">galerijā</router-link>.</p>
    <div v-else class="grid gap-5" :class="{ 'sm:grid-cols-2': featuredProjects.length > 1 }">
      <router-link v-for="project in featuredProjects" :key="project.id" :to="`/gallery/${project.id}`" class="project-preview group relative isolate flex min-h-[28rem] overflow-hidden rounded-[1.5rem] bg-[#4B3829] shadow-[0_20px_45px_-28px_rgba(58,38,20,.75)]">
        <img :src="project.cover" :alt="project.title" loading="lazy" decoding="async" class="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <div class="absolute inset-0 bg-gradient-to-t from-[#17100B]/90 via-transparent to-transparent"></div>
        <div class="relative z-10 mt-auto p-6 sm:p-8">
          <p class="text-xs font-bold uppercase tracking-[.18em] text-[#E4BD91]">{{ project.categories.join(' · ') }}</p>
          <h3 class="mt-3 text-2xl font-semibold leading-tight text-white sm:text-3xl">{{ project.title }}</h3>
          <p class="mt-3 text-sm leading-6 text-white/80">{{ project.summary }}</p>
          <p class="mt-5 font-semibold text-white">Apskatīt projektu · {{ project.photos.length }} foto →</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { publicAsset } from '@/utils/publicAsset'
import { computed, onMounted } from 'vue'
import { useGallery } from '@/composables/useGallery'

const { projects, loading, error, load } = useGallery()
const featuredProjects = computed(() => projects.value.slice(0, 2))
onMounted(() => { void load() })
</script>

<style scoped>
.project-preview:focus-visible { outline: 2px solid #98724f; outline-offset: 4px; }
@media (prefers-reduced-motion: reduce) { img { transition: none; } }
</style>
