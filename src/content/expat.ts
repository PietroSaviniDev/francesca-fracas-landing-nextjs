import type { Feature } from "./types";

/** Sezione dedicata agli italiani che vivono all'estero. */
export const expat = {
  label: "Italiani all'estero",
  title: "Lontano da casa, ma nella tua lingua",
  intro:
    "Trasferirsi all'estero è una scelta coraggiosa, ma può portare con sé solitudine, nostalgia e la fatica di ricominciare da capo. Parlare di ciò che senti nella tua lingua madre, con qualcuno che conosce la tua cultura, fa la differenza.",
  features: [
    {
      icon: "chat",
      title: "In italiano, sempre",
      text: "Le emozioni si raccontano meglio nella propria lingua: niente filtri, niente traduzioni.",
    },
    {
      icon: "plane",
      title: "Le sfide dell'espatrio",
      text: "Adattamento culturale, solitudine, nostalgia di casa, carriera e relazioni a distanza.",
    },
    {
      icon: "clock",
      title: "Orari su misura per te",
      text: "Sedute fissate in base al tuo fuso orario e ai tuoi impegni, ovunque tu viva.",
    },
    {
      icon: "people",
      title: "Coppie e famiglie expat",
      text: "Supporto per chi affronta il trasferimento insieme, con figli o partner di culture diverse.",
    },
  ] satisfies Feature[],
};
