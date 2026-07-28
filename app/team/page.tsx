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

      {/* ── Hero image ── */}
      <section className="relative w-full h-[50vh] min-h-72 max-h-[520px] bg-black overflow-hidden">
        <Image
          src="/team_hero.png"
          alt="Intelligence Factory robotics lab"
          fill
          className="object-cover opacity-80"
          priority
          sizes="100vw"
        />
      </section>

      {/* ── About the team ── */}
      <section className="px-4 md:px-14 py-10 md:py-16 border-b border-white/15 bg-[#101610]">
        <div className="max-w-3xl">
          <p className="font-mono text-[10px] tracking-[0.22em] text-[#aab3a7] uppercase mb-4">
            About the team
          </p>
          <h1 className="font-sans font-semibold text-2xl md:text-4xl text-[#f1f5ec] leading-tight mb-8">
            Built by people obsessed with physical intelligence.
          </h1>
          <p className="font-sans text-sm md:text-base text-[#c4ccc0] leading-relaxed mb-5">
            Intelligence Factory is a frontier research and data company building the infrastructure
            for general-purpose robotic autonomy. We combine large-scale human demonstration
            collection with multi-modal foundation model training to produce robots that work
            in the real world.
          </p>
          <p className="font-sans text-sm md:text-base text-[#c4ccc0] leading-relaxed">
            Our team spans machine learning, computer vision, mechanical engineering,
            haptic hardware design, and large-scale field operations — united by the
            conviction that the key to physical AI is high-fidelity human data
            collected at unprecedented scale.
          </p>
        </div>
      </section>

      {/* ── Join us CTA ── */}
      <section className="px-4 md:px-14 py-10 md:py-16 bg-[#090c0a]">
        <div className="max-w-xl">
          <h2 className="font-sans font-bold text-xl md:text-2xl text-[#f1f5ec] leading-tight mb-3">
            Interested in working together?
          </h2>
          <p className="font-sans text-sm text-[#aab3a7] leading-relaxed mb-6">
            We are always looking for exceptional researchers, engineers, and operators
            who want to work at the frontier of physical AI.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:yash@intelligence-factory.com"
              className="border border-[#8bb8d8] bg-[#8bb8d8] text-[#090c0a] hover:bg-transparent hover:text-[#8bb8d8] px-5 py-2 font-sans text-sm font-medium transition-colors"
            >
              Contact Us
            </a>
            <a
              href="https://www.ycombinator.com/companies/intelligence-factory/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 text-[#f1f5ec] hover:border-[#8bb8d8] hover:text-[#8bb8d8] px-5 py-2 font-sans text-sm font-medium transition-colors"
            >
              View Careers
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
