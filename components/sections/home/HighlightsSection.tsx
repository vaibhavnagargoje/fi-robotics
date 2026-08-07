import Link from "next/link";
import { posts } from "@/lib/posts";
import TalentSection from "@/components/sections/home/TalentSection";

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
    <>
      <section className="bg-white border-b border-black/10 text-[#0f1712]">
        <div className="px-8 md:px-14 py-4 md:py-6">
          <Link
            href={`/blog/${featured.slug}`}
            className="group py-8 border-b border-black/10 flex flex-col md:flex-row md:items-start gap-5 md:gap-10"
          >
            <div className="md:w-45 shrink-0">
              <p className="font-sans text-xs text-[#526054]">
                {featured.date} · {featured.readMin} min read
              </p>
            </div>

            <div className="flex-1">
              <h3 className="font-sans font-semibold text-xl md:text-2xl text-[#0f1712] leading-snug mb-3 group-hover:text-[#1d6ea8] transition-colors">
                {featured.title}
              </h3>
              <p className="font-sans text-sm text-[#526054] leading-relaxed max-w-3xl">
                {getExcerpt(featured.body, 220)}
              </p>
            </div>
          </Link>

          <div className="divide-y divide-black/10">
            {latest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group py-8 flex flex-col md:flex-row md:items-start gap-4 md:gap-10"
              >
                <div className="md:w-45 shrink-0 flex md:flex-col gap-2 md:gap-1 text-xs text-[#526054]">
                  <span>{post.date}</span>
                  <span className="md:hidden">·</span>
                  <span>{post.readMin} min read</span>
                </div>

                <div className="flex-1">
                  <p className="font-sans text-xs uppercase tracking-wide text-[#1d6ea8] mb-2">{post.tag}</p>
                  <h4 className="font-sans font-medium text-base md:text-lg text-[#0f1712] leading-snug mb-2 group-hover:text-[#1d6ea8] transition-colors">
                    {post.title}
                  </h4>
                  <p className="font-sans text-sm text-[#526054] leading-relaxed max-w-2xl">
                    {getExcerpt(post.body, 160)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="px-8 md:px-14 py-6 border-t border-black/10">
          <Link
            href="/blog"
            className="font-sans text-sm font-medium text-[#0f1712] hover:text-[#1d6ea8] transition-colors inline-flex items-center gap-1"
          >
            See all Posts →
          </Link>
        </div>
      </section>

      {/* Built by talent from */}
      <TalentSection />
    </>
  );
}
