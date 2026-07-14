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

export default function HighlightsSection() {
  const [featured, ...remaining] = posts;
  const latest = remaining.slice(0, 3);

  return (
    <section className="bg-[#101214] border-b border-white/15 text-[#f1f5ec]">
      <div className="px-8 md:px-14 py-6 border-b border-white/15 flex items-center justify-between gap-4">
        <p className="font-sans text-xs text-[#aab3a7] uppercase tracking-wide">
          Field Signals
        </p>
        <Link
          href="/blog"
          className="font-sans text-xs text-[#aab3a7] hover:text-[#8bb8d8] transition-colors"
        >
          Open research index
        </Link>
      </div>

      <div className="px-8 md:px-14 py-12 md:py-14 border-b border-white/15">
        <div className="max-w-3xl">
          <p className="font-sans text-xs uppercase tracking-wide text-[#8bb8d8] mb-4">
            What matters now
          </p>
          <h2 className="font-sans font-semibold text-2xl md:text-3xl text-[#f1f5ec] leading-tight max-w-2xl mb-5">
            Weekly technical briefings from deployment, hardware, and model training.
          </h2>
          <p className="font-sans text-sm md:text-base text-[#aab3a7] leading-relaxed max-w-2xl">
            A concentrated stream of real-world findings that shape our data roadmap: where
            policies break, which contact profiles transfer, and what improves reliability in
            production environments.
          </p>
        </div>
      </div>

      <div className="px-8 md:px-14 py-4 md:py-6">
        <Link
          href={`/blog/${featured.slug}`}
          className="group py-8 border-b border-white/15 flex flex-col md:flex-row md:items-start gap-5 md:gap-10"
        >
          <div className="md:w-45 shrink-0">
            <p className="font-sans text-xs text-[#aab3a7] uppercase tracking-wide mb-2">Featured analysis</p>
            <p className="font-sans text-xs text-[#aab3a7]">
              {featured.date} · {featured.readMin} min read
            </p>
          </div>

          <div className="flex-1">
            <p className="font-sans text-xs uppercase tracking-wide text-[#8bb8d8] mb-2">{featured.tag}</p>
            <h3 className="font-sans font-semibold text-xl md:text-2xl text-[#f1f5ec] leading-snug mb-3 group-hover:text-[#8bb8d8] transition-colors">
              {featured.title}
            </h3>
            <p className="font-sans text-sm text-[#aab3a7] leading-relaxed max-w-3xl">
              {getExcerpt(featured.body, 220)}
            </p>
          </div>
        </Link>

        <div className="divide-y divide-white/15">
          {latest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group py-8 flex flex-col md:flex-row md:items-start gap-4 md:gap-10"
            >
              <div className="md:w-45 shrink-0 flex md:flex-col gap-2 md:gap-1 text-xs text-[#aab3a7]">
                <span>{post.date}</span>
                <span className="md:hidden">·</span>
                <span>{post.readMin} min read</span>
              </div>

              <div className="flex-1">
                <p className="font-sans text-xs uppercase tracking-wide text-[#8bb8d8] mb-2">{post.tag}</p>
                <h4 className="font-sans font-medium text-base md:text-lg text-[#f1f5ec] leading-snug mb-2 group-hover:text-[#8bb8d8] transition-colors">
                  {post.title}
                </h4>
                <p className="font-sans text-sm text-[#aab3a7] leading-relaxed max-w-2xl">
                  {getExcerpt(post.body, 160)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="px-8 md:px-14 py-6 border-t border-white/15">
        <Link
          href="/blog"
          className="font-sans text-sm font-medium text-[#f1f5ec] hover:text-[#8bb8d8] transition-colors inline-flex items-center gap-1"
        >
          See all briefings →
        </Link>
      </div>
    </section>
  );
}
