import Link from "next/link";
import { posts } from "@/lib/posts";

function getExcerpt(body: string, maxChars: number) {
  const paragraph =
    body
      .split("\n\n")
      .find((line) => line.trim() && !line.trim().startsWith("#"))
      ?.trim() ?? "";
  return paragraph.length > maxChars
    ? `${paragraph.slice(0, maxChars)}…`
    : paragraph;
}

export default function BlogGrid() {
  const remaining = posts.slice(1);
  if (remaining.length === 0) return null;

  return (
    <section className="bg-[#090c0a] px-3 md:px-14 pb-6 md:pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
        {remaining.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block border border-white/12 bg-[#0d100d] p-5 hover:border-white/25 transition-all duration-200"
          >
            {/* Tag */}
            <p className="font-mono text-[9px] tracking-[0.18em] text-[#8bb8d8] uppercase mb-2">
              {post.tag}
            </p>

            {/* Title */}
            <h3 className="font-sans font-semibold text-sm md:text-base text-[#f1f5ec] leading-snug mb-2 group-hover:text-[#8bb8d8] transition-colors">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="font-sans text-xs text-[#aab3a7] leading-relaxed mb-4">
              {getExcerpt(post.body, 100)}
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-sans text-[10px] text-[#8bb8d8] bg-[#8bb8d8]/10 border border-[#8bb8d8]/20 px-2 py-0.5 rounded-full">
                {post.readMin} min read
              </span>
              <span className="font-sans text-[10px] text-[#aab3a7]">{post.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

