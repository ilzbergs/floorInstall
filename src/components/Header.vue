<template>
  <header
    class="site-header sticky top-0 z-50 border-b border-black/5 bg-[#F8F5EF]/95 backdrop-blur"
    :class="{ 'header-hidden': hidden && !open }"
    @focusin="hidden = false"
  >
    <div class="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
      <router-link to="/" class="flex items-center gap-3" @click="open = false">
        <img src="../assets/logo.svg" alt="FloorInstall" width="215" height="48" class="h-11 w-auto" />
      </router-link>

      <nav class="hidden items-center gap-8 md:flex">
        <router-link to="/" class="nav-link" :class="{ 'is-active': isHomeActive }">Sākums</router-link>
        <router-link to="/services" class="nav-link" :class="{ 'is-active': isServicesActive }">Pakalpojumi</router-link>
        <router-link to="/gallery" class="nav-link" :class="{ 'is-active': isGalleryActive }">Galerija</router-link>
        <router-link to="/#par-mums" class="nav-link" :class="{ 'is-active': isAboutActive }">Par mums</router-link>
        <router-link to="/contact" class="nav-link" :class="{ 'is-active': isContactActive }">Kontakti</router-link>
      </nav>

      <div class="hidden items-center gap-3 md:flex">
        <router-link
          to="/contact"
          class="inline-flex items-center gap-2 rounded-xl bg-[#98724F] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#7F5D3E]"
        >
          Saņemt piedāvājumu
          <span aria-hidden="true">→</span>
        </router-link>
      </div>

      <button
        type="button"
        class="grid h-11 w-11 place-items-center rounded-xl border border-black/10 text-[#272522] md:hidden"
        :aria-label="open ? 'Aizvērt izvēlni' : 'Atvērt izvēlni'"
        :aria-expanded="open"
        @click="open = !open"
      >
        <svg v-if="!open" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-width="1.8" d="M4 7h16M4 12h16M4 17h16" />
        </svg>
        <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-width="1.8" d="M6 6l12 12M18 6 6 18" />
        </svg>
      </button>
    </div>

    <div v-if="open" class="border-t border-black/5 bg-[#F8F5EF] px-5 py-5 md:hidden">
      <nav class="mx-auto flex max-w-7xl flex-col gap-1">
        <router-link to="/" class="mobile-link" @click="open = false">Sākums</router-link>
        <router-link to="/services" class="mobile-link" @click="open = false">Pakalpojumi</router-link>
        <router-link to="/gallery" class="mobile-link" @click="open = false">Galerija</router-link>
        <router-link to="/#par-mums" class="mobile-link" @click="open = false">Par mums</router-link>
        <router-link to="/contact" class="mobile-link" @click="open = false">Kontakti</router-link>
        <router-link
          to="/contact"
          class="mt-3 rounded-xl bg-[#98724F] px-5 py-3 text-center font-semibold text-white"
          @click="open = false"
        >
          Saņemt piedāvājumu
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const open = ref(false)
const hidden = ref(false)
const route = useRoute()
const isHomeActive = computed(() => route.path === '/' && !route.hash)
const isServicesActive = computed(() => route.path.startsWith('/services'))
const isGalleryActive = computed(() => route.path === '/gallery')
const isAboutActive = computed(() => route.path === '/' && route.hash === '#par-mums')
const isContactActive = computed(() => route.path === '/contact')
let scrollAnchor = 0

const updateHeader = () => {
  const scrollY = Math.max(0, window.scrollY)
  if (scrollY < 96 || open.value) {
    hidden.value = false
    scrollAnchor = scrollY
    return
  }
  // Ignore tiny wheel/trackpad movements so the menu does not flicker.
  const distance = scrollY - scrollAnchor
  if (Math.abs(distance) < 12) return
  hidden.value = distance > 0
  scrollAnchor = scrollY
}

watch(() => route.fullPath, () => {
  open.value = false
  hidden.value = false
  scrollAnchor = window.scrollY
})
onMounted(() => {
  scrollAnchor = window.scrollY
  window.addEventListener('scroll', updateHeader, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', updateHeader))
</script>

<style scoped>
.site-header { transition: transform .25s ease; }
.header-hidden { transform: translateY(-100%); }
.site-header:has(:focus-visible) { transform: translateY(0); }
@media (prefers-reduced-motion: reduce) { .site-header { transition: none; } }
.nav-link {
  position: relative;
  color: #3d3934;
  font-size: 0.95rem;
  font-weight: 600;
  transition: color 0.2s ease;
}
.nav-link:hover,
.nav-link.is-active {
  color: #98724f;
}
.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  right: 100%;
  bottom: -0.55rem;
  height: 2px;
  background: #98724f;
  transition: right 0.2s ease;
}
.nav-link:hover::after,
.nav-link.is-active::after {
  right: 0;
}
.mobile-link {
  border-radius: 0.75rem;
  padding: 0.8rem 0.9rem;
  color: #3d3934;
  font-weight: 600;
}
.mobile-link:hover {
  background: #eee7dc;
}
</style>
