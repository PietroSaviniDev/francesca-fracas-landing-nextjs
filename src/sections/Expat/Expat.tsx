import { WhatsappButton } from "@/components/ui/ButtonLink/ButtonLink";
import { Icon } from "@/components/ui/Icon/Icon";
import { StaggeredCards } from "@/components/ui/StaggeredCards/StaggeredCards";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll/RevealOnScroll";
import { SectionHeader } from "@/components/ui/SectionHeader/SectionHeader";
import { Waves } from "@/components/ui/Waves/Waves";
import { expat } from "@/content/expat";
import styles from "./Expat.module.css";

/** Le animazioni partono quando il blocco è entrato nello schermo, poco sopra il bordo inferiore. */
const REVEAL_MARGIN = "0px 0px -15% 0px";

/** Supporto psicologico in italiano per chi vive all'estero. */
export function Expat() {
  return (
    <section id="estero" className={styles.section} aria-labelledby="expat-title">
      <Waves variant="light" height={760} />

      <div className={styles.inner}>
        {/* Titolo e testo appaiono, poi le card una alla volta. */}
        <RevealOnScroll rootMargin={REVEAL_MARGIN}>
          <div className={styles.fade}>
            <SectionHeader id="expat-title" label={expat.label} title={expat.title} />
            <p className={styles.intro}>{expat.intro}</p>
          </div>

          <div className={`${styles.grid} ${styles.stagger}`}>
            <StaggeredCards items={expat.features} numbered={false} />
          </div>
        </RevealOnScroll>

        {/* In Belgio Francesca riceve anche in presenza. */}
        <RevealOnScroll rootMargin={REVEAL_MARGIN} className={styles.fade}>
          <aside className={styles.inPerson} aria-labelledby="in-person-title">
            <span className={styles.inPersonIcon}>
              <Icon name="pin" size={24} />
            </span>
            <div className={styles.inPersonBody}>
              <h3 id="in-person-title" className={styles.inPersonTitle}>
                {expat.inPerson.title}
              </h3>
              <p className={styles.inPersonText}>{expat.inPerson.text}</p>
            </div>
            <WhatsappButton message="inPerson">{expat.inPerson.cta}</WhatsappButton>
          </aside>
        </RevealOnScroll>
      </div>
    </section>
  );
}
