import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the team behind Intelligence Factory — building physical intelligence at scale.",
};

export default function TeamPage() {
  return (
    <div className="page-enter flex flex-col">

      {/* ── Photo Showcase Header Bar ── */}
      <div className="border-b border-white/15 bg-[#050705] px-4 md:px-12 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="size-1.5 bg-[#8bb8d8] animate-pulse" />
          <span className="font-mono text-[10px] md:text-xs tracking-wider text-[#f1f5ec] uppercase font-medium">
            Core Team
          </span>
        </div>
        <span className="font-mono text-[10px] text-[#8bb8d8] tracking-widest uppercase">

        </span>
      </div>

      {/* ── Photo Showcase (Aspect-square on mobile to prevent side crop, tall on desktop) ── */}
      <section className="relative w-full bg-[#090c0a] border-b border-white/15">
        <div className="relative w-full aspect-square sm:aspect-square md:aspect-auto md:h-[82vh] md:max-h-[820px] bg-[#0d120e] flex flex-col items-center justify-center grid-bg">
          <div className="flex flex-col items-center text-center gap-4 z-10 opacity-70">
            <span className="font-serif italic text-7xl md:text-9xl text-[#f1f5ec] leading-none">
              f(i)
            </span>
            <span className="font-mono text-xs md:text-sm tracking-[0.22em] uppercase text-[#aab3a7] leading-tight">
              INTELLIGENCE<br />FACTORY
            </span>
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050705]/50 via-transparent to-transparent" />
        </div>

        {/* Names Bar directly beneath photo across full width */}
        <div className="border-t border-white/15 bg-[#050705] px-4 md:px-12 py-3.5 md:py-4 grid grid-cols-2 gap-4 items-center">
          {/* Left Person: Jalaj Shukla */}
          {/* <div className="text-left">
            <p className="font-sans font-semibold text-base md:text-lg text-[#f1f5ec]">
              Jalaj Shukla
            </p>
            <p className="font-mono text-[10px] md:text-xs text-[#8bb8d8] tracking-wider uppercase mt-0.5">
              Co-founder & CTO
            </p>
          </div> */}

          {/* Right Person: Yash Sinha */}
          {/* <div className="text-right">
            <p className="font-sans font-semibold text-base md:text-lg text-[#f1f5ec]">
              Yash Sinha
            </p>
            <p className="font-mono text-[10px] md:text-xs text-[#8bb8d8] tracking-wider uppercase mt-0.5">
              Co-founder & CEO
            </p>
          </div> */}
        </div>
      </section>

      {/* ── Narrative & Thesis (Full Width, Matching Homepage Sections) ── */}
      <section className="bg-[#090c0a] border-b border-white/15 px-4 md:px-12 py-10 md:py-16 grid-bg">
        <div className="max-w-4xl">
          {/* Tag */}


          {/* Title */}
          <h1 className="font-sans font-semibold text-2xl sm:text-3xl md:text-5xl text-[#f1f5ec] leading-[1.12] mb-6">
            Built by people obsessed with physical intelligence.
          </h1>

          {/* Thesis Callout */}
          <div className="border-l-2 border-[#8bb8d8] pl-5 sm:pl-6 my-6 sm:my-8 py-1">
            <p className="font-mono text-[10px] tracking-[0.2em] text-[#8bb8d8] uppercase mb-1.5">
              Our Thesis
            </p>
            <p className="font-serif italic text-lg sm:text-2xl md:text-3xl text-[#f1f5ec] leading-snug">
              High-fidelity human data at unprecedented scale.
            </p>
          </div>

          {/* Narrative description */}
          <div className="space-y-5 text-[#c4ccc0] font-tech text-base md:text-lg leading-relaxed">
            <p>
              Intelligence Factory is a frontier research and data company building the infrastructure
              for general-purpose robotic autonomy. We combine large-scale human demonstration
              collection with multi-modal foundation model training to produce robots that work
              in the real world.
            </p>
            <p>
              Our team spans machine learning, computer vision, mechanical engineering,
              haptic hardware design, and large-scale field operations — united by the
              conviction that the key to physical AI is high-fidelity human data
              collected at unprecedented scale.
            </p>
          </div>
        </div>
      </section>

      {/* ── Join us CTA (Full width) ── */}
      <section className="bg-[#050705] border-b border-white/15 px-4 md:px-12 py-10 md:py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-xl">
            <p className="font-mono text-[10px] tracking-[0.2em] text-[#8bb8d8] uppercase mb-2">
              Careers & Collaboration
            </p>
            <h2 className="font-sans font-bold text-xl sm:text-2xl md:text-3xl text-[#f1f5ec] leading-tight mb-2">
              Interested in working together?
            </h2>
            <p className="font-tech text-sm md:text-base text-[#aab3a7] leading-relaxed">
              We are always looking for exceptional researchers, engineers, and operators
              who want to work at the frontier of physical AI.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:yash@intelligence-factory.com"
              className="border border-[#8bb8d8] bg-[#8bb8d8] text-[#090c0a] hover:bg-transparent hover:text-[#8bb8d8] px-6 py-2.5 font-sans text-sm font-medium transition-colors"
            >
              Contact Us
            </a>
            <a
              href="https://www.ycombinator.com/companies/intelligence-factory/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 text-[#f1f5ec] hover:border-[#8bb8d8] hover:text-[#8bb8d8] px-6 py-2.5 font-sans text-sm font-medium transition-colors"
            >
              View on YC
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
