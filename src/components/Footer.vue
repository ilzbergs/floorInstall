<template>
  <footer class="w-full bg-[#E8DCC2] text-[#5C3A21] font-body shadow mt-4">
    <!-- Kontaktinformācija + Rekvizīti -->
    <div
      class="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row sm:justify-between gap-6 border-b border-[#CBB892]"
    >
      <div class="flex flex-col gap-1">
        <h4 class="font-heading font-bold text-lg">Kontakti</h4>
        <p><a href="tel:+37122063849" class="hover:text-[#A9745B]">+371 22063849</a></p>
        <p>
          <a href="mailto:info@floorinstall.lv" class="hover:text-[#A9745B]"
            >info@floorinstall.lv</a
          >
        </p>
      </div>
      <div class="flex flex-col gap-1">
        <h4 class="font-heading font-bold text-lg">Rekvizīti</h4>
        <p>Uzņēmums: FloorInstall, SIA</p>
        <p>Reģ. nr.: 40203696793</p>
        <p>Jur.adrese: Stirnu iela 43-22, Rīga, Latvija, LV-1084</p>
        <p>Bankas konts: LV87HABA0551063348957</p>
      </div>
    </div>

    <!-- Ātrās saites + sociālie tīkli -->
    <div
      class="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4"
    >
      <ul class="flex flex-col sm:flex-row gap-4">
        <li><router-link class="hover:text-[#A9745B]" to="/">Sākums</router-link></li>
        <li><router-link class="hover:text-[#A9745B]" to="/services">Pakalpojumi</router-link></li>
        <li><router-link class="hover:text-[#A9745B]" to="/gallery">Galerija</router-link></li>
      </ul>

      <div class="flex gap-3">
        <!-- Facebook -->
        <a
          href="https://www.facebook.com/floorinstall.lv/"
          target="_blank"
          rel="noopener"
          class="flex items-center justify-center w-auto h-10 bg-[#1877F2] text-white rounded hover:bg-[#0F4EC9] transition px-4 gap-2"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54V12h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            />
          </svg>
          <span class="hidden sm:inline text-white font-medium">Facebook</span>
        </a>

        <!-- WhatsApp -->
        <a
          href="https://wa.me/37122063849"
          target="_blank"
          rel="noopener"
          class="flex items-center justify-center w-auto h-10 bg-[#1E9E57] text-white rounded hover:bg-[#157A42] transition px-4 gap-2"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M17.472 14.382c-.297-.149-1.758-.868-2.031-.968-.273-.099-.472-.149-.671.149s-.771.968-.944 1.168c-.173.199-.347.224-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.786-1.48-1.754-1.653-2.052-.173-.298-.018-.459.13-.608.134-.133.298-.347.446-.521.149-.173.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.671-1.611-.919-2.211-.242-.579-.487-.5-.671-.51l-.573-.01c-.198 0-.521.074-.794.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.26.489 1.69.625.71.227 1.356.195 1.867.118.571-.085 1.758-.719 2.006-1.412.248-.694.248-1.29.173-1.412-.074-.124-.272-.198-.57-.347z"
            />
          </svg>
          <span class="hidden sm:inline">WhatsApp</span>
        </a>
      </div>
    </div>

    <!-- Copyright -->
    <div class="w-full border-t border-[#CBB892] mt-4 pt-4 text-center text-sm">
      <p class="mb-3">© {{ new Date().getFullYear() }} FloorInstall. Visas tiesības aizsargātas.</p>
      <nav class="flex flex-wrap justify-center gap-4 sm:gap-6">
        <router-link to="/privacy-policy" class="hover:text-[#A9745B] transition"
          >Privātuma politika</router-link
        >
        <span class="text-[#CBB892]">|</span>
        <router-link to="/terms" class="hover:text-[#A9745B] transition">Noteikumi</router-link>
      </nav>
    </div>

    <!-- Cookie consent banner -->
    <div
      v-if="!hasCookiesDecision"
      class="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-[#F5F1E8] border border-[#CBB892] px-4 py-3 rounded shadow flex flex-col sm:flex-row sm:items-center gap-3 max-w-xl z-50"
    >
      <p class="text-sm flex-1">
        Mēs izmantojam sīkdatnes, lai uzlabotu lietotāja pieredzi un analītiku.
      </p>
      <div class="flex gap-2">
        <router-link
          to="/privacy-policy"
          class="underline text-[#5C3A21] hover:text-[#A9745B] text-sm"
        >
          Privātuma politika
        </router-link>
        <button
          @click="acceptCookies"
          class="bg-[#5C3A21] text-white px-3 py-1 rounded hover:bg-[#A9745B] text-sm"
        >
          Piekrītu
        </button>
        <button
          @click="declineCookies"
          class="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500 text-sm"
        >
          Nepiekrītu
        </button>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const hasCookiesDecision = ref(false)

onMounted(() => {
  const decision = localStorage.getItem('cookiesDecision')
  if (decision) hasCookiesDecision.value = true
})

const acceptCookies = () => {
  localStorage.setItem('cookiesDecision', 'accept')
  hasCookiesDecision.value = true
}

const declineCookies = () => {
  localStorage.setItem('cookiesDecision', 'decline')
  hasCookiesDecision.value = true
}
</script>
