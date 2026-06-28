// FILE: app/blog/page.tsx
// PURPOSE: Blog index — fullscreen video hero + newspaper list

"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import Footer from "@/components/Footer";
import { posts } from "@/lib/posts";

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

/* ═══════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════ */
export default function BlogPage() {
  const reduced = useReducedMotion() ?? false;
  const fade = useFade(reduced);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

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

    videoRefs.current.forEach((v) => {
      if (v) observer.observe(v);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#f7f6f3] text-[#0a0a0a]">

      {/* ── Hero — fullscreen video background ── */}
      <section className="relative h-screen flex flex-col justify-end overflow-hidden">
        {/* Video fills the full section */}
        <video
          ref={(el) => { videoRefs.current[0] = el; }}
          src="/src-videos/Cleaning_demo.mp4"
          preload="none"
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center center" }}
        />

        {/* Gradient overlay — dark at bottom so text pops, clear at top */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(247,246,243,0.15) 0%, rgba(247,246,243,0.5) 40%, rgba(247,246,243,0.92) 100%)",
          }}
        />

        {/* Text — overlaid at the bottom of the hero */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 px-6 md:px-16 pb-14"
        >
          <h1
            className="text-[clamp(3.5rem,9vw,7rem)] leading-[0.95] tracking-[-0.02em] text-[#0a0a0a] mb-4"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            Insights.
          </h1>
          <p
            className="text-[12px] tracking-[0.06em] text-[#6b6b6b] max-w-sm"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Research and operations writing from the Intelligence Factory team.
          </p>
        </motion.div>
      </section>

      {/* ── Post list — newspaper index ── */}
      <section className="px-6 md:px-16 py-12" style={{ borderTop: "0.5px solid #e0ddd8" }}>
        <div className="max-w-4xl mx-auto">

          {/* Column header */}
          <div
            className="grid grid-cols-[5rem_1fr_auto] gap-x-6 pb-3"
            style={{ borderBottom: "0.5px solid #e0ddd8" }}
          >
            {(["Tag", "Title", "Date"] as const).map((col) => (
              <span
                key={col}
                className={`text-[10px] tracking-[0.1em] uppercase text-[#b8b5b0] ${col === "Date" ? "hidden sm:block text-right" : ""}`}
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {col}
              </span>
            ))}
          </div>

          {posts.map((post, i) => (
            <motion.div key={post.slug} {...fade(i * 0.05)}>
              <Link
                href={`/blog/${post.slug}`}
                className="grid grid-cols-[5rem_1fr] sm:grid-cols-[5rem_1fr_auto] gap-x-6 gap-y-1 py-5 group"
                style={{ borderBottom: "0.5px solid #e0ddd8", display: "grid" }}
              >
                <span
                  className="text-[11px] tracking-[0.06em] text-[#9c9a97] pt-px"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {post.tag}
                </span>

                <div className="flex flex-col gap-1">
                  <span className="text-[14px] font-medium text-[#0a0a0a] leading-snug group-hover:text-[#6b6b6b] transition-colors duration-200">
                    {post.title}
                  </span>
                  <span
                    className="text-[11px] text-[#b8b5b0] sm:hidden"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {post.readMin} min · {post.date}
                  </span>
                </div>

                <div
                  className="hidden sm:flex flex-col items-end gap-0.5"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  <span className="text-[11px] text-[#9c9a97] whitespace-nowrap">{post.readMin} min read</span>
                  <span className="text-[11px] text-[#b8b5b0]">{post.date}</span>
                </div>
              </Link>
            </motion.div>
          ))}

          <motion.p
            {...fade(0.3)}
            className="pt-8 text-[12px] text-[#b8b5b0]"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            More writing coming soon.
          </motion.p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
