"use client";

import { motion } from "motion/react";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ParticleGrid from "@/components/ParticleGrid";
import GlowCard from "@/components/GlowCard";
import TextReveal from "@/components/TextReveal";

export default function TeamPage() {
  return (
    <div className="bg-[#050508] text-[#e8e8f0] selection:bg-[#00D1FF]/30 selection:text-white font-sans min-h-screen">

      {/* ── Hero ── */}
      <section className="relative h-[80vh] w-full flex flex-col justify-center items-center overflow-hidden px-4 border-b border-white/[0.06]">
        <ParticleGrid />
        <div className="absolute inset-0 z-0">
          <Image
            src="/team_hero.png"
            alt="Engineering architecture"
            fill
            className="object-cover opacity-15"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050508]/30 via-transparent to-[#050508]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 text-center flex flex-col items-center mt-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[10px] tracking-[0.2em] uppercase text-[#00D1FF] mb-6 block"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Built to Execute
          </motion.span>
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-8 max-w-5xl leading-tight text-white animate-glow-breathe">
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
          className="mb-16 border-b border-white/[0.06] pb-4 flex items-end justify-between"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white">Founders</h2>
          <div className="h-px w-24 bg-gradient-to-r from-[#00D1FF]/50 to-transparent mb-1" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
          {/* Yash Sinha */}
          <FounderCard
            name="Yash Sinha"
            title="Co-Founder & CEO"
            color="0, 209, 255"
            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBJeqjyKX95-pS5t4ZbNOGOZ1GnoG79fDYMTc5LhaZQIp5hgfm6FZGyW_bT7JcqpdRiGGoiDL_L13ArdAyg3ub-2lyeKOJfdg6FP65478y7MofB_nvxizETrY5JmToKo9xOcYb33tunlayVxZcTNqxaeHlp0I3_B-P3ytssGWdit9bSSxBxezFfKZi-xUHtG8uoB6WcnO6YMOVRyUa_jW_raXHOY6d5G-9M_uvCdNwKVz_UGzu8JVo418UgheZlTwybKv6QcIB88YQ"
            credentials={["ETH Zurich Alumni", "Ex-Alfa Romeo F1", "Simulation Systems Lead"]}
            delay={0}
          />

          {/* Jalaj Shukla */}
          <FounderCard
            name="Jalaj Shukla"
            title="Co-Founder & CTO"
            color="0, 184, 143"
            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDkTbD0JG_o8PWXndKcS87vs6tlST2sGq_x-3oTiJj-GzG6VUdIjJ75WIVYyLUfrm4AhL0l9bMSxjk8FjervcvFjxPYrmUUgTh1aNDoyEwhO-YXRSKZYpThoVSazjTv7CB-i0Dke91ywC5g8aX1ZBqrTr279AR_k4SrShyUfR9FssnPJb9Pn4dCGZkWwNSACRBjVUgWvnBQfFaP7qPvLnf0YlLb8O-a-i9WyYfN51FOqdkslCfAuD0_lgNchEyvfLS3jXXTy0hVIa4"
            credentials={["UPenn GRASP Lab", "Tri-axial Sensor Spec.", "Hardware Architecture"]}
            delay={0.2}
          />
        </div>
      </section>

      {/* ── Founding Engineers ── */}
      <section className="py-16 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto w-full border-t border-white/[0.06]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 border-b border-white/[0.06] pb-4"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white">Founding Engineers</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { role: "Systems Engineer",   name: "Elias Jadon",       prev: "NVIDIA",      delay: 0, color: "0, 209, 255" },
            { role: "Robotics Engineer",  name: "Fabrizio Di Giuro", prev: "Wandercraft", delay: 0.1, color: "0, 184, 143" },
          ].map(({ role, name, prev, delay, color }) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlowCard glowColor={color} className="p-8 group">
                <p className="text-[10px] tracking-[0.2em] uppercase mb-4" style={{ color: `rgb(${color})`, fontFamily: "'Orbitron', sans-serif" }}>{role}</p>
                <h4 className="text-2xl font-bold tracking-tight mb-4 text-white group-hover:text-[#00D1FF] transition-colors">{name}</h4>
                <div className="inline-flex items-center gap-2 text-sm text-gray-600 bg-white/[0.03] border border-white/[0.06] px-3 py-1">
                  <span className="text-[10px] tracking-wider uppercase" style={{ fontFamily: "'Orbitron', sans-serif" }}>Previously:</span>
                  <span className="text-gray-400 font-medium">{prev}</span>
                </div>
              </GlowCard>
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
          className="relative overflow-hidden border border-white/[0.06] hover:border-[#00D1FF]/15 transition-all duration-500"
        >
          <div className="absolute inset-0 z-0 bg-[#050508]">
            <Image src="/join_lab.png" alt="Join our lab" fill className="object-cover opacity-25 saturate-50" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050508]/95 via-[#050508]/70 to-transparent" />
          </div>
          {/* Animated top border */}
          <div className="absolute top-0 left-0 right-0 h-px">
            <div
              className="h-full w-full"
              style={{
                background: "linear-gradient(90deg, transparent, #00D1FF, #00B88F, transparent)",
                backgroundSize: "200% 100%",
                animation: "gradient-slide 4s linear infinite",
              }}
            />
          </div>

          <div className="relative z-10 p-12 md:p-20 max-w-2xl text-white">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#00D1FF] mb-6 block" style={{ fontFamily: "'Orbitron', sans-serif" }}>Open Positions</span>
            <TextReveal
              text="Join the Foundation."
              as="h2"
              className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-tight mb-6"
            />
            <p className="text-lg text-gray-400 font-light mb-8 leading-relaxed">
              We are actively recruiting exceptional engineering talent to scale our initial data factory and cognitive frameworks. Backed by YC S26 and a dedicated $750k compute cluster.
            </p>
            <Link href="/careers" className="group inline-flex items-center gap-2 border border-[#00D1FF]/30 bg-[#00D1FF]/5 hover:bg-[#00D1FF] hover:text-black transition-all duration-300 px-8 py-4 text-sm font-bold tracking-widest uppercase">
              View Open Roles
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D1FF] group-hover:bg-black transition-colors" />
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

/* ─── Founder Card Component ─────────────────────────────── */
function FounderCard({
  name,
  title,
  color,
  imageUrl,
  credentials,
  delay,
}: {
  name: string;
  title: string;
  color: string;
  imageUrl: string;
  credentials: string[];
  delay: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group text-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative h-52 w-52 mx-auto overflow-hidden mb-6 border transition-all duration-500"
        style={{
          background: "#0a0a0f",
          borderColor: isHovered ? `rgba(${color}, 0.4)` : "rgba(255,255,255,0.06)",
          boxShadow: isHovered ? `0 0 30px rgba(${color}, 0.1)` : "none",
          transform: isHovered ? "perspective(600px) rotateY(5deg) rotateX(-3deg)" : "perspective(600px) rotateY(0deg) rotateX(0deg)",
        }}
      >
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-all duration-700"
          style={{
            filter: isHovered ? "grayscale(0)" : "grayscale(1)",
            opacity: isHovered ? 1 : 0.6,
          }}
        />
        {/* Scan line overlay */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(${color}, 0.03) 2px, rgba(${color}, 0.03) 4px)`,
            }}
          />
        )}
      </div>
      <h3 className="text-3xl font-bold tracking-tight mb-2 text-white">{name}</h3>
      <p className="text-[10px] tracking-[0.2em] uppercase mb-6" style={{ color: `rgb(${color})`, fontFamily: "'Orbitron', sans-serif" }}>{title}</p>
      <div className="space-y-3 font-light">
        {credentials.map((item) => (
          <p key={item} className="border-b border-white/[0.04] pb-3 text-gray-500 text-sm">{item}</p>
        ))}
      </div>
    </motion.div>
  );
}
