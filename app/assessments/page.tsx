'use client';

import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';
import Link from 'next/link';

export default function AssessmentsPage() {
  return (
    <PageShell
      title="System Assessment"
      subtitle="See where your systems are disconnected, where automation can help, and what to fix first — in about fifteen minutes."
    >
      <section className="py-6 md:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {[
            {
              title: 'Integration Gaps',
              body: 'We map every handoff between your CRM, marketing, payment, and spreadsheet tools. You will see exactly where data gets lost, duplicated, or delayed — and how much that is costing you in hours.',
              icon: '🔗',
            },
            {
              title: 'Automation Readiness',
              body: 'We identify the top 3-5 manual tasks that can be automated with tools you already own, or free options like n8n. Each one includes an estimated time saving.',
              icon: '⚙️',
            },
            {
              title: 'AI Fit',
              body: 'Not every problem needs AI. We separate “simple automation” from “AI actually helps” so you invest in the right solution first and avoid expensive mistakes.',
              icon: '🤖',
            },
          ].map((item) => (
            <Reveal key={item.title}>
              <div className="flex flex-col rounded-3xl bg-white/80 backdrop-blur border border-black/5 p-5 sm:p-6 md:p-8 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 sm:mt-3 text-sm sm:text-base text-[var(--foreground)]/70 leading-relaxed">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-8 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="rounded-3xl bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border border-blue-100/50 px-5 sm:px-6 md:px-12 py-6 sm:py-8 md:py-12 text-center">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight mb-2 md:mb-3">
                Want a clear picture of what to fix first?
              </h2>
              <p className="text-sm md:text-base text-[var(--foreground)]/70 max-w-2xl mx-auto mb-4 md:mb-6">
                Book a free 30-minute consultation. We will review your systems and show you exactly where automation can save time — no obligation, no jargon.
              </p>
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2 rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-medium shadow-glow"
              >
                Book a Free Consultation
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
