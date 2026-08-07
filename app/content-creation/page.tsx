'use client';

import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';

export default function ContentCreationPage() {
  return (
    <PageShell
      title="Content Creation"
      subtitle="Professional content that communicates your value — without becoming another thing you have to manage."
    >
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: 'Messaging & Positioning', body: 'Clear narratives for websites, pitches, and client conversations.' },
            { title: 'Operations Playbooks', body: 'Repeatable guides your team can follow without constant supervision.' },
            { title: 'Client-Facing Assets', body: 'PDFs, frameworks, and templates that make your expertise easy to buy.' },
            { title: 'Internal Comms', body: 'Newsletters, updates, and documentation people actually read.' },
          ].map((item) => (
            <Reveal key={item.title}>
              <div className="rounded-2xl bg-white p-8 shadow-sm">
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
