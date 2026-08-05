import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "@/lib/posts";
import type { Reference } from "@/lib/posts";
import ScrollToTop from "@/components/ui/ScrollToTop";
import ReadingProgress from "@/components/ui/ReadingProgress";
import TableOfContents from "@/components/ui/TableOfContents";
import { type ReactNode } from "react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not Found" };
  return {
    title: post.title,
    description: `${post.title} — Intelligence Factory Whitepaper`,
  };
}

/* ── Helpers ─────────────────────────────────────────────── */

/** Generate a URL-safe slug from heading text */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** Extract headings from body text for the Table of Contents */
function extractHeadings(body: string): { id: string; text: string; level: number }[] {
  const headings: { id: string; text: string; level: number }[] = [];
  const blocks = body.split("\n\n");
  for (const block of blocks) {
    const t = block.trim();
    if (t.startsWith("### ")) {
      const text = t.replace(/^###\s*/, "");
      headings.push({ id: slugify(text), text, level: 3 });
    } else if (t.startsWith("## ")) {
      const text = t.replace(/^##\s*/, "");
      headings.push({ id: slugify(text), text, level: 2 });
    }
  }
  return headings;
}

/**
 * Render formatted text — handles:
 * - Markdown links: [label](url)
 * - Reference markers: [1], [2], etc.
 * - Bold: **text**
 */
function renderFormattedText(text: string, references?: Reference[]): ReactNode[] {
  const combinedRegex = /\[([^\]]+)\]\(([^)]+)\)|\[(\d+)\]|\*\*([^*]+)\*\*/g;
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match;
  let keyIdx = 0;

  while ((match = combinedRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    if (match[1] && match[2]) {
      // Markdown link
      parts.push(
        <a
          key={`link-${keyIdx++}`}
          href={match[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#8bb8d8] underline underline-offset-4 hover:text-white transition-colors"
        >
          {match[1]} ↗
        </a>
      );
    } else if (match[3]) {
      // Reference marker [1], [2], etc.
      const refId = match[3];
      const ref = references?.find((r) => r.id === parseInt(refId, 10));
      parts.push(
        <sup
          key={`ref-${keyIdx++}`}
          className="inline-flex items-center justify-center ml-[2px] -mt-1 cursor-default group relative"
        >
          <span className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-full bg-[#8bb8d8]/15 text-[#8bb8d8] text-[9px] font-mono font-bold leading-none hover:bg-[#8bb8d8]/30 transition-colors">
            {refId}
          </span>
          {/* Desktop Tooltip on hover (hidden on mobile to prevent overflow) */}
          {ref && (
            <span className="hidden md:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 rounded-lg bg-[#1a1f1b] border border-white/10 text-[10px] text-[#c4ccc0] leading-relaxed w-64 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 shadow-xl z-50 whitespace-normal">
              <span className="font-semibold text-[#8bb8d8] block mb-1">
                [{refId}]
              </span>
              {ref.text}
            </span>
          )}
        </sup>
      );
    } else if (match[4]) {
      // Bold text
      parts.push(
        <strong key={`bold-${keyIdx++}`} className="text-[#f1f5ec] font-semibold">
          {match[4]}
        </strong>
      );
    }

    lastIndex = combinedRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
}

/* ── Page Component ──────────────────────────────────────── */

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const headings = extractHeadings(post.body);
  const references = post.references ?? [];

  const blocks = post.body.split("\n\n").map((block, i) => {
    const t = block.trim();
    if (!t) return null;

    if (t.startsWith("### ")) {
      const text = t.replace(/^###\s*/, "");
      return (
        <h3
          key={i}
          id={slugify(text)}
          className="font-sans font-semibold text-base md:text-lg text-[#8bb8d8] mt-8 mb-3 scroll-mt-24"
        >
          {text}
        </h3>
      );
    }
    if (t.startsWith("## ")) {
      const text = t.replace(/^##\s*/, "");
      return (
        <h2
          key={i}
          id={slugify(text)}
          className="font-sans font-bold text-xl md:text-2xl text-[#f1f5ec] mt-12 mb-4 border-b border-white/10 pb-2 scroll-mt-24"
        >
          {text}
        </h2>
      );
    }
    if (t.startsWith("- ")) {
      return (
        <ul
          key={i}
          className="list-disc pl-5 my-4 space-y-2 text-sm md:text-base text-[#c4ccc0] leading-relaxed"
        >
          {t.split("\n").map((li, j) => (
            <li key={j}>{renderFormattedText(li.replace(/^-\s*/, ""), references)}</li>
          ))}
        </ul>
      );
    }
    if (t.match(/^[0-9]+\.\s/)) {
      return (
        <ol
          key={i}
          className="list-decimal pl-5 my-4 space-y-3 text-sm text-[#c4ccc0] leading-relaxed"
        >
          {t.split("\n").map((li, j) => (
            <li key={j} className="pl-1">
              {renderFormattedText(li.replace(/^[0-9]+\.\s*/, ""), references)}
            </li>
          ))}
        </ol>
      );
    }
    return (
      <p key={i} className="text-sm md:text-base text-[#c4ccc0] leading-[1.8] mb-5">
        {renderFormattedText(t, references)}
      </p>
    );
  });

  return (
    <>
      <div className="page-enter flex-1 bg-[#090c0a] w-full">
        {/* Reading progress bar */}
        <ReadingProgress />

        <div className="w-full px-3 md:px-14 py-6 md:py-12 text-[#f1f5ec]">
          {/* Back link */}
          <Link
            href="/blog"
            className="text-xs font-mono uppercase tracking-wider text-[#aab3a7] hover:text-[#8bb8d8] transition-colors mb-6 md:mb-8 inline-block"
          >
            ← Back to Publications
          </Link>

          {/* Header — full width */}
          <header className="mb-8 md:mb-12 border-b border-white/15 pb-8 max-w-4xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#8bb8d8] uppercase tracking-wider mb-4 flex-wrap">
              <span>{post.tag}</span>
              <span>·</span>
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readMin} min read</span>
            </div>

            <h1 className="font-serif italic text-3xl md:text-5xl text-[#f1f5ec] leading-tight tracking-tight mb-4">
              {post.title}
            </h1>

            <p className="text-xs font-mono text-[#aab3a7]">
              Authors: {post.author}
            </p>
          </header>

          {/* ── 3-column layout: TOC | Content (Expanded) | References (Narrowed + Vertical Line) ── */}
          <div
            className={`lg:grid lg:gap-8 xl:gap-10 items-start ${
              references.length > 0
                ? "lg:grid-cols-[160px_1fr_220px] xl:grid-cols-[170px_1fr_240px]"
                : "lg:grid-cols-[160px_1fr]"
            }`}
          >
            {/* Column 1: Table of Contents */}
            <TableOfContents headings={headings} />

            {/* Column 2: Article content — expanded reading width */}
            <article id="article-content" className="min-w-0 space-y-2 max-w-3xl xl:max-w-4xl">
              {blocks}
            </article>

            {/* Column 3: References sidebar with vertical divider line */}
            {references.length > 0 && (
              <>
                {/* Desktop: sticky sidebar with clean vertical divider */}
                <aside className="hidden lg:block border-l border-white/10 pl-6 xl:pl-8 sticky top-10 self-start max-h-[calc(100vh-4rem)] overflow-y-auto">
                  <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#8bb8d8] mb-4 font-semibold">
                    References
                  </p>
                  <ol className="space-y-4">
                    {references.map((ref) => (
                      <li key={ref.id} className="group">
                        <div className="flex gap-2">
                          <span className="shrink-0 flex items-center justify-center w-[18px] h-[18px] rounded-full bg-[#8bb8d8]/10 text-[#8bb8d8] text-[9px] font-mono font-bold mt-[2px]">
                            {ref.id}
                          </span>
                          <div className="text-[11px] leading-relaxed text-[#aab3a7]/80 group-hover:text-[#c4ccc0] transition-colors">
                            {ref.url ? (
                              <a
                                href={ref.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#8bb8d8] transition-colors"
                              >
                                {ref.text}
                              </a>
                            ) : (
                              ref.text
                            )}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </aside>

                {/* Mobile: references below content */}
                <div className="lg:hidden mt-16 pt-8 border-t border-white/10">
                  <h2 className="font-sans font-bold text-lg text-[#f1f5ec] mb-6">
                    References
                  </h2>
                  <ol className="space-y-3">
                    {references.map((ref) => (
                      <li key={ref.id} className="flex gap-2">
                        <span className="shrink-0 flex items-center justify-center w-[18px] h-[18px] rounded-full bg-[#8bb8d8]/10 text-[#8bb8d8] text-[9px] font-mono font-bold mt-[2px]">
                          {ref.id}
                        </span>
                        <div className="text-xs leading-relaxed text-[#aab3a7] break-words">
                          {ref.url ? (
                            <a
                              href={ref.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-[#8bb8d8] transition-colors underline underline-offset-2"
                            >
                              {ref.text}
                            </a>
                          ) : (
                            ref.text
                          )}
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <ScrollToTop />
    </>
  );
}
