"use client";

import { m, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

/** Trigger while section enters the viewport — visible movement, not finished off-screen. */
export const SCROLL_VIEWPORT = {
  once: true,
  amount: 0.18,
  margin: "0px 0px -8% 0px",
} as const;

export type RevealVariant =
  | "rise"
  | "left"
  | "right"
  | "scale"
  | "tilt-left"
  | "tilt-right"
  | "drop";

const ITEM_VARIANTS: Record<
  RevealVariant,
  {
    hidden: { opacity: number; x?: number; y?: number; scale?: number; rotate?: number };
    show: { opacity: number; x?: number; y?: number; scale?: number; rotate?: number };
  }
> = {
  rise: {
    hidden: { opacity: 0, y: 32, scale: 0.96 },
    show: { opacity: 1, y: 0, scale: 1 },
  },
  left: {
    hidden: { opacity: 0, x: -44, y: 16 },
    show: { opacity: 1, x: 0, y: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 44, y: 16 },
    show: { opacity: 1, x: 0, y: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.82, y: 24 },
    show: { opacity: 1, scale: 1, y: 0 },
  },
  "tilt-left": {
    hidden: { opacity: 0, rotate: -3, y: 28, x: -16 },
    show: { opacity: 1, rotate: 0, y: 0, x: 0 },
  },
  "tilt-right": {
    hidden: { opacity: 0, rotate: 3, y: 28, x: 16 },
    show: { opacity: 1, rotate: 0, y: 0, x: 0 },
  },
  drop: {
    hidden: { opacity: 0, y: -28 },
    show: { opacity: 1, y: 0 },
  },
};

function itemTransition(duration = 1) {
  return { duration, ease };
}

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
  immediate?: boolean;
};

export function FadeIn({
  children,
  className,
  delay = 0,
  variant = "rise",
  immediate = false,
}: FadeInProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const v = ITEM_VARIANTS[variant];

  if (immediate) {
    return (
      <m.div
        className={className}
        initial={v.hidden}
        animate={v.show}
        transition={{ ...itemTransition(1.05), delay }}
      >
        {children}
      </m.div>
    );
  }

  return (
    <m.div
      className={className}
      initial={v.hidden}
      whileInView={v.show}
      viewport={SCROLL_VIEWPORT}
      transition={{ ...itemTransition(1.05), delay }}
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
  stagger = 0.16,
  delayChildren = 0.1,
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

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
};

export function StaggerItem({ children, className, variant = "rise" }: StaggerItemProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const v = ITEM_VARIANTS[variant];

  return (
    <m.div
      className={className}
      variants={{
        hidden: v.hidden,
        show: { ...v.show, transition: itemTransition(0.95) },
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
      whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.3, ease } }}
      transition={{ type: "spring", stiffness: 340, damping: 26 }}
    >
      {children}
    </m.div>
  );
}

export function HoverTilt({ children, className }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      className={className}
      whileHover={{ y: -5, rotate: 0.6, transition: { duration: 0.28, ease } }}
    >
      {children}
    </m.div>
  );
}
