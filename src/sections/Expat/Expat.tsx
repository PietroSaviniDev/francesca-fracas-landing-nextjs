import { WhatsappButton } from "@/components/ui/ButtonLink/ButtonLink";
import { FeatureGrid } from "@/components/ui/FeatureGrid/FeatureGrid";
import { SectionHeader } from "@/components/ui/SectionHeader/SectionHeader";
import { Waves } from "@/components/ui/Waves/Waves";
import { expat } from "@/content/expat";
import styles from "./Expat.module.css";

/** Supporto psicologico in italiano per chi vive all'estero. */
export function Expat() {
  return (
    <section id="estero" className={styles.section} aria-labelledby="expat-title">
      <Waves variant="light" height={760} />

      <div className={styles.inner}>
        <SectionHeader id="expat-title" label={expat.label} title={expat.title} />
        <p className={styles.intro}>{expat.intro}</p>

        <div className={styles.grid}>
          <FeatureGrid items={expat.features} />
        </div>

        <div className={styles.cta}>
          <WhatsappButton message="expat">Scrivimi da dove ti trovi</WhatsappButton>
        </div>
      </div>
    </section>
  );
}
