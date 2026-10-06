import type { ReactNode } from "react";

/** Icone a tratto (stile outline, 24x24). */
const strokeIcons = {
  head: (
    <>
      <path d="M9 21v-3.5a6.5 6.5 0 1 1 7-2.8V21" />
      <path d="M11 8.5a1.8 1.8 0 1 1 2.2 1.8c-.7.2-1.2.8-1.2 1.5v.7" />
    </>
  ),
  scale: <path d="M12 3v4M5 7h14M7 7l-3 7h6zM17 7l-3 7h6zM9 21h6M12 7v14" />,
  people: (
    <>
      <circle cx="8.5" cy="8" r="3" />
      <circle cx="16" cy="9" r="2.5" />
      <path d="M3 20c0-3.2 2.5-5.5 5.5-5.5S14 16.8 14 20M14.5 14.6c2.6 0 4.5 2.1 4.5 5" />
    </>
  ),
  battery: (
    <>
      <rect x="3" y="7" width="16" height="10" rx="2" />
      <path d="M21 11v2" />
      <path d="M6 10v4" />
    </>
  ),
  person: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
    </>
  ),
  pulse: <path d="M3 12h4l2-6 4 12 2-6h6" />,
  teen: (
    <>
      <circle cx="12" cy="7" r="3.2" />
      <path d="M6 21v-2a6 6 0 0 1 12 0v2" />
    </>
  ),
  home: (
    <>
      <path d="M3 10l9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
      <path d="M9 21v-8h6v8" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
} satisfies Record<string, ReactNode>;

/** Icone piene (fill). */
const fillIcons = {
  whatsapp: (
    <>
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.4.1-.2 0-.3 0-.5s-.6-1.5-.9-2c-.2-.5-.5-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 2-1.4.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3z" />
      <path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.2L2 22l4.9-1.3c1.4.8 3.1 1.2 4.9 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3C4.1 14.7 3.6 13.4 3.6 12c0-4.6 3.7-8.4 8.4-8.4s8.4 3.7 8.4 8.4-3.8 8.4-8.4 8.4z" />
    </>
  ),
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof strokeIcons | keyof typeof fillIcons;

interface IconProps {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export function Icon({ name, size = 22, strokeWidth = 1.5, className }: IconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    className,
    "aria-hidden": true,
  } as const;

  if (name in fillIcons) {
    return (
      <svg {...common} fill="currentColor">
        {fillIcons[name as keyof typeof fillIcons]}
      </svg>
    );
  }

  return (
    <svg
      {...common}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {strokeIcons[name as keyof typeof strokeIcons]}
    </svg>
  );
}
