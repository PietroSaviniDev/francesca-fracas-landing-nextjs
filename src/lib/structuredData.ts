import { siteConfig } from "@/config/site";
import { faqs } from "@/content/faq";
import { services } from "@/content/services";

/** Schema.org per i rich results: professionista, servizi e FAQ. */
export function buildStructuredData() {
  const personId = `${siteConfig.url}/#person`;
  const telephone = `+${siteConfig.phone.e164}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: siteConfig.fullName,
        jobTitle: siteConfig.jobTitle,
        url: siteConfig.url,
        telephone,
        knowsAbout: services.map((s) => s.title),
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/#service`,
        name: siteConfig.title,
        // Anche la forma senza "|", che è quella che le persone digitano nelle ricerche.
        alternateName: [siteConfig.brand, siteConfig.brand.replace("|", "")],
        description: siteConfig.description,
        url: siteConfig.url,
        telephone,
        // Online: Italia e italiani all'estero (in primis Belgio ed Europa).
        areaServed: [
          { "@type": "Country", name: "Italia" },
          { "@type": "Country", name: "Belgio" },
          { "@type": "Place", name: "Europa" },
        ],
        availableLanguage: "it",
        // Online ovunque + in presenza in Belgio.
        // TODO: aggiungere "address" (PostalAddress) quando lo studio in Belgio è definito.
        serviceType: ["Consulenza psicologica online", `Consulenza psicologica in presenza in ${siteConfig.inPerson.country}`],
        founder: { "@id": personId },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Percorsi psicologici online",
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title, description: s.text },
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.url}/#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };
}
