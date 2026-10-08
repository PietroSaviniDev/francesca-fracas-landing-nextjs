import type { CSSProperties } from "react";
import { withBrand } from "@/components/ui/BrandName/BrandName";
import { Blob, DotGrid, Ring } from "@/components/ui/Decor/Decor";
import { ParallaxContainer, type ParallaxItem } from "@/components/ui/Parallax/ParallaxContainer";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder/PhotoPlaceholder";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll/RevealOnScroll";
import { SectionHeader } from "@/components/ui/SectionHeader/SectionHeader";
import { about } from "@/content/about";
import styles from "./About.module.css";

/** Ritardo progressivo per far comparire il testo un blocco alla volta. */
const step = (index: number) => ({ "--reveal-step": index }) as CSSProperties;

/** Elementi decorativi in parallax attorno alla foto (visibili solo da desktop). */
const parallaxItems: ParallaxItem[] = [
  {
    id: "blob-photo",
    element: <Blob size={320} color="var(--mist)" opacity={0.55} />,
    position: { top: "-40px", left: "-80px" },
    speed: 0.1,
  },
  {
    id: "ring-photo",
    element: <Ring size={110} />,
    position: { bottom: "4%", left: "30%" },
    speed: -0.18,
  },
  {
    id: "dots-text",
    element: <DotGrid size={100} />,
    position: { top: "0", right: "2%" },
    speed: 0.22,
  },
];

/** "Chi sono": presentazione della psicologa e credenziali. */
export function About() {
  let index = 0;

  return (
    <RevealOnScroll as="section" id="chi-sono" className={styles.section} aria-labelledby="about-title">
      <ParallaxContainer items={parallaxItems}>
        <div className={styles.layout}>
          <div className={styles.photo}>
            {/* TODO: sostituire con <Image> e la foto professionale. */}
            <PhotoPlaceholder label="[FOTO PROFESSIONALE]" ratio="4 / 5" rounded />
          </div>

          <div className={styles.content}>
            <div className={styles.reveal} style={step(index++)}>
              <SectionHeader id="about-title" label="Chi sono" title={about.title} align="left" />
            </div>

            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className={`${styles.paragraph} ${styles.reveal}`} style={step(index++)}>
                {withBrand(paragraph)}
              </p>
            ))}

            <ul className={styles.credentials}>
              {about.credentials.map((item) => (
                <li key={item} className={styles.reveal} style={step(index++)}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ParallaxContainer>
    </RevealOnScroll>
  );
}
