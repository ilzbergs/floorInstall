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

    <div class="reveal mx-auto max-w-7xl px-5 pb-20 text-center lg:px-8">
      <ServiceSectionCard :services="featuredServices" />
      <router-link to="/services" class="inline-flex font-semibold text-[#7F5D3E] hover:underline">
        Skatīt visus pakalpojumus →
      </router-link>
    </div>

    <section class="bg-[#242321] py-24 text-white">
      <div class="mx-auto max-w-7xl px-5 lg:px-8">
        <div class="reveal max-w-2xl">
          <p class="eyebrow">No pamatnes līdz rezultātam</p>
          <h2 class="section-title">Kvalitāte slēpjas tajā,<br />ko pēc tam vairs neredz.</h2>
        </div>

        <div class="mt-14 grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-start">
          <div class="process-image sticky top-24 hidden self-start overflow-hidden rounded-[1.5rem] bg-[#3a3834] lg:block">
            <img :src="currentStep.image" :alt="currentStep.title" width="1448" height="1086" decoding="async" class="aspect-[4/3] max-h-[calc(100dvh-7rem)] w-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
            <div class="absolute bottom-0 left-0 p-7 sm:p-10">
              <span class="text-xs font-bold uppercase tracking-[.24em] text-[#D2AF8A]">{{ currentStep.number }}</span>
              <p class="mt-2 text-2xl font-semibold sm:text-3xl">{{ currentStep.title }}</p>
            </div>
          </div>

          <div ref="processSteps" class="space-y-4">
            <article v-for="(step, index) in steps" :key="step.number" :data-step="index" class="process-step lg:min-h-[60vh] rounded-2xl border p-6 transition-all duration-500 sm:p-8" :class="activeStep === index ? 'border-[#A47D58] bg-white/8' : 'border-white/10 bg-white/[.025] lg:opacity-55'">
              <img :src="step.image" :alt="step.title" width="1448" height="1086" loading="lazy" decoding="async" class="mb-6 aspect-[4/3] w-full rounded-xl object-cover lg:hidden" />
              <span class="text-xs font-bold tracking-[.22em] text-[#C9A47D]">{{ step.number }}</span>
              <h3 class="mt-5 text-2xl font-semibold">{{ step.title }}</h3>
              <p class="mt-3 max-w-md leading-7 text-white/60">{{ step.text }}</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section id="musu-darbi" class="reveal bg-white py-20">
      <div class="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8">
        <div>
          <p class="eyebrow">Mūsu darbi</p>
          <h2 class="section-title">Reāli rezultāti.<br />Apmierināti klienti.</h2>
          <p class="mt-6 max-w-md leading-7 text-black/60">
            Katra grīda sākas ar pareizu pamatnes novērtēšanu un beidzas ar precīzi izpildītu rezultātu. Apskati mūsu paveiktos darbus un izvēlies risinājumu savam objektam.
          </p>
          <router-link to="/gallery" class="mt-7 inline-flex font-semibold text-[#7F5D3E] hover:underline">Apskatīt galeriju →</router-link>
        </div>
        <GalleryItem class="min-w-0" />
      </div>
    </section>

    <section id="par-mums" class="reveal overflow-hidden bg-[#F5F0E1] py-20 sm:py-24">
      <div class="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-8">
        <div>
          <p class="eyebrow">Par FloorInstall</p>
          <h2 class="section-title text-[#5C3A21]">Pieredze, kurai var uzticēties.</h2>
          <p class="mt-6 max-w-2xl leading-8 text-[#5C3A21]/70">
            FloorInstall ir grīdas segumu ieklāšanas uzņēmums ar vairāk nekā 15 gadu pieredzi Latvijā un starptautiskos projektos. Uzņēmums izveidots ar vienu mērķi — nodrošināt kvalitatīvu, precīzu un ilgtspējīgu grīdas segumu ieklāšanu.
          </p>
          <p class="mt-4 max-w-2xl leading-8 text-[#5C3A21]/70">
            Mēs strādājam ātri, rūpīgi un atbildīgi, piedāvājot godīgu cenu, skaidru komunikāciju un garantiju paveiktajam darbam. No pirmās konsultācijas līdz pēdējai apdares detaļai — par rezultātu rūpējamies paši.
          </p>
          <router-link to="/contact" class="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#98724F] px-5 py-3.5 font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#7F5D3E]">
            Sazinies ar mums <span aria-hidden="true">→</span>
          </router-link>
        </div>

        <div class="grid gap-4 sm:grid-cols-2">
          <div class="rounded-[1.35rem] bg-[#2A2926] p-6 text-white shadow-[0_18px_40px_-28px_rgba(42,30,18,.8)] sm:p-7">
            <strong class="block text-4xl font-semibold text-[#E4BD91]">15+</strong>
            <span class="mt-2 block text-sm leading-6 text-white/65">Gadu pieredze grīdas segumu jomā</span>
          </div>
          <div class="rounded-[1.35rem] border border-[#D8C6AF] bg-white/70 p-6 text-[#5C3A21] sm:p-7">
            <strong class="block text-2xl font-semibold">Visa Latvija</strong>
            <span class="mt-2 block text-sm leading-6 text-[#5C3A21]/60">Strādājam arī starptautiskos projektos</span>
          </div>
          <div class="rounded-[1.35rem] border border-[#D8C6AF] bg-white/70 p-6 text-[#5C3A21] sm:col-span-2 sm:p-7">
            <p class="text-xs font-bold uppercase tracking-[.2em] text-[#98724F]">Mūsu solījums</p>
            <p class="mt-3 text-xl font-semibold leading-8">Ātrs, kvalitatīvs un garantēts darbs par godīgu cenu.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="stats-section reveal bg-[#242321] text-white">
      <div class="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:grid-cols-3 lg:items-center lg:px-8">
        <div><strong class="block text-3xl">{{ years }}+</strong><span class="text-sm text-white/55">Gadu pieredze</span></div>
        <div><strong class="block text-3xl">Visa Latvija</strong><span class="text-sm text-white/55">Strādājam arī ārzemēs</span></div>
        <div><strong class="block text-3xl">Garantija</strong><span class="text-sm text-white/55">Paveiktajam darbam</span></div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { publicAsset } from '@/utils/publicAsset'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import HeroSection from '../components/HeroSection.vue'
import ServiceSectionCard from '../components/ServiceSectionCard.vue'
import GalleryItem from '../components/GalleryItem.vue'
import { featuredServices } from '../data/services'

const activeStep = ref(0)
const processSteps = ref<HTMLElement | null>(null)
let processFrame = 0
let processResizeObserver: ResizeObserver | undefined

// Select from the current geometry, not the delivery order of intersection events.
const updateActiveStep = () => {
  processFrame = 0
  const cards = processSteps.value?.querySelectorAll<HTMLElement>('.process-step')
  if (!cards?.length) return
  const focusY = window.innerHeight * 0.5
  let nearest = 0
  let nearestDistance = Infinity
  cards.forEach((card, index) => {
    const bounds = card.getBoundingClientRect()
    const distance = Math.abs(bounds.top + bounds.height / 2 - focusY)
    if (distance < nearestDistance) {
      nearest = index
      nearestDistance = distance
    }
  })
  activeStep.value = nearest
}

const scheduleProcessUpdate = () => {
  if (!processFrame) processFrame = requestAnimationFrame(updateActiveStep)
}
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

  window.addEventListener('scroll', scheduleProcessUpdate, { passive: true })
  window.addEventListener('resize', scheduleProcessUpdate)
  processResizeObserver = new ResizeObserver(scheduleProcessUpdate)
  if (processSteps.value) processResizeObserver.observe(processSteps.value)
  updateActiveStep()
  const stats = document.querySelector('.stats-section')
  const statsObserver = new IntersectionObserver(([entry]) => {
    if (entry?.isIntersecting) { animateNumber(15, (value) => years.value = value); statsObserver.disconnect() }
  })
  if (stats) statsObserver.observe(stats)
  observers = [revealObserver, statsObserver]
})
onBeforeUnmount(() => {
  observers.forEach((observer) => observer.disconnect())
  processResizeObserver?.disconnect()
  window.removeEventListener('scroll', scheduleProcessUpdate)
  window.removeEventListener('resize', scheduleProcessUpdate)
  cancelAnimationFrame(processFrame)
})

const benefits = [
  { icon: '◇', title: 'Kvalitatīvs rezultāts', text: 'Precīzs izpildījums' },
  { icon: '⌾', title: 'Uzticama sadarbība', text: 'Skaidra komunikācija' },
  { icon: '▣', title: 'Pieredze', text: 'Profesionāla pieeja' },
  { icon: '⌖', title: 'Visa Latvija', text: 'Rīga un reģioni' },
]

const steps = [
  { number: '01', image: publicAsset('/images/process/inspection-v1.png'), title: 'Pamatnes pārbaude', text: 'Novērtējam līdzenumu, mitrumu un esošās grīdas stāvokli, lai izvēlētos drošu risinājumu.' },
  { number: '02', image: publicAsset('/images/process/preparation-v1.png'), title: 'Grīdas sagatavošana', text: 'Gruntējam, špaktelējam un slīpējam pamatni līdz tā ir gatava precīzai ieklāšanai.' },
  { number: '03', image: publicAsset('/images/process/installation-v3.webp'), title: 'Materiāla ieklāšana', text: 'Ieklājam parketu vai vinilu, ievērojot materiāla tehnoloģiju un telpas ģeometriju.' },
  { number: '04', image: publicAsset('/images/process/finishing-v1.png'), title: 'Apdare un nodošana', text: 'Uzstādām grīdlīstes, veicam pēdējo pārbaudi un nododam tīru, gatavu rezultātu.' },
] as const

const currentStep = computed(() => steps[activeStep.value] ?? steps[0])
</script>

<style scoped>
.eyebrow { color: #98724f; font-size: .75rem; font-weight: 800; letter-spacing: .22em; text-transform: uppercase; }
.section-title { margin-top: .55rem; font-size: clamp(2rem, 4vw, 3.25rem); font-weight: 650; line-height: 1.08; letter-spacing: -.04em; }
.reveal { opacity: 0; transform: translateY(38px); transition: opacity .8s ease, transform .8s cubic-bezier(.2,.75,.25,1); }
.reveal.is-visible { opacity: 1; transform: none; }
@media (prefers-reduced-motion: reduce) { .reveal { opacity: 1; transform: none; transition: none; } }
</style>
