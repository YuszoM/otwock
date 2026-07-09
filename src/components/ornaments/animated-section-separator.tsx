"use client";

import { m, useReducedMotion } from "framer-motion";
import { SectionSeparator } from "@/components/ornaments/section-separator";
import { SCROLL_VIEWPORT } from "@/components/motion/fade-in";

type AnimatedSectionSeparatorProps = {
  className?: string;
  variant?: "default" | "on-forest";
};

/** Section divider with a calm reveal — fits therapeutic / pedagogical tone. */
export function AnimatedSectionSeparator({
  className = "",
  variant = "default",
}: AnimatedSectionSeparatorProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <SectionSeparator className={className} variant={variant} />;
  }

  return (
    <m.div
      initial={{ opacity: 0, scaleX: 0.88 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={SCROLL_VIEWPORT}
      transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <SectionSeparator className={className} variant={variant} />
    </m.div>
  );
}
