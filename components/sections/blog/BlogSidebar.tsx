"use client";

import { useState } from "react";
import { posts } from "@/lib/posts";

export default function BlogSidebar() {
  const [open, setOpen] = useState(false);

  /* Collect unique tags with post counts */
  const tagCounts = posts.reduce<Record<string, number>>((acc, p) => {
    acc[p.tag] = (acc[p.tag] || 0) + 1;
    return acc;
  }, {});
  const tags = Object.entries(tagCounts);

  /* Shared filter content */
  const filterContent = (
    <>
      {/* Search input */}
      <div className="relative mb-4 lg:mb-6">
        <input
          type="text"
          placeholder="Search…"
          className="w-full bg-white/[0.03] border border-white/10 rounded text-xs text-[#f1f5ec] placeholder-[#555e54] px-3 py-2 font-mono focus:outline-none focus:border-[#8bb8d8]/30 transition-colors"
        />
        <svg
          className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#555e54]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* Categories */}
      <p className="font-mono text-[9px] tracking-[0.25em] text-[#768275] uppercase mb-2 lg:mb-3">
        Categories
      </p>

      <div className="flex flex-row flex-wrap lg:flex-col gap-1.5 lg:gap-1">
        {/* All button — active state */}
        <button className="flex items-center justify-between gap-3 text-left font-mono text-[11px] text-[#f1f5ec] px-3 py-1.5 bg-[#8bb8d8]/10 border border-[#8bb8d8]/20 rounded transition-colors">
          <span>All</span>
          <span className="text-[10px] text-[#8bb8d8]">{posts.length}</span>
        </button>

        {tags.map(([tag, count]) => (
          <button
            key={tag}
            className="flex items-center justify-between gap-3 text-left font-mono text-[11px] text-[#aab3a7] px-3 py-1.5 border border-transparent rounded hover:text-[#f1f5ec] hover:bg-white/[0.04] hover:border-white/8 transition-all duration-150"
          >
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#8bb8d8]/40 shrink-0" />
              {tag}
            </span>
            <span className="text-[10px] text-[#768275]">{count}</span>
          </button>
        ))}
      </div>
    </>
  );

  return (
    <>
      {/* ── Mobile: sticky filter toggle + collapsible panel ── */}
      <div className="lg:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between px-4 py-2.5 bg-[#0d100d] border-b border-white/8 sticky top-0 z-20"
        >
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#aab3a7] uppercase">
            Filter & Search
          </span>
          <svg
            className={`w-3.5 h-3.5 text-[#aab3a7] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Collapsible panel */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out bg-[#0d100d] border-b border-white/8 ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="px-4 py-4">
            {filterContent}
          </div>
        </div>
      </div>

      {/* ── Desktop: original sidebar ── */}
      <div className="hidden lg:flex lg:flex-col lg:justify-between lg:sticky lg:top-0 lg:h-screen px-5 py-10">
        <div>
          <p className="font-mono text-[9px] tracking-[0.25em] text-[#768275] uppercase mb-5">
            Filter
          </p>

          {filterContent}
        </div>

        {/* Back to Index link */}
        <div className="pt-5 border-t border-white/8">
          <a
            href="/"
            className="group font-mono text-[10px] text-[#768275] hover:text-[#8bb8d8] transition-colors inline-flex items-center gap-1.5"
          >
            <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
            Back to Index
          </a>
        </div>
      </div>
    </>
  );
}
