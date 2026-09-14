<template>
  <section ref="hero" class="hero relative isolate min-h-[680px] overflow-hidden bg-[#242321]">
    <img
      src="/images/hero.jpg"
      alt="Kvalitatīvi ieklāta koka grīda"
      class="hero-image absolute inset-0 h-[112%] w-full object-cover"
    />
    <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(22,21,19,.94)_0%,rgba(22,21,19,.82)_38%,rgba(22,21,19,.28)_72%,rgba(22,21,19,.08)_100%)]"></div>

    <div class="relative mx-auto flex min-h-[610px] max-w-7xl items-center px-5 py-20 lg:px-8">
      <div class="hero-copy max-w-2xl">
        <p class="hero-reveal mb-5 text-xs font-bold uppercase tracking-[0.28em] text-[#C9A47D]">
          Grīdu ieklāšana un restaurācija
        </p>
        <h1 class="hero-reveal text-5xl font-semibold leading-[1.03] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
          Kvalitatīvas grīdas<br />
          <span class="text-[#C9A47D]">jaunām iespējām.</span>
        </h1>
        <p class="hero-reveal mt-7 max-w-xl text-lg leading-8 text-white/78">
          Parketa un vinila ieklāšana, grīdu sagatavošana un restaurācija Rīgā, Pierīgā un visā Latvijā.
        </p>

        <div class="hero-reveal mt-9 flex flex-col gap-3 sm:flex-row">
          <router-link
            to="/contact"
            class="inline-flex items-center justify-center gap-3 rounded-xl bg-[#A47D58] px-6 py-3.5 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#8B6747]"
          >
            Saņemt piedāvājumu <span>→</span>
          </router-link>
          <router-link
            to="/gallery"
            class="inline-flex items-center justify-center rounded-xl border border-white/45 bg-black/15 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#242321]"
          >
            Apskatīt darbus
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const hero = ref<HTMLElement | null>(null)
let ticking = false

const updateHero = () => {
  if (!hero.value || ticking) return
  ticking = true
  requestAnimationFrame(() => {
    const progress = Math.min(window.scrollY / hero.value!.offsetHeight, 1)
    hero.value!.style.setProperty('--hero-progress', String(progress))
    ticking = false
  })
}

onMounted(() => window.addEventListener('scroll', updateHero, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', updateHero))
</script>

<style scoped>
.hero-image {
  transform: translateY(calc(var(--hero-progress, 0) * 7%)) scale(calc(1 + var(--hero-progress, 0) * .04));
  will-change: transform;
}
.hero-copy { transform: translateY(calc(var(--hero-progress, 0) * 52px)); opacity: calc(1 - var(--hero-progress, 0) * .85); }
.hero-reveal { animation: reveal .85s cubic-bezier(.2,.75,.25,1) both; }
.hero-reveal:nth-child(2) { animation-delay: .08s; }
.hero-reveal:nth-child(3) { animation-delay: .16s; }
.hero-reveal:nth-child(4) { animation-delay: .24s; }
@keyframes reveal { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: none; } }
@media (prefers-reduced-motion: reduce) { .hero-image, .hero-copy { transform: none; opacity: 1; } .hero-reveal { animation: none; } }
</style>
