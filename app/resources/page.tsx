'use client';

import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';
import Link from 'next/link';

export default function ResourcesPage() {
  return (
    <PageShell
      title="Resources"
      subtitle="Guides, case studies, and assessments to help your team understand what good data and automation looks like."
    >
      <section className="py-6 md:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {[
            {
              title: 'Case Studies',
              href: '/case-studies',
              body: 'Real results from UK businesses we\'ve helped.',
              cta: 'View Case Studies',
            },
            {
              title: 'Blog',
              href: '/blog',
              body: 'Practical writing on data, automation, and AI for non-technical teams.',
              cta: 'Read Blog',
            },
            {
              title: 'Assessments',
              href: '/assessments',
              body: 'See where your systems are disconnected and what to fix first.',
              cta: 'Take Assessment',
            },
          ].map((item) => (
            <Reveal key={item.title}>
              <Link
                href={item.href}
                className="group block rounded-3xl bg-white/80 backdrop-blur border border-black/5 p-5 sm:p-6 md:p-8 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5"
              >
                <h3 className="text-xl sm:text-2xl font-semibold group-hover:text-[var(--accent)] transition-colors">{item.title}</h3>
                <p className="mt-2 sm:mt-3 text-sm sm:text-base text-[var(--foreground)]/70 leading-relaxed">{item.body}</p>
                <span className="mt-4 sm:mt-6 inline-flex rounded-full border border-[var(--foreground)]/15 bg-white/60 px-5 py-2.5 sm:py-2 text-sm font-medium transition hover:bg-white/80 shadow-sm">
                  {item.cta}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
