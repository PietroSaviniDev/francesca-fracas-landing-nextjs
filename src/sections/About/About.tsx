import { WhatsappButton } from "@/components/ui/ButtonLink/ButtonLink";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder/PhotoPlaceholder";
import { SectionHeader } from "@/components/ui/SectionHeader/SectionHeader";
import { about } from "@/content/about";
import styles from "./About.module.css";

/** "Chi sono": presentazione della psicologa e credenziali. */
export function About() {
  return (
    <section id="chi-sono" className={styles.section} aria-labelledby="about-title">
      <div className={styles.photo}>
        {/* TODO: sostituire con <Image> e la foto professionale. */}
        <PhotoPlaceholder label="[FOTO PROFESSIONALE]" ratio="4 / 5" rounded />
      </div>

      <div className={styles.content}>
        <SectionHeader id="about-title" label="Chi sono" title={about.title} align="left" />

        {about.paragraphs.map((paragraph) => (
          <p key={paragraph} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}

        <ul className={styles.credentials}>
          {about.credentials.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className={styles.cta}>
          <WhatsappButton message="booking">Prenota la consulenza gratuita</WhatsappButton>
        </div>
      </div>
    </section>
  );
}
