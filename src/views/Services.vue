<template>
  <section class="bg-[#F8F5EF] px-5 py-16 text-left sm:py-20">
    <div class="mx-auto max-w-7xl">
      <div class="max-w-2xl">
        <p class="text-xs font-bold uppercase tracking-[.24em] text-[#98724F]">
          Risinājumi katrai telpai
        </p>
        <h1 class="mt-3 text-4xl font-semibold tracking-[-.04em] text-[#5C3A21] sm:text-5xl">
          Pakalpojumi, kas sākas ar labu pamatu.
        </h1>
        <p class="mt-5 max-w-xl text-base leading-7 text-black/60">
          Izvēlieties sev piemērotāko grīdas risinājumu un apskatiet, kā mēs to īstenojam no pirmās
          konsultācijas līdz gatavam rezultātam.
        </p>
      </div>

      <div class="mt-12 grid gap-6 md:grid-cols-3">
        <article
          v-for="(service, index) in services"
          :key="service.slug"
          class="group overflow-hidden rounded-[1.35rem] border border-[#E0D5C7] bg-white shadow-[0_16px_35px_-28px_rgba(58,38,20,.65)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_45px_-25px_rgba(58,38,20,.65)]"
        >
          <div class="relative aspect-4/3 overflow-hidden bg-[#4B3829]">
            <img
              :src="service.image"
              :alt="service.title"
              loading="lazy"
              decoding="async"
              class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent"
            ></div>
            <span class="absolute bottom-4 left-5 text-xs font-bold tracking-[.22em] text-[#F1C189]"
              >0{{ index + 1 }}</span
            >
          </div>
          <div class="p-6 sm:p-7">
            <h2 class="text-2xl font-semibold tracking-[-.02em] text-[#5C3A21]">
              {{ service.title }}
            </h2>
            <p class="mt-3 text-sm leading-6 text-black/60">{{ service.shortDescription }}</p>
            <router-link
              :to="{ name: 'service-detail', params: { slug: service.slug } }"
              class="mt-6 inline-flex items-center gap-2 font-semibold text-[#7F5D3E] transition hover:text-[#5C3A21]"
              >Uzzināt vairāk
              <span aria-hidden="true" class="transition-transform group-hover:translate-x-0.5"
                >→</span
              ></router-link
            >
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { services } from '../data/services'
</script>
