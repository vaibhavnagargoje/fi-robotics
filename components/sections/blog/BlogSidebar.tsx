import { posts } from "@/lib/posts";

export default function BlogSidebar() {
  /* Collect unique tags with post counts */
  const tagCounts = posts.reduce<Record<string, number>>((acc, p) => {
    acc[p.tag] = (acc[p.tag] || 0) + 1;
    return acc;
  }, {});
  const tags = Object.entries(tagCounts);

  return (
    <div className="sticky top-0 px-5 py-10">
      {/* Header */}
      <p className="font-mono text-[9px] tracking-[0.25em] text-[#768275] uppercase mb-5">
        Filter
      </p>

      {/* Search input (UI only) */}
      <div className="relative mb-6">
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
      <p className="font-mono text-[9px] tracking-[0.25em] text-[#768275] uppercase mb-3">
        Categories
      </p>

      <div className="flex flex-col gap-1">
        {/* All button — active state */}
        <button className="flex items-center justify-between text-left font-mono text-[11px] text-[#f1f5ec] px-3 py-1.5 bg-[#8bb8d8]/10 border border-[#8bb8d8]/20 rounded transition-colors">
          <span>All</span>
          <span className="text-[10px] text-[#8bb8d8]">{posts.length}</span>
        </button>

        {tags.map(([tag, count]) => (
          <button
            key={tag}
            className="flex items-center justify-between text-left font-mono text-[11px] text-[#aab3a7] px-3 py-1.5 border border-transparent rounded hover:text-[#f1f5ec] hover:bg-white/[0.04] hover:border-white/8 transition-all duration-150"
          >
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#8bb8d8]/40 shrink-0" />
              {tag}
            </span>
            <span className="text-[10px] text-[#768275]">{count}</span>
          </button>
        ))}
      </div>

      {/* Back to Index link */}
      <div className="mt-8 pt-5 border-t border-white/8">
        <a
          href="/"
          className="group font-mono text-[10px] text-[#768275] hover:text-[#8bb8d8] transition-colors inline-flex items-center gap-1.5"
        >
          <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
          Back to Index
        </a>
      </div>
    </div>
  );
}

