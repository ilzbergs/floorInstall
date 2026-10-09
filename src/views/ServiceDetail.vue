<template>
  <div v-if="service" class="bg-[#F8F5EF] text-left text-[#262421]">
    <section class="relative isolate overflow-hidden bg-[#2A211A] text-white">
      <img
        :src="service.image"
        :alt="service.title"
        class="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div
        class="absolute inset-0 bg-gradient-to-r from-[#1D1510]/95 via-[#2A1D14]/75 to-[#2A1D14]/20"
      ></div>
      <div class="relative mx-auto max-w-7xl px-5 py-24 sm:py-32 lg:px-8">
        <router-link
          to="/services"
          class="inline-flex items-center gap-2 text-sm font-semibold text-[#E4C19B] transition hover:text-white"
        >
          <span aria-hidden="true">←</span> Visi pakalpojumi
        </router-link>
        <p class="mt-14 text-xs font-bold uppercase tracking-[.25em] text-[#D2AF8A]">
          FloorInstall · {{ pad(serviceIndex + 1) }}
        </p>
        <h1 class="mt-4 max-w-3xl text-4xl font-semibold tracking-[-.04em] sm:text-6xl">
          {{ service.title }}
        </h1>
        <p class="mt-6 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
          {{ service.description }}
        </p>
      </div>
    </section>

    <section
      class="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-24"
    >
      <div>
        <p class="text-xs font-bold uppercase tracking-[.24em] text-[#98724F]">Par pakalpojumu</p>
        <h2
          class="mt-4 max-w-xl text-3xl font-semibold tracking-[-.035em] text-[#5C3A21] sm:text-4xl"
        >
          Grīda, kas iederas jūsu telpā.
        </h2>
        <p class="mt-6 max-w-2xl text-base leading-8 text-black/60">{{ service.intro }}</p>
        <router-link
          to="/contact"
          class="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#98724F] px-5 py-3.5 font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#7F5D3E]"
        >
          Saņemt piedāvājumu <span aria-hidden="true">→</span>
        </router-link>
      </div>

      <div
        class="rounded-[1.5rem] border border-[#D9CBB9] bg-white p-7 shadow-[0_18px_45px_-30px_rgba(77,53,31,.55)] sm:p-9"
      >
        <p class="text-sm font-bold uppercase tracking-[.18em] text-[#98724F]">Ko jūs saņemat</p>
        <ul class="mt-6 space-y-5">
          <li
            v-for="benefit in service.benefits"
            :key="benefit"
            class="flex gap-3 text-base leading-7 text-[#4A4038]"
          >
            <span
              class="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#F1E4D2] text-sm font-bold text-[#98724F]"
              aria-hidden="true"
              >✓</span
            >
            <span>{{ benefit }}</span>
          </li>
        </ul>
      </div>
    </section>

    <section class="bg-[#2A2926] py-16 text-white sm:py-20">
      <div class="mx-auto max-w-7xl px-5 lg:px-8">
        <p class="text-xs font-bold uppercase tracking-[.24em] text-[#D2AF8A]">Mūsu pieeja</p>
        <h2 class="mt-3 max-w-2xl text-3xl font-semibold tracking-[-.035em] sm:text-4xl">
          Pārdomāts process no pirmās sarunas līdz gatavai grīdai.
        </h2>
        <div class="mt-12 grid gap-4 md:grid-cols-3">
          <article
            v-for="(step, index) in service.process"
            :key="step"
            class="rounded-2xl border border-white/10 bg-white/[.045] p-6 sm:p-7"
          >
            <span class="text-xs font-bold tracking-[.22em] text-[#C9A47D]">0{{ index + 1 }}</span>
            <p class="mt-5 leading-7 text-white/70">{{ step }}</p>
          </article>
        </div>
      </div>
    </section>

    <ServiceTechnicalGuide v-if="guide" :guide="guide" />

    <section
      class="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-16 sm:py-20 lg:flex-row lg:items-center lg:justify-between lg:px-8"
    >
      <div>
        <p class="text-xs font-bold uppercase tracking-[.24em] text-[#98724F]">Nākamais solis</p>
        <h2 class="mt-3 text-3xl font-semibold tracking-[-.035em] text-[#5C3A21]">
          Parunāsim par jūsu grīdu.
        </h2>
      </div>
      <router-link
        to="/contact"
        class="inline-flex items-center justify-center gap-2 rounded-xl bg-[#98724F] px-6 py-3.5 font-semibold text-white transition hover:bg-[#7F5D3E]"
        >Sazināties ar mums <span aria-hidden="true">→</span></router-link
      >
    </section>
  </div>

  <section v-else class="bg-[#F5F0E1] px-5 py-24 text-center">
    <p class="text-xs font-bold uppercase tracking-[.24em] text-[#98724F]">404</p>
    <h1 class="mt-3 text-3xl font-semibold text-[#5C3A21]">Pakalpojums nav atrasts</h1>
    <router-link
      to="/services"
      class="mt-7 inline-flex rounded-xl bg-[#98724F] px-5 py-3 font-semibold text-white"
      >Atgriezties pie pakalpojumiem</router-link
    >
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { services } from '../data/services'
import { serviceGuides } from '../data/service-guides'
import ServiceTechnicalGuide from '../components/ServiceTechnicalGuide.vue'

const route = useRoute()
const service = computed(() => services.find((item) => item.slug === route.params.slug))
const guide = computed(() => (service.value ? serviceGuides[service.value.slug] : undefined))
const serviceIndex = computed(() =>
  Math.max(
    0,
    services.findIndex((item) => item.slug === route.params.slug),
  ),
)
const pad = (value: number) => String(value).padStart(2, '0')
</script>
