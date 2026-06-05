"use client";

import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import Footer from "@/components/Footer";
import ParticleGrid from "@/components/ParticleGrid";
import HeroWireframe from "@/components/HeroWireframe";
import GlowCard from "@/components/GlowCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import TextReveal from "@/components/TextReveal";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);
  const heroScale = useTransform(heroScroll, [0, 1], [1, 0.95]);
  const heroY = useTransform(heroScroll, [0, 1], [0, 20]);

  const statsRef = useRef<HTMLElement>(null);
  const { scrollYProgress: statsScroll } = useScroll({
    target: statsRef,
    offset: ["start end", "end start"],
  });
  const statsY = useTransform(statsScroll, [0, 1], [40, -20]);

  return (
    <div className="bg-[#050508] text-[#e8e8f0] selection:bg-[#00D1FF]/30 selection:text-white font-sans min-h-screen">

      {/* ── Hero ── */}
      <section
        ref={heroRef}
        className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden px-4"
      >
        {/* Particle canvas background */}
        <ParticleGrid />

        {/* 3D Wireframe */}
        <HeroWireframe />

        {/* Ambient glows */}
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-[#00D1FF]/[0.04] blur-[180px] pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#00B88F]/[0.03] blur-[200px] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050508]/40 to-[#050508] pointer-events-none z-[2]" />

        <motion.div
          style={{ scale: heroScale, y: heroY }}
          className="relative z-20 text-center flex flex-col items-center mt-12 w-full max-w-7xl px-4"
        >
          {/* Label pill */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 glass px-5 py-2 rounded-full mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#00D1FF] animate-pulse" style={{ boxShadow: "0 0 8px rgba(0,209,255,0.8)" }} />
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/60">Intelligence Factory</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.5rem,7.5vw,7.5rem)] font-extrabold tracking-tighter mb-6 leading-[0.85] text-white"
          >
            <span className="animate-glow-breathe inline-block">HUMAN</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-200 via-gray-400 to-gray-700">INTELLIGENCE</span><br />
            <span className="animate-glow-breathe inline-block">FOR ROBOTS.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-base md:text-lg text-gray-400 max-w-2xl font-light leading-relaxed mb-8"
          >
            Building the foundation models to make physical autonomy work in unconstrained, diverse environments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/company"
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden bg-white text-black px-8 py-4 font-bold text-sm tracking-widest uppercase hover:shadow-[0_0_30px_rgba(0,209,255,0.2)] transition-all"
            >
              <span className="relative z-10 flex items-center gap-3">
                Our Approach <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/careers"
              className="group inline-flex items-center justify-center gap-3 border border-[#00D1FF]/20 text-white px-8 py-4 font-bold text-sm tracking-widest uppercase hover:bg-[#00D1FF]/5 hover:border-[#00D1FF]/40 transition-all"
            >
              Join the Team
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D1FF] animate-pulse" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 z-10 flex flex-col items-center gap-3"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase text-white/20">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={16} className="text-[#00D1FF]/40" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Stats Bar ── */}
      <section ref={statsRef} className="relative border-y border-white/[0.06] bg-[#050508] py-16 sm:py-20 overflow-hidden">
        {/* Animated gradient top border */}
        <div className="absolute top-0 left-0 right-0 h-px">
          <div
            className="h-full w-full"
            style={{
              background: "linear-gradient(90deg, transparent, #00D1FF44, #00B88F44, transparent)",
              backgroundSize: "200% 100%",
              animation: "gradient-slide 6s linear infinite",
            }}
          />
        </div>

        <motion.div style={{ y: statsY }} className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {[
            { stat: "1/10x", label: "Data Collection Cost", color: "0, 209, 255" },
            { stat: "5", label: "DOF Articulation Capture", suffix: "-DOF", color: "0, 184, 143" },
            { stat: "Multi", label: "Modal Sensor Fusion", suffix: "-Modal", color: "194, 109, 59" },
            { stat: "Global", label: "Factory Network", color: "123, 97, 255" },
          ].map(({ stat, label, color }) => (
            <GlowCard key={label} glowColor={color} className="text-center p-6 sm:p-8">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2 font-mono">
                {/^\d/.test(stat) ? <AnimatedCounter target={stat} className="text-2xl sm:text-3xl font-bold text-white" /> : stat}
              </div>
              <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest font-mono">{label}</div>
            </GlowCard>
          ))}
        </motion.div>
      </section>

      {/* ── Bento Box Grid ── */}
      <section className="relative z-20 px-4 md:px-8 py-24 md:py-32 bg-[#050508]">
        <div className="absolute inset-0 dot-bg opacity-40" />

        <div className="relative max-w-7xl mx-auto">
          <div className="mb-16 md:mb-24">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#00D1FF] mb-4 block"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              The Problem
            </motion.span>
            <TextReveal
              text="Robotics breaks\non diversity."
              as="h2"
              className="text-3xl md:text-5xl lg:text-7xl font-extrabold tracking-tighter text-white mb-6"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-400 font-light max-w-3xl leading-relaxed"
            >
              Current robotic solutions fail as soon as there is variance in tasks and objects. We solve this through massive-scale human demonstration data.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[380px] md:auto-rows-[420px]">
            {/* Item 1: Data Factory — large */}
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1 }}
              className="md:col-span-8 relative rounded-none overflow-hidden group border border-white/[0.06] hover:border-[#00D1FF]/20 transition-all duration-500 scan-line"
            >
              <Image src="/human_demo_data.png" alt="Data Factory" fill className="object-cover opacity-50 group-hover:scale-105 group-hover:opacity-70 transition-all duration-1000 ease-out" sizes="(max-width: 768px) 100vw, 67vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/50 to-transparent" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#00D1FF]/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <span className="text-[#00D1FF] text-[10px] tracking-[0.2em] uppercase mb-3 block" style={{ fontFamily: "'Orbitron', sans-serif" }}>01 / Data Factory</span>
                <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">Human Demonstration.</h3>
                <p className="text-gray-400 text-base md:text-lg font-light max-w-2xl leading-relaxed">
                  We hire teleoperators to collect raw interaction data across diverse environments, capturing exactly how humans manipulate objects.
                </p>
              </div>
            </motion.div>

            {/* Item 2: Economics — small */}
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, delay: 0.15 }}
              className="md:col-span-4 relative overflow-hidden border border-white/[0.06] hover:border-[#00B88F]/30 transition-all duration-500 flex flex-col justify-between p-8 md:p-10 group scan-line"
              style={{ background: "#0a0a0f" }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#00B88F]/50 via-transparent to-transparent" />
              <div>
                <span className="text-[#00B88F] text-[10px] tracking-[0.2em] uppercase mb-3 block" style={{ fontFamily: "'Orbitron', sans-serif" }}>02 / Economics</span>
                <h3 className="text-2xl font-extrabold tracking-tight text-white mb-2">Unmatched Scale.</h3>
                <p className="text-gray-500 text-sm font-light">Collecting data at a fraction of US costs.</p>
              </div>
              <div className="mt-auto">
                <div className="text-6xl md:text-8xl font-extrabold tracking-tighter text-white group-hover:text-[#00B88F] transition-colors duration-500">
                  <AnimatedCounter target="1/10" className="" />
                </div>
                <div className="text-[10px] tracking-widest text-[#00B88F] uppercase mt-2" style={{ fontFamily: "'Orbitron', sans-serif" }}>The cost overhead</div>
              </div>
            </motion.div>

            {/* Item 3: Hardware Gloves */}
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="md:col-span-6 relative overflow-hidden group border border-white/[0.06] hover:border-[#c26d3b]/20 transition-all duration-500 scan-line"
            >
              <Image src="/custom_robotics_glove.png" alt="Hardware Gloves" fill className="object-cover opacity-40 group-hover:scale-105 group-hover:opacity-60 transition-all duration-1000 ease-out" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/30 to-transparent" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#c26d3b]/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-10">
                <span className="text-[#c26d3b] text-[10px] tracking-[0.2em] uppercase mb-3 block" style={{ fontFamily: "'Orbitron', sans-serif" }}>03 / Hardware</span>
                <h3 className="text-2xl font-extrabold tracking-tight text-white mb-3">Custom Sensor Gloves.</h3>
                <p className="text-gray-400 font-light text-sm max-w-sm">Capturing ground-truth joint angles and contact forces for high-DOF articulation.</p>
              </div>
            </motion.div>

            {/* Item 4: Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="md:col-span-6 relative overflow-hidden group border border-white/[0.06] hover:border-[#00A6C7]/20 transition-all duration-500 scan-line"
            >
              <Image src="/head_mounted_camera.png" alt="Head Mounted Camera" fill className="object-cover opacity-40 group-hover:scale-105 group-hover:opacity-60 transition-all duration-1000 ease-out" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/30 to-transparent" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#00A6C7]/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-10">
                <span className="text-[#00A6C7] text-[10px] tracking-[0.2em] uppercase mb-3 block" style={{ fontFamily: "'Orbitron', sans-serif" }}>04 / Vision</span>
                <h3 className="text-2xl font-extrabold tracking-tight text-white mb-3">Head-Mounted Optic.</h3>
                <p className="text-gray-400 font-light text-sm max-w-sm">Syncing visual input precisely with physical force exertion for multi-modal datasets.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="relative py-32 md:py-40 px-4 md:px-8 overflow-hidden">
        {/* Ambient effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-[#0a0a0f] to-[#050508]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00D1FF]/[0.03] rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute inset-0 dot-bg opacity-20" />

        <div className="relative max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-[0.2em] uppercase text-[#00D1FF] mb-6 block"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            The Mission
          </motion.span>

          <TextReveal
            text="Solving generalized\nrobotics."
            as="h2"
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-6 leading-tight text-white"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-gray-400 font-light leading-relaxed mb-12 max-w-2xl"
          >
            Join a collective of roboticists, simulation experts, and hardware engineers solving physical autonomy at scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/team"
              className="group relative overflow-hidden inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 font-bold text-sm tracking-widest uppercase hover:shadow-[0_0_30px_rgba(0,209,255,0.2)] transition-all"
            >
              <span className="relative z-10">Meet the Team</span>
            </Link>
            <Link
              href="/careers"
              className="group inline-flex items-center justify-center gap-2 border border-[#00D1FF]/20 text-white px-8 py-4 font-bold text-sm tracking-widest uppercase hover:bg-[#00D1FF]/5 hover:border-[#00D1FF]/40 transition-all"
            >
              Open Roles
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D1FF] animate-pulse" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
