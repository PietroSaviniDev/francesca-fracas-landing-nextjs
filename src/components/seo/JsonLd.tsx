interface JsonLdProps {
  data: object;
}

/** Inserisce dati strutturati schema.org nella pagina. */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // Escape di "<" per evitare la chiusura prematura del tag script.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
