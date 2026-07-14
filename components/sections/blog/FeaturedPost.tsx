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

  return (
    <section className="border-b border-white/15 bg-[#090c0a]">
      <div className="grid-bg px-8 md:px-14 pt-12 md:pt-16 pb-10 md:pb-12 border-b border-white/15">
        <div className="flex items-center justify-between gap-4 mb-8">
          <p className="font-sans text-xs uppercase tracking-wide text-[#aab3a7]">
            Intelligence Factory Journal
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end">
          <h1 className="lg:col-span-8 font-sans font-semibold text-4xl md:text-5xl lg:text-6xl text-[#f1f5ec] leading-[1.03] tracking-tight">
            Ideas for robots that work in the real world.
          </h1>
          <p className="lg:col-span-4 font-sans text-sm md:text-base text-[#aab3a7] leading-relaxed max-w-sm">
            Research notes, field observations, and engineering decisions from the work of
            building physical intelligence.
          </p>
        </div>
      </div>

      <Link
        href={`/blog/${post.slug}`}
        className="group grid grid-cols-1 lg:grid-cols-12 border-b border-white/15"
      >
        <div className="lg:col-span-3 px-8 md:px-14 py-8 md:py-10 border-b lg:border-b-0 lg:border-r border-white/15 bg-[#162218]">
          <p className="font-sans text-xs uppercase tracking-wide text-[#d6ff72] mb-8">Lead story</p>
          <div className="font-sans text-xs text-[#b7c1b5] leading-relaxed">
            <p className="mb-1">{post.tag}</p>
            <p>{post.date}</p>
            <p>{post.readMin} min read</p>
          </div>
        </div>

        <div className="lg:col-span-9 px-8 md:px-14 py-10 md:py-14 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-3xl">
            <p className="font-sans text-xs uppercase tracking-wide text-[#aab3a7] mb-4">Research / The diversity problem</p>
            <h2 className="font-sans font-semibold text-2xl md:text-3xl lg:text-4xl text-[#f1f5ec] leading-[1.1] tracking-tight mb-5 group-hover:text-[#d6ff72] transition-colors">
              {post.title}
            </h2>
            <p className="font-sans text-sm md:text-base text-[#aab3a7] leading-relaxed max-w-2xl">
              {getExcerpt(post.body, 260)}
            </p>
          </div>

          <span className="font-sans text-sm font-medium text-[#f1f5ec] shrink-0 border-b border-[#d6ff72] pb-1 group-hover:text-[#d6ff72] transition-colors">
            Read analysis
          </span>
        </div>
      </Link>
    </section>
  );
}
