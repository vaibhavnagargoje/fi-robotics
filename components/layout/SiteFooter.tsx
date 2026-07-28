import Link from "next/link";

const links = [
  { label: "Team",  href: "/team" },
  { label: "Blog",  href: "/blog" },
];

export default function SiteFooter() {
  return (
    <footer className="w-full border-t border-white/15 bg-[#101610] px-8 py-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
      <p className="font-sans text-sm text-[#aab3a7]">
        © 2026 Intelligence Factory, Inc. All rights reserved.
      </p>
      <nav className="flex flex-wrap gap-x-6 gap-y-2">
        {links.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className="font-sans text-sm text-[#aab3a7] hover:text-[#8bb8d8] transition-colors"
          >
            {label}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
