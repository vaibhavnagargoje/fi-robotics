"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Activity, Users, Database, Clock, ArrowRight, Sparkles, Globe2, ShieldCheck, Layers3 } from "lucide-react";

export default function CompanyPage() {
  const heroRef = useRef<HTMLElement | null>(null);
  const telemetryRef = useRef<HTMLDivElement | null>(null);
  const filmRef = useRef<HTMLDivElement | null>(null);
  const matrixRef = useRef<HTMLDivElement | null>(null);
  const sensorRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress: pageScroll } = useScroll();

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImageY = useTransform(heroScroll, [0, 1], [0, 120]);
  const heroTextY = useTransform(heroScroll, [0, 1], [0, -40]);
  const heroOrbY = useTransform(heroScroll, [0, 1], [0, 90]);
  const heroTiltX = useTransform(heroScroll, [0, 1], [12, -8]);
  const heroTiltY = useTransform(heroScroll, [0, 1], [-8, 10]);
  const heroSpin = useTransform(pageScroll, [0, 1], [0, 160]);

  const { scrollYProgress: telemetryScroll } = useScroll({
    target: telemetryRef,
    offset: ["start end", "end start"],
  });
  const telemetryY = useTransform(telemetryScroll, [0, 1], [60, -60]);
  const telemetryRotate = useTransform(telemetryScroll, [0, 1], [1.5, -1.5]);

  const { scrollYProgress: filmScroll } = useScroll({
    target: filmRef,
    offset: ["start end", "end start"],
  });
  const filmY = useTransform(filmScroll, [0, 1], [50, -40]);

  const { scrollYProgress: matrixScroll } = useScroll({
    target: matrixRef,
    offset: ["start end", "end start"],
  });
  const matrixY = useTransform(matrixScroll, [0, 1], [40, -50]);

  const { scrollYProgress: sensorScroll } = useScroll({
    target: sensorRef,
    offset: ["start end", "end start"],
  });
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
    show: {
      transition: { staggerChildren: 0.18, delayChildren: 0.1 },
    },
  };

  const sensorItemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.85, ease: easeOutArray },
    },
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[#f6f4ef] text-[#0f172a] selection:bg-[#0f172a] selection:text-[#f6f4ef] font-sans">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y: glowDriftOne }}
          className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#c7f1ff] opacity-50 blur-[90px]"
        />
        <motion.div
          style={{ y: glowDriftTwo }}
          className="absolute top-32 right-[-140px] h-[28rem] w-[28rem] rounded-full bg-[#ffe4c7] opacity-55 blur-[100px]"
        />
        <motion.div
          style={{ y: glowDriftThree }}
          className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[#c8ffe8] opacity-45 blur-[110px]"
        />
      </div>

      {/* Company Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen w-full flex flex-col justify-center pb-24 pt-32 px-4 md:px-12 lg:px-24 overflow-hidden"
      >
        <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, ease: easeOutArray }}
            style={{ y: heroTextY }}
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-[#0f172a]/15 bg-white/70 px-4 py-1.5 mb-8 text-xs font-mono uppercase tracking-widest text-[#0f172a]/70 backdrop-blur-sm">
              Company Profile
            </div>
            <h1 className="mt-4 text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter mb-6 leading-tight text-[#0f172a]">
              Building the human layer.
            </h1>
            <p className="text-lg md:text-2xl text-[#0f172a]/70 max-w-2xl font-light leading-relaxed mb-8">
              We scale real-world data capture through precision teleoperation and a global workforce built for robotics.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#0f172a] px-6 py-3 text-sm font-medium uppercase tracking-wider text-[#f6f4ef] hover:bg-[#00A6C7] hover:text-[#f6f4ef] transition-all">
                Talk with us <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          <motion.div style={{ y: heroOrbY }} className="relative">
            <div className="relative mx-auto w-full max-w-md rounded-[32px] border border-black/10 bg-white/70 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.16)] backdrop-blur-xl">
              <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.24em] text-[#0f172a]/60">
                <span>Orbital Core</span>
                <span className="text-[#00A6C7]">Live</span>
              </div>
              <div className="relative mt-6 flex h-[280px] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-b from-white/70 to-transparent">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,209,255,0.18),_transparent_55%)]" />
                <div className="relative h-64 w-64" style={{ perspective: "1200px" }}>
                  <motion.div
                    style={{
                      rotateX: heroTiltX,
                      rotateY: heroTiltY,
                      rotateZ: heroSpin,
                      transformStyle: "preserve-3d",
                    }}
                    className="absolute inset-0"
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00D1FF]/50 via-white to-[#00B88F]/45 shadow-[0_20px_60px_rgba(0,209,255,0.35)]" />
                    <div
                      className="absolute inset-5 rounded-full border border-[#0f172a]/10"
                      style={{ transform: "translateZ(30px)" }}
                    />
                    <div
                      className="absolute inset-10 rounded-full border border-[#00D1FF]/30"
                      style={{ transform: "translateZ(60px)" }}
                    />
                    <div
                      className="absolute inset-16 rounded-full border border-[#00B88F]/35"
                      style={{ transform: "translateZ(90px)" }}
                    />
                    <div className="absolute inset-0" style={{ transform: "translateZ(110px)" }}>
                      <motion.div
                        animate={{ rotateZ: 360 }}
                        transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full border border-[#0f172a]/20 border-dashed"
                      />
                    </div>
                  </motion.div>
                </div>
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-[0.3em] text-[#0f172a]/50">
                  Signal Sync
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-[#0f172a]/60">
                <div className="rounded-2xl border border-black/10 bg-white/70 px-3 py-3">
                  <div className="font-mono tracking-widest text-[#0f172a]/50">CALIBRATED</div>
                  <div className="mt-1 text-base font-semibold text-[#0f172a]">98.7%</div>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white/70 px-3 py-3">
                  <div className="font-mono tracking-widest text-[#0f172a]/50">LATENCY</div>
                  <div className="mt-1 text-base font-semibold text-[#0f172a]">12ms</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Stats Section */}
      <section className="relative pb-24 pt-12 px-4 md:px-12 lg:px-24 border-b border-[#0f172a]/5">
        <motion.div
          {...fadeUp}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {[
            { label: "Operators Online", value: "620+", detail: "Across 3 hubs" },
            { label: "Active Programs", value: "48", detail: "Robotics & logistics" },
            { label: "Data Precision", value: "99.2%", detail: "Quality compliance" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-[#0f172a]/10 bg-white/75 px-6 py-5 shadow-[0_16px_40px_rgba(15,23,42,0.08)]"
            >
              <div className="text-xs font-mono uppercase tracking-widest text-[#0f172a]/50">
                {item.label}
              </div>
              <div className="mt-3 text-3xl font-semibold text-[#0f172a]">{item.value}</div>
              <div className="mt-1 text-sm text-[#0f172a]/60">{item.detail}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Company Operating Principles */}
      <section className="relative py-24 px-4 md:px-12 lg:px-24 bg-[#eef2f3] border-y border-[#0f172a]/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.7),_transparent_70%)]" />
        <div className="relative max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#2b6d77]">Operating Principles</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-[#0f172a]">
              Professional rigor with human-scale empathy.
            </h2>
            <p className="mt-6 text-lg text-[#0f172a]/60 font-light leading-relaxed">
              We combine world-class operator training, systemized QA, and safety-first governance to deliver reliable data at enterprise scale.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Program Integrity",
                copy: "Every workflow is governed by repeatable protocols, calibrated annotations, and third-party audits.",
                icon: ShieldCheck,
              },
              {
                title: "Global Sourcing",
                copy: "Distributed teleoperators with localized teams ensure coverage across time zones and domains.",
                icon: Globe2,
              },
              {
                title: "Model Alignment",
                copy: "We co-design datasets with model teams to keep ground truth, training, and inference aligned.",
                icon: Layers3,
              },
              {
                title: "Signal Density",
                copy: "Captures with multi-sensor telemetry to maximize signal per operator minute.",
                icon: Sparkles,
              },
            ].map((card, index) => (
              <motion.div
                key={card.title}
                {...cardReveal(index * 0.1)}
                className="rounded-3xl border border-[#0f172a]/10 bg-white/85 p-8 shadow-[0_18px_42px_rgba(15,23,42,0.1)]"
              >
                <card.icon className="h-6 w-6 text-[#2b6d77]" />
                <h3 className="mt-5 text-2xl font-semibold text-[#0f172a]">{card.title}</h3>
                <p className="mt-3 text-[#0f172a]/60 leading-relaxed">{card.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Human Labor at Scale */}
      <section className="relative py-28 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto w-full border-b border-[#0f172a]/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div {...fadeLeft}>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-[#0f172a]">Human Labor at Scale.</h2>
            <p className="text-lg text-[#0f172a]/60 font-light mb-16 leading-relaxed">
              Rapid scaling of our teleoperation workforce ensures a continuous, high-volume pipeline of structured kinetic data.
            </p>

            <div className="space-y-12">
              <div className="border-l border-black/10 pl-6 relative">
                <div className="absolute left-[-1px] top-0 w-[2px] h-8 bg-[#00D1FF]"></div>
                <div className="text-sm font-mono tracking-widest text-[#0f172a]/50 mb-2">01. WORKFORCE PROJECTION</div>
                <div className="text-4xl font-medium mb-1 text-[#0f172a]">500+ workers</div>
                <div className="text-sm text-[#0f172a]/60 tracking-wide uppercase">In India by Q3 2026</div>
              </div>

              <div className="border-l border-black/10 pl-6 relative">
                <div className="absolute left-[-1px] top-0 w-[2px] h-8 bg-[#00B88F]"></div>
                <div className="text-sm font-mono tracking-widest text-[#0f172a]/50 mb-2">02. DATA VOLUME TARGET</div>
                <div className="text-4xl font-medium mb-1 text-[#0f172a]">500k+ hours</div>
                <div className="text-sm text-[#0f172a]/60 tracking-wide uppercase">High-fidelity kinetic recordings</div>
              </div>

              <div className="border-l border-black/10 pl-6 relative">
                <div className="absolute left-[-1px] top-0 w-[2px] h-8 bg-[#0f172a]"></div>
                <div className="text-sm font-mono tracking-widest text-[#0f172a]/50 mb-2">03. UNIT ECONOMICS</div>
                <div className="text-4xl font-medium mb-1 text-[#0f172a]">$10/hr</div>
                <div className="text-sm text-[#0f172a]/60 tracking-wide uppercase">Average acquisition cost</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeRight}
            ref={telemetryRef}
            style={{ y: telemetryY, rotate: telemetryRotate }}
            className="bg-white/80 border border-black/10 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-[0_24px_60px_rgba(15,23,42,0.12)]"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00D1FF] to-transparent opacity-40"></div>

            <div className="flex justify-between items-center mb-16">
              <div className="border border-[#00D1FF]/30 text-[#008ea6] text-xs font-mono px-3 py-1 rounded bg-[#00D1FF]/10">
                LOGISTICS.TELEMETRY
              </div>
              <Activity className="text-[#0f172a]/35" />
            </div>

            <div className="grid grid-cols-2 gap-y-16 gap-x-8">
              <div>
                <div className="text-sm font-mono text-[#0f172a]/50 mb-2 flex items-center gap-2">
                  <Clock size={14} /> LATENCY
                </div>
                <div className="text-4xl font-light text-[#00A6C7]">12ms</div>
              </div>
              <div>
                <div className="text-sm font-mono text-[#0f172a]/50 mb-2 flex items-center gap-2">
                  <Users size={14} /> NODES
                </div>
                <div className="text-4xl font-light text-[#0f172a]">42</div>
              </div>
              <div>
                <div className="text-sm font-mono text-[#0f172a]/50 mb-2 flex items-center gap-2">
                  <Activity size={14} /> UPTIME
                </div>
                <div className="text-4xl font-light text-[#00B88F]">99.9%</div>
              </div>
              <div>
                <div className="text-sm font-mono text-[#0f172a]/50 mb-2 flex items-center gap-2">
                  <Database size={14} /> THROUGHPUT
                </div>
                <div className="text-4xl font-light text-[#0f172a]">8.4<span className="text-2xl text-[#0f172a]/50">TB/s</span></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Custom Sensor Hardware */}
      <section
        ref={sensorRef}
        className="relative py-28 px-4 md:px-12 lg:px-24 bg-[#eef6f5] w-full border-b border-black/5"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="mb-20">
            <span className="text-xs font-mono tracking-widest text-[#008ea6] uppercase mb-4 block">Hardware Specifications</span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-[#0f172a]">Custom Sensor Hardware.</h2>
            <p className="text-lg text-[#0f172a]/60 font-light max-w-2xl leading-relaxed">
              Proprietary capture rigs engineered for zero-loss human kinematic translation. Every joint, force, and visual field is recorded with absolute precision.
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
            <motion.div variants={sensorItemVariants} className="group cursor-pointer">
              <div className="relative h-64 w-full bg-white/80 rounded-2xl overflow-hidden mb-6 border border-black/10 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
                <img
                  src="/head_mounted_camera.png"
                  alt="Head-Mounted Cameras"
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-medium tracking-tight mb-3 text-[#0f172a]">Head-Mounted Cameras</h3>
              <p className="text-[#0f172a]/60 text-sm font-light leading-relaxed">
                Operators wear head-mounted cameras synced with the sensor gloves, perfectly matching visual input with physical exertion.
              </p>
            </motion.div>

            <motion.div variants={sensorItemVariants} className="group cursor-pointer">
              <div className="relative h-64 w-full bg-white/80 rounded-2xl overflow-hidden mb-6 border border-black/10 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
                <img
                  src="/custom_robotics_glove.png"
                  alt="Custom 5-Finger Gloves"
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-medium tracking-tight mb-3 text-[#0f172a]">Custom 5-Finger Gloves</h3>
              <p className="text-[#0f172a]/60 text-sm font-light leading-relaxed">
                We designed and built custom gloves to capture ground-truth joint angles and contact forces directly at 5-DOF.
              </p>
            </motion.div>

            <motion.div variants={sensorItemVariants} className="group cursor-pointer">
              <div className="relative h-64 w-full bg-white/80 rounded-2xl overflow-hidden mb-6 border border-black/10 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
                <img
                  src="/human_demo_data.png"
                  alt="Multi-modal Datasets"
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-medium tracking-tight mb-3 text-[#0f172a]">Multi-Modal Integration</h3>
              <p className="text-[#0f172a]/60 text-sm font-light leading-relaxed">
                Vision, action, and force fused into one holistic dataset. Retargetable to lower DOF hardware like standard grippers.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Operations Film */}
      <section className="relative py-28 px-4 md:px-12 lg:px-24 w-full border-b border-[#0f172a]/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          <motion.div {...fadeLeft}>
            <span className="text-xs font-mono tracking-widest text-[#008ea6] uppercase mb-4 block">Operational Film</span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-[#0f172a]">Teleoperation in the wild.</h2>
            <p className="text-lg text-[#0f172a]/60 font-light leading-relaxed">
              Watch real-time annotation capture and multi-sensor synchronization in action. This reel highlights how our operators convert noisy environments into structured training data.
            </p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-[#0f172a]/60">
              <div className="rounded-2xl border border-black/10 bg-white/70 px-5 py-4">
                <div className="text-xs font-mono tracking-widest text-[#0f172a]/50 mb-2">CAPTURE MODE</div>
                <div className="text-lg font-medium text-[#0f172a]">Multi-perspective</div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white/70 px-5 py-4">
                <div className="text-xs font-mono tracking-widest text-[#0f172a]/50 mb-2">SYNC LAYER</div>
                <div className="text-lg font-medium text-[#0f172a]">Sub-20ms</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            {...fadeRight}
            ref={filmRef}
            style={{ y: filmY }}
            className="relative h-[360px] md:h-[480px] w-full overflow-hidden rounded-3xl border border-black/10 shadow-[0_24px_60px_rgba(15,23,42,0.12)]"
          >
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/data_vision.png"
            >
              <source
                src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* Task Selection Matrix */}
      <section className="relative py-28 px-4 md:px-12 lg:px-24 bg-[#fff5ea] w-full border-b border-[#0f172a]/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            {...fadeLeft}
            ref={matrixRef}
            style={{ y: matrixY }}
            className="order-2 lg:order-1 relative h-[50vh] md:h-[70vh] w-full rounded-3xl overflow-hidden border border-black/10 shadow-[0_24px_60px_rgba(15,23,42,0.12)]"
          >
            <Image src="/matrix_viz.png" alt="Data Matrix Visualization" fill className="object-cover" />
          </motion.div>

          <motion.div {...fadeRight} className="order-1 lg:order-2">
            <span className="text-xs font-mono tracking-widest text-[#0f172a]/60 uppercase mb-6 block border border-black/10 w-max px-3 py-1 rounded-full">
              Protocol.Selection
            </span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-[#0f172a]">Task Selection Matrix.</h2>
            <p className="text-lg text-[#0f172a]/60 font-light mb-12 leading-relaxed">
              We don't just collect data; we engineer it. Our systematic approach ensures complete coverage of operational parameters, focusing human effort precisely where synthetic data falls short.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 group cursor-pointer">
                <div className="w-10 h-10 shrink-0 rounded-full border border-[#00D1FF]/50 flex items-center justify-center text-[#00A6C7] font-mono group-hover:bg-[#00D1FF] group-hover:text-[#0f172a] transition-all">
                  X
                </div>
                <div>
                  <h4 className="font-mono text-sm tracking-widest text-[#0f172a] mb-2">EDGE-CASE IDENTIFICATION</h4>
                  <p className="text-sm text-[#0f172a]/60 font-light">
                    Algorithmic targeting of sparse-data domains to intentionally train outlier scenarios.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group cursor-pointer">
                <div className="w-10 h-10 shrink-0 rounded-full border border-[#00B88F]/60 flex items-center justify-center text-[#00B88F] font-mono group-hover:bg-[#00B88F] group-hover:text-[#0f172a] transition-all">
                  Y
                </div>
                <div>
                  <h4 className="font-mono text-sm tracking-widest text-[#0f172a] mb-2">DIVERSITY INJECTION</h4>
                  <p className="text-sm text-[#0f172a]/60 font-light">
                    Systematic variation of environmental, lighting, and object parameters to ensure robust generalization.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group cursor-pointer">
                <div className="w-10 h-10 shrink-0 rounded-full border border-black/30 flex items-center justify-center text-[#0f172a]/70 font-mono group-hover:bg-[#0f172a] group-hover:text-[#f6f4ef] transition-all">
                  Z
                </div>
                <div>
                  <h4 className="font-mono text-sm tracking-widest text-[#0f172a] mb-2">COVERAGE VALIDATION</h4>
                  <p className="text-sm text-[#0f172a]/60 font-light">
                    Real-time mapping of collected data against theoretical requirement matrices.
                  </p>
                </div>
              </div>
            </div>

            <button className="mt-12 group flex items-center gap-3 text-sm font-medium tracking-wider uppercase text-[#0f172a] hover:text-[#00D1FF] transition-colors">
              View Matrix Logic
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Trajectory */}
      <section className="relative py-24 px-4 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
          <motion.div {...fadeLeft}>
            <span className="text-xs font-mono uppercase tracking-widest text-[#2b6d77]">Trajectory</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-[#0f172a]">
              Designed to scale with the robotics industry.
            </h2>
            <p className="mt-6 text-lg text-[#0f172a]/60 font-light leading-relaxed">
              Our roadmap balances rigorous data governance with rapid expansion into new modalities, industries, and deployment geographies.
            </p>
          </motion.div>

          <div className="relative pl-10">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, ease: easeOutArray }}
              className="absolute left-3 top-2 h-full w-px origin-top bg-gradient-to-b from-[#2b6d77] via-[#c26d3b] to-transparent"
            />
            <div className="space-y-10">
              {[
                {
                  year: "2024",
                  title: "Factory launch",
                  copy: "Established baseline teleoperation lab and first robotics pilots.",
                },
                {
                  year: "2025",
                  title: "Multi-modal expansion",
                  copy: "Rolled out synchronized vision, tactile, and proprioceptive capture.",
                },
                {
                  year: "2026",
                  title: "Global operator grid",
                  copy: "Scaled to three hubs with 24/7 coverage and QA automation.",
                },
                {
                  year: "2027",
                  title: "Enterprise programs",
                  copy: "Operational readiness for regulated robotics and logistics partners.",
                },
              ].map((step, index) => (
                <motion.div
                  key={step.year}
                  {...cardReveal(index * 0.1)}
                  className="relative rounded-2xl border border-[#0f172a]/10 bg-white/80 px-6 py-5 shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
                >
                  <div className="absolute -left-10 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-[#0f172a]/20 bg-white text-xs font-mono text-[#0f172a]/70">
                    {step.year}
                  </div>
                  <h3 className="text-xl font-semibold text-[#0f172a]">{step.title}</h3>
                  <p className="mt-2 text-[#0f172a]/60">{step.copy}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="relative py-24 px-4 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#2b6d77]">Leadership</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-[#0f172a]">
              Operators, engineers, and mission builders.
            </h2>
            <p className="mt-4 text-lg text-[#0f172a]/60 font-light leading-relaxed">
              A cross-functional team spanning autonomy research, enterprise operations, and workforce design.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Yash Sinha", role: "Founder", image: "/vibrant_2.png" },
              { name: "Marco Singh", role: "Head of Data Programs", image: "/teleop_concept.png" },
              { name: "Elena Rivera", role: "Director of QA Systems", image: "/synthetic_concept.png" },
            ].map((person, index) => (
              <motion.div
                key={person.name}
                {...cardReveal(index * 0.1)}
                className="rounded-3xl border border-[#0f172a]/10 bg-white/80 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.1)]"
              >
                <div className="relative h-56 w-full overflow-hidden rounded-2xl">
                  <Image src={person.image} alt={person.name} fill className="object-cover" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[#0f172a]">{person.name}</h3>
                <p className="mt-2 text-[#0f172a]/60">{person.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#f0ebe3] py-20 px-8 border-t border-[#0f172a]/10 mt-auto">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-1">
            <div className="font-medium text-2xl tracking-tight mb-4 text-[#0f172a]">IF</div>
            <p className="text-sm text-[#0f172a]/80 font-light">© 2026 Intelligence Factory.</p>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs font-medium tracking-widest text-[#0f172a]/80 uppercase mb-2">Company</span>
            <Link href="/company" className="text-sm text-[#0f172a] hover:text-[#2b6d77] transition-colors font-light">
              About
            </Link>
            <Link href="/team" className="text-sm text-[#0f172a]/80 hover:text-[#0f172a] transition-colors font-light">
              Team
            </Link>
            <Link href="/careers" className="text-sm text-[#0f172a]/80 hover:text-[#0f172a] transition-colors font-light">
              Careers
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs font-medium tracking-widest text-[#0f172a]/80 uppercase mb-2">Technology</span>
            <a href="#" className="text-sm text-[#0f172a]/80 hover:text-[#0f172a] transition-colors font-light">
              Models
            </a>
            <a href="#" className="text-sm text-[#0f172a]/80 hover:text-[#0f172a] transition-colors font-light">
              Research
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs font-medium tracking-widest text-[#0f172a]/80 uppercase mb-2">Social</span>
            <a href="#" className="text-sm text-[#0f172a]/80 hover:text-[#0f172a] transition-colors font-light">
              X / Twitter
            </a>
            <Link href="/contact" className="text-sm text-[#0f172a]/80 hover:text-[#0f172a] transition-colors font-light">
              Contact
            </Link>
            <a href="#" className="text-sm text-[#0f172a]/80 hover:text-[#0f172a] transition-colors font-light">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
