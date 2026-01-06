<script setup>
import LegalPage from '@/components/LegalPage.vue'
import LegalSection from '@/components/LegalSection.vue'
</script>

<template>
  <LegalPage pageTitle="Privātuma politika">
    <LegalSection sectionHeader="1. Ievads">
      <p>
        FloorInstall SIA (reģ.nr. 40203696793), adrese: Stirnu 43-22, Rīga, Latvija LV-1084, cienot
        jūsu privātumu, sniedz informāciju par to, kā tiek apstrādāti personas dati un izmantotas
        sīkdatnes mūsu mājaslapā
        <a href="https://floorinstall.lv" class="underline hover:text-[#A9745B]">floorinstall.lv</a
        >. Šī privātuma politika izskaidro, kā mēs vācam, izmantojam un aizsargājam jūsu
        informāciju.
      </p>
    </LegalSection>

    <LegalSection sectionHeader="2. Personas dati">
      <p>
        Mēs vācam tikai nepieciešamos personas datus, ko lietotājs sniedz brīvprātīgi, piemēram:
      </p>
      <ul class="list-disc list-inside ml-4">
        <li>Vārds un uzvārds</li>
        <li>Telefona numurs</li>
        <li>E-pasta adrese</li>
      </ul>
      <p>
        Dati tiek vākti, lai atbildētu uz jūsu jautājumiem, nosūtītu piedāvājumus vai apstrādātu
        kontaktformas pieprasījumus. Jūsu dati tiek glabāti drošā veidā un netiek nodoti trešajām
        personām bez jūsu piekrišanas.
      </p>
    </LegalSection>

    <LegalSection sectionHeader="3. Sīkdatnes (Cookies)">
      <p>
        Mūsu mājaslapā tiek izmantotas sīkdatnes, lai uzlabotu lietotāja pieredzi un analizētu
        apmeklējumu statistiku.
      </p>
      <ul class="list-disc list-inside ml-4">
        <li>
          Funkcionālās sīkdatnes – nepieciešamas lapas darbībai (piemēram, cookie banner statusam)
        </li>
        <li>
          Analītikas sīkdatnes – palīdz saprast, kā apmeklētāji izmanto lapu (piemēram, Google
          Analytics)
        </li>
      </ul>
      <p>
        Lietotājs var piekrist vai noraidīt sīkdatņu izmantošanu, izmantojot cookie piekrišanas logu
        lapas apakšā.
      </p>
    </LegalSection>

    <LegalSection sectionHeader="4. Trešo pušu pakalpojumi">
      <p>
        Lai uzlabotu pakalpojumu, mēs varam izmantot Google Analytics un Facebook Pixel, kas var
        vākt un apstrādāt anonimizētus lietotāju datus trešo pušu serveros.
      </p>
    </LegalSection>

    <LegalSection sectionHeader="5. Lietotāja tiesības">
      <p>
        Jums ir tiesības pieprasīt piekļuvi saviem datiem, pieprasīt datu labojumu vai dzēšanu, kā
        arī atsaukt piekrišanu datu apstrādei. Lai izmantotu šīs tiesības, rakstiet uz
        <a href="mailto:info@floorinstall.lv" class="underline hover:text-[#A9745B]"
          >info@floorinstall.lv</a
        >
        vai zvaniet
        <a href="tel:+37122063849" class="underline hover:text-[#A9745B]">+371 22063849</a>.
      </p>
    </LegalSection>

    <LegalSection sectionHeader="6. Drošība">
      <p>
        Mēs izmantojam tehniskus un organizatoriskus pasākumus, lai aizsargātu jūsu datus pret
        neatļautu piekļuvi, izpaušanu vai zaudējumu.
      </p>
    </LegalSection>

    <LegalSection sectionHeader="7. Kontakti">
      <p>Jautājumu vai pieprasījumu gadījumā sazinieties ar mums:</p>
      <ul class="list-disc list-inside ml-4">
        <li>
          E-pasts:
          <a href="mailto:info@floorinstall.lv" class="underline hover:text-[#A9745B]"
            >info@floorinstall.lv</a
          >
        </li>
        <li>
          Telefons:
          <a href="tel:+37122063849" class="underline hover:text-[#A9745B]">+371 22063849</a>
        </li>
      </ul>
    </LegalSection>

    <LegalSection sectionHeader="8. Izmaiņas privātuma politikā">
      <p>
        Mēs paturam tiesības atjaunināt šo politiku. Izmaiņas stāsies spēkā publicēšanas brīdī.
        Ieteicams regulāri pārskatīt šo lapu, lai būt informētam par jūsu datu aizsardzību.
      </p>
    </LegalSection>
  </LegalPage>
</template>
