'use client';

import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';

export default function AboutUsPage() {
  return (
    <PageShell
      title="About Us"
      subtitle="We're a small team of operators and engineers obsessed with one thing: making your workflows actually work."
    >
      <section className="py-10 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          <Reveal>
            <div>
              <h3 className="text-xl font-semibold">What we do</h3>
              <p className="mt-3 text-[var(--foreground)]/80 leading-relaxed">
                XRAY helps teams remove broken manual work from their business. We implement AI and automation inside the tools you already use, with a focus on durable change rather than flashy demos.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <h3 className="text-xl font-semibold">How we show up</h3>
              <p className="mt-3 text-[var(--foreground)]/80 leading-relaxed">
                We prefer long partnerships over one-off fixes. Most of our clients work with us across multiple departments because the improvements compound over time.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-10">Our Process Pillars</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'People First:', desc: 'Tools should serve people, not the other way around.' },
              { title: 'Results Oriented:', desc: 'We measure our success by creating meaningful outcomes.' },
              { title: 'Simplicity by Design:', desc: 'We cut through complexity to create elegant, straightforward processes.' },
              { title: 'Continuous Improvement:', desc: 'As your needs evolve, so do our solutions.' },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="rounded-2xl bg-white p-5 md:p-6 shadow-sm">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-[var(--foreground)]/80 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
