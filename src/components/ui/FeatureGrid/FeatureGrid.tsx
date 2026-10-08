import { Icon } from "@/components/ui/Icon/Icon";
import type { Feature } from "@/content/types";
import styles from "./FeatureGrid.module.css";

interface FeatureGridProps {
  items: Feature[];
  /** Larghezza minima di una colonna prima di andare a capo. */
  minColumnWidth?: number;
}

export function FeatureGrid({ items, minColumnWidth = 300 }: FeatureGridProps) {
  return (
    <ul className={styles.grid} style={{ "--min-col": `${minColumnWidth}px` } as React.CSSProperties}>
      {items.map((item, index) => (
        // --i: posizione della card, utile per animazioni sfalsate definite dalle sezioni.
        <li key={item.title} className={styles.card} style={{ "--i": index } as React.CSSProperties}>
          <span className={styles.icon}>
            <Icon name={item.icon} />
          </span>
          <div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
