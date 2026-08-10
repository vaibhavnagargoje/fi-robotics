"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { BrainCircuit, Bot, ScanLine, ArrowDown, RefreshCw } from "lucide-react";
import VideoFeed from "@/components/ui/VideoFeed";

/* ─────────────────────────────────────────────────────────────
   3 Clean, Minimal Steps
───────────────────────────────────────────────────────────── */
const steps = [
  {
    step: "01",
    eyebrow: "Human input",
    title: "Capture demonstrations",
    description:
      "Operators use sensor-equipped gloves to record the dexterous decisions and movements real tasks require.",
    icon: ScanLine,
    hasVideo: true,
  },
  {
    step: "02",
    eyebrow: "Model layer",
    title: "Train the model",
    description:
      "Multi-modal models turn human demonstrations into policies that can reason about contact, motion and intent.",
    icon: BrainCircuit,
    hasVideo: false,
  },
  {
    step: "03",
    eyebrow: "Production layer",
    title: "Deploy and learn",
    description:
      "Robots execute in real environments, revealing edge cases that become the next generation of training data.",
    icon: Bot,
    hasVideo: false,
  },
] as const;

export default function FlywheelSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Dynamic SVG path state
  const [paths, setPaths] = useState({
    path12: "M 480 180 C 580 180, 640 180, 740 180",
    path23: "M 970 290 C 970 420, 840 480, 720 480",
    path31: "M 360 480 C 240 480, 240 340, 240 280",
  });

  // Port refs
  const p1OutRef = useRef<HTMLDivElement>(null);
  const p1InRef = useRef<HTMLDivElement>(null);
  const p2InRef = useRef<HTMLDivElement>(null);
  const p2OutRef = useRef<HTMLDivElement>(null);
  const p3InRef = useRef<HTMLDivElement>(null);
  const p3OutRef = useRef<HTMLDivElement>(null);

  const updatePaths = useCallback(() => {
    if (!containerRef.current) return;
    const cRect = containerRef.current.getBoundingClientRect();
    if (cRect.width === 0) return;

    const getCenter = (el: HTMLElement | null) => {
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return {
        x: r.left + r.width / 2 - cRect.left,
        y: r.top + r.height / 2 - cRect.top,
      };
    };

    const p1Out = getCenter(p1OutRef.current);
    const p1In = getCenter(p1InRef.current);
    const p2In = getCenter(p2InRef.current);
    const p2Out = getCenter(p2OutRef.current);
    const p3In = getCenter(p3InRef.current);
    const p3Out = getCenter(p3OutRef.current);

    if (p1Out && p2In && p2Out && p3In && p3Out && p1In) {
      // 01 -> 02: Horizontal smooth S-curve
      const dx12 = p2In.x - p1Out.x;
      const path12 = `M ${p1Out.x} ${p1Out.y} C ${p1Out.x + dx12 * 0.5} ${p1Out.y}, ${p2In.x - dx12 * 0.5} ${p2In.y}, ${p2In.x} ${p2In.y}`;

      // 02 -> 03: Downward sweeping curve to bottom card
      const dy23 = p3In.y - p2Out.y;
      const path23 = `M ${p2Out.x} ${p2Out.y} C ${p2Out.x} ${p2Out.y + dy23 * 0.6}, ${p3In.x + 80} ${p3In.y}, ${p3In.x} ${p3In.y}`;

      // 03 -> 01: Return loop sweeping left and up to bottom of card 1
      const dy31 = p3Out.y - p1In.y;
      const path31 = `M ${p3Out.x} ${p3Out.y} C ${p3Out.x - 80} ${p3Out.y}, ${p1In.x} ${p1In.y + dy31 * 0.6}, ${p1In.x} ${p1In.y}`;

      setPaths({ path12, path23, path31 });
    }
  }, []);

  useEffect(() => {
    updatePaths();
    const timer = setTimeout(updatePaths, 150);
    const timer2 = setTimeout(updatePaths, 600);

    const ro = new ResizeObserver(updatePaths);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", updatePaths);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      ro.disconnect();
      window.removeEventListener("resize", updatePaths);
    };
  }, [updatePaths]);

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#090c0a] py-20 md:py-28">
      {/* Animation Styles */}
      <style jsx>{`
        @keyframes dashFlow {
          from {
            stroke-dashoffset: 40;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        .flow-line-anim {
          animation: dashFlow 1.8s linear infinite;
        }
      `}</style>

      {/* Subtle Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundSize: "32px 32px",
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        

        {/* Desktop Circular Flowchart Layout (>= xl) */}
        <div
          ref={containerRef}
          className="relative mt-4 hidden min-h-[580px] select-none xl:block"
        >
          {/* SVG Connector Streams */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 size-full overflow-visible z-0"
            fill="none"
          >
            {/* Path 1 -> 2 */}
            <g>
              <path d={paths.path12} stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
              <path
                d={paths.path12}
                stroke="#8bb8d8"
                strokeWidth={activeStep === 0 || activeStep === 1 ? "2.5" : "1.75"}
                strokeDasharray="6 6"
                className="flow-line-anim"
                opacity={activeStep === 0 || activeStep === 1 ? "1" : "0.7"}
              />
              <circle r="3" fill="#ffffff" opacity="0.95">
                <animateMotion dur="2.2s" repeatCount="indefinite" path={paths.path12} />
              </circle>
            </g>

            {/* Path 2 -> 3 */}
            <g>
              <path d={paths.path23} stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
              <path
                d={paths.path23}
                stroke="#8bb8d8"
                strokeWidth={activeStep === 1 || activeStep === 2 ? "2.5" : "1.75"}
                strokeDasharray="6 6"
                className="flow-line-anim"
                opacity={activeStep === 1 || activeStep === 2 ? "1" : "0.7"}
              />
              <circle r="3" fill="#ffffff" opacity="0.95">
                <animateMotion dur="2.4s" repeatCount="indefinite" path={paths.path23} />
              </circle>
            </g>

            {/* Path 3 -> 1 (Loop Return) */}
            <g>
              <path d={paths.path31} stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
              <path
                d={paths.path31}
                stroke="#8bb8d8"
                strokeWidth={activeStep === 2 || activeStep === 0 ? "2.5" : "1.75"}
                strokeDasharray="6 6"
                className="flow-line-anim"
                opacity={activeStep === 2 || activeStep === 0 ? "1" : "0.7"}
              />
              <circle r="3" fill="#ffffff" opacity="0.95">
                <animateMotion dur="2.8s" repeatCount="indefinite" path={paths.path31} />
              </circle>
            </g>
          </svg>

          {/* ── CARD 01: Capture Demonstrations (Top-Left) ── */}
          <div
            className="absolute top-0 left-0 w-[470px] z-10 transition-transform duration-200 hover:-translate-y-0.5"
            onMouseEnter={() => setActiveStep(0)}
            onMouseLeave={() => setActiveStep(null)}
          >
            {/* Out Port: Right edge */}
            <div
              ref={p1OutRef}
              className="absolute top-1/2 -translate-y-1/2 -right-2 z-20 flex size-4 items-center justify-center rounded-full border border-[#8bb8d8] bg-[#090c0a] shadow-[0_0_8px_#8bb8d8]"
            >
              <div className="size-1 rounded-full bg-white" />
            </div>
            {/* In Port: Bottom edge */}
            <div
              ref={p1InRef}
              className="absolute bottom-0 left-16 translate-y-1/2 z-20 flex size-4 items-center justify-center rounded-full border border-[#8bb8d8] bg-[#090c0a] shadow-[0_0_8px_#8bb8d8]"
            >
              <div className="size-1 rounded-full bg-[#8bb8d8]" />
            </div>

            <MinimalCard step={steps[0]} isActive={activeStep === 0} />
          </div>

          {/* ── CARD 02: Train the Model (Top-Right) ──────── */}
          <div
            className="absolute top-6 right-0 w-[470px] z-10 transition-transform duration-200 hover:-translate-y-0.5"
            onMouseEnter={() => setActiveStep(1)}
            onMouseLeave={() => setActiveStep(null)}
          >
            {/* In Port: Left edge */}
            <div
              ref={p2InRef}
              className="absolute top-1/2 -translate-y-1/2 -left-2 z-20 flex size-4 items-center justify-center rounded-full border border-[#8bb8d8] bg-[#090c0a] shadow-[0_0_8px_#8bb8d8]"
            >
              <div className="size-1 rounded-full bg-[#8bb8d8]" />
            </div>
            {/* Out Port: Bottom edge */}
            <div
              ref={p2OutRef}
              className="absolute bottom-0 right-16 translate-y-1/2 z-20 flex size-4 items-center justify-center rounded-full border border-[#8bb8d8] bg-[#090c0a] shadow-[0_0_8px_#8bb8d8]"
            >
              <div className="size-1 rounded-full bg-white" />
            </div>

            <MinimalCard step={steps[1]} isActive={activeStep === 1} />
          </div>

          {/* ── CARD 03: Deploy and Learn (Bottom-Center) ─── */}
          <div
            className="absolute bottom-0 left-[50%] -translate-x-1/2 w-[520px] z-10 transition-transform duration-200 hover:-translate-y-0.5"
            onMouseEnter={() => setActiveStep(2)}
            onMouseLeave={() => setActiveStep(null)}
          >
            {/* In Port: Right edge */}
            <div
              ref={p3InRef}
              className="absolute top-1/2 -translate-y-1/2 -right-2 z-20 flex size-4 items-center justify-center rounded-full border border-[#8bb8d8] bg-[#090c0a] shadow-[0_0_8px_#8bb8d8]"
            >
              <div className="size-1 rounded-full bg-[#8bb8d8]" />
            </div>
            {/* Out Port: Left edge */}
            <div
              ref={p3OutRef}
              className="absolute top-1/2 -translate-y-1/2 -left-2 z-20 flex size-4 items-center justify-center rounded-full border border-[#8bb8d8] bg-[#090c0a] shadow-[0_0_8px_#8bb8d8]"
            >
              <div className="size-1 rounded-full bg-white" />
            </div>

            <MinimalCard step={steps[2]} isActive={activeStep === 2} />
          </div>
        </div>

        {/* Mobile View (< xl) */}
        <div className="mt-8 space-y-3 xl:hidden">
          {steps.map((step, idx) => (
            <div key={step.step}>
              <MinimalCard step={step} isActive={false} />
              {idx < steps.length - 1 ? (
                <div className="flex items-center gap-3 py-2 px-4">
                  <span className="h-4 w-px bg-[#8bb8d8]/40" />
                  <ArrowDown className="size-3.5 text-[#8bb8d8]" />
                  <span className="font-mono text-[9px] text-[#aab3a7] uppercase tracking-wider">
                    {idx === 0 ? "Feed to model" : "Deploy to robots"}
                  </span>
                </div>
              ) : (
                <div className="mt-4 flex items-center gap-3 rounded-md border border-[#8bb8d8]/30 bg-[#8bb8d8]/10 p-3.5">
                  <RefreshCw className="size-4 shrink-0 text-[#8bb8d8] animate-[spin_8s_linear_infinite]" />
                  <p className="font-mono text-[10px] text-[#f1f5ec]">
                    Continuous Loop: Real-world edge cases stream back to training data.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   Minimal & Clean Card Component
───────────────────────────────────────────────────────────── */
function MinimalCard({
  step,
  isActive = false,
}: {
  step: (typeof steps)[number];
  isActive?: boolean;
}) {
  const Icon = step.icon;

  return (
    <article
      className={`group relative overflow-hidden rounded-lg border transition-all duration-300 ${
        isActive
          ? "border-[#8bb8d8] bg-[#111713] shadow-[0_0_24px_rgba(139,184,216,0.15)]"
          : "border-white/15 bg-[#0d120e] hover:border-[#8bb8d8]/50 hover:bg-[#0f1510]"
      }`}
    >
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5 bg-gradient-to-r from-white/[0.02] to-transparent">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] font-semibold text-[#8bb8d8]">{step.step}</span>
          <span className="size-1 bg-white/20" />
          <span className="font-mono text-[9px] tracking-[0.16em] text-[#aab3a7] uppercase">
            {step.eyebrow}
          </span>
        </div>
        <Icon
          className={`size-4 text-[#8bb8d8] transition-transform duration-300 ${
            isActive ? "scale-110 text-white" : "group-hover:scale-110"
          }`}
          strokeWidth={1.5}
        />
      </div>

      {/* Video preview for step 01 */}
      {step.hasVideo && (
        <div className="relative aspect-[16/8] overflow-hidden border-b border-white/10">
          <VideoFeed
            src="/src-videos/optimized/Recording-Treats.mp4"
            label="Human demonstration"
            showLabel={false}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-2.5 left-2.5 flex items-center gap-2 border border-white/25 bg-[#090c0a]/90 px-2.5 py-1 backdrop-blur-sm">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#34d399]" />
            <span className="font-mono text-[8px] tracking-[0.14em] text-[#f1f5ec] uppercase font-medium">
              Live Teleoperation
            </span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-5">
        <h3
          className={`font-sans font-medium transition-colors duration-200 ${
            isActive ? "text-[#8bb8d8]" : "text-[#f1f5ec] group-hover:text-white"
          } text-base md:text-lg`}
        >
          {step.title}
        </h3>
        <p className="mt-1.5 text-xs md:text-sm leading-relaxed text-[#aab3a7]">
          {step.description}
        </p>
      </div>
    </article>
  );
}
