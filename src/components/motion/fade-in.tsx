"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  /** Use mount animation instead of scroll-reveal — for above-the-fold content. */
  immediate?: boolean;
};

export function FadeIn({
  children,
  className,
  delay = 0,
  y = 10,
  immediate = false,
}: FadeInProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const motionProps = {
    className,
    initial: { opacity: 0, y, filter: "blur(3px)" },
    transition: { duration: 0.55, ease, delay },
  };

  if (immediate) {
    return (
      <motion.div {...motionProps} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      {...motionProps}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-56px" }}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  immediate?: boolean;
};

export function StaggerChildren({
  children,
  className,
  stagger = 0.07,
  immediate = false,
}: StaggerProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      {...(immediate ? { animate: "show" } : { whileInView: "show" })}
      viewport={immediate ? undefined : { once: true, margin: "-48px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 10, scale: 0.98 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.5, ease },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function HoverLift({ children, className }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      whileHover={{ y: -3, transition: { duration: 0.25, ease } }}
      transition={{ type: "spring", stiffness: 420, damping: 32 }}
    >
      {children}
    </motion.div>
  );
}
