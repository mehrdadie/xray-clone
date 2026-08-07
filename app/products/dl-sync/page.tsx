'use client';

import PageShell from '../../components/PageShell';
import Reveal from '../../components/Reveal';

export default function DLSyncPage() {
  return (
    <PageShell
      title="DL Sync"
      subtitle="Automatic data sync between your CRM, marketing, and payment systems. No more copy-paste, no more spreadsheet errors."
    >
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <Reveal>
            <a href="#" className="inline-flex rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-white hover:bg-[var(--foreground)]/90">Request a Demo</a>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
