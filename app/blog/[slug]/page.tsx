// FILE: app/blog/[slug]/page.tsx
// PURPOSE: Server component — handles generateStaticParams, delegates render to client

import { notFound } from "next/navigation";
import { posts, getPostBySlug } from "@/lib/posts";
import ArticleContent from "./ArticleContent";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();
  return <ArticleContent post={post} />;
}
