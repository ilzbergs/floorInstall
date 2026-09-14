<template>
  <section class="relative isolate min-h-[610px] overflow-hidden bg-[#242321]">
    <img
      src="/images/hero.jpg"
      alt="Kvalitatīvi ieklāta koka grīda"
      class="absolute inset-0 h-full w-full object-cover"
    />
    <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(22,21,19,.94)_0%,rgba(22,21,19,.82)_38%,rgba(22,21,19,.28)_72%,rgba(22,21,19,.08)_100%)]"></div>

    <div class="relative mx-auto flex min-h-[610px] max-w-7xl items-center px-5 py-20 lg:px-8">
      <div class="max-w-2xl">
        <p class="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-[#C9A47D]">
          Grīdu ieklāšana un restaurācija
        </p>
        <h1 class="text-5xl font-semibold leading-[1.03] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
          Kvalitatīvas grīdas<br />
          <span class="text-[#C9A47D]">jaunām iespējām.</span>
        </h1>
        <p class="mt-7 max-w-xl text-lg leading-8 text-white/78">
          Parketa un vinila ieklāšana, grīdu sagatavošana un restaurācija Rīgā, Pierīgā un visā Latvijā.
        </p>

        <div class="mt-9 flex flex-col gap-3 sm:flex-row">
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
