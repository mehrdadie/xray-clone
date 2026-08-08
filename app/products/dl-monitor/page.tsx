'use client';

import PageShell from '../../components/PageShell';
import Reveal from '../../components/Reveal';

export default function DLMonitorPage() {
  return (
    <PageShell
      title="DL Monitor"
      subtitle="Monitor your automations and integrations. Get alerts when something breaks — before it costs you revenue."
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
