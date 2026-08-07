'use client';

import PageShell from '../../components/PageShell';
import Reveal from '../../components/Reveal';

export default function XRDebriefPage() {
  return (
    <PageShell
      title="XR DEBRIEF"
      subtitle="Turn long meetings into useful records. Get summaries, action items, and follow-ups without manually writing them up afterward."
    >
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <Reveal>
            <a href="https://debrief.xray.tech/" className="inline-flex rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-white hover:bg-[var(--foreground)]/90">Open XR DEBRIEF</a>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
