"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./TangledLine.module.css";

/**
 * Filo disegnato a mano che gira attorno alle card, annodandosi nei margini:
 * richiama i "nodi" emotivi che il percorso aiuta a sciogliere.
 */
const PATH = [
  // Margine sinistro: entra e fa un nodo.
  "M -20 260",
  "C 60 200, 110 300, 90 380",
  "C 70 460, 0 430, 30 380",
  // Sale e passa sopra le card, dietro il titolo.
  "C 70 320, 160 330, 200 250",
  "C 240 170, 380 150, 460 190",
  "C 540 230, 520 120, 600 130",
  "C 700 140, 780 230, 900 260",
  // Margine destro: secondo nodo.
  "C 1000 290, 980 400, 920 420",
  "C 860 440, 860 360, 920 370",
  // Scende e passa sotto le card, poi esce a sinistra.
  "C 990 380, 980 560, 930 700",
  "C 880 840, 720 920, 560 930",
  "C 420 940, 360 890, 300 930",
  "C 240 970, 300 990, 220 985",
  "C 140 980, 60 950, -20 965",
].join(" ");

export function TangledLine() {
  const ref = useRef<SVGSVGElement>(null);
  const [isDrawn, setIsDrawn] = useState(false);

  // Il disegno parte una sola volta, quando la sezione raggiunge il centro dello schermo.
  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsDrawn(true);
          observer.disconnect();
        }
      },
      // L'area osservata è ridotta a una linea orizzontale al centro della viewport.
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
    );

    observer.observe(svg);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      aria-hidden="true"
      viewBox="0 0 1000 1000"
      // Il disegno copre sempre tutta la sezione, senza tagli; la leggera
      // deformazione del tratto si confonde con l'effetto "a mano".
      preserveAspectRatio="none"
      className={`${styles.svg} ${isDrawn ? styles.drawn : ""}`}
    >
      {/* Due tratti quasi sovrapposti danno l'effetto matita. */}
      <path d={PATH} pathLength={1} className={styles.line} />
      <path d={PATH} pathLength={1} className={`${styles.line} ${styles.echo}`} />
    </svg>
  );
}
