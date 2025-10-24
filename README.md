# GrowthFactory Website

Een moderne website voor GrowthFactory, gebouwd met Astro en Sanity CMS.

## Features

- **Astro Framework** - Snelle, moderne web development
- **Sanity CMS** - Headless CMS voor content management
- **TypeScript** - Type safety en betere developer experience
- **Responsive Design** - Werkt op alle apparaten
- **SEO Optimized** - Geoptimaliseerd voor zoekmachines
- **Performance** - Snelle laadtijden en optimale Core Web Vitals

## Tech Stack

- [Astro](https://astro.build/) - Web framework
- [Sanity](https://sanity.io/) - Headless CMS
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Sass](https://sass-lang.com/) - CSS preprocessor
- [Utopia](https://utopia.fyi/) - Fluid typography en spacing

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm of yarn
- Sanity account (gratis op [sanity.io](https://sanity.io))

### Installation

1. Clone de repository
2. Installeer dependencies:
   ```bash
   npm install
   ```

3. Configureer Sanity (zie [Sanity Setup](#sanity-setup) hieronder)

4. Start de development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:4321](http://localhost:4321) in je browser

## Sanity Setup

### 1. Sanity Project Aanmaken

```bash
# Installeer Sanity CLI (als je dat nog niet hebt)
npm install -g @sanity/cli

# Ga naar de studio directory
cd studio

# Initialiseer een nieuw Sanity project
npx sanity init --project-id [YOUR_PROJECT_ID] --dataset production

# Deploy de Studio
npx sanity deploy
```

### 2. Sanity Project ID Ophalen

Je Sanity Project ID kun je vinden in:

1. **Sanity Dashboard:** Ga naar [sanity.io/manage](https://sanity.io/manage)
2. **In je Studio:** Het staat in `studio/sanity.config.ts` (regel 12)
3. **Via CLI:** `npx sanity projects list`

### 3. Environment Variables

Maak een `.env` bestand aan in de root directory:

```env
SANITY_PROJECT_ID=your_project_id_here
SANITY_DATASET=production
```

**Let op:** Voeg `.env` toe aan je `.gitignore` (dit is al gedaan) om te voorkomen dat gevoelige informatie in je repository komt.

### 4. Studio Starten

```bash
# Studio development server
npm run studio:dev
```

Ga naar `http://localhost:3333` om de Sanity Studio te openen.

## Project Structure

```
src/
├── components/          # Herbruikbare componenten
│   ├── layout/         # Layout componenten (Header, Footer)
│   ├── sections/       # Page secties (Hero, Team, etc.)
│   └── ui/             # UI componenten (Button, Card, etc.)
├── layouts/            # Page layouts
├── pages/              # Astro pages (file-based routing)
├── styles/             # Global styles en SCSS
└── lib/                # Utilities en helpers
    └── sanity/         # Sanity CMS integratie
        ├── config.ts   # Sanity client configuratie
        ├── queries.ts  # GROQ queries
        ├── types.ts    # TypeScript types
        └── image.ts    # Image utilities

studio/                 # Sanity Studio
├── schemas/            # Content schema's
├── sanity.config.ts    # Studio configuratie
└── package.json        # Studio dependencies
```

## Available Scripts

### Astro Commands
- `npm run dev` - Start development server
- `npm run build` - Build voor productie
- `npm run preview` - Preview productie build

### Sanity Studio Commands
- `npm run studio:dev` - Start Studio development server
- `npm run studio:build` - Build Studio voor productie
- `npm run studio:deploy` - Deploy Studio naar Sanity

## Content Management

### Content Types

De website ondersteunt de volgende content types:

- **Homepage** - Alle homepage content (hero, testimonials, etc.)
- **Team Members** - Team leden met foto's en biografieën
- **Process Steps** - Stappen in het groeiproces
- **Blog Posts** - Blog artikelen (voorbereiding voor toekomst)

### Content Toevoegen

1. Start de Studio: `npm run studio:dev`
2. Ga naar `http://localhost:3333`
3. Voeg content toe via de Studio interface
4. Content wordt automatisch opgehaald door de Astro frontend

## Styling

Dit project gebruikt een combinatie van:
- **SCSS** voor custom styles en variabelen
- **Utopia** voor fluid typography en spacing
- **CSS Custom Properties** voor theming

### CSS Custom Properties

Het project gebruikt CSS custom properties voor:
- Colors (`--color-primary`, `--color-secondary`, etc.)
- Typography (`--step-0`, `--step-1`, etc.)
- Spacing (`--space-xs`, `--space-s`, etc.)

## Deployment

### Build

```bash
npm run build
```

De build output wordt gegenereerd in de `dist/` directory.

### Studio Deployen

```bash
npm run studio:deploy
```

### Environment Variables in Production

Zorg ervoor dat de volgende environment variables zijn ingesteld in je hosting platform:

- `SANITY_PROJECT_ID` - Je Sanity project ID
- `SANITY_DATASET` - Je Sanity dataset (meestal 'production')

### Netlify Deployment

#### 1. Repository Koppelen

1. Ga naar [Netlify](https://netlify.com/) en log in
2. Klik op "New site from Git"
3. Kies GitHub en selecteer je repository
4. Configureer de build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

#### 2. Environment Variables Instellen

In je Netlify dashboard:

1. Ga naar **Site settings** → **Environment variables**
2. Voeg de volgende variabelen toe:

```
SANITY_PROJECT_ID = je_project_id_hier
SANITY_DATASET = production
```

#### 3. Build Settings

Zorg ervoor dat je build settings correct zijn:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 18 (of hoger)

#### 4. Deploy

Na het instellen van de environment variables:

1. Ga naar **Deploys** tab
2. Klik op **Trigger deploy** → **Deploy site**
3. Je site wordt nu gebouwd met de juiste environment variables

### Andere Hosting Opties

Dit project kan ook gehost worden op:
- [Vercel](https://vercel.com/) - Vergelijkbare setup als Netlify
- [GitHub Pages](https://pages.github.com/) - Via GitHub Actions
- Elke andere static hosting service

## Development Workflow

### Content Updates

1. Maak content aan in Sanity Studio
2. Content wordt automatisch opgehaald door de frontend
3. Test lokaal met `npm run dev`
4. Deploy naar productie

### Fallback Data

Tijdens development gebruikt de site fallback data als Sanity niet geconfigureerd is. Dit zorgt ervoor dat de site werkt zelfs zonder Sanity project.

## Troubleshooting

### Studio Start Niet

- Controleer of alle dependencies geïnstalleerd zijn: `cd studio && npm install`
- Controleer of de environment variables correct zijn ingesteld
- Controleer of het Sanity project bestaat en toegankelijk is

### Content Verschijnt Niet

- Controleer of de content gepubliceerd is in de Studio
- Controleer of de GROQ queries correct zijn
- Controleer de browser console voor errors
- Controleer of de environment variables correct zijn ingesteld

## Contributing

1. Fork de repository
2. Maak een feature branch: `git checkout -b feature/amazing-feature`
3. Commit je changes: `git commit -m 'Add amazing feature'`
4. Push naar de branch: `git push origin feature/amazing-feature`
5. Open een Pull Request

## License

Dit project is eigendom van GrowthFactory.