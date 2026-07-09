"use client";

import { m, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

/** Start reveal while section is still below the fold — user sees the full motion while scrolling. */
export const SCROLL_VIEWPORT = {
  once: true,
  amount: 0.12,
  margin: "0px 0px 22% 0px",
} as const;

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  /** Use mount animation instead of scroll-reveal — hero / above-the-fold only. */
  immediate?: boolean;
};

export function FadeIn({
  children,
  className,
  delay = 0,
  y = 14,
  immediate = false,
}: FadeInProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const motionProps = {
    className,
    initial: { opacity: 0, y },
    transition: { duration: 0.95, ease, delay },
  };

  if (immediate) {
    return (
      <m.div {...motionProps} animate={{ opacity: 1, y: 0 }}>
        {children}
      </m.div>
    );
  }

  return (
    <m.div
      {...motionProps}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={SCROLL_VIEWPORT}
    >
      {children}
    </m.div>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  immediate?: boolean;
};

export function StaggerChildren({
  children,
  className,
  stagger = 0.14,
  delayChildren = 0.08,
  immediate = false,
}: StaggerProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      className={className}
      initial="hidden"
      {...(immediate ? { animate: "show" } : { whileInView: "show" })}
      viewport={immediate ? undefined : SCROLL_VIEWPORT}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren } },
      }}
    >
      {children}
    </m.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 14 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.9, ease },
        },
      }}
    >
      {children}
    </m.div>
  );
}

export function HoverLift({ children, className }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      className={className}
      whileHover={{ y: -3, transition: { duration: 0.28, ease } }}
      transition={{ type: "spring", stiffness: 380, damping: 30 }}
    >
      {children}
    </m.div>
  );
}
