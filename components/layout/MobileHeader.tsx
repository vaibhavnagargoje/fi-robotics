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
        className="font-sans font-black text-2xl tracking-tighter text-[#f1f5ec]"
      >
        f(i)
      </Link>
      <nav className="flex gap-5">
        {navItems.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`font-sans text-sm transition-colors ${
              pathname === href
                ? "font-semibold text-[#f1f5ec]"
                : "font-normal text-[#aab3a7] hover:text-[#d6ff72]"
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
