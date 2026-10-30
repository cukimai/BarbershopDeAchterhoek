/**
 * Alle bedrijfsgegevens op één plek.
 * Pas hier teksten, tijden en diensten aan — de rest van de site volgt automatisch
 * (inclusief SEO-metadata en de gestructureerde data voor Google).
 */

export type OpeningHour = {
  /** 0 = zondag, 1 = maandag, ... 6 = zaterdag */
  day: number;
  opens: string;
  closes: string;
};

export type Service = {
  slug: string;
  title: string;
  description: string;
  image: string;
  /** Laat leeg (undefined) om geen prijs te tonen. Bijvoorbeeld "€ 25". */
  price?: string;
  duration?: string;
};

const phoneE164 = "+31611263861";

const hours: OpeningHour[] = [
  { day: 1, opens: "12:00", closes: "18:00" },
  { day: 2, opens: "09:00", closes: "18:00" },
  { day: 3, opens: "09:00", closes: "18:00" },
  { day: 4, opens: "09:00", closes: "20:00" },
  { day: 5, opens: "09:00", closes: "20:00" },
  { day: 6, opens: "09:00", closes: "19:00" },
  { day: 0, opens: "13:00", closes: "18:00" },
];

const services: Service[] = [
  {
    slug: "knippen",
    title: "Knippen",
    description: "Knippen, föhnen en stylen. Van klassieke scheiding tot strakke skin fade, afgestemd op jouw stijl.",
    image: "/images/service-knippen.jpg",
    price: "€ 28",
  },
  {
    slug: "baard",
    title: "Baard bijwerken",
    description: "Strakke lijnen, de juiste lengte en een verzorgde afwerking. Of kies de hot towel shave voor € 30.",
    image: "/images/service-baard.jpg",
    price: "€ 18",
  },
  {
    slug: "vip",
    title: "VIP-behandeling",
    description: "Knippen, föhnen en stylen, neus en oren harsen én een gezichtsbehandeling. Alles in één keer goed.",
    image: "/images/service-vip.jpg",
    price: "€ 75",
  },
  {
    slug: "kinderen",
    title: "Kinderen t/m 10 jaar",
    description: "Knippen, föhnen en stylen voor de jongste klanten. Rustig, geduldig en net zo strak.",
    image: "/images/service-kinderen.jpg",
    price: "€ 25",
  },
];

/** Volledige prijslijst, zoals in de zaak. */
export type PriceItem = { title: string; detail?: string; price: string };

const priceList: PriceItem[] = [
  { title: "Knippen", detail: "Knippen, föhnen & stylen", price: "€ 28" },
  { title: "Kinderen t/m 10 jaar", detail: "Knippen, föhnen & stylen", price: "€ 25" },
  {
    title: "VIP-behandeling",
    detail: "Knippen, föhnen, stylen, neus/oren harsen & gezichtsbehandeling",
    price: "€ 75",
  },
  { title: "Baard bijwerken / scheren", price: "€ 18" },
  { title: "Baard hot towel shave", price: "€ 30" },
  { title: "Contouren", price: "€ 12" },
  { title: "Wassen", price: "€ 6" },
  { title: "Harsen neus, oren of wangen", detail: "Per behandeling", price: "€ 4" },
  { title: "Gezichtsmasker met stoom", price: "€ 27" },
];

const priceNotes = {
  surcharge: "Op zondag en feestdagen geldt een toeslag van € 4.",
  products:
    "Wij knippen het haar graag zonder gel, wax of andere producten. Zitten er producten in het haar? Dan wassen we het eerst en rekenen we hiervoor extra kosten.",
};

export const site = {
  name: "Barbershop De Achterhoek",
  shortName: "Barbershop De Achterhoek",
  url: "https://barbershopdeachterhoek.nl",
  tagline: "Dé herenkapper van Doetinchem",
  description:
    "Barbershop De Achterhoek is dé barbershop en herenkapper in Doetinchem. Knippen vanaf € 28, baard trimmen en hot towel shave. Met én zonder afspraak, 7 dagen per week open aan de Stationsstraat 28, naast het station.",
  keywords: [
    "barbershop Doetinchem",
    "herenkapper Doetinchem",
    "kapper Doetinchem",
    "barbier Doetinchem",
    "baard trimmen Doetinchem",
    "knippen zonder afspraak Doetinchem",
    "kapper zonder afspraak Doetinchem",
    "barbershop Achterhoek",
    "herenkapper Achterhoek",
    "kinderkapper Doetinchem",
    "hot towel shave Doetinchem",
    "Barbershop De Achterhoek",
  ],
  locale: "nl_NL",
  foundingYear: 2021,
  slogan: "Achterhoekse groet, mooi veur mekaar.",

  phone: phoneE164,
  phoneDisplay: "06 11 26 38 61",
  whatsappUrl: `https://wa.me/${phoneE164.replace("+", "")}?text=${encodeURIComponent(
    "Hoi! Ik wil graag een afspraak maken bij Barbershop De Achterhoek.",
  )}`,

  address: {
    street: "Stationsstraat 28",
    postalCode: "7005 AT",
    city: "Doetinchem",
    region: "Gelderland",
    country: "NL",
  },
  geo: { lat: 51.9591119, lng: 6.2917381 },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Barbershop+De+Achterhoek,+Stationsstraat+28,+7005+AT+Doetinchem",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Stationsstraat+28,+7005+AT+Doetinchem&z=16&output=embed",

  instagram: {
    handle: "barbershopdeachterhoek",
    url: "https://www.instagram.com/barbershopdeachterhoek/",
  },
  tiktok: {
    handle: "barbershopdeachterhoek",
    url: "https://www.tiktok.com/@barbershopdeachterhoek",
  },
  facebookUrl:
    "https://www.facebook.com/p/Barbershop-De-Achterhoek-100063917057165/",

  /** Google-beoordeling (handmatig bijwerken; stand oktober 2026). */
  googleRating: {
    value: "5,0",
    count: 717,
    url: "https://maps.google.com/?cid=16825001222144014799",
  },

  hours,

  usps: [
    {
      title: "Met én zonder afspraak",
      text: "Loop gewoon binnen, of bel of app even vooraf. Zo past een knipbeurt altijd in je dag.",
    },
    {
      title: "7 dagen per week open",
      text: "Ook op zondag en in de avond. Centraal gelegen aan de Stationsstraat in Doetinchem.",
    },
    {
      title: "Erkend leerbedrijf",
      text: "Ervaren barbiers die hun vak doorgeven. Precisie en aandacht bij elke knipbeurt.",
    },
  ],

  services,
  priceList,
  priceNotes,
};

export const dayNames = [
  "Zondag",
  "Maandag",
  "Dinsdag",
  "Woensdag",
  "Donderdag",
  "Vrijdag",
  "Zaterdag",
] as const;

export const dayNamesShort = ["zo", "ma", "di", "wo", "do", "vr", "za"] as const;

export const navigation = [
  { href: "/#diensten", label: "Diensten" },
  { href: "/#over-ons", label: "Over ons" },
  { href: "/#openingstijden", label: "Openingstijden" },
  { href: "/#contact", label: "Contact" },
] as const;

/** Plaatsen in het werkgebied; gebruikt voor de omgevingspagina en de gestructureerde data. */
export const serviceArea = [
  { name: "Doetinchem", note: "Onze thuisbasis, Stationsstraat 28" },
  { name: "Gaanderen", note: "5 minuten rijden" },
  { name: "Wehl", note: "10 minuten rijden" },
  { name: "Terborg", note: "10 minuten rijden" },
  { name: "Zelhem", note: "15 minuten rijden" },
  { name: "Hummelo", note: "15 minuten rijden" },
  { name: "Doesburg", note: "15 minuten rijden" },
  { name: "Varsseveld", note: "15 minuten rijden" },
  { name: "Ulft", note: "15 minuten rijden" },
  { name: "Silvolde", note: "15 minuten rijden" },
  { name: "Didam", note: "15 minuten rijden" },
  { name: "'s-Heerenberg", note: "20 minuten rijden" },
] as const;

export const faq = [
  {
    question: "Kan ik zonder afspraak langskomen?",
    answer:
      "Ja. Bij Barbershop De Achterhoek ben je met én zonder afspraak welkom. Wil je zeker zijn van je plek, bel of app dan even vooraf via 06 11 26 38 61.",
  },
  {
    question: "Wat kost knippen bij Barbershop De Achterhoek?",
    answer:
      "Knippen inclusief föhnen en stylen kost € 28. Kinderen tot en met 10 jaar betalen € 25. Baard bijwerken of scheren is € 18 en de hot towel shave € 30. Op zondag en feestdagen geldt een toeslag van € 4.",
  },
  {
    question: "Waar zit de barbershop en kan ik parkeren?",
    answer:
      "We zitten aan de Stationsstraat 28 in Doetinchem, op loopafstand van station Doetinchem. In de directe omgeving zijn parkeerplaatsen en parkeergarages, en fietsen kun je voor de deur kwijt.",
  },
  {
    question: "Zijn jullie ook op zondag open?",
    answer:
      "Ja, we zijn zeven dagen per week open. Op zondag van 13:00 tot 18:00 uur, op donderdag en vrijdag zelfs tot 20:00 uur.",
  },
  {
    question: "Knippen jullie ook kinderen?",
    answer:
      "Zeker. Kinderen tot en met 10 jaar knippen we voor € 25, rustig en met geduld. Ook voor een eerste knipbeurt ben je welkom.",
  },
  {
    question: "Moet mijn haar schoon zijn voor het knippen?",
    answer:
      "Het liefst knippen we haar zonder gel, wax of andere producten. Zit er product in je haar, dan wassen we het eerst (€ 6) zodat het resultaat strak wordt.",
  },
] as const;
