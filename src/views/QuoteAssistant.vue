<template>
  <main class="min-h-screen bg-[#F8F5EF] px-5 py-16 text-[#262421] lg:px-8">
    <section class="mx-auto max-w-3xl">
      <router-link to="/" class="text-sm font-semibold text-[#7F5D3E] hover:underline">← Sākumlapa</router-link>
      <div class="mt-8 rounded-[2rem] bg-white p-6 shadow-[0_24px_70px_-38px_rgba(58,38,20,.55)] sm:p-10">
        <p class="text-xs font-bold uppercase tracking-[.22em] text-[#98724F]">Ātrais cenu aprēķins</p>
        <h1 class="mt-3 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">Noskaidro aptuveno cenu</h1>
        <p class="mt-4 max-w-2xl leading-7 text-black/60">Atbildi uz dažiem jautājumiem — asistents sagatavos orientējošu darba izmaksu diapazonu.</p>
        <div v-if="!finished" class="mt-10">
          <div class="mb-8 flex items-center justify-between text-sm text-black/50"><span>Jautājums {{ step + 1 }} no {{ questions.length }}</span><span>{{ Math.round(((step + 1) / questions.length) * 100) }}%</span></div>
          <div class="h-2 overflow-hidden rounded-full bg-[#EEE7DC]"><div class="h-full rounded-full bg-[#98724F] transition-all" :style="{ width: ((step + 1) / questions.length * 100) + '%' }"></div></div>
          <div class="mt-10">
            <h2 class="text-2xl font-semibold sm:text-3xl">{{ currentQuestion.title }}</h2><p class="mt-2 text-black/55">{{ currentQuestion.hint }}</p>
            <div class="mt-6 grid gap-3 sm:grid-cols-2"><button v-for="option in currentQuestion.options" :key="option.value" type="button" class="rounded-2xl border border-[#D8C6AF] bg-[#FCFAF6] p-4 text-left font-semibold transition hover:-translate-y-0.5 hover:border-[#98724F] hover:bg-[#F5F0E1]" @click="choose(option.value)">{{ option.label }}</button></div>
          </div>
        </div>
        <div v-else class="mt-10">
          <div class="rounded-2xl bg-[#2A2926] p-6 text-white sm:p-8"><p class="text-sm text-white/60">Aptuvenais cenu diapazons</p><p class="mt-2 text-4xl font-semibold text-[#E4BD91] sm:text-5xl">{{ formatPrice(quote.low) }}–{{ formatPrice(quote.high) }}</p><p class="mt-3 text-sm leading-6 text-white/65">Precīza cena atkarīga no pamatnes stāvokļa, materiāla un objekta apskates.</p></div>
          <div class="mt-7 grid gap-3 text-sm text-black/65 sm:grid-cols-2"><p><strong class="text-black">Segums:</strong> {{ answerLabel('floor') }}</p><p><strong class="text-black">Platība:</strong> {{ answers.area }} m²</p><p><strong class="text-black">Pamatne:</strong> {{ answerLabel('base') }}</p><p><strong class="text-black">Vecā grīda:</strong> {{ answerLabel('remove') }}</p><p><strong class="text-black">Grīdlīstes:</strong> {{ answerLabel('skirting') }}</p><p><strong class="text-black">Objekts:</strong> {{ answerLabel('location') }}</p></div>
          <div class="mt-9 flex flex-col gap-3 sm:flex-row"><router-link to="/contact" class="inline-flex items-center justify-center rounded-xl bg-[#98724F] px-6 py-3.5 font-semibold text-white transition hover:bg-[#7F5D3E]">Saņemt precīzu piedāvājumu →</router-link><button type="button" class="rounded-xl border border-[#D8C6AF] px-6 py-3.5 font-semibold text-[#7F5D3E] hover:bg-[#F5F0E1]" @click="reset">Sākt no jauna</button></div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
type Key = 'floor' | 'area' | 'base' | 'remove' | 'skirting' | 'location'
type Option = { label: string; value: string; rate?: number }
const questions: { key: Key; title: string; hint: string; options: Option[] }[] = [
  { key: 'floor', title: 'Kādu grīdu vēlaties ieklāt?', hint: 'Izvēlies tuvāko variantu.', options: [{ label: 'Vinils', value: 'vinyl', rate: 18 }, { label: 'Parkets', value: 'parquet', rate: 28 }, { label: 'Franču skujiņas parkets', value: 'french', rate: 42 }, { label: 'Taisni dēļi', value: 'straight', rate: 24 }] },
  { key: 'area', title: 'Kāda ir aptuvenā platība?', hint: 'Izvēlies tuvāko platību kvadrātmetros.', options: [{ label: 'Līdz 20 m²', value: '15' }, { label: '21–50 m²', value: '35' }, { label: '51–100 m²', value: '75' }, { label: 'Vairāk nekā 100 m²', value: '120' }] },
  { key: 'base', title: 'Kāds ir pamatnes stāvoklis?', hint: 'Pamatnes sagatavošana var būt nepieciešama pirms ieklāšanas.', options: [{ label: 'Sagatavota un līdzena', value: 'ready' }, { label: 'Nepieciešama sagatavošana', value: 'prep' }] },
  { key: 'remove', title: 'Vai jānoņem vecais segums?', hint: 'Ieskaitām aptuvenas demontāžas izmaksas.', options: [{ label: 'Jā', value: 'yes' }, { label: 'Nē', value: 'no' }] },
  { key: 'skirting', title: 'Vai nepieciešamas grīdlīstes?', hint: 'Grīdlīstes tiek aprēķinātas aptuveni pēc telpas perimetra.', options: [{ label: 'Jā', value: 'yes' }, { label: 'Nē', value: 'no' }] },
  { key: 'location', title: 'Kur atrodas objekts?', hint: 'Ceļa izmaksas tiek pievienotas aptuveni.', options: [{ label: 'Rīga', value: 'riga' }, { label: 'Pierīga', value: 'pieriga' }, { label: 'Citur Latvijā', value: 'latvia' }] },
]
const step = ref(0)
const answers = reactive<Record<Key, string>>({ floor: '', area: '', base: '', remove: '', skirting: '', location: '' })
const finished = ref(false)
const currentQuestion = computed(() => questions[step.value] ?? questions[0]!)
const choose = (value: string) => { answers[currentQuestion.value.key] = value; if (step.value < questions.length - 1) step.value += 1; else finished.value = true }
const reset = () => { Object.keys(answers).forEach((key) => { answers[key as Key] = '' }); step.value = 0; finished.value = false }
const quote = computed(() => {
  const area = Number(answers.area) || 0
  const floor = questions[0]!.options.find((option) => option.value === answers.floor)?.rate ?? 0
  const prep = answers.base === 'prep' ? 8 : 0
  const remove = answers.remove === 'yes' ? 5 : 0
  const skirting = answers.skirting === 'yes' ? 6 : 0
  const travel = answers.location === 'pieriga' ? 30 : answers.location === 'latvia' ? 70 : 0
  const total = area * (floor + prep + remove + skirting) + travel
  return { low: Math.round(total * 0.9 / 10) * 10, high: Math.round(total * 1.1 / 10) * 10 }
})
const formatPrice = (value: number) => new Intl.NumberFormat('lv-LV').format(value) + ' €'
const answerLabel = (key: Key) => questions.find((question) => question.key === key)?.options.find((option) => option.value === answers[key])?.label ?? ''
</script>


