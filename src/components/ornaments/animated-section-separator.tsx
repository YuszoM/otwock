"use client";

import { m, useReducedMotion } from "framer-motion";
import { SectionSeparator } from "@/components/ornaments/section-separator";
import { SCROLL_VIEWPORT } from "@/components/motion/fade-in";

type AnimatedSectionSeparatorProps = {
  className?: string;
  variant?: "default" | "on-forest";
  /** How the divider reveals on scroll */
  motion?: "expand" | "rise" | "fade";
};

const MOTION_PRESETS = {
  expand: {
    initial: { opacity: 0.4, scaleX: 0.72 },
    show: { opacity: 1, scaleX: 1 },
    transition: { duration: 1.15, ease: [0.22, 1, 0.36, 1] as const },
  },
  rise: {
    initial: { opacity: 0, y: 20, scaleX: 0.9 },
    show: { opacity: 1, y: 0, scaleX: 1 },
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const },
  },
  fade: {
    initial: { opacity: 0, scale: 0.98 },
    show: { opacity: 1, scale: 1 },
    transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] as const },
  },
} as const;

/** Section divider with a calm reveal — fits therapeutic / pedagogical tone. */
export function AnimatedSectionSeparator({
  className = "",
  variant = "default",
  motion: motionStyle = "expand",
}: AnimatedSectionSeparatorProps) {
  const reduceMotion = useReducedMotion();
  const preset = MOTION_PRESETS[motionStyle];

  if (reduceMotion) {
    return <SectionSeparator className={className} variant={variant} />;
  }

  return (
    <m.div
      initial={preset.initial}
      whileInView={preset.show}
      viewport={SCROLL_VIEWPORT}
      transition={preset.transition}
    >
      <SectionSeparator className={className} variant={variant} />
    </m.div>
  );
}
