/* ── Target Deployment Industries ────────────────────────── */

const industries = [
  { name: "Warehouses", icon: "warehouse" },
  { name: "Manufacturing", icon: "precision_manufacturing" },
  { name: "Electronics", icon: "memory" },
  { name: "Grocery", icon: "local_grocery_store" },
  { name: "Pharmacy", icon: "medication" },
  { name: "Hospitality", icon: "room_service" },
] as const;

export default function IndustriesSection() {
  return (
    <section className="bg-[#050705] border-b border-white/15">
      <div className="px-6 md:px-14 py-10 md:py-16">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <p className="font-mono text-[10px] tracking-[0.2em] text-[#8bb8d8] uppercase mb-3">
            Deployment
          </p>
          <h2 className="font-sans font-semibold text-xl md:text-2xl lg:text-3xl text-[#f1f5ec] leading-tight max-w-xl">
            Deploying across industries
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/10">
          {industries.map((item) => (
            <div
              key={item.name}
              className="group bg-[#090c0a] p-6 md:p-7 flex flex-col items-start gap-4 hover:bg-[#101610] transition-colors duration-300 cursor-default"
            >
              {/* Icon */}
              <span
                className="material-symbols-outlined text-[#aab3a7] group-hover:text-[#8bb8d8] transition-colors duration-300"
                style={{ fontSize: "44px", fontVariationSettings: "'FILL' 1, 'wght' 300, 'GRAD' 0, 'opsz' 48" }}
              >
                {item.icon}
              </span>

              {/* Title */}
              <h3 className="font-sans font-medium text-sm md:text-base text-[#f1f5ec]">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
