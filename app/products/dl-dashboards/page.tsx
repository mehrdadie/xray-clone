'use client';

import PageShell from '../../components/PageShell';
import Reveal from '../../components/Reveal';

export default function DLDashboardsPage() {
  return (
    <PageShell
      title="DL Dashboards"
      subtitle="Real-time dashboards pulling from Salesforce, Chargebee, Google Sheets, and more — all in one place. See revenue, bookings, and performance at a glance."
    >
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <Reveal>
            <a href="/contact" className="inline-flex rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-white hover:bg-[var(--foreground)]/90">Request a Demo</a>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
