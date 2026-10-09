import type { ServiceTechnicalGuide } from '../../types/service'

export const parquetGuide: ServiceTechnicalGuide = {
  conditions: [
    {
      title: 'Temperatūra telpā',
      value: 'Stabils mikroklimats',
      text: 'Darbu plānošanai piemērots orientieris ir 18–22 °C. Pirms ieklāšanas pārbaudām arī pamatnes un materiāla temperatūru; konkrētās pieļaujamās robežas nosaka parketa un līmes instrukcijas.',
    },
    {
      title: 'Gaisa relatīvais mitrums',
      value: '30–60 % RH',
      text: 'Piemēram, Kährs koka grīdām paredzēts 30–60 % RH diapazons. Līmei var būt šaurākas prasības — jāizpilda abu produktu nosacījumi. Stabilu mitrumu uztur arī grīdas lietošanas laikā.',
    },
    {
      title: 'Mitrums parketā',
      value: 'Pēc produkta specifikācijas',
      text: 'Koka mitrumu pārbauda ar koksnei piemērotu mērierīci, ievērojot sugas korekciju. Piemēram, Junckers divjoslu masīvkoka parketam ražotājs norāda 8 ± 2 % (izņemot Black Oak). Tas nav universāls diapazons visam parketam.',
    },
  ],
  preparation: [
    'Pabeidziet apmetuma, špaktelēšanas, flīzēšanas un citus mitros darbus. Telpai jābūt noslēgtai, ar uzstādītiem logiem un durvīm un stabilu apkuri vai ventilāciju.',
    'Atbrīvojiet darba zonu un saskaņojiet gatavās grīdas augstumu pie durvīm, sliekšņiem un blakus segumiem. Iepriekš norādiet komunikāciju un apsildes cauruļu izvietojumu.',
    'Parketu glabājiet sausā telpā, uz līdzenas pamatnes, pasargātu no mitruma. Iepakojuma atvēršanas brīdi un aklimatizācijas ilgumu nosaka konkrētais ražotājs — visiem produktiem neder viens “48 stundu” noteikums.',
    'Pamatnei jābūt stingrai, tīrai un pietiekami līdzenai. Pirms darba novērtējam plaisas, drūpošas vietas, virsmas stiprību un līdzenumu ar kontrolsliedi; pieļaujamo novirzi pārbaudām parketa instrukcijā.',
  ],
  moisture: [
    { substrate: 'Koka pamatne', level: 'Orientieris: zem 10 %', text: 'Kokam jābūt sausam un stabilam. Pieļaujamo mitrumu pārbaudām pēc izvēlētā parketa un pamatnes prasībām.' },
    {
      substrate: 'Betona / cementa pamatne',
      level: 'Cementa klonam: līdz 2,0 CM %',
      text: 'Šis ir cementa klona orientieris. Betona mitrumu izvērtējam ar pamatnei piemērotu metodi; apsildāmām grīdām prasības ir stingrākas.',
    },
  ],
  moistureNote:
    'Kvalitatīvai ieklāšanai pamatnei jābūt sausai, līdzenai un stingrai. Pirms darbu sākšanas mitrumu izmērām — ar sausu izskatu vien nepietiek. Norādītie līmeņi ir orientējoši; galīgo robežu nosaka pamatne, apsilde un izvēlētā materiālu sistēma.',
  bonding: [
    {
      title: 'Pamatnes pārbaude un sagatavošana',
      text: 'Fiksējam mitruma mērījumus un novērtējam pamatni. Noņemam vāji saistītus slāņus un piesārņojumu, nepieciešamības gadījumā slīpējam, remontējam plaisas un izlīdzinām virsmu. Putekļus savācam ar piemērotu putekļsūcēju.',
    },
    {
      title: 'Saderīga grunts un līme',
      text: 'Izvēlamies parketa veidam, dēļu izmēram, pamatnei un apsildei atļautu parketa līmi. Grunti lieto, ja to paredz sistēma. Mitruma barjera ir atsevišķs tehnisks risinājums noteiktām pamatnēm, nevis veids, kā bez pārbaudes līmēt uz slapjas grīdas.',
    },
    {
      title: 'Raksta nospraušana',
      text: 'Pirms līmēšanas saskaņojam dēļu virzienu, raksta asi un piegriezumus pie malām. Taisniem dēļiem plānojam gala šuvju nobīdi; skujiņai precīzi iezīmējam sākuma asi. Pie sienām un fiksētiem elementiem atstājam ražotāja noteiktās kustības spraugas.',
    },
    {
      title: 'Līmes uzklāšana ar zobaino lāpstiņu',
      text: 'Līmi izklāj pa visu ieklājamās zonas laukumu ar ražotāja norādīto lāpstiņas zobojumu. Patēriņš un zobu izmērs atkarīgs no produkta un parketa; līme neaizstāj pamatnes izlīdzināšanu. Klājam tikai tik lielu zonu, cik iespējams apstrādāt līmes atvērtajā laikā.',
    },
    {
      title: 'Dēļu iestrāde un saķeres kontrole',
      text: 'Dēļus iespiež svaigajā līmē un savieno atbilstoši parketa instrukcijai. Darba gaitā paceļam kontrol­dēli, lai pārbaudītu līmes pārnesi uz aizmuguri. Ja līme jau izveidojusi plēvīti, tajā parketu vairs neieklāj. Pārbaudām šuves, rakstu un virsmas augstumu.',
    },
    {
      title: 'Sacietēšana un noslēguma apdare',
      text: 'Svaigus līmes atlikumus noņemam tikai ar apdarei saderīgu metodi. Staigāšanas, mēbeļu novietošanas un slīpēšanas laiku nosaka līmes tehniskā lapa un telpas apstākļi. Rūpnieciski lakotu parketu pēc ieklāšanas parasti nav jāslīpē vai jāpārlako.',
    },
  ],
  heating:
    'Apsildāmai grīdai nepieciešams ar apkuri saderīgs parkets un līmēšanas sistēma. Pirms ieklāšanas jābūt izpildītam klona un apkures ražotāja uzsildīšanas protokolam; tas neaizstāj mitruma pārbaudi. Ieklāšanas laikā uztur līmei atļauto pamatnes temperatūru. Apkuri pēc sacietēšanas maina pakāpeniski. Kährs koka grīdām virsmas temperatūras robeža ir 27 °C, arī zem paklājiem un mēbelēm; savam parketam pārbaudiet tā instrukciju.',
  aftercare:
    'Pēc darbu pabeigšanas vienojamies, kad drīkst staigāt, ienest mēbeles un veikt pirmo kopšanu. Saglabājiet vienmērīgu telpas mikroklimatu un izmantojiet konkrētajai eļļai vai lakai paredzētus kopšanas līdzekļus. Izvairieties no stāvoša ūdens, uz mēbeļu kājām uzlieciet filca paliktņus un smagus priekšmetus pārvietojiet paceļot.',
  faq: [
    {
      question: 'Vai pietiek ar to, ka pamatne izskatās sausa?',
      answer:
        'Nē. Virsma var būt sausa, kamēr dziļāk klonā vēl saglabājas mitrums. Elektronisku mērierīci var izmantot sākotnējai pārbaudei; lēmumu par ieklāšanu pieņem pēc attiecīgajai sistēmai atļauta mērījuma un robežvērtībām.',
    },
    {
      question: 'Vai līmētam parketam vajag apakšklāju?',
      answer:
        'Parasts peldošās grīdas putu apakšklājs nav paredzēts tiešai līmēšanai. Ja vajadzīga skaņas izolācija vai atdalošs slānis, izvēlas speciālu, visā sistēmā līmēšanai apstiprinātu risinājumu.',
    },
    {
      question: 'Cik ilgi pēc ieklāšanas nedrīkst staigāt?',
      answer:
        'Vienas atbildes visām līmēm nav. Laiks atšķiras atkarībā no produkta, slāņa biezuma, temperatūras un mitruma. Konkrētu noslogošanas grafiku saskaņojam pēc izmantotās līmes un apdares norādījumiem.',
    },
  ],
}
