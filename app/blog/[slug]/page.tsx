import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "@/lib/posts";

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

function renderFormattedText(text: string) {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const label = match[1];
    const url = match[2];
    parts.push(
      <a
        key={match.index}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#8bb8d8] underline underline-offset-4 hover:text-white transition-colors"
      >
        {label} ↗
      </a>
    );
    lastIndex = linkRegex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts.length > 0 ? parts : text;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const blocks = post.body.split("\n\n").map((block, i) => {
    const t = block.trim();
    if (t.startsWith("### ")) {
      return (
        <h3 key={i} className="font-sans font-semibold text-base md:text-lg text-[#8bb8d8] mt-8 mb-3">
          {t.replace(/^###\s*/, "")}
        </h3>
      );
    }
    if (t.startsWith("## ")) {
      return (
        <h2 key={i} className="font-sans font-bold text-xl md:text-2xl text-[#f1f5ec] mt-12 mb-4 border-b border-white/10 pb-2">
          {t.replace(/^##\s*/, "")}
        </h2>
      );
    }
    if (t.startsWith("- ")) {
      return (
        <ul key={i} className="list-disc pl-5 my-4 space-y-2 text-sm md:text-base text-[#c4ccc0] leading-relaxed">
          {t.split("\n").map((li, j) => (
            <li key={j}>{renderFormattedText(li.replace(/^-\s*/, ""))}</li>
          ))}
        </ul>
      );
    }
    if (t.match(/^[0-9]+\.\s/)) {
      return (
        <ol key={i} className="list-decimal pl-5 my-4 space-y-3 text-sm text-[#c4ccc0] leading-relaxed">
          {t.split("\n").map((li, j) => (
            <li key={j} className="pl-1">
              {renderFormattedText(li.replace(/^[0-9]+\.\s*/, ""))}
            </li>
          ))}
        </ol>
      );
    }
    return (
      <p key={i} className="text-sm md:text-base text-[#c4ccc0] leading-[1.8] mb-5">
        {renderFormattedText(t)}
      </p>
    );
  });

  return (
    <div className="page-enter flex-1 bg-[#090c0a]">
      <article className="max-w-3xl mx-auto px-6 md:px-8 py-12 md:py-20 text-[#f1f5ec]">
        {/* Back link */}
        <Link
          href="/blog"
          className="text-xs font-mono uppercase tracking-wider text-[#aab3a7] hover:text-[#8bb8d8] transition-colors mb-10 inline-block"
        >
          ← Back to Publications
        </Link>

        {/* Header */}
        <header className="mb-12 border-b border-white/15 pb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-[#8bb8d8] uppercase tracking-wider mb-4">
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

        {/* Body */}
        <div className="space-y-2">
          {blocks}
        </div>
      </article>
    </div>
  );
}
