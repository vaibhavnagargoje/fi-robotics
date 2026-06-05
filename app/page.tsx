"use client";

import { motion } from 'motion/react';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-[#080808] text-[#f0f0f0] selection:bg-[#00D1FF] selection:text-black font-sans min-h-screen">

      {/* ── Hero ── */}
      <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden px-4 dot-bg">
        {/* Ambient glow blobs */}
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-[#00D1FF]/6 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#00B88F]/5 blur-[160px] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080808]/60 to-[#080808] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 text-center flex flex-col items-center mt-20 w-full max-w-7xl px-4"
        >
          {/* Label pill */}
          <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-[#00D1FF] animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/60">Intelligence Factory</span>
          </div>

          <h1 className="text-[clamp(3rem,10vw,11rem)] font-extrabold tracking-tighter mb-8 leading-[0.85] text-white glow-text">
            HUMAN<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-600">INTELLIGENCE</span><br />
            FOR ROBOTS.
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl font-light leading-relaxed mb-12">
            Building the foundation models to make physical autonomy work in unconstrained, diverse environments.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/company" className="inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 font-bold text-sm tracking-widest uppercase hover:bg-gray-200 transition-colors">
              Our Approach <ArrowRight size={16} />
            </Link>
            <Link href="/careers" className="inline-flex items-center justify-center gap-3 border border-white/20 text-white px-8 py-4 font-bold text-sm tracking-widest uppercase hover:bg-white/5 transition-colors">
              Join the Team
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 z-10 flex flex-col items-center gap-3"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase text-white/30">Scroll</span>
          <ChevronDown size={16} className="text-white/30 animate-bounce" />
        </motion.div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="border-y border-white/10 bg-black py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          {[
            { stat: "1/10x", label: "Data Collection Cost" },
            { stat: "5-DOF", label: "Articulation Capture" },
            { stat: "Multi-Modal", label: "Sensor Fusion" },
            { stat: "Global", label: "Factory Network" },
          ].map(({ stat, label }) => (
            <div key={label}>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">{stat}</div>
              <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Bento Box Grid ── */}
      <section className="relative z-20 px-4 md:px-8 py-24 md:py-32 bg-[#080808] dot-bg">
        <div className="max-w-7xl mx-auto">

          <div className="mb-16 md:mb-24">
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#00D1FF] mb-4 block">The Problem</span>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-extrabold tracking-tighter text-white mb-6">
              Robotics breaks<br />on diversity.
            </h2>
            <p className="text-lg md:text-xl text-gray-400 font-light max-w-3xl leading-relaxed">
              Current robotic solutions fail as soon as there is variance in tasks and objects. We solve this through massive-scale human demonstration data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[380px] md:auto-rows-[420px]">

            {/* Item 1: Data Factory — large */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
              className="md:col-span-8 relative rounded-none overflow-hidden group border border-white/10 hover:border-white/25 transition-colors"
            >
              <Image src="/human_demo_data.png" alt="Data Factory" fill className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000 ease-out" sizes="(max-width: 768px) 100vw, 67vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#00D1FF]/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <span className="text-[#00D1FF] text-[10px] font-mono tracking-[0.2em] uppercase mb-3 block">01 / Data Factory</span>
                <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">Human Demonstration.</h3>
                <p className="text-gray-400 text-base md:text-lg font-light max-w-2xl leading-relaxed">
                  We hire teleoperators to collect raw interaction data across diverse environments, capturing exactly how humans manipulate objects.
                </p>
              </div>
            </motion.div>

            {/* Item 2: Economics — small */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="md:col-span-4 relative overflow-hidden bg-[#111] border border-white/10 hover:border-[#00B88F]/40 transition-colors flex flex-col justify-between p-8 md:p-10 group"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#00B88F]/50 via-transparent to-transparent" />
              <div>
                <span className="text-[#00B88F] text-[10px] font-mono tracking-[0.2em] uppercase mb-3 block">02 / Economics</span>
                <h3 className="text-2xl font-extrabold tracking-tight text-white mb-2">Unmatched Scale.</h3>
                <p className="text-gray-500 text-sm font-light">Collecting data at a fraction of US costs.</p>
              </div>
              <div className="mt-auto">
                <div className="text-6xl md:text-8xl font-extrabold tracking-tighter text-white group-hover:text-[#00B88F] transition-colors">1/10</div>
                <div className="text-[10px] font-mono tracking-widest text-[#00B88F] uppercase mt-2">The cost overhead</div>
              </div>
            </motion.div>

            {/* Item 3: Hardware Gloves */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-6 relative overflow-hidden group border border-white/10 hover:border-white/25 transition-colors"
            >
              <Image src="/custom_robotics_glove.png" alt="Hardware Gloves" fill className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000 ease-out" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#c26d3b]/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-10">
                <span className="text-[#c26d3b] text-[10px] font-mono tracking-[0.2em] uppercase mb-3 block">03 / Hardware</span>
                <h3 className="text-2xl font-extrabold tracking-tight text-white mb-3">Custom Sensor Gloves.</h3>
                <p className="text-gray-400 font-light text-sm max-w-sm">Capturing ground-truth joint angles and contact forces for high-DOF articulation.</p>
              </div>
            </motion.div>

            {/* Item 4: Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="md:col-span-6 relative overflow-hidden group border border-white/10 hover:border-white/25 transition-colors"
            >
              <Image src="/head_mounted_camera.png" alt="Head Mounted Camera" fill className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000 ease-out" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#00A6C7]/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-10">
                <span className="text-[#00A6C7] text-[10px] font-mono tracking-[0.2em] uppercase mb-3 block">04 / Vision</span>
                <h3 className="text-2xl font-extrabold tracking-tight text-white mb-3">Head-Mounted Optic.</h3>
                <p className="text-gray-400 font-light text-sm max-w-sm">Syncing visual input precisely with physical force exertion for multi-modal datasets.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-24 md:py-32 px-4 md:px-8 bg-[#111] border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#00D1FF] mb-6 block">The Mission</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 leading-tight text-white"
          >
            Solving generalized<br />robotics.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg text-gray-400 font-light leading-relaxed mb-10 max-w-2xl"
          >
            Join a collective of roboticists, simulation experts, and hardware engineers solving physical autonomy at scale.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/team" className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 font-bold text-sm tracking-widest uppercase hover:bg-gray-200 transition-colors">
              Meet the Team
            </Link>
            <Link href="/careers" className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 font-bold text-sm tracking-widest uppercase hover:bg-white/5 transition-colors">
              Open Roles
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
