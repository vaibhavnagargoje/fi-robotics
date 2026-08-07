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
    <nav className="hidden md:flex flex-col h-screen w-65 left-0 top-0 border-r border-black/10 bg-white fixed z-40 px-8 py-10 justify-between">
      {/* Brand */}
      <div>
        <Link
          href="/"
          className="flex items-center gap-2.5 mb-12 group"
        >
          {/* Italic serif symbol */}
          <span className="font-serif italic text-3xl text-[#0f1712] leading-none group-hover:text-[#1d6ea8] transition-colors">
            f(i)
          </span>
          {/* Spaced-out label */}
          <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-[#526054] leading-tight group-hover:text-[#1d6ea8] transition-colors">
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
                      ? "font-semibold text-[#0f1712]"
                      : "font-normal text-[#526054] hover:text-[#1d6ea8]"
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
                className="font-sans text-xs text-[#526054] hover:text-[#1d6ea8] transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <p className="font-sans text-xs text-[#78867a]">
          © 2026 Intelligence Factory
        </p>
      </div>
    </nav>
  );
}
