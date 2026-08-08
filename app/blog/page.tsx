'use client';

import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';

export default function BlogPage() {
  return (
    <PageShell
      title="Blog"
      subtitle="Practical notes on data, automation, and AI for UK businesses that want more than theory."
    >
      <section className="py-6 md:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {[
            { tag: 'Integration', title: 'How to Connect Salesforce With Your Marketing Tools (Without a Developer)' },
            { tag: 'Automation', title: 'Why Your CRM and Payment System Should Talk to Each Other' },
            { tag: 'AI', title: 'Building AI Dashboards for Non-Technical Teams' },
          ].map((post, i) => (
            <Reveal key={post.title} delay={i * 0.08}>
              <article className="group rounded-3xl bg-white/80 backdrop-blur border border-black/5 overflow-hidden shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5">
                <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="text-sm font-medium text-[var(--foreground)]/40">{post.tag}</span>
                  </div>
                </div>
                <div className="p-5 md:p-6">
                  <span className="inline-block rounded-full border border-black/10 px-3 py-1 text-xs font-medium mb-3">{post.tag}</span>
                  <h3 className="text-base md:text-lg font-semibold leading-snug">{post.title}</h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
