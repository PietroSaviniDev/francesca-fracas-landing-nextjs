import { siteConfig } from "@/config/site";
import { inPersonPlace } from "@/lib/inPerson";

/** Usate sia dalla sezione FAQ sia dal JSON-LD FAQPage. */
export const faqs = [
  {
    question: "La prima consulenza è davvero gratuita?",
    answer:
      "Sì. Il primo colloquio conoscitivo è gratuito e senza impegno: serve a conoscerci e capire insieme come posso aiutarti.",
  },
  {
    question: "Come funzionano le sedute online?",
    answer:
      "Ci vediamo in videochiamata su una piattaforma sicura, dal tuo computer o dallo smartphone, dove ti senti più a tuo agio.",
  },
  {
    question: "Vivo all'estero: posso fare un percorso con te?",
    answer:
      "Certo. Le sedute sono online e in italiano, quindi puoi seguirle da qualsiasi Paese: fissiamo gli appuntamenti tenendo conto del tuo fuso orario.",
  },
  {
    question: "Posso incontrarti di persona?",
    answer: `Sì, se vivi in Belgio: ricevo in presenza ${inPersonPlace}. Puoi scegliere tra incontri dal vivo, sedute online o alternare le due modalità.`,
  },
  {
    question: "Quanto dura un percorso?",
    answer:
      "Non c'è una durata fissa: dipende dai tuoi obiettivi. Ne parliamo insieme già dal primo colloquio.",
  },
  {
    question: "Ciò che racconto resta riservato?",
    answer:
      "Sì. Ogni seduta è coperta dal segreto professionale e i tuoi dati sono trattati nel rispetto del GDPR.",
  },
  {
    question: "Come prenoto?",
    answer: `Scrivimi su WhatsApp al ${siteConfig.phone.display}: ti rispondo entro 24 ore per fissare il primo appuntamento.`,
  },
];
