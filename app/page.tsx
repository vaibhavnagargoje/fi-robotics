"use client";

import { motion, useScroll, useTransform } from 'motion/react';
import React, { useRef } from 'react';
import Image from 'next/image';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// ─── Horizontal Scroll Section (desktop only) ───────────────────────────────
function HorizontalScrollSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  // Drive the strip from 0 → -75% as the user scrolls through the sticky zone
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-[#f6f4ef] hidden md:block">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        <motion.div style={{ x }} className="flex gap-32 px-32 w-max items-center h-full">

          {/* Card 1: Intro */}
          <div className="w-[60vw] max-w-4xl shrink-0">
            <h2 className="text-8xl font-medium tracking-tight mb-8 text-[#0f172a] leading-tight">
              Robotics breaks <br />on diversity.
            </h2>
            <p className="text-2xl text-[#0f172a]/60 font-light leading-snug">
              Current robot solutions fail as soon as there is diversity in tasks and objects. For example,
              if Instacart wants to build automated grocery stores, current models wouldn't work. We are solving this.
            </p>
          </div>

          {/* Card 2: Image */}
          <div className="w-[60vw] max-w-5xl shrink-0 h-[70vh] relative rounded-[40px] overflow-hidden shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
            <Image src="/human_demo_data.png" alt="Human Demonstration Data" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 via-transparent to-transparent" />
            <div className="absolute bottom-12 left-12">
              <span className="text-white/80 text-sm font-mono tracking-widest uppercase mb-2 block">The Solution</span>
              <h3 className="text-4xl text-white font-medium">Human Demonstration Data.</h3>
            </div>
          </div>

          {/* Card 3: The Factory */}
          <div className="w-[50vw] max-w-3xl shrink-0">
            <h2 className="text-7xl font-medium tracking-tight mb-8 text-[#0f172a] leading-tight">
              The Data Factory.
            </h2>
            <p className="text-xl text-[#0f172a]/60 font-light leading-snug mb-8">
              We are training models on human demonstration data collected from our data factories. We hire people
              just to collect data, performing a wide variety of tasks—like picking an apple, cutting a garlic, or folding a shirt.
            </p>
            <Link
              href="/company"
              className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-wider bg-[#0f172a] text-[#f6f4ef] px-8 py-4 rounded-full hover:bg-[#00D1FF] hover:text-[#0f172a] transition-all shadow-[0_8px_30px_rgba(15,23,42,0.12)]"
            >
              Inside the Factory <ArrowRight size={16} />
            </Link>
          </div>

          {/* Card 4: Abstract Visual */}
          <div className="w-[60vw] max-w-5xl shrink-0 h-[70vh] relative rounded-[40px] overflow-hidden shadow-[0_24px_60px_rgba(0,209,255,0.15)]">
            <Image src="/vibrant_2.png" alt="Deployments" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 via-transparent to-transparent" />
            <div className="absolute bottom-12 left-12">
              <span className="text-white/80 text-sm font-mono tracking-widest uppercase mb-2 block">Deployments</span>
              <h3 className="text-4xl text-white font-medium">Warehouses, Grocery, Data Centers.</h3>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

// ─── Mobile Cards Section (vertical, no scroll jank) ────────────────────────
function MobileCardsSection() {
  const cards = [
    {
      type: "text" as const,
      title: "Robotics breaks\non diversity.",
      body: "Current robot solutions fail as soon as there is diversity in tasks and objects. For example, if Instacart wants to build automated grocery stores, current models wouldn't work. We are solving this.",
    },
    {
      type: "image" as const,
      src: "/human_demo_data.png",
      label: "The Solution",
      caption: "Human Demonstration Data.",
    },
    {
      type: "text" as const,
      title: "The Data Factory.",
      body: "We are training models on human demonstration data collected from our data factories. We hire people just to collect data, performing a wide variety of tasks.",
      cta: true,
    },
    {
      type: "image" as const,
      src: "/vibrant_2.png",
      label: "Deployments",
      caption: "Warehouses, Grocery, Data Centers.",
    },
  ];

  return (
    // overflow-x-hidden so slide-in from sides doesn't cause horizontal scrollbar
    <section className="block md:hidden bg-[#f6f4ef] py-16 px-5 overflow-x-hidden">
      <div className="flex flex-col gap-10">
        {cards.map((card, i) => {
          // Alternate: odd index slides from right (+x), even from left (-x)
          const xFrom = i % 2 === 0 ? 60 : -60;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: xFrom }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-8%" }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              {card.type === "text" ? (
                <div className="flex flex-col gap-4">
                  <h2 className="text-4xl font-medium tracking-tight text-[#0f172a] leading-tight whitespace-pre-line">
                    {card.title}
                  </h2>
                  <p className="text-base text-[#0f172a]/60 font-light leading-relaxed">{card.body}</p>
                  {card.cta && (
                    <Link
                      href="/company"
                      className="mt-2 self-start inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider bg-[#0f172a] text-[#f6f4ef] px-6 py-3 rounded-full hover:bg-[#00D1FF] hover:text-[#0f172a] transition-all"
                    >
                      Inside the Factory <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              ) : (
                <div className="relative h-[55vw] min-h-[220px] w-full rounded-3xl overflow-hidden shadow-[0_16px_40px_rgba(15,23,42,0.12)]">
                  <Image src={card.src} alt={card.caption} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5">
                    <span className="text-white/80 text-xs font-mono tracking-widest uppercase mb-1 block">{card.label}</span>
                    <h3 className="text-lg text-white font-medium leading-tight">{card.caption}</h3>
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="bg-[#f6f4ef] text-[#0f172a] selection:bg-[#0f172a] selection:text-[#f6f4ef] font-sans min-h-screen">

      {/* ── Hero ── */}
      <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 text-center flex flex-col items-center px-5 mt-16 md:mt-20"
        >
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-black/10 px-4 py-1.5 rounded-full mb-6 md:mb-8 shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
            <span className="w-2 h-2 rounded-full bg-[#00D1FF] animate-pulse" />
            <span className="text-[10px] md:text-xs font-mono tracking-widest uppercase text-[#0f172a]/70">Intelligence Factory</span>
          </div>

          <h1 className="text-[clamp(3rem,12vw,140px)] font-medium tracking-tighter mb-6 md:mb-8 max-w-7xl leading-[0.88] text-[#0f172a]">
            Human intelligence<br />for Robots.
          </h1>

          <p className="text-base md:text-xl lg:text-3xl text-[#0f172a]/70 max-w-xs md:max-w-xl lg:max-w-3xl font-light leading-relaxed">
            We are building robot manipulation models that make robots work in unconstrained and diverse environments.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 md:bottom-12 z-10 flex flex-col items-center gap-3"
        >
          <span className="text-[10px] md:text-xs font-mono tracking-widest uppercase text-[#0f172a]/50">Scroll to explore</span>
          <ChevronDown size={16} className="text-[#0f172a]/50 animate-bounce" />
        </motion.div>

        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-[#c7f1ff]/50 rounded-full blur-[120px] -z-10" />
      </section>

      {/* ── Horizontal scroll (desktop) / Vertical cards (mobile) ── */}
      <HorizontalScrollSection />
      <MobileCardsSection />

      {/* ── Bottleneck Hero Transition ── */}
      <section className="relative min-h-[60vh] md:h-[80vh] w-full flex flex-col justify-center items-center px-5 md:px-4 bg-[#f6f4ef] border-t border-black/5 py-20 md:py-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-10%" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 text-center flex flex-col items-center max-w-5xl"
        >
          <div className="inline-block border border-black/10 rounded-full px-4 py-1 mb-6 md:mb-8 bg-white/50 backdrop-blur-sm shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
            <span className="text-[10px] md:text-xs tracking-widest font-mono uppercase text-[#0f172a]/70">Hardware Innovation</span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter mb-6 md:mb-8 leading-tight text-[#0f172a]">
            Our world was designed<br className="hidden md:block" /> for human hands.
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-[#0f172a]/70 max-w-xs md:max-w-2xl lg:max-w-3xl font-light leading-relaxed">
            As hardware converges to five-finger robot hands, we are building the largest corpus of dexterous hand data that no other competitor currently has.
          </p>
        </motion.div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#ffe4c7] opacity-40 rounded-full blur-[100px] -z-10" />
      </section>

      {/* ── Gloves - Image Left ── */}
      <section className="min-h-screen bg-[#fff5ea] border-t border-black/5 flex flex-col justify-center py-16 md:py-24 px-5 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-15%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[55vw] min-h-[260px] md:h-[80vh] w-full rounded-3xl overflow-hidden bg-white/50 border border-black/10 shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
          >
            <Image src="/custom_robotics_glove.png" alt="Custom Robotics Glove" fill className="object-cover opacity-90" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-15%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-5 md:gap-6 md:pl-16"
          >
            <span className="text-xs font-mono tracking-widest text-[#c26d3b] uppercase block">Hardware 01: Gloves</span>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight text-[#0f172a]">Five-finger details matter.</h3>
            <p className="text-base md:text-lg text-[#0f172a]/60 font-light leading-relaxed">
              We designed and built custom gloves from scratch. They capture ground-truth joint angles and contact forces directly,
              enabling collection of vision, action, and force as one multi-modal dataset.
            </p>
            <div className="mt-4 md:mt-8 border-l-2 border-[#c26d3b]/50 pl-4 py-1">
              <span className="text-xs font-mono tracking-wider text-[#c26d3b]">STATUS: 5-DOF ARTICULATION CAPTURE</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Cameras - Image Right ── */}
      <section className="min-h-screen bg-[#f6f4ef] flex flex-col justify-center py-16 md:py-24 px-5 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-15%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 md:order-1 flex flex-col gap-5 md:gap-6 md:pr-16"
          >
            <span className="text-xs font-mono tracking-widest text-[#00A6C7] uppercase block">Hardware 02: Vision</span>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight text-[#0f172a]">Head-Mounted Cameras.</h3>
            <p className="text-base md:text-lg text-[#0f172a]/60 font-light leading-relaxed">
              Operators wear head-mounted cameras synced with the sensor gloves. This creates a perfect loop of what the
              operator sees and the exact forces they exert, directly training the model's spatial reasoning.
            </p>
            <div className="mt-4 md:mt-8 border-l-2 border-[#00A6C7]/50 pl-4 py-1">
              <span className="text-xs font-mono tracking-wider text-[#00A6C7]">STATUS: MULTI-MODAL SYNC ACTIVE</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-15%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 md:order-2 relative h-[55vw] min-h-[260px] md:h-[80vh] w-full rounded-3xl overflow-hidden bg-white/50 border border-black/10 shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
          >
            <Image src="/head_mounted_camera.png" alt="Head Mounted Camera" fill className="object-cover opacity-90" />
          </motion.div>
        </div>
      </section>

      {/* ── Economics - Image Left ── */}
      <section className="min-h-screen bg-[#eef6f5] border-y border-black/5 flex flex-col justify-center py-16 md:py-24 px-5 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-15%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[55vw] min-h-[220px] md:h-[80vh] w-full rounded-3xl overflow-hidden bg-white/50 border border-black/10 shadow-[0_24px_60px_rgba(15,23,42,0.08)] flex items-center justify-center"
          >
            <div className="text-center p-8 md:p-12">
              <div className="text-6xl md:text-8xl font-medium text-[#00B88F] mb-3 md:mb-4">1/10</div>
              <div className="text-lg md:text-2xl font-light text-[#0f172a]/60">Cost compared to US data collection</div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00B88F]/10 to-transparent pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-15%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-5 md:gap-6 md:pl-16"
          >
            <span className="text-xs font-mono tracking-widest text-[#00B88F] uppercase block">Economics</span>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight text-[#0f172a]">Unmatched scale.</h3>
            <p className="text-base md:text-lg text-[#0f172a]/60 font-light leading-relaxed">
              We are able to collect this data at 1/10 of the cost in the US. By scaling training data and compute
              globally, we position ourselves as one of the only companies in the world able to solve generalized robotics.
            </p>
            <p className="text-base md:text-lg text-[#0f172a]/60 font-light leading-relaxed">
              We can also retarget this rich, dexterous data to lower DOF hardware like grippers for current applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Tech CTA ── */}
      <section className="py-20 md:py-32 px-5 md:px-12 lg:px-24 bg-[#0f172a] text-[#f6f4ef] rounded-t-[2.5rem] md:rounded-t-[3rem] -mt-10 relative z-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-[#00D1FF]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl lg:text-8xl font-medium tracking-tighter mb-6 md:mb-8 leading-tight"
          >
            Solving generalized<br />robotics.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-base md:text-xl lg:text-2xl text-[#f6f4ef]/60 max-w-xs md:max-w-xl lg:max-w-2xl font-light leading-relaxed mb-10 md:mb-12"
          >
            Join us in building the largest corpus of dexterous hand data.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Link
              href="/company"
              className="inline-flex items-center gap-3 bg-[#f6f4ef] text-[#0f172a] px-7 md:px-8 py-3.5 md:py-4 rounded-full font-medium tracking-wide uppercase text-sm hover:bg-[#00D1FF] hover:text-[#0f172a] transition-all duration-300"
            >
              Explore the Company <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
