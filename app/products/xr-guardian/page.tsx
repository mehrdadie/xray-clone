'use client';

import PageShell from '../../components/PageShell';
import Reveal from '../../components/Reveal';

export default function XRGuardianPage() {
  return (
    <PageShell
      title="XR GUARDIAN"
      subtitle="Monitor automations and integrations across your stack so failures are visible before they become incidents."
    >
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <Reveal>
            <a href="https://guardian.xray.tech/" className="inline-flex rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-white hover:bg-[var(--foreground)]/90">Open XR GUARDIAN</a>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
