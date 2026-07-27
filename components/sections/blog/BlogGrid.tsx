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
    <section className="bg-[#090c0a] px-8 md:px-14 pb-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {remaining.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block border border-white/12 bg-[#0d100d] p-7 hover:border-white/25 transition-all duration-200"
          >
            {/* Tag */}
            <p className="font-mono text-[10px] tracking-[0.18em] text-[#8bb8d8] uppercase mb-4">
              {post.tag}
            </p>

            {/* Title */}
            <h3 className="font-sans font-semibold text-lg md:text-xl text-[#f1f5ec] leading-snug mb-3 group-hover:text-[#8bb8d8] transition-colors">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="font-sans text-sm text-[#aab3a7] leading-relaxed mb-7">
              {getExcerpt(post.body, 140)}
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-sans text-xs text-[#8bb8d8] bg-[#8bb8d8]/10 border border-[#8bb8d8]/20 px-3 py-1 rounded-full">
                {post.readMin} min read
              </span>
              <span className="font-sans text-xs text-[#aab3a7]">{post.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
