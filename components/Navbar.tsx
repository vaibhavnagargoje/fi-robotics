"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-5 w-full z-50">
      <div
        className={`relative mx-auto flex w-[calc(100%-2rem)] items-center justify-between transition-all duration-500 md:w-[calc(100%-3rem)] ${
          isScrolled
            ? "max-w-5xl rounded-full border border-[#0f172a]/10 bg-[#f6f4ef]/80 px-6 py-3 shadow-[0_16px_40px_rgba(15,23,42,0.12)] backdrop-blur-xl"
            : "max-w-6xl px-8 py-5"
        }`}
      >
        <Link href="/" className="font-medium text-xl tracking-tight text-[#0f172a]">
          Intelligence Factory
        </Link>
        <div className="hidden md:flex gap-12 text-sm font-medium tracking-wide text-[#0f172a]/65">
          <Link href="/" className="hover:text-[#0f172a] transition-colors">
            Home
          </Link>
          <Link href="/company" className="hover:text-[#0f172a] transition-colors">
            Company
          </Link>
          <Link href="/team" className="hover:text-[#0f172a] transition-colors">
            Team
          </Link>
        </div>
        <Link
          href="/careers"
          className="hidden md:block rounded-full border border-[#0f172a]/15 bg-white/70 px-6 py-2.5 text-sm font-medium text-[#0f172a] transition-all duration-300 hover:bg-[#0f172a] hover:text-[#f6f4ef]"
        >
          Join Us
        </Link>
        <Menu className="md:hidden text-[#0f172a]" />
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute inset-x-10 -bottom-px h-px bg-gradient-to-r from-transparent via-[#2b6d77]/40 to-transparent transition-opacity duration-500 ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </nav>
  );
}
