'use client';

import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';

export default function ProductsPage() {
  return (
    <PageShell
      title="Products"
      subtitle="Tools made for solved workflows — built for teams that already use the best platforms, and want them to actually work together."
    >
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: 'XR SEARCH',
              href: 'https://search.xray.tech/',
              desc: 'Search across your connected tools and documents without switching tabs.',
            },
            {
              name: 'XR DEBRIEF',
              href: '/products/xr-debrief',
              desc: 'Turn calls and meetings into structured notes, actions, and follow-ups automatically.',
            },
            {
              name: 'XR GUARDIAN',
              href: '/products/xr-guardian',
              desc: 'Monitor automations, catch errors, and keep workflows running without manual checking.',
            },
          ].map((product) => (
            <Reveal key={product.name}>
              <a
                href={product.href}
                className="block rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-md"
              >
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="mt-3 text-[var(--foreground)]/80 leading-relaxed">{product.desc}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white/40">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Built on what you already use</h2>
            <p className="max-w-3xl text-[var(--foreground)]/80 text-lg leading-relaxed">
              Our products layer on top of Salesforce, QuickBooks, NetSuite, and common SaaS stacks — no rip and replace.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Salesforce', 'QuickBooks', 'NetSuite', 'SAP'].map((tool) => (
              <Reveal key={tool}>
                <div className="rounded-2xl bg-white p-4 text-center text-sm font-medium shadow-sm">{tool}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
