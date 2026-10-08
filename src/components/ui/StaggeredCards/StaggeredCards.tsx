import type { Feature } from "@/content/types";
import styles from "./StaggeredCards.module.css";

/** Sequenza di stili delle card, ripetuta se gli elementi sono di più. */
const VARIANTS = ["dark", "light", "glass", "dark"] as const;

interface StaggeredCardsProps {
  items: Feature[];
  /** Mostra il numero progressivo (01, 02, ...) in cima a ogni card. */
  numbered?: boolean;
}

/**
 * Card a stili alternati (scura, chiara, vetro) e sfalsate in altezza da desktop.
 * Il colore della card chiara si cambia con --card-light-bg sul contenitore.
 */
export function StaggeredCards({ items, numbered = true }: StaggeredCardsProps) {
  const List = numbered ? "ol" : "ul";

  return (
    <List className={`${styles.list} ${numbered ? "" : styles.unnumbered}`}>
      {items.map((item, index) => {
        const variant = VARIANTS[index % VARIANTS.length];

        return (
          // --i: posizione della card, utile per animazioni sfalsate definite dalle sezioni.
          <li
            key={item.title}
            className={`${styles.card} ${styles[variant]}`}
            style={{ "--i": index } as React.CSSProperties}
          >
            {numbered && (
              <span className={styles.number} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
            )}
            <div className={styles.body}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.text}>{item.text}</p>
            </div>
          </li>
        );
      })}
    </List>
  );
}
