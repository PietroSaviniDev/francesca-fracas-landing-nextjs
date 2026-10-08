"use client";

import { useEffect, useState, type ReactNode } from "react";

interface ScrollAwareHeaderProps {
  className?: string;
  children: ReactNode;
}

/** <header> che espone data-scrolled="true" appena la pagina viene scrollata. */
export function ScrollAwareHeader({ className, children }: ScrollAwareHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > 8);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className={className} data-scrolled={isScrolled}>
      {children}
    </header>
  );
}
