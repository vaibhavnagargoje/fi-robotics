"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Activity, Users, Database, Clock, ArrowRight, Sparkles, Globe2, ShieldCheck, Layers3 } from "lucide-react";
import Footer from "@/components/Footer";

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
    initial: { opacity: 0, y: 34, scale: 0.98 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, margin: "-10%" },
    transition: { duration: 0.9, delay, ease: easeOutArray },
  });

  const sensorGridVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
  };
  const sensorItemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.85, ease: easeOutArray } },
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[#080808] text-[#f0f0f0] selection:bg-[#00D1FF] selection:text-black font-sans">

      {/* Ambient drift glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div style={{ y: glowDriftOne }} className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#00D1FF]/6 blur-[120px]" />
        <motion.div style={{ y: glowDriftTwo }} className="absolute top-32 right-[-140px] h-[28rem] w-[28rem] rounded-full bg-[#00B88F]/5 blur-[140px]" />
        <motion.div style={{ y: glowDriftThree }} className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[#c26d3b]/5 blur-[130px]" />
      </div>

      {/* ── Company Hero ── */}
      <section ref={heroRef} className="relative min-h-screen w-full flex flex-col justify-center pb-24 pt-32 px-4 md:px-12 lg:px-24 overflow-hidden dot-bg border-b border-white/10">
        <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, ease: easeOutArray }}
            style={{ y: heroTextY }}
          >
            <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-md px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#00D1FF] animate-pulse" />
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/60">Company Profile</span>
            </div>
            <h1 className="mt-4 text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-6 leading-tight text-white">
              Building the<br />human layer.
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl font-light leading-relaxed mb-8">
              We scale real-world data capture through precision teleoperation and a global workforce built for robotics.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-sm font-bold uppercase tracking-widest hover:bg-gray-200 transition-all">
              Talk with us <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div style={{ y: heroOrbY }} className="relative mt-8 lg:mt-0">
            <div className="relative mx-auto w-full max-w-md border border-white/10 bg-[#111] p-5 md:p-6">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#00D1FF]/50 via-transparent to-transparent" />
              <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.24em] text-gray-500">
                <span>Orbital Core</span>
                <span className="text-[#00D1FF]">● Live</span>
              </div>

              <div className="relative mt-5 flex h-[240px] md:h-[280px] items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,209,255,0.12),_transparent_60%)]" />

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[200px] h-[200px] md:w-[220px] md:h-[220px] rounded-full border border-dashed border-white/15"
                />
                <div className="absolute w-[160px] h-[160px] md:w-[180px] md:h-[180px] rounded-full border border-[#00B88F]/25" />
                <div className="absolute w-[120px] h-[120px] md:w-[140px] md:h-[140px] rounded-full border border-[#00D1FF]/30" />
                <div className="absolute w-[82px] h-[82px] md:w-[100px] md:h-[100px] rounded-full border border-white/10" />

                <motion.div
                  style={{ rotateX: heroTiltX, rotateY: heroTiltY, rotateZ: heroSpin }}
                  className="relative w-[60px] h-[60px] md:w-[68px] md:h-[68px] rounded-full bg-gradient-to-tr from-[#00D1FF]/70 via-white/80 to-[#00B88F]/60 shadow-[0_0_40px_rgba(0,209,255,0.5)]"
                />

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-[0.3em] text-gray-600 whitespace-nowrap">
                  Signal Sync
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  { label: "CALIBRATED", value: "98.7%" },
                  { label: "LATENCY",    value: "12ms"  },
                ].map(({ label, value }) => (
                  <div key={label} className="border border-white/10 bg-white/5 px-3 py-3">
                    <div className="font-mono text-[10px] tracking-widest text-gray-600">{label}</div>
                    <div className="mt-1 text-base font-bold text-white">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="relative pb-24 pt-12 px-4 md:px-12 lg:px-24 border-b border-white/10">
        <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { label: "Operators Online", value: "620+", detail: "Across 3 hubs" },
            { label: "Active Programs",  value: "48",   detail: "Robotics & logistics" },
            { label: "Data Precision",   value: "99.2%",detail: "Quality compliance" },
          ].map((item) => (
            <div key={item.label} className="border border-white/10 bg-[#111] px-6 py-5 hover:border-white/20 transition-colors">
              <div className="text-[10px] font-mono uppercase tracking-widest text-gray-600">{item.label}</div>
              <div className="mt-3 text-3xl font-bold text-white">{item.value}</div>
              <div className="mt-1 text-sm text-gray-600">{item.detail}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── Operating Principles ── */}
      <section className="relative py-24 px-4 md:px-12 lg:px-24 border-b border-white/10 dot-bg">
        <div className="relative max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="max-w-3xl mb-12">
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#00D1FF] mb-4 block">Operating Principles</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white">
              Professional rigor with human-scale empathy.
            </h2>
            <p className="mt-6 text-lg text-gray-400 font-light leading-relaxed">
              We combine world-class operator training, systemized QA, and safety-first governance to deliver reliable data at enterprise scale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Program Integrity", copy: "Every workflow is governed by repeatable protocols, calibrated annotations, and third-party audits.", icon: ShieldCheck, color: "#00D1FF" },
              { title: "Global Sourcing",   copy: "Distributed teleoperators with localized teams ensure coverage across time zones and domains.", icon: Globe2,      color: "#00B88F" },
              { title: "Model Alignment",   copy: "We co-design datasets with model teams to keep ground truth, training, and inference aligned.", icon: Layers3,     color: "#c26d3b" },
              { title: "Signal Density",    copy: "Captures with multi-sensor telemetry to maximize signal per operator minute.", icon: Sparkles,    color: "#00D1FF" },
            ].map((card, index) => (
              <motion.div
                key={card.title}
                {...cardReveal(index * 0.1)}
                className="border border-white/10 bg-[#111] p-8 hover:border-white/20 transition-colors group"
              >
                <card.icon className="h-6 w-6" style={{ color: card.color }} />
                <h3 className="mt-5 text-xl font-bold text-white group-hover:text-[#00D1FF] transition-colors">{card.title}</h3>
                <p className="mt-3 text-gray-500 leading-relaxed font-light">{card.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Human Labor at Scale ── */}
      <section className="relative py-28 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto w-full border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div {...fadeLeft}>
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#00D1FF] mb-6 block">Scale</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6 text-white">Human Labor at Scale.</h2>
            <p className="text-lg text-gray-400 font-light mb-16 leading-relaxed">
              Rapid scaling of our teleoperation workforce ensures a continuous, high-volume pipeline of structured kinetic data.
            </p>

            <div className="space-y-12">
              {[
                { num: "01", tag: "WORKFORCE PROJECTION", val: "500+ workers", sub: "In India by Q3 2026",          color: "#00D1FF" },
                { num: "02", tag: "DATA VOLUME TARGET",   val: "500k+ hours",  sub: "High-fidelity kinetic recordings", color: "#00B88F" },
                { num: "03", tag: "UNIT ECONOMICS",       val: "$10/hr",       sub: "Average acquisition cost",     color: "#c26d3b" },
              ].map(({ num, tag, val, sub, color }) => (
                <div key={num} className="border-l border-white/10 pl-6 relative">
                  <div className="absolute left-[-1px] top-0 w-[2px] h-8" style={{ background: color }} />
                  <div className="text-[10px] font-mono tracking-widest text-gray-600 mb-2">{num}. {tag}</div>
                  <div className="text-4xl font-bold mb-1 text-white">{val}</div>
                  <div className="text-sm text-gray-600 tracking-wide uppercase">{sub}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...fadeRight}
            ref={telemetryRef}
            style={{ y: telemetryY, rotate: telemetryRotate }}
            className="border border-white/10 bg-[#111] p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#00D1FF]/50 via-transparent to-transparent" />

            <div className="flex justify-between items-center mb-16">
              <div className="border border-[#00D1FF]/30 text-[#00D1FF] text-[10px] font-mono px-3 py-1 bg-[#00D1FF]/8 tracking-widest">
                LOGISTICS.TELEMETRY
              </div>
              <Activity className="text-gray-600" />
            </div>

            <div className="grid grid-cols-2 gap-y-16 gap-x-8">
              {[
                { icon: Clock,    label: "LATENCY",    value: "12ms",        color: "#00D1FF" },
                { icon: Users,    label: "NODES",      value: "42",          color: "#f0f0f0" },
                { icon: Activity, label: "UPTIME",     value: "99.9%",       color: "#00B88F" },
                { icon: Database, label: "THROUGHPUT", value: <>8.4<span className="text-xl text-gray-600">TB/s</span></>, color: "#f0f0f0" },
              ].map(({ icon: Icon, label, value, color }) => (
                <div key={label}>
                  <div className="text-[10px] font-mono text-gray-600 mb-2 flex items-center gap-2 uppercase tracking-widest">
                    <Icon size={12} /> {label}
                  </div>
                  <div className="text-4xl font-bold" style={{ color }}>{value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Custom Sensor Hardware ── */}
      <section ref={sensorRef} className="relative py-28 px-4 md:px-12 lg:px-24 w-full border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="mb-20">
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#00D1FF] mb-4 block">Hardware Specifications</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6 text-white">Custom Sensor Hardware.</h2>
            <p className="text-lg text-gray-400 font-light max-w-2xl leading-relaxed">
              Proprietary capture rigs engineered for zero-loss human kinematic translation. Every joint, force, and visual field recorded with absolute precision.
            </p>
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
                <div className="relative h-64 w-full bg-[#111] overflow-hidden mb-6 border border-white/10 group-hover:border-white/25 transition-colors">
                  <img src={src} alt={alt} className="w-full h-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <h3 className="text-xl font-bold tracking-tight mb-3 text-white group-hover:text-[#00D1FF] transition-colors">{title}</h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed">{copy}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Operational Film ── */}
      <section className="relative py-28 px-4 md:px-12 lg:px-24 w-full border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          <motion.div {...fadeLeft}>
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#00D1FF] mb-4 block">Operational Film</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6 text-white">Teleoperation in the wild.</h2>
            <p className="text-lg text-gray-400 font-light leading-relaxed">
              Real-time annotation capture and multi-sensor synchronization in action. This reel highlights how our operators convert noisy environments into structured training data.
            </p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              {[
                { label: "CAPTURE MODE", value: "Multi-perspective" },
                { label: "SYNC LAYER",   value: "Sub-20ms" },
              ].map(({ label, value }) => (
                <div key={label} className="border border-white/10 bg-[#111] px-5 py-4">
                  <div className="text-[10px] font-mono tracking-widest text-gray-600 mb-2">{label}</div>
                  <div className="text-lg font-bold text-white">{value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...fadeRight}
            ref={filmRef}
            style={{ y: filmY }}
            className="relative h-[360px] md:h-[480px] w-full overflow-hidden border border-white/10"
          >
            <video className="h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata" poster="/data_vision.png">
              <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#00D1FF]/50 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* ── Task Selection Matrix ── */}
      <section className="relative py-28 px-4 md:px-12 lg:px-24 w-full border-b border-white/10 dot-bg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            {...fadeLeft}
            ref={matrixRef}
            style={{ y: matrixY }}
            className="order-2 lg:order-1 relative h-[50vh] md:h-[70vh] w-full overflow-hidden border border-white/10"
          >
            <Image src="/matrix_viz.png" alt="Data Matrix Visualization" fill className="object-cover opacity-80" sizes="(max-width: 1024px) 100vw, 50vw" />
          </motion.div>

          <motion.div {...fadeRight} className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-3 py-1 mb-6">
              <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">Protocol.Selection</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6 text-white">Task Selection Matrix.</h2>
            <p className="text-lg text-gray-400 font-light mb-12 leading-relaxed">
              We don&apos;t just collect data; we engineer it. Our systematic approach ensures complete coverage of operational parameters, focusing human effort precisely where synthetic data falls short.
            </p>

            <div className="space-y-8">
              {[
                { axis: "X", title: "EDGE-CASE IDENTIFICATION", copy: "Algorithmic targeting of sparse-data domains to intentionally train outlier scenarios.", color: "#00D1FF", borderColor: "rgba(0,209,255,0.4)" },
                { axis: "Y", title: "DIVERSITY INJECTION",      copy: "Systematic variation of environmental, lighting, and object parameters to ensure robust generalization.", color: "#00B88F", borderColor: "rgba(0,184,143,0.4)" },
                { axis: "Z", title: "COVERAGE VALIDATION",      copy: "Real-time mapping of collected data against theoretical requirement matrices.", color: "#f0f0f0", borderColor: "rgba(255,255,255,0.2)" },
              ].map(({ axis, title, copy, color, borderColor }) => (
                <div key={axis} className="flex gap-6 group cursor-pointer">
                  <div className="w-10 h-10 shrink-0 border flex items-center justify-center font-mono text-sm font-bold group-hover:bg-white group-hover:text-black transition-all" style={{ borderColor, color }}>
                    {axis}
                  </div>
                  <div>
                    <h4 className="font-mono text-[10px] tracking-widest text-gray-400 mb-2 group-hover:text-white transition-colors">{title}</h4>
                    <p className="text-sm text-gray-600 font-light">{copy}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-12 group flex items-center gap-3 text-sm font-bold tracking-widest uppercase text-gray-500 hover:text-[#00D1FF] transition-colors">
              View Matrix Logic
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── Trajectory ── */}
      <section className="relative py-24 px-4 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
          <motion.div {...fadeLeft}>
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#00D1FF] mb-4 block">Trajectory</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tighter text-white">
              Designed to scale with the robotics industry.
            </h2>
            <p className="mt-6 text-lg text-gray-400 font-light leading-relaxed">
              Our roadmap balances rigorous data governance with rapid expansion into new modalities, industries, and deployment geographies.
            </p>
          </motion.div>

          <div className="relative pl-10">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, ease: easeOutArray }}
              className="absolute left-3 top-2 h-full w-px origin-top bg-gradient-to-b from-[#00D1FF] via-[#00B88F] to-transparent"
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
                  className="relative border border-white/10 bg-[#111] px-6 py-5 hover:border-white/20 transition-colors"
                >
                  <div className="absolute -left-10 top-6 flex h-8 w-8 items-center justify-center border border-white/15 bg-[#111] text-[10px] font-mono text-gray-500">
                    {step.year}
                  </div>
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-gray-500 font-light">{step.copy}</p>
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
