"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionSeparator } from "@/components/ornaments/section-separator";

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
    <motion.div
      initial={{ opacity: 0, scaleX: 0.92 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true, margin: "-24px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <SectionSeparator className={className} variant={variant} />
    </motion.div>
  );
}
