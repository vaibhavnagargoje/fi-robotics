"use client";

import { motion } from 'motion/react';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Plus } from 'lucide-react';

export default function CareersPage() {
  const roles = [
    { title: "Senior ML Engineer, Vision", team: "Software", location: "San Francisco, CA" },
    { title: "Robotics Control Engineer", team: "Hardware", location: "San Francisco, CA" },
    { title: "Data Platform Lead", team: "Infrastructure", location: "San Francisco, CA" },
    { title: "Simulation Engineer", team: "Software", location: "San Francisco, CA" },
  ];

  return (
    <div className="bg-[#f6f4ef] text-[#0f172a] selection:bg-[#0f172a] selection:text-[#f6f4ef] font-sans min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex flex-col justify-center items-center overflow-hidden px-4">
        <div className="absolute inset-0 z-0">
          <Image
            src="/careers_hero.png"
            alt="Engineering Workspace"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#f6f4ef]/20 via-transparent to-[#f6f4ef]"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 text-center flex flex-col items-center mt-20"
        >
          <h1 className="text-5xl md:text-8xl font-medium tracking-tighter mb-6 max-w-5xl leading-tight text-[#0f172a]">
            Build the foundation.
          </h1>
          <p className="text-lg md:text-xl text-[#0f172a]/70 max-w-2xl font-light leading-relaxed">
            We are looking for exceptional builders who want to solve the hardest problems in physical intelligence.
          </p>
        </motion.div>
      </section>

      {/* Roles Section */}
      <section className="py-24 px-4 md:px-12 lg:px-24 bg-[#f6f4ef] flex-grow max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 border-b border-black/10 pb-4 flex justify-between items-end"
        >
          <h2 className="text-3xl font-medium tracking-tight">Open Roles</h2>
          <span className="text-sm text-[#0f172a]/50">{roles.length} positions</span>
        </motion.div>

        <div className="flex flex-col">
          {roles.map((role, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col md:flex-row justify-between md:items-center py-8 border-b border-black/10 hover:border-[#0f172a]/40 transition-colors cursor-pointer"
            >
              <div className="flex flex-col gap-2 mb-4 md:mb-0">
                <h3 className="text-2xl font-medium tracking-tight group-hover:text-[#0f172a] transition-colors">{role.title}</h3>
                <div className="flex gap-4 text-sm font-mono tracking-widest uppercase text-[#0f172a]/50">
                  <span className="text-[#00D1FF] group-hover:text-[#00A6C7] transition-colors">{role.team}</span>
                  <span>&middot;</span>
                  <span>{role.location}</span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center group-hover:bg-[#0f172a] group-hover:text-[#f6f4ef] transition-all">
                <Plus size={18} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
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
            <Link href="/contact" className="text-sm text-[#0f172a]/60 hover:text-[#0f172a] transition-colors font-light">Contact</Link>
            <a href="#" className="text-sm text-[#0f172a]/60 hover:text-[#0f172a] transition-colors font-light">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
