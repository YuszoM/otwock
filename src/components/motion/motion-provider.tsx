"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import type { ReactNode } from "react";

/** Loads a minimal framer-motion feature set after hydration. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion strict features={domAnimation}>
      {children}
    </LazyMotion>
  );
}
