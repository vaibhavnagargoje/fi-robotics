import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f0ebe3] py-16 md:py-24 px-6 md:px-8 border-t border-black/10 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">

        {/* Brand */}
        <div className="md:col-span-1">
          <div className="font-medium text-2xl tracking-tighter mb-3 text-[#0f172a]">IF</div>
          <p className="text-sm text-[#0f172a]/70 font-light">© 2026 Intelligence Factory.</p>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-3">
          <span className="text-xs font-medium tracking-widest text-[#0f172a]/60 uppercase mb-1">Company</span>
          <Link href="/company" className="text-sm text-[#0f172a]/80 hover:text-[#0f172a] transition-colors font-light">About</Link>
          <Link href="/team"    className="text-sm text-[#0f172a]/80 hover:text-[#0f172a] transition-colors font-light">Team</Link>
          <Link href="/careers" className="text-sm text-[#0f172a]/80 hover:text-[#0f172a] transition-colors font-light">Careers</Link>
        </div>

        {/* Technology */}
        <div className="flex flex-col gap-3">
          <span className="text-xs font-medium tracking-widest text-[#0f172a]/60 uppercase mb-1">Technology</span>
          <a href="#" className="text-sm text-[#0f172a]/80 hover:text-[#0f172a] transition-colors font-light">Models</a>
          <a href="#" className="text-sm text-[#0f172a]/80 hover:text-[#0f172a] transition-colors font-light">Research</a>
        </div>

        {/* Social */}
        <div className="flex flex-col gap-3">
          <span className="text-xs font-medium tracking-widest text-[#0f172a]/60 uppercase mb-1">Social</span>
          <a href="#"           className="text-sm text-[#0f172a]/80 hover:text-[#0f172a] transition-colors font-light">X / Twitter</a>
          <a href="#"           className="text-sm text-[#0f172a]/80 hover:text-[#0f172a] transition-colors font-light">LinkedIn</a>
          <Link href="/contact" className="text-sm text-[#0f172a]/80 hover:text-[#0f172a] transition-colors font-light">Contact</Link>
        </div>

      </div>
    </footer>
  );
}
