# Francesca Fracas – Landing page

Landing page statica (Next.js App Router, export statico) per la Dott.ssa Francesca Fracas.
I contatti avvengono solo via WhatsApp: niente backend, niente API.

## Comandi

```bash
npm run dev     # sviluppo su http://localhost:3000
npm run build   # export statico in ./out
npm run lint
```

## Struttura

```
design/                 bozza HTML originale (riferimento visivo)
src/
  app/                  layout (font, metadata SEO), page, sitemap.ts, robots.ts, globals.css (design token)
  config/site.ts        dati anagrafici, contatti, dominio: unica fonte di verità
  content/              testi della pagina (problemi, percorsi, passi, FAQ, ...)
  lib/                  link WhatsApp, dati strutturati schema.org
  components/
    layout/             Header, Footer, pulsante WhatsApp fisso
    ui/                 componenti riutilizzabili (ButtonLink, SectionHeader, FeatureGrid, Icon, Waves, ...)
    seo/                JsonLd
  sections/             una cartella per sezione della landing, ognuna con il proprio .module.css
```

Convenzioni:

- ogni componente/sezione ha il suo `Nome.tsx` + `Nome.module.css`;
- colori, spaziature e font si usano solo tramite le variabili in `globals.css`;
- i testi si modificano in `src/content/`, i dati di contatto in `src/config/site.ts`;
- per aggiungere un'icona: `src/components/ui/Icon/Icon.tsx`.

## Deploy su Cloudflare Pages

Collega il repository in Cloudflare Pages con:

- **Framework preset:** Next.js (Static HTML Export)
- **Build command:** `npm run build`
- **Build output directory:** `out`

In alternativa, da CLI: `npx wrangler pages deploy` (legge `wrangler.toml`).

## Da completare

- dominio definitivo in `src/config/site.ts` (usato da canonical, sitemap, Open Graph, JSON-LD);
- email;
- foto (hero e "Chi sono") e immagine Open Graph (`src/app/opengraph-image.jpg`);
- testo personale nella sezione "Chi sono";
- favicon personalizzata.
