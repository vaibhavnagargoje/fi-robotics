import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center gap-6 md:flex-row md:justify-between md:text-left">

          {/* Copyright */}
          <div className="text-xs text-gray-600 order-2 md:order-1">
            © 2026 Intelligence Factory. All Rights Reserved.
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs text-gray-600 order-1 md:order-2">
            <Link href="/company"  className="hover:text-white transition-colors">About</Link>
            <Link href="/team"     className="hover:text-white transition-colors">Team</Link>
            <Link href="/careers"  className="hover:text-white transition-colors">Careers</Link>
            <Link href="/contact"  className="hover:text-white transition-colors">Contact</Link>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">X / Twitter</a>
          </div>

        </div>
      </div>
    </footer>
  );
}
