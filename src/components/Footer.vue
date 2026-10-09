<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-intro">
        <div>
          <p class="footer-eyebrow">No ieceres līdz gatavai grīdai</p>
          <h2>Pārrunāsim jūsu projektu.</h2>
        </div>
        <router-link to="/contact" class="footer-cta">
          Saņemt piedāvājumu <span aria-hidden="true">↗</span>
        </router-link>
      </div>

      <div class="footer-columns">
        <div class="footer-brand">
          <router-link to="/" class="footer-logo" aria-label="FloorInstall — sākumlapa">
            <img src="../assets/logo.svg" alt="FloorInstall" width="215" height="48" />
          </router-link>
          <p>Parketa un vinila ieklāšana,<br />grīdu sagatavošana un restaurācija.</p>
          <p class="footer-area">Rīga, Pierīga un visa Latvija</p>
        </div>

        <div>
          <h3>Sazinieties ar mums</h3>
          <address class="footer-contact">
            <a href="tel:+37122063849" class="footer-phone">+371 22 063 849</a>
            <a href="mailto:info@floorinstall.lv">info@floorinstall.lv</a>
          </address>
          <div class="footer-socials">
            <a href="https://wa.me/37122063849" target="_blank" rel="noopener noreferrer">
              WhatsApp <span aria-hidden="true">↗</span>
            </a>
            <a href="https://www.facebook.com/floorinstall.lv/" target="_blank" rel="noopener noreferrer">
              Facebook <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <nav aria-label="Kājenes navigācija">
          <h3>Noderīgas saites</h3>
          <ul class="footer-links">
            <li><router-link to="/">Sākums</router-link></li>
            <li><router-link to="/services">Pakalpojumi</router-link></li>
            <li><router-link to="/gallery">Galerija</router-link></li>
            <li><router-link to="/contact">Kontakti</router-link></li>
          </ul>
        </nav>

        <div class="footer-company">
          <h3>Uzņēmuma rekvizīti</h3>
          <p class="company-name">FloorInstall, SIA</p>
          <dl>
            <div><dt>Reģistrācijas numurs</dt><dd>40203696793</dd></div>
            <div><dt>Juridiskā adrese</dt><dd>Stirnu iela 43-22, Rīga,<br />Latvija, LV-1084</dd></div>
            <div><dt>Bankas konts</dt><dd class="footer-iban">LV87HABA0551063348957</dd></div>
          </dl>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© {{ new Date().getFullYear() }} FloorInstall. Visas tiesības aizsargātas.</p>
        <nav aria-label="Juridiskā informācija">
          <router-link to="/privacy-policy">Privātuma politika</router-link>
          <router-link to="/terms">Noteikumi</router-link>
        </nav>
      </div>
    </div>

    <section v-if="!hasCookiesDecision" class="cookie-notice" aria-label="Informācija par vietējo saglabāšanu">
      <p>Šī lapa neizmanto reklāmas vai analītikas izsekošanu. Pārlūkprogrammā saglabājam tikai šī paziņojuma aizvēršanu.</p>
      <router-link to="/privacy-policy" class="cookie-policy">Privātuma politika</router-link>
      <div class="cookie-actions">
        <button type="button" @click="dismissNotice" class="cookie-accept">Sapratu</button>
      </div>
    </section>
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const hasCookiesDecision = ref(false)

onMounted(() => {
  try {
    hasCookiesDecision.value = Boolean(localStorage.getItem('cookiesDecision'))
  } catch {
    // Browser storage can be disabled.
  }
})

const dismissNotice = () => {
  try {
    localStorage.setItem('cookiesDecision', 'dismissed')
  } catch {
    // The notice can still be closed without persistent storage.
  }
  hasCookiesDecision.value = true
}
</script>

<style scoped>
.site-footer { background: #242321; color: #d3cec6; text-align: left; }
.footer-inner { max-width: 80rem; margin: 0 auto; padding: 0 2rem; }
.footer-intro { display: flex; align-items: center; justify-content: space-between; gap: 2rem; padding: 3.5rem 0; border-bottom: 1px solid #ffffff1f; }
.footer-eyebrow { margin-bottom: .8rem; color: #c9a47d; font-size: .7rem; font-weight: 700; letter-spacing: .2em; text-transform: uppercase; }
.footer-intro h2 { color: #f8f5ef; font-size: clamp(1.75rem, 3vw, 2.5rem); font-weight: 600; line-height: 1.2; letter-spacing: -.03em; }
.footer-cta { display: inline-flex; flex-shrink: 0; align-items: center; justify-content: center; gap: 1.5rem; border: 1px solid #b7926d; border-radius: .75rem; padding: 1rem 1.4rem; color: #f8f5ef; font-weight: 600; transition: background .2s; }
.footer-cta:hover { background: #98724f; }
.footer-columns { display: grid; grid-template-columns: 1.1fr 1fr .8fr 1.2fr; gap: 2.5rem; padding: 3.5rem 0; }
.footer-columns h3 { margin-bottom: 1.4rem; color: #f8f5ef; font-size: .8rem; font-weight: 600; }
.footer-logo { display: inline-flex; align-items: center; justify-content: center; border-radius: .75rem; background: #f8f5ef; padding: .65rem .9rem; margin-bottom: 1.2rem; }
.footer-logo img { width: 13.5rem; height: auto; }
.footer-brand p { font-size: .85rem; line-height: 1.85; }
.footer-brand .footer-area { margin-top: 1rem; color: #c9a47d; font-size: .75rem; }
.footer-contact { display: flex; flex-direction: column; gap: .65rem; font-size: .9rem; font-style: normal; }
.footer-contact .footer-phone { color: #f8f5ef; font-size: 1.2rem; font-weight: 600; white-space: nowrap; }
.footer-socials { display: flex; flex-wrap: wrap; gap: .6rem; margin-top: 1.4rem; }
.footer-socials a { display: inline-flex; gap: .5rem; padding: .6rem .7rem; border: 1px solid #ffffff26; border-radius: .5rem; font-size: .75rem; }
.footer-socials a:hover { border-color: #c9a47d; }
.footer-links { display: grid; gap: .8rem; font-size: .85rem; list-style: none; padding: 0; }
.footer-company { font-size: .8rem; line-height: 1.6; }
.company-name { margin-bottom: 1rem; color: #f8f5ef; font-weight: 600; }
.footer-company dl { display: grid; gap: .8rem; }
.footer-company dt { color: #a7a198; font-size: .7rem; margin-bottom: .15rem; }
.footer-company dd { margin: 0; }
.footer-iban { overflow-wrap: anywhere; font-variant-numeric: tabular-nums; }
.footer-bottom { display: flex; justify-content: space-between; gap: 1rem; border-top: 1px solid #ffffff1f; padding: 1.5rem 0; color: #a7a198; font-size: .75rem; line-height: 1.6; }
.footer-bottom nav { display: flex; flex-wrap: wrap; gap: 1.5rem; }
a { transition: color .2s; }
a:hover { color: #e6c4a1; }
a:focus-visible, button:focus-visible { outline: 2px solid #c9a47d; outline-offset: 5px; }
.cookie-notice { position: fixed; bottom: 1rem; left: 50%; transform: translateX(-50%); z-index: 60; width: min(32rem, calc(100% - 2rem)); padding: 1.25rem; border: 1px solid #d8cebf; border-radius: 1rem; background: #f8f5ef; color: #3d3934; box-shadow: 0 12px 50px #0003; font-size: .85rem; line-height: 1.6; }
.cookie-policy { display: inline-block; margin-top: .6rem; text-decoration: underline; color: #745232; }
.cookie-policy:hover { color: #3d3934; }
.cookie-actions { display: flex; gap: .75rem; margin-top: 1rem; }
.cookie-actions button { flex: 1; padding: .65rem 1rem; border: 1px solid #b7a895; border-radius: .5rem; cursor: pointer; font-weight: 600; }
.cookie-actions button:hover { background: #e8e1d6; }
.cookie-actions .cookie-accept { background: #7f5d3e; border-color: #7f5d3e; color: white; }
.cookie-actions .cookie-accept:hover { background: #63472e; }
@media (max-width: 1100px) { .footer-columns { grid-template-columns: 1fr 1fr; gap: 2.5rem 3rem; } }
@media (max-width: 600px) {
  .footer-inner { padding: 0 1.25rem; }
  .footer-intro { align-items: flex-start; flex-direction: column; padding: 2.5rem 0; gap: 1.5rem; }
  .footer-cta { width: 100%; }
  .footer-columns { grid-template-columns: 1fr; gap: 2rem; padding: 2.5rem 0; }
  .footer-columns h3 { margin-bottom: 1rem; }
  .footer-bottom { flex-direction: column; padding: 1.5rem 0 2rem; }
}
</style>
