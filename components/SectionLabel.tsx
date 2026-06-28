// FILE: components/SectionLabel.tsx
// PURPOSE: Reusable section header — monospace eyebrow label + optional sub-copy
// NEW DEPS: none

"use client";

import { motion, useReducedMotion } from "motion/react";

interface SectionLabelProps {
  eyebrow: string;
  className?: string;
}

export default function SectionLabel({ eyebrow, className = "" }: SectionLabelProps) {
  const reduced = useReducedMotion();

  return (
    <motion.span
      initial={reduced ? false : { opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`block text-[11px] font-mono tracking-[0.22em] uppercase text-[#3b82f6] mb-4 ${className}`}
    >
      {eyebrow}
    </motion.span>
  );
}
