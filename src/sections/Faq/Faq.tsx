import { Blob, DotGrid, Ring } from "@/components/ui/Decor/Decor";
import { ParallaxContainer, type ParallaxItem } from "@/components/ui/Parallax/ParallaxContainer";
import { SectionHeader } from "@/components/ui/SectionHeader/SectionHeader";
import { faqs } from "@/content/faq";
import styles from "./Faq.module.css";

/** Elementi decorativi in parallax nei margini ai lati delle domande (visibili solo da desktop). */
const parallaxItems: ParallaxItem[] = [
  {
    id: "blob-left",
    element: <Blob size={280} color="var(--mist)" opacity={0.5} />,
    position: { top: "18%", left: "-220px" },
    speed: 0.12,
  },
  {
    id: "ring-left",
    element: <Ring size={90} />,
    position: { bottom: "12%", left: "-140px" },
    speed: -0.2,
  },
  {
    id: "ring-right",
    element: <Ring size={150} opacity={0.25} />,
    position: { top: "4%", right: "-180px" },
    speed: 0.18,
  },
  {
    id: "dots-right",
    element: <DotGrid size={110} />,
    position: { bottom: "20%", right: "-150px" },
    speed: -0.12,
  },
];

/** Domande frequenti con <details> nativo: accessibile e senza JavaScript. */
export function Faq() {
  return (
    <section id="faq" className={styles.section} aria-labelledby="faq-title">
      <ParallaxContainer items={parallaxItems}>
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
      </ParallaxContainer>
    </section>
  );
}
