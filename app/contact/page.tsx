'use client';

import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';

export default function ContactPage() {
  return (
    <PageShell
      title="Book a Free Consultation"
      subtitle="Tell us about your systems and what you want to fix. We’ll review your setup and show you exactly where automation can save time."
    >
      <section className="py-6 md:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          <Reveal>
            <form className="rounded-3xl bg-white/80 backdrop-blur border border-black/5 p-5 sm:p-6 md:p-8 shadow-card space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input type="text" className="w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input type="email" className="w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm" placeholder="you@company.co.uk" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Company</label>
                <input type="text" className="w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm" placeholder="Company name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">What do you want to fix?</label>
                <textarea className="w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm" rows={4} placeholder="CRM sync, dashboards, automations..." />
              </div>
              <button className="btn-primary w-full rounded-full px-5 py-3 text-sm font-medium shadow-glow">Send Enquiry</button>
            </form>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-white/80 backdrop-blur border border-black/5 p-5 sm:p-6 md:p-8 shadow-card">
              <h2 className="text-xl sm:text-2xl font-semibold">What happens next</h2>
              <ul className="mt-4 space-y-3 text-sm text-[var(--foreground)]/70">
                <li className="flex gap-2"><span className="mt-1.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />We review your systems and workflows.</li>
                <li className="flex gap-2"><span className="mt-1.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />We identify the quick wins first.</li>
                <li className="flex gap-2"><span className="mt-1.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />We share clear next steps and transparent pricing.</li>
              </ul>
              <p className="mt-6 text-sm text-[var(--foreground)]/60">Prefer email? Contact support@datalift.co.uk</p>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
