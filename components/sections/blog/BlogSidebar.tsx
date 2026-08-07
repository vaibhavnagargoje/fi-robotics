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
      <div className="relative mb-5 lg:mb-6">
        <input
          type="text"
          placeholder="Search publications…"
          className="w-full bg-white border border-black/10 rounded text-xs text-[#0f1712] placeholder-[#526054]/70 px-3 py-2.5 font-mono focus:outline-none focus:border-[#1d6ea8] focus:ring-1 focus:ring-[#1d6ea8]/20 transition-colors"
        />
        <svg
          className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#1d6ea8]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* Categories header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="size-1.5 bg-[#1d6ea8]" />
        <p className="font-mono text-[10px] tracking-[0.22em] text-[#0f1712] uppercase font-semibold">
          Categories
        </p>
      </div>

      <div className="flex flex-row flex-wrap lg:flex-col gap-1.5 lg:gap-1.5">
        {/* All button — active state */}
        <button className="flex items-center justify-between gap-3 text-left font-mono text-xs font-semibold text-[#0f1712] px-3 py-2 bg-[#1d6ea8]/10 border border-[#1d6ea8]/30 rounded transition-colors">
          <span className="flex items-center gap-2">
            All Topics
          </span>
          <span className="text-[10px] font-bold text-[#1d6ea8]">{posts.length}</span>
        </button>

        {tags.map(([tag, count]) => (
          <button
            key={tag}
            className="flex items-center justify-between gap-3 text-left font-mono text-xs font-medium text-[#526054] px-3 py-2 border border-transparent rounded hover:text-[#0f1712] hover:bg-black/[0.04] hover:border-black/10 transition-all duration-150"
          >
            <span className="flex items-center gap-2">
              <span className="size-1 rounded-full bg-[#1d6ea8]/60 shrink-0" />
              {tag}
            </span>
            <span className="text-[10px] text-[#526054] font-mono">{count}</span>
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
          className="w-full flex items-center justify-between px-4 py-3 bg-white border-b border-black/10 sticky top-0 z-20"
        >
          <div className="flex items-center gap-2">
            <span className="size-1.5 bg-[#1d6ea8] animate-pulse" />
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#0f1712] uppercase font-medium">
              Filter & Search
            </span>
          </div>
          <svg
            className={`w-3.5 h-3.5 text-[#1d6ea8] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Collapsible panel */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out bg-white border-b border-black/10 ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="px-4 py-4">
            {filterContent}
          </div>
        </div>
      </div>

      {/* ── Desktop: sticky sidebar ── */}
      <div className="hidden lg:flex lg:flex-col lg:justify-between lg:sticky lg:top-0 lg:h-screen px-5 py-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <p className="font-mono text-[10px] tracking-[0.22em] text-[#1d6ea8] uppercase font-semibold">
              Filter Index
            </p>
          </div>

          {filterContent}
        </div>

        {/* Back to Index link */}
        <div className="pt-5 border-t border-black/10">
          <a
            href="/"
            className="group font-mono text-xs font-medium text-[#526054] hover:text-[#1d6ea8] transition-colors inline-flex items-center gap-2"
          >
            <span className="text-[#1d6ea8] group-hover:-translate-x-1 transition-transform">←</span>
            Back to Index
          </a>
        </div>
      </div>
    </>
  );
}
