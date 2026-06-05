"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Activity, Users, Database, Clock, ArrowRight, Sparkles, Globe2, ShieldCheck, Layers3 } from "lucide-react";
import Footer from "@/components/Footer";
import ParticleGrid from "@/components/ParticleGrid";
import GlowCard from "@/components/GlowCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import TextReveal from "@/components/TextReveal";

export default function CompanyPage() {
  const heroRef = useRef<HTMLElement | null>(null);
  const telemetryRef = useRef<HTMLDivElement | null>(null);
  const filmRef = useRef<HTMLDivElement | null>(null);
  const matrixRef = useRef<HTMLDivElement | null>(null);
  const sensorRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress: pageScroll } = useScroll();

  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroImageY = useTransform(heroScroll, [0, 1], [0, 120]);
  const heroTextY = useTransform(heroScroll, [0, 1], [0, -40]);
  const heroOrbY = useTransform(heroScroll, [0, 1], [0, 90]);
  const heroTiltX = useTransform(heroScroll, [0, 1], [12, -8]);
  const heroTiltY = useTransform(heroScroll, [0, 1], [-8, 10]);
  const heroSpin = useTransform(pageScroll, [0, 1], [0, 160]);

  const { scrollYProgress: telemetryScroll } = useScroll({ target: telemetryRef, offset: ["start end", "end start"] });
  const telemetryY = useTransform(telemetryScroll, [0, 1], [60, -60]);
  const telemetryRotate = useTransform(telemetryScroll, [0, 1], [1.5, -1.5]);

  const { scrollYProgress: filmScroll } = useScroll({ target: filmRef, offset: ["start end", "end start"] });
  const filmY = useTransform(filmScroll, [0, 1], [50, -40]);

  const { scrollYProgress: matrixScroll } = useScroll({ target: matrixRef, offset: ["start end", "end start"] });
  const matrixY = useTransform(matrixScroll, [0, 1], [40, -50]);

  const { scrollYProgress: sensorScroll } = useScroll({ target: sensorRef, offset: ["start end", "end start"] });
  const sensorY = useTransform(sensorScroll, [0, 1], [40, -30]);

  const glowDriftOne = useTransform(pageScroll, [0, 1], [0, -140]);
  const glowDriftTwo = useTransform(pageScroll, [0, 1], [0, 120]);
  const glowDriftThree = useTransform(pageScroll, [0, 1], [0, -90]);

  const easeOutArray: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const fadeUp = {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-15%" },
    transition: { duration: 0.9, ease: easeOutArray },
  };
  const fadeLeft = {
    initial: { opacity: 0, x: -32 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-12%" },
    transition: { duration: 1, ease: easeOutArray },
  };
  const fadeRight = {
    initial: { opacity: 0, x: 32 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-12%" },
    transition: { duration: 1, ease: easeOutArray },
  };
  const cardReveal = (delay: number) => ({
    initial: { opacity: 0, y: 34, scale: 0.98, filter: "blur(6px)" },
    whileInView: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
    viewport: { once: true, margin: "-10%" },
    transition: { duration: 0.9, delay, ease: easeOutArray },
  });

  const sensorGridVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
  };
  const sensorItemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98, filter: "blur(6px)" },
    show: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: 0.85, ease: easeOutArray } },
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[#050508] text-[#e8e8f0] selection:bg-[#00D1FF]/30 selection:text-white font-sans">

      {/* Ambient drift glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div style={{ y: glowDriftOne }} className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#00D1FF]/[0.04] blur-[140px]" />
        <motion.div style={{ y: glowDriftTwo }} className="absolute top-32 right-[-140px] h-[28rem] w-[28rem] rounded-full bg-[#00B88F]/[0.03] blur-[160px]" />
        <motion.div style={{ y: glowDriftThree }} className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[#c26d3b]/[0.03] blur-[150px]" />
      </div>

      {/* ── Company Hero ── */}
      <section ref={heroRef} className="relative min-h-screen w-full flex flex-col justify-center pb-24 pt-32 px-4 md:px-12 lg:px-24 overflow-hidden border-b border-white/[0.06]">
        <ParticleGrid />
        <div className="absolute inset-0 dot-bg opacity-30" />

        <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, ease: easeOutArray }}
            style={{ y: heroTextY }}
          >
            <div className="inline-flex items-center gap-2 glass px-4 py-1.5 mb-8 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#00D1FF] animate-pulse" style={{ boxShadow: "0 0 8px rgba(0,209,255,0.8)" }} />
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/60">Company Profile</span>
            </div>
            <h1 className="mt-4 text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-6 leading-tight text-white animate-glow-breathe">
              Building the<br />human layer.
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl font-light leading-relaxed mb-8">
              We scale real-world data capture through precision teleoperation and a global workforce built for robotics.
            </p>
            <Link href="/contact" className="group inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-sm font-bold uppercase tracking-widest hover:shadow-[0_0_30px_rgba(0,209,255,0.2)] transition-all">
              Talk with us <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div style={{ y: heroOrbY }} className="relative mt-8 lg:mt-0">
            <GlowCard className="mx-auto w-full max-w-md p-5 md:p-6">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-gray-500" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                <span>Orbital Core</span>
                <span className="text-[#00D1FF] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D1FF] animate-pulse" style={{ boxShadow: "0 0 6px rgba(0,209,255,0.8)" }} />
                  Live
                </span>
              </div>

              <div className="relative mt-5 flex h-[240px] md:h-[280px] items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,209,255,0.1),_transparent_60%)]" />

                {/* Radar pulse rings */}
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full border border-[#00D1FF]/10"
                    style={{ width: `${120 + i * 50}px`, height: `${120 + i * 50}px` }}
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.3, 0, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      delay: i * 1,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                ))}

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[200px] h-[200px] md:w-[220px] md:h-[220px] rounded-full border border-dashed border-white/[0.08]"
                />
                <div className="absolute w-[160px] h-[160px] md:w-[180px] md:h-[180px] rounded-full border border-[#00B88F]/15" />
                <div className="absolute w-[120px] h-[120px] md:w-[140px] md:h-[140px] rounded-full border border-[#00D1FF]/20" />
                <div className="absolute w-[82px] h-[82px] md:w-[100px] md:h-[100px] rounded-full border border-white/[0.06]" />

                <motion.div
                  style={{ rotateX: heroTiltX, rotateY: heroTiltY, rotateZ: heroSpin }}
                  className="relative w-[60px] h-[60px] md:w-[68px] md:h-[68px] rounded-full bg-gradient-to-tr from-[#00D1FF]/70 via-white/80 to-[#00B88F]/60"
                  whileHover={{ scale: 1.1 }}
                />

                {/* Sweep line */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[100px] h-px origin-left top-1/2 left-1/2"
                  style={{
                    background: "linear-gradient(90deg, rgba(0,209,255,0.4), transparent)",
                  }}
                />

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-gray-600 whitespace-nowrap" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                  Signal Sync
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  { label: "CALIBRATED", value: "98.7%" },
                  { label: "LATENCY",    value: "12ms"  },
                ].map(({ label, value }) => (
                  <div key={label} className="border border-white/[0.06] bg-white/[0.02] px-3 py-3">
                    <div className="text-[10px] tracking-widest text-gray-600" style={{ fontFamily: "'Orbitron', sans-serif" }}>{label}</div>
                    <div className="mt-1 text-base font-bold text-white">
                      <AnimatedCounter target={value} />
                    </div>
                  </div>
                ))}
              </div>
            </GlowCard>
          </motion.div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="relative pb-24 pt-12 px-4 md:px-12 lg:px-24 border-b border-white/[0.06]">
        <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { label: "Operators Online", value: "620+", detail: "Across 3 hubs", color: "0, 209, 255" },
            { label: "Active Programs",  value: "48",   detail: "Robotics & logistics", color: "0, 184, 143" },
            { label: "Data Precision",   value: "99.2%",detail: "Quality compliance", color: "194, 109, 59" },
          ].map((item) => (
            <GlowCard key={item.label} glowColor={item.color} className="px-6 py-5">
              <div className="text-[10px] uppercase tracking-widest text-gray-600" style={{ fontFamily: "'Orbitron', sans-serif" }}>{item.label}</div>
              <div className="mt-3 text-3xl font-bold text-white">
                <AnimatedCounter target={item.value} />
              </div>
              <div className="mt-1 text-sm text-gray-600">{item.detail}</div>
            </GlowCard>
          ))}
        </motion.div>
      </section>

      {/* ── Operating Principles ── */}
      <section className="relative py-24 px-4 md:px-12 lg:px-24 border-b border-white/[0.06]">
        <div className="absolute inset-0 dot-bg opacity-30" />
        <div className="relative max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="max-w-3xl mb-12">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#00D1FF] mb-4 block" style={{ fontFamily: "'Orbitron', sans-serif" }}>Operating Principles</span>
            <TextReveal
              text="Professional rigor with\nhuman-scale empathy."
              as="h2"
              className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 text-lg text-gray-400 font-light leading-relaxed"
            >
              We combine world-class operator training, systemized QA, and safety-first governance to deliver reliable data at enterprise scale.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Program Integrity", copy: "Every workflow is governed by repeatable protocols, calibrated annotations, and third-party audits.", icon: ShieldCheck, color: "0, 209, 255" },
              { title: "Global Sourcing",   copy: "Distributed teleoperators with localized teams ensure coverage across time zones and domains.", icon: Globe2,      color: "0, 184, 143" },
              { title: "Model Alignment",   copy: "We co-design datasets with model teams to keep ground truth, training, and inference aligned.", icon: Layers3,     color: "194, 109, 59" },
              { title: "Signal Density",    copy: "Captures with multi-sensor telemetry to maximize signal per operator minute.", icon: Sparkles,    color: "123, 97, 255" },
            ].map((card, index) => (
              <motion.div key={card.title} {...cardReveal(index * 0.1)}>
                <GlowCard glowColor={card.color} className="p-8 group">
                  <card.icon className="h-6 w-6" style={{ color: `rgb(${card.color})` }} />
                  <h3 className="mt-5 text-xl font-bold text-white group-hover:text-[#00D1FF] transition-colors">{card.title}</h3>
                  <p className="mt-3 text-gray-500 leading-relaxed font-light">{card.copy}</p>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Human Labor at Scale ── */}
      <section className="relative py-28 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto w-full border-b border-white/[0.06]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div {...fadeLeft}>
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#00D1FF] mb-6 block" style={{ fontFamily: "'Orbitron', sans-serif" }}>Scale</span>
            <TextReveal
              text="Human Labor at Scale."
              as="h2"
              className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6 text-white"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-400 font-light mb-16 leading-relaxed"
            >
              Rapid scaling of our teleoperation workforce ensures a continuous, high-volume pipeline of structured kinetic data.
            </motion.p>

            <div className="space-y-12">
              {[
                { num: "01", tag: "WORKFORCE PROJECTION", val: "500+", valSuffix: " workers", sub: "In India by Q3 2026",          color: "#00D1FF" },
                { num: "02", tag: "DATA VOLUME TARGET",   val: "500k+", valSuffix: " hours",  sub: "High-fidelity kinetic recordings", color: "#00B88F" },
                { num: "03", tag: "UNIT ECONOMICS",       val: "$10", valSuffix: "/hr",       sub: "Average acquisition cost",     color: "#c26d3b" },
              ].map(({ num, tag, val, valSuffix, sub, color }) => (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="border-l border-white/[0.06] pl-6 relative"
                >
                  <div className="absolute left-[-1px] top-0 w-[2px] h-8" style={{ background: color, boxShadow: `0 0 8px ${color}44` }} />
                  <div className="text-[10px] tracking-widest text-gray-600 mb-2" style={{ fontFamily: "'Orbitron', sans-serif" }}>{num}. {tag}</div>
                  <div className="text-4xl font-bold mb-1 text-white">
                    <AnimatedCounter target={val} />{valSuffix}
                  </div>
                  <div className="text-sm text-gray-600 tracking-wide uppercase">{sub}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...fadeRight}
            ref={telemetryRef}
            style={{ y: telemetryY, rotate: telemetryRotate }}
            className="relative"
          >
            <GlowCard className="p-8 md:p-12">
              <div className="flex justify-between items-center mb-16">
                <div className="border border-[#00D1FF]/30 text-[#00D1FF] text-[10px] px-3 py-1 bg-[#00D1FF]/[0.05] tracking-widest" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                  LOGISTICS.TELEMETRY
                </div>
                <Activity className="text-gray-600" />
              </div>

              <div className="grid grid-cols-2 gap-y-16 gap-x-8">
                {[
                  { icon: Clock,    label: "LATENCY",    value: "12ms",  color: "#00D1FF" },
                  { icon: Users,    label: "NODES",      value: "42",    color: "#f0f0f0" },
                  { icon: Activity, label: "UPTIME",     value: "99.9%", color: "#00B88F" },
                  { icon: Database, label: "THROUGHPUT", value: "8.4",    suffix: "TB/s", color: "#f0f0f0" },
                ].map(({ icon: Icon, label, value, suffix, color }) => (
                  <div key={label}>
                    <div className="text-[10px] text-gray-600 mb-2 flex items-center gap-2 uppercase tracking-widest" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                      <Icon size={12} /> {label}
                    </div>
                    <div className="text-4xl font-bold" style={{ color }}>
                      <AnimatedCounter target={value} />
                      {suffix && <span className="text-xl text-gray-600">{suffix}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </GlowCard>
          </motion.div>
        </div>
      </section>

      {/* ── Custom Sensor Hardware ── */}
      <section ref={sensorRef} className="relative py-28 px-4 md:px-12 lg:px-24 w-full border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="mb-20">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#00D1FF] mb-4 block" style={{ fontFamily: "'Orbitron', sans-serif" }}>Hardware Specifications</span>
            <TextReveal
              text="Custom Sensor Hardware."
              as="h2"
              className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6 text-white"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-400 font-light max-w-2xl leading-relaxed"
            >
              Proprietary capture rigs engineered for zero-loss human kinematic translation. Every joint, force, and visual field recorded with absolute precision.
            </motion.p>
          </motion.div>

          <motion.div
            style={{ y: sensorY }}
            variants={sensorGridVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { src: "/head_mounted_camera.png", alt: "Head-Mounted Cameras",    title: "Head-Mounted Cameras",    copy: "Operators wear head-mounted cameras synced with the sensor gloves, perfectly matching visual input with physical exertion." },
              { src: "/custom_robotics_glove.png", alt: "Custom 5-Finger Gloves", title: "Custom 5-Finger Gloves", copy: "We designed and built custom gloves to capture ground-truth joint angles and contact forces directly at 5-DOF." },
              { src: "/human_demo_data.png",   alt: "Multi-modal Datasets",       title: "Multi-Modal Integration",copy: "Vision, action, and force fused into one holistic dataset. Retargetable to lower DOF hardware like standard grippers." },
            ].map(({ src, alt, title, copy }) => (
              <motion.div key={title} variants={sensorItemVariants} className="group cursor-pointer">
                <div className="relative h-64 w-full overflow-hidden mb-6 border border-white/[0.06] group-hover:border-[#00D1FF]/20 transition-all duration-500 scan-line" style={{ background: "#0a0a0f" }}>
                  <img src={src} alt={alt} className="w-full h-full object-cover opacity-50 transition-all duration-700 group-hover:scale-105 group-hover:opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/80 to-transparent" />
                </div>
                <h3 className="text-xl font-bold tracking-tight mb-3 text-white group-hover:text-[#00D1FF] transition-colors">{title}</h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed">{copy}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Operational Film ── */}
      <section className="relative py-28 px-4 md:px-12 lg:px-24 w-full border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          <motion.div {...fadeLeft}>
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#00D1FF] mb-4 block" style={{ fontFamily: "'Orbitron', sans-serif" }}>Operational Film</span>
            <TextReveal
              text="Teleoperation in the wild."
              as="h2"
              className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6 text-white"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-400 font-light leading-relaxed"
            >
              Real-time annotation capture and multi-sensor synchronization in action. This reel highlights how our operators convert noisy environments into structured training data.
            </motion.p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              {[
                { label: "CAPTURE MODE", value: "Multi-perspective" },
                { label: "SYNC LAYER",   value: "Sub-20ms" },
              ].map(({ label, value }) => (
                <GlowCard key={label} className="px-5 py-4">
                  <div className="text-[10px] tracking-widest text-gray-600 mb-2" style={{ fontFamily: "'Orbitron', sans-serif" }}>{label}</div>
                  <div className="text-lg font-bold text-white">{value}</div>
                </GlowCard>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...fadeRight}
            ref={filmRef}
            style={{ y: filmY }}
            className="relative h-[360px] md:h-[480px] w-full overflow-hidden border border-white/[0.06] hover:border-[#00D1FF]/15 transition-all duration-500"
          >
            <video className="h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata" poster="/data_vision.png">
              <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-tr from-[#050508]/40 via-transparent to-transparent" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#00D1FF]/50 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* ── Task Selection Matrix ── */}
      <section className="relative py-28 px-4 md:px-12 lg:px-24 w-full border-b border-white/[0.06]">
        <div className="absolute inset-0 dot-bg opacity-20" />
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            {...fadeLeft}
            ref={matrixRef}
            style={{ y: matrixY }}
            className="order-2 lg:order-1 relative h-[50vh] md:h-[70vh] w-full overflow-hidden border border-white/[0.06] hover:border-[#00D1FF]/15 transition-all duration-500"
          >
            <Image src="/matrix_viz.png" alt="Data Matrix Visualization" fill className="object-cover opacity-70" sizes="(max-width: 1024px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/50 to-transparent" />
          </motion.div>

          <motion.div {...fadeRight} className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 glass px-3 py-1 mb-6 rounded-full">
              <span className="text-[10px] tracking-widest text-gray-500 uppercase" style={{ fontFamily: "'Orbitron', sans-serif" }}>Protocol.Selection</span>
            </div>
            <TextReveal
              text="Task Selection Matrix."
              as="h2"
              className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6 text-white"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-400 font-light mb-12 leading-relaxed"
            >
              We don&apos;t just collect data; we engineer it. Our systematic approach ensures complete coverage of operational parameters, focusing human effort precisely where synthetic data falls short.
            </motion.p>

            <div className="space-y-8">
              {[
                { axis: "X", title: "EDGE-CASE IDENTIFICATION", copy: "Algorithmic targeting of sparse-data domains to intentionally train outlier scenarios.", color: "#00D1FF", borderColor: "rgba(0,209,255,0.4)" },
                { axis: "Y", title: "DIVERSITY INJECTION",      copy: "Systematic variation of environmental, lighting, and object parameters to ensure robust generalization.", color: "#00B88F", borderColor: "rgba(0,184,143,0.4)" },
                { axis: "Z", title: "COVERAGE VALIDATION",      copy: "Real-time mapping of collected data against theoretical requirement matrices.", color: "#f0f0f0", borderColor: "rgba(255,255,255,0.2)" },
              ].map(({ axis, title, copy, color, borderColor }) => (
                <motion.div
                  key={axis}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="flex gap-6 group cursor-pointer"
                >
                  <div className="w-10 h-10 shrink-0 border flex items-center justify-center text-sm font-bold group-hover:bg-white group-hover:text-black transition-all" style={{ borderColor, color, fontFamily: "'Orbitron', sans-serif" }}>
                    {axis}
                  </div>
                  <div>
                    <h4 className="text-[10px] tracking-widest text-gray-400 mb-2 group-hover:text-white transition-colors" style={{ fontFamily: "'Orbitron', sans-serif" }}>{title}</h4>
                    <p className="text-sm text-gray-600 font-light">{copy}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ x: 4 }}
              className="mt-12 group flex items-center gap-3 text-sm font-bold tracking-widest uppercase text-gray-500 hover:text-[#00D1FF] transition-colors"
            >
              View Matrix Logic
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ── Trajectory ── */}
      <section className="relative py-24 px-4 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
          <motion.div {...fadeLeft}>
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#00D1FF] mb-4 block" style={{ fontFamily: "'Orbitron', sans-serif" }}>Trajectory</span>
            <TextReveal
              text="Designed to scale with\nthe robotics industry."
              as="h2"
              className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tighter text-white"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg text-gray-400 font-light leading-relaxed"
            >
              Our roadmap balances rigorous data governance with rapid expansion into new modalities, industries, and deployment geographies.
            </motion.p>
          </motion.div>

          <div className="relative pl-10">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.5, ease: easeOutArray }}
              className="absolute left-3 top-2 h-full w-px origin-top"
              style={{
                background: "linear-gradient(180deg, #00D1FF, #00B88F, #7B61FF, transparent)",
                boxShadow: "0 0 8px rgba(0,209,255,0.3)",
              }}
            />
            <div className="space-y-10">
              {[
                { year: "2024", title: "Factory launch",        copy: "Established baseline teleoperation lab and first robotics pilots." },
                { year: "2025", title: "Multi-modal expansion", copy: "Rolled out synchronized vision, tactile, and proprioceptive capture." },
                { year: "2026", title: "Global operator grid",  copy: "Scaled to three hubs with 24/7 coverage and QA automation." },
                { year: "2027", title: "Enterprise programs",   copy: "Operational readiness for regulated robotics and logistics partners." },
              ].map((step, index) => (
                <motion.div
                  key={step.year}
                  {...cardReveal(index * 0.1)}
                  className="relative"
                >
                  <div
                    className="absolute -left-7 -translate-x-1/2 top-6 flex h-8 w-8 items-center justify-center border border-[#00D1FF]/20 text-[10px] font-bold text-[#00D1FF]/80 z-10"
                    style={{ background: "#050508", fontFamily: "'Orbitron', sans-serif" }}
                  >
                    {step.year}
                  </div>
                  <GlowCard className="px-6 py-5">
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    <p className="mt-2 text-gray-500 font-light">{step.copy}</p>
                  </GlowCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
