import { Fragment, type ReactNode } from "react";
import { siteConfig } from "@/config/site";
import styles from "./BrandName.module.css";

const [before, after] = siteConfig.brand.split("|");

/** Il nome del brand con la "|" resa ben distinguibile da una "l". */
export function BrandName() {
  return (
    <span className={styles.brand}>
      {before}
      <span className={styles.bar} aria-hidden="true">
        |
      </span>
      {after}
    </span>
  );
}

/** Sostituisce ogni occorrenza del brand in un testo con <BrandName />. */
export function withBrand(text: string): ReactNode {
  const parts = text.split(siteConfig.brand);
  return parts.map((part, index) => (
    <Fragment key={index}>
      {part}
      {index < parts.length - 1 && <BrandName />}
    </Fragment>
  ));
}
