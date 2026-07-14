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

  return (
    <section className="bg-[#101610]">
      <div className="px-8 md:px-14 py-7 md:py-8 border-b border-white/15 flex items-center justify-between gap-4">
        <p className="font-sans text-xs text-[#aab3a7] uppercase tracking-wide">Latest dispatches</p>
        <p className="font-sans text-xs text-[#aab3a7]">{remaining.length} published notes</p>
      </div>

      <div className="px-8 md:px-14">
        {remaining.map((post, index) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 border-b border-white/15 last:border-b-0"
          >
            <p className="md:col-span-1 font-sans text-xs text-[#768275] tabular-nums">
              {String(index + 2).padStart(2, "0")}
            </p>

            <div className="md:col-span-3 flex md:flex-col items-center md:items-start gap-2 md:gap-1 font-sans text-xs text-[#aab3a7]">
              <span className="uppercase tracking-wide text-[#d6ff72]">{post.tag}</span>
              <span className="md:hidden">·</span>
              <span>{post.date}</span>
              <span className="md:hidden">·</span>
              <span>{post.readMin} min read</span>
            </div>

            <div className="md:col-span-7">
              <h2 className="font-sans font-medium text-lg md:text-xl text-[#f1f5ec] leading-snug mb-3 group-hover:text-[#d6ff72] transition-colors">
                {post.title}
              </h2>
              <p className="font-sans text-sm text-[#aab3a7] leading-relaxed max-w-2xl">
                {getExcerpt(post.body, 175)}
              </p>
            </div>

            <div className="md:col-span-1 hidden md:flex justify-end items-start">
              <span className="font-sans text-lg leading-none text-[#768275] group-hover:text-[#d6ff72] group-hover:translate-x-1 transition-all">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
