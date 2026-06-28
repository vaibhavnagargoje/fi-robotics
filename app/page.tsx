// FILE: app/page.tsx
// PURPOSE: Landing page — background video hero, smart grid audio controls

"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Volume2, VolumeX } from "lucide-react";
import Footer from "@/components/Footer";
import AnimatedCounter from "@/components/AnimatedCounter";

/* ─── Shared fade-in helper ──────────────────────────────── */
function useFade(reduced: boolean) {
  return (delay = 0) =>
    reduced
      ? {}
      : ({
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-5%" },
          transition: { duration: 0.5, delay, ease: "easeOut" },
        } as const);
}

/* ─── Data ───────────────────────────────────────────────── */
const steps = [
  { num: "01", title: "Data Factory",         desc: "Teleoperators perform real manipulation tasks across diverse environments, capturing exactly how humans interact with objects." },
  { num: "02", title: "5-Finger Gloves",       desc: "Custom hardware captures ground-truth joint angles and contact forces at 5-DOF — the highest-resolution kinetic data available." },
  { num: "03", title: "Head-Mounted Optics",   desc: "Cameras sync with the gloves — visual input matched precisely to physical exertion into one coherent stream." },
  { num: "04", title: "Multi-Modal Fusion",    desc: "Vision, action, and force data fused into a single holistic dataset, retargetable to lower-DOF hardware like standard grippers." },
  { num: "05", title: "Task Selection Matrix", desc: "Algorithms systematically target edge cases where training data is sparse, varying environment, lighting, and object parameters." },
];

const timeline = [
  { year: "2024", title: "Factory Launch",       desc: "Baseline teleoperation lab. First structured manipulation datasets collected." },
  { year: "2025", title: "Multi-Modal Expansion",desc: "Synchronized vision, tactile, and proprioceptive capture in one pipeline." },
  { year: "2026", title: "Global Operator Grid", desc: "Three hubs, 24/7 coverage, 500+ operators at Q3 capacity." },
  { year: "2027", title: "Enterprise Programs",  desc: "Operational readiness for regulated robotics deployments." },
];

const videoGrid = [
  { slot: "grid-1", label: "Teleoperator session",   src: "/src-videos/Autonomous_2x.mp4" },
  { slot: "grid-2", label: "Glove sensor capture",   src: "/src-videos/Finger tip recording.mp4" },
  { slot: "grid-3", label: "Multi-environment task", src: "/src-videos/Initial_Grocery_Demo.mp4" },
  { slot: "grid-4", label: "Data collection floor",  src: "/src-videos/Autonomous 2x (1).mp4" },
  { slot: "grid-5", label: "Edge case targeting",    src: "/src-videos/IMG_1930.mp4" },
  { slot: "grid-6", label: "Operator onboarding",    src: "/src-videos/Cleaning_demo.mp4" },
];

/* ═══════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════ */
export default function Home() {
  const reduced = useReducedMotion() ?? false;
  const fade = useFade(reduced);

  /* Audio control state — null = all muted */
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const featuredVideoRef = useRef<HTMLVideoElement>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          
          if (entry.isIntersecting) {
            video.play().catch(() => {}); // Play when visible
            
            if (video === featuredVideoRef.current) {
              video.muted = false; // Auto-unmute featured video
            }
          } else {
            video.pause(); // Pause when out of view
            
            if (video === featuredVideoRef.current) {
              video.muted = true;
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroVideoRef.current) observer.observe(heroVideoRef.current);
    if (featuredVideoRef.current) observer.observe(featuredVideoRef.current);
    videoRefs.current.forEach((v) => {
      if (v) observer.observe(v);
    });

    return () => observer.disconnect();
  }, []);

  function handleToggle(idx: number) {
    const isCurrentlyActive = activeIdx === idx;
    // Mute all
    videoRefs.current.forEach((v) => { if (v) v.muted = true; });
    if (isCurrentlyActive) {
      setActiveIdx(null);
    } else {
      const target = videoRefs.current[idx];
      if (target) target.muted = false;
      setActiveIdx(idx);
    }
  }

  return (
    <div className="bg-[#f7f6f3] text-[#0a0a0a]">

      {/* ══════════════════════════════════════════════════════
          1. HERO — background video
      ══════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-28 pb-20 overflow-hidden">
        {/* Background video */}
        <video
          ref={heroVideoRef}
          src="/src-videos/four2 (online-video-cutter.com) (1).mp4"
          preload="none"
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center center" }}
        />
        {/* Warm overlay so text stays readable and editorial */}
        <div className="absolute inset-0 bg-[#f7f6f3]/78" />

        {/* Content above overlay */}
        <motion.div
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-10 max-w-4xl"
        >
          <p
            className="text-[11px] tracking-[0.1em] uppercase text-[#9c9a97] mb-12"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Intelligence Factory
          </p>

          <h1
            className="text-[clamp(3rem,8vw,6rem)] leading-[1.05] tracking-[-0.01em] text-[#0a0a0a] mb-7"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontStyle: "italic" }}
          >
            Human Intelligence<br />for Robots.
          </h1>

          <div className="w-full mb-8" style={{ borderTop: "0.5px solid #c4c2be" }} />

          <p className="text-[18px] text-[#6b6b6b] font-light leading-relaxed max-w-[580px] mb-12">
            We build foundation models for physical autonomy — powered by the largest collection of
            human demonstration data on Earth.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-5">
            <Link
              href="/blog"
              id="hero-cta-research"
              className="inline-flex items-center text-[13px] font-medium text-[#0a0a0a] px-5 py-2.5 hover:bg-[#0a0a0a] hover:text-[#f7f6f3] transition-colors duration-200"
              style={{ border: "0.5px solid #0a0a0a" }}
            >
              View research →
            </Link>
            <Link
              href="/team"
              id="hero-cta-team"
              className="inline-flex items-center text-[13px] text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors duration-200 py-2.5"
            >
              Meet the team →
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════
          2. PROBLEM STATEMENT
      ══════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-36 px-6 md:px-16" style={{ borderTop: "0.5px solid #e0ddd8" }}>
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            {...fade(0)}
            className="text-[clamp(1.75rem,4vw,3rem)] leading-[1.12] text-[#0a0a0a] mb-10"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontStyle: "italic" }}
          >
            "Robotics breaks on diversity."
          </motion.h2>
          <motion.p {...fade(0.1)} className="text-[#6b6b6b] leading-[1.8] mb-5">
            Current robotic solutions are trained on narrow datasets in controlled environments.
            They fail the moment any variable changes — the object, the lighting, the surface, the grip angle.
          </motion.p>
          <motion.p {...fade(0.15)} className="text-[#6b6b6b] leading-[1.8]">
            The bottleneck is not hardware. It is data — specifically, diverse, high-fidelity, multi-modal
            human demonstration data that reflects how the real world actually behaves.
          </motion.p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          3. VIDEO SECTION — featured + interactive grid
      ══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 px-6 md:px-16" style={{ borderTop: "0.5px solid #e0ddd8" }}>
        <p
          className="text-[11px] tracking-[0.1em] uppercase text-[#9c9a97] mb-10"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          01 / Data
        </p>

        {/* Featured video — unmuted on scroll */}
        <motion.div {...fade(0)} className="relative group">
          <video
            ref={featuredVideoRef}
            src="/src-videos/Intelligence Factory Launch Video V3 (1).mp4"
            preload="none"
            muted
            loop
            playsInline
            className="w-full object-cover bg-[#e8e6e0]"
            style={{ aspectRatio: "16/9" }}
          />
          <p
            className="mt-3 text-[10px] tracking-[0.08em] text-[#9c9a97]"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            All footage 1× speed. Fully unscripted.
          </p>
        </motion.div>

        {/* 6-video grid — hover for audio toggle */}
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-[#e0ddd8]">
          {videoGrid.map((v, i) => {
            const isActive = activeIdx === i;
            const isHovered = hoveredIdx === i;

            return (
              <motion.div
                key={v.slot}
                {...fade(i * 0.05)}
                className="relative bg-[#f7f6f3] pb-4"
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <video
                  ref={(el) => { videoRefs.current[i] = el; }}
                  src={v.src}
                  preload="none"
                  muted
                  loop
                  playsInline
                  className="w-full object-cover bg-[#e8e6e0]"
                  style={{ aspectRatio: "4/3" }}
                />

                {/* Audio toggle button — appears on hover */}
                <button
                  onClick={() => handleToggle(i)}
                  aria-label={isActive ? "Mute video" : "Unmute video"}
                  className="absolute bottom-8 right-2 w-7 h-7 flex items-center justify-center transition-all duration-200"
                  style={{
                    background: "rgba(247,246,243,0.85)",
                    backdropFilter: "blur(4px)",
                    opacity: isHovered || isActive ? 1 : 0,
                    pointerEvents: isHovered || isActive ? "auto" : "none",
                    border: "0.5px solid #c8c5c0",
                  }}
                >
                  {isActive
                    ? <Volume2 size={13} color="#0a0a0a" />
                    : <VolumeX size={13} color="#9c9a97" />
                  }
                </button>

                <p
                  className="mt-2 text-[10px] tracking-[0.06em] text-[#9c9a97] px-0"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {v.label}
                  {isActive && (
                    <span className="ml-2 text-[#0a0a0a]">· audio on</span>
                  )}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          4. METRICS
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24 px-6 md:px-16" style={{ borderTop: "0.5px solid #e0ddd8", borderBottom: "0.5px solid #e0ddd8" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-0">
          {[
            { value: "500,000+", label1: "hours of",      label2: "kinetic data",      isCounter: true },
            { value: "500+",     label1: "teleoperation", label2: "operators",          isCounter: true },
            { value: "1/10×",    label1: "cost vs",       label2: "US standard",        isCounter: false },
            { value: "5",        label1: "DOF",           label2: "precision capture",  isCounter: true },
          ].map((m, i) => (
            <motion.div
              key={m.label1}
              {...fade(i * 0.08)}
              className="flex flex-col gap-3 md:px-10 md:border-r md:last:border-r-0"
              style={{ borderRightColor: "#e0ddd8", borderRightWidth: "0.5px" }}
            >
              <div
                className="text-[clamp(2.2rem,4.5vw,3rem)] font-light leading-none tracking-tight text-[#0a0a0a]"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {m.isCounter ? <AnimatedCounter target={m.value} /> : m.value}
              </div>
              <div className="text-[12px] text-[#9c9a97] leading-snug" style={{ fontFamily: "'DM Mono', monospace" }}>
                {m.label1}<br />{m.label2}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          5. HOW IT WORKS
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-[11px] tracking-[0.1em] uppercase text-[#9c9a97] mb-6" style={{ fontFamily: "'DM Mono', monospace" }}>
            02 / Method
          </p>
          <motion.h2
            {...fade(0.05)}
            className="text-[clamp(1.6rem,3.5vw,2.5rem)] leading-[1.1] text-[#0a0a0a] mb-12"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            From human hand to robot model.
          </motion.h2>
          <div>
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                {...fade(i * 0.06)}
                className="grid grid-cols-[3rem_1fr] md:grid-cols-[3rem_1fr_2fr] gap-x-6 gap-y-1 py-6 items-start"
                style={{ borderBottom: "0.5px solid #e0ddd8" }}
              >
                <span className="text-[12px] text-[#b8b5b0] pt-px" style={{ fontFamily: "'DM Mono', monospace" }}>
                  {step.num}
                </span>
                <span className="text-[15px] font-medium text-[#0a0a0a] leading-snug">{step.title}</span>
                <p className="text-[14px] text-[#6b6b6b] leading-[1.7] col-start-2 md:col-start-3">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          6. TIMELINE
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-16" style={{ borderTop: "0.5px solid #e0ddd8" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] tracking-[0.1em] uppercase text-[#9c9a97] mb-12" style={{ fontFamily: "'DM Mono', monospace" }}>
            03 / Trajectory
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0">
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                {...fade(i * 0.1)}
                className="flex flex-col gap-4 py-8 md:py-0 md:px-8 md:border-r md:first:pl-0 md:last:border-r-0"
                style={{ borderRightColor: "#e0ddd8", borderRightWidth: "0.5px", borderBottomColor: "#e0ddd8" }}
              >
                <span className="text-[2.5rem] md:text-[2.8rem] font-light leading-none text-[#c8c5c0] tracking-tight" style={{ fontFamily: "'DM Mono', monospace" }}>
                  {t.year}
                </span>
                <div className="flex flex-col gap-2">
                  <span className="text-[13px] font-semibold text-[#0a0a0a]">{t.title}</span>
                  <p className="text-[13px] text-[#6b6b6b] leading-[1.7]">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          7. DEPLOYMENT
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-16" style={{ borderTop: "0.5px solid #e0ddd8" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] tracking-[0.1em] uppercase text-[#9c9a97] mb-10" style={{ fontFamily: "'DM Mono', monospace" }}>
            04 / Deployment
          </p>
          <motion.h2
            {...fade(0.05)}
            className="text-[clamp(1.75rem,4.5vw,3.5rem)] leading-[1.15] text-[#0a0a0a] mb-8"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            Warehouses. Grocery.<br className="md:hidden" />{" "}
            Data Centers. Homes.
          </motion.h2>
          <motion.p {...fade(0.1)} className="text-[#6b6b6b] text-[15px] leading-relaxed max-w-xl">
            Our training data generalises across every environment robots operate in.
          </motion.p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          8. CLOSING CTA
      ══════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-36 px-6 md:px-16 text-center" style={{ borderTop: "0.5px solid #e0ddd8" }}>
        <motion.p
          {...fade(0)}
          className="text-[clamp(1.4rem,3vw,2rem)] text-[#0a0a0a] mb-8 max-w-2xl mx-auto leading-[1.3]"
          style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontStyle: "italic" }}
        >
          Ready to build physical AI that actually works?
        </motion.p>
        <motion.div {...fade(0.1)}>
          <Link
            href="/contact"
            id="cta-get-in-touch"
            className="inline-flex items-center text-[13px] font-medium text-[#0a0a0a] px-6 py-3 hover:bg-[#0a0a0a] hover:text-[#f7f6f3] transition-colors duration-200"
            style={{ border: "0.5px solid #0a0a0a" }}
          >
            Get in touch →
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
