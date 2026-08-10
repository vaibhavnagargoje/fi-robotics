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
  const allPosts = posts;

  return (
    <section className="relative z-10 bg-[#090c0a] grid-bg flex-1 w-full md:min-h-[100vh] px-3 md:px-14 pb-8 md:pb-12 ">
      {/* Section label — between video and cards */}
      <div className="flex items-center gap-3 md:gap-4 mb-8 pt-5">
        <span className="size-1.5 bg-[#8bb8d8] animate-pulse shrink-0" />
        <h2 className="font-mono text-[11px] sm:text-[13px] md:text-[17px] tracking-wider text-[#f1f5ec] uppercase font-medium leading-relaxed">
          Publications // Research &amp; Field Notes
        </h2>
        <div className="h-[1px] bg-white/15 flex-1 mt-0.5 hidden sm:block" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col justify-between border border-white/15 bg-[#0d120e] p-5 md:p-6 hover:bg-[#f1f5ec] hover:border-[#f1f5ec]"
          >
            <div>
              {/* Tag Badge */}
              <div className="flex items-center gap-1.5 mb-2.5">
                {/* <span className="size-1 bg-[#8bb8d8] group-hover:bg-[#205275]" /> */}
                <span className="font-mono text-[10px] tracking-[0.18em] text-[#8bb8d8] group-hover:text-[#205275] uppercase font-semibold">
                  {/* {post.tag} */}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-sans font-bold text-base md:text-lg text-[#f1f5ec] leading-snug mb-2 group-hover:text-[#090c0a]">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="font-tech text-xs md:text-sm text-[#c4ccc0] leading-relaxed mb-4 group-hover:text-[#3a473e]">
                {getExcerpt(post.body, 110)}
              </p>
            </div>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-white/10 group-hover:border-black/10 mt-auto">
              <span className="font-mono text-[10px] font-semibold text-[#8bb8d8] group-hover:text-[#205275] bg-[#8bb8d8]/10 group-hover:bg-[#8bb8d8]/20 border border-[#8bb8d8]/30 group-hover:border-[#205275]/30 px-2 py-0.5">
                {post.readMin} min read
              </span>
              <span className="font-mono text-[11px] text-[#aab3a7] group-hover:text-[#506354]">{post.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

