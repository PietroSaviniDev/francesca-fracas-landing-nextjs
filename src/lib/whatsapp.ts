import { siteConfig } from "@/config/site";

/** Messaggi precompilati per i diversi punti di contatto della pagina. */
export const whatsappMessages = {
  info: "Ciao Francesca, vorrei avere informazioni sui tuoi percorsi.",
  moreInfo: "Ciao Francesca, vorrei avere maggiori informazioni.",
  booking: "Ciao Francesca, vorrei prenotare la prima consulenza gratuita.",
  talk: "Ciao Francesca, vorrei parlarti della mia situazione.",
} as const;

export type WhatsappMessage = keyof typeof whatsappMessages;

export function whatsappUrl(message: WhatsappMessage = "booking"): string {
  const text = encodeURIComponent(whatsappMessages[message]);
  return `https://wa.me/${siteConfig.phone.e164}?text=${text}`;
}
