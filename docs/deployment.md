# FloorInstall publicēšana

## Datorā

```powershell
cd C:\Users\tomsi\Projects\floorInstall
npm ci
npm run dev
```
Atver terminālī norādīto adresi (parasti http://localhost:5173).

## GitHub Pages testa versija

- Avota zars: `codex/github-pages-preview`.
- Workflow: `.github/workflows/pages.yml`.
- Repozitorijā Settings → Pages → Source jābūt **GitHub Actions**.
- Testa adrese pēc sekmīgas publicēšanas: https://ilzbergs.github.io/floorInstall/
- Testa lapās izmanto hash maršrutus, piemēram, `/floorInstall/#/gallery`.
- `npm run build:github` izveido testa būvējumu mapē `dist`.
- Testa versijai ir `noindex` un aizliegta indeksēšana robots.txt; tā nav privāta lapa.
- Lai atjauninātu testu, nosūti izmaiņas testa zarā. `main` netiek automātiski publicēts.

## nano.lv / cPanel / floorinstall.lv

Šis ir statisks Vue/Vite projekts. Serverī nav jāpalaiž `npm run dev`, Node.js process vai datubāze. Galeriju šajā versijā veido `gallery-seed.json` un attēlu faili. Kontaktforma atver apmeklētāja e-pasta programmu; tā nesūta e-pastu caur serveri.

1. Datorā palaid `npm ci`, pēc tam `npm run build` (nevis `build:github`).
2. cPanel → **Domains** atrodi `floorinstall.lv` un pārbaudi **Document Root**. Galvenajam domēnam tas parasti ir `public_html`, bet izmanto panelī norādīto mapi.
3. Pirms esošās lapas aizstāšanas saglabā tās failu rezerves kopiju ārpus publiskās mapes. Saglabā esošos e-pasta un DNS iestatījumus.
4. cPanel → **File Manager** atver domēna Document Root. Settings → **Show Hidden Files (dotfiles)** ļauj redzēt `.htaccess`.
5. Augšupielādē sagatavoto `floorinstall-nano-2026-10-09.zip` un izvēlies **Extract**. Arhīva saturs ir jāizpako tieši domēna mapē: tajā jāatrodas `index.html`, `assets/`, `images/`, `gallery-seed.json`, `.htaccess` u.c., nevis vēl vienai `dist/` apakšmapei.
6. Ja jau ir `.htaccess`, pirms nomaiņas apvieno vajadzīgos esošos noteikumus ar Vue fallback noteikumiem. Vecs `index.php` vai `index.htm` var pārņemt sākumlapu; pēc rezerves kopijas izveides pārvieto tikai iepriekšējās vietnes sākuma failu ārpus publiskās mapes.
7. **SSL/TLS Status** pārbaudi sertifikātu gan `floorinstall.lv`, gan `www.floorinstall.lv`. Ja pieejams, izmanto AutoSSL; kļūdas gadījumā sazinies ar nano.lv atbalstu. HTTPS pāradresāciju ieslēdz pēc derīga sertifikāta uzstādīšanas.
8. Pārbaudi https://www.floorinstall.lv/, `/services`, `/gallery` un `/contact`, kā arī tiešu galerijas projekta adresi. Pārlādē apakšlapu ar F5: `.htaccess` jāatgriež Vue sākumlapa, nevis 404.
9. Pēc veiksmīgas izpakošanas izdzēs augšupielādēto ZIP no publiskās mapes. Ja ir CDN vai pārlūka kešatmiņa, notīri to.

ZIP ir būvēts domēna saknei, nevis `floorinstall.lv/test/` apakšmapei. Atsevišķam testam cPanel izmanto apakšdomēnu ar savu Document Root.

## Avoti

- https://vite.dev/guide/static-deploy.html
- https://www.nano.lv/knowledgebase/hosting/addon/lv/
- https://docs.cpanel.net/cpanel/files/file-manager/110/
- https://docs.cpanel.net/cpanel/security/ssl-tls-status/92/
