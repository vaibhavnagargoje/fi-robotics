"use client";

import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import Footer from '@/components/Footer';

export default function CareersPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const roles = [
    { title: "Senior ML Engineer, Vision",  team: "Software",        location: "San Francisco, CA" },
    { title: "Robotics Control Engineer",    team: "Hardware",        location: "San Francisco, CA" },
    { title: "Data Platform Lead",           team: "Infrastructure",  location: "San Francisco, CA" },
    { title: "Simulation Engineer",          team: "Software",        location: "San Francisco, CA" },
  ];

  return (
    <div className="bg-[#080808] text-[#f0f0f0] selection:bg-[#00D1FF] selection:text-black font-sans min-h-screen flex flex-col">

      {/* ── Hero ── */}
      <section className="relative h-[55vh] w-full flex flex-col justify-center items-center overflow-hidden px-4 dot-bg border-b border-white/10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#00D1FF]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#080808] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 text-center flex flex-col items-center mt-20"
        >
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#00D1FF] mb-6 block">Careers</span>
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-6 max-w-5xl leading-tight text-white">
            Build the foundation.
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl font-light leading-relaxed">
            We are looking for exceptional builders who want to solve the hardest problems in physical intelligence.
          </p>
        </motion.div>
      </section>

      {/* ── Roles ── */}
      <section className="py-24 px-4 md:px-12 lg:px-24 flex-grow max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 border-b border-white/10 pb-4 flex justify-between items-end"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white">Open Roles</h2>
          <span className="text-sm text-gray-600 font-mono">{roles.length} positions</span>
        </motion.div>

        <div className="flex flex-col">
          {roles.map((role, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group flex flex-col py-8 border-b border-white/10 hover:border-white/25 transition-colors"
              >
                <div
                  className="flex flex-col md:flex-row justify-between md:items-center cursor-pointer"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <div className="flex flex-col gap-2 mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-[#00D1FF] transition-colors">
                      {role.title}
                    </h3>
                    <div className="flex gap-4 text-xs font-mono tracking-widest uppercase text-gray-600">
                      <span className="text-[#00D1FF]">{role.team}</span>
                      <span>·</span>
                      <span>{role.location}</span>
                    </div>
                  </div>
                  <div className={`w-10 h-10 border flex items-center justify-center transition-all ${isOpen ? 'bg-white text-black border-white rotate-45' : 'border-white/20 text-white group-hover:border-white/50'}`}>
                    <Plus size={18} />
                  </div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 24 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 border-t border-white/10 text-gray-400 font-light leading-relaxed">
                        <p className="mb-4">
                          We are seeking an experienced {role.title} to join our {role.team} team.
                          You will build scalable solutions and push the boundaries of physical intelligence.
                        </p>
                        <ul className="list-disc pl-5 mb-8 space-y-2 text-gray-500">
                          <li>Design and implement robust architecture</li>
                          <li>Collaborate with cross-functional teams</li>
                          <li>Optimize performance and reliability</li>
                        </ul>
                        <button className="bg-white text-black px-6 py-3 text-sm tracking-widest font-bold uppercase hover:bg-gray-200 transition-colors">
                          Apply Now
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
