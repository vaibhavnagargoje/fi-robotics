import type { Metadata } from "next";
import FeaturedPost from "@/components/sections/blog/FeaturedPost";
import BlogGrid from "@/components/sections/blog/BlogGrid";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Research papers, field notes, and technical deep-dives from the Intelligence Factory team.",
};

export default function BlogPage() {
  return (
    <div className="page-enter flex flex-col">
      <FeaturedPost />
      <BlogGrid />
    </div>
  );
}
