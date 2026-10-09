import type { ServiceTechnicalGuide } from '../../types/service'

export const vinylGuide: ServiceTechnicalGuide = {
  headings: {
    preparationTitle: 'Kā sagatavot telpu click vinila ieklāšanai?',
    preparationIntro: 'Click vinilu ieklājam kā peldošu grīdu ar mehāniski savienotiem dēļiem vai flīzēm. Stingra, līdzena pamatne un pareizi izveidotas malas palīdz pasargāt savienojumus no slodzes. Prasības precizējam pēc konkrētā seguma instrukcijas.',
    installationTitle: 'Kā notiek click vinila ieklāšana?',
    installationIntro: 'Savienojuma veids nosaka, kā dēļus salikt un fiksēt. Ievērojam konkrētās click sistēmas montāžas secību, lai savienojumi būtu cieši un grīda saglabātu kustības iespēju.',
    aftercareTitle: 'Ikdienas kopšana un grīdas aizsardzība.',
  },
  conditions: [
    { title: 'Temperatūra un aklimatizācija', value: 'Pēc seguma instrukcijas', text: 'Quick-Step Alpha Vinyl Pad piemērs: telpā 18–30 °C, pamatne virs 15 °C un vismaz 48 stundu aklimatizācija. Citām kolekcijām nosacījumi var atšķirties. Pārāk auksts materiāls apgrūtina montāžu.' },
    { title: 'Pamatnes līdzenums', value: 'Stingrs un vienmērīgs pamats', text: 'Ar kontrolsliedi pārbaudām gan lokālus izciļņus, gan garākus viļņus. Pieļaujamās novirzes nosaka produkts. Apakšklājs neizlabo nelīdzenu pamatni; kustīga virsma pārslogo click savienojumus.' },
    { title: 'Izplešanās spraugas', value: 'Grīdai jāspēj kustēties', text: 'Spraugas vajadzīgas pie sienām, caurulēm un fiksētiem elementiem. Quick-Step Alpha Vinyl piemērs ir 8 mm; izvēlētajam produktam pārbaudām savu prasību. Peldošo grīdu nedrīkst piespiest ar fiksētām mēbelēm.' },
  ],
  preparation: [
    'Pabeidziet mitros būvdarbus un atbrīvojiet telpu. Nodrošiniet stabilu klimatu pirms montāžas un pēc tās; informējiet par apsildi un lielām stiklotām zonām.',
    'Saskaņojiet grīdas kopējo augstumu, durvju atvēršanos, sliekšņus un pārejas pie citiem segumiem. Norādiet, kur paredzētas virtuves iekārtas vai citas stacionāras konstrukcijas.',
    'Iepakojumus glabājiet horizontāli uz līdzenas virsmas. Pirms ieklāšanas pārbaudām dekoru, daudzumu, dēļu malas un redzamus bojājumus.',
    'Pamatni attīrām un nepieciešamības gadījumā izlīdzinām. Mīksts paklājs un kustīgs peldošs segums nav piemērota pamatne; esoša stingra seguma saglabāšanu izvērtējam pēc ražotāja norādēm.',
  ],
  moisture: [
    { substrate: 'Koka pamatne', level: 'Orientieris: zem 10 %', text: 'Kokam jābūt sausam, stingram un labi nostiprinātam. Mitrumu pārbaudām pirms ieklāšanas.' },
    { substrate: 'Betona / cementa pamatne', level: 'Cementa klonam: zem 2,5 CM %', text: 'Šis ir click vinila ražotāja piemērs cementa klonam. Betonam izmantojam atbilstošu mērījuma metodi; ar apsildi prasības ir stingrākas.' },
  ],
  moistureNote: 'Arī mitrumizturīgs vinils jāieklāj uz sausas pamatnes. Pirms darba mitrumu izmērām un pārbaudām konkrētā seguma prasības. Norādītie līmeņi ir orientējoši — pamatnes veids un apsilde var mainīt pieļaujamo robežu.',
  bonding: [
    { title: 'Pamatnes novērtēšana', text: 'Pārbaudām līdzenumu, mitrumu un stabilitāti. Novēršam kustīgas vietas, plaisas un izciļņus. Lielas flīžu šuves un citus padziļinājumus apstrādājam atbilstoši seguma prasībām.' },
    { title: 'Piemērots apakšklājs', text: 'Segumam bez integrēta apakšklāja izvēlamies ražotāja atļautu click vinila apakšklāju. Integrētam apakšklājam papildu slāni parasti nepievieno. Pārāk mīksts vai neatbilstošs apakšklājs var bojāt savienojumus.' },
    { title: 'Izkārtojuma plānošana', text: 'Izmērām telpu un plānojam pirmās un pēdējās rindas platumu, dēļu virzienu un gala šuvju nobīdi. Skujiņai nepieciešams šim rakstam paredzēts segums un atbilstoša elementu sistēma.' },
    { title: 'Click savienojumu montāža', text: 'Dēļus savienojam pēc konkrētās slēdzenes instrukcijas — ar noteiktu leņķi vai gala savienojuma fiksēšanu. Neizmantojam spēku, lai aizvērtu bojātu vai piesārņotu savienojumu. Uz malu tieši ar āmuru nesitam.' },
    { title: 'Kustības spraugas un pārejas', text: 'Ar distanceriem saglabājam vajadzīgo spraugu. Pāreju profilu nepieciešamību izvērtējam pēc telpas izmēra un temperatūras zonām. Grīdlīstes stiprinām pie sienas, saglabājot seguma brīvu kustību.' },
    { title: 'Noslēguma pārbaude', text: 'Pārbaudām savienojumus, malas un durvju darbību, izņemam distancerus un veicam tīrīšanu. Saskaņojam mēbeļu novietošanu un kopšanas režīmu. Peldošā ieklāšanā segumu nepielīmējam pie pamatnes.' },
  ],
  heating: 'Pārbaudām seguma un apakšklāja saderību ar konkrēto apkuri. Apkures plēves un citas sistēmas nav automātiski piemērotas. Quick-Step norādēs virsmas kontakta temperatūra nedrīkst pārsniegt 27 °C. Pirms montāžas jābūt sagatavotai un izžāvētai pamatnei; apkuri regulē pēc ražotāja protokola. Tieša saule var radīt lokālu pārkaršanu — saulainās telpās izvērtējam ēnojumu un seguma lietošanas nosacījumus.',
  aftercare: 'Netīrumus regulāri savāciet ar mīkstu birsti vai segumam piemērotu putekļsūcēju. Mazgājiet ar labi izgrieztu mopu un vinilam paredzētu līdzekli. Izvairieties no abrazīviem līdzekļiem, mēbeļu vilkšanas un stāvoša ūdens. Tvaika tīrīšanu lietojiet tikai tad, ja to skaidri atļauj ražotājs. Pie ieejas izmantojiet segumam saderīgu paklāju un zem mēbelēm piemērotus aizsargpaliktņus.',
  faq: [
    { question: 'Vai click vinils ir jālīmē?', answer: 'Mūsu aprakstītajā peldošajā montāžā dēļus savieno click slēdzene. Pielīmēšanu vai šuvju līmēšanu pieļauj tikai produkta ražotāja īpaši paredzēta sistēma.' },
    { question: 'Vai var izmantot lamināta apakšklāju?', answer: 'Tikai tad, ja tas ir nepārprotami apstiprināts konkrētajam click vinilam. Biezs, mīksts lamināta apakšklājs var ļaut dēļiem pārmērīgi kustēties un bojāt savienojumus.' },
    { question: 'Vai vinilu drīkst ieklāt vannasistabā?', answer: 'Pārbaudām konkrētās kolekcijas atļauto lietojumu un malu blīvēšanas prasības. Segums neaizstāj telpas hidroizolāciju. Dušas zonām un telpām ar trapu nepieciešams atsevišķi apstiprināts risinājums.' },
    { question: 'Vai visu dzīvokli var ieklāt bez sliekšņiem?', answer: 'To nosaka pieļaujamais laukums, telpu konfigurācija un apkures vai temperatūras atšķirības. Dažās situācijās vajadzīgi pāreju profili, pat ja dekoru visur izvēlaties vienādu.' },
    { question: 'Ko atsūtīt piedāvājuma sagatavošanai?', answer: 'Telpas platību un foto, adresi, pamatnes veidu, apsildes informāciju un izvēlētā seguma nosaukumu. Norādiet, vai tam ir integrēts apakšklājs, un vai vajadzīga vecā seguma demontāža, izlīdzināšana vai grīdlīstes.' },
  ],
}
