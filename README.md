# Barbershop De Achterhoek — website

Strakke, snelle one-page website voor [Barbershop De Achterhoek](https://barbershopdeachterhoek.nl) in Doetinchem.
Gebouwd met **Next.js (React) + TypeScript + Tailwind CSS**, volledig statisch geëxporteerd: deploybaar op elke webhost.

## Snel starten

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # statische site in ./out
```

## Gegevens aanpassen

Alle teksten, openingstijden, diensten en contactgegevens staan in **`src/data/site.ts`**.
Pas daar iets aan en de hele site (inclusief SEO-metadata en Google-gestructureerde data) volgt.

- **Prijzen tonen?** Voeg bij een dienst `price: "€ 25"` toe. Zonder `price` wordt er geen prijs getoond.
- **Openingstijden:** `hours` (dag 0 = zondag). De "Nu geopend"-badge rekent live in tijdzone Europe/Amsterdam.

## Instagram-feed koppelen

De carrousel op de homepage toont standaard de meegeleverde posts uit `src/data/instagram-fallback.ts`.
Voor een automatische live feed:

1. Zet het Instagram-account om naar een **Business- of Creator-account** en koppel het aan een Facebook-pagina.
2. Maak in [Meta for Developers](https://developers.facebook.com/) een app met het product *Instagram* en genereer een **long-lived access token** (60 dagen geldig, verlengbaar).
3. Kopieer `.env.example` naar `.env` en vul `INSTAGRAM_ACCESS_TOKEN` in.
4. Draai:

```bash
npm run instagram   # downloadt afbeeldingen + schrijft public/instagram/feed.json
npm run build
```

`npm run build` voert `npm run instagram` automatisch vooraf uit (`prebuild`). Zonder token gebeurt er niets en blijft de fallback actief.
Afbeeldingen worden lokaal opgeslagen omdat Instagram-URL's na enkele dagen verlopen.

Token verlengen (vóór dag 60):

```bash
curl "https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=HUIDIG_TOKEN"
```

## TikTok-video's

De sectie "Een kijkje in de zaak" toont TikTok-video's met een klikbare thumbnail; de echte TikTok-speler laadt pas na een klik (snel en privacyvriendelijk).

Video toevoegen of wisselen:

1. Zet het video-ID (het lange getal in de TikTok-URL) met een korte omschrijving in `src/data/tiktok-videos.json`.
2. Sla een stilstaand beeld van de video op als `public/tiktok/<video-id>.jpg` (staand, ongeveer 3:4). Zonder thumbnail wordt de video automatisch overgeslagen.
3. `npm run build`.

## Dynamische onderdelen

- **Jaartal in de footer** en de **"Nu geopend"-badge** worden in de browser berekend; ze kloppen dus ook als de site lang niet opnieuw is gebouwd.
- **Zwevende bel/WhatsApp-knop** rechtsonder verschijnt zodra de hero uit beeld is.

## Pagina's

- `/` — homepage (alle secties, FAQ met FAQPage-schema)
- `/herenkapper-doetinchem/`, `/barbier-baard-trimmen-doetinchem/`, `/kapper-zonder-afspraak-doetinchem/`, `/barbershop-achterhoek-omgeving/` — lokale SEO-landingspagina's. Inhoud in `src/data/pages.ts`; nieuwe pagina = nieuw object (sitemap en footer volgen automatisch).
- `/privacy/` — privacyverklaring (nodig vanwege Google Maps- en TikTok-embeds). Algemene voorwaarden zijn voor een kapper zonder online boeken of betalen niet verplicht en daarom weggelaten.

## Bovenaan in Google in Doetinchem

De site doet het technische deel (snelle statische HTML, schema.org `BarberShop`, lokale landingspagina's, FAQ, sitemap). Voor de lokale toppositie telt vooral het Google Bedrijfsprofiel. Checklist voor de eigenaar:

1. **Google Bedrijfsprofiel** claimen/bijwerken: categorie "Barbershop" + "Herenkapper", openingstijden gelijk aan de site, website-URL, diensten met prijzen, wekelijks een foto of post.
2. **Reviews**: blijven vragen (QR-code aan de balie). Reageer op elke review.
3. **Search Console**: eigendom verifiëren en `https://barbershopdeachterhoek.nl/sitemap.xml` indienen.
4. **Consistentie**: naam, adres en telefoonnummer exact gelijk op Google, Facebook, Instagram, TikTok, Kappers.nl en Telefoonboek.nl (nu staan er twee verschillende 06-nummers online; houd overal 06 11 26 38 61 aan).
5. **Lokale vermeldingen**: Doetinchem-ondernemersverenigingen, Stagemarkt (leerbedrijf), Kappers.nl-profiel invullen met foto's.

## SEO-checklist (ingebouwd)

- `<title>`, meta description, canonical, Open Graph en Twitter cards (`src/app/layout.tsx`)
- Gestructureerde data `BarberShop` + `HairSalon` met openingstijden, adres, geo en diensten (`src/components/JsonLd.tsx`)
- `sitemap.xml`, `robots.txt`, `manifest.webmanifest`
- Eén `<h1>`, semantische secties, beschrijvende alt-teksten, `lang="nl"`
- Hero-afbeelding met `fetchpriority="high"`, overige afbeeldingen lazy

**Na livegang:** claim het Google Bedrijfsprofiel, dien `https://barbershopdeachterhoek.nl/sitemap.xml` in bij Google Search Console en controleer de gestructureerde data met de [Rich Results Test](https://search.google.com/test/rich-results).

## Nog te controleren door de eigenaar

- **Openingstijden:** overgenomen van de huidige website (dinsdag 09:00–18:00; Kappers.nl vermeldt 09:00–20:00). Pas aan als dat niet klopt.
- **Google-beoordeling** (`googleRating` in `src/data/site.ts`): stand oktober 2026, 5,0 ★ met 717 reviews. Af en toe bijwerken.
- **Prijzen:** overgenomen van de prijslijst in de zaak (oktober 2026). Aanpassen in `priceList` en `services`.

## Deployen

`npm run build` → upload de inhoud van `./out` naar de webhost (of koppel de repo aan Vercel/Netlify; build command `npm run build`, output `out`).

## Afbeeldingen

- `public/images/logo-*.png`, `mark-black.png` en iconen: afgeleid van het originele logo.
- Overige foto's in `public/images/` (interieur, gevel, kapsels): eigen foto's van de zaak, afkomstig van het Google Bedrijfsprofiel. Vervangen kan door een bestand met dezelfde naam te overschrijven.
- `public/instagram/*.jpg`: voorbeeldposts van het eigen Instagram-account; worden overschreven door `npm run instagram`.
