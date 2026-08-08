'use client';

import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';

export default function ContentCreationPage() {
  return (
    <PageShell
      title="Content & Dashboards"
      subtitle="Professional dashboards, reports, and client-facing assets — built from your connected data, without becoming another thing you have to manage."
    >
      <section className="py-6 md:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {[
            { title: 'Live Dashboards', body: 'Real-time dashboards pulling from Salesforce, Chargebee, and Google Sheets — all in one view.' },
            { title: 'Automated Reports', body: 'Scheduled reports sent to your team automatically. No more manual spreadsheet exports.' },
            { title: 'Client-Facing Assets', body: 'PDFs, frameworks, and templates that make your expertise easy to buy.' },
            { title: 'Internal Comms', body: 'Newsletters, updates, and documentation people actually read.' },
          ].map((item) => (
            <Reveal key={item.title}>
              <div className="group rounded-3xl bg-white/80 backdrop-blur border border-black/5 p-5 sm:p-6 md:p-8 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5">
                <h3 className="text-lg sm:text-xl font-semibold group-hover:text-[var(--accent)] transition-colors">{item.title}</h3>
                <p className="mt-2 sm:mt-3 text-sm sm:text-base text-[var(--foreground)]/70 leading-relaxed">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
