"use client";

import { useEffect, useRef, useState, type ComponentPropsWithoutRef, type ReactNode } from "react";

type RevealTag = "section" | "div";

type RevealOnScrollProps = {
  as?: RevealTag;
  children: ReactNode;
  /**
   * Punto di attivazione. Il default fa partire l'animazione quando l'elemento
   * raggiunge il 60% dell'altezza dello schermo (poco sotto il centro).
   */
  rootMargin?: string;
} & Omit<ComponentPropsWithoutRef<"section">, "children">;

/**
 * Imposta data-revealed="true" una sola volta, quando l'elemento entra nel punto di attivazione.
 * Le animazioni vere e proprie si scrivono nel CSS di chi lo usa, ad es.:
 *   [data-revealed="true"] .titolo { opacity: 1; }
 */
export function RevealOnScroll({
  as: Tag = "div",
  children,
  rootMargin = "0px 0px -40% 0px",
  ...rest
}: RevealOnScrollProps) {
  const ref = useRef<HTMLElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <Tag ref={ref as never} data-revealed={isRevealed} {...rest}>
      {children}
    </Tag>
  );
}
