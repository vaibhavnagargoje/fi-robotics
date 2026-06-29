// FILE: components/Navbar.tsx
// PURPOSE: Editorial navbar — logo.svg mark, text links, one outlined CTA

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { href: "/team",  label: "Team" },
  { href: "/blog",  label: "Blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#f7f6f3]/90 backdrop-blur-md"
            : "bg-transparent"
        }`}
        style={{ borderBottom: scrolled ? "0.5px solid #e0ddd8" : "none" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">

          {/* Logo — SVG mark */}
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center hover:opacity-70 transition-opacity duration-200"
            aria-label="Intelligence Factory — Home"
          >
            <Image
              src="/logo.svg"
              alt="f(i) — Intelligence Factory"
              width={68}
              height={34}
              priority
              className="h-[34px] w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[13px] transition-colors duration-200 ${
                    isActive
                      ? "text-[#0a0a0a] font-medium"
                      : "text-[#6b6b6b] hover:text-[#0a0a0a] font-normal"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="text-[13px] font-normal text-[#0a0a0a] px-4 py-1.5 hover:bg-[#0a0a0a] hover:text-[#f7f6f3] transition-colors duration-200"
              style={{ border: "0.5px solid #0a0a0a" }}
            >
              Contact
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((p) => !p)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="md:hidden relative z-50 w-8 h-8 flex flex-col items-end justify-center gap-1.5"
          >
            <span className={`block h-px bg-[#0a0a0a] transition-all duration-200 ${mobileOpen ? "w-6 rotate-45 translate-y-[6px]" : "w-6"}`} />
            <span className={`block h-px bg-[#0a0a0a] transition-all duration-200 ${mobileOpen ? "opacity-0 w-0" : "w-4"}`} />
            <span className={`block h-px bg-[#0a0a0a] transition-all duration-200 ${mobileOpen ? "w-6 -rotate-45 -translate-y-[6px]" : "w-6"}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-[#f7f6f3]/80 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed top-0 right-0 h-full w-72 bg-[#f7f6f3] z-40 md:hidden"
              style={{ borderLeft: "0.5px solid #e0ddd8" }}
            >
              <div className="flex flex-col pt-20 pb-8 px-8 h-full">
                <nav className="flex-1 flex flex-col gap-1">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`py-3 text-base transition-colors duration-200 ${
                          isActive ? "text-[#0a0a0a] font-medium" : "text-[#6b6b6b] hover:text-[#0a0a0a]"
                        }`}
                        style={{ borderBottom: "0.5px solid #e0ddd8" }}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </nav>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-8 text-sm text-center py-3 text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#f7f6f3] transition-colors duration-200"
                  style={{ border: "0.5px solid #0a0a0a" }}
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
