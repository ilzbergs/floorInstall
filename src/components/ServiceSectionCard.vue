<template>
  <section class="relative overflow-hidden rounded-[2rem] bg-[#F5F0E1] px-5 py-16 sm:px-8 sm:py-20">
      <div class="mx-auto max-w-3xl text-center">
        <p class="text-xs font-bold uppercase tracking-[.24em] text-[#98724F]">Risinājumi katrai telpai</p>
        <h2 class="mt-3 font-heading text-3xl font-bold tracking-[-.03em] text-[#5C3A21] sm:text-4xl">Mūsu pakalpojumi</h2>
        <p class="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#5C3A21]/65 sm:text-base">
          No pamatnes sagatavošanas līdz pēdējam apdares slānim — izveidojam grīdu, kas izskatās labi un kalpo ilgi.
        </p>
      </div>

      <div class="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        <div
          v-for="(service, index) in services"
          :key="service.title"
          class="group relative isolate flex min-h-[25rem] overflow-hidden rounded-[1.35rem] border border-white/40 bg-[#4b3829] shadow-[0_16px_35px_-22px_rgba(58,38,20,.65)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_45px_-22px_rgba(58,38,20,.75)] sm:min-h-[29rem]"
        >
          <img :src="service.image" :alt="service.title" loading="lazy" decoding="async" class="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105" />
          <div class="absolute inset-0 bg-gradient-to-b from-[#1f1710]/15 via-[#24170e]/20 to-[#17100b]/90"></div>
          <div class="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/25 to-transparent"></div>

          <div class="relative z-10 flex min-h-full w-full flex-col p-6 sm:p-7">
            <div class="flex items-center justify-between text-[.68rem] font-bold uppercase tracking-[.2em] text-[#F1C189]/90">
              <span>0{{ index + 1 }}</span>
              <span class="h-px w-16 bg-[#F1C189]/60">{{ service.title }}</span>
            </div>
            <div class="mt-auto">
              <h3 class="max-w-[12ch] text-2xl font-semibold leading-tight tracking-[-.02em] text-white sm:text-[1.7rem]">{{ service.title }}</h3>
              <p class="mt-3 max-w-[28ch] text-sm leading-6 text-white/75">{{ service.description }}</p>
              <router-link :to="{ name: 'service-detail', params: { slug: service.slug } }" class="mt-6 inline-flex items-center gap-2 rounded-full bg-[#B1784D] px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#C28A5C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F1C189]">
                Uzzināt vairāk <span aria-hidden="true" class="text-base transition-transform group-hover:translate-x-0.5">→</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  services: {
    slug: string
    title: string
    description: string
    image: string
  }[]
}>()
</script>
