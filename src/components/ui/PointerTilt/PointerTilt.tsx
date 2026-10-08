"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "./PointerTilt.module.css";

/** Solo dispositivi con mouse, da desktop, senza preferenza "riduci movimento". */
const ENABLED_QUERY =
  "(min-width: 1024px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)";

interface PointerTiltProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "figure";
  /** Inclinazione massima in gradi. */
  maxTilt?: number;
}

/**
 * Inclina l'elemento in 3D seguendo il mouse.
 * Il movimento del mouse viene ascoltato su tutta la <section> che contiene l'elemento.
 */
export function PointerTilt({ children, className = "", as: Tag = "div", maxTilt = 8 }: PointerTiltProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const area = element.closest("section") ?? element;
    const media = window.matchMedia(ENABLED_QUERY);
    let frame = 0;
    let pointer = { x: 0, y: 0 };

    const apply = () => {
      frame = 0;
      const rect = element.getBoundingClientRect();
      // Posizione del mouse rispetto al centro della card, normalizzata e limitata a [-1, 1].
      const clamp = (value: number) => Math.max(-1, Math.min(1, value));
      const x = clamp((pointer.x - (rect.left + rect.width / 2)) / (rect.width * 1.5));
      const y = clamp((pointer.y - (rect.top + rect.height / 2)) / (rect.height * 1.5));

      element.style.setProperty("--tilt-x", `${(-y * maxTilt).toFixed(2)}deg`);
      element.style.setProperty("--tilt-y", `${(x * maxTilt).toFixed(2)}deg`);
    };

    const onMove = (event: Event) => {
      const { clientX, clientY } = event as PointerEvent;
      pointer = { x: clientX, y: clientY };
      if (!frame) frame = requestAnimationFrame(apply);
    };

    const reset = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      element.style.removeProperty("--tilt-x");
      element.style.removeProperty("--tilt-y");
    };

    const start = () => {
      area.addEventListener("pointermove", onMove);
      area.addEventListener("pointerleave", reset);
    };

    const stop = () => {
      area.removeEventListener("pointermove", onMove);
      area.removeEventListener("pointerleave", reset);
      reset();
    };

    const onMediaChange = () => (media.matches ? start() : stop());

    if (media.matches) start();
    media.addEventListener("change", onMediaChange);

    return () => {
      stop();
      media.removeEventListener("change", onMediaChange);
    };
  }, [maxTilt]);

  return (
    <Tag ref={ref as never} className={`${styles.tilt} ${className}`}>
      {children}
    </Tag>
  );
}
