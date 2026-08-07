/*
 * Each logo has a different aspect ratio and visual weight.
 * Heights are tuned per-logo so they all *appear* the same visual size.
 *   - Wide/text-heavy logos (ETH, NVIDIA, Ansys) → smaller height
 *   - Compact/icon logos (Harvard, Penn crest, F1) → larger height
 */
const logos = [
  { src: "/logos/eth.svg",     alt: "ETH Zürich",                  h: 20 },
  { src: "/logos/penn.png",    alt: "University of Pennsylvania",  h: 38 },
  { src: "/logos/harvard.png", alt: "Harvard University",          h: 36 },
  { src: "/logos/nvidia.svg",  alt: "NVIDIA",                      h: 26 },
  { src: "/logos/f1.png",      alt: "Formula 1",                   h: 32 },
  { src: "/logos/ansys.png",   alt: "Ansys",                       h: 24 },
];

export default function TalentSection() {
  return (
    <section className="bg-[#fbfcf8] border-b border-black/10 px-3 md:px-14 py-8 md:py-12">
      <p className="font-mono text-[10px] tracking-[0.22em] text-[#526054] uppercase mb-8 md:mb-10">
        Built by talent from
      </p>

      <div className="flex flex-wrap items-center gap-x-10 md:gap-x-12 gap-y-6">
        {logos.map((logo) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            title={logo.alt}
            style={{ height: logo.h, width: "auto" }}
            className="object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-200"
          />
        ))}
      </div>
    </section>
  );
}


