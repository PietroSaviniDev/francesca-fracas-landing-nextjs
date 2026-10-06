import type { ReactNode } from "react";
import { Icon } from "@/components/ui/Icon/Icon";
import { whatsappUrl, type WhatsappMessage } from "@/lib/whatsapp";
import styles from "./ButtonLink.module.css";

type Variant = "primary" | "outline" | "light" | "pill";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  icon?: ReactNode;
}

export function ButtonLink({ href, children, variant = "primary", external, icon }: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={`${styles.button} ${styles[variant]}`}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {icon}
      {children}
    </a>
  );
}

interface WhatsappButtonProps {
  children: ReactNode;
  message?: WhatsappMessage;
  variant?: Variant;
}

/** CTA principale del sito: apre WhatsApp con un messaggio precompilato. */
export function WhatsappButton({ children, message = "booking", variant = "primary" }: WhatsappButtonProps) {
  return (
    <ButtonLink href={whatsappUrl(message)} variant={variant} external icon={<Icon name="whatsapp" size={18} />}>
      {children}
    </ButtonLink>
  );
}
