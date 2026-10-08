import type { CSSProperties } from "react";
import { FeatureGrid } from "@/components/ui/FeatureGrid/FeatureGrid";
import { Blob, DotGrid, Ring } from "@/components/ui/Decor/Decor";
import { Icon } from "@/components/ui/Icon/Icon";
import { ParallaxContainer, type ParallaxItem } from "@/components/ui/Parallax/ParallaxContainer";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll/RevealOnScroll";
import { SectionHeader } from "@/components/ui/SectionHeader/SectionHeader";
import { onlineBenefits } from "@/content/onlineBenefits";
import { services } from "@/content/services";
import styles from "./Services.module.css";

/** Le animazioni partono quando il blocco è entrato nello schermo, poco sopra il bordo inferiore. */
const REVEAL_MARGIN = "0px 0px -15% 0px";

/** Elementi decorativi in parallax (visibili solo da desktop). */
const parallaxItems: ParallaxItem[] = [
  {
    id: "blob-left",
    element: <Blob size={300} color="var(--chip)" opacity={0.5} />,
    position: { top: "6%", left: "-120px" },
    speed: 0.12,
  },
  {
    id: "ring-right",
    element: <Ring size={160} />,
    position: { top: "30%", right: "-60px" },
    speed: -0.15,
  },
  {
    id: "dots-online",
    element: <DotGrid size={110} />,
    position: { bottom: "6%", right: "8%" },
    speed: 0.2,
  },
];

/** "Percorsi": aree di intervento + vantaggi delle sedute online. */
export function Services() {
  return (
    <section id="percorsi" className={styles.section} aria-labelledby="services-title">
      <ParallaxContainer items={parallaxItems}>
        <div className={styles.inner}>
          {/* Le card compaiono una alla volta quando il blocco entra nello schermo. */}
          <RevealOnScroll rootMargin={REVEAL_MARGIN}>
            <SectionHeader id="services-title" label="Percorsi" title="Come posso aiutarti" />
            <div className={`${styles.grid} ${styles.stagger}`}>
              <FeatureGrid items={services} />
            </div>
          </RevealOnScroll>

          {/* Vantaggi dell'online: fascia leggera, senza card, per non ripetere la griglia sopra. */}
          <RevealOnScroll rootMargin={REVEAL_MARGIN} className={styles.online}>
            <h3 className={styles.onlineTitle}>La stessa cura, ovunque tu sia</h3>
            <ul className={`${styles.benefits} ${styles.stagger}`}>
              {onlineBenefits.map((benefit, index) => (
                <li key={benefit.title} className={styles.benefit} style={{ "--i": index } as CSSProperties}>
                  <span className={styles.benefitIcon}>
                    <Icon name={benefit.icon} size={20} />
                  </span>
                  <div>
                    <h4 className={styles.benefitTitle}>{benefit.title}</h4>
                    <p className={styles.benefitText}>{benefit.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </div>
      </ParallaxContainer>
    </section>
  );
}
