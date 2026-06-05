"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/company", label: "Company" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "glass-strong shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2 z-50 shrink-0"
            onClick={() => setMobileOpen(false)}
          >
            {/* Logo */}
            <img
              src="/logo.svg"
              alt="Intelligence Factory"
              className="h-8 sm:h-9 w-auto group-hover:drop-shadow-[0_0_8px_rgba(0,209,255,0.5)] transition-all duration-500"
            />
            <span className="text-lg sm:text-xl font-bold tracking-widest text-white uppercase">
              Intelligence<span className="text-gray-500">Factory</span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-xs font-bold tracking-widest uppercase transition-colors group ${
                    isActive ? "text-white" : "text-gray-500 hover:text-white"
                  }`}
                >
                  {link.label}
                  {/* Animated underline */}
                  <span
                    className={`absolute bottom-0 left-1/2 h-px bg-gradient-to-r from-transparent via-[#00D1FF] to-transparent transition-all duration-300 ${
                      isActive
                        ? "w-full -translate-x-1/2 opacity-100"
                        : "w-0 -translate-x-1/2 opacity-0 group-hover:w-full group-hover:opacity-60"
                    }`}
                  />
                  {/* Active dot */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#00D1FF]"
                      style={{ boxShadow: "0 0 6px rgba(0,209,255,0.8)" }}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <Link
            href="/careers"
            className="hidden md:flex items-center gap-2 relative overflow-hidden border border-[#00D1FF]/30 px-5 py-2 text-xs font-bold text-white transition-all uppercase tracking-widest hover:bg-[#00D1FF] hover:text-black hover:shadow-[0_0_20px_rgba(0,209,255,0.3)] group"
          >
            <span className="relative z-10">Join Us</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#00D1FF] to-[#00B88F] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 w-1.5 h-1.5 rounded-full bg-[#00D1FF] group-hover:bg-black animate-pulse" />
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center text-white focus:outline-none"
          >
            <div className="w-6 flex flex-col items-end gap-1.5">
              <span className={`block h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`} />
              <span className={`block h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0 w-0" : "opacity-100 w-4"}`} />
              <span className={`block h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "w-6 -rotate-45 -translate-y-2" : "w-6"}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 h-full w-full max-w-sm glass-strong z-40 md:hidden"
          >
            <div className="flex flex-col h-full pt-24 pb-8 px-6">
              {/* Nav links */}
              <nav className="flex-1">
                <ul className="space-y-2">
                  {navLinks.map((link, i) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * i, duration: 0.3 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className={`block py-4 px-4 text-lg font-semibold tracking-wide border-b border-white/10 transition-all duration-200 ${
                            isActive
                              ? "text-[#00D1FF] bg-[#00D1FF]/5 border-l-2 border-l-[#00D1FF]"
                              : "text-gray-400 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {link.label}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* CTA at bottom */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="mt-8"
              >
                <Link
                  href="/careers"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center py-4 font-bold text-sm tracking-widest uppercase transition-all bg-gradient-to-r from-[#00D1FF] to-[#00B88F] text-black hover:opacity-90"
                >
                  Join Us
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="mt-8 flex items-center gap-6 text-sm text-gray-600"
              >
                <a href="#" className="hover:text-[#00D1FF] transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-[#00D1FF] transition-colors">Twitter</a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
