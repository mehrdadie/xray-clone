'use client';

import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';

export default function ProductsPage() {
  return (
    <PageShell
      title="Products"
      subtitle="Dashboards, sync tools, and monitors — built for UK businesses that want their systems to work together without manual work."
    >
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {[
            {
              name: 'DL Dashboards',
              href: '/products/dl-dashboards',
              desc: 'Real-time dashboards pulling from Salesforce, Chargebee, Google Sheets, and more — all in one place.',
            },
            {
              name: 'DL Sync',
              href: '/products/dl-sync',
              desc: 'Automatic data sync between your CRM, marketing, and payment systems. No more copy-paste.',
            },
            {
              name: 'DL Monitor',
              href: '/products/dl-monitor',
              desc: 'Monitor your automations and integrations. Get alerts when something breaks before it costs you.',
            },
          ].map((product) => (
            <Reveal key={product.name}>
              <a
                href={product.href}
                className="block rounded-2xl bg-white p-4 sm:p-5 md:p-8 shadow-sm transition hover:shadow-md"
              >
                <h3 className="text-lg sm:text-xl font-semibold">{product.name}</h3>
                <p className="mt-2 sm:mt-3 text-sm sm:text-base text-[var(--foreground)]/80 leading-relaxed">{product.desc}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-8 md:py-16 bg-white/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold tracking-tight mb-3 md:mb-4">Built on what you already use</h2>
            <p className="max-w-3xl text-[var(--foreground)]/80 text-base sm:text-lg leading-relaxed">
              Our products layer on top of Salesforce, GoHighLevel, Chargebee, Google Sheets, and common SaaS stacks — no rip and replace.
            </p>
          </Reveal>
          <div className="mt-6 md:mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {['Salesforce', 'GoHighLevel', 'Chargebee', 'Google Sheets', 'n8n', 'Stripe', 'Zapier', 'Mailchimp'].map((tool) => (
              <Reveal key={tool}>
                <div className="rounded-2xl bg-white p-3 sm:p-4 text-center text-xs sm:text-sm font-medium shadow-sm">{tool}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
