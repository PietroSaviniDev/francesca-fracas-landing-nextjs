import { Icon } from "@/components/ui/Icon/Icon";
import { whatsappUrl } from "@/lib/whatsapp";
import styles from "./WhatsappFab.module.css";

/** Pulsante WhatsApp fisso in basso a destra, sempre raggiungibile. */
export function WhatsappFab() {
  return (
    <a
      href={whatsappUrl("booking")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Scrivimi su WhatsApp"
      className={styles.fab}
    >
      <Icon name="whatsapp" size={26} />
    </a>
  );
}
