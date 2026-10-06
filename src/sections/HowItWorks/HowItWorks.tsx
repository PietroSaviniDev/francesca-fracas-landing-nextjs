import { SectionHeader } from "@/components/ui/SectionHeader/SectionHeader";
import { steps } from "@/content/steps";
import styles from "./HowItWorks.module.css";

/** "Come funziona": i tre passi per iniziare. */
export function HowItWorks() {
  return (
    <section id="come-funziona" className={styles.section} aria-labelledby="how-title">
      <SectionHeader id="how-title" label="Come funziona" title="Tre passi, nessun impegno" />

      <ol className={styles.steps}>
        {steps.map((step, index) => (
          <li key={step.title} className={styles.step}>
            <span className={styles.number} aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.text}>{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
