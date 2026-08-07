'use client';

import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';

export default function MonthlyPage() {
  return (
    <PageShell
      title="DataLift Monthly"
      subtitle="Full-service system integration, automation, and dashboard building for UK businesses ready to connect everything."
    >
      <section className="py-8 md:py-12 bg-white/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <Reveal>
            <div>
              <h2 className="text-lg sm:text-xl font-semibold">How We Work</h2>
              <ul className="mt-4 space-y-2.5 sm:space-y-3 text-sm text-[var(--foreground)]/80">
                <li><strong>Quick Wins:</strong> Immediate value through fast integrations and automations.</li>
                <li><strong>Audit and Architect:</strong> Deep discovery of your systems and data flows.</li>
                <li><strong>Build & Optimize:</strong> Iterative builds with measurable results.</li>
                <li><strong>Enablement & Handoff:</strong> Training and documentation for lasting impact.</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <h2 className="text-lg sm:text-xl font-semibold">What we build</h2>
              <ul className="mt-4 space-y-2 text-sm text-[var(--foreground)]/80">
                <li>System integration design</li>
                <li>Data architecture</li>
                <li>Cross-platform automation (n8n, Zapier)</li>
                <li>Custom dashboards</li>
                <li>AI tool integration</li>
                <li>Team training and enablement</li>
                <li>Ongoing maintenance and support</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-8 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <Reveal>
            <div className="rounded-2xl bg-white p-4 sm:p-5 md:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg font-semibold">System Integration Sprint</h3>
              <div className="mt-2 text-2xl sm:text-3xl font-bold">£4,000<span className="text-sm font-normal text-[var(--foreground)]/70">/mo</span></div>
              <p className="mt-2 text-sm text-[var(--foreground)]/70 leading-relaxed">Our signature package to start with. Connect your key systems and build your first dashboards.</p>
              <a href="#" className="mt-4 inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-4 py-3 sm:py-2 text-xs sm:text-sm font-medium text-white hover:bg-[var(--foreground)]/90">Book a Free Consultation</a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl bg-white p-4 sm:p-5 md:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg font-semibold">Full Platform Transformation</h3>
              <div className="mt-2 text-xl sm:text-3xl font-bold">Pricing Disclosed after Assessment</div>
              <p className="mt-2 text-sm text-[var(--foreground)]/70 leading-relaxed">Connect everything, automate workflows, build AI tools, and train your team.</p>
              <a href="#" className="mt-4 inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-4 py-3 sm:py-2 text-xs sm:text-sm font-medium text-white hover:bg-[var(--foreground)]/90">Book a Free Consultation</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-8 md:py-16 bg-white/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold">Ready to lift your business?</h2>
            <a href="#" className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-white hover:bg-[var(--foreground)]/90">Book a Free Consultation</a>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
