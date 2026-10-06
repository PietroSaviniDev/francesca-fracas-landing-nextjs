import { WhatsappButton } from "@/components/ui/ButtonLink/ButtonLink";
import { FeatureGrid } from "@/components/ui/FeatureGrid/FeatureGrid";
import { SectionHeader } from "@/components/ui/SectionHeader/SectionHeader";
import { problems } from "@/content/problems";
import styles from "./Problems.module.css";

/** "Ti riconosci?": i problemi in cui il visitatore si identifica. */
export function Problems() {
  return (
    <section id="ti-riconosci" className={styles.section} aria-labelledby="problems-title">
      <svg className={styles.notch} aria-hidden="true" viewBox="0 0 1440 60" preserveAspectRatio="none">
        <path d="M0 60 L0 0 L620 0 C660 0 680 10 700 30 C720 50 740 60 780 60 Z" />
        <path d="M0 60 L1440 60 L1440 59 L0 59 Z" />
      </svg>

      <div className={styles.inner}>
        <SectionHeader id="problems-title" label="Ti riconosci?" title="Ti senti così ultimamente?" />

        <div className={styles.grid}>
          <FeatureGrid items={problems} />
        </div>

        <p className={styles.closing}>
          Se ti sei riconosciuto o riconosciuta in più di uno di questi punti,{" "}
          <strong>non devi affrontarlo da solo.</strong>
        </p>

        <div className={styles.cta}>
          <WhatsappButton message="talk">Parliamone su WhatsApp</WhatsappButton>
        </div>
      </div>
    </section>
  );
}
