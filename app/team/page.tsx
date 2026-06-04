"use client";

import { motion } from 'motion/react';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function TeamPage() {
  return (
    <div className="bg-[#f6f4ef] text-[#0f172a] selection:bg-[#0f172a] selection:text-[#f6f4ef] font-sans min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full flex flex-col justify-center items-center overflow-hidden px-4">
        <div className="absolute inset-0 z-0">
          <Image
            src="/team_hero.png"
            alt="Engineering architecture"
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
          <div className="inline-block border border-black/10 rounded-full px-4 py-1 mb-8 bg-white/50 backdrop-blur-sm shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
            <span className="text-xs tracking-widest font-mono uppercase text-[#0f172a]/70">Built to Execute</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-medium tracking-tighter mb-8 max-w-5xl leading-tight text-[#0f172a]">
            Engineering Leadership.
          </h1>
          <p className="text-lg md:text-xl text-[#0f172a]/70 max-w-3xl font-light leading-relaxed">
            We are a collective of roboticists, simulation experts, and hardware engineers building the cognitive architecture for next-generation automation.
          </p>
        </motion.div>
      </section>

      {/* Founders Section */}
      <section className="py-32 px-4 md:px-12 lg:px-24 bg-[#f6f4ef] max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-b border-black/10 pb-4"
        >
          <h2 className="text-3xl font-medium tracking-tight">Founders</h2>
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
            <div className="relative h-48 w-48 mx-auto bg-[#eef6f5] rounded-full overflow-hidden mb-6 border-4 border-white shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
              {/* Note: Using standard img here to avoid next/image domain configuration issues for external Google LH3 URLs */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJeqjyKX95-pS5t4ZbNOGOZ1GnoG79fDYMTc5LhaZQIp5hgfm6FZGyW_bT7JcqpdRiGGoiDL_L13ArdAyg3ub-2lyeKOJfdg6FP65478y7MofB_nvxizETrY5JmToKo9xOcYb33tunlayVxZcTNqxaeHlp0I3_B-P3ytssGWdit9bSSxBxezFfKZi-xUHtG8uoB6WcnO6YMOVRyUa_jW_raXHOY6d5G-9M_uvCdNwKVz_UGzu8JVo418UgheZlTwybKv6QcIB88YQ"
                alt="Yash Sinha"
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
            </div>
            <h3 className="text-3xl font-medium tracking-tight mb-2 text-[#0f172a]">Yash Sinha</h3>
            <p className="text-[#00D1FF] text-sm tracking-widest font-mono uppercase mb-6 font-medium">Co-Founder & CEO</p>
            <div className="space-y-3 font-light text-[#0f172a]/70">
              <p className="border-b border-black/5 pb-3 flex justify-between"><span>ETH Zurich Alumni</span></p>
              <p className="border-b border-black/5 pb-3 flex justify-between"><span>Ex-Alfa Romeo F1</span></p>
              <p className="border-b border-black/5 pb-3 flex justify-between"><span>Simulation Systems Lead</span></p>
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
            <div className="relative h-48 w-48 mx-auto bg-[#fff5ea] rounded-full overflow-hidden mb-6 border-4 border-white shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkTbD0JG_o8PWXndKcS87vs6tlST2sGq_x-3oTiJj-GzG6VUdIjJ75WIVYyLUfrm4AhL0l9bMSxjk8FjervcvFjxPYrmUUgTh1aNDoyEwhO-YXRSKZYpThoVSazjTv7CB-i0Dke91ywC5g8aX1ZBqrTr279AR_k4SrShyUfR9FssnPJb9Pn4dCGZkWwNSACRBjVUgWvnBQfFaP7qPvLnf0YlLb8O-a-i9WyYfN51FOqdkslCfAuD0_lgNchEyvfLS3jXXTy0hVIa4"
                alt="Jalaj Shukla"
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
            </div>
            <h3 className="text-3xl font-medium tracking-tight mb-2 text-[#0f172a]">Jalaj Shukla</h3>
            <p className="text-[#00B88F] text-sm tracking-widest font-mono uppercase mb-6 font-medium">Co-Founder & CTO</p>
            <div className="space-y-3 font-light text-[#0f172a]/70">
              <p className="border-b border-black/5 pb-3 flex justify-between"><span>UPenn GRASP Lab</span></p>
              <p className="border-b border-black/5 pb-3 flex justify-between"><span>Tri-axial Sensor Spec.</span></p>
              <p className="border-b border-black/5 pb-3 flex justify-between"><span>Hardware Architecture</span></p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founding Engineers */}
      <section className="py-16 px-4 md:px-12 lg:px-24 bg-[#f6f4ef] max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 border-b border-black/10 pb-4"
        >
          <h2 className="text-3xl font-medium tracking-tight text-[#0f172a]">Founding Engineers</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Engineer 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 border border-black/10 bg-white/50 rounded-3xl hover:bg-white hover:shadow-[0_16px_40px_rgba(15,23,42,0.06)] transition-all cursor-pointer"
          >
            <p className="text-[#00A6C7] text-xs font-mono tracking-widest uppercase mb-4">Systems Engineer</p>
            <h4 className="text-2xl font-medium tracking-tight mb-4 text-[#0f172a]">Elias Jadon</h4>
            <div className="inline-flex items-center gap-2 text-sm text-[#0f172a]/60 bg-black/5 px-3 py-1 rounded-full">
              <span className="font-mono text-[10px] tracking-wider uppercase">PREVIOUSLY:</span>
              <span className="text-[#0f172a] font-medium">NVIDIA</span>
            </div>
          </motion.div>

          {/* Engineer 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 border border-black/10 bg-white/50 rounded-3xl hover:bg-white hover:shadow-[0_16px_40px_rgba(15,23,42,0.06)] transition-all cursor-pointer"
          >
            <p className="text-[#00A6C7] text-xs font-mono tracking-widest uppercase mb-4">Robotics Engineer</p>
            <h4 className="text-2xl font-medium tracking-tight mb-4 text-[#0f172a]">Fabrizio Di Giuro</h4>
            <div className="inline-flex items-center gap-2 text-sm text-[#0f172a]/60 bg-black/5 px-3 py-1 rounded-full">
              <span className="font-mono text-[10px] tracking-wider uppercase">PREVIOUSLY:</span>
              <span className="text-[#0f172a] font-medium">Wandercraft</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recruitment CTA */}
      <section className="py-32 px-4 md:px-12 lg:px-24 bg-[#f6f4ef] max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[40px] overflow-hidden shadow-[0_32px_60px_rgba(15,23,42,0.12)] border border-black/10"
        >
          <div className="absolute inset-0 z-0 bg-[#0f172a]">
            <Image
              src="/join_lab.png"
              alt="Join our lab"
              fill
              className="object-cover opacity-50 saturate-50"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 via-[#0f172a]/60 to-transparent"></div>
          </div>

          <div className="relative z-10 p-12 md:p-20 max-w-2xl text-white">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight mb-6">
              Join the Foundation.
            </h2>
            <p className="text-lg text-white/80 font-light mb-8 leading-relaxed">
              We are actively recruiting exceptional engineering talent to scale our initial data factory and cognitive frameworks. Backed by YC S26 and a dedicated $750k compute cluster.
            </p>
            <Link href="/careers" className="inline-block border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white hover:text-[#0f172a] transition-all duration-300 px-8 py-4 rounded-full text-sm font-medium tracking-wide uppercase">
              View Open Roles
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f0ebe3] py-24 px-8 border-t border-black/10 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-1">
            <div className="font-medium text-2xl tracking-tighter mb-4 text-[#0f172a]">IF</div>
            <p className="text-sm text-[#0f172a]/80 font-light">© 2026 Intelligence Factory.</p>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs font-medium tracking-widest text-[#0f172a]/80 uppercase mb-2">Company</span>
            <Link href="/company" className="text-sm text-[#0f172a]/80 hover:text-[#0f172a] transition-colors font-light">About</Link>
            <Link href="/team" className="text-sm text-[#0f172a]/80 hover:text-[#0f172a] transition-colors font-light">Team</Link>
            <Link href="/careers" className="text-sm text-[#0f172a]/80 hover:text-[#0f172a] transition-colors font-light">Careers</Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs font-medium tracking-widest text-[#0f172a]/80 uppercase mb-2">Technology</span>
            <a href="#" className="text-sm text-[#0f172a]/80 hover:text-[#0f172a] transition-colors font-light">Models</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs font-medium tracking-widest text-[#0f172a]/80 uppercase mb-2">Social</span>
            <a href="#" className="text-sm text-[#0f172a]/80 hover:text-[#0f172a] transition-colors font-light">X / Twitter</a>
            <a href="#" className="text-sm text-[#0f172a]/80 hover:text-[#0f172a] transition-colors font-light">LinkedIn</a>
            <Link href="/contact" className="text-sm text-[#0f172a]/80 hover:text-[#0f172a] transition-colors font-light">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
