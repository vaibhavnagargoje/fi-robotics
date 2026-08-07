import Link from "next/link";

const links = [
  { label: "Team",  href: "/team" },
  { label: "Blog",  href: "/blog" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/intelligence-factory/" },
];

export default function SiteFooter() {
  return (
    <footer className="md:hidden w-full border-t border-black/10 bg-white px-6 py-8 flex flex-col gap-6">
      <p className="font-sans text-sm text-[#526054]">
        © 2026 Intelligence Factory, Inc. All rights reserved.
      </p>
      <nav className="flex flex-wrap gap-x-6 gap-y-2">
        {links.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className="font-sans text-sm text-[#526054] hover:text-[#1d6ea8] transition-colors"
          >
            {label}
          </Link>
        ))}
        {socialLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm text-[#526054] hover:text-[#1d6ea8] transition-colors"
          >
            {label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
