import { FeatureGrid } from "@/components/ui/FeatureGrid/FeatureGrid";
import { SectionHeader } from "@/components/ui/SectionHeader/SectionHeader";
import { onlineBenefits } from "@/content/onlineBenefits";
import styles from "./OnlineBenefits.module.css";

/** Vantaggi delle sedute online. */
export function OnlineBenefits() {
  return (
    <section id="online" className={styles.section} aria-labelledby="online-title">
      <div className={styles.inner}>
        <SectionHeader id="online-title" label="Online" title="La stessa cura, ovunque tu sia" />
        <div className={styles.grid}>
          <FeatureGrid items={onlineBenefits} minColumnWidth={220} />
        </div>
      </div>
    </section>
  );
}
