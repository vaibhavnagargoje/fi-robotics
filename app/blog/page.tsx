import type { Metadata } from "next";
import FeaturedPost from "@/components/sections/blog/FeaturedPost";
import BlogGrid from "@/components/sections/blog/BlogGrid";
import BlogSidebar from "@/components/sections/blog/BlogSidebar";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Research papers, field notes, and technical deep-dives from the Intelligence Factory team.",
};

export default function BlogPage() {
  return (
    <div className="page-enter bg-[#fbfcf8] min-h-screen flex flex-col">
      {/* ── Top Header Bar (Matching Team & Home page header aesthetic) ── */}
      <div className="border-b border-black/10 bg-[#f3f6f1] px-3 md:px-14 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="size-1.5 bg-[#1d6ea8] animate-pulse" />
          <span className="font-mono text-[10px] md:text-xs tracking-wider text-[#0f1712] uppercase font-medium">
            Publications // Research & Field Notes
          </span>
        </div>
      </div>

      {/* Mobile: filter bar sits above posts */}
      <div className="lg:hidden">
        <BlogSidebar />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-0 flex-1">
        {/* Left: Blog posts */}
        <div className="flex flex-col min-w-0">
          <FeaturedPost />
          <BlogGrid />
        </div>

        {/* Right: Sidebar — desktop only */}
        <aside className="hidden lg:block border-l border-black/10 bg-[#f3f6f1]/40">
          <BlogSidebar />
        </aside>
      </div>
    </div>
  );
}

