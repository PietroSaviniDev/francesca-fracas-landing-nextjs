import { DARK_WAVES, LIGHT_WAVES } from "./paths";
import styles from "./Waves.module.css";

const variants = {
  /** Onde bianche su fondo chiaro (hero e CTA finale). */
  light: { paths: LIGHT_WAVES, width: 1440, strokeWidth: 16, className: styles.light },
  /** Onde appena accennate su fondo scuro (box consulenza gratuita). */
  dark: { paths: DARK_WAVES, width: 1200, strokeWidth: 14, className: styles.dark },
};

interface WavesProps {
  variant: keyof typeof variants;
  /** Altezza del viewBox: determina quante onde sono visibili. */
  height: number;
}

/** Sfondo decorativo a onde, posizionato in assoluto sul contenitore padre. */
export function Waves({ variant, height }: WavesProps) {
  const { paths, width, strokeWidth, className } = variants[variant];

  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid slice"
      className={`${styles.waves} ${className}`}
    >
      <g fill="none" strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round">
        {paths.map((d, index) => (
          // --i sfasa l'animazione di ogni onda (vedi Waves.module.css).
          <path key={d} d={d} style={{ "--i": index } as React.CSSProperties} />
        ))}
      </g>
    </svg>
  );
}
