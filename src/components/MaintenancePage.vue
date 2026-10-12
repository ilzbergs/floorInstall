<template>
  <main class="maintenance-page">
    <div class="maintenance-page__image" aria-hidden="true"></div>
    <div class="maintenance-page__shade" aria-hidden="true"></div>

    <section class="maintenance-page__content" aria-labelledby="maintenance-title">
      <img src="@/assets/logo.svg" alt="FloorInstall" class="maintenance-page__logo" />

      <div class="maintenance-page__eyebrow">
        <span></span>
        Drīzumā
      </div>
      <h1 id="maintenance-title">Mēs veidojam jauno<br />FloorInstall mājaslapu.</h1>
      <p>
        Drīzumā šeit būs pieejama informācija par mūsu pakalpojumiem, paveiktajiem darbiem un iespēja saņemt piedāvājumu.
      </p>

      <div class="maintenance-page__contacts">
        <a href="tel:+37122063849">+371 22 063 849</a>
        <a href="mailto:info@floorinstall.lv">info@floorinstall.lv</a>
      </div>

      <p class="maintenance-page__note">Parketa un vinila ieklāšana, grīdu sagatavošana un restaurācija visā Latvijā.</p>
    </section>

    <section v-if="analyticsEnabled && !hasCookiesDecision" class="cookie-notice" aria-label="Sīkdatņu izvēle">
      <p>Ar jūsu piekrišanu izmantojam Google Analytics, lai saprastu, kā tiek izmantota vietne. Reklāmas personalizāciju neizmantojam.</p>
      <router-link to="/privacy-policy" class="cookie-policy">Privātuma politika</router-link>
      <div class="cookie-actions">
        <button type="button" @click="rejectAnalytics">Noraidīt</button>
        <button type="button" class="cookie-accept" @click="acceptAnalytics">Pieņemt analītiku</button>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { getAnalyticsConsent, isAnalyticsAvailable, setAnalyticsConsent } from '@/composables/useAnalytics'

const analyticsConsent = ref<'granted' | 'denied' | null>(null)
const analyticsEnabled = isAnalyticsAvailable()
const hasCookiesDecision = computed(() => analyticsConsent.value !== null)

onMounted(() => {
  analyticsConsent.value = getAnalyticsConsent()
})

function acceptAnalytics() {
  setAnalyticsConsent('granted')
  analyticsConsent.value = 'granted'
}

function rejectAnalytics() {
  setAnalyticsConsent('denied')
  analyticsConsent.value = 'denied'
}
</script>

<style scoped>
.maintenance-page {
  position: relative;
  display: grid;
  min-height: 100svh;
  overflow: hidden;
  place-items: center;
  background: #211d19;
  color: #fffdf8;
}
.maintenance-page__image,
.maintenance-page__shade {
  inset: 0;
  position: absolute;
}
.maintenance-page__image {
  background: url('/images/hero.jpg') center / cover no-repeat;
  filter: saturate(.72);
  transform: scale(1.03);
}
.maintenance-page__shade {
  background: linear-gradient(100deg, rgba(27, 22, 17, .92) 0%, rgba(32, 25, 18, .78) 48%, rgba(31, 25, 19, .30) 100%);
}
.maintenance-page__content {
  position: relative;
  width: min(100% - 3rem, 43rem);
  padding: 3rem 0;
}
.maintenance-page__logo {
  width: 10rem;
  height: auto;
  margin-bottom: clamp(4rem, 13vh, 8.5rem);
  filter: brightness(0) invert(1);
}
.maintenance-page__eyebrow {
  display: flex;
  align-items: center;
  gap: .75rem;
  color: #d1a578;
  font-size: .74rem;
  font-weight: 800;
  letter-spacing: .18em;
  text-transform: uppercase;
}
.maintenance-page__eyebrow span { width: 2.25rem; height: 1px; background: currentColor; }
h1 {
  max-width: 11ch;
  margin: 1rem 0 1.5rem;
  font-size: clamp(2.75rem, 6.6vw, 5.7rem);
  line-height: .98;
  letter-spacing: -.055em;
}
p {
  max-width: 35rem;
  margin: 0;
  color: rgba(255, 253, 248, .78);
  font-size: clamp(1rem, 1.7vw, 1.13rem);
  line-height: 1.7;
}
.maintenance-page__contacts {
  display: flex;
  flex-wrap: wrap;
  gap: .7rem;
  margin: 2rem 0 1.25rem;
}
.maintenance-page__contacts a {
  border: 1px solid rgba(255,255,255,.42);
  border-radius: .8rem;
  padding: .78rem 1rem;
  color: #fffdf8;
  font-weight: 700;
  transition: background .2s ease, border-color .2s ease;
}
.maintenance-page__contacts a:hover { border-color: #d1a578; background: rgba(255,255,255,.1); }
.maintenance-page__note { font-size: .88rem; color: rgba(255,253,248,.6); }
.cookie-notice { position: fixed; right: 1rem; bottom: 1rem; z-index: 2; width: min(30rem, calc(100% - 2rem)); padding: 1.25rem; border: 1px solid #d8cebf; border-radius: 1rem; background: #f8f5ef; color: #3d3934; box-shadow: 0 12px 50px #0006; font-size: .85rem; line-height: 1.6; }
.cookie-policy { display: inline-block; margin-top: .6rem; text-decoration: underline; color: #745232; }
.cookie-actions { display: flex; gap: .75rem; margin-top: 1rem; }
.cookie-actions button { flex: 1; padding: .65rem 1rem; border: 1px solid #b7a895; border-radius: .5rem; background: white; color: #3d3934; cursor: pointer; font-weight: 600; }
.cookie-actions .cookie-accept { border-color: #7f5d3e; background: #7f5d3e; color: white; }
.cookie-actions button:hover { background: #e8e1d6; }
.cookie-actions .cookie-accept:hover { background: #63472e; }
@media (max-width: 560px) {
  .maintenance-page__content { width: min(100% - 2.5rem, 43rem); }
  .maintenance-page__logo { margin-bottom: 5rem; }
  h1 { font-size: clamp(2.55rem, 13vw, 4rem); }
  .maintenance-page__shade { background: linear-gradient(120deg, rgba(27,22,17,.93), rgba(32,25,18,.67)); }
}
</style>
