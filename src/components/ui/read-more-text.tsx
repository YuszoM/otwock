"use client";

import { useId, useState } from "react";

type ReadMoreTextProps = {
  children: React.ReactNode;
  className?: string;
  /** When true, long text is always visible from `lg` breakpoint up. */
  collapseOnMobile?: boolean;
};

export function ReadMoreText({
  children,
  className = "",
  collapseOnMobile = true,
}: ReadMoreTextProps) {
  const [expanded, setExpanded] = useState(false);
  const regionId = useId();

  if (!collapseOnMobile) {
    return <div className={className}>{children}</div>;
  }

  return (
    <>
      <div className={`hidden lg:block ${className}`}>{children}</div>
      <div className="lg:hidden">
        {expanded ? (
          <div id={regionId} className={className}>
            {children}
          </div>
        ) : null}
        <button
          type="button"
          className="mt-2 text-sm font-semibold text-[var(--pine-700)] underline-offset-4 hover:underline"
          aria-expanded={expanded}
          aria-controls={regionId}
          onClick={() => setExpanded((v) => !v)}
        >
          {expanded ? "Zwiń" : "Czytaj więcej"}
        </button>
      </div>
    </>
  );
}
