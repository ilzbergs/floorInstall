# Galerijas projektu pievienošana

Galerija pašlaik ir statiska; administrēšana un datubāze nav nepieciešama.
Projektu saraksts atrodas public/gallery-seed.json. Sākumlapa un galerija izmanto šo pašu sarakstu.

1. Ievietojiet projekta fotoattēlus atsevišķā mapē public/images/projects/.
2. JSON sarakstam pievienojiet projekta ierakstu, izmantojot pirmo projektu kā piemēru.
3. id jābūt unikālam, ar latīņu burtiem, cipariem un defisēm; tas veido projekta lapas adresi.
4. title — nosaukums; summary — īss kartītes apraksts; description — pilnais apraksts.
5. flooring — seguma veids; work — paveikto darbu saraksts. Atsevišķas materiālu sadaļas nav.
6. categories var saturēt vienu vai vairākas vērtības: Parkets, Vinils, Grīdlīstes.
7. cover — vāka bildes ceļš; vēlams izvēlēties gatavā rezultāta kopskatu.
8. photos sarakstā norādiet src, alt (attēla saturs), caption (īss paraksts) un stage.
9. stage: Pirms, Darba laikā vai Rezultāts. Bilžu secību nosaka secība sarakstā.

public mapes faili ir publiski pieejami. published: false paslēpj kartīti, bet neaizsargā failus vai aprakstu. Konfidenciālu vai vēl nepublicējamu saturu šajā mapē neievietojiet.

Atverot fotoattēlu, to var aizvērt ar Escape; pāršķirt ar bultiņām vai ekrāna pogām.
Kartītes attēlu apgriež tikai skatā; palielinājumā redzams viss attēls. Oriģināli netiek mainīti.

Pēc izmaiņām palaidiet npm run build un augšupielādējiet dist saturu Nano vietnes publiskajā mapē. Iekļaujiet arī slēpto .htaccess failu, lai darbojas tiešās /gallery/projekta-id adreses. Esošu hostinga .htaccess vispirms saglabājiet un noteikumus saskaņojiet, nevis pārrakstiet akli.
