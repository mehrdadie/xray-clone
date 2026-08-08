'use client';

import Link from 'next/link';

function FooterLinks({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="font-semibold text-white text-sm md:text-base mb-3 md:mb-4">{title}</h4>
      <ul className="space-y-2 md:space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="text-white/60 hover:text-white transition-colors text-sm">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const columns = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Terms & Conditions', href: '#' },
      { label: 'Privacy Policy', href: '#' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'DL Dashboards', href: '/products/dl-dashboards' },
      { label: 'DL Sync', href: '/products/dl-sync' },
      { label: 'DL Monitor', href: '/products/dl-monitor' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'DataLift Monthly', href: '/datalift-monthly' },
      { label: 'DataLift Hourly', href: '/datalift-hourly' },
      { label: 'Workshops', href: '/datalift-workshops' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Assessments', href: '/assessments' },
    ],
  },
];

const socials = [
  { label: 'LinkedIn', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'GitHub', href: '#' },
];

export default function SiteFooter() {
  return (
    <footer className="relative bg-[var(--foreground)] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--accent),_transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-10">
          <div className="lg:col-span-2">
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight">Your data, connected and working.</h3>
            <p className="mt-3 text-white/60 text-sm md:text-base leading-relaxed max-w-sm">
              Connect your CRM, sales, marketing, and payment systems. Build dashboards and AI tools that actually drive decisions.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-xs font-medium"
                  aria-label={s.label}
                >
                  {s.label[0]}
                </Link>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:col-span-4 gap-4 md:gap-6 text-sm">
            {columns.map((col) => (
              <FooterLinks key={col.title} title={col.title} links={col.links} />
            ))}
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 md:py-6 flex flex-col gap-4 items-center md:flex-row md:justify-between">
          <div className="text-white/60 text-sm">© DataLift 2026 — United Kingdom</div>
          <form
            className="flex w-full sm:w-auto gap-2"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="w-full sm:w-72 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/15 transition"
            />
            <button className="rounded-full bg-white px-4 py-2.5 text-sm font-medium text-[var(--foreground)] hover:bg-white/90 shrink-0 transition">
              →
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
