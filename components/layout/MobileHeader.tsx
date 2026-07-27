"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/",     label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/team", label: "Team" },
];

export default function MobileHeader() {
  const pathname = usePathname();

  return (
    <header className="md:hidden flex items-center justify-between px-6 h-14 bg-[#101610] border-b border-white/15 sticky top-0 z-50 w-full">
      <Link
        href="/"
        className="flex items-center gap-2 group"
      >
        <span className="font-serif italic text-xl text-[#f1f5ec] leading-none group-hover:text-[#8bb8d8] transition-colors">
          f(i)
        </span>
        <span className="font-mono text-[8px] tracking-[0.18em] uppercase text-[#aab3a7] leading-tight group-hover:text-[#8bb8d8] transition-colors">
          INTELLIGENCE<br />FACTORY
        </span>
      </Link>
      <nav className="flex gap-5">
        {navItems.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`font-sans text-sm transition-colors ${
              pathname === href
                ? "font-semibold text-[#f1f5ec]"
                : "font-normal text-[#aab3a7] hover:text-[#8bb8d8]"
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
