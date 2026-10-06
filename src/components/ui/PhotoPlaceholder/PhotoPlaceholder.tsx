import styles from "./PhotoPlaceholder.module.css";

interface PhotoPlaceholderProps {
  label: string;
  ratio?: string;
  rounded?: boolean;
}

/** Segnaposto temporaneo: da sostituire con <Image> quando arrivano le foto. */
export function PhotoPlaceholder({ label, ratio = "1 / 1", rounded = false }: PhotoPlaceholderProps) {
  return (
    <div className={`${styles.placeholder} ${rounded ? styles.rounded : ""}`} style={{ aspectRatio: ratio }}>
      {label}
    </div>
  );
}
