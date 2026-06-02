"use client";

import { motion, useScroll, useTransform } from 'motion/react';
import React, { useRef } from 'react';
import Image from 'next/image';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function App() {
  const containerRef = useRef(null);
  const targetRef = useRef(null);
  
  // Horizontal scroll calculations
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <div ref={containerRef} className="bg-[#f6f4ef] text-[#0f172a] selection:bg-[#0f172a] selection:text-[#f6f4ef] font-sans min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 text-center flex flex-col items-center px-4 mt-20"
        >
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-black/10 px-4 py-1.5 rounded-full mb-8 shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
            <span className="w-2 h-2 rounded-full bg-[#00D1FF] animate-pulse"></span>
            <span className="text-xs font-mono tracking-widest uppercase text-[#0f172a]/70">The New Paradigm</span>
          </div>
          <h1 className="text-6xl md:text-[140px] font-medium tracking-tighter mb-8 max-w-7xl leading-[0.85] text-[#0f172a]">
            Intelligence,<br/>manifested.
          </h1>
          <p className="text-xl md:text-3xl text-[#0f172a]/70 max-w-3xl font-light leading-relaxed">
            We are building the foundation models that enable machines to understand, learn, and navigate the physical world.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 z-10 flex flex-col items-center gap-3"
        >
          <span className="text-xs font-mono tracking-widest uppercase text-[#0f172a]/50">Scroll to explore</span>
          <ChevronDown size={16} className="text-[#0f172a]/50 animate-bounce" />
        </motion.div>

        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c7f1ff]/50 rounded-full blur-[120px] -z-10"></div>
      </section>

      {/* GSAP-Style Horizontal Scroll Section */}
      <section ref={targetRef} className="relative h-[400vh] bg-[#f6f4ef]">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
          
          <motion.div style={{ x }} className="flex gap-16 md:gap-32 px-8 md:px-32 w-max items-center h-full">
            
            {/* Card 1: Intro */}
            <div className="w-[85vw] md:w-[60vw] max-w-4xl shrink-0">
              <h2 className="text-5xl md:text-8xl font-medium tracking-tight mb-8 text-[#0f172a] leading-tight">
                Robotics has no <br/>internet.
              </h2>
              <p className="text-2xl text-[#0f172a]/60 font-light leading-snug">
                Language models had the web. To give robots general intelligence, we must build the data pipelines from the ground up.
              </p>
            </div>

            {/* Card 2: Vibrant Image Reveal */}
            <div className="w-[85vw] md:w-[60vw] max-w-5xl shrink-0 h-[70vh] relative rounded-[40px] overflow-hidden shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
              <Image src="/vibrant_1.png" alt="Sleek Robotic Arm" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-12 left-12">
                <span className="text-white/80 text-sm font-mono tracking-widest uppercase mb-2 block">Hardware</span>
                <h3 className="text-4xl text-white font-medium">Precision Actuation.</h3>
              </div>
            </div>

            {/* Card 3: The Factory */}
            <div className="w-[85vw] md:w-[50vw] max-w-3xl shrink-0">
              <h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-8 text-[#0f172a] leading-tight">
                The Data Factory.
              </h2>
              <p className="text-xl text-[#0f172a]/60 font-light leading-snug mb-8">
                We hire humans to intentionally generate training data. Overcoming the bottleneck requires high-fidelity, teleoperated collection using custom sensor hardware.
              </p>
              <Link href="/company" className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-wider bg-[#0f172a] text-[#f6f4ef] px-8 py-4 rounded-full hover:bg-[#00D1FF] hover:text-[#0f172a] transition-all shadow-[0_8px_30px_rgba(15,23,42,0.12)]">
                Inside the Factory <ArrowRight size={16} />
              </Link>
            </div>

            {/* Card 4: Abstract Visual */}
            <div className="w-[85vw] md:w-[60vw] max-w-5xl shrink-0 h-[70vh] relative rounded-[40px] overflow-hidden shadow-[0_24px_60px_rgba(0,209,255,0.15)]">
              <Image src="/vibrant_2.png" alt="Data Network" fill className="object-cover" />
            </div>

          </motion.div>

        </div>
      </section>

      {/* Bottleneck Hero Transition */}
      <section className="relative h-[80vh] w-full flex flex-col justify-center items-center px-4 bg-[#f6f4ef] border-t border-black/5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 text-center flex flex-col items-center max-w-5xl"
        >
          <div className="inline-block border border-black/10 rounded-full px-4 py-1 mb-8 bg-white/50 backdrop-blur-sm shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
            <span className="text-xs tracking-widest font-mono uppercase text-[#0f172a]/70">System Analysis</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-medium tracking-tighter mb-8 leading-tight text-[#0f172a]">
            Current data models are structurally flawed.
          </h2>
          <p className="text-lg md:text-xl text-[#0f172a]/70 max-w-3xl font-light leading-relaxed">
            The robotics industry is stalled. Training foundation models relies on data collection techniques that fail to capture the physical nuance of the real world.
          </p>
        </motion.div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ffe4c7] opacity-40 rounded-full blur-[100px] -z-10"></div>
      </section>

      {/* Teleoperation - Image Left */}
      <section className="min-h-screen bg-[#fff5ea] border-t border-black/5 flex flex-col justify-center py-24 px-4 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 items-center max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[50vh] md:h-[80vh] w-full rounded-3xl overflow-hidden bg-white/50 border border-black/10 shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
          >
            <Image src="/teleop_concept.png" alt="Teleoperation bottleneck" fill className="object-cover opacity-90" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6 md:pl-16"
          >
            <span className="text-xs font-mono tracking-widest text-[#c26d3b] uppercase block">Method 01: Teleoperation</span>
            <h3 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight text-[#0f172a]">Clunky constraints.</h3>
            <p className="text-lg text-[#0f172a]/60 font-light leading-relaxed">
              Human intuition degrades through rigid mechanical interfaces. The collection process is fundamentally slow, non-scalable, and locked entirely to expensive, specialized hardware.
            </p>
            <div className="mt-8 border-l-2 border-red-500/50 pl-4 py-1">
              <span className="text-xs font-mono tracking-wider text-red-600">STATUS: THROUGHPUT LOW</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Synthetic Data - Image Right */}
      <section className="min-h-screen bg-[#f6f4ef] flex flex-col justify-center py-24 px-4 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 items-center max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 md:order-1 flex flex-col gap-6 md:pr-16"
          >
            <span className="text-xs font-mono tracking-widest text-[#00A6C7] uppercase block">Method 02: Synthetic Data</span>
            <h3 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight text-[#0f172a]">The Fidelity Gap.</h3>
            <p className="text-lg text-[#0f172a]/60 font-light leading-relaxed">
              Physics engine approximations inevitably lead to severe sim-to-real performance degradation. They fail entirely to model complex, real-world material deformations and chaos.
            </p>
            <div className="mt-8 border-l-2 border-red-500/50 pl-4 py-1">
              <span className="text-xs font-mono tracking-wider text-red-600">STATUS: FIDELITY CRITICAL</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 md:order-2 relative h-[50vh] md:h-[80vh] w-full rounded-3xl overflow-hidden bg-white/50 border border-black/10 shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
          >
            <Image src="/synthetic_concept.png" alt="Synthetic Data" fill className="object-cover opacity-90" />
          </motion.div>
        </div>
      </section>

      {/* Passive Video - Image Left */}
      <section className="min-h-screen bg-[#eef6f5] border-y border-black/5 flex flex-col justify-center py-24 px-4 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 items-center max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[50vh] md:h-[80vh] w-full rounded-3xl overflow-hidden bg-white/50 border border-black/10 shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
          >
            <Image src="/video_bias_concept.png" alt="Passive Video Bias" fill className="object-cover opacity-90" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6 md:pl-16"
          >
            <span className="text-xs font-mono tracking-widest text-[#00B88F] uppercase block">Method 03: Passive Video</span>
            <h3 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight text-[#0f172a]">The Collection Bias.</h3>
            <p className="text-lg text-[#0f172a]/60 font-light leading-relaxed">
              Scraping internet video provides volume, but is fundamentally biased. It demonstrates idealized outcomes without capturing the friction, edge cases, and failure recovery required for true physical mastery.
            </p>
            <div className="mt-8 border-l-2 border-red-500/50 pl-4 py-1">
              <span className="text-xs font-mono tracking-wider text-red-600">STATUS: DATA INSUFFICIENT</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Standard Vertical Section: Technology */}
      <section className="relative z-30 bg-[#f6f4ef] py-32 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-8 md:px-16 w-full">
          <div className="mb-24 text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-8 text-[#0f172a]">A new class of intelligence.</h2>
            <p className="text-xl text-[#0f172a]/60 font-light">
              By merging teleoperated kinetic data with advanced foundation models, we are solving the most complex challenges in spatial navigation and physical manipulation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/80 border border-black/10 p-12 rounded-[40px] flex flex-col justify-between h-[500px] group hover:border-[#00D1FF]/50 transition-colors duration-500 cursor-pointer shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
              <div>
                <span className="text-xs font-mono tracking-widest text-[#008ea6] uppercase mb-4 block group-hover:text-[#00D1FF] transition-colors">Spatial Intelligence</span>
                <h3 className="text-3xl font-medium tracking-tight mb-4 text-[#0f172a]">Understanding depth.</h3>
                <p className="text-[#0f172a]/60 font-light leading-relaxed">
                  Advanced vision systems mapping environments in real-time. Unprecedented precision in unstructured spaces.
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <ArrowRight size={20} className="text-[#0f172a]" />
              </div>
            </div>

            <div className="bg-white/80 border border-black/10 text-[#0f172a] p-12 rounded-[40px] flex flex-col justify-between h-[500px] group cursor-pointer relative overflow-hidden hover:border-[#00B88F]/50 transition-colors duration-500 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00D1FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <span className="text-xs font-mono tracking-widest text-[#00B88F] uppercase mb-4 block group-hover:text-[#0f172a] transition-colors">Hardware Integration</span>
                <h3 className="text-3xl font-medium tracking-tight mb-4">Fluid dexterity.</h3>
                <p className="text-[#0f172a]/60 font-light leading-relaxed">
                  Software is only half the equation. We seamlessly integrate foundation models with premium physical actuators.
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#00B88F]/10 text-[#00B88F] backdrop-blur flex items-center justify-center group-hover:bg-[#00B88F] group-hover:text-[#f6f4ef] transition-colors relative z-10">
                <ArrowRight size={20} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Light Theme Footer */}
      <footer className="bg-[#f0ebe3] py-24 px-8 border-t border-black/10 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-1">
            <div className="font-medium text-2xl tracking-tighter mb-4 text-[#0f172a]">f(i)</div>
            <p className="text-sm text-[#0f172a]/50 font-light">© 2026 Foundation Intelligence.</p>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs font-medium tracking-widest text-[#0f172a]/40 uppercase mb-2">Company</span>
            <Link href="/company" className="text-sm text-[#0f172a]/60 hover:text-[#0f172a] transition-colors font-light">About</Link>
            <Link href="/team" className="text-sm text-[#0f172a]/60 hover:text-[#0f172a] transition-colors font-light">Team</Link>
            <Link href="/careers" className="text-sm text-[#0f172a]/60 hover:text-[#0f172a] transition-colors font-light">Careers</Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs font-medium tracking-widest text-[#0f172a]/40 uppercase mb-2">Technology</span>
            <a href="#" className="text-sm text-[#0f172a]/60 hover:text-[#0f172a] transition-colors font-light">Models</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs font-medium tracking-widest text-[#0f172a]/40 uppercase mb-2">Social</span>
            <a href="#" className="text-sm text-[#0f172a]/60 hover:text-[#0f172a] transition-colors font-light">X / Twitter</a>
            <a href="#" className="text-sm text-[#0f172a]/60 hover:text-[#0f172a] transition-colors font-light">LinkedIn</a>
            <Link href="/contact" className="text-sm text-[#0f172a]/60 hover:text-[#0f172a] transition-colors font-light">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
