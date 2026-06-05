"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

interface AnimatedCounterProps {
  target: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  target,
  duration = 2000,
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [display, setDisplay] = useState(extractPrefix(target));

  // Extract numeric part and suffix
  const { num, prefix, suffix, decimals } = parseTarget(target);

  useEffect(() => {
    if (!isInView) return;

    const startTime = performance.now();
    let animFrame: number;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = num * eased;

      setDisplay(
        prefix +
          (decimals > 0 ? current.toFixed(decimals) : Math.floor(current).toString()) +
          suffix
      );

      if (progress < 1) {
        animFrame = requestAnimationFrame(animate);
      }
    };

    animFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrame);
  }, [isInView, num, prefix, suffix, decimals, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

function extractPrefix(target: string): string {
  const match = target.match(/^([^0-9]*)/);
  return match ? match[1] : "";
}

function parseTarget(target: string) {
  const match = target.match(/^([^0-9]*)([0-9]+\.?[0-9]*)(.*)$/);
  if (!match) return { num: 0, prefix: "", suffix: target, decimals: 0 };
  const numStr = match[2];
  const dotIndex = numStr.indexOf(".");
  return {
    num: parseFloat(numStr),
    prefix: match[1],
    suffix: match[3],
    decimals: dotIndex >= 0 ? numStr.length - dotIndex - 1 : 0,
  };
}
