import { withBrand } from "@/components/ui/BrandName/BrandName";
import { siteConfig } from "@/config/site";
import { inPersonPlace } from "@/lib/inPerson";
import { whatsappUrl } from "@/lib/whatsapp";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        <div className={styles.column}>
          <p className={styles.brand}>{withBrand(siteConfig.title)}</p>
          <p className={styles.text}>
            {siteConfig.fullName}
            <br />
            Psicologa Clinica e della Riabilitazione
            <br />
            Albo degli Psicologi n. {siteConfig.alboNumber}
          </p>
        </div>

        <div className={styles.column}>
          <h2 className={styles.heading}>Contatti</h2>
          <address className={styles.text}>
            <a href={whatsappUrl("moreInfo")} target="_blank" rel="noopener noreferrer" className={styles.link}>
              WhatsApp {siteConfig.phone.display}
            </a>
            <br />
            {siteConfig.email}
          </address>
        </div>

        <div className={styles.column}>
          <h2 className={styles.heading}>Informazioni</h2>
          <p className={styles.text}>
            Sedute online in italiano, in Italia e all&apos;estero
            <br />
            In presenza {inPersonPlace}
          </p>
        </div>
      </div>

      <p className={styles.legal}>
        © {year} {siteConfig.name}. I contenuti di questo sito non sostituiscono una consulenza psicologica. In caso
        di emergenza chiama il 112.
      </p>
    </footer>
  );
}
