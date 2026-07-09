import type { ReactNode } from "react";

type CardCorbelBorderProps = {
  children: ReactNode;
  className?: string;
};

/** Card wrapper with wooden corbel corner motifs (świdermajer). */
export function CardCorbelBorder({ children, className = "" }: CardCorbelBorderProps) {
  return (
    <div className={`relative ${className}`}>
      <svg
        className="pointer-events-none absolute left-0 top-0 h-10 w-10 text-[var(--wood-700)]"
        viewBox="0 0 40 40"
        aria-hidden
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          d="M4 36V8c0-4 8-4 12-4M4 36h12c4 0 8-4 8-8M4 36c8-2 12-6 16-12"
        />
      </svg>
      <svg
        className="pointer-events-none absolute right-0 top-0 h-10 w-10 -scale-x-100 text-[var(--wood-700)]"
        viewBox="0 0 40 40"
        aria-hidden
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          d="M4 36V8c0-4 8-4 12-4M4 36h12c4 0 8-4 8-8M4 36c8-2 12-6 16-12"
        />
      </svg>
      <svg
        className="pointer-events-none absolute bottom-0 left-0 h-10 w-10 -scale-y-100 text-[var(--wood-700)]"
        viewBox="0 0 40 40"
        aria-hidden
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          d="M4 36V8c0-4 8-4 12-4M4 36h12c4 0 8-4 8-8M4 36c8-2 12-6 16-12"
        />
      </svg>
      <svg
        className="pointer-events-none absolute bottom-0 right-0 h-10 w-10 -scale-x-100 -scale-y-100 text-[var(--wood-700)]"
        viewBox="0 0 40 40"
        aria-hidden
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          d="M4 36V8c0-4 8-4 12-4M4 36h12c4 0 8-4 8-8M4 36c8-2 12-6 16-12"
        />
      </svg>
      {children}
    </div>
  );
}
