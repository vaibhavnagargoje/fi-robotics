"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUp } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About", href: "/company" },
    { label: "Team", href: "/team" },
    { label: "Careers", href: "/careers" },
  ],
  Resources: [
    { label: "Contact", href: "/contact" },
    { label: "LinkedIn", href: "#" },
    { label: "X / Twitter", href: "#" },
  ],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.06] bg-[#050508] overflow-hidden">
      {/* Animated gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px gradient-border">
        <div
          className="h-full w-full"
          style={{
            background: "linear-gradient(90deg, transparent, #00D1FF, #00B88F, #7B61FF, #00D1FF, transparent)",
            backgroundSize: "200% 100%",
            animation: "gradient-slide 4s linear infinite",
          }}
        />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 dot-bg opacity-30" />

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#00D1FF]/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <img
                src="/logo.svg"
                alt="Intelligence Factory"
                className="h-7 w-auto"
              />
              <span className="text-lg font-bold tracking-widest text-white uppercase">
                Intelligence<span className="text-gray-600">Factory</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 font-light leading-relaxed max-w-sm mb-8">
              Building the foundation models to make physical autonomy work in unconstrained, diverse environments.
            </p>

            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B88F] animate-pulse" />
              <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">
                All systems operational
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="md:col-span-2">
              <h4 className="text-[10px] font-mono tracking-[0.2em] uppercase text-gray-600 mb-6">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group text-sm text-gray-500 hover:text-[#00D1FF] transition-colors duration-300 flex items-center gap-2"
                    >
                      <span
                        className="w-0 h-px bg-[#00D1FF] group-hover:w-3 transition-all duration-300"
                      />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter column */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-mono tracking-[0.2em] uppercase text-gray-600 mb-6">
              Stay Updated
            </h4>
            <p className="text-sm text-gray-600 mb-4 font-light">
              Get notified about breakthroughs and open roles.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-white/[0.03] border border-white/[0.08] px-3 py-2 text-sm text-white placeholder-gray-700 focus:outline-none focus:border-[#00D1FF]/40 transition-colors"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-[#00D1FF]/20 to-[#00B88F]/20 border border-[#00D1FF]/20 text-[#00D1FF] text-xs font-bold tracking-wider uppercase hover:from-[#00D1FF]/30 hover:to-[#00B88F]/30 transition-all">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-gray-700 font-mono">
            © {new Date().getFullYear()} Intelligence Factory. All Rights Reserved.
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 text-xs text-gray-600 hover:text-[#00D1FF] transition-colors"
          >
            <span className="font-mono tracking-widest uppercase">Back to top</span>
            <div className="w-8 h-8 border border-white/10 flex items-center justify-center group-hover:border-[#00D1FF]/30 group-hover:bg-[#00D1FF]/5 transition-all">
              <ArrowUp size={14} />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
