const logos = [
  { src: "/logos/eth.svg", alt: "ETH Zürich", height: 30 },
  { src: "/logos/penn.png", alt: "University of Pennsylvania", height: 36 },
  { src: "/logos/harvard.png", alt: "Harvard University", height: 32 },
  { src: "/logos/nvidia.svg", alt: "NVIDIA", height: 30 },
  { src: "/logos/f1.png", alt: "Formula 1", height: 34 },
  { src: "/logos/ansys.png", alt: "Ansys", height: 26 },
];

export default function TalentSection() {
  return (
    <section className="bg-[#090c0a] border-b border-white/15 px-8 md:px-14 py-12">
      <p className="font-mono text-[10px] tracking-[0.22em] text-[#aab3a7] uppercase mb-10">
        Built by talent from
      </p>

      <div className="flex flex-wrap items-center gap-x-10 gap-y-7">
        {logos.map((logo) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            title={logo.alt}
            style={{ height: logo.height, width: "auto" }}
            className="object-contain grayscale invert opacity-60 hover:opacity-100 transition-opacity duration-200"
          />
        ))}
      </div>
    </section>
  );
}
