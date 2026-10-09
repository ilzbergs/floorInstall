<template>
  <div class="bg-[#F8F5EF] text-left text-[#262421]">
    <section class="bg-[#2A2926] text-white">
      <div class="mx-auto max-w-7xl px-5 py-20 sm:py-24 lg:px-8">
        <p class="text-xs font-bold uppercase tracking-[.24em] text-[#D2AF8A]">Sazināsimies</p>
        <h1 class="mt-4 max-w-3xl text-4xl font-semibold tracking-[-.045em] sm:text-6xl">Izstāstiet par savu grīdas projektu.</h1>
        <p class="mt-6 max-w-2xl text-lg leading-8 text-white/65 sm:text-xl">Atsūtiet īsu aprakstu par telpu un vēlamo rezultātu — sazināsimies, lai vienotos par nākamajiem soļiem.</p>
      </div>
    </section>

    <section class="px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
      <div class="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start lg:gap-16">
        <div>
          <p class="text-xs font-bold uppercase tracking-[.24em] text-[#98724F]">Kontakti</p>
          <h2 class="mt-4 text-3xl font-semibold tracking-[-.04em] text-[#5C3A21] sm:text-4xl">Parunāsim par jūsu telpu.</h2>
          <p class="mt-5 max-w-md leading-8 text-black/60">Darbojamies visā Latvijā un arī starptautiskos projektos. Sazinieties jums ērtākajā veidā — atbildēsim pēc iespējas ātrāk.</p>

          <div class="mt-9 space-y-3">
            <a href="tel:+37122063849" class="contact-link group">
              <span class="contact-icon" aria-hidden="true">↗</span>
              <span><span class="contact-label">Tālrunis</span><span class="contact-value">+371 22 063 849</span></span>
            </a>
            <a href="mailto:info@floorinstall.lv" class="contact-link group">
              <span class="contact-icon" aria-hidden="true">@</span>
              <span><span class="contact-label">E-pasts</span><span class="contact-value">info@floorinstall.lv</span></span>
            </a>
            <a href="https://wa.me/37122063849" target="_blank" rel="noreferrer" class="contact-link group">
              <span class="contact-icon" aria-hidden="true">◌</span>
              <span><span class="contact-label">WhatsApp</span><span class="contact-value">Rakstīt WhatsApp</span></span>
              <span class="ml-auto text-[#98724F] transition group-hover:translate-x-1" aria-hidden="true">→</span>
            </a>
          </div>

          <div class="mt-8 rounded-2xl border border-[#D8C6AF] bg-[#F5F0E1] p-5 text-sm leading-6 text-[#5C3A21]/70">
            <span class="font-semibold text-[#5C3A21]">Pieejamība:</span> strādājam pēc vienošanās un pielāgojamies jūsu projekta grafikam.
          </div>
        </div>

        <form class="rounded-[1.5rem] border border-[#D9CBB9] bg-white p-6 shadow-[0_20px_50px_-32px_rgba(77,53,31,.6)] sm:p-9" @submit.prevent="submitForm">
          <div class="grid gap-5 sm:grid-cols-2">
            <label class="field-label">Vārds <span aria-hidden="true">*</span><input v-model="form.name" required type="text" autocomplete="name" placeholder="Jūsu vārds" class="field-input" /></label>
            <label class="field-label">Tālrunis <span aria-hidden="true">*</span><input v-model="form.phone" required type="tel" autocomplete="tel" placeholder="22 000 000" class="field-input" /></label>
          </div>
          <label class="field-label mt-5">E-pasts <span class="font-normal normal-case tracking-normal text-black/40">(pēc izvēles)</span><input v-model="form.email" type="email" autocomplete="email" placeholder="jusu@epasts.lv" class="field-input" /></label>
          <label class="field-label mt-5">Ziņa <span aria-hidden="true">*</span><textarea v-model="form.message" required rows="5" placeholder="Pastāstiet par telpu, platību un vēlamo pakalpojumu..." class="field-input resize-y"></textarea></label>
          <button type="submit" class="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#98724F] px-5 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#7F5D3E] sm:w-auto">Nosūtīt ziņu <span aria-hidden="true">→</span></button>
          <p v-if="mailStatus" class="mt-4 text-sm leading-6 text-[#6E543D]" role="status">{{ mailStatus }}</p>
          <p class="mt-4 text-xs leading-5 text-black/45">Pēc pogas nospiešanas atvērsies jūsu e-pasta programma ar sagatavotu ziņu. Nosūtīšanu apstiprināsiet tajā. Norādīto informāciju izmantosim atbildei uz jūsu pieprasījumu. <router-link to="/privacy-policy" class="underline">Privātuma politika</router-link>.</p>
        </form>
      </div>
    </section>

    <section class="bg-[#F5F0E1] px-5 py-16 sm:py-20 lg:px-8">
      <div class="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p class="text-xs font-bold uppercase tracking-[.24em] text-[#98724F]">FloorInstall</p>
          <h2 class="mt-3 text-3xl font-semibold tracking-[-.035em] text-[#5C3A21]">Kvalitatīva grīda sākas ar sarunu.</h2>
        </div>
        <a href="https://wa.me/37122063849" target="_blank" rel="noreferrer" class="inline-flex items-center justify-center gap-2 rounded-xl border border-[#98724F] px-6 py-3.5 font-semibold text-[#7F5D3E] transition hover:bg-[#98724F] hover:text-white">Rakstīt WhatsApp <span aria-hidden="true">→</span></a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const form = reactive({ name: '', phone: '', email: '', message: '' })
const mailStatus = ref('')

const submitForm = () => {
  const subject = `FloorInstall pieprasījums — ${form.name}`
  const body = [
    `Vārds: ${form.name}`,
    `Tālrunis: ${form.phone}`,
    `E-pasts: ${form.email || 'Nav norādīts'}`,
    '',
    form.message,
  ].join('\n')
  window.location.href = `mailto:info@floorinstall.lv?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  mailStatus.value = 'Tiek atvērta e-pasta programma ar sagatavotu ziņu.'
}
</script>

<style scoped>
.contact-link { display: flex; align-items: center; gap: .8rem; border: 1px solid #e1d6c8; border-radius: 1rem; background: rgba(255,255,255,.72); padding: .8rem .9rem; transition: border-color .2s ease, transform .2s ease, box-shadow .2s ease; }
.contact-link:hover { border-color: #98724f; transform: translateY(-2px); box-shadow: 0 12px 24px -20px rgba(58,38,20,.7); }
.contact-icon { display: grid; height: 2.25rem; width: 2.25rem; place-items: center; border-radius: .7rem; background: #f1e4d2; color: #98724f; font-weight: 700; }
.contact-label, .contact-value { display: block; }
.contact-label { color: rgba(92,58,33,.5); font-size: .68rem; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; }
.contact-value { color: #5c3a21; font-weight: 650; }
.field-label { display: block; color: #5c3a21; font-size: .82rem; font-weight: 700; letter-spacing: .04em; }
.field-label > span:first-child { color: #98724f; }
.field-input { display: block; width: 100%; margin-top: .55rem; border: 1px solid #d9cbb9; border-radius: .8rem; background: #fffdfa; padding: .8rem .9rem; color: #262421; font: inherit; font-size: .95rem; font-weight: 400; letter-spacing: 0; outline: none; transition: border-color .2s ease, box-shadow .2s ease; }
.field-input::placeholder { color: rgba(38,36,33,.35); }
.field-input:focus { border-color: #98724f; box-shadow: 0 0 0 3px rgba(152,114,79,.15); }
</style>
