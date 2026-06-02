"use client";

import { motion } from 'motion/react';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-[#f6f4ef] text-[#0f172a] selection:bg-[#0f172a] selection:text-[#f6f4ef] font-sans min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex flex-col justify-center items-center overflow-hidden px-4">
        <div className="absolute inset-0 z-0">
          <Image
            src="/contact_hero.png"
            alt="Connectivity"
            fill
            className="object-cover opacity-40"
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
            Initiate connection.
          </h1>
          <p className="text-lg md:text-xl text-[#0f172a]/70 max-w-2xl font-light leading-relaxed">
            Whether you're looking to integrate our foundation models or join the engineering team, we want to hear from you.
          </p>
        </motion.div>
      </section>

      {/* Contact Options */}
      <section className="py-24 px-4 md:px-12 lg:px-24 bg-[#f6f4ef] flex-grow">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="group cursor-pointer border-t border-black/10 pt-8"
          >
            <h3 className="text-sm font-mono tracking-widest uppercase text-[#00A6C7] mb-2 group-hover:text-[#00D1FF] transition-colors">Commercial Integration</h3>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl md:text-4xl font-medium text-[#0f172a]">partners@f-i.com</h2>
              <ArrowRight className="text-[#0f172a]/30 group-hover:text-[#0f172a] group-hover:translate-x-2 transition-all" />
            </div>
            <p className="text-[#0f172a]/60 font-light">For hardware manufacturers and robotics companies seeking to integrate our cognitive architecture.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="group cursor-pointer border-t border-black/10 pt-8"
          >
            <h3 className="text-sm font-mono tracking-widest uppercase text-[#00B88F] mb-2 group-hover:text-[#00D1FF] transition-colors">Careers & Talent</h3>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl md:text-4xl font-medium text-[#0f172a]">talent@f-i.com</h2>
              <ArrowRight className="text-[#0f172a]/30 group-hover:text-[#0f172a] group-hover:translate-x-2 transition-all" />
            </div>
            <p className="text-[#0f172a]/60 font-light">For exceptional engineers, roboticists, and researchers looking to build the physical intelligence paradigm.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="group cursor-pointer border-t border-black/10 pt-8 md:col-span-2"
          >
            <h3 className="text-sm font-mono tracking-widest uppercase text-[#0f172a]/50 mb-2 group-hover:text-[#00D1FF] transition-colors">Headquarters</h3>
            <h2 className="text-3xl md:text-4xl font-medium mb-6 text-[#0f172a]">San Francisco, CA</h2>
            <p className="text-[#0f172a]/60 font-light">Our primary research lab and hardware testing facility is located in the heart of SOMA.</p>
          </motion.div>
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
            <a href="#" className="text-sm text-[#0f172a]/60 hover:text-[#0f172a] transition-colors font-light">LinkedIn</a>
            <Link href="/contact" className="text-sm text-[#0f172a]/60 hover:text-[#0f172a] transition-colors font-light">Contact</Link>
            <a href="#" className="text-sm text-[#0f172a]/60 hover:text-[#0f172a] transition-colors font-light">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
