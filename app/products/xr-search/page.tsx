'use client';

import PageShell from '../../components/PageShell';
import Reveal from '../../components/Reveal';

export default function XRSearchPage() {
  return (
    <PageShell
      title="XR SEARCH"
      subtitle="Search across your connected tools and documents from one place, so context switching stops eating your day."
    >
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <Reveal>
            <a href="https://search.xray.tech/" className="inline-flex rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-white hover:bg-[var(--foreground)]/90">Open XR SEARCH</a>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
