"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/company", label: "Company" },
  { href: "/team", label: "Team" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav className="fixed top-5 w-full z-50">
        <div
          className={`relative mx-auto flex w-[calc(100%-2rem)] items-center justify-between transition-all duration-500 md:w-[calc(100%-3rem)] ${
            isScrolled
              ? "max-w-5xl rounded-full border border-[#0f172a]/10 bg-[#f6f4ef]/80 px-5 py-3 shadow-[0_16px_40px_rgba(15,23,42,0.12)] backdrop-blur-xl"
              : "max-w-6xl px-5 py-5"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="font-medium text-base md:text-xl tracking-tight text-[#0f172a] shrink-0"
            onClick={() => setMobileOpen(false)}
          >
            Intelligence Factory
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex gap-12 text-sm font-medium tracking-wide text-[#0f172a]/65">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-[#0f172a] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            href="/careers"
            className="hidden md:block rounded-full border border-[#0f172a]/15 bg-white/70 px-6 py-2.5 text-sm font-medium text-[#0f172a] transition-all duration-300 hover:bg-[#0f172a] hover:text-[#f6f4ef]"
          >
            Join Us
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full border border-[#0f172a]/10 bg-white/60 backdrop-blur-sm text-[#0f172a] transition-all duration-200 hover:bg-[#0f172a] hover:text-[#f6f4ef]"
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>

          {/* Scrolled underline glow */}
          <span
            aria-hidden="true"
            className={`pointer-events-none absolute inset-x-10 -bottom-px h-px bg-gradient-to-r from-transparent via-[#2b6d77]/40 to-transparent transition-opacity duration-500 ${
              isScrolled ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </nav>

      {/* Mobile full-screen overlay menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#f6f4ef]/95 backdrop-blur-xl flex flex-col pt-24 px-7 pb-10 md:hidden"
          >
            {/* Nav links */}
            <div className="flex flex-col gap-1 flex-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-xl font-medium tracking-tight text-[#0f172a]/75 hover:text-[#0f172a] py-2.5 border-b border-black/8 transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA at bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/careers"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center w-full rounded-full bg-[#0f172a] px-8 py-3.5 text-sm font-medium text-[#f6f4ef] transition-all duration-300 hover:bg-[#00D1FF] hover:text-[#0f172a]"
              >
                Join Us
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
