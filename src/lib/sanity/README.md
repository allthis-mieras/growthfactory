# Sanity CMS Integration

Deze folder bevat alle bestanden die nodig zijn voor de integratie met Sanity CMS.

## Bestanden

- `config.ts` - Sanity configuratie en content type definities
- `types.ts` - TypeScript types voor alle content modellen
- `queries.ts` - GROQ queries voor het ophalen van content
- `README.md` - Deze documentatie

## Setup Instructies

### 1. Sanity Project Aanmaken

```bash
# Installeer Sanity CLI
npm install -g @sanity/cli

# Login bij Sanity
sanity login

# Maak een nieuw project aan
sanity init
```

### 2. Dependencies Installeren

```bash
npm install @sanity/client @sanity/image-url
```

### 3. Environment Variables

Voeg deze toe aan je `.env` file:

```env
SANITY_PROJECT_ID=your-project-id
SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token
```

### 4. Content Schema's

Maak de volgende content types aan in Sanity Studio:

#### Homepage
- `heroTitle` (string)
- `heroSubtitle` (string)
- `heroDescription` (text)
- `heroCtaText` (string)
- `recognitionTitle` (string)
- `recognitionItems` (array of strings)
- `whatYouGetTitle` (string)
- `whatYouGetItems` (array of strings)
- `testimonialQuote` (text)
- `testimonialAuthor` (string)
- `processTitle` (string)
- `processSubtitle` (string)
- `whyItWorksTitle` (string)
- `whyItWorksItems` (array of strings)
- `contactTitle` (string)
- `contactSubtitle` (string)

#### Team Member
- `name` (string)
- `role` (string)
- `bio` (text, optional)
- `image` (image, optional)
- `linkedinUrl` (url, optional)
- `order` (number, optional)

#### Process Step
- `number` (number)
- `title` (string)
- `description` (text)
- `icon` (image, optional)

### 5. Component Updates

Wanneer Sanity is geïntegreerd, update de componenten om props te accepteren:

```astro
---
// Hero.astro
export interface Props {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
}

const { title, subtitle, description, ctaText } = Astro.props;
---

<h1>{title}</h1>
<p>{subtitle}</p>
<p>{description}</p>
<Button>{ctaText}</Button>
```

### 6. Data Fetching

In `pages/index.astro`:

```astro
---
import { createClient } from '@sanity/client';
import { sanityConfig } from '../lib/sanity/config';
import { getHomepageDataQuery } from '../lib/sanity/queries';

const client = createClient(sanityConfig);
const data = await client.fetch(getHomepageDataQuery);
---

<Hero 
  title={data.homepage.heroTitle}
  subtitle={data.homepage.heroSubtitle}
  description={data.homepage.heroDescription}
  ctaText={data.homepage.heroCtaText}
/>
```

## Voordelen van deze Setup

1. **Type Safety** - Volledige TypeScript ondersteuning
2. **Herbruikbaar** - Componenten accepteren props voor flexibiliteit
3. **Performance** - Static generation met Astro
4. **SEO** - Server-side rendering van content
5. **Developer Experience** - Duidelijke scheiding tussen content en presentatie

## Volgende Stappen

1. Sanity Studio setup
2. Content schema's definiëren
3. Content invoeren
4. Componenten updaten voor props
5. Data fetching implementeren
6. Image optimization toevoegen
