"use client";

import { motion } from 'motion/react';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function TeamPage() {
  return (
    <div className="bg-[#080808] text-[#f0f0f0] selection:bg-[#00D1FF] selection:text-black font-sans min-h-screen">

      {/* ── Hero ── */}
      <section className="relative h-[80vh] w-full flex flex-col justify-center items-center overflow-hidden px-4 dot-bg border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <Image
            src="/team_hero.png"
            alt="Engineering architecture"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/30 via-transparent to-[#080808]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 text-center flex flex-col items-center mt-20"
        >
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#00D1FF] mb-6 block">Built to Execute</span>
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-8 max-w-5xl leading-tight text-white">
            Engineering<br />Leadership.
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl font-light leading-relaxed">
            A collective of roboticists, simulation experts, and hardware engineers building the cognitive architecture for next-generation automation.
          </p>
        </motion.div>
      </section>

      {/* ── Founders ── */}
      <section className="py-32 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-b border-white/10 pb-4 flex items-end justify-between"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white">Founders</h2>
          <div className="h-px w-24 bg-[#00D1FF]/50 mb-1" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
          {/* Yash Sinha */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="group text-center"
          >
            <div className="relative h-48 w-48 mx-auto bg-[#111] overflow-hidden mb-6 border border-white/10 group-hover:border-[#00D1FF]/40 transition-colors">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJeqjyKX95-pS5t4ZbNOGOZ1GnoG79fDYMTc5LhaZQIp5hgfm6FZGyW_bT7JcqpdRiGGoiDL_L13ArdAyg3ub-2lyeKOJfdg6FP65478y7MofB_nvxizETrY5JmToKo9xOcYb33tunlayVxZcTNqxaeHlp0I3_B-P3ytssGWdit9bSSxBxezFfKZi-xUHtG8uoB6WcnO6YMOVRyUa_jW_raXHOY6d5G-9M_uvCdNwKVz_UGzu8JVo418UgheZlTwybKv6QcIB88YQ"
                alt="Yash Sinha"
                className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
            </div>
            <h3 className="text-3xl font-bold tracking-tight mb-2 text-white">Yash Sinha</h3>
            <p className="text-[#00D1FF] text-[10px] tracking-[0.2em] font-mono uppercase mb-6">Co-Founder &amp; CEO</p>
            <div className="space-y-3 font-light">
              {["ETH Zurich Alumni", "Ex-Alfa Romeo F1", "Simulation Systems Lead"].map((item) => (
                <p key={item} className="border-b border-white/8 pb-3 text-gray-500 text-sm">{item}</p>
              ))}
            </div>
          </motion.div>

          {/* Jalaj Shukla */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="group text-center"
          >
            <div className="relative h-48 w-48 mx-auto bg-[#111] overflow-hidden mb-6 border border-white/10 group-hover:border-[#00B88F]/40 transition-colors">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkTbD0JG_o8PWXndKcS87vs6tlST2sGq_x-3oTiJj-GzG6VUdIjJ75WIVYyLUfrm4AhL0l9bMSxjk8FjervcvFjxPYrmUUgTh1aNDoyEwhO-YXRSKZYpThoVSazjTv7CB-i0Dke91ywC5g8aX1ZBqrTr279AR_k4SrShyUfR9FssnPJb9Pn4dCGZkWwNSACRBjVUgWvnBQfFaP7qPvLnf0YlLb8O-a-i9WyYfN51FOqdkslCfAuD0_lgNchEyvfLS3jXXTy0hVIa4"
                alt="Jalaj Shukla"
                className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
            </div>
            <h3 className="text-3xl font-bold tracking-tight mb-2 text-white">Jalaj Shukla</h3>
            <p className="text-[#00B88F] text-[10px] tracking-[0.2em] font-mono uppercase mb-6">Co-Founder &amp; CTO</p>
            <div className="space-y-3 font-light">
              {["UPenn GRASP Lab", "Tri-axial Sensor Spec.", "Hardware Architecture"].map((item) => (
                <p key={item} className="border-b border-white/8 pb-3 text-gray-500 text-sm">{item}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Founding Engineers ── */}
      <section className="py-16 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto w-full border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 border-b border-white/10 pb-4"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white">Founding Engineers</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { role: "Systems Engineer",   name: "Elias Jadon",       prev: "NVIDIA",      delay: 0 },
            { role: "Robotics Engineer",  name: "Fabrizio Di Giuro", prev: "Wandercraft", delay: 0.1 },
          ].map(({ role, name, prev, delay }) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 border border-white/10 bg-[#111] hover:border-white/25 hover:bg-[#161616] transition-all cursor-pointer group"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#00D1FF]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="text-[#00A6C7] text-[10px] font-mono tracking-[0.2em] uppercase mb-4">{role}</p>
              <h4 className="text-2xl font-bold tracking-tight mb-4 text-white group-hover:text-[#00D1FF] transition-colors">{name}</h4>
              <div className="inline-flex items-center gap-2 text-sm text-gray-600 bg-white/5 border border-white/8 px-3 py-1">
                <span className="font-mono text-[10px] tracking-wider uppercase">Previously:</span>
                <span className="text-gray-400 font-medium">{prev}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Recruitment CTA ── */}
      <section className="py-32 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1 }}
          className="relative overflow-hidden border border-white/10"
        >
          <div className="absolute inset-0 z-0 bg-[#080808]">
            <Image src="/join_lab.png" alt="Join our lab" fill className="object-cover opacity-30 saturate-50" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
          </div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#00D1FF]/50 via-transparent to-transparent" />

          <div className="relative z-10 p-12 md:p-20 max-w-2xl text-white">
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#00D1FF] mb-6 block">Open Positions</span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-tight mb-6">
              Join the Foundation.
            </h2>
            <p className="text-lg text-gray-400 font-light mb-8 leading-relaxed">
              We are actively recruiting exceptional engineering talent to scale our initial data factory and cognitive frameworks. Backed by YC S26 and a dedicated $750k compute cluster.
            </p>
            <Link href="/careers" className="inline-block border border-white/20 bg-white/5 hover:bg-white hover:text-black transition-all duration-300 px-8 py-4 text-sm font-bold tracking-widest uppercase">
              View Open Roles
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
