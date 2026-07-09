import type { ReactNode } from "react";

type SectionEyebrowProps = {
  children: ReactNode;
  className?: string;
};
export function SectionEyebrow({ children, className = "" }: SectionEyebrowProps) {
  return (
    <p
      className={`section-eyebrow text-sm font-semibold uppercase tracking-[0.14em] text-[var(--lilac-500)] ${className}`}
    >
      {children}
    </p>
  );
}
