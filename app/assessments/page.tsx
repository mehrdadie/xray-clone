'use client';

import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';

export default function AssessmentsPage() {
  return (
    <PageShell
      title="System Assessment"
      subtitle="See where your systems are disconnected, where automation can help, and what to fix first — in about fifteen minutes."
    >
      <section className="py-6 md:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {[
            { title: 'Integration Gaps', body: 'Where disconnected CRM, marketing, and payment tools are creating rework, delays, and manual exports.' },
            { title: 'Automation Readiness', body: 'How much of your manual work could be automated with tools you already own or free tools like n8n.' },
            { title: 'AI Fit', body: 'Which workflows would benefit from AI versus simple automation, and how to tell the difference.' },
          ].map((item) => (
            <Reveal key={item.title}>
              <div className="flex flex-col rounded-3xl bg-white/80 backdrop-blur border border-black/5 p-5 sm:p-6 md:p-8 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5">
                <h3 className="text-lg sm:text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 sm:mt-3 text-sm sm:text-base text-[var(--foreground)]/70 leading-relaxed">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
