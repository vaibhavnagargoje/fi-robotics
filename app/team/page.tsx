// FILE: app/team/page.tsx
// PURPOSE: Team page — visual refresh with portrait founders, row grid, stats bar

"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import Footer from "@/components/Footer";

function useFade(reduced: boolean) {
  return (delay = 0) =>
    reduced
      ? {}
      : ({
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-5%" },
          transition: { duration: 0.5, delay, ease: "easeOut" },
        } as const);
}

/* ─── Data ───────────────────────────────────────────────── */
const founders = [
  {
    name: "Yash Sinha",
    role: "Co-Founder & CEO",
    bio: "ETH Zurich alumni. Previously simulation systems lead at Alfa Romeo F1.",
    quote: "The gap in robotics isn't the model — it's the data we use to train it.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBJeqjyKX95-pS5t4ZbNOGOZ1GnoG79fDYMTc5LhaZQIp5hgfm6FZGyW_bT7JcqpdRiGGoiDL_L13ArdAyg3ub-2lyeKOJfdg6FP65478y7MofB_nvxizETrY5JmToKo9xOcYb33tunlayVxZcTNqxaeHlp0I3_B-P3ytssGWdit9bSSxBxezFfKZi-xUHtG8uoB6WcnO6YMOVRyUa_jW_raXHOY6d5G-9M_uvCdNwKVz_UGzu8JVo418UgheZlTwybKv6QcIB88YQ",
  },
  {
    name: "Jalaj Shukla",
    role: "Co-Founder & CTO",
    bio: "UPenn GRASP Lab. Tri-axial sensor design and hardware architecture for dexterous manipulation.",
    quote: "Contact-rich manipulation is an unsolved problem. Our sensors get us closer to solving it.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDkTbD0JG_o8PWXndKcS87vs6tlST2sGq_x-3oTiJj-GzG6VUdIjJ75WIVYyLUfrm4AhL0l9bMSxjk8FjervcvFjxPYrmUUgTh1aNDoyEwhO-YXRSKZYpThoVSazjTv7CB-i0Dke91ywC5g8aX1ZBqrTr279AR_k4SrShyUfR9FssnPJb9Pn4dCGZkWwNSACRBjVUgWvnBQfFaP7qPvLnf0YlLb8O-a-i9WyYfN51FOqdkslCfAuD0_lgNchEyvfLS3jXXTy0hVIa4",
  },
];

const stats = [
  { value: "3",    label: "Global hubs" },
  { value: "500+", label: "Operators" },
  { value: "5",    label: "Avg. yrs robotics research" },
];

const team = [
  { name: "Rohan Desai",  role: "Head of Data Operations",       bio: "Oversees the end-to-end teleoperation pipeline and data quality standards across all sites." },
  { name: "Priya Kapoor", role: "Robotics Research Lead",         bio: "Works on model architecture for physical AI — translating raw demonstration data into generalizable policies." },
  { name: "Marcus Hofer", role: "Sensor Hardware Engineer",       bio: "Designs and iterates on the 5-DOF glove, contact sensors, and head-mounted optics." },
  { name: "Anya Sharma",  role: "ML Infrastructure Lead",         bio: "Builds the distributed training and data ingestion systems powering the Intelligence Factory pipeline." },
  { name: "Tariq Nasser", role: "Teleoperation Program Manager",  bio: "Manages operator onboarding, training protocols, and cross-hub coordination." },
  { name: "Lena Weber",   role: "Full Stack Engineer",            bio: "Builds internal tooling for task labeling, data review dashboards, and operator monitoring." },
];

/* ═══════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════ */
export default function TeamPage() {
  const reduced = useReducedMotion() ?? false;
  const fade = useFade(reduced);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#f7f6f3] text-[#0a0a0a]">

      {/* ── Hero — fullscreen video background ── */}
      <section className="relative h-screen flex flex-col justify-end overflow-hidden">
        {/* Video fills the full section */}
        <video
          ref={videoRef}
          src="/src-videos/Img 1941.mp4"
          preload="none"
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center center" }}
        />

        {/* Gradient overlay — clear at top, warm at bottom so text pops */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(247,246,243,0.15) 0%, rgba(247,246,243,0.5) 40%, rgba(247,246,243,0.92) 100%)",
          }}
        />

        {/* Text anchored to bottom of hero */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 px-6 md:px-16 pb-14"
        >
          <h1
            className="text-[clamp(3rem,8vw,6.5rem)] leading-[0.95] tracking-[-0.02em] text-[#0a0a0a] mb-4"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontStyle: "italic" }}
          >
            The people behind<br />the data.
          </h1>
          <p
            className="text-[12px] tracking-[0.06em] text-[#6b6b6b] max-w-sm"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            A team of roboticists, data scientists, and operators.
          </p>
        </motion.div>
      </section>

      {/* ── Founders — portrait format ── */}
      <section className="px-6 md:px-16 py-20">
        <div className="max-w-5xl mx-auto">
          <p
            className="text-[11px] tracking-[0.1em] uppercase text-[#9c9a97] mb-14"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Founders
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0" style={{ borderTop: "0.5px solid #e0ddd8" }}>
            {founders.map((f, i) => (
              <motion.div
                key={f.name}
                {...fade(i * 0.1)}
                className="flex flex-col gap-6 py-12 md:py-0 md:pt-10"
                style={{
                  paddingRight: i === 0 ? "3rem" : undefined,
                  paddingLeft: i === 1 ? "3rem" : undefined,
                  borderRight: i === 0 ? "0.5px solid #e0ddd8" : undefined,
                  borderBottom: "0.5px solid #e0ddd8",
                }}
              >
                {/* Portrait photo */}
                <div className="w-40 h-48 overflow-hidden bg-[#e8e6e0] flex-shrink-0">
                  <img
                    src={f.imageUrl}
                    alt={f.name}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>

                {/* Name + role */}
                <div className="flex flex-col gap-1.5">
                  <h2 className="text-[18px] font-medium text-[#0a0a0a]">{f.name}</h2>
                  <p
                    className="text-[11px] tracking-[0.06em] uppercase text-[#9c9a97]"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {f.role}
                  </p>
                </div>

                {/* Bio */}
                <p className="text-[13px] text-[#6b6b6b] leading-relaxed">{f.bio}</p>

                {/* Pull-quote with left border accent */}
                <div className="pl-4" style={{ borderLeft: "1.5px solid #0a0a0a" }}>
                  <p
                    className="text-[15px] text-[#6b6b6b] leading-[1.6]"
                    style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontStyle: "italic" }}
                  >
                    &ldquo;{f.quote}&rdquo;
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="px-6 md:px-16 py-12" style={{ borderTop: "0.5px solid #e0ddd8", borderBottom: "0.5px solid #e0ddd8" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-0">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              {...fade(i * 0.08)}
              className="flex flex-col gap-2 px-6 first:pl-0"
              style={{
                borderRight: i < 2 ? "0.5px solid #e0ddd8" : undefined,
              }}
            >
              <span
                className="text-[2rem] md:text-[2.5rem] font-light leading-none text-[#0a0a0a] tracking-tight"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {s.value}
              </span>
              <span className="text-[12px] text-[#9c9a97]" style={{ fontFamily: "'DM Mono', monospace" }}>
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Team — row layout ── */}
      <section className="px-6 md:px-16 py-16">
        <div className="max-w-5xl mx-auto">
          <p
            className="text-[11px] tracking-[0.1em] uppercase text-[#9c9a97] mb-10"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Team
          </p>

          <div>
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                {...fade(i * 0.06)}
                className="group py-5"
                style={{ borderBottom: "0.5px solid #e0ddd8" }}
              >
                {/* Name + role row with dotted fill */}
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-[14px] font-medium text-[#0a0a0a] group-hover:text-[#6b6b6b] transition-colors duration-200 whitespace-nowrap">
                    {member.name}
                  </span>
                  {/* Dotted fill */}
                  <span className="flex-1 border-b border-dotted border-[#c8c5c0] mb-[3px]" />
                  <span
                    className="text-[11px] text-[#9c9a97] tracking-[0.04em] whitespace-nowrap text-right"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {member.role}
                  </span>
                </div>
                {/* Bio */}
                <p className="text-[13px] text-[#9c9a97] leading-[1.7]">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Join CTA ── */}
      <section className="px-6 md:px-16 py-20" style={{ borderTop: "0.5px solid #e0ddd8" }}>
        <div className="max-w-5xl mx-auto">
          <motion.p {...fade(0)} className="text-[#6b6b6b] text-[15px] mb-4 leading-relaxed max-w-lg">
            Interested in building the infrastructure for physical AI?
          </motion.p>
          <motion.div {...fade(0.1)}>
            <Link
              href="/contact"
              id="team-get-in-touch"
              className="inline-flex items-center text-[13px] text-[#0a0a0a] hover:text-[#6b6b6b] transition-colors duration-200"
            >
              Get in touch →
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
