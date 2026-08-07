'use client';

import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';

export default function AssessmentsPage() {
  return (
    <PageShell
      title="Workflow Assessment"
      subtitle="See where your workflows break, where automations help, and what to fix first — in about fifteen minutes."
    >
      <section className="py-10 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Automation Readiness', body: 'How much of your work is already automatable with the tools you own.' },
            { title: 'Integration Gaps', body: 'Where disconnected tools are creating rework, delays, and manual exports.' },
            { title: 'AI Fit', body: 'Which workflows benefit from AI versus simple automation, and how to tell.' },
          ].map((item) => (
            <Reveal key={item.title}>
              <div className="rounded-2xl bg-white p-5 md:p-8 shadow-sm">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-[var(--foreground)]/80 leading-relaxed">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
