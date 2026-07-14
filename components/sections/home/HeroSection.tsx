import VideoFeed from "@/components/ui/VideoFeed";

export default function HeroSection() {
  return (
    <section className="p-6 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-white/15 bg-[#090c0a] grid-bg">
      {/* Copy */}
      <div className="lg:col-span-7">
        <p className="font-mono text-[10px] tracking-[0.15em] text-[#aab3a7] mb-5 uppercase">
          Core Autonomy System
        </p>

        <h1 className="font-sans font-extrabold text-[40px] lg:text-[54px] text-[#f1f5ec] mb-6 leading-[1.08] tracking-tight">
          Human Intelligence <br />for Robots.
        </h1>

        <p className="font-sans text-lg font-normal leading-relaxed text-[#aab3a7] max-w-xl mb-8 pl-4 border-l-2 border-[#d6ff72]">
          We build foundation models for physical autonomy — powered by the largest
          collection of human demonstration data on Earth.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#"
            className="border border-[#d6ff72] bg-[#d6ff72] text-[#090c0a] hover:bg-transparent hover:text-[#d6ff72] px-6 py-2.5 font-sans text-sm font-medium inline-flex items-center gap-2 transition-colors duration-150"
          >
            Get Started
          </a>
          <a
            href="#"
            className="border border-white/30 text-[#f1f5ec] hover:border-[#d6ff72] hover:text-[#d6ff72] px-6 py-2.5 font-sans text-sm font-medium inline-flex items-center gap-2 transition-colors duration-150"
          >
            View Research
          </a>
        </div>
      </div>

      {/* Hero Video */}
      <div className="lg:col-span-5 h-85 border-2 border-[#d6ff72] relative bg-black p-2 shadow-[6px_6px_0px_0px_rgba(214,255,114,0.7)]">
        <div className="w-full h-full border-2 border-white">
          <VideoFeed
            src="/src-videos/Intelligence Factory Launch Video V3 (1).mp4"
            label="Live Feed"
            className="w-full h-full"
            opacity={65}
            grayscale
          />
        </div>
      </div>
    </section>
  );
}
