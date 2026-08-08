'use client';

import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';
import Link from 'next/link';

export default function MonthlyPage() {
  return (
    <PageShell
      title="DataLift Monthly"
      subtitle="Full-service system integration, automation, and dashboard building for UK businesses ready to connect everything."
    >
      <section className="py-6 md:py-10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent -z-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          <Reveal>
            <div className="rounded-3xl bg-white/80 backdrop-blur border border-black/5 p-5 sm:p-6 md:p-8 shadow-card">
              <h2 className="text-xl sm:text-2xl font-semibold">How We Work</h2>
              <ul className="mt-4 space-y-2.5 sm:space-y-3 text-sm text-[var(--foreground)]/70">
                <li className="flex gap-2"><span className="mt-1.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" /><span><strong>Quick Wins:</strong> Immediate value through fast integrations and automations.</span></li>
                <li className="flex gap-2"><span className="mt-1.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" /><span><strong>Audit and Architect:</strong> Deep discovery of your systems and data flows.</span></li>
                <li className="flex gap-2"><span className="mt-1.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" /><span><strong>Build & Optimize:</strong> Iterative builds with measurable results.</span></li>
                <li className="flex gap-2"><span className="mt-1.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" /><span><strong>Enablement & Handoff:</strong> Training and documentation for lasting impact.</span></li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-white/80 backdrop-blur border border-black/5 p-5 sm:p-6 md:p-8 shadow-card">
              <h2 className="text-xl sm:text-2xl font-semibold">What we build</h2>
              <ul className="mt-4 space-y-2 text-sm text-[var(--foreground)]/70">
                <li className="flex gap-2"><span className="mt-1.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />System integration design</li>
                <li className="flex gap-2"><span className="mt-1.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />Data architecture</li>
                <li className="flex gap-2"><span className="mt-1.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />Cross-platform automation</li>
                <li className="flex gap-2"><span className="mt-1.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />Custom dashboards</li>
                <li className="flex gap-2"><span className="mt-1.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />AI tool integration</li>
                <li className="flex gap-2"><span className="mt-1.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />Team training and enablement</li>
                <li className="flex gap-2"><span className="mt-1.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />Ongoing maintenance and support</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-8 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          <Reveal>
            <div className="relative rounded-3xl bg-white/80 backdrop-blur border border-blue-200 p-5 sm:p-6 md:p-8 shadow-card">
              <div className="absolute -top-3 left-6 px-3 py-1 rounded-full animated-gradient text-white text-xs font-semibold shadow-md">
                Recommended
              </div>
              <h3 className="text-base sm:text-lg font-semibold">System Integration Sprint</h3>
              <div className="mt-2 text-2xl sm:text-3xl font-bold">£4,000<span className="text-sm font-normal text-[var(--foreground)]/70">/mo</span></div>
              <p className="mt-2 text-sm text-[var(--foreground)]/70 leading-relaxed">Our signature package to start with. Connect your key systems and build your first dashboards.</p>
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center rounded-full px-4 py-3 sm:py-2 text-xs sm:text-sm font-medium shadow-glow mt-4">
                Book a Free Consultation
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-white/80 backdrop-blur border border-black/5 p-5 sm:p-6 md:p-8 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5">
              <h3 className="text-base sm:text-lg font-semibold">Full Platform Transformation</h3>
              <div className="mt-2 text-xl sm:text-3xl font-bold">Pricing Disclosed after Assessment</div>
              <p className="mt-2 text-sm text-[var(--foreground)]/70 leading-relaxed">Connect everything, automate workflows, build AI tools, and train your team.</p>
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center rounded-full px-4 py-3 sm:py-2 text-xs sm:text-sm font-medium shadow-sm mt-4">
                Book a Free Consultation
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-8 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold">Ready to lift your business?</h2>
            <Link href="/contact" className="btn-primary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium shadow-glow mt-6">
              Book a Free Consultation
            </Link>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
