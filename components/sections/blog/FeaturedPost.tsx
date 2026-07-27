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

export default function FeaturedPost() {
  const post = posts[0];
  if (!post) return null;

  return (
    <section className="bg-[#090c0a] px-8 md:px-14 pt-12 md:pt-16 pb-8">
      {/* Page header */}
      <p className="font-mono text-[10px] tracking-[0.2em] text-[#aab3a7] uppercase mb-8">
        Publications
      </p>

      {/* Featured card */}
      <Link
        href={`/blog/${post.slug}`}
        className="group block border border-white/12 bg-[#0d100d] p-8 md:p-10 hover:border-white/25 transition-all duration-200"
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="flex-1 min-w-0">
            {/* Tag */}
            <p className="font-mono text-[10px] tracking-[0.18em] text-[#8bb8d8] uppercase mb-4">
              {post.tag}
            </p>

            {/* Title */}
            <h2 className="font-sans font-semibold text-2xl md:text-3xl text-[#f1f5ec] leading-tight tracking-tight mb-4 group-hover:text-[#8bb8d8] transition-colors">
              {post.title}
            </h2>

            {/* Excerpt */}
            <p className="font-sans text-sm md:text-base text-[#aab3a7] leading-relaxed max-w-2xl mb-8">
              {getExcerpt(post.body, 220)}
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-sans text-xs text-[#8bb8d8] bg-[#8bb8d8]/10 border border-[#8bb8d8]/20 px-3 py-1 rounded-full">
                {post.readMin} min read
              </span>
              <span className="font-sans text-xs text-[#aab3a7]">
                {post.date}
              </span>
              <span className="font-sans text-xs text-[#768275]">
                · By {post.author}
              </span>
            </div>
          </div>

          {/* Arrow */}
          <span className="font-sans text-xl text-[#aab3a7]/40 group-hover:text-[#8bb8d8] group-hover:translate-x-1 transition-all shrink-0 hidden md:block self-center">
            →
          </span>
        </div>
      </Link>
    </section>
  );
}
