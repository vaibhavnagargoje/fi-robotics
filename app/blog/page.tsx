import type { Metadata } from "next";
import BlogHeroVideo from "@/components/sections/blog/BlogHeroVideo";
import BlogGrid from "@/components/sections/blog/BlogGrid";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Research papers, field notes, and technical deep-dives from the Intelligence Factory team.",
};

export default function BlogPage() {
  return (
    <div className="page-enter bg-[#090c0a] flex-1 flex flex-col relative">
      {/* Video flush to top, sticky behind the content */}
      <div className="sticky top-0 z-0 w-full shrink-0">
        <BlogHeroVideo />
      </div>

      {/* Blog Cards Row - sliding over the video */}
      <div className="relative z-10 w-full flex-1 flex flex-col">
        <BlogGrid />
      </div>
    </div>
  );
}

