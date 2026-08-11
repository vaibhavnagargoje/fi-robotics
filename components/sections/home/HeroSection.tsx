"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="px-3 md:px-12 pt-12 pb-0 grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8 items-center border-b border-white/15 bg-[#090c0a] grid-bg min-h-[60vh] overflow-hidden">
      {/* Copy */}
      <div className="lg:col-span-6 z-10 pb-12">
        <p className="font-mono text-[10px] tracking-[0.15em] text-[#aab3a7] mb-5 uppercase">
        </p>

        <h1 className="font-serif italic text-[clamp(40px,6vw,80px)] text-[#f1f5ec] leading-[1.05] tracking-tight">
          Human Intelligence <br />for Robots.
        </h1>
      </div>

      {/* Hero Image (No Background Effect via mix-blend-lighten) */}
      <div className="lg:col-span-6 relative w-full h-[350px] md:h-[550px]">
        <Image
          src="/images/realistic_arm_v3.png"
          alt="Realistic Industrial Robotic Arm"
          fill
          priority
          className="object-contain object-bottom mix-blend-lighten drop-shadow-2xl opacity-95 hover:opacity-100 transition-all duration-500 scale-105"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </section>
  );
}
