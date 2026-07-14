import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the team behind Intelligence Factory — building physical intelligence at scale.",
};

const VALUES = [
  {
    title: "Data-first",
    text: "We believe the bottleneck in robotics is not algorithms — it is data. Everything we build starts with the question: does this produce better training signal?",
  },
  {
    title: "Physical ground truth",
    text: "Simulation is a tool, not a foundation. Our models are grounded in real contact, real physics, and real human demonstration — captured at high fidelity.",
  },
  {
    title: "Scale as a discipline",
    text: "Collecting 500,000+ hours of demonstration data is an operations challenge. We treat data infrastructure with the same rigour as model architecture.",
  },
];

export default function TeamPage() {
  return (
    <div className="page-enter flex flex-col">

      {/* ── Hero image ── */}
      <section className="relative w-full h-[62vh] min-h-105 max-h-155 bg-black overflow-hidden">
        <Image
          src="/join_lab.png"
          alt="Intelligence Factory team in the robotics lab"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, calc(100vw - 260px)"
        />
      </section>

      {/* ── Mission statement ── */}
      <section className="px-8 md:px-14 py-14 md:py-20 border-b border-white/15 bg-[#101610]">
        <div className="max-w-3xl">
          <p className="font-sans text-xs text-[#aab3a7] mb-4 tracking-wide uppercase">About the team</p>
          <h1 className="font-sans font-semibold text-3xl md:text-4xl lg:text-5xl text-[#f1f5ec] leading-tight max-w-3xl mb-10">
            Built by people obsessed with physical intelligence.
          </h1>
          <p className="font-sans text-base md:text-lg text-[#c4ccc0] leading-relaxed mb-6">
            Intelligence Factory is a frontier research and data company building the infrastructure
            for general-purpose robotic autonomy. We combine large-scale human demonstration
            collection with multi-modal foundation model training to produce robots that work
            in the real world.
          </p>
          <p className="font-sans text-base md:text-lg text-[#c4ccc0] leading-relaxed">
            Our team spans machine learning, computer vision, mechanical engineering,
            haptic hardware design, and large-scale field operations — united by the
            conviction that the key to physical AI is high-fidelity human data
            collected at unprecedented scale.
          </p>
        </div>
      </section>

      {/* ── Values / Principles ── */}
      <section className="border-b border-white/15 bg-[#090c0a]">
        <div className="px-8 md:px-14 py-8 border-b border-white/15">
          <p className="font-sans text-xs text-[#aab3a7] uppercase tracking-wide">What we believe</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {VALUES.map((v, i) => (
            <div
              key={v.title}
              className={`px-8 md:px-10 py-10 md:py-14 flex flex-col gap-4 ${
                i < VALUES.length - 1 ? "border-b md:border-b-0 md:border-r border-white/15" : ""
              }`}
            >
              <h3 className="font-sans font-semibold text-base text-[#f1f5ec]">{v.title}</h3>
              <p className="font-sans text-sm text-[#aab3a7] leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Join us CTA ── */}
      <section className="px-8 md:px-14 py-14 md:py-20 bg-[#101610]">
        <div className="max-w-xl">
          <h2 className="font-sans font-bold text-2xl md:text-3xl text-[#f1f5ec] leading-tight mb-4">
            Interested in working together?
          </h2>
          <p className="font-sans text-sm text-[#aab3a7] leading-relaxed mb-8">
            We are always looking for exceptional researchers, engineers, and operators
            who want to work at the frontier of physical AI.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#"
              className="border border-[#d6ff72] bg-[#d6ff72] text-[#090c0a] hover:bg-transparent hover:text-[#d6ff72] px-6 py-2.5 font-sans text-sm font-medium transition-colors"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="border border-white/30 text-[#f1f5ec] hover:border-[#d6ff72] hover:text-[#d6ff72] px-6 py-2.5 font-sans text-sm font-medium transition-colors"
            >
              View Careers
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
