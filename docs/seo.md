# Tehniskais SEO

Produkcijai izmantojiet npm run build (nevis tikai build-only). Pēc Vite būvēšanas scripts/build-seo.mjs sagatavo pilnus HTML failus galvenajām, pakalpojumu un publicēto projektu lapām, automātisku sitemap.xml un 404.html.

Saturs tiek renderēts no tiem pašiem Vue komponentiem un datiem kā pārlūkā. Jauns publicēts projekts vai pakalpojums nākamajā būvē automātiski nonāk vietnes kartē un iegūst savu HTML.

SEO metadatus un strukturētos datus pārvalda src/utils/seo.ts. Pārlūka navigācijā mainās title, description, canonical un sociālo tīklu metadati. Vaicājuma parametri un enkuri canonical adresē netiek iekļauti. Nav pievienoti izdomāti vērtējumi, cenas vai darba laiki.

Testi: npm run build, pēc tam node scripts/test-seo.mjs un node scripts/test-analytics.mjs.

Uz Nano jāpublicē viss dist saturs, ieskaitot ģenerēto .htaccess. Ražošanas .htaccess pieņem Apache mod_rewrite un AllowOverride atbalstu; maršruti tiek pārrakstīti uz atbilstošo ģenerēto HTML bez obligātas beigu slīpsvītras. Nezināmām adresēm serveris atdod HTTP 404. Pēc publicēšanas pārbaudiet sākumlapu, pakalpojumu, projektu un izdomātu adresi.

GitHub priekšskatījuma un maintenance būves paliek atsevišķas un saņem noindex. Tās nedrīkst izmantot produkcijas izvietošanai.

Pēc publicēšanas Google Search Console iesniedziet https://floorinstall.lv/sitemap.xml un pārbaudiet pakalpojumu un projektu adreses ar URL Inspection. Strukturētos datus var pārbaudīt Google Rich Results Test; marķējums negarantē paplašinātus rezultātus vai pozīcijas.
