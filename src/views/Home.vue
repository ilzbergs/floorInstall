<template>
  <div class="bg-[#F8F5EF] text-[#262421]">
    <HeroSection />

    <section class="border-b border-black/5 bg-white">
      <div class="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-black/5 px-5 md:grid-cols-4 md:divide-y-0 lg:px-8">
        <div v-for="item in benefits" :key="item.title" class="flex items-center gap-4 px-4 py-7 sm:px-7">
          <span class="text-2xl text-[#98724F]">{{ item.icon }}</span>
          <div>
            <p class="font-semibold">{{ item.title }}</p>
            <p class="mt-0.5 text-sm text-black/55">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="reveal mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div class="mb-10 flex items-end justify-between gap-6">
        <div>
          <p class="eyebrow">Mūsu pakalpojumi</p>
          <h2 class="section-title">Kompleksi grīdu risinājumi</h2>
        </div>
        <router-link to="/services" class="hidden font-semibold text-[#7F5D3E] hover:underline sm:block">
          Skatīt visus pakalpojumus →
        </router-link>
      </div>

      <div class="grid gap-5 md:grid-cols-3">
        <article v-for="service in services" :key="service.title" class="service-card group">
          <img src="/images/hero.jpg" :alt="service.title" class="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
          <div class="relative mt-auto flex items-end justify-between gap-5 p-6">
            <div>
              <h3 class="text-2xl font-semibold text-white">{{ service.title }}</h3>
              <p class="mt-2 max-w-xs text-sm leading-6 text-white/75">{{ service.text }}</p>
            </div>
            <router-link to="/services" class="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-xl text-black transition group-hover:translate-x-1">→</router-link>
          </div>
        </article>
      </div>
    </section>

    <section class="overflow-hidden bg-[#242321] py-24 text-white">
      <div class="mx-auto max-w-7xl px-5 lg:px-8">
        <div class="reveal max-w-2xl">
          <p class="eyebrow">No pamatnes līdz rezultātam</p>
          <h2 class="section-title">Kvalitāte slēpjas tajā,<br />ko pēc tam vairs neredz.</h2>
        </div>

        <div class="mt-14 grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-start">
          <div class="reveal sticky top-24 overflow-hidden rounded-[1.5rem] bg-[#3a3834]">
            <img src="/images/hero.jpg" alt="Grīdas ieklāšanas process" class="aspect-[4/3] w-full object-cover opacity-80" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
            <div class="floor-grid absolute inset-0 opacity-0 transition-opacity duration-700" :class="activeStep >= 2 ? '!opacity-40' : ''"></div>
            <div class="absolute bottom-0 left-0 p-7 sm:p-10">
              <span class="text-xs font-bold uppercase tracking-[.24em] text-[#D2AF8A]">{{ steps[activeStep].number }}</span>
              <p class="mt-2 text-2xl font-semibold sm:text-3xl">{{ steps[activeStep].title }}</p>
            </div>
          </div>

          <div class="space-y-4">
            <article v-for="(step, index) in steps" :key="step.number" :data-step="index" class="process-step min-h-[38vh] rounded-2xl border p-6 transition-all duration-500 sm:p-8" :class="activeStep === index ? 'border-[#A47D58] bg-white/8' : 'border-white/10 bg-white/[.025] opacity-55'">
              <span class="text-xs font-bold tracking-[.22em] text-[#C9A47D]">{{ step.number }}</span>
              <h3 class="mt-5 text-2xl font-semibold">{{ step.title }}</h3>
              <p class="mt-3 max-w-md leading-7 text-white/60">{{ step.text }}</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section id="par-mums" class="reveal bg-white py-20">
      <div class="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8">
        <div>
          <p class="eyebrow">Mūsu darbi</p>
          <h2 class="section-title">Reāli rezultāti.<br />Apmierināti klienti.</h2>
          <p class="mt-6 max-w-md leading-7 text-black/60">
            Katra grīda sākas ar pareizu pamatnes novērtēšanu un beidzas ar precīzi izpildītu rezultātu. Apskati mūsu paveiktos darbus un izvēlies risinājumu savam objektam.
          </p>
          <router-link to="/gallery" class="mt-7 inline-flex font-semibold text-[#7F5D3E] hover:underline">Apskatīt galeriju →</router-link>
        </div>
        <div class="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div v-for="n in 4" :key="n" class="overflow-hidden rounded-2xl bg-[#E8E1D6]" :class="n % 2 === 0 ? 'sm:translate-y-5' : ''">
            <img src="/images/hero.jpg" alt="FloorInstall paveiktais darbs" class="aspect-[4/5] h-full w-full object-cover transition duration-500 hover:scale-105" :style="{ objectPosition: `${20 + n * 15}% center` }" />
          </div>
        </div>
      </div>
    </section>

    <section class="stats-section reveal bg-[#242321] text-white">
      <div class="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:grid-cols-3 lg:grid-cols-[1fr_1fr_1fr_auto] lg:items-center lg:px-8">
        <div><strong class="block text-3xl">{{ clients }}+</strong><span class="text-sm text-white/55">Apmierinātu klientu</span></div>
        <div><strong class="block text-3xl">{{ years }}+</strong><span class="text-sm text-white/55">Gadu pieredze</span></div>
        <div><strong class="block text-3xl">Visa Latvija</strong><span class="text-sm text-white/55">Rīga, Pierīga un reģioni</span></div>
        <router-link to="/contact" class="rounded-xl bg-[#A47D58] px-6 py-3.5 text-center font-semibold transition hover:bg-[#8B6747]">Saņemt piedāvājumu →</router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import HeroSection from '../components/HeroSection.vue'

const activeStep = ref(0)
const clients = ref(0)
const years = ref(0)
let observers: IntersectionObserver[] = []

const animateNumber = (target: number, setter: (value: number) => void) => {
  const start = performance.now()
  const tick = (now: number) => {
    const progress = Math.min((now - start) / 1100, 1)
    setter(Math.round(target * (1 - Math.pow(1 - progress, 3))))
    if (progress < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

onMounted(() => {
  const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target) }
  }), { threshold: .14 })
  document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element))

  const stepObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) activeStep.value = Number((entry.target as HTMLElement).dataset.step)
  }), { rootMargin: '-35% 0px -45% 0px' })
  document.querySelectorAll('.process-step').forEach((element) => stepObserver.observe(element))

  const stats = document.querySelector('.stats-section')
  const statsObserver = new IntersectionObserver(([entry]) => {
    if (entry?.isIntersecting) { animateNumber(100, (value) => clients.value = value); animateNumber(10, (value) => years.value = value); statsObserver.disconnect() }
  })
  if (stats) statsObserver.observe(stats)
  observers = [revealObserver, stepObserver, statsObserver]
})
onBeforeUnmount(() => observers.forEach((observer) => observer.disconnect()))

const benefits = [
  { icon: '◇', title: 'Kvalitatīvs rezultāts', text: 'Precīzs izpildījums' },
  { icon: '⌾', title: 'Uzticama sadarbība', text: 'Skaidra komunikācija' },
  { icon: '▣', title: 'Pieredze', text: 'Profesionāla pieeja' },
  { icon: '⌖', title: 'Visa Latvija', text: 'Rīga un reģioni' },
]

const services = [
  { title: 'Parketa ieklāšana', text: 'Klasisks un ilgtspējīgs risinājums jūsu mājām un birojam.' },
  { title: 'Vinila ieklāšana', text: 'Praktisks, izturīgs un moderns risinājums jebkurai telpai.' },
  { title: 'Grīdu restaurācija', text: 'Atjaunojam un pagarinām esošās grīdas kalpošanas laiku.' },
]

const steps = [
  { number: '01', title: 'Pamatnes pārbaude', text: 'Novērtējam līdzenumu, mitrumu un esošās grīdas stāvokli, lai izvēlētos drošu risinājumu.' },
  { number: '02', title: 'Grīdas sagatavošana', text: 'Gruntējam, špaktelējam un slīpējam pamatni līdz tā ir gatava precīzai ieklāšanai.' },
  { number: '03', title: 'Materiāla ieklāšana', text: 'Ieklājam parketu vai vinilu, ievērojot materiāla tehnoloģiju un telpas ģeometriju.' },
  { number: '04', title: 'Apdare un nodošana', text: 'Uzstādām grīdlīstes, veicam pēdējo pārbaudi un nododam tīru, gatavu rezultātu.' },
]
</script>

<style scoped>
.eyebrow { color: #98724f; font-size: .75rem; font-weight: 800; letter-spacing: .22em; text-transform: uppercase; }
.section-title { margin-top: .55rem; font-size: clamp(2rem, 4vw, 3.25rem); font-weight: 650; line-height: 1.08; letter-spacing: -.04em; }
.service-card { position: relative; display: flex; min-height: 330px; overflow: hidden; border-radius: 1rem; background: #ddd; }
.reveal { opacity: 0; transform: translateY(38px); transition: opacity .8s ease, transform .8s cubic-bezier(.2,.75,.25,1); }
.reveal.is-visible { opacity: 1; transform: none; }
.floor-grid { background: repeating-linear-gradient(45deg, transparent 0 38px, rgba(210,175,138,.65) 39px 41px), repeating-linear-gradient(-45deg, transparent 0 38px, rgba(210,175,138,.35) 39px 41px); }
@media (prefers-reduced-motion: reduce) { .reveal { opacity: 1; transform: none; transition: none; } }
</style>
