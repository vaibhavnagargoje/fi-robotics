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
    <section className="bg-[#fbfcf8] px-3 md:px-14 pt-6 md:pt-12 pb-4 md:pb-6">
      {/* Page header */}
      <p className="font-mono text-[10px] tracking-[0.2em] text-[#526054] uppercase mb-6">
        Publications
      </p>

      {/* Featured card */}
      <Link
        href={`/blog/${post.slug}`}
        className="group block border border-black/10 bg-white p-4 md:p-6 hover:border-black/25 hover:shadow-md transition-all duration-200"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex-1 min-w-0">
            {/* Tag */}
            <p className="font-mono text-[9px] tracking-[0.18em] text-[#1d6ea8] uppercase mb-2">
              {post.tag}
            </p>

            {/* Title */}
            <h2 className="font-sans font-semibold text-lg md:text-xl text-[#0f1712] leading-snug tracking-tight mb-2 group-hover:text-[#1d6ea8] transition-colors">
              {post.title}
            </h2>

            {/* Excerpt */}
            <p className="font-sans text-sm text-[#526054] leading-relaxed max-w-xl mb-4">
              {getExcerpt(post.body, 120)}
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-sans text-[11px] text-[#1d6ea8] bg-[#1d6ea8]/10 border border-[#1d6ea8]/25 px-2.5 py-0.5 rounded-full font-medium">
                {post.readMin} min read
              </span>
              <span className="font-sans text-[11px] text-[#526054]">
                {post.date}
              </span>
              <span className="font-sans text-[11px] text-[#526054]/80">
                · By {post.author}
              </span>
            </div>
          </div>

          {/* Arrow */}
          <span className="font-sans text-lg text-[#526054]/60 group-hover:text-[#1d6ea8] group-hover:translate-x-1 transition-all shrink-0 hidden md:block self-center">
            →
          </span>
        </div>
      </Link>
    </section>
  );
}

