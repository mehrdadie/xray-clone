'use client';

import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';

export default function WorkshopsPage() {
  return (
    <PageShell
      title="Workshops"
      subtitle="In-person and remote workshops designed to teach your team how to work in the future — with practical education, not theory."
    >
      <section className="py-12 bg-white/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {['Practical Education', 'Emerging Tool Deployment', 'Safety Standards', 'Operational Clarity', 'Lasting ROI'].map((item) => (
            <Reveal key={item}>
              <div className="rounded-2xl bg-white p-5 md:p-6 shadow-sm">
                <h3 className="text-lg font-semibold">{item}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-10 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Reveal>
            <div>
              <h2 className="text-2xl font-semibold">Intensive workshops for off-sites and up-skilling</h2>
              <p className="mt-2 text-[var(--foreground)]/80">1 Day • 1 Focus = Enable your team to work with AI & automation everyday.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl bg-white p-5 md:p-6 shadow-sm">
              <h3 className="font-semibold">Our Packages</h3>
              <div className="mt-4 space-y-4">
                <div className="rounded-xl border border-black/5 p-4">
                  <div className="text-sm font-medium">1 Day • Remote</div>
                  <div className="text-2xl font-bold">$3,500</div>
                  <p className="mt-2 text-sm text-[var(--foreground)]/70">6-8 hours of intensive learning, setup, configuration, and AI enablement through a hands-on remote webinar.</p>
                </div>
                <div className="rounded-xl border border-black/5 p-4">
                  <div className="text-sm font-medium">1 Day • In-person</div>
                  <div className="text-2xl font-bold">$10,500</div>
                  <p className="mt-2 text-sm text-[var(--foreground)]/70">Similar outcomes as the remote workshop, but all the magic of an in-person event. Travel & logistics fees included.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white/40">
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
