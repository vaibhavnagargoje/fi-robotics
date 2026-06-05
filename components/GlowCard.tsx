"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "motion/react";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export default function GlowCard({
  children,
  className = "",
  glowColor = "0, 209, 255",
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden ${className}`}
      style={{
        background: "#0a0a0f",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Mouse-tracking glow */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(${glowColor}, 0.1), transparent 40%)`,
          }}
        />
      )}

      {/* Mouse-tracking border glow */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(${glowColor}, 0.15), transparent 40%)`,
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
            padding: "1px",
          }}
        />
      )}

      {/* Scan line on hover */}
      <div
        className="pointer-events-none absolute top-0 left-0 h-full w-full"
        style={{
          background: isHovered
            ? `linear-gradient(90deg, transparent, rgba(${glowColor}, 0.03), transparent)`
            : "none",
          animation: isHovered ? "scan-sweep 1.5s ease-out" : "none",
        }}
      />

      {/* Top light leak */}
      <div
        className="absolute top-0 left-0 right-0 h-px transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(${glowColor}, ${isHovered ? 0.5 : 0.15}), transparent)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
