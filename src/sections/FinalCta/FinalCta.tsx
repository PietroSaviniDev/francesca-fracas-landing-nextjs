import { WhatsappButton } from "@/components/ui/ButtonLink/ButtonLink";
import { Waves } from "@/components/ui/Waves/Waves";
import styles from "./FinalCta.module.css";

/** Chiusura emotiva con l'ultima call to action. */
export function FinalCta() {
  return (
    <section className={styles.section} aria-labelledby="final-cta-title">
      <Waves variant="light" height={420} />
      <div className={styles.inner}>
        <h2 id="final-cta-title" className={styles.title}>
          Il primo passo è il più difficile.
          <br />
          Facciamolo insieme.
        </h2>
        <p className={styles.text}>Scrivimi su WhatsApp e prenota la tua prima consulenza gratuita.</p>
        <div className={styles.cta}>
          <WhatsappButton message="booking">Scrivimi su WhatsApp</WhatsappButton>
        </div>
      </div>
    </section>
  );
}
