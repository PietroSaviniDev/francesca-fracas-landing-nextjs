import { WhatsappButton } from "@/components/ui/ButtonLink/ButtonLink";
import { SectionHeader } from "@/components/ui/SectionHeader/SectionHeader";
import { Waves } from "@/components/ui/Waves/Waves";
import styles from "./FreeConsultation.module.css";

/** Box in evidenza sulla prima consulenza gratuita. */
export function FreeConsultation() {
  return (
    <section className={styles.section} aria-labelledby="free-title">
      <div className={styles.box}>
        <Waves variant="dark" height={420} />
        <div className={styles.content}>
          <SectionHeader
            id="free-title"
            label="Prima consulenza"
            title="Il primo passo è il più difficile. Facciamolo insieme."
            tone="inverted"
          />
          <p className={styles.text}>
            Un incontro online per conoscerci e capire insieme come posso aiutarti. Nessun costo, nessun vincolo.
          </p>
          <div className={styles.cta}>
            <WhatsappButton message="booking" variant="light">
              Prenota su WhatsApp
            </WhatsappButton>
          </div>
        </div>
      </div>
    </section>
  );
}
