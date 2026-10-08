import { ButtonLink, WhatsappButton } from "@/components/ui/ButtonLink/ButtonLink";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder/PhotoPlaceholder";
import { Waves } from "@/components/ui/Waves/Waves";
import { siteConfig } from "@/config/site";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="top" className={styles.section} aria-labelledby="hero-title">
      <Waves variant="light" height={760} />

      <div className={styles.inner}>
        <div className={styles.content}>
          <h1 id="hero-title" className={styles.title}>
            Supporto psicologico online per chi è stanco di portare tutto da solo.
          </h1>
          <p className={styles.lead}>
            Agli occhi degli altri sei quello o quella che regge, che risolve, che c&apos;è sempre. Dentro, però, la
            tensione non si spegne mai.{" "}
            <strong>
              Un percorso psicologico ti aiuta a fermarti, capire cosa ti pesa e tornare a vivere con più leggerezza.
            </strong>
          </p>

          <div className={styles.actions}>
            <WhatsappButton message="booking">Voglio fare il primo passo</WhatsappButton>
            <ButtonLink href="#chi-sono" variant="outline">
              Conosci la psicologa
            </ButtonLink>
          </div>

          <p className={styles.note}>
            <strong>La prima consulenza è gratuita</strong> · Risposta entro 24 ore
            <br />
            In italiano, in Italia e all&apos;estero
          </p>
        </div>

        <figure className={styles.card}>
          {/* TODO: sostituire con <Image> e la foto di Francesca (alt descrittivo per la SEO). */}
          <PhotoPlaceholder label="[FOTO DI FRANCESCA]" />
          <figcaption className={styles.caption}>
            <span className={styles.captionName}>{siteConfig.name}</span>
            <span className={styles.captionRole}>
              {siteConfig.jobTitle} · Albo n. {siteConfig.alboNumber}
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
