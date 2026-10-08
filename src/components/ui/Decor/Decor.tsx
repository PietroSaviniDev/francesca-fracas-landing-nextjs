import type { CSSProperties } from "react";
import styles from "./Decor.module.css";

/**
 * Forme decorative pensate per il ParallaxContainer.
 * I colori accettano qualsiasi valore CSS, preferibilmente i token (es. "var(--slate)").
 */

interface ShapeProps {
  /** Dimensione in px. */
  size: number;
  color?: string;
  opacity?: number;
}

/** Macchia morbida e sfocata. */
export function Blob({ size, color = "var(--mist)", opacity = 0.6 }: ShapeProps) {
  return <span className={styles.blob} style={{ width: size, height: size, background: color, opacity }} />;
}

/** Cerchio a contorno sottile. */
export function Ring({ size, color = "var(--slate)", opacity = 0.35 }: ShapeProps) {
  return <span className={styles.ring} style={{ width: size, height: size, borderColor: color, opacity }} />;
}

/** Griglia di puntini. */
export function DotGrid({ size, color = "var(--slate)", opacity = 0.35 }: ShapeProps) {
  return (
    <span
      className={styles.dots}
      style={{ width: size, height: size, opacity, "--dot-color": color } as CSSProperties}
    />
  );
}
