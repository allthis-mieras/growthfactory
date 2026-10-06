# AGENTS.md: growthfactory.nl

Gearchiveerd project: geen nieuwe features.

Instructies voor AI-agents en ontwikkelaars. Lees eerst `README.md` en `CHANGELOG.md`.

## Project
- Klant: Growth Factory · Bedrijf: All This · SLA: TODO
- Status: archief, niet doorgegaan (oktober 2026)
- Stack: Astro 7, Sanity (Studio 3, client 7), Node 22 (zie `.nvmrc`)
- Sanity: project `86exk9f3`, dataset `production`

## Werkwijze
- Niets verwijderen. Niet pushen naar `main`. Geen force-push.
- Alleen documentatie of archiefonderhoud, op een branch en via een PR.
- Commit nooit `.env`-bestanden of tokens. `PUBLIC_` hoort niet bij geheimen; dit project gebruikt die prefix niet.
- Bij een noodzakelijke wijziging: een regel onder de nieuwste datum in `CHANGELOG.md`.

## Conventies
- Geen nieuwe pagina's, schema's of dependencies.
- Content loopt via de Sanity-client in `src/lib/sanity/`, zonder Visual Editing.
- Afbeeldingen: geen vastgelegd profiel volgens `~/Code/_standards/IMAGES.md` (TODO, niet meer in te voeren).
