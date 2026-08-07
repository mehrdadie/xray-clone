'use client';

import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';

export default function BlogPage() {
  return (
    <PageShell
      title="Blog"
      subtitle="Practical notes on AI, automation, and modern operations for teams that want more than theory."
    >
      <section className="py-10 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { tag: 'AI', title: 'Creating Team-wide Standards with Claude Skills', image: '/assets/blog-1.png' },
            { tag: 'Tutorial', title: 'Google Sheets To Airtable, Minus The Data Entry', image: '/assets/blog-2.png' },
            { tag: 'AI', title: 'The Difference Between Using AI and Building With AI', image: '/assets/blog-3.png' },
          ].map((post, i) => (
            <Reveal key={post.title} delay={i * 0.08}>
              <div className="group rounded-2xl bg-white p-4 shadow-sm transition hover:shadow-md">
                <div className="aspect-video w-full overflow-hidden rounded-xl bg-[var(--foreground)]/5">
                  <div className="h-full w-full object-cover transition group-hover:scale-105 bg-[var(--foreground)]/5" />
                </div>
                <div className="mt-4">
                  <span className="inline-block rounded-full border border-black/10 px-3 py-1 text-xs font-medium">{post.tag}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-snug">{post.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
