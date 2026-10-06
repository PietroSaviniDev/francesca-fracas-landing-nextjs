import { siteConfig } from "@/config/site";

export const about = {
  title: "Ciao, sono Francesca.",
  paragraphs: [
    "Sono psicologa, laureata in Psicologia Clinica e della Riabilitazione. Il mio lavoro è offrirti uno spazio sicuro, senza giudizio, in cui rallentare e dare un nome a ciò che stai vivendo, con i tuoi tempi.",
    // TODO: testo da personalizzare con Francesca.
    "[Personalizza: il tuo approccio, la tua formazione, cosa ti ha portata a fare questo lavoro.]",
  ],
  credentials: [
    siteConfig.degree,
    `Iscritta all'Albo degli Psicologi, n. ${siteConfig.alboNumber}`,
    "Sedute online in videochiamata, in tutta Italia",
  ],
};
