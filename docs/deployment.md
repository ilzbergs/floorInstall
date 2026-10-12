# FloorInstall publicēšana

## Datorā

```powershell
cd C:\Users\tomsi\Projects\floorInstall
npm ci
npm run dev
```
Atver terminālī norādīto adresi (parasti http://localhost:5173).

## GitHub Pages testa versija

- Publicētais statiskais zars: `gh-pages`.
- Repozitorijā Settings → Pages → Source ir **Deploy from a branch**; zars `gh-pages`, mape `/(root)`.
- Testa adrese: https://ilzbergs.github.io/floorInstall/
- Testa lapās izmanto hash maršrutus, piemēram, `/floorInstall/#/gallery`.
- `npm run build:github` izveido testa būvējumu mapē `dist`.
- Testa versijai ir `noindex` un aizliegta indeksēšana robots.txt; tā nav privāta lapa.
## nano.lv / cPanel / floorinstall.lv

Šis ir Vue/Vite projekts ar vienu nelielu PHP kontaktformas saņēmēju. Serverī nav jāpalaiž `npm run dev`, Node.js process vai datubāze. Galeriju šajā versijā veido `gallery-seed.json` un attēlu faili. `contact.php` izmanto cPanel PHP pasta funkciju un nosūta formas ziņas uz `info@floorinstall.lv`.
### Pagaidu “drīzumā” lapa

Kamēr pilnā lapa ir izstrādē, izveido produkcijas būvējumu ar `npm run build:maintenance`. Tas parāda FloorInstall zīmola lapu ar kontakttālruni un e-pastu, bet slēpj pilno vietni. Lai atkal publicētu pilno lapu, lieto parasto `npm run build`.

1. Datorā palaid `npm ci`, pēc tam `npm run build` (nevis `build:github`).
2. cPanel → **Domains** atrodi `floorinstall.lv` un pārbaudi **Document Root**. Galvenajam domēnam tas parasti ir `public_html`, bet izmanto panelī norādīto mapi.
3. Pirms esošās lapas aizstāšanas saglabā tās failu rezerves kopiju ārpus publiskās mapes. Saglabā esošos e-pasta un DNS iestatījumus.
4. cPanel → **File Manager** atver domēna Document Root. Settings → **Show Hidden Files (dotfiles)** ļauj redzēt `.htaccess`.
5. Augšupielādē sagatavoto `floorinstall-nano-2026-10-09.zip` un izvēlies **Extract**. Arhīva saturs ir jāizpako tieši domēna mapē: tajā jāatrodas `index.html`, `assets/`, `images/`, `gallery-seed.json`, `.htaccess` u.c., nevis vēl vienai `dist/` apakšmapei.
6. Ja jau ir `.htaccess`, pirms nomaiņas apvieno vajadzīgos esošos noteikumus ar Vue fallback noteikumiem. Vecs `index.php` vai `index.htm` var pārņemt sākumlapu; pēc rezerves kopijas izveides pārvieto tikai iepriekšējās vietnes sākuma failu ārpus publiskās mapes.
7. **SSL/TLS Status** pārbaudi sertifikātu gan `floorinstall.lv`, gan `www.floorinstall.lv`. Ja pieejams, izmanto AutoSSL; kļūdas gadījumā sazinies ar nano.lv atbalstu. HTTPS pāradresāciju ieslēdz pēc derīga sertifikāta uzstādīšanas.
8. Pārbaudi https://www.floorinstall.lv/, `/services`, `/gallery` un `/contact`, kā arī tiešu galerijas projekta adresi. Pārlādē apakšlapu ar F5: `.htaccess` jāatgriež Vue sākumlapa, nevis 404.
9. Pēc veiksmīgas izpakošanas izdzēs augšupielādēto ZIP no publiskās mapes. Ja ir CDN vai pārlūka kešatmiņa, notīri to.

## Automātiska publicēšana no GitHub uz Nano

Repozitorijā ir workflow `.github/workflows/deploy-production.yml`. Tas palaižas pēc `push` uz `main` vai manuāli GitHub sadaļā **Actions → Publish production site → Run workflow**.

Pirms pirmās palaišanas repozitorija **Settings → Secrets and variables → Actions** sadaļā jāpievieno šādi repository secrets:

- `FTP_SERVER` — Nano FTP servera adrese, ko norāda cPanel vai nano.lv atbalsts;
- `FTP_USERNAME` — cPanel FTP lietotājs;
- `FTP_PASSWORD` — šī FTP lietotāja parole;
- `FTP_REMOTE_DIR` — domēna dokumentu saknes ceļš, piemēram, `/public_html/`.

Workflow instalē atkarības, palaiž tipa pārbaudi un būvē projektu. Ja pārbaude neizdodas, faili netiek publicēti. Ja tā izdodas, `dist/` saturs tiek augšupielādēts Nano serverī, ieskaitot `gallery-seed.json`, WebP attēlus, `.htaccess` un `contact.php`.

ZIP ir būvēts domēna saknei, nevis `floorinstall.lv/test/` apakšmapei. Atsevišķam testam cPanel izmanto apakšdomēnu ar savu Document Root.

## Avoti

- https://vite.dev/guide/static-deploy.html
- https://www.nano.lv/knowledgebase/hosting/addon/lv/
- https://docs.cpanel.net/cpanel/files/file-manager/110/
- https://docs.cpanel.net/cpanel/security/ssl-tls-status/92/
