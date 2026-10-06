/**
 * Dati anagrafici e di contatto del sito.
 * Unica fonte di verità: header, footer, SEO e JSON-LD leggono da qui.
 */
export const siteConfig = {
  // TODO: sostituire con il dominio definitivo prima del deploy.
  url: "https://www.francescafracas.it",
  locale: "it_IT",
  name: "Francesca Fracas",
  fullName: "Dott.ssa Francesca Fracas",
  jobTitle: "Psicologa Clinica",
  tagline: "Psicologa clinica · Consulenze online",
  title: "Dott.ssa Francesca Fracas – Psicologa Clinica online",
  description:
    "Psicologa clinica online: percorsi individuali, di coppia, per adolescenti e famiglie. Prima consulenza gratuita, prenota su WhatsApp.",
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
  alboNumber: "[N. ISCRIZIONE]",
  vatNumber: "[P.IVA]",
  email: "[EMAIL@DOMINIO.IT]",
  phone: {
    e164: "393409657634",
    display: "+39 340 965 7634",
  },
} as const;
