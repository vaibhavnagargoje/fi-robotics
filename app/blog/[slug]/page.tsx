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
    description: `${post.title} — Intelligence Factory Blog`,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const blocks = post.body.split("\n\n").map((block, i) => {
    const t = block.trim();
    if (t.startsWith("## ")) {
      return (
        <h2 key={i} className="font-sans font-semibold text-lg text-[#f1f5ec] mt-10 mb-3">
          {t.replace(/^##\s*/, "")}
        </h2>
      );
    }
    if (t.startsWith("- ")) {
      return (
        <ul key={i} className="list-disc pl-5 my-3 space-y-1.5 text-sm text-[#c4ccc0] leading-relaxed">
          {t.split("\n").map((li, j) => (
            <li key={j}>{li.replace(/^-\s*/, "")}</li>
          ))}
        </ul>
      );
    }
    return (
      <p key={i} className="text-[15px] text-[#c4ccc0] leading-[1.75] mb-4">
        {t}
      </p>
    );
  });

  return (
    <article className="page-enter max-w-2xl mx-auto px-6 md:px-8 py-12 md:py-20 text-[#f1f5ec]">
      {/* Back link */}
      <Link
        href="/blog"
        className="text-xs text-[#aab3a7] hover:text-[#d6ff72] transition-colors mb-10 inline-block"
      >
        ← Blog
      </Link>

      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center gap-2 text-xs text-[#aab3a7] mb-4">
          <span>{post.tag}</span>
          <span>·</span>
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readMin} min read</span>
        </div>

        <h1 className="font-sans font-bold text-2xl md:text-3xl text-[#f1f5ec] leading-tight tracking-tight mb-3">
          {post.title}
        </h1>

        <p className="text-xs text-[#aab3a7]">
          By {post.author}
        </p>
      </header>

      {/* Body */}
      <div className="border-t border-white/15 pt-8">
        {blocks}
      </div>
    </article>
  );
}
