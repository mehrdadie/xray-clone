'use client';

import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';

export default function BlogPage() {
  return (
    <PageShell
      title="Blog"
      subtitle="Practical notes on data, automation, and AI for UK businesses that want more than theory."
    >
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {[
            { tag: 'Integration', title: 'How to Connect Salesforce With Your Marketing Tools (Without a Developer)' },
            { tag: 'Automation', title: 'Why Your CRM and Payment System Should Talk to Each Other' },
            { tag: 'AI', title: 'Building AI Dashboards for Non-Technical Teams' },
          ].map((post, i) => (
            <Reveal key={post.title} delay={i * 0.08}>
              <div className="group rounded-2xl bg-white p-3 sm:p-4 shadow-sm transition hover:shadow-md">
                <div className="aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                  <span className="text-sm font-medium text-[var(--foreground)]/40">{post.tag}</span>
                </div>
                <div className="mt-3 sm:mt-4">
                  <span className="inline-block rounded-full border border-black/10 px-3 py-1 text-xs font-medium">{post.tag}</span>
                </div>
                <h3 className="mt-2 sm:mt-3 text-base sm:text-lg font-semibold leading-snug">{post.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
