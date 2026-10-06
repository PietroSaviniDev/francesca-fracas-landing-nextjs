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
        alternateName: siteConfig.brand,
        description: siteConfig.description,
        url: siteConfig.url,
        telephone,
        areaServed: { "@type": "Country", name: "Italia" },
        availableLanguage: "it",
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
