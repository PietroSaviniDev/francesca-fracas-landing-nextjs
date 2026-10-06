import { SectionHeader } from "@/components/ui/SectionHeader/SectionHeader";
import { faqs } from "@/content/faq";
import styles from "./Faq.module.css";

/** Domande frequenti con <details> nativo: accessibile e senza JavaScript. */
export function Faq() {
  return (
    <section id="faq" className={styles.section} aria-labelledby="faq-title">
      <SectionHeader id="faq-title" label="Domande frequenti" title="Hai qualche dubbio?" />

      <div className={styles.list}>
        {faqs.map((faq, index) => (
          <details key={faq.question} className={styles.item} open={index === 0}>
            <summary className={styles.question}>
              <h3 className={styles.questionText}>{faq.question}</h3>
              <span className={styles.icon} aria-hidden="true">
                +
              </span>
            </summary>
            <p className={styles.answer}>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
