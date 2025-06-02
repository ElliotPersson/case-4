# case-4
Case4-API-Visualisering
Case under modul 4: API-Visualisering

Introduktion
I caset ska ni arbeta individuellt och skapa en applikation (webbsida) som visualiserar data som hämtas från ett API. Applikation ska visualisera data som kan hämtas via ett API som Nasa (National Aeronautics and Space Administration) tillhandahåller.

Att visualisera data innebär i praktiken att ni med HTML, CSS och JavaScript ska skapa ett dynamiskt galleri med det innehåll från https://api.nasa.gov.

Det ska vara en applikation som har header, footer, nav och andra lämpliga sematiska element. Första gången applikationen visas ska den fungera som en landningssida - en användare ska tydligt uppleva att det är en sida som handlar om rymden och rymdforskning. Användaren ska få olika resultat beroende på hens sökning.

API
Nasa API
https://api.nasa.gov

Tjänsten är gratis att använda, men har begränsingar i antalet förfrågningar. Med tjänsten kan du komma olika typer av data som handlar om rymden och rymdforskning. För att använda tjänsten finns en förvald API nyckel: DEMO_KEY. Du kan med fördel generera en egen unik API nyckel. Nyckeln får du efter att du registrerat dig som användare. En egen nyckel kan se ut så här: QWUTBusTD12baf0iIiWwOw3EatYvfeb38PFgDGvx

När du registrerat dig så visas din API-nyckel. Spara nyckeln så att du kan göra kommande förfrågningar mot API:et

API nyckel

Exempel på olika endpoints för Nasas API
Nasas har flera olika resurser att välja mellan:

https://api.nasa.gov/#browseAPI

Exempel på endpoints:

GET APOD - Astronomy Picture of the Day
GET https://api.nasa.gov/planetary/apod

Här hämtar API:et information om bilder som finns tillgängliga.

https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY

Med egen API nyckel:

https://api.nasa.gov/planetary/apod?api_key=QWUTBusTD12baf0iIiWwOw3EatYvfeb38PFgDGvx

I dokumentationen som finns tillgänglig anges att man ex kan hämta mer än en bild genom att ange parametern count, följt av ett lika med tecken och ett värde.

count=5

Om du vill ange mer än en parameter används & tecknet mellan parametrar i url:en:

https://api.nasa.gov/planetary/apod?api_key=QWUTBusTD12baf0iIiWwOw3EatYvfeb38PFgDGvx&count=5

GET Mars Rover Photos
https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY

Här hämtar API:et information från olika fordon som finns på Mars.

Viktigt Tips
EFtersom man kan göra ett begränsat antal förfrågningar så bör ni spara ner en json respons och spara det som en lokal fil i er utvecklingsmiljö. När ni utvecklar kan ni ibland hämta verkliga data, och ibland data från en lokal fil. Ex:

 let url; 
 // url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=10;
 url = "data.json";
Wireframes - LoFi & HiFi -> Prototyp
Även om denna produkten ni skall skapa antagligen kommer vara enbart en vy så kommer det säkert finnas ett flöde (t ex filtrering).

Att ta fram och visa Mattias:

En LoFi-wireframe som förklarar strukturen och flödet (Valfritt)
En HiFi-wireframe som förklarar strukturen och flödet (Figma)
Prototyp i Figma med ett interaktivt flöde
Ni får använda er av befintliga UI-kits från Figma, men sätt gärna er egen touch på det.
Namngivningsprinciper när du kodar
använd latinska tecken för variabelnamn och funktioner (camelCase)
skriv kommentarer med egna ord i din kod (så vi vet att ni förstår er egen kod)
korrekt formaterat kod
Om koden i applikationen
Applikationen får inte använda externa ramverk, utan det är "vanilla" JavaScript och CSS som gäller. Dela upp struktur, innehåll, design och logik. Använd externa filer för CSS och JavaScript.

Så börjar du
Skapa ett privat repo på GitHub och koppla det till din lokala utvecklingsmiljö. Under projektet - senast 1 februari bjuder du in dina lärare. Se Settings -> Manage access -> Add people

Bjud in följande användare till ert case repo:

frozenbanana (Henry)
andsju (Anders)
addkolon (Mattias)
Din API-nyckel
En API-nyckel som tillhör dig bör du inte dela med andra. Samtidigt ska det vara tydligt för den som vill använda din applikation att veta hur man använder en egen API-nyckel. I det här projektet kan du definiera en variabel som du kan lämna tom när du ex lämnar in projektet:

// ange din API-nyckel
const APIKey = "QWUTBusTD12baf0iIiWwOw3EatYvfeb38PFgDGvx";

// ...

// endpoint url
const endpoint = `https://api.nasa.gov/planetary/apod?api_key=${APIKey}`
Grundläggande krav
I applikation ska du använda en enpoint som gör det möjligt för en användare att söka via ett fritext fält (input type="text"). Ett exempel på en sådan endpoint är NASA Image and Video Library. Se dokumentation (Om du vill använda en endpoint som inte hanterar sökning i ett fritext fält (ett ex är endpoint för Mars Rover Photos) är alternativet att använda formulärfält som tillåter någon typ av urvalskriterier, ex visa bilder från vissa kameror. Det kan vara html element som select-option, input type="checkbox").
Ett resultat ska presenteras och kunna filtreras med array metoden filter efter någon valbar egenskap
Appen ska utgå från mobile first. Dvs när ni utvecklar så antag ex en viewport likt en iPhone 11
Utvecklingen av applikationen ska finnas dokumenterad på GitHub. Du ska ha gjort minst 10 commits under projektet.

Utmaningar
(Förutom att applikationen uppfyller de grundläggande kraven ovan)

Här finns följande utmaningar. Se om du kan anta en eller flera!

Skapa en hjälpklass för en metod som fetch()
Sidan ska även ha anpassad vy för skärm
Skapa en extra vy, exempelvis visa ett resultat som utgår från en tidigare sökning
Spara ngn form av data i Local Storage
Visa på sidan att data hämtas via ett asynkront anrop (loading|spinner)
Sortera data (ex efter stigande eller fallande datum, i alfabetisk ordning A-Ö, Ö-A)
Inlämning och redovisning
Preliminärt datum för redovisning av caset är den 9 februari kl 08:45. OBS - datum kommer förmodligen justeras ngt.
Caset ska finnas färdigt i ett Gihub repo i samband med redovisningen
Tänk på att inte visa console.log() i ett färdigt projekt.
Vi vill att alla får ta del av varandras redovisning. Det innebär att ni behöver förbereda er på att redovisningen är kort - ca 5 minuter per person. Då visar ni (demonstrerar) er applikation genom att dela skärm.

Förbered 5 minuters redovisning enligt följande mall:

I reovisningen ska du:

visa wireframes skisser
demonstrera applikationen
visa exempel på annan funktionalitet (ex ngn av utmaningarna)
berätta vad du är mest nöjd med (design, kod, struktur...)
berätta vad du skulle vilja att applikationen kan göra, men inte hunnit att koda
redovisning sker i bokstavsordning (förnamn A-Ö)
Handledning
Det kommer givetvis finnas möjlighet till handledning - i första hand är det handledning under vanlig lektionstid.

Resurser
NASA api: https://api.nasa.gov
Fetch: https://github.com/thejsway/thejsway/blob/master/manuscript/chapter21.md