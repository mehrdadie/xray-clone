'use client';

import Link from 'next/link';

function FooterLinks({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="font-semibold text-white">{title}</h4>
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="text-white/70 hover:text-white transition-colors">
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
      { label: 'XR SEARCH', href: '/products/xr-search' },
      { label: 'XR DEBRIEF', href: '/products/xr-debrief' },
      { label: 'XR GUARDIAN', href: '/products/xr-guardian' },
      { label: 'XR ONBOARDING', href: '#' },
      { label: 'XR BLOB', href: '#' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'XRAY Monthly', href: '/xray-monthly' },
      { label: 'XRAY Hourly', href: '/xray-hourly' },
      { label: 'Content Creation', href: '/content-creation' },
      { label: 'Workshops', href: '/xray-workshops' },
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
      <div className="mx-auto max-w-7xl px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <h3 className="text-xl font-semibold">Your workflow, but smarter.</h3>
          <p className="mt-3 text-white/70">Hear from the humans at XRAY and learn how to get AI and automation working in your workflows.</p>
        </div>
        <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          {columns.map((col) => (
            <FooterLinks key={col.title} title={col.title} links={col.links} />
          ))}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/70 text-sm">© XRAY Tech, Inc. 2020 - Established 2020</div>
          <form className="flex w-full md:w-auto gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="w-full md:w-80 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <button className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[var(--foreground)] hover:bg-white/90">→</button>
          </form>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/company/xray-tech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white/70 hover:text-white transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@xraytech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-white/70 hover:text-white transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
