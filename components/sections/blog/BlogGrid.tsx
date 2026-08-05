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
    <section className="bg-[#090c0a] px-3 md:px-14 pb-8 md:pb-12">
      {/* Section Subheader Tag */}
      <div className="flex items-center gap-2 mb-4 pt-2">
        <span className="size-1.5 bg-[#8bb8d8]" />
        <p className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-[#f1f5ec] uppercase font-medium">
          All Publications
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {remaining.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col justify-between border border-white/15 bg-[#0d120e] p-5 md:p-6 hover:border-[#8bb8d8]/50 hover:bg-[#101610] transition-all duration-200"
          >
            <div>
              {/* Tag Badge */}
              <div className="flex items-center gap-1.5 mb-2.5">
                <span className="size-1 bg-[#8bb8d8]" />
                <span className="font-mono text-[10px] tracking-[0.18em] text-[#8bb8d8] uppercase font-semibold">
                  {post.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-sans font-bold text-base md:text-lg text-[#f1f5ec] leading-snug mb-2 group-hover:text-[#8bb8d8] transition-colors">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="font-tech text-xs md:text-sm text-[#c4ccc0] leading-relaxed mb-4">
                {getExcerpt(post.body, 110)}
              </p>
            </div>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-white/10 mt-auto">
              <span className="font-mono text-[10px] font-semibold text-[#8bb8d8] bg-[#8bb8d8]/10 border border-[#8bb8d8]/30 px-2 py-0.5">
                {post.readMin} min read
              </span>
              <span className="font-mono text-[11px] text-[#aab3a7]">{post.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

