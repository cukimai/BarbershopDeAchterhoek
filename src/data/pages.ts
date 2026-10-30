/**
 * Inhoud van de SEO-landingspagina's. Eén bron, één component (`LandingPage`).
 * Nieuwe pagina toevoegen = nieuw object hier; de sitemap en footer volgen automatisch.
 */

export type LandingSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type LandingPageContent = {
  slug: string;
  /** Korte naam voor footer en kruimelpad */
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  image: string;
  imageAlt: string;
  sections: LandingSection[];
  faq?: { question: string; answer: string }[];
  /** Toon de lijst met plaatsen uit het werkgebied */
  showServiceArea?: boolean;
};

export const landingPages: LandingPageContent[] = [
  {
    slug: "herenkapper-doetinchem",
    navLabel: "Herenkapper Doetinchem",
    metaTitle: "Herenkapper Doetinchem | Knippen vanaf € 28",
    metaDescription:
      "Op zoek naar een herenkapper in Doetinchem? Barbershop De Achterhoek knipt heren en jongens met oog voor detail: van klassiek tot skin fade. Zonder afspraak welkom, 7 dagen per week.",
    eyebrow: "Herenkapper in Doetinchem",
    h1: "Herenkapper in Doetinchem die je kapsel echt begrijpt.",
    intro:
      "Een goede herenkapper luistert eerst en knipt daarna. Bij Barbershop De Achterhoek aan de Stationsstraat nemen we de tijd voor je haar, je gezichtsvorm en je stijl. Het resultaat: een kapsel dat klopt, ook drie weken later nog.",
    image: "/images/service-knippen.jpg",
    imageAlt: "Strakke skin fade met scheiding, geknipt door een herenkapper in Doetinchem",
    sections: [
      {
        heading: "Wat je van ons mag verwachten",
        paragraphs: [
          "Knippen bij ons is altijd inclusief föhnen en stylen. We werken met schaar, tondeuse en mes, afhankelijk van wat jouw kapsel nodig heeft. Of je nu komt voor een klassieke scheiding, een moderne textured crop of een strakke skin fade: we bespreken vooraf kort wat je wilt en geven eerlijk advies over wat bij je past.",
          "Onze barbiers werken dagelijks aan tientallen verschillende haartypes. Dik, dun, krullend of steil, we weten hoe we het beste uit jouw haar halen en hoe je het thuis makkelijk in model houdt.",
        ],
      },
      {
        heading: "Herenkapper voor heel Doetinchem",
        paragraphs: [
          "We zitten centraal aan de Stationsstraat 28, op loopafstand van station Doetinchem en vlak bij het centrum. Ideaal om even binnen te lopen na je werk of in het weekend. We zijn zeven dagen per week open, donderdag en vrijdag zelfs tot 20:00 uur.",
        ],
        bullets: [
          "Knippen, föhnen & stylen: € 28",
          "Kinderen t/m 10 jaar: € 25",
          "Contouren bijwerken tussendoor: € 12",
          "Met én zonder afspraak welkom",
        ],
      },
      {
        heading: "Jongens en kinderen",
        paragraphs: [
          "Ook de jongste klanten zijn welkom. We knippen kinderen tot en met 10 jaar rustig en met geduld, zodat een bezoek aan de kapper leuk blijft. Ouders kunnen gewoon naast de stoel blijven.",
        ],
      },
    ],
    faq: [
      {
        question: "Hoe lang duurt een knipbeurt?",
        answer:
          "Reken op ongeveer 30 tot 45 minuten voor knippen, föhnen en stylen. Een combinatie met baard duurt wat langer.",
      },
      {
        question: "Moet ik een afspraak maken bij de herenkapper?",
        answer:
          "Nee, dat hoeft niet. Binnenlopen mag altijd. Wil je zeker zijn van een plek op een druk moment, bel of app dan even vooraf.",
      },
    ],
  },
  {
    slug: "barbier-baard-trimmen-doetinchem",
    navLabel: "Barbier & baard",
    metaTitle: "Barbier Doetinchem | Baard trimmen & hot towel shave",
    metaDescription:
      "Barbier in Doetinchem voor baard trimmen (€ 18), klassiek scheren met het mes en de hot towel shave (€ 30). Strakke lijnen en eerlijk advies bij Barbershop De Achterhoek.",
    eyebrow: "Barbier in Doetinchem",
    h1: "Baard trimmen en scheren zoals een barbier dat hoort te doen.",
    intro:
      "Een baard is pas af als de lijnen kloppen. Als barbier in Doetinchem werken we je baard bij met tondeuse, schaar en mes, en sluiten we af met verzorgende producten. Van onderhoudsbeurt tot volledige hot towel shave.",
    image: "/images/service-baard.jpg",
    imageAlt: "Verzorgde volle baard na een baardbehandeling door een barbier in Doetinchem",
    sections: [
      {
        heading: "Baard bijwerken",
        paragraphs: [
          "We brengen je baard op de juiste lengte, maken de contouren strak langs wangen en hals en werken de overgang naar je haar netjes af. Je krijgt advies over hoe je de vorm thuis bijhoudt en welke olie of balsem bij jouw baard past.",
        ],
        bullets: ["Baard bijwerken of scheren: € 18", "Contouren: € 12", "Harsen neus, oren of wangen: € 4 per behandeling"],
      },
      {
        heading: "Hot towel shave",
        paragraphs: [
          "De klassieker. Warme handdoeken openen de poriën, daarna scheren we met het mes voor een gladde huid zonder irritatie. We sluiten af met een koele handdoek en verzorgende aftershave. Dertig minuten rust en een resultaat dat je met een gewoon scheermes niet haalt.",
        ],
        bullets: ["Baard hot towel shave: € 30", "Gezichtsmasker met stoom: € 27"],
      },
      {
        heading: "Haar én baard in één bezoek",
        paragraphs: [
          "Combineer je knipbeurt met een baardbehandeling, dan zorgen we dat beide in balans zijn. Kies voor de VIP-behandeling (€ 75) en je krijgt knippen, föhnen, stylen, neus en oren harsen én een gezichtsbehandeling in één keer.",
        ],
      },
    ],
    faq: [
      {
        question: "Hoe vaak moet ik mijn baard laten bijwerken?",
        answer:
          "Voor een strakke lijn elke 2 tot 3 weken. Een volle baard kan vaak 4 weken mee, afhankelijk van hoe snel je haar groeit.",
      },
    ],
  },
  {
    slug: "kapper-zonder-afspraak-doetinchem",
    navLabel: "Zonder afspraak",
    metaTitle: "Kapper zonder afspraak in Doetinchem | 7 dagen open",
    metaDescription:
      "Kapper zonder afspraak in Doetinchem: loop binnen bij Barbershop De Achterhoek, Stationsstraat 28. 7 dagen per week open, ook op zondag en 's avonds tot 20:00 uur.",
    eyebrow: "Zonder afspraak",
    h1: "Kapper zonder afspraak in Doetinchem. Loop gewoon binnen.",
    intro:
      "Geen zin om een week vooruit te plannen? Hoeft niet. Bij Barbershop De Achterhoek kun je zonder afspraak binnenlopen, zeven dagen per week. Is het druk, dan zie je direct hoe lang het ongeveer duurt. En wil je toch zekerheid, dan is een belletje of appje genoeg.",
    image: "/images/interieur.jpg",
    imageAlt: "Ruim en licht interieur van Barbershop De Achterhoek met wachtplek",
    sections: [
      {
        heading: "Zo werkt het",
        paragraphs: [
          "Kom binnen, meld je bij de balie en neem plaats. We werken op volgorde van binnenkomst, afgewisseld met gemaakte afspraken. In de zithoek kun je rustig wachten; meestal ben je binnen een kwartier aan de beurt.",
        ],
        bullets: [
          "Maandag 12:00 – 18:00",
          "Dinsdag en woensdag 09:00 – 18:00",
          "Donderdag en vrijdag 09:00 – 20:00",
          "Zaterdag 09:00 – 19:00, zondag 13:00 – 18:00",
        ],
      },
      {
        heading: "Rustige momenten",
        paragraphs: [
          "Wil je snel geholpen worden? Doordeweeks in de ochtend en vroege middag is het meestal het rustigst. Vrijdagmiddag en zaterdag zijn onze drukste momenten; bel dan even vooraf via 06 11 26 38 61 of stuur een WhatsApp.",
        ],
      },
      {
        heading: "Ook goed om te weten",
        paragraphs: [
          "Op zondag en feestdagen rekenen we een toeslag van € 4. We knippen het liefst haar zonder gel of wax; zit er product in, dan wassen we het eerst (€ 6). Pinnen en contant betalen kan allebei.",
        ],
      },
    ],
  },
  {
    slug: "barbershop-achterhoek-omgeving",
    navLabel: "Omgeving",
    metaTitle: "Barbershop in de Achterhoek | Doetinchem en omgeving",
    metaDescription:
      "Barbershop voor Doetinchem en omgeving: Gaanderen, Wehl, Terborg, Zelhem, Doesburg, Varsseveld, Ulft en meer. Centraal aan de Stationsstraat, naast station Doetinchem.",
    eyebrow: "Doetinchem en omgeving",
    h1: "Dé barbershop voor Doetinchem en de hele Achterhoek.",
    intro:
      "Veel van onze klanten komen van buiten Doetinchem. Logisch: we zitten centraal, pal naast het station en vlak bij de N18 en A18. Binnen een kwartier rijden vanuit het grootste deel van de Achterhoek sta je bij ons in de stoel.",
    image: "/images/gevel-breed.jpg",
    imageAlt: "De gevel van Barbershop De Achterhoek aan de Stationsstraat in Doetinchem",
    showServiceArea: true,
    sections: [
      {
        heading: "Goed bereikbaar vanuit de regio",
        paragraphs: [
          "Met de auto rijd je via de A18 of N18 zo het centrum van Doetinchem in; parkeren kan in de omgeving van de Stationsstraat. Kom je met het openbaar vervoer, dan loop je vanaf station Doetinchem in twee minuten naar de zaak. Fietsen zet je voor de deur.",
        ],
      },
      {
        heading: "Waarom klanten uit de regio voor ons kiezen",
        paragraphs: [
          "Zeven dagen per week open, ook 's avonds en op zondag. Met én zonder afspraak. Eerlijke, vaste prijzen. En een team barbiers dat zijn vak verstaat, van klassieke knipbeurt tot hot towel shave. Op Google beoordelen honderden klanten ons met vijf sterren.",
        ],
      },
    ],
  },
];

export function getLandingPage(slug: string): LandingPageContent | undefined {
  return landingPages.find((page) => page.slug === slug);
}
