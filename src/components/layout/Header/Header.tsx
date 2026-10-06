import { WhatsappButton } from "@/components/ui/ButtonLink/ButtonLink";
import { siteConfig } from "@/config/site";
import { navLinks } from "@/content/navigation";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.bar}>
        <a href="#top" className={styles.brand} aria-label={`${siteConfig.name} – torna all'inizio`}>
          <span className={styles.name}>{siteConfig.name}</span>
          <span className={styles.tagline}>{siteConfig.tagline}</span>
        </a>

        <nav aria-label="Navigazione principale" className={styles.nav}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <WhatsappButton message="info" variant="pill">
          Scrivimi
        </WhatsappButton>
      </div>
    </header>
  );
}
