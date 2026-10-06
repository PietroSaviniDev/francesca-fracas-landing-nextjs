import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  label: string;
  title: string;
  /** Id del titolo, da collegare alla sezione con aria-labelledby. */
  id?: string;
  tone?: "default" | "inverted";
  align?: "center" | "left";
}

export function SectionHeader({ label, title, id, tone = "default", align = "center" }: SectionHeaderProps) {
  return (
    <header className={`${styles.header} ${styles[align]} ${styles[tone]}`}>
      <span className={styles.label}>{label}</span>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
    </header>
  );
}
