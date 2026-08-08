'use client';

import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';
import Link from 'next/link';

export default function HourlyPage() {
  return (
    <PageShell
      title="DataLift Hourly"
      subtitle="Fast, hands-on support in real time. Flexible commitments. Owned solutions. Expert help connecting systems, fixing automations, or building dashboards."
    >
      <section className="py-6 md:py-10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent -z-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          <Reveal>
            <div className="rounded-3xl bg-white/80 backdrop-blur border border-black/5 p-5 sm:p-6 md:p-8 shadow-card">
              <h2 className="text-xl sm:text-2xl font-semibold">Straightforward Pricing</h2>
              <p className="mt-2 text-sm sm:text-base text-[var(--foreground)]/70">Flat £150/hour</p>
              <ul className="mt-4 space-y-2.5 text-sm text-[var(--foreground)]/70">
                <li className="flex gap-2"><span className="mt-1.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />Work side-by-side with a data and automation expert</li>
                <li className="flex gap-2"><span className="mt-1.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />All sessions logged with notes and outcomes</li>
                <li className="flex gap-2"><span className="mt-1.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />Flexible commitments in 4, 10 or 20 hour packages booked at your convenience</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-white/80 backdrop-blur border border-black/5 p-5 sm:p-6 md:p-8 shadow-card">
              <h3 className="text-base sm:text-lg font-semibold">Our Packages</h3>
              <div className="mt-4 space-y-3 sm:space-y-4">
                {[
                  { name: '4 Hours', price: '£600', desc: 'A focused session to plan, build, and ship one integration or dashboard.' },
                  { name: '10 Hours', price: '£1,500', desc: 'Our signature package to start with. Make rapid progress through consistent ongoing collaboration.' },
                  { name: '20 Hours', price: '£3,000', desc: 'For complex projects where multiple tools, teams, or data sources need to work together seamlessly.' },
                ].map((pkg) => (
                  <div key={pkg.name} className="rounded-2xl border border-black/5 p-3 sm:p-4 transition hover:shadow-card-hover">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">{pkg.name}</div>
                      <div className="text-xl sm:text-2xl font-bold">{pkg.price}</div>
                    </div>
                    <p className="mt-2 text-sm text-[var(--foreground)]/70 leading-relaxed">{pkg.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-8 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold">Ready to lift your business?</h2>
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium shadow-glow mt-6"
            >
              Book a Free Consultation
            </Link>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
