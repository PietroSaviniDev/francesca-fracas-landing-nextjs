"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import styles from "./ParallaxContainer.module.css";

/** Il parallax è attivo solo da desktop e solo se l'utente non ha chiesto meno movimento. */
const ENABLED_QUERY = "(min-width: 1024px) and (prefers-reduced-motion: no-preference)";

export interface ParallaxItem {
  /** Chiave univoca dell'elemento. */
  id: string;
  /** Elemento decorativo da mostrare (es. <Blob />, <Ring />, un'immagine...). */
  element: ReactNode;
  /** Posizione rispetto al contenitore, in qualsiasi unità CSS ("10%", "-40px", ...). */
  position: Partial<Record<"top" | "right" | "bottom" | "left", string>>;
  /**
   * Velocità di spostamento rispetto allo scroll.
   * 0 = fermo, 0.2 = lento, valori negativi = direzione opposta.
   */
  speed?: number;
  /** Sotto il contenuto per default; un valore positivo lo porta sopra. */
  zIndex?: number;
}

interface ParallaxContainerProps {
  items: ParallaxItem[];
  children: ReactNode;
  className?: string;
}

/**
 * Contenitore con elementi decorativi in parallax.
 * Su mobile gli elementi sono nascosti e lo scroll non viene ascoltato.
 */
export function ParallaxContainer({ items, children, className = "" }: ParallaxContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const media = window.matchMedia(ENABLED_QUERY);
    let frame = 0;

    // Distanza tra il centro del contenitore e il centro dello schermo: 0 quando è centrato.
    const update = () => {
      frame = 0;
      const rect = container.getBoundingClientRect();
      const isVisible = rect.bottom > 0 && rect.top < window.innerHeight;
      if (!isVisible) return;

      const offset = window.innerHeight / 2 - (rect.top + rect.height / 2);
      container.style.setProperty("--parallax-scroll", offset.toFixed(1));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    const start = () => {
      update();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
    };

    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      container.style.removeProperty("--parallax-scroll");
    };

    // Attiva/disattiva se la finestra cambia dimensione o preferenza di movimento.
    const onMediaChange = () => (media.matches ? start() : stop());

    if (media.matches) start();
    media.addEventListener("change", onMediaChange);

    return () => {
      stop();
      media.removeEventListener("change", onMediaChange);
    };
  }, []);

  return (
    <div ref={containerRef} className={`${styles.container} ${className}`}>
      {items.map((item) => (
        <div
          key={item.id}
          aria-hidden="true"
          className={styles.item}
          style={
            {
              ...item.position,
              zIndex: item.zIndex ?? 0,
              "--parallax-speed": item.speed ?? 0.15,
            } as CSSProperties
          }
        >
          {item.element}
        </div>
      ))}

      <div className={styles.content}>{children}</div>
    </div>
  );
}
