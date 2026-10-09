<script setup lang="ts">
import type { ServiceTechnicalGuide } from '../types/service'

defineProps<{ guide: ServiceTechnicalGuide }>()
const pad = (value: number) => String(value).padStart(2, '0')
</script>

<template>
  <div class="technical-guide">
    <section class="guide-section" aria-labelledby="preparation-title">
      <p class="guide-eyebrow">Pirms meistara ierašanās</p>
      <h2 id="preparation-title">{{ guide.headings?.preparationTitle ?? 'Kā sagatavot telpu parketa ieklāšanai?' }}</h2>
      <p v-if="guide.headings" class="guide-lead">{{ guide.headings.preparationIntro }}</p>
      <p v-else class="guide-lead">
        Ilgmūžīgs rezultāts sākas ar sausu, stabilu pamatni un piemērotu telpas klimatu. Šie
        orientieri palīdz plānot darbus; konkrētā parketa, līmes un pamatnes ražotāju prasības
        vienmēr pārbaudām kopā.
      </p>
      <div class="condition-grid">
        <article v-for="item in guide.conditions" :key="item.title" class="condition-card">
          <h3>{{ item.title }}</h3>
          <p class="condition-value">{{ item.value }}</p>
          <p>{{ item.text }}</p>
        </article>
      </div>
      <h3 class="subheading">Telpas un materiāla sagatavošanas saraksts</h3>
      <ul class="preparation-list">
        <li v-for="item in guide.preparation" :key="item">
          <span aria-hidden="true">✓</span>
          <p>{{ item }}</p>
        </li>
      </ul>
    </section>

    <section class="moisture-section" aria-labelledby="moisture-title">
      <div class="guide-section">
        <p class="guide-eyebrow">Mērījumi pirms ieklāšanas</p>
        <h2 id="moisture-title">Cik sausai jābūt pamatnei?</h2>
        <div class="care-grid">
          <article v-for="item in guide.moisture" :key="item.substrate">
            <p class="guide-eyebrow">{{ item.substrate }}</p>
            <h3>{{ item.level }}</h3>
            <p>{{ item.text }}</p>
          </article>
        </div>
        <p class="technical-note">{{ guide.moistureNote }}</p>
      </div>
    </section>

    <section class="guide-section" aria-labelledby="bonding-title">
      <p class="guide-eyebrow">Tehniski pārdomāta ieklāšana</p>
      <h2 id="bonding-title">{{ guide.headings?.installationTitle ?? 'Kā notiek parketa līmēšana?' }}</h2>
      <p v-if="guide.headings" class="guide-lead">{{ guide.headings.installationIntro }}</p>
      <p v-else class="guide-lead">
        Pilnas virsmas līmēšanā parketu saista ar sagatavoto pamatni visā paredzētajā laukumā.
        Precīzs raksts, pareizs līmes daudzums un saķeres kontrole ir vienlīdz svarīgi.
      </p>
      <ol class="bonding-grid">
        <li v-for="(step, index) in guide.bonding" :key="step.title">
          <span class="step-number" aria-hidden="true">{{ pad(index + 1) }}</span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.text }}</p>
        </li>
      </ol>
      <div class="care-grid">
        <article>
          <p class="guide-eyebrow">Apsildāmas grīdas</p>
          <h3>Siltums bez straujām svārstībām.</h3>
          <p>{{ guide.heating }}</p>
        </article>
        <article>
          <p class="guide-eyebrow">Pēc ieklāšanas</p>
          <h3>{{ guide.headings?.aftercareTitle ?? 'Ļaujam grīdai iegūt izturību.' }}</h3>
          <p>{{ guide.aftercare }}</p>
        </article>
      </div>
    </section>

    <section class="guide-section faq-section" aria-labelledby="faq-title">
      <p class="guide-eyebrow">Noderīgi zināt</p>
      <h2 id="faq-title">Biežākie jautājumi</h2>
      <div class="faq-list">
        <details v-for="item in guide.faq" :key="item.question">
          <summary>{{ item.question }}</summary>
          <p>{{ item.answer }}</p>
        </details>
      </div>
    </section>
  </div>
</template>

<style scoped>
.guide-section {
  max-width: 1280px;
  margin: 0 auto;
  padding: 4.5rem 2rem;
}
.guide-eyebrow {
  color: #98724f;
  font-size: 0.72rem;
  font-weight: 750;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}
.technical-guide h2 {
  margin-top: 0.8rem;
  color: #5c3a21;
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  line-height: 1.2;
  letter-spacing: -0.035em;
  font-weight: 600;
}
.guide-lead {
  max-width: 800px;
  margin-top: 1.4rem;
  line-height: 1.9;
  color: #665c53;
}
.condition-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 2.5rem;
}
.condition-card {
  border: 1px solid #d9cbb9;
  background: #fffdfa;
  border-radius: 1.25rem;
  padding: 1.6rem;
}
.condition-card h3 {
  font-size: 0.85rem;
  color: #75614f;
  font-weight: 600;
}
.condition-card .condition-value {
  color: #5c3a21;
  font-size: 1.3rem;
  line-height: 1.35;
  font-weight: 650;
  margin: 0.75rem 0;
}
.condition-card p,
.bonding-grid p,
.care-grid article > p:last-child {
  font-size: 0.94rem;
  line-height: 1.85;
  color: #665c53;
}
.subheading {
  font-size: 1.2rem;
  font-weight: 650;
  margin-top: 2.5rem;
  color: #5c3a21;
}
.preparation-list {
  padding: 0;
  list-style: none;
  display: grid;
  gap: 1rem;
  margin-top: 1.2rem;
  max-width: 960px;
}
.preparation-list li {
  display: flex;
  gap: 1rem;
  line-height: 1.85;
  color: #665c53;
}
.preparation-list span {
  color: #98724f;
  font-weight: 700;
}
.moisture-section {
  background: #f0e8d9;
}
.table-scroll {
  overflow-x: auto;
  margin-top: 2rem;
  border-radius: 1rem;
  border: 1px solid #d9cbb9;
  background: #fffdfa;
}
table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 0.93rem;
}
caption {
  text-align: left;
  padding: 1rem 1.25rem;
  color: #75614f;
  font-size: 0.8rem;
}
th,
td {
  padding: 1rem 1.25rem;
  border-top: 1px solid #e5dbcd;
}
thead {
  background: #e8dcc9;
  color: #5c3a21;
}
tbody th {
  font-weight: 500;
}
td {
  white-space: nowrap;
  font-weight: 650;
  color: #5c3a21;
}
.technical-note {
  max-width: 1020px;
  color: #665c53;
  font-size: 0.84rem;
  line-height: 1.85;
  margin-top: 1.2rem;
}
.bonding-grid {
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 2.5rem;
}
.bonding-grid li {
  border: 1px solid #e1d6c8;
  border-radius: 1.25rem;
  padding: 1.75rem;
  background: white;
}
.step-number {
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  color: #98724f;
  font-weight: 750;
}
.bonding-grid h3,
.care-grid h3 {
  font-weight: 650;
  font-size: 1.15rem;
  line-height: 1.5;
  color: #5c3a21;
  margin: 0.8rem 0;
}
.care-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
  margin-top: 2.5rem;
}
.care-grid article {
  background: #eee5d7;
  border-radius: 1.25rem;
  padding: 1.75rem;
}
.faq-section {
  padding-top: 0;
}
.faq-list {
  margin-top: 2rem;
}
.faq-list details {
  border-bottom: 1px solid #d9cbb9;
  padding: 1.1rem 0;
}
summary {
  cursor: pointer;
  font-weight: 600;
  color: #5c3a21;
  line-height: 1.6;
}
summary:focus-visible,
.table-scroll:focus-visible {
  outline: 2px solid #98724f;
  outline-offset: 4px;
}
details p {
  margin-top: 0.8rem;
  max-width: 900px;
  color: #665c53;
  line-height: 1.85;
}
@media (max-width: 800px) {
  .condition-grid {
    grid-template-columns: 1fr;
  }
  .guide-section {
    padding: 3rem 1.25rem;
  }
  .faq-section {
    padding-top: 0;
  }
}
@media (max-width: 600px) {
  .bonding-grid,
  .care-grid {
    grid-template-columns: 1fr;
  }
  th,
  td {
    padding: 0.9rem;
  }
}
</style>
