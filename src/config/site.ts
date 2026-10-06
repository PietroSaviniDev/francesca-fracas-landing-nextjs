/**
 * Dati anagrafici e di contatto del sito.
 * Unica fonte di verità: header, footer, SEO e JSON-LD leggono da qui.
 */
export const siteConfig = {
  // TODO: sostituire con il dominio definitivo prima del deploy.
  url: "https://www.francescafracas.it",
  locale: "it_IT",
  // Brand (lo stesso della pagina Instagram, da cui arriva il traffico).
  brand: "Fra.ncamente",
  title: "Fra.ncamente | Psicologia",
  tagline: "Psicologia · Consulenze online",
  // Persona fisica dietro il brand.
  name: "Francesca Fracas",
  fullName: "Dott.ssa Francesca Fracas",
  jobTitle: "Psicologa Clinica",
  description:
    "Fra.ncamente: supporto psicologico online con la Dott.ssa Francesca Fracas, psicologa clinica. Percorsi individuali, di coppia, per adolescenti e famiglie. Prima consulenza gratuita su WhatsApp.",
  keywords: [
    "psicologa online",
    "psicologo online",
    "psicologa clinica",
    "ansia",
    "stress",
    "burnout",
    "terapia di coppia online",
    "sostegno psicologico adolescenti",
    "prima consulenza gratuita",
  ],
  degree: "Laurea in Psicologia Clinica e della Riabilitazione",
  // TODO: dati da completare.
  alboNumber: "33958",
  email: "[EMAIL@DOMINIO.IT]",
  phone: {
    e164: "393409657634",
    display: "+39 340 965 7634",
  },
} as const;
