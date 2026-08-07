import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the team behind Intelligence Factory — building physical intelligence at scale.",
};

export default function TeamPage() {
  return (
    <div className="page-enter flex flex-col bg-[#fbfcf8]">

      {/* ── Photo Showcase Header Bar ── */}
      <div className="border-b border-black/10 bg-[#f3f6f1] px-4 md:px-12 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="size-1.5 bg-[#1d6ea8] animate-pulse" />
          <span className="font-mono text-[10px] md:text-xs tracking-wider text-[#0f1712] uppercase font-medium">
            Core Team
          </span>
        </div>
        <span className="font-mono text-[10px] text-[#1d6ea8] tracking-widest uppercase">

        </span>
      </div>

      {/* ── Photo Showcase (Aspect-square on mobile to prevent side crop, tall on desktop) ── */}
      <section className="relative w-full bg-[#fbfcf8] border-b border-black/10">
        <div className="relative w-full aspect-square sm:aspect-square md:aspect-auto md:h-[82vh] md:max-h-[820px] bg-black">
          <Image
            src="/team-photo.jpg"
            alt="Jalaj Shukla and Yash Sinha - Intelligence Factory Founders"
            fill
            priority
            className="object-cover object-[center_41%]"
            sizes="100vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>

        {/* Names Bar directly beneath photo across full width */}
        <div className="border-t border-black/10 bg-[#f3f6f1] px-4 md:px-12 py-3.5 md:py-4 grid grid-cols-2 gap-4 items-center">
          {/* Left Person: Jalaj Shukla */}
          <div className="text-left">
            <p className="font-sans font-semibold text-base md:text-lg text-[#0f1712]">
              Jalaj Shukla
            </p>
            <p className="font-mono text-[10px] md:text-xs text-[#1d6ea8] tracking-wider uppercase mt-0.5">
              Co-founder & CTO
            </p>
          </div>

          {/* Right Person: Yash Sinha */}
          <div className="text-right">
            <p className="font-sans font-semibold text-base md:text-lg text-[#0f1712]">
              Yash Sinha
            </p>
            <p className="font-mono text-[10px] md:text-xs text-[#1d6ea8] tracking-wider uppercase mt-0.5">
              Co-founder & CEO
            </p>
          </div>
        </div>
      </section>

      {/* ── Narrative & Thesis (Full Width, Matching Homepage Sections) ── */}
      <section className="bg-[#fbfcf8] border-b border-black/10 px-4 md:px-12 py-10 md:py-16 grid-bg">
        <div className="max-w-4xl">
          {/* Title */}
          <h1 className="font-sans font-semibold text-2xl sm:text-3xl md:text-5xl text-[#0f1712] leading-[1.12] mb-6">
            Built by people obsessed with physical intelligence.
          </h1>

          {/* Thesis Callout */}
          <div className="border-l-2 border-[#1d6ea8] pl-5 sm:pl-6 my-6 sm:my-8 py-1">
            <p className="font-mono text-[10px] tracking-[0.2em] text-[#1d6ea8] uppercase mb-1.5">
              Our Thesis
            </p>
            <p className="font-serif italic text-lg sm:text-2xl md:text-3xl text-[#0f1712] leading-snug">
              High-fidelity human data at unprecedented scale.
            </p>
          </div>

          {/* Narrative description */}
          <div className="space-y-5 text-[#526054] font-tech text-base md:text-lg leading-relaxed">
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
      <section className="bg-[#f3f6f1] border-b border-black/10 px-4 md:px-12 py-10 md:py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-xl">
            <p className="font-mono text-[10px] tracking-[0.2em] text-[#1d6ea8] uppercase mb-2">
              Careers & Collaboration
            </p>
            <h2 className="font-sans font-bold text-xl sm:text-2xl md:text-3xl text-[#0f1712] leading-tight mb-2">
              Interested in working together?
            </h2>
            <p className="font-tech text-sm md:text-base text-[#526054] leading-relaxed">
              We are always looking for exceptional researchers, engineers, and operators
              who want to work at the frontier of physical AI.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:yash@intelligence-factory.com"
              className="border border-[#1d6ea8] bg-[#1d6ea8] text-white hover:bg-transparent hover:text-[#1d6ea8] px-6 py-2.5 font-sans text-sm font-medium transition-colors shadow-sm"
            >
              Contact Us
            </a>
            <a
              href="https://www.ycombinator.com/companies/intelligence-factory/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black/20 text-[#0f1712] hover:border-[#1d6ea8] hover:text-[#1d6ea8] px-6 py-2.5 font-sans text-sm font-medium transition-colors"
            >
              View on YC
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
