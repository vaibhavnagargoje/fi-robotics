// FILE: app/blog/[slug]/ArticleContent.tsx
// PURPOSE: Client component for article animations

"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import Footer from "@/components/Footer";
import type { Post } from "@/lib/posts";

/* ─── Render body text ───────────────────────────────────── */
function ArticleBody({ body }: { body: string }) {
  const paragraphs = body.split("\n\n");

  return (
    <div className="flex flex-col gap-6">
      {paragraphs.map((block, i) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        if (trimmed.startsWith("## ")) {
          return (
            <h2
              key={i}
              className="text-[22px] text-[#0a0a0a] leading-snug mt-8 mb-2"
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            >
              {trimmed.replace("## ", "")}
            </h2>
          );
        }

        if (trimmed.startsWith("- ")) {
          const items = trimmed.split("\n").filter((l) => l.startsWith("- "));
          return (
            <ul key={i} className="flex flex-col gap-2 pl-5">
              {items.map((item, j) => (
                <li key={j} className="text-[16px] text-[#0a0a0a] leading-[1.8] list-disc">
                  {item.replace("- ", "")}
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p key={i} className="text-[16px] text-[#0a0a0a] leading-[1.8]">
            {trimmed}
          </p>
        );
      })}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   ARTICLE CONTENT (client)
═══════════════════════════════════════════════════════════ */
export default function ArticleContent({ post }: { post: Post }) {
  const reduced = useReducedMotion() ?? false;

  const fade = (delay = 0) =>
    reduced
      ? {}
      : ({
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: "easeOut" },
        } as const);

  return (
    <div className="bg-[#f7f6f3] text-[#0a0a0a]">

      {/* ── Back link top ── */}
      <div className="px-6 md:px-16 pt-24 pb-0">
        <Link
          href="/blog"
          className="text-[12px] text-[#9c9a97] hover:text-[#0a0a0a] transition-colors duration-200"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          ← Back to Insights
        </Link>
      </div>

      {/* ── Article header ── */}
      <section className="px-6 md:px-16 pt-10 pb-12" style={{ borderBottom: "0.5px solid #e0ddd8" }}>
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <motion.p
            {...fade(0)}
            className="text-[11px] tracking-[0.08em] text-[#9c9a97] mb-5"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            {post.tag} · {post.date} · {post.readMin} min read
          </motion.p>

          {/* Title */}
          <motion.h1
            {...fade(0.06)}
            className="text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] tracking-[-0.01em] text-[#0a0a0a] mb-6"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontStyle: "italic" }}
          >
            {post.title}
          </motion.h1>

          {/* Author */}
          <motion.p
            {...fade(0.12)}
            className="text-[12px] text-[#9c9a97]"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            By {post.author}
          </motion.p>
        </div>
      </section>

      {/* ── Article body ── */}
      <section className="px-6 md:px-16 py-16">
        <div className="max-w-2xl">
          <motion.div {...fade(0.15)}>
            <ArticleBody body={post.body} />
          </motion.div>
        </div>
      </section>

      {/* ── Thin rule ── */}
      <div className="px-6 md:px-16">
        <div className="max-w-2xl" style={{ borderTop: "0.5px solid #e0ddd8" }} />
      </div>

      {/* ── Back link bottom ── */}
      <div className="px-6 md:px-16 py-12">
        <Link
          href="/blog"
          className="text-[12px] text-[#9c9a97] hover:text-[#0a0a0a] transition-colors duration-200"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          ← Back to Insights
        </Link>
      </div>

      <Footer />
    </div>
  );
}
