'use client';

import Link from 'next/link';

function FooterLinks({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="font-semibold text-white text-sm md:text-base">{title}</h4>
      <ul className="mt-2 md:mt-3 space-y-1.5 md:space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="text-white/70 hover:text-white transition-colors text-sm">
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

export default function SiteFooter() {
  return (
    <footer className="bg-[var(--foreground)] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 md:gap-10">
          <div className="md:col-span-1 sm:col-span-2">
            <h3 className="text-base md:text-xl font-semibold">Your data, connected and working.</h3>
            <p className="mt-2 md:mt-3 text-white/70 text-sm md:text-base">Connect your CRM, sales, marketing, and payment systems. Build dashboards and AI tools that actually drive decisions.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-4 md:gap-6 text-sm sm:col-span-2">
            {columns.map((col) => (
              <FooterLinks key={col.title} title={col.title} links={col.links} />
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 md:py-6 flex flex-col gap-4 items-center md:flex-row md:justify-between">
          <div className="text-white/70 text-sm">© DataLift 2026 — United Kingdom</div>
          <form className="flex w-full sm:w-auto gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="w-full sm:w-80 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <button className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[var(--foreground)] hover:bg-white/90 shrink-0">→</button>
          </form>
        </div>
      </div>
    </footer>
  );
}
