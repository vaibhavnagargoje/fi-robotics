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
          className="text-[#1d6ea8] underline underline-offset-4 hover:text-[#0f1712] transition-colors"
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
          <span className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-full bg-[#1d6ea8]/10 text-[#1d6ea8] text-[9px] font-mono font-bold leading-none hover:bg-[#1d6ea8]/20 transition-colors">
            {refId}
          </span>
          {/* Desktop Tooltip on hover (hidden on mobile to prevent overflow) */}
          {ref && (
            <span className="hidden md:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 rounded-lg bg-white border border-black/10 text-[10px] text-[#526054] leading-relaxed w-64 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 shadow-xl z-50 whitespace-normal">
              <span className="font-semibold text-[#1d6ea8] block mb-1">
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
        <strong key={`bold-${keyIdx++}`} className="text-[#0f1712] font-semibold">
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

  /**
   * Helper to find all reference objects cited within a raw text string
   */
  const getCitationsInText = (rawText: string): Reference[] => {
    const ids = Array.from(rawText.matchAll(/\[(\d+)\]/g), (m) => parseInt(m[1], 10));
    if (ids.length === 0) return [];
    return references.filter((r) => ids.includes(r.id));
  };

  /**
   * Render clean, simple reference note in the margin (matching original aesthetic)
   */
  const renderSidenotes = (cites: Reference[]) => {
    if (cites.length === 0) return null;
    return (
      <div className="space-y-4 pt-1">
        {cites.map((ref) => (
          <div key={ref.id} className="flex gap-2">
            <span className="shrink-0 flex items-center justify-center w-[18px] h-[18px] rounded-full bg-[#1d6ea8]/10 text-[#1d6ea8] text-[9px] font-mono font-bold mt-[2px]">
              {ref.id}
            </span>
            <div className="text-[11px] leading-relaxed text-[#526054] hover:text-[#0f1712] transition-colors">
              {ref.url ? (
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1d6ea8] transition-colors"
                >
                  {ref.text}
                </a>
              ) : (
                ref.text
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const rawBlocks = post.body.split("\n\n");

  const renderedRows = rawBlocks.map((block, i) => {
    const t = block.trim();
    if (!t) return null;

    // Headings
    if (t.startsWith("### ")) {
      const text = t.replace(/^###\s*/, "");
      return (
        <div
          key={i}
          className="lg:grid lg:grid-cols-[1fr_240px] xl:grid-cols-[1fr_260px] items-start"
        >
          <div className="lg:pr-6 xl:lg:pr-8">
            <h3
              id={slugify(text)}
              className="font-sans font-semibold text-base md:text-lg text-[#1d6ea8] mt-6 mb-2 scroll-mt-24"
            >
              {text}
            </h3>
          </div>
          <div className="hidden lg:block lg:pl-6 xl:lg:pl-8" />
        </div>
      );
    }

    if (t.startsWith("## ")) {
      const text = t.replace(/^##\s*/, "");
      return (
        <div
          key={i}
          className="lg:grid lg:grid-cols-[1fr_240px] xl:grid-cols-[1fr_260px] items-start"
        >
          <div className="lg:pr-6 xl:lg:pr-8">
            <h2
              id={slugify(text)}
              className="font-sans font-bold text-xl md:text-2xl text-[#0f1712] mt-10 mb-4 border-b border-black/10 pb-2 scroll-mt-24"
            >
              {text}
            </h2>
          </div>
          <div className="hidden lg:block lg:pl-6 xl:lg:pl-8" />
        </div>
      );
    }

    // Unordered List
    if (t.startsWith("- ")) {
      const listItems = t.split("\n");
      const listCitations = getCitationsInText(t);

      return (
        <div
          key={i}
          className="lg:grid lg:grid-cols-[1fr_240px] xl:grid-cols-[1fr_260px] items-start mb-5"
        >
          <div className="lg:pr-6 xl:lg:pr-8">
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-[#2d3a30] leading-relaxed">
              {listItems.map((li, j) => (
                <li key={j}>{renderFormattedText(li.replace(/^-\s*/, ""), references)}</li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block lg:pl-6 xl:lg:pl-8">
            {renderSidenotes(listCitations)}
          </div>
        </div>
      );
    }

    // Ordered List
    if (t.match(/^[0-9]+\.\s/)) {
      const listItems = t.split("\n");
      const listCitations = getCitationsInText(t);

      return (
        <div
          key={i}
          className="lg:grid lg:grid-cols-[1fr_240px] xl:grid-cols-[1fr_260px] items-start mb-5"
        >
          <div className="lg:pr-6 xl:lg:pr-8">
            <ol className="list-decimal pl-5 space-y-3 text-sm text-[#2d3a30] leading-relaxed">
              {listItems.map((li, j) => (
                <li key={j} className="pl-1">
                  {renderFormattedText(li.replace(/^[0-9]+\.\s*/, ""), references)}
                </li>
              ))}
            </ol>
          </div>

          <div className="hidden lg:block lg:pl-6 xl:lg:pl-8">
            {renderSidenotes(listCitations)}
          </div>
        </div>
      );
    }

    // Paragraph
    const citations = getCitationsInText(t);

    return (
      <div
        key={i}
        className="lg:grid lg:grid-cols-[1fr_240px] xl:grid-cols-[1fr_260px] items-start mb-5"
      >
        <div className="lg:pr-6 xl:lg:pr-8">
          <p className="text-sm md:text-base text-[#2d3a30] leading-[1.8] font-sans">
            {renderFormattedText(t, references)}
          </p>
        </div>

        <div className="hidden lg:block lg:pl-6 xl:lg:pl-8">
          {renderSidenotes(citations)}
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="page-enter flex-1 bg-[#fbfcf8] w-full min-h-screen">
        {/* Reading progress bar */}
        <ReadingProgress />

        <div className="w-full px-3 md:px-14 py-6 md:py-12 text-[#0f1712]">
          {/* Back link */}
          <Link
            href="/blog"
            className="text-xs font-mono uppercase tracking-wider text-[#526054] hover:text-[#1d6ea8] transition-colors mb-6 md:mb-8 inline-block"
          >
            ← Back to Publications
          </Link>

          {/* Header */}
          <header className="mb-8 md:mb-12 border-b border-black/10 pb-8 max-w-4xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#1d6ea8] uppercase tracking-wider mb-4 flex-wrap">
              <span>{post.tag}</span>
              <span>·</span>
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readMin} min read</span>
            </div>

            <h1 className="font-serif italic text-3xl md:text-5xl text-[#0f1712] leading-tight tracking-tight mb-4">
              {post.title}
            </h1>

            <p className="text-xs font-mono text-[#526054]">
              Authors: {post.author}
            </p>
          </header>

          {/* ── Main Layout: TOC + (Content & Parallel References Column) ── */}
          <div className="lg:grid lg:grid-cols-[160px_1fr] xl:grid-cols-[170px_1fr] lg:gap-8 xl:gap-10 items-start">
            {/* Column 1: Table of Contents */}
            <TableOfContents headings={headings} />

            {/* Column 2: Article content + Parallel References */}
            <article id="article-content" className="min-w-0 relative">
              {/* Single Continuous Solid Straight Vertical Line */}
              <div
                className="hidden lg:block absolute top-0 bottom-0 right-[240px] xl:right-[260px] w-px bg-black/10 pointer-events-none"
                aria-hidden="true"
              />

              <div className="space-y-0">
                {renderedRows}
              </div>

              {/* Mobile: references below content */}
              {references.length > 0 && (
                <div className="lg:hidden mt-16 pt-8 border-t border-black/10">
                  <h2 className="font-sans font-bold text-lg text-[#0f1712] mb-6">
                    References
                  </h2>
                  <ol className="space-y-3">
                    {references.map((ref) => (
                      <li key={ref.id} className="flex gap-2">
                        <span className="shrink-0 flex items-center justify-center w-[18px] h-[18px] rounded-full bg-[#1d6ea8]/10 text-[#1d6ea8] text-[9px] font-mono font-bold mt-[2px]">
                          {ref.id}
                        </span>
                        <div className="text-xs leading-relaxed text-[#526054] break-words">
                          {ref.url ? (
                            <a
                              href={ref.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-[#1d6ea8] transition-colors underline underline-offset-2"
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
              )}
            </article>
          </div>
        </div>
      </div>

      <ScrollToTop />
    </>
  );
}
