'use client';

import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';

export default function ResourcesPage() {
  return (
    <PageShell
      title="Resources"
      subtitle="Guides, frameworks, and client stories that help your team understand what good automation actually looks like."
    >
      <section className="py-10 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Case Studies',
              href: '/case-studies',
              body: 'Real results from businesses we\'ve transformed.',
              cta: 'View Case Studies',
            },
            {
              title: 'Blog',
              href: '/blog',
              body: 'Practical writing on AI, automation, and modern operations.',
              cta: 'Read Blog',
            },
            {
              title: 'Assessments',
              href: '/assessments',
              body: 'Measure your current workflow health and see what to fix first.',
              cta: 'Take Assessment',
            },
          ].map((item) => (
            <Reveal key={item.title}>
              <a href={item.href} className="block rounded-2xl bg-white p-5 md:p-8 shadow-sm transition hover:shadow-md">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-[var(--foreground)]/80 leading-relaxed">{item.body}</p>
                <span className="mt-6 inline-flex rounded-full border border-[var(--foreground)] px-5 py-2 text-sm font-medium hover:bg-[var(--foreground)]/5">
                  {item.cta}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
