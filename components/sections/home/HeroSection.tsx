import VideoFeed from "@/components/ui/VideoFeed";

export default function HeroSection() {
  return (
    <section className="p-6 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-white/15 bg-[#090c0a] grid-bg">
      {/* Copy */}
      <div className="lg:col-span-7">
        <p className="font-mono text-[10px] tracking-[0.15em] text-[#aab3a7] mb-5 uppercase">
          INTELLIGENCE FACTORY
        </p>

        <h1 className="font-serif italic text-[clamp(40px,6vw,80px)] text-[#f1f5ec] leading-[1.05] tracking-tight">
          Human Intelligence <br />for Robots.
        </h1>
      </div>

      {/* Hero Video */}
      <div className="lg:col-span-5 aspect-video border-2 border-[#8bb8d8] relative bg-black p-2 shadow-[6px_6px_0px_0px_rgba(139,184,216,0.45)]">
        <div className="w-full h-full border-2 border-white">
          <VideoFeed
            src="/src-videos/Autonomous 2X (1).mp4"
            label="Live Feed"
            showLabel={false}
            className="w-full h-full"
            opacity={85}
          />
        </div>
      </div>
    </section>
  );
}
