import { FeatureGrid } from "@/components/ui/FeatureGrid/FeatureGrid";
import { SectionHeader } from "@/components/ui/SectionHeader/SectionHeader";
import { services } from "@/content/services";
import styles from "./Services.module.css";

/** "Percorsi": le aree di intervento. */
export function Services() {
  return (
    <section id="percorsi" className={styles.section} aria-labelledby="services-title">
      <div className={styles.inner}>
        <SectionHeader id="services-title" label="Percorsi" title="Come posso aiutarti" />
        <div className={styles.grid}>
          <FeatureGrid items={services} />
        </div>
      </div>
    </section>
  );
}
