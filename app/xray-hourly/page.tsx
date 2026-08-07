'use client';

import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';

export default function HourlyPage() {
  return (
    <PageShell
      title="XRAY Hourly"
      subtitle="Fast, side-by-side support in real time. Privacy first. Bite-size commitments. Owned solutions. Fast matching. Self-paced project management."
    >
      <section className="py-12 bg-white/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Reveal>
            <div>
              <h2 className="text-xl font-semibold">Straightforward Pricing</h2>
              <p className="mt-2 text-[var(--foreground)]/80">Flat $250/hour</p>
              <ul className="mt-4 space-y-2 text-sm text-[var(--foreground)]/80">
                <li>Learn by doing alongside a vetted and trained low-code expert</li>
                <li>All calls recorded and integrated with Debrief for quick analysis</li>
                <li>Flexible commitments in 4, 10 or 20 hour packages booked at your convenience</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl bg-white p-5 md:p-6 shadow-sm">
              <h3 className="font-semibold">Our Packages</h3>
              <div className="mt-4 space-y-4">
                <div className="rounded-xl border border-black/5 p-4">
                  <div className="text-sm font-medium">4 Hours</div>
                  <div className="text-2xl font-bold">$1,000</div>
                  <p className="mt-2 text-sm text-[var(--foreground)]/70">A focused engagement to plan, build, and ship one high-impact automation.</p>
                </div>
                <div className="rounded-xl border border-black/5 p-4">
                  <div className="text-sm font-medium">10 Hours</div>
                  <div className="text-2xl font-bold">$2,500</div>
                  <p className="mt-2 text-sm text-[var(--foreground)]/70">Our signature package to start with. Make rapid progress through consistent ongoing collaboration.</p>
                </div>
                <div className="rounded-xl border border-black/5 p-4">
                  <div className="text-sm font-medium">20 Hours</div>
                  <div className="text-2xl font-bold">$5,000</div>
                  <p className="mt-2 text-sm text-[var(--foreground)]/70">For complex projects where multiple tools, teams, or data sources need to work together seamlessly.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="text-2xl md:text-4xl font-bold">Ready to transform your everyday?</h2>
            <a href="#" className="mt-6 inline-flex rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-white hover:bg-[var(--foreground)]/90">Book 15 Minutes Free</a>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
