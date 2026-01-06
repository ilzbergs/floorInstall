<template>
  <section
    class="relative bg-cover bg-center"
    style="background-image: url('../../public/images/hero.jpg')"
  >
    <!-- Overlay: tumšs gradient, lai kontrasts būtu labs -->
    <div class="absolute inset-0 bg-linear-to-t from-black/70 to-black/30"></div>

    <div class="relative max-w-7xl mx-auto px-4 py-20 text-center">
      <!-- Virsraksts -->
      <h1 class="text-3xl sm:text-4xl font-bold text-[#F5E6C4] font-heading drop-shadow-md">
        Parketa un vinila ieklāšana Rīgā un Latvijā
      </h1>

      <!-- Apraksts -->
      <p class="mt-6 max-w-3xl mx-auto text-[#FBEEDC] leading-relaxed drop-shadow-sm">
        FloorInstall piedāvā profesionālu parketa un vinila grīdu ieklāšanu dzīvokļos, privātmājās
        un komerctelpās. Strādājam precīzi, tīri un ar atbildību, nodrošinot kvalitatīvu un
        ilgmūžīgu rezultātu.
      </p>

      <p class="mt-4 max-w-3xl mx-auto text-[#FBEEDC] leading-relaxed drop-shadow-sm">
        Mūsu pieredze ļauj piemeklēt piemērotāko risinājumu katram objektam, ņemot vērā telpas
        specifiku, grīdas pamatni un klienta vēlmes. Strādājam Rīgā, Pierīgā un visā Latvijā.
      </p>

      <!-- Priekšrocības -->
      <ul class="mt-8 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
        <li class="flex gap-3 text-[#F5E6C4] font-medium">
          <span class="text-[#D8B58A] font-bold drop-shadow-md">✔</span>
          <span>Vairāku gadu pieredze grīdu ieklāšanā</span>
        </li>
        <li class="flex gap-3 text-[#F5E6C4] font-medium">
          <span class="text-[#D8B58A] font-bold drop-shadow-md">✔</span>
          <span>Darbs ar kvalitatīviem materiāliem</span>
        </li>
        <li class="flex gap-3 text-[#F5E6C4] font-medium">
          <span class="text-[#D8B58A] font-bold drop-shadow-md">✔</span>
          <span>Precīza tāme bez slēptām izmaksām</span>
        </li>
        <li class="flex gap-3 text-[#F5E6C4] font-medium">
          <span class="text-[#D8B58A] font-bold drop-shadow-md">✔</span>
          <span>Tīra un kārtīga darba vide</span>
        </li>
        <li class="flex gap-3 sm:col-span-2 text-[#F5E6C4] font-medium">
          <span class="text-[#D8B58A] font-bold drop-shadow-md">✔</span>
          <span>Individuāla pieeja katram klientam</span>
        </li>
      </ul>

      <!-- CTA -->
      <div class="mt-12">
        <button
          class="px-8 py-3 rounded font-semibold transition bg-[#8B5E3C] hover:bg-[#6F4528] text-white shadow-lg"
        >
          Saņemt piedāvājumu
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
