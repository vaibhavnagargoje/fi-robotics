// FILE: components/Footer.tsx
// PURPOSE: Minimal editorial footer — light theme, plain text

"use client";

import Link from "next/link";

const links = [
  { label: "Team",    href: "/team" },
  { label: "Blog",    href: "/blog" },

  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer
      className="bg-[#f7f6f3] py-14 px-6 md:px-16"
      style={{ borderTop: "0.5px solid #e0ddd8" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

        {/* Brand */}
        <div className="flex flex-col gap-2">
          <p className="text-[13px] font-medium text-[#0a0a0a]">Intelligence Factory</p>
          <p className="text-[12px] text-[#9c9a97]">Human Intelligence for Robots.</p>
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap gap-x-8 gap-y-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[12px] text-[#9c9a97] hover:text-[#0a0a0a] transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-[11px] font-mono text-[#b8b5b0]">
          © {new Date().getFullYear()} Intelligence Factory
        </p>
      </div>
    </footer>
  );
}
