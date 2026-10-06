# growthfactory.nl

> Conceptwebsite voor Growth Factory: een eenpagina-site over groei voor ondernemers (“Grip op Groei”), met content uit Sanity. Het project is niet doorgegaan.

| | |
|---|---|
| **Klant** | Growth Factory (TODO contactpersoon) |
| **Bedrijf** | All This |
| **Status** | Archief · niet doorgegaan (okt 2026) |
| **SLA** | TODO |
| **Live** | TODO (bedoeld domein `https://growthfactory.nl`, gezet in `astro.config.mjs`) |
| **Netlify** | TODO. Geen `netlify.toml` en geen gekoppelde site in het ingelogde Netlify-account (team MIERAS) |
| **CMS** | Sanity project `86exk9f3`, dataset `production`. Studio-URL: TODO |
| **Repo** | [github.com/allthis-mieras/growthfactory](https://github.com/allthis-mieras/growthfactory) |
| **Notion** | TODO |

## Stack

- Astro 5 · Sanity (`@sanity/client` 7, Studio op Sanity 3) · Node 22 (`.nvmrc`) · static
- Styling: SCSS, Utopia fluid type en spacing, CSS custom properties · Fonts: system-ui
- Animatie: geen
- Consent: geen · Hosting: Netlify (site onbekend, TODO)

## Lokaal starten

```bash
nvm use
npm install
cp .env.example .env   # vul de waarden in, zie tabel
npm run dev            # http://localhost:4321
```

Studio (eigen `package.json`):

```bash
cd studio && npm install && npm run dev   # http://localhost:3333
```

Overige scripts: `npm run build`, `npm run preview`. Studio: `npm run studio:dev`, `npm run studio:build`.

Controle oktober 2026, Node 22: `npm install` en `npm run build` in de root en in `studio/` slagen.

### Environment-variabelen

| Naam | Waarvoor | Waar te vinden |
|---|---|---|
| `SANITY_PROJECT_ID` | Sanity project | sanity.io/manage. Fallback in de code: `86exk9f3` |
| `SANITY_DATASET` | Dataset | meestal `production` |

Waarden staan nooit in git. Productiewaarden: Netlify → Site configuration → Environment variables, zodra de site bekend is.

## Structuur

```
src/
  components/   layout, sections, ui, blocks
  layouts/      BaseLayout
  lib/sanity/   Client, queries, types, images
  pages/        Alleen de homepage
  styles/       Tokens, Utopia, typografie
studio/         Sanity Studio (eigen dependencies)
```

## Content en CMS

Documenttypen: homepage (singleton), teamleden, processtappen, testimonials, blogposts. Bouwstenen: hero, list, testimonial, process, team, contact, cta, content.

De klant kan content in de Studio zetten; de homepage haalt die op met een gewone Sanity-client. Geen site-instellingen, SEO-velden of Visual Editing volgens `~/Code/_standards/SANITY.md`. Geen migratie: het project is gearchiveerd.

## Privacy, toegankelijkheid en SEO

- Consent: geen tracking of third-party embeds ingericht
- WCAG: semantische homepage, geen formele 2.2 AA-audit
- SEO volgens `~/Code/_standards/SEO.md`: `site` staat in `astro.config.mjs`. Sitemap, robots, JSON-LD en `llms.txt`: TODO

## Deploy

- Bedoeld: `main` → Netlify, publish `dist`, build `npm run build`
- Er is geen `netlify.toml` en geen gekoppelde Netlify-site
- Werkwijze gold: branch → PR → merge. Geen nieuwe features meer

## Bekende issues en afspraken

- Gearchiveerd in oktober 2026. Geen nieuwe features.
- De Studio-build (Sanity 3) waarschuwt dat `term-size` ontbreekt (`@sanity/cli` op macOS). De build eindigt wel succesvol (exit code 0).
- `npm audit` meldt kwetsbaarheden in root en `studio/`. Niet opgelost.
- De repo is public en staat op het GitHub-account `allthis-mieras`.

---

Eigenaar: All This · Wat er gedaan is: zie [`CHANGELOG.md`](CHANGELOG.md) · Werkafspraken voor ontwikkelaars en AI-agents: [`AGENTS.md`](AGENTS.md)
