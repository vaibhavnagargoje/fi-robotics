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
    <div className="page-enter bg-[#090c0a] min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-0">
        {/* Left: Blog posts (80%) */}
        <div className="flex flex-col min-w-0">
          <FeaturedPost />
          <BlogGrid />
        </div>

        {/* Right: Sidebar (20%) — hidden on mobile */}
        <aside className="hidden lg:block border-l border-white/10">
          <BlogSidebar />
        </aside>
      </div>
    </div>
  );
}
