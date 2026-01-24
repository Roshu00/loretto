// Svi tekstualni sadržaji restorana - lako za izmenu
export const content = {
  restaurant: {
    name: "Loretto",
    tagline: "Restoran u srcu Uba, blizu Sepkovačkog parka",
    description:
      "Tradicija susreće se sa savremenim ambijentom u srcu grada. Iskusite autentične ukuse i prijatan ambijent blizu Sepkovačkog parka.",
  },
  about: {
    title: "O nama",
    subtitle: "Priča o našem restoranu",
    paragraph1:
      "Loretto je mesto gde se susreću autentična kuhinja i prijatan ambijent. Kombinujemo tradicionalne recepte sa modernim pristupom, stvarajući jela koja će zadovoljiti sve vaše čulne želje.",
    paragraph2:
      "Nalazimo se u srcu Uba, blizu Sepkovačkog parka, što našem restoranu daje poseban šarm. Prijatan ambijent je savršen za obiteljske ručkove, poslovne sastanke ili romantične večere.",
    paragraph3:
      "Sva jela pripremamo sa pažnjom koristeći sveže namirnice od lokalnih dobavljača. Naš cilj je da svaki obrok postane nezaboravno iskustvo.",
    features: [
      "Tradicionalna kuhinja sa modernim pristupom",
      "Sveže namirnice od lokalnih dobavljača",
      "Prirodan ambijent blizu Sepkovačkog parka",
      "Vrhunska usluga i gostoprimstvo",
      "Prostor za različite prigode",
    ],
  },
  menu: {
    title: "Naša ponuda",
    subtitle: "Istražite našu raznoliku kulinarsku ponudu",
    description:
      "Nudimo širok izbor tradicionalnih i modernih jela, pripremanih od svježih, lokalnih namirnica. Naš meni se redovno ažurira kako bismo pratili sezonske ukuse i nudili vam najbolje od naše kuhinje. Svako jelo je pažljivo osmišljeno da kombinuje autentične ukuse sa savremenim pristupom.",
    categories: [
      {
        name: "Predjela",
        items: [
          {
            name: "Selekcija sireva",
            price: "890 din",
            description: "Domaći sir, gorgonzola, kačkavalj, feta, čedar.",
          },
          {
            name: "Ordevar “Loretto” za 2 osobe",
            price: "1190 din",
            description:
              "Jjeguški pršut, suvo soljena pečenica, suvo soljeni vrat, kulen.",
          },
          {
            name: "Grilovani sir sa punjenom paprikom",
            price: "540 din",
            description: "Grilovani sir sa punjenom paprikom.",
          },
        ],
      },
      {
        name: "Glavna jela",
        items: [
          {
            name: "Biftek",
            price: "1900 din",
            description: "Juneći biftek, krompir",
          },
          {
            name: "Karađorđeva šnicla",
            price: "1200 din",
            description: "Pomfrit, tartar sos",
          },
          {
            name: "Dimljena butkica u sosu od kajmaka",
            price: "1140 din",
            description: "Dimljeno svinjsko meso, krompir, kajmak.",
          },
          {
            name: "Lazanje",
            price: "990 din",
            description: "Lazanje, bolonjeze sos",
          },
        ],
      },
      {
        name: "Roštilj",
        items: [
          {
            name: "Ćevapi na kajmaku",
            price: "1150 din",
            description: "Pomfrit, kajmak",
          },
          {
            name: "Bela vešalica",
            price: "1090 din",
            description: "vešalica, pomfrit",
          },
          {
            name: "Burger “Loretto”",
            price: "990 din",
            description:
              "Burger, burger sos, ajzberg, paradajz, čedar, pomfrit",
          },
          {
            name: "Miks mesa ““Loretto”” za 2 osobe",
            price: "2100 din",
            description:
              "kobasica, ćevapi, uštipci, dimljena vešalica, rolovana piletina, slanina, pomfrit",
          },
        ],
      },
      {
        name: "Paste",
        items: [
          {
            name: "Bolonjeze",
            price: "740 din",
            description: "Testenina, bolonjeze sos",
          },
          {
            name: "Karbonara",
            price: "840 din",
            description:
              "Testenina, slanina, neutralna pavlaka, parmezan, jaja",
          },
          {
            name: "Njoke sa piletinom u gorgonzola sosu",
            price: "840 din",
            description: "Njoke, gorgonzola, piletina",
          },
          {
            name: "Njoke sa šest vrsta sireva",
            price: "780 din",
            description:
              "Njoke, gorgonzola, mocarela, parmezan, dimljeni sir, gauda, kačkavalj",
          },
        ],
      },
    ],
  },
  events: {
    title: "Iznajmljivanje prostora",
    subtitle: "Idealno mesto za vaše posebne prigode",
    description:
      "Iznajmljujemo naš prostor za proslave, rođendane, venčanja, poslovne događaje i druge posebne prigode. Naš lokal može da primi do 100 gostiju, što ga čini idealnim za sve vrste proslava od intimnih obiteljskih svečanosti do većih poslovnih događaja.",
    capacity: "Kapacitet: do 100 ljudi",
    details:
      "Naš tim će vam pomoći da organizujete nezaboravnu proslavu. Obezbeđujemo sve potrebno - od prostora, preko hrane i pića, do muzike i dekoracije. Možemo prilagoditi meni prema vašim željama i budžetu.",
    services: [
      "Organizacija celokupnog događaja",
      "Prilagođen meni prema vašim željama",
      "Dekoracija prostora",
      "Zvučna oprema",
      "Osvetljenje",
      "Parking prostor",
    ],
  },
  gallery: {
    title: "Galerija",
    subtitle: "Pogledajte naš ambijent i hranu",
    description:
      "Uživajte u našoj galeriji koja prikazuje prijatan ambijent, ukusna jela i nezaboravne trenutke koje naši gosti dele sa nama.",
  },
  testimonials: {
    title: "Šta kažu naši gosti",
    subtitle: "Iskustva koja delimo",
    description:
      "Ponosni smo na pozitivne povratne informacije naših gostiju. Evo šta kažu o iskustvu u Loretto restoranu.",
    reviews: [
      {
        name: "Marko Petrović",
        role: "Gost",
        text: "Izvanredan restoran! Hrana je bila fantastična, ambijent prijatan, a usluga na najvišem nivou. Posebno mi se svidela lokacija blizu parka. Definitivno ću se vratiti!",
        rating: 5,
      },
      {
        name: "Ana Jovanović",
        role: "Organizator proslave",
        text: "Organizovali smo rođendan u Loretto restoranu i bilo je savršeno! Tim je bio veoma profesionalan, hrana odlična, a prostor idealan za našu proslavu sa 60 gostiju. Preporučujem!",
        rating: 5,
      },
      {
        name: "Stefan Nikolić",
        role: "Redovan gost",
        text: "Redovan sam gost Loretto restorana i uvek sam oduševljen. Tradicionalna jela su izvrsna, a ambijent je toliko prijatan da se uvek osećam kao kod kuće. Toplo preporučujem!",
        rating: 5,
      },
      {
        name: "Jelena Stanković",
        role: "Gost",
        text: "Ovo je najbolji restoran u gradu! Sveže namirnice, autentični ukusi i veoma prijatan ambijent. Posebno se sećam deserta - palačinke su bile savršene!",
        rating: 5,
      },
    ],
  },
  location: {
    title: "Lokacija i radno vreme",
    address: "Uba, blizu Sepkovačkog parka",
    fullAddress: "Uba, blizu Sepkovačkog parka, Uba, Srbija",
    description:
      "Lako pristupačno mesto u srcu grada, sa blizinom znamenitog Sepkovačkog parka koja našem restoranu daje poseban šarm. Idealna lokacija za šetnju posle obroka.",
    hours: {
      weekdays: "Ponedeljak - Petak: 10:00 - 23:00",
      saturday: "Subota: 10:00 - 24:00",
      sunday: "Nedelja: 12:00 - 22:00",
    },
    mapEmbed: "placeholder", // Zameniti sa Google Maps embed kodom
  },
  newsletter: {
    title: "Prijavite se za novosti",
    subtitle: "Budite u toku sa našim posebnim ponudama i događajima",
    description:
      "Pretplatite se na našu mailing listu i budite prvi koji će saznati za nove menije, specijalne ponude i događaje.",
    placeholder: "Unesite vašu email adresu",
    buttonText: "Prijavi se",
  },
  contact: {
    phone: "+381 XX XXX XXXX", // Zameniti sa pravim brojem
    email: "info@loretto.rs", // Zameniti sa pravim emailom
    reservationText:
      "Za rezervacije stolova ili informacije o iznajmljivanju prostora, kontaktirajte nas putem telefona ili emaila. Rado ćemo odgovoriti na sva vaša pitanja.",
  },
  seo: {
    title: "Loretto Restoran - Uba, blizu Sepkovačkog parka",
    description:
      "Restoran Loretto u Ubu nudi autentičnu kuhinju, prijatan ambijent i iznajmljivanje prostora za proslave do 100 ljudi. Nalazimo se blizu Sepkovačkog parka.",
    keywords:
      "restoran Uba, kuhinja Uba, iznajmljivanje prostora Uba, proslave Uba, Sepkovački park, restoran za proslave, do 100 ljudi",
  },
};
