import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export statico in /out, servito da Cloudflare Pages (nessun server Node).
  output: "export",
  trailingSlash: true,
  images: {
    // L'ottimizzazione immagini richiede un server: con l'export statico va disattivata.
    unoptimized: true,
  },
};

export default nextConfig;
