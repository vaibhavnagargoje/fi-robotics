"use client";

import { motion } from "motion/react";
import React from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import ParticleGrid from "@/components/ParticleGrid";
import GlowCard from "@/components/GlowCard";
import TextReveal from "@/components/TextReveal";

export default function ContactPage() {
  return (
    <div className="bg-[#050508] text-[#e8e8f0] selection:bg-[#00D1FF]/30 selection:text-white font-sans min-h-screen flex flex-col">

      {/* ── Hero ── */}
      <section className="relative h-[50vh] w-full flex flex-col justify-center items-center overflow-hidden px-4 border-b border-white/[0.06]">
        <ParticleGrid />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#00D1FF]/[0.04] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050508] pointer-events-none z-[1]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 text-center flex flex-col items-center mt-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[10px] tracking-[0.2em] uppercase text-[#00D1FF] mb-6 block"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Contact
          </motion.span>
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-6 max-w-5xl leading-tight text-white animate-glow-breathe">
            Initiate connection.
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl font-light leading-relaxed">
            Whether you&apos;re looking to integrate our foundation models or join the engineering team, we want to hear from you.
          </p>
        </motion.div>
      </section>

      {/* ── Contact Section ── */}
      <section className="py-24 px-4 md:px-12 lg:px-24 flex-grow">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Get in Touch</h2>
            <div className="h-px w-20 bg-gradient-to-r from-[#00D1FF] to-transparent mb-8" />

            <div className="space-y-6 text-gray-400 leading-relaxed mb-12 font-light text-lg">
              <p>We&apos;re selective about our partnerships because we believe in building deep, meaningful relationships. If you share our vision of solving generalized robotics, we want to hear from you.</p>
              <p>Fill out the form and our team will review your inquiry. We respond to all serious inquiries within 48 hours.</p>
            </div>

            <div className="space-y-6">
              {[
                { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z", label: "Headquarters", value: "San Francisco, CA", color: "0, 209, 255" },
                { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", label: "Email", value: "yash@intelligence-factory.com", color: "0, 184, 143" },
                { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "Response Time", value: "Within 48 hours", color: "123, 97, 255" },
              ].map(({ icon, label, value, color }) => (
                <GlowCard key={label} glowColor={color} className="p-4">
                  <div className="flex items-center gap-5">
                    <div
                      className="w-12 h-12 flex items-center justify-center flex-shrink-0 border"
                      style={{ borderColor: `rgba(${color}, 0.2)`, background: `rgba(${color}, 0.05)` }}
                    >
                      <svg className="w-5 h-5" style={{ color: `rgb(${color})` }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={icon} />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">{label}</p>
                      <p className="text-sm text-gray-500">{value}</p>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <GlowCard className="p-6 sm:p-8">
              <form className="space-y-5">
                {[
                  { id: "name",    label: "Full Name *",            type: "text",  placeholder: "John Doe" },
                  { id: "email",   label: "Email Address *",        type: "email", placeholder: "john@company.com" },
                  { id: "company", label: "Company / Organization", type: "text",  placeholder: "Acme Inc." },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label htmlFor={id} className="block text-xs tracking-widest uppercase text-gray-500 mb-2" style={{ fontFamily: "'Orbitron', sans-serif" }}>{label}</label>
                    <input
                      type={type} id={id}
                      className="w-full bg-white/[0.03] border border-white/[0.08] px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00D1FF]/50 focus:shadow-[0_0_15px_rgba(0,209,255,0.1)] transition-all placeholder-gray-700"
                      placeholder={placeholder}
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="partnerType" className="block text-xs tracking-widest uppercase text-gray-500 mb-2" style={{ fontFamily: "'Orbitron', sans-serif" }}>Inquiry Type *</label>
                  <select id="partnerType" defaultValue="" className="w-full bg-white/[0.03] border border-white/[0.08] px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00D1FF]/50 focus:shadow-[0_0_15px_rgba(0,209,255,0.1)] transition-all appearance-none cursor-pointer">
                    <option value="" disabled className="bg-[#0a0a0f]">Select inquiry type</option>
                    <option value="investor" className="bg-[#0a0a0f]">Commercial Integration</option>
                    <option value="strategic" className="bg-[#0a0a0f]">Strategic Partner</option>
                    <option value="talent" className="bg-[#0a0a0f]">Join the Engineering Team</option>
                    <option value="other" className="bg-[#0a0a0f]">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs tracking-widest uppercase text-gray-500 mb-2" style={{ fontFamily: "'Orbitron', sans-serif" }}>Message *</label>
                  <textarea
                    id="message" rows={4}
                    className="w-full bg-white/[0.03] border border-white/[0.08] px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00D1FF]/50 focus:shadow-[0_0_15px_rgba(0,209,255,0.1)] transition-all resize-none placeholder-gray-700"
                    placeholder="Tell us about how you'd like to collaborate..."
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full relative overflow-hidden py-4 font-bold tracking-widest uppercase text-sm transition-all mt-2 border border-[#00D1FF]/30 text-white hover:text-black"
                >
                  {/* Gradient fill on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00D1FF] to-[#00B88F] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Submit Inquiry
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00D1FF] group-hover:bg-black transition-colors" />
                  </span>
                </button>

                <p className="text-xs text-gray-600 text-center mt-4">
                  By submitting, you agree to our privacy policy.
                </p>
              </form>
            </GlowCard>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
