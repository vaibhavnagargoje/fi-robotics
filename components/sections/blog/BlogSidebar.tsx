import { posts } from "@/lib/posts";

export default function BlogSidebar() {
  /* Collect unique tags from all posts */
  const tags = Array.from(new Set(posts.map((p) => p.tag)));

  return (
    <div className="sticky top-0 px-6 py-12">
      {/* Header */}
      <p className="font-mono text-[10px] tracking-[0.2em] text-[#aab3a7] uppercase mb-6">
        Blog
      </p>

      {/* Search input (UI only) */}
      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Search Blog Posts"
          readOnly
          className="w-full bg-transparent border border-white/15 text-sm text-[#f1f5ec] placeholder-[#768275] px-4 py-2.5 font-sans focus:outline-none focus:border-[#8bb8d8]/40 transition-colors cursor-default"
        />
        <svg
          className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#768275]"
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

      {/* Tags / Categories */}
      <div className="space-y-1">
        <button className="w-full flex items-center justify-between text-left font-sans text-sm text-[#f1f5ec] px-3 py-2 bg-white/5 border border-white/10 transition-colors">
          <span>All</span>
          <span className="text-xs text-[#aab3a7]">→</span>
        </button>

        {tags.map((tag) => (
          <button
            key={tag}
            className="w-full flex items-center gap-2 text-left font-sans text-sm text-[#aab3a7] px-3 py-2 hover:text-[#f1f5ec] hover:bg-white/[0.03] transition-colors"
          >
            <span className="w-1 h-1 rounded-full bg-[#8bb8d8]/50 shrink-0" />
            <span>{tag}</span>
          </button>
        ))}
      </div>

      {/* Back to Index link */}
      <div className="mt-10 pt-6 border-t border-white/10">
        <a
          href="/"
          className="font-sans text-xs text-[#aab3a7] hover:text-[#8bb8d8] transition-colors inline-flex items-center gap-1.5"
        >
          ← Back to Index
        </a>
      </div>
    </div>
  );
}
