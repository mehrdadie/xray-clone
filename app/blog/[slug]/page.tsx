'use client';

import PageShell from '../../components/PageShell';
import Reveal from '../../components/Reveal';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { getPostBySlug, blogPosts } from '../../lib/posts';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const post = getPostBySlug(slug);
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prev = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const next = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  if (!post) {
    return (
      <PageShell title="Article not found" subtitle="The article you are looking for does not exist.">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Link href="/blog" className="inline-flex rounded-full border border-[var(--foreground)]/15 bg-white/60 backdrop-blur px-5 py-2.5 text-sm font-medium transition hover:bg-white/80 shadow-card">Back to Blog</Link>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell title={post.title} subtitle={post.desc}>
      <section className="py-6 md:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="rounded-3xl bg-white/80 backdrop-blur border border-black/5 overflow-hidden shadow-card">
            <div className="aspect-video w-full overflow-hidden relative bg-gradient-to-br from-blue-50 to-indigo-100">
              <Image src={post.image} alt={post.title} fill className="h-full w-full object-cover" priority />
            </div>
            <div className="p-5 sm:p-6 md:p-10">
              <span className="inline-block rounded-full border border-black/10 px-3 py-1 text-xs font-medium mb-3">{post.tag}</span>
              <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed text-[var(--foreground)]/80">
                {post.body.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="mb-4 last:mb-0">{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link href="/blog" className="inline-flex rounded-full border border-[var(--foreground)]/15 bg-white/60 backdrop-blur px-5 py-2.5 text-sm font-medium transition hover:bg-white/80 shadow-card">
              ← Back to Blog
            </Link>
            {prev && (
              <Link href={`/blog/${prev.slug}`} className="inline-flex rounded-full border border-[var(--foreground)]/15 bg-white/60 backdrop-blur px-5 py-2.5 text-sm font-medium transition hover:bg-white/80 shadow-card">
                ← {prev.title}
              </Link>
            )}
            {next && (
              <Link href={`/blog/${next.slug}`} className="inline-flex rounded-full border border-[var(--foreground)]/15 bg-white/60 backdrop-blur px-5 py-2.5 text-sm font-medium transition hover:bg-white/80 shadow-card">
                {next.title} →
              </Link>
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
