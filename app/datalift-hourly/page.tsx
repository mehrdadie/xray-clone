'use client';

import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';

export default function HourlyPage() {
  return (
    <PageShell
      title="DataLift Hourly"
      subtitle="Fast, hands-on support in real time. Flexible commitments. Owned solutions. Expert help connecting systems, fixing automations, or building dashboards."
    >
      <section className="py-8 md:py-12 bg-white/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <Reveal>
            <div>
              <h2 className="text-lg sm:text-xl font-semibold">Straightforward Pricing</h2>
              <p className="mt-2 text-sm sm:text-base text-[var(--foreground)]/80">Flat £150/hour</p>
              <ul className="mt-4 space-y-2 text-sm text-[var(--foreground)]/80">
                <li>Work side-by-side with a data and automation expert</li>
                <li>All sessions logged with notes and outcomes</li>
                <li>Flexible commitments in 4, 10 or 20 hour packages booked at your convenience</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl bg-white p-4 sm:p-5 md:p-6 shadow-sm">
              <h3 className="font-semibold">Our Packages</h3>
              <div className="mt-4 space-y-3 sm:space-y-4">
                <div className="rounded-xl border border-black/5 p-3 sm:p-4">
                  <div className="text-sm font-medium">4 Hours</div>
                  <div className="text-xl sm:text-2xl font-bold">£600</div>
                  <p className="mt-2 text-sm text-[var(--foreground)]/70 leading-relaxed">A focused session to plan, build, and ship one integration or dashboard.</p>
                </div>
                <div className="rounded-xl border border-black/5 p-3 sm:p-4">
                  <div className="text-sm font-medium">10 Hours</div>
                  <div className="text-xl sm:text-2xl font-bold">£1,500</div>
                  <p className="mt-2 text-sm text-[var(--foreground)]/70 leading-relaxed">Our signature package to start with. Make rapid progress through consistent ongoing collaboration.</p>
                </div>
                <div className="rounded-xl border border-black/5 p-3 sm:p-4">
                  <div className="text-sm font-medium">20 Hours</div>
                  <div className="text-xl sm:text-2xl font-bold">£3,000</div>
                  <p className="mt-2 text-sm text-[var(--foreground)]/70 leading-relaxed">For complex projects where multiple tools, teams, or data sources need to work together seamlessly.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-8 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold">Ready to lift your business?</h2>
            <a href="#" className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-6 py-3 sm:py-3 text-sm font-medium text-white hover:bg-[var(--foreground)]/90">
              Book a Free Consultation
            </a>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
