"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/",     label: "Home"  },
  { href: "/blog", label: "Blog"  },
  { href: "/team", label: "Team"  },
];

const socialLinks = [
  { href: "https://www.linkedin.com/company/intelligence-factory/", label: "LinkedIn" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex flex-col h-screen w-65 left-0 top-0 border-r border-white/15 bg-[#101610] fixed z-40 px-8 py-10 justify-between">
      {/* Brand */}
      <div>
        <Link
          href="/"
          className="flex items-center gap-2.5 mb-12 group"
        >
          {/* Italic serif symbol */}
          <span className="font-serif italic text-3xl text-[#f1f5ec] leading-none group-hover:text-[#8bb8d8] transition-colors">
            f(i)
          </span>
          {/* Spaced-out label */}
          <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-[#aab3a7] leading-tight group-hover:text-[#8bb8d8] transition-colors">
            INTELLIGENCE<br />FACTORY
          </span>
        </Link>

        {/* Nav */}
        <ul className="flex flex-col gap-1">
          {navItems.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`block py-1.5 font-sans text-sm transition-colors duration-150 ${
                    isActive
                      ? "font-semibold text-[#f1f5ec]"
                      : "font-normal text-[#aab3a7] hover:text-[#8bb8d8]"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Footer links */}
      <div>
        <ul className="flex flex-col gap-2 mb-6">
          {socialLinks.map(({ href, label }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs text-[#aab3a7] hover:text-[#8bb8d8] transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <p className="font-sans text-xs text-[#707b70]">
          © 2026 Intelligence Factory
        </p>
      </div>
    </nav>
  );
}
