"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function HeroWireframe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, -30]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 0.9]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
      style={{ perspective: "1200px", zIndex: 1 }}
    >
      {/* Outer glow */}
      <div className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-[radial-gradient(circle,rgba(0,209,255,0.08),transparent_60%)]" />

      <motion.div
        style={{ rotateX, rotateY, scale }}
        className="relative"
      >
        {/* 3D Wireframe Cube using pure CSS */}
        <div
          className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px]"
          style={{
            transformStyle: "preserve-3d",
            animation: "wireframe-spin 20s linear infinite",
          }}
        >
          {/* Cube faces */}
          {[
            { transform: "translateZ(140px)", md: "translateZ(190px)" },
            { transform: "translateZ(-140px) rotateY(180deg)", md: "translateZ(-190px) rotateY(180deg)" },
            { transform: "translateX(-140px) rotateY(-90deg)", md: "translateX(-190px) rotateY(-90deg)" },
            { transform: "translateX(140px) rotateY(90deg)", md: "translateX(190px) rotateY(90deg)" },
            { transform: "translateY(-140px) rotateX(90deg)", md: "translateY(-190px) rotateX(90deg)" },
            { transform: "translateY(140px) rotateX(-90deg)", md: "translateY(190px) rotateX(-90deg)" },
          ].map((face, i) => (
            <div
              key={i}
              className="absolute inset-0 w-[280px] h-[280px] md:w-[380px] md:h-[380px]"
              style={{
                transform: face.transform,
                transformStyle: "preserve-3d",
                border: "1px solid rgba(0, 209, 255, 0.12)",
                background: `linear-gradient(135deg, rgba(0,209,255,0.02), transparent)`,
                boxShadow: "inset 0 0 40px rgba(0,209,255,0.03)",
              }}
            >
              {/* Corner dots */}
              {[
                { top: -2, left: -2 },
                { top: -2, right: -2 },
                { bottom: -2, left: -2 },
                { bottom: -2, right: -2 },
              ].map((pos, j) => (
                <div
                  key={j}
                  className="absolute w-1 h-1 rounded-full bg-[#00D1FF]"
                  style={{
                    ...pos,
                    boxShadow: "0 0 6px rgba(0,209,255,0.6)",
                  }}
                />
              ))}

              {/* Cross lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.06 }}>
                <line x1="0" y1="0" x2="100%" y2="100%" stroke="#00D1FF" strokeWidth="0.5" />
                <line x1="100%" y1="0" x2="0" y2="100%" stroke="#00D1FF" strokeWidth="0.5" />
              </svg>
            </div>
          ))}

          {/* Inner core sphere */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full"
            style={{
              background: "radial-gradient(circle, #00D1FF, #00B88F)",
              boxShadow: "0 0 40px rgba(0,209,255,0.5), 0 0 80px rgba(0,209,255,0.2)",
              animation: "pulse-glow 3s ease-in-out infinite",
            }}
          />
        </div>

        {/* Orbital ring 1 */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] md:w-[460px] md:h-[460px] rounded-full border border-dashed"
          style={{
            borderColor: "rgba(0, 209, 255, 0.08)",
            animation: "spin-slow 30s linear infinite reverse",
          }}
        >
          <div
            className="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-[#00D1FF]"
            style={{ boxShadow: "0 0 10px rgba(0,209,255,0.8)" }}
          />
        </div>

        {/* Orbital ring 2 */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[540px] md:h-[540px] rounded-full border"
          style={{
            borderColor: "rgba(0, 184, 143, 0.06)",
            animation: "spin-slow 40s linear infinite",
            transform: "translate(-50%, -50%) rotateX(60deg)",
          }}
        >
          <div
            className="absolute -top-1 right-1/4 w-1.5 h-1.5 rounded-full bg-[#00B88F]"
            style={{ boxShadow: "0 0 8px rgba(0,184,143,0.8)" }}
          />
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes wireframe-spin {
          0%   { transform: rotateX(15deg) rotateY(0deg) rotateZ(0deg); }
          100% { transform: rotateX(15deg) rotateY(360deg) rotateZ(5deg); }
        }
      `}</style>
    </div>
  );
}
