"use client";

import { motion } from 'motion/react';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="bg-[#f6f4ef] text-[#0f172a] selection:bg-[#0f172a] selection:text-[#f6f4ef] font-sans min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] w-full flex flex-col justify-center items-center overflow-hidden px-4">
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

      {/* Contact Section (Dark Basalt Style) */}
      <section className="py-24 px-4 md:px-12 lg:px-24 bg-[#f6f4ef] flex-grow">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-medium text-[#0f172a] mb-6 tracking-tight">Get in Touch</h2>
            <div className="h-1 w-20 bg-[#00D1FF] mb-8"></div>
            
            <div className="space-y-6 text-[#0f172a]/70 leading-relaxed mb-12 font-light text-lg">
              <p>We're selective about our partnerships because we believe in building deep, meaningful relationships. If you share our vision of solving generalized robotics, we want to hear from you.</p>
              <p>Fill out the form and our team will review your inquiry. We respond to all serious inquiries within 48 hours.</p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-white/70 border border-black/10 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg className="w-5 h-5 text-[#0f172a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <p className="text-[#0f172a] font-medium">Headquarters</p>
                  <p className="text-sm text-[#0f172a]/60">San Francisco, CA</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-white/70 border border-black/10 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg className="w-5 h-5 text-[#0f172a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <p className="text-[#0f172a] font-medium">Email</p>
                  <p className="text-sm text-[#0f172a]/60">yash@intelligence-factory.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-white/70 border border-black/10 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg className="w-5 h-5 text-[#0f172a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <p className="text-[#0f172a] font-medium">Direct Line</p>
                  <p className="text-sm text-[#0f172a]/60">+1 (XXX) XXX-XXXX</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/50 border border-black/10 p-6 sm:p-8 rounded-[2rem] shadow-[0_24px_60px_rgba(15,23,42,0.04)] backdrop-blur-md"
          >
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#0f172a]/70 mb-2">Full Name *</label>
                <input type="text" id="name" required className="w-full bg-white/70 border border-black/10 px-4 py-2.5 text-[#0f172a] rounded-xl focus:outline-none focus:border-[#00D1FF] transition-colors shadow-inner" placeholder="John Doe" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#0f172a]/70 mb-2">Email Address *</label>
                <input type="email" id="email" required className="w-full bg-white/70 border border-black/10 px-4 py-2.5 text-[#0f172a] rounded-xl focus:outline-none focus:border-[#00D1FF] transition-colors shadow-inner" placeholder="john@company.com" />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-[#0f172a]/70 mb-2">Company / Organization</label>
                <input type="text" id="company" className="w-full bg-white/70 border border-black/10 px-4 py-2.5 text-[#0f172a] rounded-xl focus:outline-none focus:border-[#00D1FF] transition-colors shadow-inner" placeholder="Acme Inc." />
              </div>
              
              <div>
                <label htmlFor="partnerType" className="block text-sm font-medium text-[#0f172a]/70 mb-2">Inquiry Type *</label>
                <select id="partnerType" required defaultValue="" className="w-full bg-white/70 border border-black/10 px-4 py-2.5 text-[#0f172a] rounded-xl focus:outline-none focus:border-[#00D1FF] transition-colors shadow-inner appearance-none cursor-pointer">
                  <option value="" disabled>Select inquiry type</option>
                  <option value="investor">Commercial Integration</option>
                  <option value="strategic">Strategic Partner</option>
                  <option value="talent">Join the Engineering Team</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#0f172a]/70 mb-2">Message *</label>
                <textarea id="message" required rows={3} className="w-full bg-white/70 border border-black/10 px-4 py-2.5 text-[#0f172a] rounded-xl focus:outline-none focus:border-[#00D1FF] transition-colors shadow-inner resize-none" placeholder="Tell us about how you'd like to collaborate..."></textarea>
              </div>
              
              <button type="submit" className="w-full bg-[#0f172a] text-[#f6f4ef] py-3 rounded-xl font-medium tracking-wide hover:bg-[#00D1FF] hover:text-[#0f172a] transition-all uppercase text-sm shadow-md">
                Submit Inquiry
              </button>
              
              <p className="text-xs text-[#0f172a]/50 text-center mt-4">
                By submitting, you agree to our privacy policy.
              </p>
            </form>
          </motion.div>
        </div>
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
            <Link href="/contact" className="text-sm text-[#0f172a]/80 hover:text-[#0f172a] transition-colors font-light">Contact</Link>
            <a href="#" className="text-sm text-[#0f172a]/80 hover:text-[#0f172a] transition-colors font-light">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
