import { ButtonLink, WhatsappButton } from "@/components/ui/ButtonLink/ButtonLink";
import { Blob, DotGrid, Ring } from "@/components/ui/Decor/Decor";
import { ParallaxContainer, type ParallaxItem } from "@/components/ui/Parallax/ParallaxContainer";
import { PointerTilt } from "@/components/ui/PointerTilt/PointerTilt";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder/PhotoPlaceholder";
import { Waves } from "@/components/ui/Waves/Waves";
import { siteConfig } from "@/config/site";
import { inPersonPlace } from "@/lib/inPerson";
import styles from "./Hero.module.css";

/** Elementi decorativi in parallax (visibili solo da desktop). */
const parallaxItems: ParallaxItem[] = [
  {
    id: "blob-card",
    element: <Blob size={360} color="var(--mist)" opacity={0.7} />,
    position: { top: "18%", right: "6%" },
    speed: 0.12,
  },
  {
    id: "ring-top",
    element: <Ring size={140} />,
    position: { top: "16%", right: "34%" },
    speed: -0.2,
  },
  {
    id: "dots-bottom",
    element: <DotGrid size={120} />,
    position: { bottom: "10%", left: "4%" },
    speed: 0.25,
  },
];

export function Hero() {
  return (
    <section id="top" className={styles.section} aria-labelledby="hero-title">
      <Waves variant="light" height={760} />

      <ParallaxContainer items={parallaxItems}>
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
              In italiano, online ovunque e di persona {inPersonPlace}
            </p>
          </div>

          {/* La card si inclina seguendo il mouse sull'hero (solo desktop). */}
          <PointerTilt as="figure" className={styles.card}>
            {/* TODO: sostituire con <Image> e la foto di Francesca (alt descrittivo per la SEO). */}
            <PhotoPlaceholder label="[FOTO DI FRANCESCA]" />
            <figcaption className={styles.caption}>
              <span className={styles.captionName}>{siteConfig.name}</span>
              <span className={styles.captionRole}>
                {siteConfig.jobTitle} · Albo n. {siteConfig.alboNumber}
              </span>
            </figcaption>
          </PointerTilt>
        </div>
      </ParallaxContainer>
    </section>
  );
}
