'use client';

import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';

export default function MonthlyPage() {
  return (
    <PageShell
      title="XRAY Monthly"
      subtitle="Full-service workflow transformation for teams ready for the future of work."
    >
      <section className="py-12 bg-white/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Reveal>
            <div>
              <h2 className="text-xl font-semibold">Our Process Pillars</h2>
              <ul className="mt-4 space-y-3 text-sm text-[var(--foreground)]/80">
                <li><strong>Quick Wins:</strong> Immediate value through fast implementation.</li>
                <li><strong>Audit and Architect:</strong> Deep discovery and blueprinting.</li>
                <li><strong>Prototype & Optimize:</strong> Iterative builds with measurable results.</li>
                <li><strong>Enablement & Handoff:</strong> Training and documentation for lasting impact.</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <h2 className="text-xl font-semibold">Our process to build your systems</h2>
              <ul className="mt-4 space-y-2 text-sm text-[var(--foreground)]/80">
                <li>Workflow design</li>
                <li>Schema Architecture</li>
                <li>Cross-Platform Orchestration</li>
                <li>Custom Automation Solutions</li>
                <li>Generative AI integration</li>
                <li>Education and training</li>
                <li>Maintenance and support</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Reveal>
            <div className="rounded-2xl bg-white p-5 md:p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Workflow Solution Design Sprint</h3>
              <div className="mt-2 text-3xl font-bold">$15,000</div>
              <p className="mt-2 text-sm text-[var(--foreground)]/70">Our Signature Package to start with. Chip away at it through consistent ongoing collaboration.</p>
              <a href="#" className="mt-4 inline-flex rounded-full bg-[var(--foreground)] px-4 py-2 text-xs font-medium text-white hover:bg-[var(--foreground)]/90">Talk With Us</a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl bg-white p-5 md:p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Workflow Transformation</h3>
              <div className="mt-2 text-3xl font-bold">Pricing Disclosed after Assessment</div>
              <p className="mt-2 text-sm text-[var(--foreground)]/70">Dramatically accelerate the way you work with automation and AI.</p>
              <a href="#" className="mt-4 inline-flex rounded-full bg-[var(--foreground)] px-4 py-2 text-xs font-medium text-white hover:bg-[var(--foreground)]/90">Talk With Us</a>
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
